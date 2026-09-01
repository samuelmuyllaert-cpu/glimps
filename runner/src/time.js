// Kantooruren en willekeurige pauzes. Geen weekend, geen nacht.

import { CONFIG } from './config.js';

const WERKDAGEN = new Set(['Mon', 'Tue', 'Wed', 'Thu', 'Fri']);

export function lokaleDelen(datum = new Date()) {
  const delen = new Intl.DateTimeFormat('en-GB', {
    timeZone: CONFIG.tijdzone,
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(datum);
  const pak = (type) => delen.find((d) => d.type === type)?.value;
  return { dag: pak('weekday'), uur: Number(pak('hour')), minuut: Number(pak('minute')) };
}

// Geeft null als het mag, of een uitlegzin in het Nederlands als het niet mag.
export function buitenKantooruren(datum = new Date()) {
  const { dag, uur } = lokaleDelen(datum);
  if (!WERKDAGEN.has(dag)) return `het is weekend (${dag}) in ${CONFIG.tijdzone}`;
  if (uur < CONFIG.werkdagStartUur || uur >= CONFIG.werkdagEindUur) {
    return `het is ${String(uur).padStart(2, '0')}u in ${CONFIG.tijdzone}, buiten ${CONFIG.werkdagStartUur}–${CONFIG.werkdagEindUur}u`;
  }
  return null;
}

// Willekeurige pauze in seconden — nooit exact hetzelfde getal twee keer op rij.
export function willekeurigePauzeSeconden() {
  const { pauzeMinSec: min, pauzeMaxSec: max } = CONFIG;
  return Math.round(min + Math.random() * (max - min));
}
