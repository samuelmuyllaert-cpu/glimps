import { useState, useMemo, useRef, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Slider } from "@/components/ui/slider";
import { ChevronDown, ChevronUp, ArrowRight, TrendingUp, Clock, ChevronRight } from "lucide-react";

// ─── helpers ────────────────────────────────────────────────────────────────

function fmt(n: number): string {
  if (n < 0) return "−€" + Math.abs(Math.round(n)).toLocaleString("nl-BE");
  return "€" + Math.round(n).toLocaleString("nl-BE");
}
function fmtPos(n: number): string {
  if (n < 0) return "−€" + Math.abs(Math.round(n)).toLocaleString("nl-BE");
  return "+€" + Math.round(n).toLocaleString("nl-BE");
}
function fmtNum(n: number): string {
  return Math.round(n).toLocaleString("nl-BE");
}
function fmtPct(n: number, decimals = 0): string {
  return decimals > 0 ? n.toFixed(1).replace(".", ",") + "%" : Math.round(n) + "%";
}

// ─── data ────────────────────────────────────────────────────────────────────

const PACKAGES = [
  { label: "Growth",     price: 325, desc: "500 gesprekken/m",   limit: 500      },
  { label: "Business",   price: 525, desc: "1.000 gesprekken/m", limit: 1000     },
  { label: "Pro",        price: 725, desc: "2.000 gesprekken/m", limit: 2000     },
  { label: "Enterprise", price: 925, desc: "Ongelimiteerd",      limit: Infinity },
];

const SETUPS = [
  { label: "Eenvoudig", price: 500  },
  { label: "Standaard", price: 999  },
  { label: "Complex",   price: 1500 },
  { label: "Maatwerk",  price: 2000 },
];

// ─── animated number ─────────────────────────────────────────────────────────

function AnimatedNumber({ value, prefix = "", className = "" }: { value: number; prefix?: string; className?: string }) {
  const [display, setDisplay] = useState(value);
  const [delta, setDelta] = useState<number | null>(null);
  const prevRef = useRef(value);
  const rafRef = useRef<number | null>(null);
  const deltaTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const prev = prevRef.current;
    const diff = value - prev;
    if (diff === 0) return;

    setDelta(diff);
    if (deltaTimer.current) clearTimeout(deltaTimer.current);
    deltaTimer.current = setTimeout(() => setDelta(null), 1800);

    const duration = 350;
    const start = performance.now();
    const from = prev;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    function tick(now: number) {
      const t = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(from + diff * ease));
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    prevRef.current = value;

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [value]);

  const formatted = display < 0
    ? "−€" + Math.abs(display).toLocaleString("nl-BE")
    : prefix + "€" + display.toLocaleString("nl-BE");

  return (
    <span className="relative inline-block">
      <span className={className}>{formatted}</span>
      {delta !== null && (
        <span
          key={delta}
          className={`absolute -right-2 top-0 translate-x-full text-sm font-semibold px-2 py-0.5 rounded-lg whitespace-nowrap
            animate-[fadeSlideUp_1.8s_ease-out_forwards]
            ${delta > 0 ? "text-emerald-600 bg-emerald-50" : "text-red-500 bg-red-50"}`}
        >
          {delta > 0 ? "+" : "−"}€{Math.abs(Math.round(delta)).toLocaleString("nl-BE")}
        </span>
      )}
    </span>
  );
}

// ─── slider row ──────────────────────────────────────────────────────────────

function SliderRow({
  label, hint, value, min, max, step, unit, onChange,
}: {
  label: string; hint: string; value: number; min: number; max: number;
  step: number; unit?: string; onChange: (v: number) => void;
}) {
  const displayValue = unit === "€"
    ? "€\u202f" + Math.round(value).toLocaleString("nl-BE")
    : fmtNum(value) + (unit ? "\u00a0" + unit : "");

  return (
    <div className="space-y-2.5">
      <div className="flex items-baseline justify-between gap-3">
        <label className="text-sm font-medium text-foreground/75 leading-tight">{label}</label>
        <span className="text-sm font-bold text-foreground tabular-nums whitespace-nowrap">{displayValue}</span>
      </div>
      <Slider
        value={[value]}
        min={min}
        max={max}
        step={step}
        onValueChange={([v]) => onChange(v)}
        className="w-full"
      />
      <p className="text-xs text-muted-foreground leading-relaxed">{hint}</p>
    </div>
  );
}

// ─── kpi card ─────────────────────────────────────────────────────────────────

