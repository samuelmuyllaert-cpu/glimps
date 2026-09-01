// Configuratie: leest .env, valideert en geeft één bevroren CONFIG-object terug.
// Nooit credentials in code — alles komt uit de omgeving.

import { readFileSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const HIER = dirname(fileURLToPath(import.meta.url));
export const RUNNER_DIR = resolve(HIER, '..');
export const REPO_DIR = resolve(RUNNER_DIR, '..');

// Simpele .env-parser. Geen dependency nodig, en process.env wint altijd.
function laadEnvBestand(pad) {
  if (!existsSync(pad)) return;
  for (const regel of readFileSync(pad, 'utf8').split('\n')) {
    const schoon = regel.trim();
    if (!schoon || schoon.startsWith('#')) continue;
    const scheiding = schoon.indexOf('=');
    if (scheiding === -1) continue;
    const sleutel = schoon.slice(0, scheiding).trim();
    let waarde = schoon.slice(scheiding + 1).trim();
    if (
      (waarde.startsWith('"') && waarde.endsWith('"')) ||
      (waarde.startsWith("'") && waarde.endsWith("'"))
    ) {
      waarde = waarde.slice(1, -1);
    }
    if (process.env[sleutel] === undefined) process.env[sleutel] = waarde;
  }
}

laadEnvBestand(resolve(RUNNER_DIR, '.env'));
laadEnvBestand(resolve(REPO_DIR, '.env'));

function vereist(sleutel) {
  const waarde = process.env[sleutel];
  if (!waarde) {
    throw new Error(
      `Ontbrekende omgevingsvariabele ${sleutel}. Zet die in runner/.env — zie runner/.env.example.`,
    );
  }
  return waarde;
}

function getal(sleutel, standaard) {
  const rauw = process.env[sleutel];
  if (rauw === undefined || rauw === '') return standaard;
  const n = Number(rauw);
  if (!Number.isFinite(n)) throw new Error(`${sleutel} moet een getal zijn, kreeg "${rauw}".`);
  return n;
}

export const CONFIG = Object.freeze({
  supabaseUrl: vereist('SUPABASE_URL').replace(/\/+$/, ''),
  serviceRoleKey: vereist('SUPABASE_SERVICE_ROLE_KEY'),
  campaignId: vereist('LI_CAMPAIGN_ID'),
  // Fase 2 heeft deze nodig; in fase 1 mag hij ontbreken.
  anthropicKey: process.env.ANTHROPIC_API_KEY || null,
  tijdzone: process.env.LI_TIMEZONE || 'Europe/Brussels',
  werkdagStartUur: getal('LI_WORK_START_HOUR', 9),
  werkdagEindUur: getal('LI_WORK_END_HOUR', 18),
  pauzeMinSec: getal('LI_PAUSE_MIN_SECONDS', 30),
  pauzeMaxSec: getal('LI_PAUSE_MAX_SECONDS', 90),
});

// De anon key geeft hier niets terug: alle li_-tabellen hebben RLS zonder policies.
// Beter nu falen met een duidelijke zin dan straks op een lege wachtrij staren.
function rolUitSleutel(sleutel) {
  const delen = sleutel.split('.');
  if (delen.length !== 3) return null;
  try {
    return JSON.parse(Buffer.from(delen[1], 'base64url').toString('utf8')).role || null;
  } catch {
    return null;
  }
}

const rol = rolUitSleutel(CONFIG.serviceRoleKey);
if (rol && rol !== 'service_role') {
  throw new Error(
    `SUPABASE_SERVICE_ROLE_KEY bevat de rol "${rol}" in plaats van "service_role". ` +
      'Met de anon key krijg je geen enkele rij terug.',
  );
}
