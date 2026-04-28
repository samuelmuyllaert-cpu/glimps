import { useState, useMemo } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Slider } from "@/components/ui/slider";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";

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

// ─── sector presets ──────────────────────────────────────────────────────────
// chats, time_min, wage, auto_pct, visitors, engagement_pct, conversion_pct, aov, margin_pct, aov_uplift_pct

type SectorPreset = {
  label: string;
  chats: number; time: number; wage: number; auto: number;
  visitors: number; engagement: number; conversion: number;
  aov: number; margin: number; aovUplift: number;
};

const SECTORS: SectorPreset[] = [
  { label: "Elektro & Tech",      chats: 800, time: 9, wage: 19, auto: 75, visitors: 20000, engagement: 4,  conversion: 14, aov: 120, margin: 22, aovUplift: 10 },
  { label: "Mode & Fashion",      chats: 600, time: 7, wage: 18, auto: 70, visitors: 18000, engagement: 3,  conversion: 12, aov:  75, margin: 45, aovUplift:  8 },
  { label: "Sport & Fitness",     chats: 400, time: 8, wage: 17, auto: 68, visitors: 12000, engagement: 3,  conversion: 11, aov:  85, margin: 35, aovUplift:  7 },
  { label: "Interieur",           chats: 350, time:10, wage: 19, auto: 65, visitors: 10000, engagement: 2,  conversion: 10, aov: 250, margin: 38, aovUplift: 12 },
  { label: "Baby & Kids",         chats: 500, time: 8, wage: 18, auto: 72, visitors: 15000, engagement: 3,  conversion: 12, aov:  75, margin: 40, aovUplift:  8 },
  { label: "Beauty",              chats: 550, time: 7, wage: 18, auto: 73, visitors: 16000, engagement: 4,  conversion: 15, aov:  55, margin: 55, aovUplift:  9 },
  { label: "Voeding & Health",    chats: 450, time: 6, wage: 17, auto: 70, visitors: 13000, engagement: 3,  conversion: 11, aov:  60, margin: 30, aovUplift:  6 },
  { label: "Andere",              chats: 500, time: 8, wage: 18, auto: 70, visitors: 15000, engagement: 3,  conversion: 12, aov:  95, margin: 25, aovUplift:  8 },
];

const PACKAGES = [
  { label: "Growth",     price: 325, desc: "500 gesprekken/m" },
  { label: "Business",   price: 525, desc: "1.000 gesprekken/m" },
  { label: "Pro",        price: 725, desc: "2.000 gesprekken/m" },
  { label: "Enterprise", price: 925, desc: "Ongelimiteerd" },
];
const SETUPS = [
  { label: "Eenvoudig",  price: 500 },
  { label: "Standaard",  price: 999 },
  { label: "Complex",    price: 1500 },
  { label: "Maatwerk",   price: 2000 },
];

// ─── slider component ────────────────────────────────────────────────────────

function SliderRow({
  label, hint, value, min, max, step, unit, onChange,
}: {
  label: string; hint: string; value: number; min: number; max: number;
  step: number; unit?: string; onChange: (v: number) => void;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-baseline justify-between gap-2">
        <label className="text-sm font-medium text-foreground">{label}</label>
        <span className="text-sm font-semibold text-primary whitespace-nowrap">
          {unit === "€" ? fmt(value).replace("−", "") : ""}
          {unit === "€" ? "" : fmtNum(value)}{unit && unit !== "€" ? "\u00a0" + unit : ""}
        </span>
      </div>
      <Slider
        value={[value]}
        min={min}
        max={max}
        step={step}
        onValueChange={([v]) => onChange(v)}
        className="w-full"
      />
      <p className="text-xs text-muted-foreground">{hint}</p>
    </div>
  );
}

// ─── metric card ─────────────────────────────────────────────────────────────

