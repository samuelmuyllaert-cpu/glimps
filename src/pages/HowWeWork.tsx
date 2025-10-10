import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Search, MessageSquare, Settings, Rocket, Database, BarChart3, FileText, Target, Zap, TrendingUp, CheckCircle2, ChevronRight, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const HowWeWork = () => {
  const processSteps = [
    { number: 1, label: "Screening", color: "bg-blue-500" },
    { number: 2, label: "Analyse", color: "bg-red-400" },
    { number: 3, label: "Implementatie", color: "bg-green-500" },
    { number: 4, label: "Livegang", color: "bg-purple-500" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-5xl text-center">
            <Badge variant="outline" className="mb-8 border-primary/30 bg-primary/10 px-6 py-2">
              <span className="text-primary">💡 HOE WE SAMENWERKEN</span>
            </Badge>
            
            <h1 className="mb-6 font-inter text-4xl font-normal leading-tight md:text-6xl lg:text-7xl">
              Van chaos naar controle.<br />
              <span className="text-primary">In 4 stappen.</span>
            </h1>
            
            <p className="mx-auto mb-16 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Geen standaard chatbot. Geen generieke antwoorden. Alleen een AI die jouw business begrijpt, jouw klanten helpt en écht resultaat levert.
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
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500 shadow-lg">
                    <Search className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Stap 1/4</div>
                    <Badge className="bg-blue-500 text-white">● Actief</Badge>
                  </div>
                </div>

                <h2 className="font-inter text-3xl font-normal md:text-5xl">
                  Screening van jouw business
                </h2>

                <p className="text-lg text-muted-foreground">
                  We werken enkel samen met merken die écht klaar zijn voor AI.
                </p>

                <Card className="border-l-4 border-l-blue-500 bg-blue-500/5 p-6">
                  <p className="text-muted-foreground">
                    We screenen je webshop, je data en je systemen om te bepalen waar de grootste winst ligt.
                  </p>
                </Card>

                <Card className="border-l-4 border-l-orange-500 bg-orange-500/5 p-4">
                  <div className="flex gap-3">
                    <AlertCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm">
                      <span className="font-semibold">Let op:</span> We kijken kritisch of we een fit zijn. Kan zijn dat we geen match maken — dat bespaart beide partijen tijd en frustratie.
                    </p>
                  </div>
                </Card>

                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                      <Database className="h-5 w-5 text-blue-500" />
                    </div>
                    <span className="text-base">Analyse van productdata & structuur</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                      <BarChart3 className="h-5 w-5 text-blue-500" />
                    </div>
                    <span className="text-base">Identificatie van grootste kansen</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                      <Target className="h-5 w-5 text-blue-500" />
                    </div>
                    <span className="text-base">Business readiness assessment</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-4 text-sm text-muted-foreground">
                  <ChevronRight className="h-4 w-4" />
                  <span>Volgende: Analyse van klantvragen</span>
                </div>
              </div>

              {/* Right Card */}
              <div className="lg:sticky lg:top-24">
                <Card className="overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white shadow-2xl">
                  <div className="mb-6 flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Business Scan</h3>
                    <Badge className="bg-green-500 text-white">Goedgekeurd ✓</Badge>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-sm">Productdata kwaliteit</span>
                        <span className="font-semibold">94%</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-700">
                        <div className="h-2 rounded-full bg-blue-500" style={{ width: '94%' }} />
                      </div>
                    </div>

                    <div>
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-sm">Data structuur</span>
                        <span className="font-semibold">87%</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-700">
                        <div className="h-2 rounded-full bg-cyan-500" style={{ width: '87%' }} />
                      </div>
                    </div>

                    <div>
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-sm">API beschikbaarheid</span>
                        <span className="font-semibold">100%</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-700">
                        <div className="h-2 rounded-full bg-green-500" style={{ width: '100%' }} />
                      </div>
                    </div>

                    <div>
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-sm">Content volledigheid</span>
                        <span className="font-semibold">76%</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-700">
                        <div className="h-2 rounded-full bg-orange-500" style={{ width: '76%' }} />
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 rounded-xl bg-slate-800/50 p-6 text-center">
                    <div className="mb-2 text-sm text-slate-400">AI Readiness Score</div>
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
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-400 shadow-lg">
                    <MessageSquare className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Stap 2/4</div>
                    <Badge className="bg-red-400 text-white">● Actief</Badge>
                  </div>
                </div>

                <h2 className="font-inter text-3xl font-normal md:text-5xl">
                  Analyse van klantvragen
                </h2>

                <p className="text-lg text-muted-foreground">
                  We onderzoeken 80% van de meest gestelde vragen
                </p>

                <Card className="border-l-4 border-l-red-400 bg-red-400/5 p-6">
                  <p className="text-muted-foreground">
                    Dat is de basis voor maximale automatisering. We analyseren echte klantvragen uit jouw inbox, helpdesk en chat om de AI optimaal te trainen.
                  </p>
                </Card>

                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-400/10">
                      <MessageSquare className="h-5 w-5 text-red-400" />
                    </div>
                    <span className="text-base">80% meest voorkomende vragen</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-400/10">
                      <Target className="h-5 w-5 text-red-400" />
                    </div>
                    <span className="text-base">AI-training op jouw klantgedrag</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-400/10">
                      <FileText className="h-5 w-5 text-red-400" />
                    </div>
                    <span className="text-base">FAQ en beleid mapping</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-4 text-sm text-muted-foreground">
                  <ChevronRight className="h-4 w-4" />
                  <span>Volgende: Implementatie & training</span>
                </div>
              </div>

              {/* Right Card */}
              <div className="lg:sticky lg:top-24">
                <Card className="overflow-hidden bg-card p-6 shadow-xl">
                  <div className="mb-6">
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="text-lg font-semibold">Meest gestelde vragen</h3>
                      <Badge variant="secondary">89% coverage</Badge>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      { q: "Waar is mijn pakket?", count: "847 keer gevraagd", trend: "+12%" },
                      { q: "Wat zijn de verzendkosten?", count: "623 keer gevraagd", trend: "+8%" },
                      { q: "Kan ik dit retourneren?", count: "512 keer gevraagd", trend: "-3%" },
                      { q: "Is dit product beschikbaar?", count: "489 keer gevraagd", trend: "+15%" },
                      { q: "Welke maat moet ik hebben?", count: "401 keer gevraagd", trend: "+22%" }
                    ].map((item, i) => (
                      <Card key={i} className="p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-4">
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-red-400 text-white font-bold">
                            {i + 1}
                          </div>
                          <div className="flex-1">
                            <div className="font-medium">{item.q}</div>
                            <div className="text-sm text-muted-foreground">{item.count}</div>
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
                        <div className="font-semibold">AI Training Complete</div>
                        <div className="text-sm text-slate-300">2.341 gesprekken geanalyseerd</div>
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
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500 shadow-lg">
                    <Settings className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Stap 3/4</div>
                    <Badge className="bg-green-500 text-white">● Actief</Badge>
                  </div>
                </div>

                <h2 className="font-inter text-3xl font-normal md:text-5xl">
                  Implementatie & training
                </h2>

                <p className="text-lg text-muted-foreground">
                  Glimps wordt gevoed met jouw productdata, beleid en tone of voice
                </p>

                <Card className="border-l-4 border-l-green-500 bg-green-500/5 p-6">
                  <p className="text-muted-foreground">
                    Zodat hij klinkt als jouw merk. Elke reactie voelt authentiek, elke aanbeveling is relevant.
                  </p>
                </Card>

                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10">
                      <Zap className="h-5 w-5 text-green-500" />
                    </div>
                    <span className="text-base">Tone of voice matching</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10">
                      <Database className="h-5 w-5 text-green-500" />
                    </div>
                    <span className="text-base">Productdata integratie</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10">
                      <Zap className="h-5 w-5 text-green-500" />
                    </div>
                    <span className="text-base">API koppelingen</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-4 text-sm text-muted-foreground">
                  <ChevronRight className="h-4 w-4" />
                  <span>Volgende: Livegang & optimalisatie</span>
                </div>
              </div>

              {/* Right Card */}
              <div className="lg:sticky lg:top-24">
                <Card className="overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white shadow-2xl">
                  <div className="mb-6 flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Implementatie Status</h3>
                    <Badge className="bg-green-500 text-white">● In Progress</Badge>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      <div className="flex-1">
                        <div className="mb-1 text-sm">Productdata integratie</div>
                        <div className="h-2 rounded-full bg-slate-700">
                          <div className="h-2 rounded-full bg-green-500" style={{ width: '100%' }} />
                        </div>
                      </div>
                      <span className="text-sm">100%</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      <div className="flex-1">
                        <div className="mb-1 text-sm">Tone-of-voice training</div>
                        <div className="h-2 rounded-full bg-slate-700">
                          <div className="h-2 rounded-full bg-green-500" style={{ width: '100%' }} />
                        </div>
                      </div>
                      <span className="text-sm">100%</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="h-5 w-5 rounded-full border-2 border-green-500" />
                      <div className="flex-1">
                        <div className="mb-1 text-sm">API koppelingen</div>
                        <div className="h-2 rounded-full bg-slate-700">
                          <div className="h-2 rounded-full bg-green-500" style={{ width: '75%' }} />
                        </div>
                      </div>
                      <span className="text-sm">75%</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="h-5 w-5 rounded-full border-2 border-slate-600" />
                      <div className="flex-1">
                        <div className="mb-1 text-sm text-slate-400">Testing & QA</div>
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
                      <div className="text-sm text-slate-400">Producten</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">89</div>
                      <div className="text-sm text-slate-400">Categorieën</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">5</div>
                      <div className="text-sm text-slate-400">API's</div>
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
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500 shadow-lg">
                    <Rocket className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Stap 4/4</div>
                    <Badge className="bg-purple-500 text-white">● Actief</Badge>
                  </div>
                </div>

                <h2 className="font-inter text-3xl font-normal md:text-5xl">
                  Livegang & optimalisatie
                </h2>

                <p className="text-lg text-muted-foreground">
                  Na goedkeuring gaat jouw bot live.
                </p>

                <Card className="border-l-4 border-l-purple-500 bg-purple-500/5 p-6">
                  <p className="text-muted-foreground">
                    Vanaf dan verbeteren we continu op basis van echte gesprekken. Nieuwe producten? Nieuwe vragen? De bot leert automatisch bij.
                  </p>
                </Card>

                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10">
                      <TrendingUp className="h-5 w-5 text-purple-500" />
                    </div>
                    <span className="text-base">Continue performance optimalisatie</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10">
                      <Target className="h-5 w-5 text-purple-500" />
                    </div>
                    <span className="text-base">Automatisch leren & verbeteren</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10">
                      <BarChart3 className="h-5 w-5 text-purple-500" />
                    </div>
                    <span className="text-base">Real-time analytics dashboard</span>
                  </div>
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
                        <h3 className="text-lg font-semibold">Live Performance</h3>
                        <div className="text-sm text-slate-400">Laatste 30 dagen</div>
                      </div>
                    </div>
                    <Badge className="bg-green-500 text-white">● Live</Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Card className="border-slate-700 bg-slate-800/50 p-4">
                      <div className="mb-2 flex items-center gap-2 text-sm text-slate-400">
                        <MessageSquare className="h-4 w-4" />
                        <span>Gesprekken</span>
                      </div>
                      <div className="text-3xl font-bold">3.847</div>
                      <div className="mt-1 text-xs text-green-400">+43% vs vorige maand</div>
                    </Card>

                    <Card className="border-slate-700 bg-slate-800/50 p-4">
                      <div className="mb-2 flex items-center gap-2 text-sm text-slate-400">
                        <CheckCircle2 className="h-4 w-4" />
                        <span>Opgelost zonder hulp</span>
                      </div>
                      <div className="text-3xl font-bold">89%</div>
                      <div className="mt-1 text-xs text-green-400">+12% vs vorige maand</div>
                    </Card>
                  </div>

                  <Card className="mt-4 border-slate-700 bg-slate-800/50 p-6">
                    <div className="mb-3 text-sm text-slate-400">Conversie rate</div>
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
                    <span className="text-slate-300">AI leert continu van nieuwe gesprekken</span>
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
              Klaar om te starten?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Laten we samen kijken hoe Glimps jouw klantenservice kan transformeren.
            </p>
            <Button size="lg" className="text-lg" asChild>
              <a href="/contact">Plan een gratis screening</a>
            </Button>
          </div>
        </div>
      </section>

      <ChatWidget />
      <Footer />
    </div>
  );
};

export default HowWeWork;
