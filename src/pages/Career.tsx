import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Briefcase, Heart, Code, Zap, Users, TrendingUp } from "lucide-react";

const Career = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Vacatures - Glimps AI | Word deel van ons team"
        description="Werk mee aan de toekomst van e-commerce. Ontdek onze open vacatures en sluit je aan bij het Glimps AI team."
        path="/career"
      />
      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24 text-center">
        <div className="mx-auto max-w-4xl space-y-6">
          <Badge className="mb-4">We're Hiring</Badge>
          <h1 className="font-inter text-4xl font-bold leading-tight md:text-6xl">
            Word deel van ons team
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Bij Glimps werken we aan de toekomst van e-commerce customer service. 
            Sluit je aan bij ons ambitieuze team en help webshops groeien met AI-technologie.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="container mx-auto px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold">Waarom Glimps?</h2>
          <div className="grid gap-8 md:grid-cols-4">
            <Card className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold">Cutting-edge Tech</h3>
              <p className="text-sm text-muted-foreground">
                Werk met de nieuwste AI en automation technologieën
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold">Klein Team</h3>
              <p className="text-sm text-muted-foreground">
                Direct impact op het product en de bedrijfsrichting
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold">Groei Kansen</h3>
              <p className="text-sm text-muted-foreground">
                Leer en groei mee met een snel groeiende startup
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold">Flexibiliteit</h3>
              <p className="text-sm text-muted-foreground">
                Remote werken en flexibele uren mogelijk
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="container mx-auto px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold">Open Vacatures</h2>

          {/* Job Listing */}
          <Card className="overflow-hidden">
            <div className="border-l-4 border-primary bg-gradient-to-br from-primary/5 to-background p-8 md:p-12">
              <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="mb-2 text-3xl font-bold">Allround Developer</h3>
                  <p className="text-lg text-muted-foreground">
                    Met kennis van AI & Automations
                  </p>
                </div>
                <Badge className="bg-primary text-lg">Full-time</Badge>
              </div>

              <div className="mb-8 flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Remote / Hybrid (België)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>40 uur per week</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-primary" />
                  <span>2+ jaar ervaring</span>
                </div>
              </div>

              <div className="space-y-8">
                {/* About the Role */}
                <div>
                  <h4 className="mb-4 flex items-center gap-2 text-xl font-semibold">
                    <Code className="h-5 w-5 text-primary" />
                    Over de Rol
                  </h4>
                  <p className="mb-4 text-muted-foreground">
                    We zoeken een gepassioneerde allround developer die ons helpt onze AI-chatbot 
                    verder te ontwikkelen. Je werkt aan zowel frontend als backend, implementeert 
                    AI-features en bouwt slimme automations die onze klanten helpen meer omzet te genereren.
                  </p>
                  <p className="text-muted-foreground">
                    Als één van de eerste developers bij Glimps heb je direct impact op het product 
                    en de technische richting van het bedrijf. Je werkt nauw samen met de founders 
                    en krijgt veel vrijheid om jouw ideeën te implementeren.
                  </p>
                </div>

                {/* Responsibilities */}
                <div>
                  <h4 className="mb-4 text-xl font-semibold">Jouw Taken</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                      <span className="text-muted-foreground">
                        Ontwikkelen van nieuwe features voor onze AI-chatbot platform
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                      <span className="text-muted-foreground">
                        Integreren van AI-modellen (GPT, Claude, etc.) in onze applicaties
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                      <span className="text-muted-foreground">
                        Bouwen van automations en workflows voor e-commerce integraties
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                      <span className="text-muted-foreground">
                        Optimaliseren van performance en schaalbaarheid
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                      <span className="text-muted-foreground">
                        Samenwerken met het team aan product strategie en roadmap
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Requirements */}
                <div>
                  <h4 className="mb-4 text-xl font-semibold">Wat je Meebrengt</h4>
                  <div className="space-y-6">
                    <div>
                      <h5 className="mb-3 font-semibold text-primary">Vereist</h5>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                          <span className="text-muted-foreground">
                            Minimaal 2 jaar ervaring als full-stack developer
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                          <span className="text-muted-foreground">
                            Sterke kennis van React, TypeScript en moderne web technologieën
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                          <span className="text-muted-foreground">
                            Ervaring met Node.js en REST/GraphQL APIs
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                          <span className="text-muted-foreground">
                            Basiskennis van AI/ML concepten en API integraties (OpenAI, Anthropic, etc.)
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                          <span className="text-muted-foreground">
                            Ervaring met automation tools (Zapier, Make, n8n, of vergelijkbaar)
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                          <span className="text-muted-foreground">
                            Goede communicatie in Nederlands en Engels
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="mb-3 font-semibold text-primary">Nice to Have</h5>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/50"></span>
                          <span className="text-muted-foreground">
                            Ervaring met e-commerce platforms (Shopify, WooCommerce, etc.)
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/50"></span>
                          <span className="text-muted-foreground">
                            Kennis van vector databases en RAG (Retrieval Augmented Generation)
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/50"></span>
                          <span className="text-muted-foreground">
                            Ervaring met cloud platforms (AWS, Azure, GCP)
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/50"></span>
                          <span className="text-muted-foreground">
                            Ervaring in een startup omgeving
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* What We Offer */}
                <div>
                  <h4 className="mb-4 text-xl font-semibold">Wat Wij Bieden</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                      <span className="text-muted-foreground">
                        Competitief salaris en equity opties
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                      <span className="text-muted-foreground">
                        Flexibel werken: remote of hybrid met een modern kantoor
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                      <span className="text-muted-foreground">
                        Budget voor conferenties, cursussen en persoonlijke ontwikkeling
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                      <span className="text-muted-foreground">
                        Nieuwste tech stack en tools om mee te werken
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                      <span className="text-muted-foreground">
                        Team events en borrels
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                      <span className="text-muted-foreground">
                        Direct impact op een snel groeiend product
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Apply CTA */}
              <div className="mt-12 flex flex-col gap-4 rounded-2xl bg-background p-8 text-center md:flex-row md:items-center md:justify-between md:text-left">
                <div>
                  <h4 className="mb-2 text-xl font-semibold">Klinkt dit als jouw droombaan?</h4>
                  <p className="text-muted-foreground">
                    Stuur ons je CV en motivatie. We kijken ernaar uit om van je te horen!
                  </p>
                </div>
                <Button size="lg" className="rounded-full">
                  Solliciteer Nu
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Application Process */}
      <section className="container mx-auto px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold">Het Sollicitatieproces</h2>
          <div className="grid gap-8 md:grid-cols-4">
            <Card className="relative p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                1
              </div>
              <h3 className="mb-2 font-semibold">Sollicitatie</h3>
              <p className="text-sm text-muted-foreground">
                Stuur je CV en motivatiebrief
              </p>
            </Card>

            <Card className="relative p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                2
              </div>
              <h3 className="mb-2 font-semibold">Kennismaking</h3>
              <p className="text-sm text-muted-foreground">
                30 min videocall met de founders
              </p>
            </Card>

            <Card className="relative p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                3
              </div>
              <h3 className="mb-2 font-semibold">Tech Challenge</h3>
              <p className="text-sm text-muted-foreground">
                Praktische opdracht (betaald)
              </p>
            </Card>

            <Card className="relative p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                4
              </div>
              <h3 className="mb-2 font-semibold">Aanbod</h3>
              <p className="text-sm text-muted-foreground">
                Welkom bij het team! 🎉
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Career;
