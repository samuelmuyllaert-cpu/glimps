import { useState, useMemo } from "react";
import { Slider } from "@/components/ui/slider";

// ─── formatting helpers ───────────────────────────────────────────────────────

function fmtEur(n: number): string {
  const abs = Math.abs(Math.round(n));
  const formatted = abs.toLocaleString("nl-BE");
  if (n < 0) return "−€\u202f" + formatted;
  return "€\u202f" + formatted;
}
function fmtEurPos(n: number): string {
  if (n < 0) return "−€\u202f" + Math.abs(Math.round(n)).toLocaleString("nl-BE");
  return "+€\u202f" + Math.round(n).toLocaleString("nl-BE");
}
function fmtCents(n: number): string {
  return "€\u202f" + n.toFixed(2).replace(".", ",");
}
function fmtPct(n: number): string {
  return Math.round(n) + "%";
}
function fmtNum(n: number, decimals = 0): string {
  if (decimals > 0) return n.toFixed(decimals).replace(".", ",");
  return Math.round(n).toLocaleString("nl-BE");
}

const MONTHLY = 525;
const STARTUP = 1500;

const BILLING = [
  { label: "Per kwartaal",  months: 3,  total: 1575  },
  { label: "Per half jaar", months: 6,  total: 3150  },
  { label: "Per jaar",      months: 12, total: 6300  },
];

// ─── slider card ──────────────────────────────────────────────────────────────

function SliderCard({
  label, value, min, max, step, unit, onChange, accent,
}: {
  label: string; value: number; min: number; max: number;
  step: number; unit: string; onChange: (v: number) => void;
  accent?: "blue";
}) {
  const isBlue = accent === "blue";
  const display =
    unit === "€/maand" ? fmtEur(value)
    : unit === "€/u" ? "€\u202f" + value
    : unit === "%" ? value + "%"
    : value.toLocaleString("nl-BE") + "\u00a0" + unit;

  return (
    <div className={`rounded-2xl border p-5 bg-white ${isBlue ? "border-blue-300" : "border-zinc-200"}`}>
      <p className={`text-[10px] font-bold uppercase tracking-widest mb-3 ${isBlue ? "text-blue-500" : "text-zinc-400"}`}>
        {label}
      </p>
      <p className={`font-bold text-3xl mb-4 leading-none ${isBlue ? "text-blue-600" : "text-zinc-900"}`}
        style={{ fontFamily: "'DM Serif Display', serif" }}>
        {display}
      </p>
      <Slider
        value={[value]}
        min={min}
        max={max}
        step={step}
        onValueChange={([v]) => onChange(v)}
        className="w-full mb-2"
      />
      <p className="text-right text-xs text-zinc-400">{unit}</p>
    </div>
  );
}

// ─── metric card ──────────────────────────────────────────────────────────────

function MetricCard({
  label, value, sub1, sub2, dark, greenValue,
}: {
  label: string; value: string; sub1?: string; sub2?: string;
  dark?: boolean; greenValue?: boolean;
}) {
  return (
    <div className={`rounded-2xl p-6 border ${dark ? "bg-zinc-900 border-zinc-700" : "bg-white border-zinc-200"}`}>
      <p className={`text-xs font-semibold uppercase tracking-widest mb-3 ${dark ? "text-zinc-400" : "text-zinc-500"}`}>{label}</p>
      <p className={`text-4xl font-bold leading-none mb-2 ${dark ? "text-yellow-400" : greenValue ? "text-emerald-600" : "text-zinc-900"}`}
        style={{ fontFamily: "'DM Serif Display', serif" }}>
        {value}
      </p>
      {sub1 && <p className={`text-sm mt-1 ${dark ? "text-zinc-400" : "text-zinc-500"}`}>{sub1}</p>}
      {sub2 && <p className={`text-xs mt-0.5 ${dark ? "text-zinc-500" : "text-zinc-400"}`}>{sub2}</p>}
    </div>
  );
}

// ─── main ─────────────────────────────────────────────────────────────────────

