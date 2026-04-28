import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PKGS = [
  { n: "Growth",     p: 325 },
  { n: "Business",   p: 525 },
  { n: "Enterprise", p: 725 },
  { n: "Elite",      p: 925 },
];

const SETUPS = [500, 999, 1500, 2000];

function fmt(n: number): string {
  return "€\u202f" + Math.round(n).toLocaleString("nl-BE");
}

function fmtC(n: number): string {
  return "€\u202f" + n.toFixed(2).replace(".", ",");
}

function eu(n: number): string {
  if (n < 0) return "−€\u202f" + Math.abs(Math.round(n)).toLocaleString("nl-BE");
  return "€\u202f" + Math.round(n).toLocaleString("nl-BE");
}

export default function ROIChatbot() {
  const [cP, setCP] = useState(0);
  const [cS, setCS] = useState(1);

  const [chats, setChats] = useState(500);
  const [time, setTime] = useState(8);
  const [autVal, setAutVal] = useState(72);
  const [wage, setWage] = useState(18);
  const [botRev, setBotRev] = useState(5000);
  const [margin, setMargin] = useState(18);
  const [csStaff, setCSStaff] = useState(1);

  const [calc, setCalc] = useState<any>({});

  useEffect(() => {
    const pkgCost = PKGS[cP].p;
    const setupCost = SETUPS[cS];
    const aut = Math.round((chats * autVal) / 100);
    const hrs = (aut * time) / 60;
    const tv = hrs * wage * csStaff;
    const rm = botRev * (margin / 100);
    const tot = tv + rm;
    const netM = tot - pkgCost;
    const netM1 = tot - pkgCost - setupCost;
    const netY = tot * 12 - pkgCost * 12 - setupCost;
    const hC = (time / 60) * wage;
    const aC = aut > 0 ? pkgCost / aut : pkgCost / chats;
    const sC = Math.max(hC - aC, 0);
    const csPct = tot > 0 ? Math.round((tv / tot) * 100) : 50;
    const rvPct = 100 - csPct;
    const hPW = Math.round((hrs / 4.3) * 10) / 10;
    const mC = 8 * wage;
    const ns = Math.max(hrs - 8, 0);
    const sp = hrs > 0 ? Math.round((ns / hrs) * 100) : 0;
    const m12 = Array.from({ length: 12 }, (_, i) => tot * (i + 1) - pkgCost * (i + 1) - setupCost);
    const beM = m12.findIndex((v) => v >= 0) + 1;
    const apPct = hC > 0 ? Math.max(Math.min(Math.round((aC / hC) * 100), 100), 4) : 4;

    setCalc({ pkgCost, setupCost, aut, hrs, tv, rm, tot, netM, netM1, netY, hC, aC, sC, csPct, rvPct, hPW, mC, ns, sp, m12, beM, apPct });
  }, [cP, cS, chats, time, autVal, wage, botRev, margin, csStaff]);

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#F9FAFB", fontFamily: "-apple-system,'Helvetica Neue',Arial,sans-serif", color: "#111111" }}>
      <Navigation />

      {/* Content */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "36px 24px 72px", width: "100%", flex: 1, fontSize: "1.1em" }}>
        {/* 1. PACKAGES */}
        <Section label="Kies je pakket">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
            {PKGS.map((p, i) => (
              <div
                key={p.n}
                onClick={() => setCP(i)}
                style={{
                  background: cP === i ? "#FFF0F2" : "white",
                  border: `1.5px solid ${cP === i ? "#E74E4D" : "#E5E7EB"}`,
                  borderRadius: 12,
                  padding: "16px 12px",
                  cursor: "pointer",
                  textAlign: "center",
                  position: "relative",
                  transition: "all 0.15s",
                }}
              >
                {i === 1 && (
                  <div style={{ position: "absolute", top: -9, left: "50%", transform: "translateX(-50%)", background: "#E74E4D", color: "white", fontSize: 8, fontWeight: 700, padding: "2px 9px", borderRadius: 999, whiteSpace: "nowrap", textTransform: "uppercase", letterSpacing: "0.4px" }}>
                    Populair
                  </div>
                )}
                <div style={{ fontSize: 10, fontWeight: 700, color: cP === i ? "#C41E3A" : "#6B7280", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 5 }}>
                  {p.n}
                </div>
                <div style={{ fontSize: 22, fontWeight: 800, color: cP === i ? "#C41E3A" : "#111111", letterSpacing: "-0.5px", lineHeight: 1 }}>
                  €{p.p}
                  <sub style={{ fontSize: 10, fontWeight: 400, color: "#6B7280" }}>/mnd</sub>
                </div>
                <div style={{ fontSize: 9, color: "#6B7280", marginTop: 6, lineHeight: 1.5 }}>
                  {[250, 750, 1500, 3000][i].toLocaleString("nl-BE")} gesprekken
                  <br />
                  {["2.000", "10.000", "25.000", "50.000"][i]} pagina's
                  <br />
                  {["250", "500", "1.000", "2.000"][i]} file uploads
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* 2. SETUP */}
        <Section label="Kies je opstartkost (eenmalig)">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
            {SETUPS.map((s, i) => (
              <div
                key={s}
                onClick={() => setCS(i)}
                style={{
                  background: cS === i ? "#F3F4F6" : "white",
                  border: `1.5px solid ${cS === i ? "#111111" : "#E5E7EB"}`,
                  borderRadius: 12,
                  padding: 13,
                  cursor: "pointer",
                  textAlign: "center",
                  transition: "all 0.15s",
                }}
              >
                <div style={{ fontSize: 18, fontWeight: 800, color: "#111111", letterSpacing: "-0.3px" }}>
                  €{s.toLocaleString("nl-BE")}
                </div>
                <div style={{ fontSize: 9, color: "#6B7280", marginTop: 4, lineHeight: 1.4 }}>
                  {[
                    "Eenvoudige opzet, weinig integraties",
                    "Standaard opzet, basisintegraties",
                    "Uitgebreide opzet, meerdere integraties",
                    "Zeer geavanceerd, veel integraties",
                  ][i]}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* 3. SLIDERS */}
        <Section label="Jouw situatie — pas aan">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
            <SlCard label="Chats / tickets per maand" val={chats.toString()} onChange={(v) => setChats(Number(v))} min={50} max={3000} step={50} unit="gesprekken" />
            <SlCard label="Gem. tijd per ticket" val={time.toString()} onChange={(v) => setTime(Number(v))} min={3} max={25} step={1} unit="min" />
            <SlCard label="% automatisch afgehandeld" val={autVal + "%"} onChange={(v) => setAutVal(Number(v))} min={40} max={90} step={1} unit="%" />
            <SlCard label="CS-medewerkers (momenteel)" val={csStaff.toString()} onChange={(v) => setCSStaff(Number(v))} min={1} max={10} step={1} unit="personen" />
            <SlCard label="Uurloon CS-medewerker (bruto)" val={"€" + wage} onChange={(v) => setWage(Number(v))} min={14} max={35} step={1} unit="€/u" />
            <SlCard label="Extra omzet gegenereerd door de bot" val={"€\u202f" + botRev.toLocaleString("nl-BE")} onChange={(v) => setBotRev(Number(v))} min={500} max={25000} step={500} unit="€/maand" red />
            <SlCard label="Brutomarge (%)" val={margin + "%"} onChange={(v) => setMargin(Number(v))} min={5} max={60} step={1} unit="%" />
          </div>
        </Section>

        {/* 4. CPC */}
        <Section label="Kostprijs per gesprek — medewerker vs. AI">
          <div style={{ background: "white", border: "1px solid #E5E7EB", borderRadius: 12, overflow: "hidden" }}>
            <div style={{ background: "#111111", padding: "13px 20px" }}>
              <p style={{ fontSize: 14, fontWeight: 700, color: "white", letterSpacing: "-0.2px", margin: 0 }}>
                Wat kost een gesprek — manueel vs. automatisch?
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
              {[
                { lbl: "Medewerker", val: fmtC(calc.hC || 0), color: "#DC2626", desc: `${time} min x €${wage}/u` },
                { lbl: "AI — Glimps", val: fmtC(calc.aC || 0), color: "#059669", desc: `€${calc.pkgCost || 0} / ${calc.aut || 0} gesprekken` },
                { lbl: "Besparing per gesprek", val: fmtC(calc.sC || 0), color: "#D97706", desc: `x ${calc.aut || 0} = ${fmt((calc.sC || 0) * (calc.aut || 0))}/maand` },
              ].map((col) => (
                <div key={col.lbl} style={{ padding: "20px 16px", borderRight: col === PKGS[0] ? "1px solid #E5E7EB" : "none", textAlign: "center" }}>
                  <div style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.6px", color: "#6B7280", marginBottom: 9 }}>
                    {col.lbl}
                  </div>
                  <div style={{ fontSize: 38, fontWeight: 800, lineHeight: 1, marginBottom: 5, letterSpacing: "-1px", color: col.color }}>
                    {col.val}
                  </div>
                  <div style={{ fontSize: 10, color: "#6B7280", lineHeight: 1.4 }}>{col.desc}</div>
                </div>
              ))}
            </div>
            <div style={{ padding: "16px 20px", background: "#F9FAFB", borderTop: "1px solid #E5E7EB" }}>
              <div style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", color: "#6B7280", marginBottom: 9 }}>
                Vergelijking kostprijs
              </div>
              {[
                { nm: "Medewerker", val: fmtC(calc.hC || 0), w: 100, color: "#DC2626" },
                { nm: "AI (Glimps)", val: fmtC(calc.aC || 0), w: calc.apPct || 0, color: "#059669" },
              ].map((bar) => (
                <div key={bar.nm} style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 8 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, width: 76, flexShrink: 0 }}>{bar.nm}</div>
                  <div style={{ flex: 1, background: "#F3F4F6", borderRadius: 4, height: 27, overflow: "hidden" }}>
                    <div style={{ height: "100%", width: bar.w + "%", background: bar.color, borderRadius: 4, display: "flex", alignItems: "center", paddingLeft: 10, transition: "width 0.35s" }}>
                      <span style={{ fontSize: 10, fontWeight: 700, color: "white", whiteSpace: "nowrap" }}>{bar.val}</span>
                    </div>
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 800, width: 52, textAlign: "right", flexShrink: 0, color: bar.color }}>
                    {bar.val}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* 5. METRICS */}
        <Section label="Maandelijkse impact — na go-live">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
            <Met dark label="Vrijgekomen uren CS" val={Math.round(calc.hrs || 0) + "u"} sub={`${calc.aut || 0} geautomatiseerd`} sub2={`~${calc.hPW || 0}u per week`} />
            <Met label="Waarde vrijgekomen tijd" val={fmt(calc.tv || 0)} sub={`${Math.round(calc.hrs || 0)}u x €${wage}/u`} />
            <Met label="Bot-omzet marge-aandeel" val={fmt(calc.rm || 0)} sub={`€${botRev.toLocaleString("nl-BE")} x ${margin}%`} />
            <Met green={calc.netM >= 0} label="Netto ROI / maand" val={eu(calc.netM || 0)} sub={`na aftrek €${calc.pkgCost || 0}/maand`} />
          </div>
        </Section>

        {/* 6. SPLIT */}
        <Section>
          <div style={{ background: "white", border: "1px solid #E5E7EB", borderRadius: 12, padding: 20 }}>
            <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: "-0.3px", marginBottom: 14 }}>Hoe betaalt de bot zichzelf terug?</div>
            <div style={{ display: "flex", height: 34, borderRadius: 8, overflow: "hidden", marginBottom: 9 }}>
              <div style={{ width: (calc.csPct || 0) + "%", background: "#E74E4D", display: "flex", alignItems: "center", justifyContent: "center", transition: "width 0.35s", minWidth: 0 }}>
                {(calc.csPct || 0) > 12 && (
                  <span style={{ fontSize: 10, fontWeight: 700, color: "white", whiteSpace: "nowrap", padding: "0 8px" }}>
                    CS — {calc.csPct}%
                  </span>
                )}
              </div>
              <div style={{ width: (calc.rvPct || 0) + "%", background: "#111111", display: "flex", alignItems: "center", justifyContent: "center", transition: "width 0.35s", minWidth: 0 }}>
                {(calc.rvPct || 0) > 12 && (
                  <span style={{ fontSize: 10, fontWeight: 700, color: "white", whiteSpace: "nowrap", padding: "0 8px" }}>
                    Omzet — {calc.rvPct}%
                  </span>
                )}
              </div>
            </div>
            <div style={{ display: "flex", gap: 18, flexWrap: "wrap", marginBottom: 12 }}>
              {[
                { bg: "#E74E4D", lbl: "Tijdsbesparing CS", val: fmt(calc.tv || 0) },
                { bg: "#111111", lbl: "Omzet marge", val: fmt(calc.rm || 0) },
                { bg: "#E5E7EB", lbl: "Pakketkost", val: "€" + (calc.pkgCost || 0) },
              ].map((leg) => (
                <div key={leg.lbl} style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 10, color: "#6B7280" }}>
                  <div style={{ width: 8, height: 8, borderRadius: 2, background: leg.bg }} />
                  {leg.lbl} — <strong style={{ color: "#111111" }}>{leg.val}</strong>
                </div>
              ))}
            </div>
            <div
              style={{
                padding: "11px 15px",
                borderRadius: 8,
                fontSize: 11,
                fontWeight: 500,
                border: `1px solid ${calc.netM >= 0 ? "#A7F3D0" : "#FCA5A5"}`,
                background: calc.netM >= 0 ? "#ECFDF5" : "#FEF2F2",
                color: calc.netM >= 0 ? "#065F46" : "#991B1B",
              }}
            >
              {calc.netM >= 0
                ? <>Pakketkost volledig gedekt — netto overschot: <strong>{eu(calc.netM || 0)}/maand</strong></>
                : <>Nog niet break-even: tekort van <strong>{eu(Math.abs(calc.netM || 0))}/maand</strong></>}
            </div>
          </div>
        </Section>

        {/* 7. TABLE */}
        <Section label="Kosten & opbrengsten — volledig overzicht">
          <div style={{ background: "white", border: "1px solid #E5E7EB", borderRadius: 12, overflow: "hidden" }}>
            <div style={{ background: "#111111", display: "grid", gridTemplateColumns: "2.2fr 1fr 1fr 1fr", gap: 10, padding: "11px 20px" }}>
              {["Post", "Maand 1", "Per maand", "Jaar 1"].map((h) => (
                <span key={h} style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", color: "rgba(255,255,255,0.4)" }}>
                  {h}
                </span>
              ))}
            </div>
            <BSection>Opbrengsten</BSection>
            <BRow label="Tijdsbesparing klantenservice" c1={fmt(calc.tv || 0)} cm={fmt(calc.tv || 0)} cy={fmt((calc.tv || 0) * 12)} pos />
            <BRow label="Extra omzet via bot — marge-aandeel" c1={fmt(calc.rm || 0)} cm={fmt(calc.rm || 0)} cy={fmt((calc.rm || 0) * 12)} pos />
            <BSection>Investering</BSection>
            <BRow label="Opstartkost (eenmalig)" c1={"−€\u202f" + (calc.setupCost || 0).toLocaleString("nl-BE")} cm="—" cy={"−€\u202f" + (calc.setupCost || 0).toLocaleString("nl-BE")} neg />
            <BRow label={`Pakketkost — ${PKGS[cP].n} €${calc.pkgCost}/maand`} c1={"−€\u202f" + (calc.pkgCost || 0)} cm={"−€\u202f" + (calc.pkgCost || 0)} cy={"−€\u202f" + ((calc.pkgCost || 0) * 12).toLocaleString("nl-BE")} neg />
            <div style={{ background: "#FFF0F2", display: "grid", gridTemplateColumns: "2.2fr 1fr 1fr 1fr", gap: 10, padding: "14px 20px", borderTop: "2px solid #E74E4D" }}>
              <div style={{ fontSize: 12, fontWeight: 700 }}>Netto resultaat</div>
              {[calc.netM1 || 0, calc.netM || 0, calc.netY || 0].map((v, i) => (
                <div key={i} style={{ fontSize: 18, fontWeight: 800, letterSpacing: "-0.3px", color: v >= 0 ? "#059669" : "#DC2626" }}>
                  {eu(v)}
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* 8. CHART */}
        <Section>
          <div style={{ background: "white", border: "1px solid #E5E7EB", borderRadius: 12, padding: 20 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 16, flexWrap: "wrap", gap: 6 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, letterSpacing: "-0.3px", margin: 0 }}>Cumulatief rendement — 12 maanden</h3>
              <span style={{ fontSize: 11, color: "#6B7280" }}>
                {(calc.beM || 0) < 1 ? "Geen break-even in jaar 1" : `Break-even in maand ${calc.beM}`}
              </span>
            </div>
            <div style={{ display: "flex", gap: 4, alignItems: "flex-end", height: 110, marginBottom: 6 }}>
              {(calc.m12 || []).map((v: number, i: number) => {
                const mx2 = Math.max(...(calc.m12 || []).map((x: number) => Math.abs(x)), 1);
                const h = Math.max(Math.round(Math.abs(v) / mx2 * 96), 3);
                return (
                  <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 2, justifyContent: "flex-end" }}>
                    <div style={{ fontSize: 8, fontWeight: 700, textAlign: "center", color: v >= 0 ? "#059669" : "#DC2626" }}>
                      {(v >= 0 ? "+" : "−") + "€" + (Math.round(Math.abs(v) / 100) / 10).toFixed(1) + "k"}
                    </div>
                    <div style={{ width: "100%", height: h, background: v >= 0 ? "#059669" : "#FEE2E2", borderRadius: v >= 0 ? "3px 3px 0 0" : "0 0 3px 3px" }} />
                    <div style={{ fontSize: 8, color: "#6B7280" }}>M{i + 1}</div>
                  </div>
                );
              })}
            </div>
            <div style={{ borderTop: "1.5px solid #111111", display: "flex", justifyContent: "space-between", paddingTop: 5 }}>
              {["Start", "Maand 6", "Maand 12"].map((l) => (
                <span key={l} style={{ fontSize: 8, color: "#6B7280" }}>
                  {l}
                </span>
              ))}
            </div>
          </div>
        </Section>

        {/* 9. MISSED VALUE */}
        <Section label="De kost van uitstellen">
          <div style={{ background: "#111111", borderRadius: 12, padding: 22 }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: "white", letterSpacing: "-0.3px", marginBottom: 5 }}>
              Gederfde waarde per maand zonder bot
            </div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", marginBottom: 18, lineHeight: 1.5 }}>
              Elke maand zonder bot laat je waarde liggen. Dit zijn de gemiste opbrengsten op basis van jouw aannames.
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
              {[
                { val: fmt(calc.tv || 0), lbl: "Gemiste tijdsbesparing CS", day: "~" + fmt((calc.tv || 0) / 30) + "/dag" },
                { val: fmt(calc.rm || 0), lbl: "Gemiste omzet (marge-aandeel)", day: "~" + fmt((calc.rm || 0) / 30) + "/dag" },
                { val: fmt(calc.tot || 0), lbl: "Totaal gemiste waarde per maand", day: "~" + fmt((calc.tot || 0) / 30) + "/dag uitstellen kost je dit" },
              ].map((col) => (
                <div key={col.lbl} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, padding: 16, textAlign: "center" }}>
                  <div style={{ fontSize: 30, fontWeight: 800, color: "#E74E4D", letterSpacing: "-0.5px", marginBottom: 4 }}>
                    {col.val}
                  </div>
                  <div style={{ fontSize: 9, color: "rgba(255,255,255,0.5)", lineHeight: 1.4 }}>{col.lbl}</div>
                  <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", marginTop: 7, borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 7 }}>
                    {col.day}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* 10. DFY */}
        <Section label="Done for you — zelf beheren vs. Glimps">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {/* ZELF */}
            <div style={{ border: "1px solid #E5E7EB", borderRadius: 12, overflow: "hidden" }}>
              <div style={{ padding: "13px 18px", background: "#FEF2F2", borderBottom: "1px solid #FECACA", display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 15 }}>⚠</span>
                <h3 style={{ fontSize: 13, fontWeight: 700, color: "#991B1B", margin: 0 }}>Zelf beheren</h3>
              </div>
              <div style={{ background: "white", padding: "16px 18px" }}>
                {[
                  { lbl: "Technische opzet & integraties", val: "Externe developer", neg: true },
                  { lbl: "Maandelijkse monitoring", val: "6–10u/maand", neg: true },
                  { lbl: "Kostprijs monitoring (uurloon)", val: "−€\u202f" + Math.round(calc.mC || 0) + "/mnd", neg: true },
                  { lbl: "Content-updates bij collecties", val: "5u/maand", neg: true },
                  { lbl: "Netto tijdwinst na botbeheer", val: "~" + Math.round(calc.ns || 0) + "u netto", neg: false },
                ].map((row, idx) => (
                  <div key={idx} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "9px 0", borderBottom: idx < 4 ? "1px solid #E5E7EB" : "none", gap: 8 }}>
                    <span style={{ fontSize: 12, color: "#111111" }}>{row.lbl}</span>
                    <span style={{ fontSize: 13, fontWeight: 700, color: row.neg ? "#DC2626" : "#111111" }}>{row.val}</span>
                  </div>
                ))}
              </div>
              <div style={{ padding: "12px 18px", background: "#F9FAFB", borderTop: "2px solid #DC2626", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 11, fontWeight: 700 }}>Reële tijdwinst per maand</span>
                <span style={{ fontSize: 16, fontWeight: 800, color: "#DC2626" }}>~{calc.sp}%</span>
              </div>
            </div>

            {/* GLIMPS */}
            <div style={{ border: "1px solid #A7F3D0", borderRadius: 12, overflow: "hidden" }}>
              <div style={{ padding: "13px 18px", background: "#ECFDF5", borderBottom: "1px solid #A7F3D0", display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 15 }}>✓</span>
                <h3 style={{ fontSize: 13, fontWeight: 700, color: "#065F46", margin: 0 }}>Glimps — done for you</h3>
              </div>
              <div style={{ background: "white", padding: "16px 18px" }}>
                {[
                  { lbl: "Maandelijkse monitoring", val: "Inbegrepen" },
                  { lbl: "Kostprijs monitoring", val: "€0" },
                  { lbl: "Content-updates bij collecties", val: "Inbegrepen" },
                  { lbl: "Netto tijdwinst na Glimps-beheer", val: Math.round(calc.hrs || 0) + "u — 100%" },
                ].map((row, idx) => (
                  <div key={idx} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "9px 0", borderBottom: idx < 3 ? "1px solid #E5E7EB" : "none", gap: 8 }}>
                    <span style={{ fontSize: 12, color: "#111111" }}>{row.lbl}</span>
                    <span style={{ fontSize: 13, fontWeight: 700, color: "#059669" }}>{row.val}</span>
                  </div>
                ))}
              </div>
              <div style={{ padding: "12px 18px", background: "#F9FAFB", borderTop: "2px solid #059669", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 11, fontWeight: 700 }}>Reële tijdwinst per maand</span>
                <span style={{ fontSize: 16, fontWeight: 800, color: "#059669" }}>{Math.round(calc.hrs || 0)}u — 100%</span>
              </div>
            </div>
          </div>
          <div style={{ background: "#111111", borderRadius: 12, padding: "16px 20px", marginTop: 12 }}>
            <p style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, margin: 0 }}>
              <strong style={{ color: "#FCA5A5" }}>Het kernpunt:</strong> De tijdsbesparing is alleen reëel als niemand die uren terugstopt in het beheren van de bot. Bij zelfbeheer gaat gemakkelijk{" "}
              <strong style={{ color: "#FCA5A5" }}>6–10u/maand</strong> verloren. Glimps regelt alles proactief — jij merkt de bot enkel wanneer hij waarde levert.
            </p>
          </div>
        </Section>

        {/* FOOTER NOTE */}
        <div style={{ background: "white", border: "1px solid #E5E7EB", borderRadius: 12, padding: "18px 20px", color: "#6B7280", fontSize: 11, lineHeight: 1.7 }}>
          <strong style={{ color: "#111111" }}>Hoe werkt deze calculator?</strong> Tijdsbesparing = geautomatiseerde gesprekken × minuten per ticket × uurloon. Omzet-ROI = extra omzet × jouw brutomarge. Alle cijfers zijn schattingen op basis van jouw aannames. Eerst doorloop je een interne demo — pas daarna gaat de bot live. Eens live zijn alle resultaten exact meetbaar via UTM-tags en Google Analytics.
        </div>
      </div>

      <Footer />
    </div>
  );
}

