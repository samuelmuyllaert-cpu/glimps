# Glimps LinkedIn-runner

Sequence-engine voor de campagne **Glimps BE/NL e-mailagenten**.
Status: **fase 1 — lezen**. Er wordt nog niets verstuurd.

---

## Hoe het in elkaar zit

Twee helften, bewust gescheiden:

| Deel | Wie | Wat |
|---|---|---|
| **Geheugen** | dit Node-script | praat met Supabase, bepaalt wie aan de beurt is, schrijft resultaten weg |
| **Handen** | Claude + claude-in-chrome | opent LinkedIn, leest profielen |

Het script raakt de browser nooit aan. Er zit geen Playwright, Puppeteer of
Selenium in — en dat blijft zo.

---

## Opzetten

```bash
cd runner
cp .env.example .env      # vul SUPABASE_SERVICE_ROLE_KEY in
node src/cli.js quota     # test of de verbinding werkt
```

Geen `npm install` nodig. Nul dependencies, Node 18+.

> De anon key werkt niet. Alle `li_`-tabellen hebben RLS aan zonder policies —
> dat is bewust, prospectdata hoort niet publiek te staan.

---

## Commando's

```bash
node src/cli.js quota                      # hoeveel mag er vandaag nog
node src/cli.js due --limit 20             # wie is aan de beurt, en met welke stap
node src/cli.js scrape:plan --limit 10     # maak een scrapeplan
node src/cli.js scrape:save work/x.json    # schrijf scraperesultaat weg
node src/cli.js error <id> "bericht"       # log een fout op één prospect
```

Vlaggen op `scrape:plan`:

- `--all` — ook profielen die al gescrapet zijn
- `--force` — negeer de kantoorurencontrole

Vlag op `scrape:save`:

- `--fill-empty` — vult **lege** naam-/headline-/bedrijfskolommen aan vanuit het
  profiel. Overschrijft nooit iets dat al ingevuld is. Standaard uit.

---

## Veiligheidsremmen in de code

- **`src/db.js`** — `bewaarProfiel()` heeft een kolom-whitelist. Een poging om
  `status`, `invite_sent_at`, `error_count` of een andere statuskolom te
  schrijven gooit een fout. Statuswijzigingen kunnen alleen via
  `li_record_event()`.
- **`src/time.js`** — `scrape:plan` weigert buiten ma–vr 9–18u (Europe/Brussels).
- **`src/cli.js`** — prospects op `replied`, `completed`, `withdrawn`, `skipped`
  of `failed` worden overgeslagen, ook bij het opslaan.
- **Pauzes** — elk profiel krijgt een eigen willekeurige pauze van 30–90s mee.

---

## Draaiboek

Zie [`PLAYBOOK.md`](./PLAYBOOK.md) — de stap-voor-stap voor een run.

---

## Volgende fases

| Fase | Wat | Status |
|---|---|---|
| 1 | Profielen lezen | **gebouwd** |
| 2 | Personaliseren via Claude API → `li_messages`, `approved = false` | nog niet |
| 3 | Invites, start op 3/dag | nog niet |
| 4 | Berichten en follow-ups (alleen `approved = true`) | nog niet |
| 5 | Reply-detectie — moet live zijn vóór fase 4 | nog niet |
| 6 | Fallback naar andere decision maker | nog niet |

Niet vooruitbouwen.