function KpiCard({
  label, value, sub, variant = "default", size = "md",
}: {
  label: string; value: string; sub?: string;
  variant?: "default" | "positive" | "revenue" | "hero" | "negative";
  size?: "md" | "lg";
}) {
  const styles: Record<string, string> = {
    default:  "bg-white border border-zinc-200",
    positive: "bg-emerald-50 border border-emerald-200",
    revenue:  "bg-sky-50 border border-sky-200",
    hero:     "bg-foreground border border-foreground",
    negative: "bg-red-50 border border-red-200",
  };
  const valStyles: Record<string, string> = {
    default:  "text-foreground",
    positive: "text-emerald-700",
    revenue:  "text-sky-700",
    hero:     "text-white",
    negative: "text-red-600",
  };
  const labelStyles: Record<string, string> = {
    default:  "text-muted-foreground",
    positive: "text-emerald-600/80",
    revenue:  "text-sky-600/80",
    hero:     "text-white/60",
    negative: "text-red-500/80",
  };

  return (
    <div className={`rounded-2xl p-5 ${styles[variant]}`}>
      <p className={`text-xs font-medium mb-2 leading-tight ${labelStyles[variant]}`}>{label}</p>
      <p className={`font-bold tracking-tight ${valStyles[variant]} ${size === "lg" ? "text-3xl" : "text-xl"}`}>{value}</p>
      {sub && <p className={`text-xs mt-1.5 ${variant === "hero" ? "text-white/50" : "text-muted-foreground"}`}>{sub}</p>}
    </div>
  );
}

// ─── block label ─────────────────────────────────────────────────────────────

function BlockLabel({ letter, title, note }: { letter: string; title: string; note: string }) {
  return (
    <div className="flex items-start gap-3 mb-7">
      <div className="w-8 h-8 rounded-lg bg-foreground text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
        {letter}
      </div>
      <div>
        <h2 className="text-base font-bold text-foreground">{title}</h2>
        <p className="text-xs text-muted-foreground mt-0.5">{note}</p>
      </div>
    </div>
  );
}

// ─── section label ────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-4">{children}</p>
  );
}

// ─── collapsible extra sliders ────────────────────────────────────────────────

