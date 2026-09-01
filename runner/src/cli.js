#!/usr/bin/env node
// Ingang van de runner. Houdt configuratiefouten kort en leesbaar in plaats van
// een stacktrace over het scherm te gooien.

try {
  await import('./run.js');
} catch (e) {
  process.stderr.write(`\n✗ ${e.message}\n\n`);
  process.exit(1);
}