function Section({ label, children }: { label?: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 32 }}>
      {label && (
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
          <span style={{ fontSize: 10, fontWeight: 700, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.7px", whiteSpace: "nowrap" }}>
            {label}
          </span>
          <div style={{ flex: 1, height: 1, background: "#E5E7EB" }} />
        </div>
      )}
      {children}
    </div>
  );
}

function SlCard({ label, val, onChange, min, max, step, unit, red }: any) {
  return (
    <div style={{ background: red ? "#FFF5F6" : "white", border: `1px solid ${red ? "#FECDD3" : "#E5E7EB"}`, borderRadius: 12, padding: 14 }}>
      <div style={{ fontSize: 9, fontWeight: 700, color: red ? "#C41E3A" : "#6B7280", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 4 }}>
        {label}
      </div>
      <div style={{ fontSize: 21, fontWeight: 800, color: red ? "#E74E4D" : "#111111", letterSpacing: "-0.5px", marginBottom: 7 }}>
        {val}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <input type="range" min={min} max={max} step={step} value={val.replace(/[^0-9]/g, "")} onChange={(e) => onChange(e.target.value)} style={{ flex: 1 }} />
        <span style={{ fontSize: 10, color: "#6B7280", whiteSpace: "nowrap" }}>{unit}</span>
      </div>
    </div>
  );
}