function MoreSliders({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {open && <div className="space-y-7 pt-2">{children}</div>}
      <button
        onClick={() => setOpen(o => !o)}
        className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
      >
        {open ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
        {open ? "Minder parameters" : "Meer parameters aanpassen"}
      </button>
    </div>
  );
}

// ─── main ─────────────────────────────────────────────────────────────────────

const DEFAULTS = { chats: 500, time: 8, wage: 18, auto: 70, visitors: 15000, engagement: 3, conversion: 12, aov: 95, margin: 25, aovUplift: 8 };

export default function ROI() {
  const [selectedPackage, setSelectedPackage] = useState(1);
  const [selectedSetup, setSelectedSetup] = useState(0);

  const [chats, setChats] = useState(DEFAULTS.chats);
  const [timeMin, setTimeMin] = useState(DEFAULTS.time);
  const [wage, setWage] = useState(DEFAULTS.wage);
  const [autoPct, setAutoPct] = useState(DEFAULTS.auto);

  const [visitors, setVisitors] = useState(DEFAULTS.visitors);
  const [engagement, setEngagement] = useState(DEFAULTS.engagement);
  const [conversion, setConversion] = useState(DEFAULTS.conversion);
  const [aov, setAov] = useState(DEFAULTS.aov);
  const [margin, setMargin] = useState(DEFAULTS.margin);
  const [aovUplift, setAovUplift] = useState(DEFAULTS.aovUplift);

  const [utmOpen, setUtmOpen] = useState(false);

  const calc = useMemo(() => {
    const monthlyCost = PACKAGES[selectedPackage].price;
    const setupCost   = SETUPS[selectedSetup].price;

    const automatedChats      = Math.floor(chats * autoPct / 100);
    const freedHours          = automatedChats * (timeMin / 60);
    const supportSaving       = Math.round(freedHours * wage);
    const totalHours          = chats * (timeMin / 60);
    const ftePct              = (totalHours / 176) * 100;
    const currentCost         = Math.round(totalHours * wage);

    const chatSessions        = Math.floor(visitors * engagement / 100);
    const extraOrders         = Math.floor(chatSessions * conversion / 100);
    const baseRevenue         = extraOrders * aov;
    const upliftRevenue       = baseRevenue * aovUplift / 100;
    const totalExtraRev       = baseRevenue + upliftRevenue;
    const revenueMarginBase   = Math.round(baseRevenue * margin / 100);
    const revenueMarginUplift = Math.round(upliftRevenue * margin / 100);
    const revenueMargin       = Math.round(totalExtraRev * margin / 100);

    const grossBenefit = supportSaving + revenueMargin;
    const netMonthly   = grossBenefit - monthlyCost;
    const netMonth1    = grossBenefit - monthlyCost - setupCost;
    const netYear1     = grossBenefit * 12 - monthlyCost * 12 - setupCost;

    const cpcMedewerker      = (timeMin / 60) * wage;
    const cpcAI              = automatedChats > 0 ? monthlyCost / automatedChats : 0;

    const totalConversations = chats + chatSessions;
    const recommendedPackage = PACKAGES.findIndex(p => p.limit >= totalConversations);
    const packageTooSmall    = PACKAGES[selectedPackage].limit < totalConversations;

    const monthly12 = Array.from({ length: 12 }, (_, i) =>
      grossBenefit * (i + 1) - monthlyCost * (i + 1) - setupCost
    );
    const beMonth = monthly12.findIndex(v => v >= 0);

    return {
      automatedChats, freedHours, supportSaving, totalHours, ftePct, currentCost,
      chatSessions, extraOrders, baseRevenue, upliftRevenue, totalExtraRev,
      revenueMarginBase, revenueMarginUplift, revenueMargin,
      grossBenefit, netMonthly, netMonth1, netYear1,
      monthlyCost, setupCost,
      cpcMedewerker, cpcAI,
      monthly12, beMonth,
      totalConversations, recommendedPackage, packageTooSmall,
    };
  }, [selectedPackage, selectedSetup, chats, timeMin, wage, autoPct, visitors, engagement, conversion, aov, margin, aovUplift]);

  return (
    <>
      <SEO
        title="ROI Calculator — Glimps AI Chatbot voor B2C Webshops"
        description="Bereken de concrete ROI van een Glimps AI chatbot voor jouw webshop. Support besparing + revenue uplift in één businesscase."
        canonical="/roi"
      />

      <style>{`
        @keyframes fadeSlideUp {
          0%   { opacity: 1; transform: translateY(0);    }
          70%  { opacity: 1; transform: translateY(-8px); }
          100% { opacity: 0; transform: translateY(-16px);}
        }
      `}</style>

      <Navigation />

      <main className="min-h-screen bg-[#F7F7F6]">

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section className="pt-32 pb-10 px-4 text-center">
          <div className="max-w-xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-foreground text-white px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-6">
              ROI Calculator
            </div>
            <h1 className="text-4xl md:text-[50px] font-bold tracking-tight leading-[1.1] mb-4 text-foreground">
              Wat levert een AI chatbot<br className="hidden md:block" /> jouw webshop op?
            </h1>
            <p className="text-base text-muted-foreground max-w-md mx-auto leading-relaxed">
              Stel jouw situatie in. Alle uitkomsten zijn herleidbaar tot concrete inputvariabelen.
            </p>
          </div>
        </section>

        {/* ── STICKY RESULT BAR ────────────────────────────────────────── */}
        <div className="sticky top-0 z-40 bg-foreground shadow-lg">
          <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
              <div className="text-center sm:text-left">
                <p className="text-white/60 text-xs font-medium mb-0.5 uppercase tracking-widest">Netto ROI / maand</p>
                <AnimatedNumber
                  value={calc.netMonthly}
                  prefix={calc.netMonthly >= 0 ? "+" : ""}
                  className={`text-3xl sm:text-4xl font-bold tabular-nums ${calc.netMonthly >= 0 ? "text-white" : "text-red-300"}`}
                />
              </div>
              <div className="hidden sm:block h-10 w-px bg-white/20" />
              <div className="text-center sm:text-left">
                <p className="text-white/60 text-xs font-medium mb-0.5 uppercase tracking-widest">Netto jaar 1</p>
                <AnimatedNumber
                  value={calc.netYear1}
                  prefix={calc.netYear1 >= 0 ? "+" : ""}
                  className={`text-xl font-bold tabular-nums ${calc.netYear1 >= 0 ? "text-white" : "text-red-300"}`}
                />
              </div>
            </div>
            <div className="flex items-center gap-6 text-white/70 text-xs">
              <div className="text-center">
                <p className="text-white/50 text-[10px] uppercase tracking-wider mb-0.5">Besparing</p>
                <p className="font-semibold text-emerald-300">{fmt(calc.supportSaving)}/m</p>
              </div>
              <div className="text-center">
                <p className="text-white/50 text-[10px] uppercase tracking-wider mb-0.5">Extra winst</p>
                <p className="font-semibold text-sky-300">{fmt(calc.revenueMargin)}/m</p>
              </div>
              <div className="text-center">
                <p className="text-white/50 text-[10px] uppercase tracking-wider mb-0.5">Pakket</p>
                <p className="font-semibold text-white">{fmt(calc.monthlyCost)}/m</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 pt-10 pb-28 space-y-6">

          {/* ── 1. BLOK A ────────────────────────────────────────────────── */}
          <section className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm">
            <BlockLabel
              letter="A"
              title="Wat je bespaart op support"
              note="Tijdsbesparing klantenservice — hoeveel uur en geld recupereer je?"
            />

            <div className="space-y-7">
              <SliderRow
                label="Inkomende vragen / maand"
                hint="Inclusief chat, e-mail en herhalingen"
                value={chats} min={50} max={3000} step={50} unit="vragen"
                onChange={setChats}
              />
              <SliderRow
                label="% volledig door bot afgehandeld"
                hint="Mediaan Glimps-klanten: 65–80% na 90 dagen. Vereist volledige kennisbasis."
                value={autoPct} min={30} max={85} step={1} unit="%"
                onChange={setAutoPct}
              />
            </div>

            <MoreSliders>
              <SliderRow
                label="Gem. tijd per vraag"
                hint="Benchmarks: eenvoudig 4–6 min, complex 10–15 min"
                value={timeMin} min={2} max={30} step={1} unit="min"
                onChange={setTimeMin}
              />
              <SliderRow
                label="Bruto uurloon CS-medewerker"
                hint="Inclusief RSZ en patronale lasten"
                value={wage} min={14} max={40} step={1} unit="€/u"
                onChange={setWage}
              />
            </MoreSliders>

            <div className="mt-7 rounded-xl bg-zinc-50 border border-zinc-200 p-4 flex flex-wrap items-center gap-5">
              <div>
                <p className="text-[11px] text-muted-foreground mb-0.5">Huidig volume</p>
                <p className="text-sm font-bold text-foreground">{fmtPct(calc.ftePct, 1)} van 1 FTE</p>
              </div>
              <div className="h-7 w-px bg-zinc-200" />
              <div>
                <p className="text-[11px] text-muted-foreground mb-0.5">Personeelskost dit volume</p>
                <p className="text-sm font-bold text-foreground">{fmt(calc.currentCost)}/m</p>
              </div>
              <div className="ml-auto">
                <p className="text-[11px] text-muted-foreground mb-0.5">Vrijgekomen uren</p>
                <p className="text-sm font-bold text-emerald-700">{fmtNum(calc.freedHours)} uur/m</p>
              </div>
            </div>

            {/* Tier 2 output */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              <KpiCard label="Wat je bespaart" value={fmt(calc.supportSaving)} sub="per maand" variant="positive" />
              <KpiCard label="Wat je bespaart" value={fmt(calc.supportSaving * 12)} sub="per jaar" variant="positive" />
            </div>
          </section>

          {/* ── 2. BLOK B ────────────────────────────────────────────────── */}
          <section className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm">
            <BlockLabel
              letter="B"
              title="Wat je extra verdient"
              note="Extra omzet via chatbot-interacties — wat brengt het rechtstreeks op?"
            />

            {/* Funnel */}
            <div className="flex flex-wrap items-center gap-1.5 mb-7 p-3 bg-zinc-50 border border-zinc-200 rounded-xl overflow-x-auto">
              {[
                { label: "Bezoekers", val: fmtNum(visitors) },
                { label: "Interactie", val: fmtPct(engagement, 1) },
                { label: "Gesprekken", val: fmtNum(calc.chatSessions) },
                { label: "Conversie", val: fmtPct(conversion, 1) },
                { label: "Orders", val: fmtNum(calc.extraOrders) },
                { label: "AOV", val: fmt(aov) },
                { label: "Extra omzet", val: fmt(calc.totalExtraRev), highlight: true },
              ].map((step, i, arr) => (
                <div key={step.label} className="flex items-center gap-1.5 flex-shrink-0">
                  <div className={`rounded-lg px-2.5 py-1.5 text-center ${step.highlight ? "bg-foreground text-white" : "bg-white border border-zinc-200"}`}>
                    <div className={`text-xs font-bold tabular-nums ${step.highlight ? "text-white" : "text-foreground"}`}>{step.val}</div>
                    <div className={`text-[9px] mt-0.5 ${step.highlight ? "text-white/70" : "text-muted-foreground"}`}>{step.label}</div>
                  </div>
                  {i < arr.length - 1 && <ArrowRight className="w-2.5 h-2.5 text-zinc-300 flex-shrink-0" />}
                </div>
              ))}
            </div>

            <div className="space-y-7">
              <SliderRow
                label="Maandelijkse bezoekers"
                hint="Unieke sessies per maand (Google Analytics)"
                value={visitors} min={1000} max={200000} step={1000} unit="bezoekers"
                onChange={setVisitors}
              />
              <SliderRow
                label="Gem. orderwaarde (AOV)"
                hint="Jouw gemiddelde orderwaarde uit Shopify/analytics"
                value={aov} min={20} max={500} step={5} unit="€"
                onChange={setAov}
              />
              <SliderRow
                label="Brutomarge"
                hint="Marge na inkoop, exclusief vaste kosten"
                value={margin} min={5} max={70} step={1} unit="%"
                onChange={setMargin}
              />
            </div>

            <MoreSliders>
              <SliderRow
                label="Chat-interactie ratio"
                hint="% bezoekers dat een gesprek start. Sector mediaan: 2–5%"
                value={engagement} min={1} max={15} step={0.5} unit="%"
                onChange={setEngagement}
              />
              <SliderRow
                label="Assisted conversie"
                hint="% chatgesprekken dat leidt tot aankoop. Gemiddelde: 8–18%"
                value={conversion} min={3} max={35} step={1} unit="%"
                onChange={setConversion}
              />
              <SliderRow
                label="AOV-uplift via aanbevelingen"
                hint="Upsell via productcarousel. Conservatief: 5–10%. Stel 0% bij twijfel."
                value={aovUplift} min={0} max={25} step={1} unit="%"
                onChange={setAovUplift}
              />
            </MoreSliders>

            <div className="grid grid-cols-2 gap-3 mt-7">
              <KpiCard label="Wat je extra verdient" value={fmt(calc.revenueMargin)} sub="per maand (marge)" variant="revenue" />
              <KpiCard label="Wat je extra verdient" value={fmt(calc.revenueMargin * 12)} sub="per jaar (marge)" variant="revenue" />
            </div>
          </section>

          {/* ── 4. PAKKET + SETUP ────────────────────────────────────────── */}
          <section className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-1">
                <SectionLabel>Maandpakket</SectionLabel>
                <span className="text-xs text-muted-foreground -mt-3">~{fmtNum(calc.totalConversations)} gesprekken/m</span>
              </div>

              {calc.packageTooSmall && (
                <div className="mb-4 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 flex flex-wrap items-center justify-between gap-2">
                  <p className="text-xs text-amber-800 font-medium">Volume overschrijdt limiet van dit pakket</p>
                  <button
                    onClick={() => setSelectedPackage(calc.recommendedPackage)}
                    className="text-xs font-semibold bg-amber-600 text-white px-3 py-1.5 rounded-lg hover:bg-amber-700 transition-colors"
                  >
                    Wissel naar {PACKAGES[calc.recommendedPackage].label}
                  </button>
                </div>
              )}

              <div className="space-y-2">
                {PACKAGES.map((p, i) => {
                  const tooSmall = p.limit < calc.totalConversations;
                  const active = selectedPackage === i;
                  return (
                    <button
                      key={p.label}
                      onClick={() => setSelectedPackage(i)}
                      className={`w-full rounded-xl border px-4 py-3 text-sm text-left flex justify-between items-center gap-2 transition-all ${
                        active
                          ? "bg-foreground text-white border-foreground"
                          : tooSmall
                          ? "bg-zinc-50 border-zinc-200 opacity-40"
                          : "bg-zinc-50 border-zinc-200 hover:border-zinc-400 hover:bg-zinc-100"
                      }`}
                    >
                      <span className="font-semibold">{p.label}</span>
                      <div className="flex items-center gap-2 ml-auto">
                        {tooSmall && !active && (
                          <span className="text-[10px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded-md font-semibold">te klein</span>
                        )}
                        <span className={`text-xs ${active ? "text-white/70" : "text-muted-foreground"}`}>
                          €{p.price}/m · {p.desc}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm">
              <SectionLabel>Eenmalige opstartkost</SectionLabel>
              <div className="space-y-2">
                {SETUPS.map((s, i) => {
                  const active = selectedSetup === i;
                  return (
                    <button
                      key={s.label}
                      onClick={() => setSelectedSetup(i)}
                      className={`w-full rounded-xl border px-4 py-3 text-sm text-left flex justify-between items-center transition-all ${
                        active
                          ? "bg-foreground text-white border-foreground"
                          : "bg-zinc-50 border-zinc-200 hover:border-zinc-400 hover:bg-zinc-100"
                      }`}
                    >
                      <span className="font-semibold">{s.label}</span>
                      <span className={`text-xs ${active ? "text-white/70" : "text-muted-foreground"}`}>
                        €{s.price.toLocaleString("nl-BE")} eenmalig
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ── 5. TOTALE BUSINESSCASE (Tier 1) ─────────────────────────── */}
          <section>
            <SectionLabel>Totale businesscase</SectionLabel>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Tier 1 — groot */}
              <div className="bg-foreground rounded-2xl p-7 flex flex-col justify-between min-h-[160px]">
                <p className="text-white/60 text-xs font-medium uppercase tracking-widest">Netto ROI / maand</p>
                <div className="mt-3">
                  <AnimatedNumber
                    value={calc.netMonthly}
                    prefix={calc.netMonthly >= 0 ? "+" : ""}
                    className={`text-5xl font-bold tabular-nums tracking-tight ${calc.netMonthly >= 0 ? "text-white" : "text-red-300"}`}
                  />
                  <p className="text-white/50 text-sm mt-2">na €{calc.monthlyCost}/m pakket</p>
                </div>
              </div>
              <div className={`rounded-2xl p-7 flex flex-col justify-between min-h-[160px] ${calc.netYear1 >= 0 ? "bg-emerald-50 border border-emerald-200" : "bg-red-50 border border-red-200"}`}>
                <p className={`text-xs font-medium uppercase tracking-widest ${calc.netYear1 >= 0 ? "text-emerald-600/80" : "text-red-500/80"}`}>Netto ROI / jaar 1</p>
                <div className="mt-3">
                  <AnimatedNumber
                    value={calc.netYear1}
                    prefix={calc.netYear1 >= 0 ? "+" : ""}
                    className={`text-5xl font-bold tabular-nums tracking-tight ${calc.netYear1 >= 0 ? "text-emerald-700" : "text-red-600"}`}
                  />
                  <p className={`text-sm mt-2 ${calc.netYear1 >= 0 ? "text-emerald-600/70" : "text-red-500/70"}`}>
                    incl. opstart €{calc.setupCost.toLocaleString("nl-BE")}
                  </p>
                </div>
              </div>

              {/* Tier 2 — medium */}
              <KpiCard label="Wat je bespaart op support" value={fmt(calc.supportSaving)} sub="per maand" variant="positive" />
              <KpiCard label="Wat je extra verdient" value={fmt(calc.revenueMargin)} sub="per maand (marge)" variant="revenue" />
            </div>
          </section>

          {/* ── 6. KOST PER GESPREK (Tier 3) ────────────────────────────── */}
          <section className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm">
            <SectionLabel>Kost per gesprek</SectionLabel>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              <KpiCard label="Medewerker" value={"€\u202f" + calc.cpcMedewerker.toFixed(2).replace(".", ",")} sub="per gesprek" />
              <KpiCard label="AI Glimps" value={"€\u202f" + (calc.cpcAI > 0 ? calc.cpcAI.toFixed(2).replace(".", ",") : "—")} sub="per gesprek" variant="positive" />
              <KpiCard label="Besparing per gesprek" value={calc.cpcMedewerker > 0 ? "€\u202f" + (calc.cpcMedewerker - calc.cpcAI).toFixed(2).replace(".", ",") : "—"} variant="revenue" />
            </div>
            <div className="space-y-4">
              {[
                { label: "Medewerker", val: calc.cpcMedewerker, max: calc.cpcMedewerker, color: "bg-zinc-300" },
                { label: "AI Glimps",  val: calc.cpcAI,         max: calc.cpcMedewerker, color: "bg-emerald-500" },
              ].map(({ label, val, max, color }) => (
                <div key={label} className="flex items-center gap-4">
                  <span className="w-24 text-xs text-muted-foreground shrink-0">{label}</span>
                  <div className="flex-1 bg-zinc-100 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${color}`}
                      style={{ width: max > 0 ? `${Math.min(100, (val / max) * 100)}%` : "0%" }}
                    />
                  </div>
                  <span className="w-14 text-right font-semibold text-xs tabular-nums">€{val.toFixed(2).replace(".", ",")}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ── 7. BREAK-EVEN (Tier 3) ───────────────────────────────────── */}
          <section className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-6">
              <div>
                <SectionLabel>Break-even analyse</SectionLabel>
                <p className="text-sm text-muted-foreground -mt-2">Cumulatief netto resultaat per maand (incl. opstartkost)</p>
              </div>
              {calc.beMonth >= 0 ? (
                <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 px-3.5 py-1.5 rounded-full text-sm font-semibold">
                  <TrendingUp className="w-3.5 h-3.5" />
                  Break-even in maand {calc.beMonth + 1}
                </div>
              ) : (
                <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 px-3.5 py-1.5 rounded-full text-sm font-semibold">
                  <Clock className="w-3.5 h-3.5" />
                  Geen break-even in jaar 1
                </div>
              )}
            </div>

            {(() => {
              const CHART_H = 200;
              const TOP = CHART_H * 0.55;
              const BOT = CHART_H * 0.45;
              const maxPos = Math.max(...calc.monthly12.filter(v => v >= 0), 1);
              const maxNeg = Math.max(...calc.monthly12.filter(v => v < 0).map(Math.abs), 1);

              return (
                <div className="w-full">
                  <div className="flex gap-1.5 mb-1.5">
                    {calc.monthly12.map((val, i) => (
                      <div key={i} className="flex-1 text-center">
                        <span className={`text-[9px] font-semibold leading-none tabular-nums ${val >= 0 ? "text-emerald-600" : "text-red-400"}`}>
                          {val >= 0 ? "+" : "−"}€{Math.round(Math.abs(val) / 1000) > 0
                            ? (Math.abs(val) / 1000).toFixed(1).replace(".", ",") + "k"
                            : Math.round(Math.abs(val))}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="relative w-full" style={{ height: CHART_H }}>
                    <div className="absolute left-0 right-0 h-px bg-zinc-200 z-10" style={{ top: TOP }} />
                    <div className="absolute inset-0 flex gap-1.5 items-stretch">
                      {calc.monthly12.map((val, i) => {
                        const isBreakEven = i === calc.beMonth;
                        const isPos = val >= 0;
                        const barH = isPos
                          ? Math.max(4, (val / maxPos) * TOP * 0.9)
                          : Math.max(4, (Math.abs(val) / maxNeg) * BOT * 0.9);
                        return (
                          <div key={i} className="flex-1 relative">
                            {isPos ? (
                              <div
                                className={`absolute left-0 right-0 rounded-t-md transition-all duration-300 ${isBreakEven ? "bg-foreground" : "bg-emerald-400"}`}
                                style={{ bottom: BOT, height: barH }}
                              />
                            ) : (
                              <div
                                className="absolute left-0 right-0 rounded-b-md bg-zinc-200 transition-all duration-300"
                                style={{ top: TOP + 1, height: barH }}
                              />
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="flex gap-1.5 mt-2">
                    {calc.monthly12.map((_, i) => (
                      <div key={i} className="flex-1 text-center">
                        <span className="text-[10px] text-muted-foreground">M{i + 1}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}

            <div className="flex flex-wrap gap-5 mt-5 pt-4 border-t border-zinc-100 text-xs text-muted-foreground">
              <span className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-sm bg-emerald-400 inline-block" />Positief</span>
              <span className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-sm bg-zinc-200 inline-block" />Negatief</span>
              <span className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-sm bg-foreground inline-block" />Break-even maand</span>
            </div>
          </section>

          {/* ── 8. KOSTENOVERZICHT (Tier 3) ──────────────────────────────── */}
          <section>
            <SectionLabel>Volledig kostenoverzicht</SectionLabel>
            <div className="overflow-x-auto rounded-2xl border border-zinc-200 shadow-sm bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-zinc-200">
                    <th className="text-left px-5 py-3.5 text-xs font-semibold text-muted-foreground">Post</th>
                    <th className="text-right px-5 py-3.5 text-xs font-semibold text-muted-foreground">Maand 1</th>
                    <th className="text-right px-5 py-3.5 text-xs font-semibold text-muted-foreground">Per maand</th>
                    <th className="text-right px-5 py-3.5 text-xs font-semibold text-muted-foreground">Jaar 1</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-zinc-50 border-b border-zinc-100">
                    <td className="px-5 py-2 text-[11px] font-bold text-muted-foreground uppercase tracking-widest" colSpan={4}>Opbrengsten</td>
                  </tr>
                  {[
                    ["Tijdsbesparing klantenservice", fmt(calc.supportSaving), fmt(calc.supportSaving), fmt(calc.supportSaving * 12), "emerald"],
                    ["Extra omzet marge (assisted orders)", fmt(calc.revenueMarginBase), fmt(calc.revenueMarginBase), fmt(calc.revenueMarginBase * 12), "emerald"],
                    ["AOV-uplift via aanbevelingen", fmt(calc.revenueMarginUplift), fmt(calc.revenueMarginUplift), fmt(calc.revenueMarginUplift * 12), "emerald"],
                  ].map(([label, m1, pm, y1]) => (
                    <tr key={label as string} className="border-b border-zinc-100">
                      <td className="px-5 py-3 text-foreground">{label}</td>
                      <td className="px-5 py-3 text-right font-medium text-emerald-700">{m1}</td>
                      <td className="px-5 py-3 text-right font-medium text-emerald-700">{pm}</td>
                      <td className="px-5 py-3 text-right font-medium text-emerald-700">{y1}</td>
                    </tr>
                  ))}
                  <tr className="bg-zinc-50 border-b border-zinc-100">
                    <td className="px-5 py-2 text-[11px] font-bold text-muted-foreground uppercase tracking-widest" colSpan={4}>Investering</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="px-5 py-3 text-foreground">Eenmalige opstartkost</td>
                    <td className="px-5 py-3 text-right font-medium text-red-500">{fmt(-calc.setupCost)}</td>
                    <td className="px-5 py-3 text-right text-muted-foreground">—</td>
                    <td className="px-5 py-3 text-right font-medium text-red-500">{fmt(-calc.setupCost)}</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-5 py-3 text-foreground">Maandelijkse kost Glimps</td>
                    <td className="px-5 py-3 text-right font-medium text-red-500">{fmt(-calc.monthlyCost)}</td>
                    <td className="px-5 py-3 text-right font-medium text-red-500">{fmt(-calc.monthlyCost)}</td>
                    <td className="px-5 py-3 text-right font-medium text-red-500">{fmt(-calc.monthlyCost * 12)}</td>
                  </tr>
                  <tr className="bg-foreground">
                    <td className="px-5 py-4 text-white font-bold rounded-bl-xl">Netto resultaat</td>
                    <td className="px-5 py-4 text-right text-white font-bold">{fmtPos(calc.netMonth1)}</td>
                    <td className="px-5 py-4 text-right text-white font-bold">{fmtPos(calc.netMonthly)}</td>
                    <td className="px-5 py-4 text-right text-white font-bold rounded-br-xl">{fmtPos(calc.netYear1)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── 9. UTM TRACKING ──────────────────────────────────────────── */}
          <section className="bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-sm">
            <button
              onClick={() => setUtmOpen(!utmOpen)}
              className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-zinc-50 transition-colors"
            >
              <span className="text-sm font-semibold text-foreground">Hoe meten we de revenue impact? — UTM-tracking</span>
              {utmOpen ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
            </button>
            {utmOpen && (
              <div className="px-6 pb-6 border-t border-zinc-200">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-5 mb-6">
                  {[
                    { step: "1", label: "Bot aanbeveling", desc: "Chatbot geeft productlink met UTM-tag mee (utm_source=glimps)" },
                    { step: "2", label: "Shopify sessie", desc: "Bezoeker klikt door — UTM-parameter wordt opgeslagen in sessie" },
                    { step: "3", label: "GA4 conversie", desc: "Aankoop wordt geregistreerd als 'glimps'-conversie in GA4" },
                    { step: "4", label: "Maandrapport", desc: "Glimps stuurt maandelijks overzicht: orders, omzet, dekking" },
                  ].map(({ step, label, desc }) => (
                    <div key={step} className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-foreground text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {step}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{label}</p>
                        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <KpiCard label="Totale extra omzet (UTM)" value={fmt(calc.totalExtraRev)} />
                  <KpiCard label="Marge-aandeel" value={fmt(calc.revenueMargin)} />
                  <KpiCard label="Dekking maandkost" value={fmtPct(calc.revenueMargin > 0 ? (calc.revenueMargin / calc.monthlyCost) * 100 : 0)} variant="positive" />
                </div>
              </div>
            )}
          </section>

          {/* ── 10. DISCLAIMER ───────────────────────────────────────────── */}
          <section className="border border-zinc-200 rounded-2xl p-6 bg-zinc-50">
            <p className="text-[11px] font-bold text-foreground uppercase tracking-widest mb-2">Methodologie & disclaimer</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Support-besparing berekend op bruto uurloon. Revenue-impact berekend op marge-aandeel, niet brutoomzet. De maandkost Glimps wordt eenmalig afgetrokken in het totaal — niet per blok apart. Automatisatie-% vereist volledige kennisbasis. Prijzen exclusief 21% BTW.
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
