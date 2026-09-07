import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Search, MessageSquare, Settings, Rocket, BarChart3, CheckCircle2, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HowWeWork = () => {
  const { t } = useLanguage();

  const steps = [
    {
      number: "1",
      label: t('howWeWork.processSteps.0.label'),
      title: t('howWeWork.step1.title'),
      subtitle: t('howWeWork.step1.subtitle'),
      description: t('howWeWork.step1.description'),
      warning: t('howWeWork.step1.warning'),
      features: [
        t('howWeWork.step1.features.0'),
        t('howWeWork.step1.features.1'),
        t('howWeWork.step1.features.2'),
      ],
      next: t('howWeWork.step1.next'),
      icon: Search,
      accent: "#1B3A5C",
      accentBg: "rgba(27, 58, 92, 0.08)",
      card: {
        title: t('howWeWork.step1.card.title'),
        approved: t('howWeWork.step1.card.approved'),
        items: [
          { label: t('howWeWork.step1.card.dataQuality'), value: "94%" },
          { label: t('howWeWork.step1.card.dataStructure'), value: "87%" },
          { label: t('howWeWork.step1.card.apiAvailability'), value: "100%" },
          { label: t('howWeWork.step1.card.contentCompleteness'), value: "76%" },
        ],
        readinessScore: t('howWeWork.step1.card.readinessScore'),
        score: 89,
      },
    },
    {
      number: "2",
      label: t('howWeWork.processSteps.1.label'),
      title: t('howWeWork.step2.title'),
      subtitle: t('howWeWork.step2.subtitle'),
      description: t('howWeWork.step2.description'),
      features: [
        t('howWeWork.step2.features.0'),
        t('howWeWork.step2.features.1'),
        t('howWeWork.step2.features.2'),
      ],
      next: t('howWeWork.step2.next'),
      icon: MessageSquare,
      accent: "#E74E4D",
      accentBg: "rgba(231, 78, 77, 0.08)",
      card: {
        title: t('howWeWork.step2.card.title'),
        coverage: t('howWeWork.step2.card.coverage'),
        questions: [
          { q: t('howWeWork.step2.card.questions.0'), count: "847", trend: "+12%" },
          { q: t('howWeWork.step2.card.questions.1'), count: "623", trend: "+8%" },
          { q: t('howWeWork.step2.card.questions.2'), count: "512", trend: "-3%" },
          { q: t('howWeWork.step2.card.questions.3'), count: "489", trend: "+15%" },
          { q: t('howWeWork.step2.card.questions.4'), count: "401", trend: "+22%" },
        ],
        timesAsked: t('howWeWork.step2.card.timesAsked'),
        trainingComplete: t('howWeWork.step2.card.trainingComplete'),
        conversationsAnalyzed: t('howWeWork.step2.card.conversationsAnalyzed'),
      },
    },
    {
      number: "3",
      label: t('howWeWork.processSteps.2.label'),
      title: t('howWeWork.step3.title'),
      subtitle: t('howWeWork.step3.subtitle'),
      description: t('howWeWork.step3.description'),
      features: [
        t('howWeWork.step3.features.0'),
        t('howWeWork.step3.features.1'),
        t('howWeWork.step3.features.2'),
      ],
      next: t('howWeWork.step3.next'),
      icon: Settings,
      accent: "#0E7C66",
      accentBg: "rgba(14, 124, 102, 0.08)",
      card: {
        title: t('howWeWork.step3.card.title'),
        inProgress: t('howWeWork.step3.card.inProgress'),
        items: [
          { label: t('howWeWork.step3.card.productIntegration'), pct: 100 },
          { label: t('howWeWork.step3.card.toneTraining'), pct: 100 },
          { label: t('howWeWork.step3.card.apiConnections'), pct: 75 },
          { label: t('howWeWork.step3.card.testingQA'), pct: 45 },
        ],
        stats: [
          { value: "1.247", label: t('howWeWork.step3.card.products') },
          { value: "89", label: t('howWeWork.step3.card.categories') },
          { value: "5", label: t('howWeWork.step3.card.apis') },
        ],
      },
    },
    {
      number: "4",
      label: t('howWeWork.processSteps.3.label'),
      title: t('howWeWork.step4.title'),
      subtitle: t('howWeWork.step4.subtitle'),
      description: t('howWeWork.step4.description'),
      features: [
        t('howWeWork.step4.features.0'),
        t('howWeWork.step4.features.1'),
        t('howWeWork.step4.features.2'),
      ],
      next: t('howWeWork.step4.next'),
      icon: Rocket,
      accent: "#1B3A5C",
      accentBg: "rgba(27, 58, 92, 0.08)",
      card: {
        title: t('howWeWork.step4.card.title'),
        period: t('howWeWork.step4.card.period'),
        live: t('howWeWork.step4.card.live'),
        metrics: [
          { label: t('howWeWork.step4.card.conversations'), value: "3.847", change: "+43%" },
          { label: t('howWeWork.step4.card.resolvedWithoutHelp'), value: "89%", change: "+12%" },
        ],
        vsPreviousMonth: t('howWeWork.step4.card.vsPreviousMonth'),
        conversionRate: t('howWeWork.step4.card.conversionRate'),
        aiLearning: t('howWeWork.step4.card.aiLearning'),
      },
    },
    {
      number: "5",
      label: t('howWeWork.processSteps.4.label'),
      title: t('howWeWork.step5.title'),
      subtitle: t('howWeWork.step5.subtitle'),
      description: t('howWeWork.step5.description'),
      features: [
        t('howWeWork.step5.features.0'),
        t('howWeWork.step5.features.1'),
        t('howWeWork.step5.features.2'),
      ],
      icon: BarChart3,
      accent: "#E74E4D",
      accentBg: "rgba(231, 78, 77, 0.08)",
      card: {
        title: t('howWeWork.step5.card.title'),
        period: t('howWeWork.step5.card.period'),
        live: t('howWeWork.step5.card.live'),
        topProducts: t('howWeWork.step5.card.topProducts'),
        top3: t('howWeWork.step5.card.top3'),
        productNames: [
          t('howWeWork.step5.card.productNames.0'),
          t('howWeWork.step5.card.productNames.1'),
          t('howWeWork.step5.card.productNames.2'),
        ],
        questions: t('howWeWork.step5.card.questions'),
        sentiment: t('howWeWork.step5.card.sentiment'),
        positive: t('howWeWork.step5.card.positive'),
        neutral: t('howWeWork.step5.card.neutral'),
        negative: t('howWeWork.step5.card.negative'),
        improvement: t('howWeWork.step5.card.improvement'),
        improvementText: t('howWeWork.step5.card.improvementText'),
        weeklyInsights: t('howWeWork.step5.card.weeklyInsights'),
      },
    },
  ];

  /* ── render ───────────────────────────────────────────────── */
  return (
    <div className="min-h-screen bg-white" style={{ color: "#10161F" }}>
      <SEO
        title={t('howWeWork.title') + ' - Glimps AI'}
        description={t('howWeWork.description')}
        path="/how-we-work"
      />
      <Navigation />

      {/* ─── Decorative background blobs ─── */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div
          className="absolute -left-[280px] -top-[300px] h-[940px] w-[1240px] rounded-full opacity-[0.55]"
          style={{
            background: "radial-gradient(circle, #D8E4F0 0%, #E7EEF5 62%, rgba(231,238,245,0) 100%)",
            filter: "blur(120px)",
          }}
        />
        <div
          className="absolute right-[-300px] top-[560px] h-[820px] w-[1120px] rounded-full opacity-[0.55]"
          style={{
            background: "radial-gradient(circle, #F6D9D5 0%, #FAE7E5 58%, rgba(250,231,229,0) 100%)",
            filter: "blur(130px)",
          }}
        />
      </div>

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="mx-auto max-w-[1120px] px-6 text-center">
          {/* Uppercase label */}
          <p
            className="mb-6 inline-block font-semibold uppercase tracking-[0.14em]"
            style={{ fontSize: "11.5px", color: "#1B3A5C" }}
          >
            {t('howWeWork.badge')}
          </p>

          <h1
            className="mx-auto max-w-4xl font-serif font-normal leading-[1.08]"
            style={{ fontSize: "clamp(40px, 5.4vw, 78px)", letterSpacing: "-0.025em", color: "#10161F" }}
          >
            {t('howWeWork.title')}{" "}
            <span style={{ color: "#1B3A5C" }}>{t('howWeWork.titleHighlight')}</span>
          </h1>

          <p
            className="mx-auto mt-7 max-w-2xl leading-relaxed"
            style={{ fontSize: "18px", lineHeight: 1.62, color: "#5A6472" }}
          >
            {t('howWeWork.description')}
          </p>
        </div>
      </section>

      {/* ═══════════════════ OVERVIEW GRID (5 step cards) ═══════════════════ */}
      <section className="relative pb-28">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step) => (
              <a
                key={step.number}
                href={`#step-${step.number}`}
                className="group flex flex-col rounded-[20px] bg-white p-7 shadow-[0_2px_24px_-4px_rgba(0,0,0,0.08)] transition-shadow hover:shadow-[0_8px_40px_-8px_rgba(0,0,0,0.13)]"
              >
                <span
                  className="font-serif leading-none"
                  style={{ fontSize: "42px", color: step.accent }}
                >
                  {step.number}
                </span>
                <span
                  className="mt-3 text-[15px] font-semibold"
                  style={{ color: "#10161F" }}
                >
                  {step.label}
                </span>
                <span
                  className="mt-1.5 text-[13.5px] leading-snug"
                  style={{ color: "#5A6472" }}
                >
                  {step.subtitle}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ DETAILED STEPS ═══════════════════ */}
      {steps.map((step, idx) => {
        const Icon = step.icon;
        const isEven = idx % 2 === 1;

        return (
          <section
            key={step.number}
            id={`step-${step.number}`}
            className="relative scroll-mt-24"
            style={{
              paddingTop: "80px",
              paddingBottom: "80px",
              background: isEven ? "#F4F7FA" : "transparent",
            }}
          >
            <div className="mx-auto max-w-[1120px] px-6">
              <div className={`grid items-start gap-16 lg:grid-cols-2 ${isEven ? "lg:direction-rtl" : ""}`}>
                {/* ── Left: text content ── */}
                <div className={isEven ? "lg:[direction:ltr]" : ""}>
                  {/* Step indicator */}
                  <p
                    className="mb-5 font-semibold uppercase tracking-[0.14em]"
                    style={{ fontSize: "11.5px", color: step.accent }}
                  >
                    Stap {step.number}/5
                  </p>

                  <div className="mb-6 flex items-center gap-4">
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-[16px]"
                      style={{ background: step.accentBg }}
                    >
                      <Icon className="h-6 w-6" style={{ color: step.accent }} strokeWidth={1.8} />
                    </div>
                    <h2
                      className="font-serif font-normal leading-[1.1]"
                      style={{ fontSize: "clamp(32px, 3.4vw, 52px)", letterSpacing: "-0.025em" }}
                    >
                      {step.title}
                    </h2>
                  </div>

                  <p
                    className="mb-6 max-w-lg leading-relaxed"
                    style={{ fontSize: "17px", lineHeight: 1.6, color: "#5A6472" }}
                  >
                    {step.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3.5">
                    {step.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2
                          className="mt-0.5 h-[18px] w-[18px] flex-shrink-0"
                          style={{ color: step.accent }}
                          strokeWidth={2}
                        />
                        <span
                          className="text-[15.5px] leading-snug"
                          style={{ color: "#3A4250" }}
                        >
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Warning (step 1 only) */}
                  {step.warning && (
                    <div
                      className="mt-6 rounded-[14px] border px-5 py-4 text-[14px] leading-relaxed"
                      style={{
                        borderColor: "rgba(231,78,77,0.25)",
                        background: "rgba(231,78,77,0.05)",
                        color: "#5A6472",
                      }}
                    >
                      {step.warning}
                    </div>
                  )}

                  {/* Next step link */}
                  {step.next && (
                    <div className="mt-8 flex items-center gap-2 text-[14px] font-medium" style={{ color: step.accent }}>
                      <ArrowRight className="h-4 w-4" />
                      <span>{step.next}</span>
                    </div>
                  )}
                </div>

                {/* ── Right: card ── */}
                <div className={isEven ? "lg:[direction:ltr]" : ""}>
                  {step.number === "1" && (
                    <StepCard1
                      card={step.card as typeof steps[0]["card"]}
                      accent={step.accent}
                    />
                  )}
                  {step.number === "2" && (
                    <StepCard2
                      card={step.card as typeof steps[1]["card"]}
                      accent={step.accent}
                    />
                  )}
                  {step.number === "3" && (
                    <StepCard3
                      card={step.card as typeof steps[2]["card"]}
                      accent={step.accent}
                    />
                  )}
                  {step.number === "4" && (
                    <StepCard4
                      card={step.card as typeof steps[3]["card"]}
                      accent={step.accent}
                    />
                  )}
                  {step.number === "5" && (
                    <StepCard5
                      card={step.card as typeof steps[4]["card"]}
                      accent={step.accent}
                    />
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ═══════════════════ CTA ═══════════════════ */}
      <section className="relative py-28 md:py-36">
        <div className="mx-auto max-w-[720px] px-6 text-center">
          <h2
            className="font-serif font-normal leading-[1.1]"
            style={{ fontSize: "clamp(34px, 3.8vw, 56px)", letterSpacing: "-0.025em" }}
          >
            {t('howWeWork.cta.title')}
          </h2>
          <p
            className="mx-auto mt-5 max-w-md leading-relaxed"
            style={{ fontSize: "17px", lineHeight: 1.6, color: "#5A6472" }}
          >
            {t('howWeWork.cta.description')}
          </p>
          <a
            href="/contact"
            className="mt-9 inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: "#10161F" }}
          >
            {t('howWeWork.cta.button')}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowWeWork;

/* ═══════════════════════════════════════════════════════════════
   STEP DETAIL CARDS — clean white cards with subtle shadows
   ═══════════════════════════════════════════════════════════════ */

/* ── Card wrapper ──────────────────────────────────────────── */
const CardShell = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-[22px] bg-white p-7 shadow-[0_4px_32px_-6px_rgba(0,0,0,0.10)]">
    {children}
  </div>
);

const Pill = ({ children, bg, color }: { children: React.ReactNode; bg: string; color: string }) => (
  <span
    className="inline-flex items-center rounded-full px-3 py-1 text-[12px] font-semibold"
    style={{ background: bg, color }}
  >
    {children}
  </span>
);

/* ── Step 1 : Screening ─────────────────────────────────────── */
function StepCard1({ card, accent }: { card: any; accent: string }) {
  return (
    <CardShell>
      <div className="mb-5 flex items-center justify-between">
        <span className="text-[16px] font-semibold" style={{ color: "#10161F" }}>
          {card.title}
        </span>
        <Pill bg="rgba(14,124,102,0.1)" color="#0E7C66">
          {card.approved}
        </Pill>
      </div>

      <div className="space-y-4">
        {card.items.map((item: any, i: number) => (
          <div key={i}>
            <div className="mb-1.5 flex items-center justify-between text-[14px]">
              <span style={{ color: "#5A6472" }}>{item.label}</span>
              <span className="font-semibold" style={{ color: "#10161F" }}>{item.value}</span>
            </div>
            <div className="h-[6px] w-full rounded-full" style={{ background: "#E7EEF5" }}>
              <div
                className="h-full rounded-full"
                style={{ width: item.value, background: accent }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Readiness score */}
      <div className="mt-7 flex flex-col items-center rounded-[16px] py-6" style={{ background: "#F4F7FA" }}>
        <span className="text-[13px] font-medium" style={{ color: "#5A6472" }}>
          {card.readinessScore}
        </span>
        <div className="relative mt-3 flex h-28 w-28 items-center justify-center">
          <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 112 112">
            <circle cx="56" cy="56" r="48" stroke="#E7EEF5" strokeWidth="7" fill="none" />
            <circle
              cx="56"
              cy="56"
              r="48"
              stroke={accent}
              strokeWidth="7"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 48}`}
              strokeDashoffset={`${2 * Math.PI * 48 * (1 - card.score / 100)}`}
            />
          </svg>
          <div className="relative text-center">
            <span className="font-serif text-[36px] leading-none" style={{ color: accent }}>
              {card.score}
            </span>
            <span className="block text-[12px]" style={{ color: "#5A6472" }}>/100</span>
          </div>
        </div>
      </div>
    </CardShell>
  );
}

/* ── Step 2 : Analyse ───────────────────────────────────────── */
function StepCard2({ card, accent }: { card: any; accent: string }) {
  return (
    <CardShell>
      <div className="mb-5 flex items-center justify-between">
        <span className="text-[16px] font-semibold" style={{ color: "#10161F" }}>
          {card.title}
        </span>
        <Pill bg="rgba(231,78,77,0.10)" color="#E74E4D">
          89% {card.coverage}
        </Pill>
      </div>

      <div className="space-y-2.5">
        {card.questions.map((item: any, i: number) => (
          <div
            key={i}
            className="flex items-center gap-4 rounded-[14px] px-4 py-3 transition-colors hover:bg-[#F4F7FA]"
            style={{ border: "1px solid #E7EEF5" }}
          >
            <span
              className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-[10px] text-[13px] font-bold text-white"
              style={{ background: accent }}
            >
              {i + 1}
            </span>
            <div className="flex-1 min-w-0">
              <div className="text-[14px] font-medium truncate" style={{ color: "#10161F" }}>
                {item.q}
              </div>
              <div className="text-[12.5px]" style={{ color: "#5A6472" }}>
                {item.count} {card.timesAsked}
              </div>
            </div>
            <Pill
              bg={item.trend.startsWith('+') ? "rgba(14,124,102,0.10)" : "rgba(90,100,114,0.10)"}
              color={item.trend.startsWith('+') ? "#0E7C66" : "#5A6472"}
            >
              {item.trend}
            </Pill>
          </div>
        ))}
      </div>

      <div
        className="mt-5 flex items-center gap-3 rounded-[14px] px-5 py-4"
        style={{ background: "#1B3A5C" }}
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-[10px]" style={{ background: accent }}>
          <CheckCircle2 className="h-5 w-5 text-white" />
        </div>
        <div>
          <div className="text-[14px] font-semibold text-white">{card.trainingComplete}</div>
          <div className="text-[12.5px] text-white/70">2.341 {card.conversationsAnalyzed}</div>
        </div>
      </div>
    </CardShell>
  );
}

/* ── Step 3 : Implementatie ─────────────────────────────────── */
function StepCard3({ card, accent }: { card: any; accent: string }) {
  return (
    <CardShell>
      <div className="mb-5 flex items-center justify-between">
        <span className="text-[16px] font-semibold" style={{ color: "#10161F" }}>
          {card.title}
        </span>
        <Pill bg="rgba(14,124,102,0.10)" color="#0E7C66">
          {card.inProgress}
        </Pill>
      </div>

      <div className="space-y-4">
        {card.items.map((item: any, i: number) => (
          <div key={i} className="flex items-center gap-3">
            <CheckCircle2
              className="h-[18px] w-[18px] flex-shrink-0"
              style={{ color: item.pct === 100 ? accent : "#C5CCD6" }}
              strokeWidth={2}
            />
            <div className="flex-1">
              <div
                className="mb-1 text-[14px]"
                style={{ color: item.pct === 100 ? "#10161F" : "#5A6472" }}
              >
                {item.label}
              </div>
              <Bar pct={item.pct} color={accent} />
            </div>
            <span className="text-[13px] font-semibold" style={{ color: "#10161F" }}>
              {item.pct}%
            </span>
          </div>
        ))}
      </div>

      <div className="mt-7 grid grid-cols-3 gap-4 rounded-[16px] py-5 px-4" style={{ background: "#F4F7FA" }}>
        {card.stats.map((s: any, i: number) => (
          <div key={i} className="text-center">
            <div className="font-serif text-[28px] leading-none" style={{ color: accent }}>
              {s.value}
            </div>
            <div className="mt-1 text-[12px]" style={{ color: "#5A6472" }}>{s.label}</div>
          </div>
        ))}
      </div>
    </CardShell>
  );
}

/* ── Step 4 : Livegang ──────────────────────────────────────── */
function StepCard4({ card, accent }: { card: any; accent: string }) {
  return (
    <CardShell>
      <div className="mb-5 flex items-center justify-between">
        <div>
          <span className="text-[16px] font-semibold" style={{ color: "#10161F" }}>
            {card.title}
          </span>
          <span className="ml-2 text-[13px]" style={{ color: "#5A6472" }}>
            {card.period}
          </span>
        </div>
        <Pill bg="rgba(14,124,102,0.10)" color="#0E7C66">
          {card.live}
        </Pill>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {card.metrics.map((m: any, i: number) => (
          <div
            key={i}
            className="rounded-[14px] p-4"
            style={{ background: "#F4F7FA" }}
          >
            <div className="text-[12.5px] font-medium" style={{ color: "#5A6472" }}>
              {m.label}
            </div>
            <div className="mt-1 font-serif text-[32px] leading-none" style={{ color: "#10161F" }}>
              {m.value}
            </div>
            <div className="mt-1 text-[12px] font-semibold" style={{ color: "#0E7C66" }}>
              {m.change} {card.vsPreviousMonth}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-[14px] p-5" style={{ background: "#F4F7FA" }}>
        <div className="mb-2 text-[13px] font-medium" style={{ color: "#5A6472" }}>
          {card.conversionRate}
        </div>
        <div className="mb-3 text-right text-[22px] font-bold" style={{ color: "#0E7C66" }}>+43%</div>
        <div className="flex h-28 items-end gap-1">
          {[30, 45, 40, 55, 50, 65, 60, 75, 70, 85, 80, 90].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-[4px]"
              style={{ height: `${h}%`, background: accent, opacity: 0.3 + (i / 12) * 0.7 }}
            />
          ))}
        </div>
      </div>

      <div
        className="mt-4 flex items-center gap-2 rounded-[12px] px-4 py-3 text-[13px]"
        style={{ background: "rgba(27,58,92,0.06)", color: "#1B3A5C" }}
      >
        <BarChart3 className="h-4 w-4" />
        <span>{card.aiLearning}</span>
      </div>
    </CardShell>
  );
}

/* ── Step 5 : Data Insights ─────────────────────────────────── */
function StepCard5({ card, accent }: { card: any; accent: string }) {
  const sentimentData = [
    { label: card.positive, pct: 78, color: "#0E7C66" },
    { label: card.neutral, pct: 18, color: "#1B3A5C" },
    { label: card.negative, pct: 4, color: "#E74E4D" },
  ];

  return (
    <CardShell>
      <div className="mb-5 flex items-center justify-between">
        <div>
          <span className="text-[16px] font-semibold" style={{ color: "#10161F" }}>
            {card.title}
          </span>
          <span className="ml-2 text-[13px]" style={{ color: "#5A6472" }}>
            {card.period}
          </span>
        </div>
        <Pill bg="rgba(231,78,77,0.10)" color="#E74E4D">
          {card.live}
        </Pill>
      </div>

      {/* Top products */}
      <div className="rounded-[14px] p-4" style={{ background: "#F4F7FA" }}>
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[13px] font-medium" style={{ color: "#5A6472" }}>
            {card.topProducts}
          </span>
          <Pill bg="rgba(27,58,92,0.08)" color="#1B3A5C">{card.top3}</Pill>
        </div>
        <div className="space-y-2">
          {card.productNames.map((name: string, i: number) => (
            <div key={i} className="flex items-center justify-between text-[14px]">
              <span style={{ color: "#10161F" }}>{name}</span>
              <span className="font-semibold" style={{ color: "#10161F" }}>
                {[847, 623, 512][i]} {card.questions}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Sentiment */}
      <div className="mt-4 rounded-[14px] p-4" style={{ background: "#F4F7FA" }}>
        <div className="mb-3 text-[13px] font-medium" style={{ color: "#5A6472" }}>
          {card.sentiment}
        </div>
        <div className="space-y-3">
          {sentimentData.map((s, i) => (
            <div key={i}>
              <div className="mb-1 flex items-center justify-between text-[13px]">
                <span style={{ color: "#5A6472" }}>{s.label}</span>
                <span className="font-semibold" style={{ color: "#10161F" }}>{s.pct}%</span>
              </div>
              <Bar pct={s.pct} color={s.color} />
            </div>
          ))}
        </div>
      </div>

      {/* Improvement */}
      <div
        className="mt-4 flex items-start gap-3 rounded-[14px] px-4 py-3.5"
        style={{ background: "rgba(231,78,77,0.06)" }}
      >
        <BarChart3 className="mt-0.5 h-5 w-5 flex-shrink-0" style={{ color: accent }} />
        <div>
          <div className="text-[13.5px] font-semibold" style={{ color: "#10161F" }}>
            {card.improvement}
          </div>
          <div className="mt-0.5 text-[12.5px] leading-snug" style={{ color: "#5A6472" }}>
            {card.improvementText}
          </div>
        </div>
      </div>

      <div
        className="mt-4 flex items-center gap-2 rounded-[12px] px-4 py-3 text-[13px]"
        style={{ background: "rgba(231,78,77,0.06)", color: accent }}
      >
        <BarChart3 className="h-4 w-4" />
        <span>{card.weeklyInsights}</span>
      </div>
    </CardShell>
  );
}

/* ── Inline bar helper (used inside card components) ── */
function Bar({ pct, color }: { pct: number; color: string }) {
  return (
    <div className="h-[6px] w-full rounded-full" style={{ background: "#E7EEF5" }}>
      <div
        className="h-full rounded-full transition-all duration-500"
        style={{ width: `${pct}%`, background: color }}
      />
    </div>
  );
}