function Met({ label, val, sub, sub2, dark, green }: any) {
  return (
    <div
      style={{
        background: dark ? "#111111" : green ? "#ECFDF5" : "white",
        border: `1px solid ${dark ? "#111111" : green ? "#A7F3D0" : "#E5E7EB"}`,
        borderRadius: 12,
        padding: "18px 16px",
      }}
    >
      <div style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.6px", color: dark ? "rgba(255,255,255,0.4)" : green ? "#065F46" : "#6B7280", marginBottom: 5 }}>
        {label}
      </div>
      <div style={{ fontSize: 28, fontWeight: 800, color: dark ? "white" : green ? "#059669" : "#111111", lineHeight: 1, marginBottom: 4, letterSpacing: "-0.5px" }}>
        {val}
      </div>
      {sub && <div style={{ fontSize: 9, color: dark ? "rgba(255,255,255,0.35)" : "#6B7280" }}>{sub}</div>}
      {sub2 && <div style={{ fontSize: 10, fontWeight: 700, color: dark ? "rgba(255,255,255,0.5)" : "#6B7280", marginTop: 3 }}>{sub2}</div>}
    </div>
  );
}

function BSection({ children }: any) {
  return (
    <div style={{ padding: "6px 20px", background: "#F9FAFB", borderBottom: "1px solid #E5E7EB" }}>
      <span style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", color: "#6B7280" }}>{children}</span>
    </div>
  );
}

function BRow({ label, c1, cm, cy, pos, neg }: any) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "2.2fr 1fr 1fr 1fr", gap: 10, padding: "12px 20px", borderBottom: "1px solid #E5E7EB", alignItems: "center" }}>
      <div style={{ fontSize: 12, color: "#111111" }}>{label}</div>
      <div style={{ fontSize: 15, fontWeight: 800, color: pos ? "#059669" : neg ? "#DC2626" : "#111111" }}>{c1}</div>
      <div style={{ fontSize: cm === "—" ? 11 : 15, fontWeight: cm === "—" ? 400 : 800, color: pos ? "#059669" : neg ? "#DC2626" : "#6B7280" }}>
        {cm}
      </div>
      <div style={{ fontSize: 15, fontWeight: 800, color: pos ? "#059669" : neg ? "#DC2626" : "#111111" }}>{cy}</div>
    </div>
  );
}
