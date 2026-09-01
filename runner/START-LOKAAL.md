# Fase 1 echt draaien — op je eigen machine

De runner heeft twee helften. De ene helft kan alleen bij jou draaien.

| Helft | Waar | Waarom |
|---|---|---|
| Supabase, wachtrij, opslag | overal | gewoon HTTP |
| **LinkedIn openen en lezen** | **alleen jouw machine** | de extensie praat met *jouw* Chrome, met *jouw* login |

Een sessie in de cloud (claude.ai/code) heeft geen toegang tot jouw browser.
Dat is geen instelling — die verbinding bestaat daar niet.

---

## Eenmalig opzetten — 5 minuten

**1. Claude Code lokaal**

```bash
npm install -g @anthropic-ai/claude-code
```

Of gebruik de desktop-app (Mac/Windows).

**2. Claude in Chrome-extensie**

Installeren, dan in Claude Code:

```
/chrome
```

Zet die op **"Enabled by default"**.

**3. Repo binnenhalen**

```bash
git clone https://github.com/samuelmuyllaert-cpu/glimps.git
cd glimps
git checkout claude/linkedin-outreach-runner-bim6st
```

**4. Sleutels**

```bash
cd runner
cp .env.example .env
```

Vul `SUPABASE_SERVICE_ROLE_KEY` in — de **service role** key, niet de anon key.
Te vinden in Supabase → Project Settings → API.

**5. Testen of de verbinding leeft**

```bash
node src/cli.js quota
```

Zie je de quotaregels? Dan staat alles goed.

---

## Elke run

**Chrome open, ingelogd op LinkedIn, ma–vr tussen 9u en 18u.**

Start Claude Code in de map `glimps/` en zeg:

```
Draai fase 1 van de LinkedIn-runner volgens runner/PLAYBOOK.md.
Begin met 3 profielen.
```

Wat er dan gebeurt:

1. Ik draai `scrape:plan` → krijg de wachtrij
2. Ik open elk profiel in **jouw** Chrome, lees de tekst
3. Ik pauzeer 30–90s tussen profielen
4. Ik schrijf per profiel meteen weg via `scrape:save`
5. Er wordt **niets** verstuurd — fase 1 is alleen lezen

Loginscherm of CAPTCHA? Ik stop en waarschuw je. Ik los dat nooit zelf op.

---

## Eerst prospects toevoegen

De wachtrij is nu leeg (0 prospects). Zonder rijen valt er niets te scrapen.

Losse URL:

```sql
select li_add_url('https://www.linkedin.com/in/iemand',
                  '0bc53c68-75b9-4ac0-852f-78245d1f0782',
                  'Bedrijfsnaam', 5);
```

Of een hele lijst in één keer met `li_import_prospects()` — die maakt de
bedrijven automatisch aan.

---

## Wat wél in de cloud kan

- **Fase 2** (personalisatie via de Claude API) — geen browser nodig
- Alle databasewerk, dashboards, importeren
- Code schrijven en testen voor fase 3 t/m 6

Alleen het **klikken en lezen op LinkedIn** blijft lokaal. Altijd.
