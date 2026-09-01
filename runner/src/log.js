// Logmeldingen in het Nederlands, kort en scanbaar.
// Alles gaat naar stderr zodat stdout vrij blijft voor JSON-uitvoer.

const tijd = () =>
  new Date().toLocaleTimeString('nl-BE', { hour12: false, timeZone: 'Europe/Brussels' });

const schrijf = (teken, tekst) => process.stderr.write(`${tijd()} ${teken} ${tekst}\n`);

export const log = {
  info: (tekst) => schrijf('·', tekst),
  ok: (tekst) => schrijf('✓', tekst),
  waarschuwing: (tekst) => schrijf('!', tekst),
  fout: (tekst) => schrijf('✗', tekst),
  kop: (tekst) => process.stderr.write(`\n${tekst}\n${'─'.repeat(tekst.length)}\n`),
  regel: (tekst) => process.stderr.write(`${tekst}\n`),
};