export default function ROIChatbot() {
  const [billing, setBilling] = useState(1);

  const [chats, setChats] = useState(500);
  const [minPerTicket, setMinPerTicket] = useState(8);
  const [autoPct, setAutoPct] = useState(72);
  const [wage, setWage] = useState(18);
  const [extraRevenue, setExtraRevenue] = useState(5000);
  const [marginPct, setMarginPct] = useState(18);

  const [utmOpen, setUtmOpen] = useState(false);

  const c = useMemo(() => {
    const automated       = Math.round(chats * autoPct / 100);
    const freedHours      = automated * (minPerTicket / 60);
    const timeValue       = freedHours * wage;
    const revMargin       = extraRevenue * marginPct / 100;
    const monthBenefit    = timeValue + revMargin;
    const netMonthly      = monthBenefit - MONTHLY;
    const netMonth1       = monthBenefit - MONTHLY - STARTUP;
    const netYear1        = monthBenefit * 12 - MONTHLY * 12 - STARTUP;

    const cpcWorker       = (minPerTicket / 60) * wage;
    const cpcAI           = automated > 0 ? MONTHLY / automated : 0;
    const savingPerChat   = cpcWorker - cpcAI;

    const csPct           = monthBenefit > 0 ? (timeValue / monthBenefit) * 100 : 50;
    const revPct          = 100 - csPct;

    const hoursPerWeek    = freedHours / 4.3;
    const monitoringCost  = 8 * wage;
    const netSelfManage   = freedHours - 8;
    const selfRetain      = freedHours > 0 ? Math.max(0, (netSelfManage / freedHours) * 100) : 0;

    const monthly12 = Array.from({ length: 12 }, (_, i) =>
      monthBenefit * (i + 1) - MONTHLY * (i + 1) - STARTUP
    );
    const beMonth     = monthly12.findIndex(v => v >= 0);
    const dekkingOmzet = revMargin / MONTHLY * 100;

    return {
      automated, freedHours, timeValue, revMargin, monthBenefit,
      netMonthly, netMonth1, netYear1,
      cpcWorker, cpcAI, savingPerChat,
      csPct, revPct,
      hoursPerWeek, monitoringCost, netSelfManage, selfRetain,
      monthly12, beMonth, dekkingOmzet,
    };
  }, [chats, minPerTicket, autoPct, wage, extraRevenue, marginPct]);

  const billingLabel = BILLING[billing].label.toLowerCase();

  return (
    <div className="min-h-screen bg-[#F5F5F3]" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* ── 1. HEADER ──────────────────────────────────────────────────────── */}
      <header className="bg-zinc-900 px-6 py-8">
        <div className="max-w-5xl mx-auto flex items-start justify-between gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 leading-tight"
              style={{ fontFamily: "'DM Serif Display', serif" }}>
              ROI Calculator — AI Chatbot
            </h1>
            <p className="text-zinc-400 text-sm mt-2">
              Bereken jouw rendement in minder dan 2 minuten
            </p>
          </div>
          <div className="flex-shrink-0">
            <span className="inline-flex items-center gap-1.5 bg-yellow-400 text-zinc-900 text-xs font-bold px-3.5 py-1.5 rounded-full tracking-wide">
              Interactief model
            </span>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-10 space-y-8">

        {/* ── 2. INVESTERING & FACTURATIE ────────────────────────────────── */}
        <section className="bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-sm">
          <div className="px-6 pt-6 pb-2">
            <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 mb-5">Investering & facturatiekeuze</p>
          </div>
          <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-zinc-100">
            <div className="px-6 pb-6">
              <p className="text-xs text-zinc-500 mb-2">Eenmalige opstartkost</p>
              <p className="text-5xl font-bold text-zinc-900 mb-3" style={{ fontFamily: "'DM Serif Display', serif" }}>
                €&thinsp;1.500
              </p>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Setup, integraties, training &amp; go-live.<br />Betaald bij ondertekening.
              </p>
            </div>
            <div className="px-6 pb-6 pt-6 sm:pt-0">
              <p className="text-xs text-zinc-500 mb-3">Maandelijkse kost — kies facturatieritme</p>
              <div className="space-y-2 mb-4">
                {BILLING.map((b, i) => (
                  <button
                    key={b.label}
                    onClick={() => setBilling(i)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border text-sm font-medium transition-all ${
                      billing === i
                        ? "bg-yellow-400 border-yellow-400 text-zinc-900"
                        : "bg-zinc-50 border-zinc-200 text-zinc-700 hover:border-zinc-400"
                    }`}
                  >
                    <span>{b.label}</span>
                    <span className={`font-bold ${billing === i ? "text-zinc-900" : "text-zinc-500"}`}>
                      {fmtEur(b.total)}
                    </span>
                  </button>
                ))}
              </div>
              <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-4 text-xs text-zinc-500 leading-relaxed">
                Minimum engagement: 1 jaar. Na het eerste jaar maand-per-maand opzegbaar. De opstartkost €&thinsp;1.500 is niet terugvorderbaar.
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. AANNAMES ────────────────────────────────────────────────── */}
        <section>
          <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 mb-4">Aannames — pas aan naar jouw situatie</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <SliderCard label="Inkomende chats / tickets per maand" value={chats} min={100} max={2000} step={50} unit="gesprekken" onChange={setChats} />
            <SliderCard label="Gem. tijd per ticket" value={minPerTicket} min={3} max={25} step={1} unit="min" onChange={setMinPerTicket} />
            <SliderCard label="% automatisch afgehandeld" value={autoPct} min={40} max={90} step={1} unit="%" onChange={setAutoPct} />
            <SliderCard label="Uurloon CS-medewerker (bruto)" value={wage} min={14} max={35} step={1} unit="€/u" onChange={setWage} />
            <SliderCard label="Extra omzet gegenereerd door de bot" value={extraRevenue} min={500} max={25000} step={500} unit="€/maand" onChange={setExtraRevenue} accent="blue" />
            <SliderCard label="Brutomarge (%)" value={marginPct} min={5} max={50} step={1} unit="%" onChange={setMarginPct} />
          </div>
        </section>

        {/* ── 4. KOSTPRIJS PER GESPREK ───────────────────────────────────── */}
        <section className="rounded-2xl overflow-hidden shadow-sm border border-zinc-200">
          <div className="bg-zinc-900 px-6 py-4">
            <p className="text-sm font-bold text-white">Wat kost één gesprek — manueel vs. automatisch?</p>
          </div>
          <div className="bg-white">
            <div className="grid grid-cols-3 divide-x divide-zinc-100">
              {[
                { label: "Medewerker",            val: c.cpcWorker,     color: "text-red-500",     desc: `(${minPerTicket}\u00a0min ÷ 60) × €${wage}/u` },
                { label: "AI — Glimps",           val: c.cpcAI,         color: "text-emerald-600", desc: `€${MONTHLY} ÷ ${c.automated} auto-gesprekken` },
                { label: "Besparing per gesprek", val: c.savingPerChat, color: "text-yellow-500",  desc: `× ${c.automated}\u00a0gesprekken = ${fmtEur(c.savingPerChat * c.automated)}/m` },
              ].map(({ label, val, color, desc }) => (
                <div key={label} className="p-6 text-center">
                  <p className="text-xs text-zinc-400 uppercase tracking-widest mb-3">{label}</p>
                  <p className={`text-4xl font-bold ${color}`} style={{ fontFamily: "'DM Serif Display', serif" }}>
                    {fmtCents(val)}
                  </p>
                  <p className="text-[11px] text-zinc-400 mt-2 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
            <div className="px-6 pb-6 pt-2 space-y-3">
              {[
                { label: "Medewerker",  val: c.cpcWorker, max: c.cpcWorker, color: "bg-red-400" },
                { label: "AI (Glimps)", val: c.cpcAI,     max: c.cpcWorker, color: "bg-emerald-500" },
              ].map(({ label, val, max, color }) => {
                const pct = max > 0 ? Math.min(100, (val / max) * 100) : 0;
                return (
                  <div key={label} className="flex items-center gap-3">
                    <span className="w-24 text-xs text-zinc-500 text-right flex-shrink-0">{label}</span>
                    <div className="flex-1 bg-zinc-100 rounded-lg h-9 overflow-hidden">
                      <div className={`h-full ${color} rounded-lg transition-all duration-500 flex items-center px-3`}
                        style={{ width: pct + "%" }}>
                        <span className="text-white text-xs font-bold whitespace-nowrap">{fmtCents(val)}</span>
                      </div>
                    </div>
                    <span className="text-xs font-bold tabular-nums w-16 text-right">{fmtCents(val)}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 5. MAANDELIJKSE IMPACT ─────────────────────────────────────── */}
        <section>
          <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 mb-4">Maandelijkse impact — na go-live</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <MetricCard
              dark
              label="Vrijgekomen uren CS"
              value={fmtNum(c.freedHours, 1) + " uur"}
              sub1={`${c.automated} geautomatiseerde tickets`}
              sub2={`~${fmtNum(c.hoursPerWeek, 1)}u per week`}
            />
            <MetricCard
              label="Waarde vrijgekomen tijd"
              value={fmtEur(c.timeValue)}
              sub1="uren × uurloon"
            />
            <MetricCard
              label="Bot-omzet marge-aandeel"
              value={fmtEur(c.revMargin)}
              sub1={`${fmtEur(extraRevenue)} × ${marginPct}%`}
            />
            <MetricCard
              label="Netto ROI / maand"
              value={fmtEur(c.netMonthly)}
              sub1="totaal voordeel − €525"
              greenValue={c.netMonthly >= 0}
            />
          </div>
        </section>

        {/* ── 6. HOE BETAALT DE BOT ZICHZELF TERUG ──────────────────────── */}
        <section className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm">
          <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 mb-5">Hoe betaalt de bot zichzelf terug?</p>
          <div className="w-full h-9 rounded-xl overflow-hidden flex mb-4">
            <div
              className="bg-yellow-400 transition-all duration-500 flex items-center justify-center"
              style={{ width: c.csPct + "%" }}
            >
              {c.csPct > 15 && <span className="text-zinc-900 text-xs font-bold">{Math.round(c.csPct)}%</span>}
            </div>
            <div
              className="bg-emerald-500 transition-all duration-500 flex items-center justify-center"
              style={{ width: c.revPct + "%" }}
            >
              {c.revPct > 15 && <span className="text-white text-xs font-bold">{Math.round(c.revPct)}%</span>}
            </div>
          </div>
          <div className="flex flex-wrap gap-5 mb-6">
            {[
              { color: "bg-yellow-400", label: "Tijdsbesparing CS", val: fmtEur(c.timeValue) },
              { color: "bg-emerald-500", label: "Omzet marge-aandeel", val: fmtEur(c.revMargin) },
              { color: "bg-zinc-300", label: "Maandkost Glimps", val: fmtEur(MONTHLY) },
            ].map(({ color, label, val }) => (
              <div key={label} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${color} flex-shrink-0`} />
                <span className="text-sm text-zinc-600">{label} — <span className="font-semibold">{val}</span></span>
              </div>
            ))}
          </div>
          <div className={`rounded-xl p-4 border ${c.netMonthly >= 0 ? "bg-emerald-50 border-emerald-200" : "bg-red-50 border-red-200"}`}>
            <p className={`text-sm font-semibold ${c.netMonthly >= 0 ? "text-emerald-700" : "text-red-600"}`}>
              {c.netMonthly >= 0
                ? `Maandkost €${MONTHLY} volledig gedekt — netto overschot: ${fmtEur(c.netMonthly)}/maand`
                : `Nog niet break-even: tekort van ${fmtEur(Math.abs(c.netMonthly))}/maand`}
            </p>
          </div>
        </section>

        {/* ── 7. KOSTEN & OPBRENGSTEN TABEL ─────────────────────────────── */}
        <section>
          <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 mb-4">Kosten & opbrengsten — volledig overzicht</p>
          <div className="rounded-2xl overflow-hidden border border-zinc-200 shadow-sm">
            <table className="w-full text-sm bg-white">
              <thead>
                <tr className="border-b border-zinc-200">
                  <th className="text-left px-5 py-3 text-xs font-bold text-zinc-400 uppercase tracking-widest">Post</th>
                  <th className="text-right px-5 py-3 text-xs font-bold text-zinc-400 uppercase tracking-widest">Maand 1</th>
                  <th className="text-right px-5 py-3 text-xs font-bold text-zinc-400 uppercase tracking-widest">Per maand</th>
                  <th className="text-right px-5 py-3 text-xs font-bold text-zinc-400 uppercase tracking-widest">Jaar 1 totaal</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-zinc-50 border-b border-zinc-100">
                  <td className="px-5 py-2 text-[11px] font-bold text-zinc-400 uppercase tracking-widest" colSpan={4}>Opbrengsten</td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="px-5 py-3">Tijdsbesparing klantenservice</td>
                  <td className="px-5 py-3 text-right font-medium text-emerald-600">{fmtEur(c.timeValue)}</td>
                  <td className="px-5 py-3 text-right font-medium text-emerald-600">{fmtEur(c.timeValue)}</td>
                  <td className="px-5 py-3 text-right font-medium text-emerald-600">{fmtEur(c.timeValue * 12)}</td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="px-5 py-3">Extra omzet via bot — marge-aandeel</td>
                  <td className="px-5 py-3 text-right font-medium text-emerald-600">{fmtEur(c.revMargin)}</td>
                  <td className="px-5 py-3 text-right font-medium text-emerald-600">{fmtEur(c.revMargin)}</td>
                  <td className="px-5 py-3 text-right font-medium text-emerald-600">{fmtEur(c.revMargin * 12)}</td>
                </tr>
                <tr className="bg-zinc-50 border-b border-zinc-100">
                  <td className="px-5 py-2 text-[11px] font-bold text-zinc-400 uppercase tracking-widest" colSpan={4}>Investering</td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="px-5 py-3">Eenmalige opstartkost</td>
                  <td className="px-5 py-3 text-right font-medium text-red-500">{fmtEur(-STARTUP)}</td>
                  <td className="px-5 py-3 text-right text-zinc-400">—</td>
                  <td className="px-5 py-3 text-right font-medium text-red-500">{fmtEur(-STARTUP)}</td>
                </tr>
                <tr className="border-b border-zinc-200">
                  <td className="px-5 py-3">
                    Maandelijkse kost Glimps
                    <span className="ml-2 text-xs text-zinc-400">({billingLabel})</span>
                  </td>
                  <td className="px-5 py-3 text-right font-medium text-red-500">{fmtEur(-MONTHLY)}</td>
                  <td className="px-5 py-3 text-right font-medium text-red-500">{fmtEur(-MONTHLY)}</td>
                  <td className="px-5 py-3 text-right font-medium text-red-500">{fmtEur(-MONTHLY * 12)}</td>
                </tr>
                <tr className="bg-yellow-50 border-t-2 border-yellow-400">
                  <td className="px-5 py-4 font-bold text-zinc-900">Netto resultaat</td>
                  <td className={`px-5 py-4 text-right font-bold ${c.netMonth1 >= 0 ? "text-emerald-600" : "text-red-500"}`}>{fmtEurPos(c.netMonth1)}</td>
                  <td className={`px-5 py-4 text-right font-bold ${c.netMonthly >= 0 ? "text-emerald-600" : "text-red-500"}`}>{fmtEurPos(c.netMonthly)}</td>
                  <td className={`px-5 py-4 text-right font-bold ${c.netYear1 >= 0 ? "text-emerald-600" : "text-red-500"}`}>{fmtEurPos(c.netYear1)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 8. CUMULATIEF RENDEMENT 12 MAANDEN ────────────────────────── */}
        <section className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm">
          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Cumulatief rendement — 12 maanden</p>
              <p className="text-xs text-zinc-500">(tijdsbesparing + omzetmarge) × maand − €525 × maand − €1.500</p>
            </div>
            {c.beMonth >= 0 ? (
              <span className="flex-shrink-0 inline-flex items-center bg-emerald-50 border border-emerald-200 text-emerald-700 px-3 py-1.5 rounded-full text-xs font-bold">
                Break-even in maand {c.beMonth + 1}
              </span>
            ) : (
              <span className="flex-shrink-0 inline-flex items-center bg-red-50 border border-red-200 text-red-600 px-3 py-1.5 rounded-full text-xs font-bold">
                Geen break-even in jaar 1
              </span>
            )}
          </div>
          {(() => {
            const CHART_H = 180;
            const TOP = CHART_H * 0.55;
            const BOT = CHART_H * 0.45;
            const maxPos = Math.max(...c.monthly12.filter(v => v >= 0), 1);
            const maxNeg = Math.max(...c.monthly12.filter(v => v < 0).map(Math.abs), 1);
            return (
              <div>
                <div className="flex gap-1 mb-1">
                  {c.monthly12.map((val, i) => (
                    <div key={i} className="flex-1 text-center">
                      <span className={`text-[9px] font-bold tabular-nums ${val >= 0 ? "text-emerald-600" : "text-red-400"}`}>
                        {val >= 0 ? "+" : "−"}€{Math.abs(val) >= 1000
                          ? (Math.abs(val) / 1000).toFixed(1).replace(".", ",") + "k"
                          : Math.round(Math.abs(val))}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="relative w-full" style={{ height: CHART_H }}>
                  <div className="absolute left-0 right-0 h-px bg-zinc-200" style={{ top: TOP }} />
                  <div className="absolute inset-0 flex gap-1 items-stretch">
                    {c.monthly12.map((val, i) => {
                      const isBreak = i === c.beMonth;
                      const isPos = val >= 0;
                      const barH = isPos
                        ? Math.max(4, (val / maxPos) * TOP * 0.9)
                        : Math.max(4, (Math.abs(val) / maxNeg) * BOT * 0.9);
                      return (
                        <div key={i} className="flex-1 relative">
                          {isPos ? (
                            <div
                              className={`absolute left-0 right-0 rounded-t-lg transition-all duration-300 ${isBreak ? "bg-zinc-900" : "bg-yellow-400"}`}
                              style={{ bottom: BOT, height: barH }}
                            />
                          ) : (
                            <div
                              className="absolute left-0 right-0 rounded-b-lg bg-red-300 transition-all duration-300"
                              style={{ top: TOP + 1, height: barH }}
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="flex items-center justify-between mt-2 text-xs text-zinc-400 px-0.5">
                  <span>Start</span><span>Maand 6</span><span>Maand 12</span>
                </div>
                <div className="flex gap-4 mt-3">
                  {[
                    { color: "bg-yellow-400", label: "Positief" },
                    { color: "bg-red-300", label: "Negatief" },
                    { color: "bg-zinc-900", label: "Break-even" },
                  ].map(({ color, label }) => (
                    <span key={label} className="flex items-center gap-1.5 text-xs text-zinc-500">
                      <span className={`w-2.5 h-2.5 rounded-sm ${color} inline-block`} />{label}
                    </span>
                  ))}
                </div>
              </div>
            );
          })()}
        </section>

        {/* ── 9. UTM-TRACKING ────────────────────────────────────────────── */}
        <section className="rounded-2xl overflow-hidden shadow-sm border border-blue-200">
          <button
            onClick={() => setUtmOpen(o => !o)}
            className="w-full bg-blue-600 px-6 py-4 flex items-center justify-between text-left"
          >
            <p className="text-sm font-bold text-white">UTM-tracking — productaanbevelingen</p>
            <span className="text-white/70 text-lg">{utmOpen ? "−" : "+"}</span>
          </button>
          {utmOpen && (
            <div className="bg-white px-6 pt-6 pb-0">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-blue-100 mb-6">
                {[
                  { num: "1", label: "Bot stuurt productlink", code: "?utm_source=chatbot\n&utm_medium=aanbeveling" },
                  { num: "2", label: "Klant voegt toe aan mandje", code: "Shopify: sessie\nutm_source = chatbot" },
                  { num: "3", label: "Aankoop geregistreerd", code: "GA4: conversie\nbron = chatbot" },
                  { num: "4", label: "Maandrapport Glimps", code: null },
                ].map((step, i, arr) => (
                  <div key={step.num} className="p-4 md:px-5 relative">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                        {step.num}
                      </div>
                      <p className="text-xs font-semibold text-zinc-700 leading-tight">{step.label}</p>
                      {i < arr.length - 1 && (
                        <span className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 text-blue-300 text-lg font-bold">›</span>
                      )}
                    </div>
                    {step.code ? (
                      <pre className="text-[10px] bg-zinc-900 text-emerald-400 rounded-lg p-2.5 overflow-x-auto leading-relaxed font-mono whitespace-pre-wrap">
                        {step.code}
                      </pre>
                    ) : (
                      <p className="text-xs text-zinc-500 leading-relaxed">Aanbevelingen → toegevoegd → gekocht → euro omzet</p>
                    )}
                  </div>
                ))}
              </div>
              <div className="border-t border-zinc-100 grid grid-cols-3 divide-x divide-zinc-100">
                {[
                  { label: "Totale extra omzet via bot (bruto)", val: fmtEur(extraRevenue) },
                  { label: "Marge-aandeel", val: fmtEur(c.revMargin) },
                  { label: "Dekking maandkost via omzet", val: fmtPct(c.dekkingOmzet) },
                ].map(({ label, val }) => (
                  <div key={label} className="px-5 py-4">
                    <p className="text-xs text-zinc-400 mb-1">{label}</p>
                    <p className="text-xl font-bold text-zinc-900">{val}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* ── 10. DONE FOR YOU ───────────────────────────────────────────── */}
        <section>
          <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 mb-4">Done for you — vergelijking</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white border border-red-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-red-500 px-5 py-3.5">
                <p className="text-sm font-bold text-white">Zelf beheren / andere aanbieder</p>
              </div>
              <div className="divide-y divide-zinc-100">
                {[
                  { label: "Technische opzet & integraties",              val: "Externe developer nodig",              red: true },
                  { label: "Maandelijkse monitoring & bijsturing",        val: "6–10u/maand",                          red: true },
                  { label: "Kostprijs monitoring (intern uurloon)",       val: fmtEur(-c.monitoringCost) + "/maand",   red: true },
                  { label: "Content-updates bij producten & collecties",  val: "5u/maand",                             red: true },
                  { label: "Netto tijdwinst na eigen botbeheer",          val: fmtNum(c.netSelfManage, 1) + "u netto", red: false },
                ].map(({ label, val, red }) => (
                  <div key={label} className="flex items-start justify-between gap-4 px-5 py-3">
                    <span className="text-sm text-zinc-600">{label}</span>
                    <span className={`text-sm font-semibold whitespace-nowrap ${red ? "text-red-500" : "text-zinc-900"}`}>{val}</span>
                  </div>
                ))}
              </div>
              <div className="px-5 py-3 bg-red-50 border-t border-red-100">
                <p className="text-xs text-red-600 font-medium">Reële tijdwinst per maand — ~{fmtPct(c.selfRetain)} behoudt</p>
              </div>
            </div>
            <div className="bg-white border border-emerald-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-emerald-600 px-5 py-3.5">
                <p className="text-sm font-bold text-white">Glimps — volledig "done for you"</p>
              </div>
              <div className="divide-y divide-zinc-100">
                {[
                  { label: "Technische opzet & integraties",             val: "Inbegrepen" },
                  { label: "Maandelijkse monitoring & fine-tuning",      val: "Inbegrepen" },
                  { label: "Kostprijs monitoring voor jullie team",      val: "€0" },
                  { label: "Content-updates bij producten & collecties", val: "Inbegrepen" },
                  { label: "Netto tijdwinst na Glimps-beheer",           val: fmtNum(c.freedHours, 1) + "u — 100% vrij" },
                ].map(({ label, val }) => (
                  <div key={label} className="flex items-start justify-between gap-4 px-5 py-3">
                    <span className="text-sm text-zinc-600">{label}</span>
                    <span className="text-sm font-semibold text-emerald-600 whitespace-nowrap">{val}</span>
                  </div>
                ))}
              </div>
              <div className="px-5 py-3 bg-emerald-50 border-t border-emerald-100">
                <p className="text-xs text-emerald-700 font-medium">Reële tijdwinst per maand — {fmtNum(c.freedHours, 1)}u — 100% behoudt</p>
              </div>
            </div>
          </div>
          <div className="mt-4 bg-zinc-900 rounded-2xl p-6">
            <p className="text-sm text-zinc-300 leading-relaxed">
              <span className="text-white font-semibold">Het kernpunt:</span> Stel dat de bot {fmtNum(c.freedHours, 1)} uur per maand vrijmaakt — die winst is alleen reëel als niemand die uren terugstopt in het beheren van de bot. Bij zelfbeheer gaat gemakkelijk 6–10 uur per maand verloren aan monitoring en updates. Glimps regelt alles proactief: jullie merken de bot enkel wanneer hij waarde levert.
            </p>
          </div>
        </section>

        {/* ── 11. HOE METEN WE DIT ───────────────────────────────────────── */}
        <section>
          <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 mb-4">Hoe meten we dit — na de interne demo & go-live?</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white border border-zinc-200 rounded-2xl p-5 shadow-sm">
              <p className="text-sm font-bold text-zinc-900 mb-3">Tijdsbesparing CS</p>
              <ul className="space-y-2">
                {[
                  "Ons platform: exact aantal automatisch afgehandelde gesprekken per maand",
                  "Jouw klantenservice-platform: vergelijk tickets voor en na go-live",
                  "Nulmeting nu al: CS-team noteert minuten per ticket als referentie",
                  "Formule: (auto-gesprekken × min/ticket ÷ 60) × uurloon = euro-besparing",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-zinc-600">
                    <span className="text-zinc-400 flex-shrink-0">·</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-zinc-200 rounded-2xl p-5 shadow-sm">
              <p className="text-sm font-bold text-zinc-900 mb-3">Productaanbevelingen via bot (UTM)</p>
              <ul className="space-y-2">
                {[
                  <span key="a">Elke productlink bevat <code className="bg-zinc-100 px-1 rounded text-xs">?utm_source=chatbot&utm_medium=aanbeveling</code></span>,
                  "Shopify: filter sessies op UTM",
                  "GA4: conversie-rapport, filter chatbot-bron",
                  "Maandrapport Glimps: aanbevelingen → toegevoegd → gekocht → euro omzet",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-zinc-600">
                    <span className="text-zinc-400 flex-shrink-0">·</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-zinc-200 rounded-2xl p-5 shadow-sm sm:col-span-2">
              <p className="text-sm font-bold text-zinc-900 mb-4">Maandrapport Glimps</p>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                {[
                  "Totaal gesprekken vs. automatisch opgelost",
                  "Top-10 meest gestelde vragen",
                  "Productaanbevelingen-tracking",
                  "Escalaties naar jouw klantenservice-platform",
                  "Aanbevelingen voor volgende maand",
                ].map((item, i) => (
                  <div key={i} className="flex gap-2">
                    <div className="w-5 h-5 rounded-full bg-zinc-900 text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <p className="text-xs text-zinc-600 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 12. FOOTER NOTE ────────────────────────────────────────────── */}
        <section className="bg-zinc-900 rounded-2xl p-6">
          <p className="text-xs font-bold text-yellow-400 uppercase tracking-widest mb-3">Methodologie</p>
          <p className="text-sm text-zinc-300 leading-relaxed">
            Alle opbrengsten worden berekend op het marge-aandeel van de omzet, niet op brutoomzet. De ROI-cijfers zijn schattingen op basis van de ingevulde waarden. Eens live zijn de opbrengsten exact meetbaar via UTM-tags en maandelijkse rapportage van Glimps.
          </p>
        </section>

      </div>
    </div>
  );
}