function MetricCard({
  label, value, sub, accent, featured,
}: {
  label: string; value: string; sub?: string; accent?: "green" | "blue" | "red"; featured?: boolean;
}) {
  const bg = featured
    ? "bg-foreground text-background"
    : accent === "green"
    ? "bg-emerald-50 border-emerald-200"
    : accent === "blue"
    ? "bg-sky-50 border-sky-200"
    : accent === "red"
    ? "bg-red-50 border-red-200"
    : "bg-muted/50 border-border";

  const valColor = featured
    ? "text-background"
    : accent === "green"
    ? "text-emerald-700"
    : accent === "blue"
    ? "text-sky-700"
    : accent === "red"
    ? "text-red-600"
    : "text-foreground";

  return (
    <div className={`rounded-xl border p-4 ${bg}`}>
      <p className={`text-xs mb-1 ${featured ? "text-background/70" : "text-muted-foreground"}`}>{label}</p>
      <p className={`text-xl font-bold ${valColor}`}>{value}</p>
      {sub && <p className={`text-xs mt-1 ${featured ? "text-background/60" : "text-muted-foreground/70"}`}>{sub}</p>}
    </div>
  );
}

// ─── section header ──────────────────────────────────────────────────────────

function SectionHeader({ label, note }: { label: string; note: string }) {
  return (
    <div className="mb-6">
      <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold mb-2">
        {label}
      </div>
      <p className="text-sm text-muted-foreground">{note}</p>
    </div>
  );
}

// ─── main component ──────────────────────────────────────────────────────────

