#!/usr/bin/env node
// Glimps LinkedIn-runner — Fase 1: lezen.
//
// Dit script raakt de browser niet aan. Het browserwerk doet Claude zelf via de
// claude-in-chrome-extensie (zie runner/PLAYBOOK.md). Dit script is het geheugen:
// het zegt welke profielen aan de beurt zijn en schrijft het resultaat weg.

import { mkdirSync, writeFileSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { CONFIG, RUNNER_DIR } from './config.js';
import { log } from './log.js';
import { buitenKantooruren, willekeurigePauzeSeconden } from './time.js';
import {
  haalQuota,
  haalDueActions,
  haalScrapeStatus,
  bewaarProfiel,
  registreerFout,
} from './db.js';

const WERKMAP = resolve(RUNNER_DIR, 'work');
const NIET_AANRAKEN = new Set(['replied', 'completed', 'withdrawn', 'skipped', 'failed']);

function vlag(argumenten, naam, standaard = null) {
  const index = argumenten.indexOf(`--${naam}`);
  if (index === -1) return standaard;
  const volgende = argumenten[index + 1];
  return volgende && !volgende.startsWith('--') ? volgende : true;
}

// ── quota ────────────────────────────────────────────────────────────────────

async function toonQuota() {
  const q = await haalQuota();
  log.kop('Quota vandaag');
  log.regel(`  Invites  : ${q.invites_remaining_today} over  (vandaag ${q.invites_today}, 7 dagen ${q.invites_last_7d}/${q.weekly_invite_limit})`);
  log.regel(`  Berichten: ${q.messages_remaining_today} over  (vandaag ${q.messages_today}/${q.daily_message_limit})`);
  process.stdout.write(`${JSON.stringify(q, null, 2)}\n`);
}

// ── due ──────────────────────────────────────────────────────────────────────

async function toonDue(argumenten) {
  const limiet = Number(vlag(argumenten, 'limit', 20));
  const rijen = await haalDueActions(limiet);
  log.kop(`Aan de beurt (${rijen.length})`);
  for (const r of rijen) {
    log.regel(`  ${r.next_step.padEnd(17)} ${(r.full_name || '?').padEnd(28)} ${r.company || ''}`);
  }
  process.stdout.write(`${JSON.stringify(rijen, null, 2)}\n`);
}

// ── scrape:plan ──────────────────────────────────────────────────────────────

async function maakScrapePlan(argumenten) {
  const forceren = Boolean(vlag(argumenten, 'force', false));
  const alles = Boolean(vlag(argumenten, 'all', false));
  const limiet = Number(vlag(argumenten, 'limit', 20));

  const reden = buitenKantooruren();
  if (reden && !forceren) {
    log.waarschuwing(`Niets gepland: ${reden}. Gebruik --force om dit te negeren.`);
    process.stdout.write(`${JSON.stringify({ profielen: [], reden }, null, 2)}\n`);
    return;
  }
  if (reden) log.waarschuwing(`Buiten kantooruren (${reden}) — doorgezet met --force.`);

  const due = await haalDueActions(limiet);
  if (!due.length) {
    log.info('Geen prospects aan de beurt. Wachtrij is leeg.');
    process.stdout.write(`${JSON.stringify({ profielen: [] }, null, 2)}\n`);
    return;
  }

  const status = await haalScrapeStatus(due.map((r) => r.prospect_id));
  const teDoen = due.filter((r) => {
    const rij = status.get(r.prospect_id);
    if (!rij) return false;
    if (NIET_AANRAKEN.has(rij.status)) return false;
    return alles || !rij.scraped_at;
  });

  const plan = {
    fase: 1,
    doel: 'profiel lezen en opslaan — er wordt niets verstuurd',
    gemaakt_op: new Date().toISOString(),
    campagne_id: CONFIG.campaignId,
    aantal: teDoen.length,
    profielen: teDoen.map((r, i) => ({
      volgnummer: i + 1,
      prospect_id: r.prospect_id,
      linkedin_url: r.linkedin_url,
      naam: r.full_name,
      voornaam: r.first_name,
      headline: r.headline,
      bedrijf: r.company,
      huidige_status: r.current_status,
      pauze_na_seconden: willekeurigePauzeSeconden(),
    })),
  };

  mkdirSync(WERKMAP, { recursive: true });
  const pad = resolve(WERKMAP, `plan-${plan.gemaakt_op.replace(/[:.]/g, '-')}.json`);
  writeFileSync(pad, `${JSON.stringify(plan, null, 2)}\n`);

  log.kop(`Scrapeplan: ${plan.aantal} profiel(en)`);
  for (const p of plan.profielen) {
    log.regel(`  ${String(p.volgnummer).padStart(2)}. ${(p.naam || p.linkedin_url).padEnd(30)} pauze na: ${p.pauze_na_seconden}s`);
  }
  log.info(`Plan bewaard in ${pad}`);
  process.stdout.write(`${JSON.stringify(plan, null, 2)}\n`);
}

// ── scrape:save ──────────────────────────────────────────────────────────────

function leesInvoer(bron) {
  if (!bron || bron === '-') return readFileSync(0, 'utf8');
  return readFileSync(resolve(process.cwd(), bron), 'utf8');
}

async function bewaarScrapeResultaat(argumenten) {
  const vulLegeVelden = Boolean(vlag(argumenten, 'fill-empty', false));
  const bron = argumenten.find((a) => !a.startsWith('--'));
  const invoer = JSON.parse(leesInvoer(bron));
  const resultaten = invoer.resultaten || invoer.results || [];

  if (!Array.isArray(resultaten) || !resultaten.length) {
    log.waarschuwing('Geen resultaten in de invoer. Niets weggeschreven.');
    return;
  }

  const bestaand = await haalScrapeStatus(resultaten.map((r) => r.prospect_id));
  let bewaard = 0;
  let mislukt = 0;
  let overgeslagen = 0;

  // Direct na elke prospect wegschrijven. Crasht de run bij nummer 13, dan
  // pikt de volgende run op bij 14 — geen dubbel werk.
  for (const resultaat of resultaten) {
    const id = resultaat.prospect_id;
    const rij = bestaand.get(id);
    const naam = rij?.full_name || id;

    if (!rij) {
      log.fout(`${id} bestaat niet in deze campagne — overgeslagen.`);
      overgeslagen += 1;
      continue;
    }
    if (NIET_AANRAKEN.has(rij.status)) {
      log.waarschuwing(`${naam} staat op "${rij.status}" — met rust gelaten.`);
      overgeslagen += 1;
      continue;
    }

    const gelukt = resultaat.ok !== false && !resultaat.fout && !resultaat.error;
    if (!gelukt) {
      const bericht = resultaat.fout || resultaat.error || 'onbekende fout tijdens scrapen';
      try {
        await registreerFout(id, bericht);
        log.fout(`${naam}: ${bericht} (fout ${rij.error_count + 1}/3 gelogd)`);
      } catch (e) {
        log.fout(`${naam}: fout kon niet gelogd worden — ${e.message}`);
      }
      mislukt += 1;
      continue;
    }

    const profiel = resultaat.profiel || resultaat.profile || {};
    const velden = {
      profile_raw: {
        ...profiel,
        bron: 'claude-in-chrome',
        linkedin_url: profiel.linkedin_url || rij.linkedin_url || null,
        opgehaald_op: new Date().toISOString(),
      },
      scraped_at: new Date().toISOString(),
    };

    // Alleen lege kolommen aanvullen, nooit overschrijven. Standaard uit.
    if (vulLegeVelden) {
      for (const kolom of ['full_name', 'first_name', 'headline', 'company', 'location']) {
        if (!rij[kolom] && profiel[kolom]) velden[kolom] = profiel[kolom];
      }
    }

    try {
      await bewaarProfiel(id, velden);
      bewaard += 1;
      log.ok(`${naam} — profiel opgeslagen (${(profiel.recente_posts || profiel.recent_posts || []).length} post(s))`);
    } catch (e) {
      mislukt += 1;
      log.fout(`${naam}: opslaan mislukt — ${e.message}`);
      await registreerFout(id, `opslaan mislukt: ${e.message}`).catch(() => {});
    }
  }

  log.kop('Resultaat');
  log.regel(`  Opgeslagen  : ${bewaard}`);
  log.regel(`  Mislukt     : ${mislukt}`);
  log.regel(`  Overgeslagen: ${overgeslagen}`);
}

// ── error ────────────────────────────────────────────────────────────────────

async function logFout(argumenten) {
  const [id, ...rest] = argumenten.filter((a) => !a.startsWith('--'));
  if (!id || !rest.length) throw new Error('Gebruik: error <prospect_id> "<bericht>"');
  const status = await registreerFout(id, rest.join(' '));
  log.ok(`Fout gelogd voor ${id}, status is nu "${status}".`);
}

// ── router ───────────────────────────────────────────────────────────────────

const HULP = `
Glimps LinkedIn-runner — fase 1 (lezen)

  node src/cli.js quota                        Hoeveel mag er vandaag nog
  node src/cli.js due [--limit 20]             Wie is aan de beurt
  node src/cli.js scrape:plan [--limit 20]     Maak een scrapeplan
                  [--all] [--force]            --all = ook al gescrapete, --force = negeer kantooruren
  node src/cli.js scrape:save <bestand|->      Schrijf scraperesultaat weg
                  [--fill-empty]               vul lege naam-/bedrijfskolommen aan
  node src/cli.js error <id> "<bericht>"       Log een fout op één prospect

Er wordt in fase 1 niets verstuurd. Zie runner/PLAYBOOK.md voor het browserdeel.
`;

const COMMANDOS = {
  quota: toonQuota,
  due: toonDue,
  'scrape:plan': maakScrapePlan,
  'scrape:save': bewaarScrapeResultaat,
  error: logFout,
};

const [commando, ...argumenten] = process.argv.slice(2);
const handeling = COMMANDOS[commando];

if (!handeling) {
  process.stderr.write(HULP);
  process.exit(commando ? 1 : 0);
}

handeling(argumenten).catch((e) => {
  log.fout(e.message);
  process.exit(1);
});
