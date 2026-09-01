// Alle databasetoegang loopt hierlangs. Service role key, want de li_-tabellen
// hebben RLS aan zonder policies — de anon key krijgt niets terug.

import { CONFIG } from './config.js';

const BASIS_HEADERS = {
  apikey: CONFIG.serviceRoleKey,
  Authorization: `Bearer ${CONFIG.serviceRoleKey}`,
  'Content-Type': 'application/json',
};

async function verzoek(pad, opties = {}) {
  const antwoord = await fetch(`${CONFIG.supabaseUrl}/rest/v1${pad}`, {
    ...opties,
    headers: { ...BASIS_HEADERS, ...(opties.headers || {}) },
  });
  const tekst = await antwoord.text();
  if (!antwoord.ok) {
    throw new Error(`Supabase ${antwoord.status} op ${pad}: ${tekst.slice(0, 500)}`);
  }
  if (!tekst) return null;
  try {
    return JSON.parse(tekst);
  } catch {
    return tekst;
  }
}

const rpc = (naam, argumenten) =>
  verzoek(`/rpc/${naam}`, { method: 'POST', body: JSON.stringify(argumenten) });

// ── Lezen ────────────────────────────────────────────────────────────────────

/** Hoeveel invites en berichten mogen er vandaag nog? */
export async function haalQuota() {
  const rijen = await verzoek(
    `/li_quota?campaign_id=eq.${encodeURIComponent(CONFIG.campaignId)}&select=*`,
  );
  if (!rijen?.length) throw new Error(`Geen quota-rij voor campagne ${CONFIG.campaignId}.`);
  return rijen[0];
}

/** Wie is aan de beurt, en met welke stap? */
export const haalDueActions = (limiet = 50) =>
  rpc('li_due_actions', { p_campaign_id: CONFIG.campaignId, p_limit: limiet });

/** Scrapestatus van een reeks prospects opvragen. */
export async function haalScrapeStatus(prospectIds) {
  if (!prospectIds.length) return new Map();
  const lijst = prospectIds.map((id) => `"${id}"`).join(',');
  const rijen = await verzoek(
    `/li_prospects?id=in.(${encodeURIComponent(lijst)})&select=id,scraped_at,full_name,first_name,headline,company,location,error_count,status`,
  );
  return new Map(rijen.map((r) => [r.id, r]));
}

// ── Schrijven ────────────────────────────────────────────────────────────────

// Statuswijzigingen gaan ALTIJD via li_record_event(). Rechtstreeks schrijven op
// li_prospects mag enkel voor de scrapevelden hieronder. De whitelist is de rem.
const TOEGESTANE_KOLOMMEN = new Set([
  'profile_raw',
  'scraped_at',
  'full_name',
  'first_name',
  'headline',
  'company',
  'location',
]);

const VERBODEN = new Set([
  'status',
  'invite_sent_at',
  'connected_at',
  'msg1_sent_at',
  'fu1_sent_at',
  'fu2_sent_at',
  'replied_at',
  'ended_at',
  'error_count',
  'do_not_contact',
]);

/** Schrijft profieldata weg. Raakt nooit de status aan. */
export async function bewaarProfiel(prospectId, velden) {
  for (const kolom of Object.keys(velden)) {
    if (VERBODEN.has(kolom)) {
      throw new Error(`Kolom "${kolom}" hoort via li_record_event() te gaan, niet via een UPDATE.`);
    }
    if (!TOEGESTANE_KOLOMMEN.has(kolom)) {
      throw new Error(`Kolom "${kolom}" staat niet op de whitelist van bewaarProfiel().`);
    }
  }
  await verzoek(`/li_prospects?id=eq.${encodeURIComponent(prospectId)}`, {
    method: 'PATCH',
    body: JSON.stringify(velden),
    headers: { Prefer: 'return=minimal' },
  });
}

/** Status + auditlogboek in één transactie. Dit is de enige weg voor statuswijzigingen. */
export const registreerGebeurtenis = (prospectId, gebeurtenis, stap = null, detail = {}) =>
  rpc('li_record_event', {
    p_prospect_id: prospectId,
    p_event: gebeurtenis,
    p_step: stap,
    p_detail: detail,
  });

/** Fout op één prospect. Na 3 fouten valt de prospect vanzelf uit de wachtrij. */
export const registreerFout = (prospectId, bericht) =>
  registreerGebeurtenis(prospectId, 'error', null, { message: String(bericht).slice(0, 500) });
