# Playbook — Fase 1: profielen lezen

Dit is wat Claude stap voor stap doet tijdens een fase 1-run.
**Er wordt in deze fase niets verstuurd.** Geen invites, geen berichten.

---

## Voor je begint

- Chrome open, Samuel ingelogd op LinkedIn.
- Claude in Chrome-extensie actief, `/chrome` op "Enabled by default".
- `runner/.env` ingevuld met de **service role key**.
- Het is **ma–vr tussen 9u en 18u** (Europe/Brussels). Anders: niet draaien.

---

## Stap 1 — Plan ophalen

```bash
cd runner
node src/cli.js scrape:plan --limit 10 > work/plan.json
```

Het plan bevat per profiel: `prospect_id`, `linkedin_url`, `naam` en
`pauze_na_seconden`. Het script slaat profielen over die al gescrapet zijn.

**Leeg plan?** Klaar. Niets te doen.

---

## Stap 2 — Per profiel

Voor elk profiel in het plan, in volgorde:

1. `navigate` naar de `linkedin_url`.
2. `get_page_text` — geen screenshot. Screenshots kosten te veel tokens.
3. Uit de tekst halen:
   - `headline`, `locatie`, `about` (Info-sectie)
   - `huidige_functie` en `bedrijf`
   - `connectiegraad` — `1e`, `2e` of `3e`
   - `gemeenschappelijke_connecties`
   - `ervaring` — lijst van functies
4. `navigate` naar `<linkedin_url>/recent-activity/all/`, opnieuw `get_page_text`,
   en de laatste **3 posts** oppikken (tekst + datum).
5. Wachten: `pauze_na_seconden` uit het plan. Nooit twee keer dezelfde pauze.

**Gebruik `browser_batch`** om navigeren en tekst lezen in één ronde te doen.

### Stoppen

Zie je een **loginscherm, verificatie of CAPTCHA** → **direct stoppen**.
Niet inloggen, niet oplossen. Samuel waarschuwen, run afbreken.

### Eén profiel lukt niet

Ga door met de volgende. Zet in het resultaat `"ok": false` met een korte
Nederlandse foutboodschap. Het script logt dat via `li_record_event('error')`.
Na 3 fouten valt de prospect vanzelf uit de wachtrij.

---

## Stap 3 — Resultaat wegschrijven

Schrijf `work/resultaat.json`:

```json
{
  "resultaten": [
    {
      "prospect_id": "uuid-uit-het-plan",
      "ok": true,
      "profiel": {
        "headline": "Zaakvoerder bij Voorbeeld BV",
        "locatie": "Brugge, Vlaanderen, België",
        "about": "…",
        "huidige_functie": "Zaakvoerder",
        "bedrijf": "Voorbeeld BV",
        "connectiegraad": "2e",
        "gemeenschappelijke_connecties": 4,
        "ervaring": [{ "functie": "…", "bedrijf": "…", "periode": "…" }],
        "recente_posts": [{ "datum": "2 weken", "tekst": "…" }],
        "rauwe_tekst": "volledige get_page_text-uitvoer"
      }
    },
    {
      "prospect_id": "uuid",
      "ok": false,
      "fout": "profielpagina gaf geen Info-sectie terug"
    }
  ]
}
```

Dan:

```bash
node src/cli.js scrape:save work/resultaat.json
```

Schrijf **liefst per profiel meteen weg**, niet pas aan het eind van de run.
Crasht er iets bij nummer 13, dan pikt de volgende run op bij 14.

---

## Wat er nooit gebeurt in fase 1

- Geen `Connectie maken` klikken.
- Geen `Bericht` openen.
- Geen `UPDATE li_prospects` op statuskolommen — dat kan het script ook niet,
  de whitelist in `src/db.js` blokkeert het.
- Geen Playwright, Puppeteer of Selenium. Alles via claude-in-chrome.
