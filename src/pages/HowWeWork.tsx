import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Search, MessageSquare, Settings, Rocket, Database, BarChart3, FileText, Target, Zap, TrendingUp, CheckCircle2, ChevronRight, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const HowWeWork = () => {
  const { t } = useLanguage();

  const processSteps = [
    { number: 1, label: t('howWeWork.processSteps.0.label'), color: "bg-blue-500" },
    { number: 2, label: t('howWeWork.processSteps.1.label'), color: "bg-red-400" },
    { number: 3, label: t('howWeWork.processSteps.2.label'), color: "bg-green-500" },
    { number: 4, label: t('howWeWork.processSteps.3.label'), color: "bg-purple-500" },
    { number: 5, label: t('howWeWork.processSteps.4.label'), color: "bg-orange-500" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={t('howWeWork.title') + ' - Glimps AI'}
        description={t('howWeWork.description')}
        path="/how-we-work"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-5xl text-center">
            <Badge variant="outline" className="mb-8 border-primary/30 bg-primary/10 px-6 py-2">
              <span className="text-primary">{t('howWeWork.badge')}</span>
            </Badge>

            <h1 className="mb-6 font-inter text-4xl font-normal leading-tight md:text-6xl lg:text-7xl">
              {t('howWeWork.title')}<br />
              <span className="text-primary">{t('howWeWork.titleHighlight')}</span>
            </h1>

            <p className="mx-auto mb-16 max-w-2xl text-lg text-muted-foreground md:text-xl">
              {t('howWeWork.description')}
            </p>

            {/* Process Steps Indicator */}
            <div className="mx-auto max-w-4xl">
              <div className="relative flex items-center justify-between">
                {/* Connecting Line */}
                <div className="absolute left-0 top-1/2 h-0.5 w-full bg-gradient-to-r from-blue-500 via-red-400 via-green-500 to-purple-500 opacity-30" style={{ transform: 'translateY(-50%)' }} />
                
                {processSteps.map((step, index) => (
                  <div key={step.number} className="relative z-10 flex flex-col items-center gap-3">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-full ${step.color} shadow-lg transition-transform hover:scale-110`}>
                      <span className="text-2xl font-bold text-white">{step.number}</span>
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">{step.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 1: Screening */}
      <section className="relative w-full overflow-hidden py-20 bg-gradient-to-b from-blue-500/5 to-background">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2 items-start">
              {/* Left Content */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
                    <Search className="h-8 w-8 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Stap 1/5</div>
                    <Badge className="bg-blue-500 text-white">● Actief</Badge>
                  </div>
                </div>

                <h2 className="font-inter text-3xl font-normal md:text-5xl">
                  {t('howWeWork.step1.title')}
                </h2>

                <p className="text-lg text-muted-foreground">
                  {t('howWeWork.step1.subtitle')}
                </p>

                <Card className="border-l-4 border-l-blue-500 bg-blue-500/5 p-6">
                  <p className="text-muted-foreground">
                    {t('howWeWork.step1.description')}
                  </p>
                </Card>

                <Card className="border-l-4 border-l-orange-500 bg-orange-500/5 p-4">
                  <div className="flex gap-3">
                    <AlertCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm">
                      {t('howWeWork.step1.warning')}
                    </p>
                  </div>
                </Card>

                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                      <Database className="h-5 w-5 text-blue-500" />
                    </div>
                    <span className="text-base">{t('howWeWork.step1.features.0')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                      <BarChart3 className="h-5 w-5 text-blue-500" />
                    </div>
                    <span className="text-base">{t('howWeWork.step1.features.1')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                      <Target className="h-5 w-5 text-blue-500" />
                    </div>
                    <span className="text-base">{t('howWeWork.step1.features.2')}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-4 text-sm text-muted-foreground">
                  <ChevronRight className="h-4 w-4" />
                  <span>{t('howWeWork.step1.next')}</span>
                </div>
              </div>

              {/* Right Card */}
              <div className="lg:sticky lg:top-24">
                <Card className="overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white shadow-2xl">
                  <div className="mb-6 flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{t('howWeWork.step1.card.title')}</h3>
                    <Badge className="bg-green-500 text-white">{t('howWeWork.step1.card.approved')}</Badge>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-sm">{t('howWeWork.step1.card.dataQuality')}</span>
                        <span className="font-semibold">94%</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-700">
                        <div className="h-2 rounded-full bg-blue-500" style={{ width: '94%' }} />
                      </div>
                    </div>

                    <div>
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-sm">{t('howWeWork.step1.card.dataStructure')}</span>
                        <span className="font-semibold">87%</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-700">
                        <div className="h-2 rounded-full bg-cyan-500" style={{ width: '87%' }} />
                      </div>
                    </div>

                    <div>
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-sm">{t('howWeWork.step1.card.apiAvailability')}</span>
                        <span className="font-semibold">100%</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-700">
                        <div className="h-2 rounded-full bg-green-500" style={{ width: '100%' }} />
                      </div>
                    </div>

                    <div>
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-sm">{t('howWeWork.step1.card.contentCompleteness')}</span>
                        <span className="font-semibold">76%</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-700">
                        <div className="h-2 rounded-full bg-orange-500" style={{ width: '76%' }} />
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 rounded-xl bg-slate-800/50 p-6 text-center">
                    <div className="mb-2 text-sm text-slate-400">{t('howWeWork.step1.card.readinessScore')}</div>
                    <div className="relative mx-auto mb-4 flex h-32 w-32 items-center justify-center">
                      <svg className="absolute inset-0 h-full w-full -rotate-90 transform">
                        <circle
                          cx="64"
                          cy="64"
                          r="56"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="transparent"
                          className="text-slate-700"
                        />
                        <circle
                          cx="64"
                          cy="64"
                          r="56"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="transparent"
                          strokeDasharray={`${2 * Math.PI * 56}`}
                          strokeDashoffset={`${2 * Math.PI * 56 * (1 - 0.89)}`}
                          className="text-blue-500"
                        />
                      </svg>
                      <div className="relative">
                        <div className="text-4xl font-bold">89</div>
                        <div className="text-sm text-slate-400">/100</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 2: Analyse */}
      <section className="relative w-full overflow-hidden py-20 bg-gradient-to-b from-background via-red-400/5 to-background">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2 items-start">
              {/* Left Content */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-red-400 to-red-500 shadow-lg">
                    <MessageSquare className="h-8 w-8 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Stap 2/5</div>
                    <Badge className="bg-red-400 text-white">● Actief</Badge>
                  </div>
                </div>

                <h2 className="font-inter text-3xl font-normal md:text-5xl">
                  {t('howWeWork.step2.title')}
                </h2>

                <p className="text-lg text-muted-foreground">
                  {t('howWeWork.step2.subtitle')}
                </p>

                <Card className="border-l-4 border-l-red-400 bg-red-400/5 p-6">
                  <p className="text-muted-foreground">
                    {t('howWeWork.step2.description')}
                  </p>
                </Card>

                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-400/10">
                      <MessageSquare className="h-5 w-5 text-red-400" />
                    </div>
                    <span className="text-base">{t('howWeWork.step2.features.0')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-400/10">
                      <Target className="h-5 w-5 text-red-400" />
                    </div>
                    <span className="text-base">{t('howWeWork.step2.features.1')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-400/10">
                      <FileText className="h-5 w-5 text-red-400" />
                    </div>
                    <span className="text-base">{t('howWeWork.step2.features.2')}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-4 text-sm text-muted-foreground">
                  <ChevronRight className="h-4 w-4" />
                  <span>{t('howWeWork.step2.next')}</span>
                </div>
              </div>

              {/* Right Card */}
              <div className="lg:sticky lg:top-24">
                <Card className="overflow-hidden bg-card p-6 shadow-xl">
                  <div className="mb-6">
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="text-lg font-semibold">{t('howWeWork.step2.card.title')}</h3>
                      <Badge variant="secondary">89% {t('howWeWork.step2.card.coverage')}</Badge>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      { q: t('howWeWork.step2.card.questions.0'), count: "847", trend: "+12%" },
                      { q: t('howWeWork.step2.card.questions.1'), count: "623", trend: "+8%" },
                      { q: t('howWeWork.step2.card.questions.2'), count: "512", trend: "-3%" },
                      { q: t('howWeWork.step2.card.questions.3'), count: "489", trend: "+15%" },
                      { q: t('howWeWork.step2.card.questions.4'), count: "401", trend: "+22%" }
                    ].map((item, i) => (
                      <Card key={i} className="p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-4">
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-red-400 text-white font-bold">
                            {i + 1}
                          </div>
                          <div className="flex-1">
                            <div className="font-medium">{item.q}</div>
                            <div className="text-sm text-muted-foreground">{item.count} {t('howWeWork.step2.card.timesAsked')}</div>
                          </div>
                          <Badge variant={item.trend.startsWith('+') ? 'default' : 'secondary'} className={item.trend.startsWith('+') ? 'bg-green-500' : 'bg-muted'}>
                            {item.trend}
                          </Badge>
                        </div>
                      </Card>
                    ))}
                  </div>

                  <Card className="mt-6 bg-gradient-to-br from-slate-900 to-slate-800 p-4 text-white">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-400">
                        <Target className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="font-semibold">{t('howWeWork.step2.card.trainingComplete')}</div>
                        <div className="text-sm text-slate-300">2.341 {t('howWeWork.step2.card.conversationsAnalyzed')}</div>
                      </div>
                    </div>
                  </Card>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 3: Implementatie */}
      <section className="relative w-full overflow-hidden py-20 bg-gradient-to-b from-background via-green-500/5 to-background">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2 items-start">
              {/* Left Content */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-green-600 shadow-lg">
                    <Settings className="h-8 w-8 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Stap 3/5</div>
                    <Badge className="bg-green-500 text-white">● Actief</Badge>
                  </div>
                </div>

                <h2 className="font-inter text-3xl font-normal md:text-5xl">
                  {t('howWeWork.step3.title')}
                </h2>

                <p className="text-lg text-muted-foreground">
                  {t('howWeWork.step3.subtitle')}
                </p>

                <Card className="border-l-4 border-l-green-500 bg-green-500/5 p-6">
                  <p className="text-muted-foreground">
                    {t('howWeWork.step3.description')}
                  </p>
                </Card>

                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10">
                      <Zap className="h-5 w-5 text-green-500" />
                    </div>
                    <span className="text-base">{t('howWeWork.step3.features.0')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10">
                      <Database className="h-5 w-5 text-green-500" />
                    </div>
                    <span className="text-base">{t('howWeWork.step3.features.1')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10">
                      <Zap className="h-5 w-5 text-green-500" />
                    </div>
                    <span className="text-base">{t('howWeWork.step3.features.2')}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-4 text-sm text-muted-foreground">
                  <ChevronRight className="h-4 w-4" />
                  <span>{t('howWeWork.step3.next')}</span>
                </div>
              </div>

              {/* Right Card */}
              <div className="lg:sticky lg:top-24">
                <Card className="overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white shadow-2xl">
                  <div className="mb-6 flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{t('howWeWork.step3.card.title')}</h3>
                    <Badge className="bg-green-500 text-white">{t('howWeWork.step3.card.inProgress')}</Badge>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      <div className="flex-1">
                        <div className="mb-1 text-sm">{t('howWeWork.step3.card.productIntegration')}</div>
                        <div className="h-2 rounded-full bg-slate-700">
                          <div className="h-2 rounded-full bg-green-500" style={{ width: '100%' }} />
                        </div>
                      </div>
                      <span className="text-sm">100%</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      <div className="flex-1">
                        <div className="mb-1 text-sm">{t('howWeWork.step3.card.toneTraining')}</div>
                        <div className="h-2 rounded-full bg-slate-700">
                          <div className="h-2 rounded-full bg-green-500" style={{ width: '100%' }} />
                        </div>
                      </div>
                      <span className="text-sm">100%</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="h-5 w-5 rounded-full border-2 border-green-500" />
                      <div className="flex-1">
                        <div className="mb-1 text-sm">{t('howWeWork.step3.card.apiConnections')}</div>
                        <div className="h-2 rounded-full bg-slate-700">
                          <div className="h-2 rounded-full bg-green-500" style={{ width: '75%' }} />
                        </div>
                      </div>
                      <span className="text-sm">75%</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="h-5 w-5 rounded-full border-2 border-slate-600" />
                      <div className="flex-1">
                        <div className="mb-1 text-sm text-slate-400">{t('howWeWork.step3.card.testingQA')}</div>
                        <div className="h-2 rounded-full bg-slate-700">
                          <div className="h-2 rounded-full bg-green-500" style={{ width: '45%' }} />
                        </div>
                      </div>
                      <span className="text-sm">45%</span>
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-3 gap-4 rounded-xl bg-slate-800/50 p-6">
                    <div>
                      <div className="text-3xl font-bold">1.247</div>
                      <div className="text-sm text-slate-400">{t('howWeWork.step3.card.products')}</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">89</div>
                      <div className="text-sm text-slate-400">{t('howWeWork.step3.card.categories')}</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">5</div>
                      <div className="text-sm text-slate-400">{t('howWeWork.step3.card.apis')}</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 4: Livegang */}
      <section className="relative w-full overflow-hidden py-20 bg-gradient-to-b from-background via-purple-500/5 to-background">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2 items-start">
              {/* Left Content */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg">
                    <Rocket className="h-8 w-8 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Stap 4/5</div>
                    <Badge className="bg-purple-500 text-white">● Actief</Badge>
                  </div>
                </div>

                <h2 className="font-inter text-3xl font-normal md:text-5xl">
                  {t('howWeWork.step4.title')}
                </h2>

                <p className="text-lg text-muted-foreground">
                  {t('howWeWork.step4.subtitle')}
                </p>

                <Card className="border-l-4 border-l-purple-500 bg-purple-500/5 p-6">
                  <p className="text-muted-foreground">
                    {t('howWeWork.step4.description')}
                  </p>
                </Card>

                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10">
                      <TrendingUp className="h-5 w-5 text-purple-500" />
                    </div>
                    <span className="text-base">{t('howWeWork.step4.features.0')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10">
                      <Target className="h-5 w-5 text-purple-500" />
                    </div>
                    <span className="text-base">{t('howWeWork.step4.features.1')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10">
                      <BarChart3 className="h-5 w-5 text-purple-500" />
                    </div>
                    <span className="text-base">{t('howWeWork.step4.features.2')}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-4 text-sm text-muted-foreground">
                  <ChevronRight className="h-4 w-4" />
                  <span>{t('howWeWork.step4.next')}</span>
                </div>
              </div>

              {/* Right Card */}
              <div className="lg:sticky lg:top-24">
                <Card className="overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white shadow-2xl">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500">
                        <TrendingUp className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{t('howWeWork.step4.card.title')}</h3>
                        <div className="text-sm text-slate-400">{t('howWeWork.step4.card.period')}</div>
                      </div>
                    </div>
                    <Badge className="bg-green-500 text-white">{t('howWeWork.step4.card.live')}</Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Card className="border-slate-700 bg-slate-800/50 p-4">
                      <div className="mb-2 flex items-center gap-2 text-sm text-slate-400">
                        <MessageSquare className="h-4 w-4" />
                        <span>{t('howWeWork.step4.card.conversations')}</span>
                      </div>
                      <div className="text-3xl font-bold">3.847</div>
                      <div className="mt-1 text-xs text-green-400">+43% {t('howWeWork.step4.card.vsPreviousMonth')}</div>
                    </Card>

                    <Card className="border-slate-700 bg-slate-800/50 p-4">
                      <div className="mb-2 flex items-center gap-2 text-sm text-slate-400">
                        <CheckCircle2 className="h-4 w-4" />
                        <span>{t('howWeWork.step4.card.resolvedWithoutHelp')}</span>
                      </div>
                      <div className="text-3xl font-bold">89%</div>
                      <div className="mt-1 text-xs text-green-400">+12% {t('howWeWork.step4.card.vsPreviousMonth')}</div>
                    </Card>
                  </div>

                  <Card className="mt-4 border-slate-700 bg-slate-800/50 p-6">
                    <div className="mb-3 text-sm text-slate-400">{t('howWeWork.step4.card.conversionRate')}</div>
                    <div className="mb-2 text-right text-2xl font-bold text-green-400">+43%</div>
                    <div className="h-32 rounded-lg bg-slate-900/50 p-4">
                      {/* Simplified chart visualization */}
                      <div className="flex h-full items-end justify-between gap-1">
                        {[30, 45, 40, 55, 50, 65, 60, 75, 70, 85, 80, 90].map((height, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-t bg-gradient-to-t from-purple-500 to-purple-400"
                            style={{ height: `${height}%` }}
                          />
                        ))}
                      </div>
                    </div>
                  </Card>

                  <div className="mt-6 flex items-center gap-2 rounded-lg bg-slate-800/50 p-4 text-sm">
                    <Target className="h-4 w-4 text-purple-400" />
                    <span className="text-slate-300">{t('howWeWork.step4.card.aiLearning')}</span>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 5: Data Insights */}
      <section className="relative w-full overflow-hidden py-20 bg-gradient-to-b from-background via-orange-500/5 to-background">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2 items-start">
              {/* Left Content */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg">
                    <BarChart3 className="h-8 w-8 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Stap 5/5</div>
                    <Badge className="bg-orange-500 text-white">● Actief</Badge>
                  </div>
                </div>

                <h2 className="font-inter text-3xl font-normal md:text-5xl">
                  {t('howWeWork.step5.title')}
                </h2>

                <p className="text-lg text-muted-foreground">
                  {t('howWeWork.step5.subtitle')}
                </p>

                <Card className="border-l-4 border-l-orange-500 bg-orange-500/5 p-6">
                  <p className="text-muted-foreground">
                    {t('howWeWork.step5.description')}
                  </p>
                </Card>

                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10">
                      <TrendingUp className="h-5 w-5 text-orange-500" />
                    </div>
                    <span className="text-base">{t('howWeWork.step5.features.0')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10">
                      <Target className="h-5 w-5 text-orange-500" />
                    </div>
                    <span className="text-base">{t('howWeWork.step5.features.1')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10">
                      <BarChart3 className="h-5 w-5 text-orange-500" />
                    </div>
                    <span className="text-base">{t('howWeWork.step5.features.2')}</span>
                  </div>
                </div>
              </div>

              {/* Right Card */}
              <div className="lg:sticky lg:top-24">
                <Card className="overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white shadow-2xl">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500">
                        <BarChart3 className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{t('howWeWork.step5.card.title')}</h3>
                        <div className="text-sm text-slate-400">{t('howWeWork.step5.card.period')}</div>
                      </div>
                    </div>
                    <Badge className="bg-orange-500 text-white">{t('howWeWork.step5.card.live')}</Badge>
                  </div>

                  <div className="space-y-4">
                    <Card className="border-slate-700 bg-slate-800/50 p-4">
                      <div className="mb-3 flex items-center justify-between">
                        <span className="text-sm text-slate-400">{t('howWeWork.step5.card.topProducts')}</span>
                        <Badge variant="secondary" className="text-xs">{t('howWeWork.step5.card.top3')}</Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm text-white">
                          <span>{t('howWeWork.step5.card.productNames.0')}</span>
                          <span className="font-semibold">847 {t('howWeWork.step5.card.questions')}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm text-white">
                          <span>{t('howWeWork.step5.card.productNames.1')}</span>
                          <span className="font-semibold">623 {t('howWeWork.step5.card.questions')}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm text-white">
                          <span>{t('howWeWork.step5.card.productNames.2')}</span>
                          <span className="font-semibold">512 {t('howWeWork.step5.card.questions')}</span>
                        </div>
                      </div>
                    </Card>

                    <Card className="border-slate-700 bg-slate-800/50 p-4">
                      <div className="mb-3 text-sm text-slate-400">{t('howWeWork.step5.card.sentiment')}</div>
                      <div className="space-y-3">
                        <div>
                          <div className="mb-1 flex items-center justify-between text-sm">
                            <span>{t('howWeWork.step5.card.positive')}</span>
                            <span className="font-semibold">78%</span>
                          </div>
                          <div className="h-2 rounded-full bg-slate-700">
                            <div className="h-2 rounded-full bg-green-500" style={{ width: '78%' }} />
                          </div>
                        </div>
                        <div>
                          <div className="mb-1 flex items-center justify-between text-sm">
                            <span>{t('howWeWork.step5.card.neutral')}</span>
                            <span className="font-semibold">18%</span>
                          </div>
                          <div className="h-2 rounded-full bg-slate-700">
                            <div className="h-2 rounded-full bg-yellow-500" style={{ width: '18%' }} />
                          </div>
                        </div>
                        <div>
                          <div className="mb-1 flex items-center justify-between text-sm">
                            <span>{t('howWeWork.step5.card.negative')}</span>
                            <span className="font-semibold">4%</span>
                          </div>
                          <div className="h-2 rounded-full bg-slate-700">
                            <div className="h-2 rounded-full bg-red-500" style={{ width: '4%' }} />
                          </div>
                        </div>
                      </div>
                    </Card>

                    <Card className="border-slate-700 bg-slate-800/50 p-4">
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-orange-500/20">
                          <Target className="h-5 w-5 text-orange-400" />
                        </div>
                        <div>
                          <div className="mb-1 font-semibold text-sm">{t('howWeWork.step5.card.improvement')}</div>
                          <div className="text-xs text-slate-400">
                            {t('howWeWork.step5.card.improvementText')}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>

                  <div className="mt-6 flex items-center gap-2 rounded-lg bg-slate-800/50 p-4 text-sm">
                    <TrendingUp className="h-4 w-4 text-orange-400" />
                    <span className="text-slate-300">{t('howWeWork.step5.card.weeklyInsights')}</span>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-primary/5 to-background py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 font-inter text-3xl font-normal md:text-5xl">
              {t('howWeWork.cta.title')}
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              {t('howWeWork.cta.description')}
            </p>
            <Button size="lg" className="text-lg" asChild>
              <a href="/contact">{t('howWeWork.cta.button')}</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowWeWork;