export default function ROI() {
  const [selectedSector, setSelectedSector] = useState(0);
  const [selectedPackage, setSelectedPackage] = useState(1);
  const [selectedSetup, setSelectedSetup] = useState(0);

  // Block A sliders
  const [chats, setChats] = useState(SECTORS[0].chats);
  const [timeMin, setTimeMin] = useState(SECTORS[0].time);
  const [wage, setWage] = useState(SECTORS[0].wage);
  const [autoPct, setAutoPct] = useState(SECTORS[0].auto);

  // Block B sliders
  const [visitors, setVisitors] = useState(SECTORS[0].visitors);
  const [engagement, setEngagement] = useState(SECTORS[0].engagement);
  const [conversion, setConversion] = useState(SECTORS[0].conversion);
  const [aov, setAov] = useState(SECTORS[0].aov);
  const [margin, setMargin] = useState(SECTORS[0].margin);
  const [aovUplift, setAovUplift] = useState(SECTORS[0].aovUplift);

  const [utmOpen, setUtmOpen] = useState(false);

  function applySector(idx: number) {
    const s = SECTORS[idx];
    setSelectedSector(idx);
    setChats(s.chats); setTimeMin(s.time); setWage(s.wage); setAutoPct(s.auto);
    setVisitors(s.visitors); setEngagement(s.engagement); setConversion(s.conversion);
    setAov(s.aov); setMargin(s.margin); setAovUplift(s.aovUplift);
  }

  // ── calculations ──────────────────────────────────────────────────────────
  const calc = useMemo(() => {
    const monthlyCost = PACKAGES[selectedPackage].price;
    const setupCost   = SETUPS[selectedSetup].price;

    // Block A
    const automatedChats  = Math.floor(chats * autoPct / 100);
    const freedHours      = automatedChats * (timeMin / 60);
    const supportSaving   = Math.round(freedHours * wage);
    const totalHours      = chats * (timeMin / 60);
    const ftePct          = (totalHours / 176) * 100;
    const currentCost     = Math.round(totalHours * wage);

    // Block B
    const chatSessions    = Math.floor(visitors * engagement / 100);
    const extraOrders     = Math.floor(chatSessions * conversion / 100);
    const baseRevenue     = extraOrders * aov;
    const upliftRevenue   = baseRevenue * aovUplift / 100;
    const totalExtraRev   = baseRevenue + upliftRevenue;
    const revenueMarginBase   = Math.round(baseRevenue * margin / 100);
    const revenueMarginUplift = Math.round(upliftRevenue * margin / 100);
    const revenueMargin   = Math.round(totalExtraRev * margin / 100);

    // Totals
    const grossBenefit    = supportSaving + revenueMargin;
    const netMonthly      = grossBenefit - monthlyCost;
    const netMonth1       = grossBenefit - monthlyCost - setupCost;
    const netYear1        = grossBenefit * 12 - monthlyCost * 12 - setupCost;

    // CPC
    const cpcMedewerker   = (timeMin / 60) * wage;
    const cpcAI           = automatedChats > 0 ? monthlyCost / automatedChats : 0;

    // Break-even
    const monthly12 = Array.from({ length: 12 }, (_, i) =>
      grossBenefit * (i + 1) - monthlyCost * (i + 1) - setupCost
    );
    const beMonth = monthly12.findIndex(v => v >= 0);

    // Scenarios
    function scenario(aP: number, eP: number, cP: number) {
      const aC = Math.floor(chats * aP / 100);
      const fH = aC * (timeMin / 60);
      const sS = Math.round(fH * wage);
      const cS = Math.floor(visitors * eP / 100);
      const eO = Math.floor(cS * cP / 100);
      const bR = eO * aov;
      const uR = bR * aovUplift / 100;
      const rM = Math.round((bR + uR) * margin / 100);
      return { auto: aP, support: sS, engagementPct: eP, revenue: rM, net: sS + rM - monthlyCost };
    }
    const scenarios = [
      scenario(45,    Math.max(1, engagement * 0.5), Math.max(3, conversion * 0.7)),
      scenario(autoPct, engagement, conversion),
      scenario(82,    Math.min(15, engagement * 1.5), Math.min(35, conversion * 1.3)),
    ];

    return {
      automatedChats, freedHours, supportSaving, totalHours, ftePct, currentCost,
      chatSessions, extraOrders, baseRevenue, upliftRevenue, totalExtraRev,
      revenueMarginBase, revenueMarginUplift, revenueMargin,
      grossBenefit, netMonthly, netMonth1, netYear1,
      monthlyCost, setupCost,
      cpcMedewerker, cpcAI,
      monthly12, beMonth,
      scenarios,
    };
  }, [
    selectedPackage, selectedSetup,
    chats, timeMin, wage, autoPct,
    visitors, engagement, conversion, aov, margin, aovUplift,
  ]);

  const maxBar = Math.max(...calc.monthly12.map(Math.abs), 1);

  return (
    <>
      <SEO
        title="ROI Calculator — Glimps AI Chatbot voor B2C Webshops"
        description="Bereken de concrete ROI van een Glimps AI chatbot voor jouw webshop. Support besparing + revenue uplift in één businesscase."
        canonical="/roi"
      />
      <Navigation />

      <main className="min-h-screen bg-background">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <section className="pt-32 pb-16 px-4 text-center bg-gradient-to-b from-muted/30 to-background">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold mb-4">
              ROI Calculator
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Wat levert een AI chatbot<br className="hidden md:block" /> jouw webshop op?
            </h1>
            <p className="text-lg text-muted-foreground mb-12">
              Vul jouw situatie in. Alle uitkomsten zijn herleidbaar tot concrete inputvariabelen.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              {[
                { stat: "65–80%", label: "automatisatie", src: "Mediaan Glimps-klanten na 90 dagen" },
                { stat: "+23%",   label: "conversie uplift", src: "Gemeten bij Zelektro via UTM, jaar 1" },
                { stat: "€325–925/m", label: "pakket", src: "Afhankelijk van volume & features" },
              ].map(({ stat, label, src }) => (
                <div key={stat} className="bg-card border border-border rounded-xl p-5">
                  <p className="text-2xl font-bold text-primary">{stat}</p>
                  <p className="text-sm font-medium">{label}</p>
                  <p className="text-xs text-muted-foreground mt-1">{src}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 pb-24 space-y-12">

          {/* ── 2. SECTOR PICKER ─────────────────────────────────────────── */}
          <section>
            <h2 className="text-lg font-semibold mb-4">Kies jouw sector</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {SECTORS.map((s, i) => (
                <button
                  key={s.label}
                  onClick={() => applySector(i)}
                  className={`rounded-lg border px-3 py-2.5 text-sm font-medium transition-all text-left ${
                    selectedSector === i
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card border-border hover:border-primary/50 hover:bg-muted/50"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </section>

          {/* ── 3. PACKAGE + SETUP ───────────────────────────────────────── */}
          <section className="grid sm:grid-cols-2 gap-8">
            <div>
              <h2 className="text-lg font-semibold mb-4">Maandpakket</h2>
              <div className="space-y-2">
                {PACKAGES.map((p, i) => (
                  <button
                    key={p.label}
                    onClick={() => setSelectedPackage(i)}
                    className={`w-full rounded-lg border px-4 py-3 text-sm text-left flex justify-between items-center transition-all ${
                      selectedPackage === i
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-card border-border hover:border-primary/50"
                    }`}
                  >
                    <span className="font-medium">{p.label}</span>
                    <span className={`text-xs ${selectedPackage === i ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                      €{p.price}/m · {p.desc}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4">Eenmalige opstartkost</h2>
              <div className="space-y-2">
                {SETUPS.map((s, i) => (
                  <button
                    key={s.label}
                    onClick={() => setSelectedSetup(i)}
                    className={`w-full rounded-lg border px-4 py-3 text-sm text-left flex justify-between items-center transition-all ${
                      selectedSetup === i
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-card border-border hover:border-primary/50"
                    }`}
                  >
                    <span className="font-medium">{s.label}</span>
                    <span className={`text-xs ${selectedSetup === i ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                      €{s.price.toLocaleString("nl-BE")} eenmalig
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* ── 4. BLOCK A — SUPPORT ROI ─────────────────────────────────── */}
          <section className="bg-card border border-border rounded-2xl p-6 md:p-8">
            <SectionHeader
              label="Blok A — Support ROI"
              note="Tijdsbesparing klantenservice — bruto bijdrage"
            />
            <div className="space-y-6 mb-8">
              <SliderRow label="Inkomende vragen / maand" hint="Inclusief chat, e-mail en herhalingen" value={chats} min={50} max={3000} step={50} unit="vragen" onChange={setChats} />
              <SliderRow label="Gem. tijd per vraag (min)" hint="Benchmarks: eenvoudig 4–6 min, complex 10–15 min" value={timeMin} min={2} max={30} step={1} unit="min" onChange={setTimeMin} />
              <SliderRow label="Bruto uurloon CS-medewerker" hint="Inclusief RSZ en patronale lasten" value={wage} min={14} max={40} step={1} unit="€/u" onChange={setWage} />
              <SliderRow label="% automatisch afgehandeld" hint="Mediaan klanten: 65–80% na 90 dagen. Vereist volledige kennisbasis." value={autoPct} min={30} max={85} step={1} unit="%" onChange={setAutoPct} />
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-sm space-y-1">
              <p className="text-amber-800 font-medium">
                Huidig chatvolume = {fmtPct(calc.ftePct, 1)} van een voltijds CS-medewerker
              </p>
              <p className="text-amber-700">
                Huidige personeelskost voor dit volume: {fmt(calc.currentCost)}/maand
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <MetricCard label="Vrijgekomen uren / maand" value={fmtNum(calc.freedHours) + " uur"} />
              <MetricCard label="Waarde vrijgekomen tijd" value={fmt(calc.supportSaving)} />
              <MetricCard label="Bruto Support Bijdrage / maand" value={fmt(calc.supportSaving)} sub="bruto — kost wordt éénmalig afgetrokken in totaal" accent="green" />
            </div>
          </section>

          {/* ── 5. BLOCK B — REVENUE ROI ─────────────────────────────────── */}
          <section className="bg-card border border-border rounded-2xl p-6 md:p-8">
            <SectionHeader
              label="Blok B — Revenue ROI"
              note="Extra omzet via chatbot-interacties — bruto bijdrage"
            />

            {/* visual chain */}
            <div className="flex flex-wrap items-center gap-1 mb-8 text-xs">
              {[
                { label: "Bezoekers/m", val: fmtNum(visitors) },
                { label: "Chat-interactie", val: fmtPct(engagement, 1) },
                { label: "Chatgesprekken", val: fmtNum(calc.chatSessions) },
                { label: "Assisted conv.", val: fmtPct(conversion, 1) },
                { label: "Extra orders", val: fmtNum(calc.extraOrders) },
                { label: "AOV", val: fmt(aov) },
                { label: "Extra omzet/m", val: fmt(calc.totalExtraRev), highlight: true },
              ].map((step, i, arr) => (
                <div key={step.label} className="flex items-center gap-1">
                  <div className={`rounded-lg px-2.5 py-1.5 border ${step.highlight ? "bg-primary text-primary-foreground border-primary font-semibold" : "bg-muted/50 border-border"}`}>
                    <div className={`font-semibold ${step.highlight ? "" : "text-foreground"}`}>{step.val}</div>
                    <div className={`text-[10px] ${step.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{step.label}</div>
                  </div>
                  {i < arr.length - 1 && <ArrowRight className="w-3 h-3 text-muted-foreground flex-shrink-0" />}
                </div>
              ))}
            </div>

            <div className="space-y-6 mb-8">
              <SliderRow label="Maandelijkse bezoekers" hint="Unieke sessies per maand (Google Analytics)" value={visitors} min={1000} max={200000} step={1000} unit="bezoekers" onChange={setVisitors} />
              <SliderRow label="Chat-interactie ratio %" hint="% bezoekers dat gesprek start. Sector mediaan: 2–5%" value={engagement} min={1} max={15} step={0.5} unit="%" onChange={setEngagement} />
              <SliderRow label="Assisted conversie %" hint="% chatgesprekken dat leidt tot aankoop. E-com gemiddelde: 8–18%" value={conversion} min={3} max={35} step={1} unit="%" onChange={setConversion} />
              <SliderRow label="Gem. orderwaarde AOV" hint="Jouw gemiddelde orderwaarde uit Shopify/analytics" value={aov} min={20} max={500} step={5} unit="€" onChange={setAov} />
              <SliderRow label="Brutomarge %" hint="Marge na inkoop, exclusief vaste kosten" value={margin} min={5} max={70} step={1} unit="%" onChange={setMargin} />
              <SliderRow label="AOV-uplift via aanbevelingen %" hint="Upsell via productcarousel. Conservatief: 5–10%. Stel 0% bij twijfel." value={aovUplift} min={0} max={25} step={1} unit="%" onChange={setAovUplift} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <MetricCard label="Extra orders / maand" value={fmtNum(calc.extraOrders) + " orders"} />
              <MetricCard label="Extra omzet / maand (bruto)" value={fmt(calc.totalExtraRev)} />
              <MetricCard label="Bruto Revenue Bijdrage / maand" value={fmt(calc.revenueMargin)} sub="bruto — kost wordt éénmalig afgetrokken in totaal" accent="blue" />
            </div>
          </section>

          {/* ── 6. TOTAL BUSINESS CASE ───────────────────────────────────── */}
          <section>
            <h2 className="text-xl font-bold mb-6">Totale businesscase</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              <MetricCard label="Bruto Support Bijdrage / maand" value={fmt(calc.supportSaving)} accent="green" />
              <MetricCard label="Bruto Revenue Bijdrage / maand" value={fmt(calc.revenueMargin)} accent="blue" />
              <MetricCard
                label="Netto ROI / maand"
                value={fmtPos(calc.netMonthly)}
                sub={`na €${calc.monthlyCost}/m pakket`}
                featured
              />
              <MetricCard
                label="Netto ROI jaar 1"
                value={fmtPos(calc.netYear1)}
                sub={`incl. eenmalige opstart €${calc.setupCost.toLocaleString("nl-BE")}`}
                accent={calc.netYear1 >= 0 ? "green" : "red"}
              />
            </div>
          </section>

          {/* ── 7. SCENARIO ANALYSIS ─────────────────────────────────────── */}
          <section>
            <h2 className="text-xl font-bold mb-2">Scenario-analyse</h2>
            <p className="text-sm text-muted-foreground mb-6">Vergelijking op basis van jouw huidige instellingen</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: "Conservatief", sub: "10e percentiel", idx: 0, color: "border-amber-200 bg-amber-50/50" },
                { title: "Verwacht",     sub: "mediaan — jouw instellingen", idx: 1, color: "border-primary/30 bg-primary/5" },
                { title: "Sterk",        sub: "90e percentiel", idx: 2, color: "border-emerald-200 bg-emerald-50/50" },
              ].map(({ title, sub, idx, color }) => {
                const s = calc.scenarios[idx];
                const isPos = s.net >= 0;
                return (
                  <div key={title} className={`rounded-xl border p-5 ${color}`}>
                    <p className="text-sm font-semibold">{title}</p>
                    <p className="text-xs text-muted-foreground mb-4">{sub}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between"><span className="text-muted-foreground">Automatisatie</span><span className="font-medium">{fmtPct(s.auto)}</span></div>
                      <div className="flex justify-between"><span className="text-muted-foreground">Support besparing</span><span className="font-medium">{fmt(s.support)}</span></div>
                      <div className="flex justify-between"><span className="text-muted-foreground">Chat-interactie</span><span className="font-medium">{fmtPct(s.engagementPct, 1)}</span></div>
                      <div className="flex justify-between"><span className="text-muted-foreground">Revenue marge</span><span className="font-medium">{fmt(s.revenue)}</span></div>
                      <div className={`flex justify-between border-t border-current/10 pt-2 font-semibold ${isPos ? "text-emerald-700" : "text-red-600"}`}>
                        <span>Netto ROI / maand</span>
                        <span>{fmtPos(s.net)}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
              Conservatief = 10e percentiel actieve klanten na 90 dagen. Verwacht = mediaan (jouw instellingen). Sterk = 90e percentiel, typisch bij hoge productcomplexiteit en volledige kennisbasis. Automatisatie vereist altijd een actuele, volledige kennisbank.
            </p>
          </section>

          {/* ── 8. COST PER CONVERSATION ─────────────────────────────────── */}
          <section className="bg-card border border-border rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-bold mb-6">Kost per gesprek</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <MetricCard label="Medewerker" value={"€" + calc.cpcMedewerker.toFixed(2).replace(".", ",")} sub="per gesprek" />
              <MetricCard label="AI Glimps" value={"€" + (calc.cpcAI > 0 ? calc.cpcAI.toFixed(2).replace(".", ",") : "—")} sub="per gesprek" accent="green" />
              <MetricCard label="Besparing per gesprek" value={calc.cpcMedewerker > 0 ? "€" + (calc.cpcMedewerker - calc.cpcAI).toFixed(2).replace(".", ",") : "—"} accent="blue" />
            </div>
            <div className="space-y-3">
              {[
                { label: "Medewerker", val: calc.cpcMedewerker, max: calc.cpcMedewerker, color: "bg-red-400" },
                { label: "AI Glimps",  val: calc.cpcAI,          max: calc.cpcMedewerker, color: "bg-emerald-500" },
              ].map(({ label, val, max, color }) => (
                <div key={label} className="flex items-center gap-3 text-sm">
                  <span className="w-24 text-muted-foreground text-xs">{label}</span>
                  <div className="flex-1 bg-muted rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${color}`}
                      style={{ width: max > 0 ? `${Math.min(100, (val / max) * 100)}%` : "0%" }}
                    />
                  </div>
                  <span className="w-14 text-right font-medium text-xs">€{val.toFixed(2).replace(".", ",")}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ── 9. BREAK-EVEN CHART ──────────────────────────────────────── */}
          <section>
            <h2 className="text-xl font-bold mb-2">Break-even analyse</h2>
            <p className="text-sm text-muted-foreground mb-6">
              {calc.beMonth >= 0
                ? `Break-even in maand ${calc.beMonth + 1}`
                : "Geen break-even in jaar 1 op basis van huidige instellingen"}
            </p>
            <div className="flex items-end gap-1.5 h-48">
              {calc.monthly12.map((val, i) => {
                const isBreakEven = i === calc.beMonth;
                const isPos = val >= 0;
                const height = Math.max(4, Math.abs(val / maxBar) * 100);
                return (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    {isPos ? (
                      <>
                        <div className="flex-1 flex items-end w-full">
                          <div
                            className={`w-full rounded-t transition-all ${isBreakEven ? "bg-primary" : "bg-emerald-500"}`}
                            style={{ height: `${height}%` }}
                          />
                        </div>
                        <div className="h-[2px] w-full bg-border" />
                      </>
                    ) : (
                      <>
                        <div className="flex-1 w-full" />
                        <div className="h-[2px] w-full bg-border" />
                        <div
                          className="w-full rounded-b bg-red-300 transition-all"
                          style={{ height: `${height}%`, maxHeight: "60%" }}
                        />
                      </>
                    )}
                    <span className="text-[10px] text-muted-foreground">M{i + 1}</span>
                  </div>
                );
              })}
            </div>
            {calc.beMonth >= 0 && (
              <div className="mt-3 inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                Break-even maand {calc.beMonth + 1}
              </div>
            )}
          </section>

          {/* ── 10. BREAKDOWN TABLE ──────────────────────────────────────── */}
          <section>
            <h2 className="text-xl font-bold mb-4">Volledige kostenoverzicht</h2>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="text-left px-4 py-3 font-semibold text-muted-foreground">Post</th>
                    <th className="text-right px-4 py-3 font-semibold text-muted-foreground">Maand 1</th>
                    <th className="text-right px-4 py-3 font-semibold text-muted-foreground">Per maand</th>
                    <th className="text-right px-4 py-3 font-semibold text-muted-foreground">Jaar 1</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="bg-muted/20">
                    <td className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide" colSpan={4}>Opbrengsten</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5">Tijdsbesparing klantenservice</td>
                    <td className="px-4 py-2.5 text-right text-emerald-700 font-medium">{fmt(calc.supportSaving)}</td>
                    <td className="px-4 py-2.5 text-right text-emerald-700 font-medium">{fmt(calc.supportSaving)}</td>
                    <td className="px-4 py-2.5 text-right text-emerald-700 font-medium">{fmt(calc.supportSaving * 12)}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5">Extra omzet marge (assisted orders)</td>
                    <td className="px-4 py-2.5 text-right text-emerald-700 font-medium">{fmt(calc.revenueMarginBase)}</td>
                    <td className="px-4 py-2.5 text-right text-emerald-700 font-medium">{fmt(calc.revenueMarginBase)}</td>
                    <td className="px-4 py-2.5 text-right text-emerald-700 font-medium">{fmt(calc.revenueMarginBase * 12)}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5">AOV-uplift via aanbevelingen</td>
                    <td className="px-4 py-2.5 text-right text-emerald-700 font-medium">{fmt(calc.revenueMarginUplift)}</td>
                    <td className="px-4 py-2.5 text-right text-emerald-700 font-medium">{fmt(calc.revenueMarginUplift)}</td>
                    <td className="px-4 py-2.5 text-right text-emerald-700 font-medium">{fmt(calc.revenueMarginUplift * 12)}</td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide" colSpan={4}>Investering</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5">Eenmalige opstartkost</td>
                    <td className="px-4 py-2.5 text-right text-red-600 font-medium">{fmt(-calc.setupCost)}</td>
                    <td className="px-4 py-2.5 text-right text-muted-foreground">—</td>
                    <td className="px-4 py-2.5 text-right text-red-600 font-medium">{fmt(-calc.setupCost)}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5">Maandelijkse kost Glimps</td>
                    <td className="px-4 py-2.5 text-right text-red-600 font-medium">{fmt(-calc.monthlyCost)}</td>
                    <td className="px-4 py-2.5 text-right text-red-600 font-medium">{fmt(-calc.monthlyCost)}</td>
                    <td className="px-4 py-2.5 text-right text-red-600 font-medium">{fmt(-calc.monthlyCost * 12)}</td>
                  </tr>
                  <tr className="bg-foreground text-background font-semibold">
                    <td className="px-4 py-3 rounded-bl-xl">Netto resultaat</td>
                    <td className="px-4 py-3 text-right">{fmtPos(calc.netMonth1)}</td>
                    <td className="px-4 py-3 text-right">{fmtPos(calc.netMonthly)}</td>
                    <td className="px-4 py-3 text-right rounded-br-xl">{fmtPos(calc.netYear1)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── 11. UTM TRACKING ─────────────────────────────────────────── */}
          <section className="border border-border rounded-2xl overflow-hidden">
            <button
              onClick={() => setUtmOpen(!utmOpen)}
              className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-muted/30 transition-colors"
            >
              <span className="font-semibold text-sm">Hoe meten we de revenue impact exact? — UTM-tracking</span>
              {utmOpen ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
            </button>
            {utmOpen && (
              <div className="px-6 pb-6 pt-2 border-t border-border">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 mb-6">
                  {[
                    { step: "1", label: "Bot aanbeveling", desc: "Chatbot geeft productlink met UTM-tag mee (utm_source=glimps)" },
                    { step: "2", label: "Shopify sessie", desc: "Bezoeker klikt door — UTM-parameter wordt opgeslagen in sessie" },
                    { step: "3", label: "GA4 conversie", desc: "Aankoop wordt geregistreerd als 'glimps'-conversie in GA4" },
                    { step: "4", label: "Maandrapport", desc: "Glimps stuurt maandelijks overzicht: orders, omzet, dekking" },
                  ].map(({ step, label, desc }) => (
                    <div key={step} className="flex gap-3">
                      <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {step}
                      </div>
                      <div>
                        <p className="text-sm font-medium">{label}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <MetricCard label="Totale extra omzet (UTM)" value={fmt(calc.totalExtraRev)} />
                  <MetricCard label="Marge-aandeel" value={fmt(calc.revenueMargin)} />
                  <MetricCard label="Dekking maandkost" value={fmtPct(calc.revenueMargin > 0 ? (calc.revenueMargin / calc.monthlyCost) * 100 : 0)} accent="green" />
                </div>
              </div>
            )}
          </section>

          {/* ── 12. DISCLAIMER ───────────────────────────────────────────── */}
          <section className="bg-foreground text-background rounded-2xl p-6 text-xs leading-relaxed space-y-1">
            <p className="font-semibold text-sm mb-2">Methodologie & disclaimer</p>
            <p className="text-background/70">
              Support-besparing berekend op bruto uurloon. Revenue-impact berekend op marge-aandeel, niet brutoomzet. De maandkost Glimps wordt eenmalig afgetrokken in het totaal — niet per blok apart. Automatisatie-% vereist volledige kennisbasis. +23% conversie uplift gemeten bij Zelektro (jaar 1, UTM-tracking) — geen garantie voor vergelijkbare resultaten. Prijzen exclusief 21% BTW.
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
