import Navigation from "@/components/Navigation";
import { Check, Bot, RefreshCw, Package, RotateCcw, Users, MessageSquare, Code, ShoppingCart, Inbox } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Features = () => {
  const features = [
    {
      icon: Bot,
      badge: "CHECKOUT BOT",
      title: "Begeleid klanten naar een succesvolle aankoop",
      description: "Onze checkout bot helpt klanten door het bestelproces met slimme suggesties, directe productinformatie en een naadloze afhandeling. Verhoog je conversie met tot 40%.",
      benefits: [
        "Direct bestelling plaatsen via chat",
        "Automatische upselling en bundel suggesties",
        "Live voorraad en leveringstijden"
      ],
      mockupType: "checkout"
    },
    {
      icon: Package,
      badge: "PAKKET TRACKING",
      title: "Live tracking informatie direct in de chat",
      description: "Klanten kunnen eenvoudig hun pakket status opvragen en realtime updates ontvangen. Verminder support tickets met 70%.",
      benefits: [
        "Integratie met alle major carriers",
        "Proactieve updates bij vertraging",
        "Bezorgtijdvenster communicatie"
      ],
      mockupType: "tracking"
    },
    {
      icon: RotateCcw,
      badge: "RETOUR AFHANDELING",
      title: "Maak retouren simpel voor jou en je klanten",
      description: "Automatiseer het complete retourproces met slimme vragenlijsten, directe label generatie en automatische updates. Verhoog klanttevredenheid en reduceer werkdruk.",
      benefits: [
        "Automatische retourlabel generatie",
        "Slimme vragenflow voor retour reden",
        "Directe terugbetaling bij ontvangst"
      ],
      mockupType: "return"
    },
    {
      icon: ShoppingCart,
      badge: "PRODUCT CAROUSEL",
      title: "Slimme product suggesties met AI-powered upsell",
      description: "Toon relevante producten in een visueel aantrekkelijke carousel met intelligente upsell en cross-sell suggesties op basis van gedrag en voorkeuren.",
      benefits: [
        "Dynamische product aanbevelingen",
        "Automatische bundel suggesties",
        "Visuele productweergave met prijzen"
      ],
      mockupType: "carousel"
    },
    {
      icon: Inbox,
      badge: "AI INBOX & INZICHTEN",
      title: "Krijg diepgaande inzichten met AI-powered analytics",
      description: "Onze AI analyseert alle conversaties en geeft je actionable insights om je service te verbeteren. Stel vragen aan de AI agent over trends en klantgedrag.",
      benefits: [
        "Realtime dashboard met KPI's",
        "AI-gegenereerde verbeterpunten",
        "Conversatie analyse en sentiment tracking"
      ],
      mockupType: "insights"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background">
      <Navigation />
      
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="font-inter text-4xl md:text-6xl font-normal mb-6 leading-tight">
              Onze AI chatbot biedt complete functionaliteit voor elke fase van de customer journey
            </h1>
          </div>

          {/* Features */}
          <div className="space-y-32">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content Side */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <Badge variant="outline" className="mb-6 px-4 py-2 bg-primary/10 border-primary/20 text-primary">
                    <feature.icon className="w-4 h-4 mr-2" />
                    {feature.badge}
                  </Badge>
                  
                  <h2 className="font-inter text-3xl md:text-4xl font-normal mb-4 leading-tight">
                    {feature.title}
                  </h2>
                  
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="space-y-3">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mockup Side */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative">
                    {/* Background gradient blur */}
                    <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-2xl" />
                    
                    {/* Main mockup card */}
                    <div className="relative bg-card border border-border rounded-2xl shadow-2xl p-8">
                      {feature.mockupType === "checkout" && (
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                            <MessageSquare className="w-5 h-5 text-primary" />
                            <span className="text-sm">Wil je deze items bestellen?</span>
                          </div>
                          <div className="space-y-3">
                            <div className="flex items-center gap-4 p-3 bg-muted/30 rounded-lg">
                              <div className="w-16 h-16 bg-muted rounded" />
                              <div className="flex-1">
                                <div className="h-3 bg-muted rounded w-3/4 mb-2" />
                                <div className="h-3 bg-muted rounded w-1/2" />
                              </div>
                              <span className="text-primary font-semibold">€49,99</span>
                            </div>
                            <div className="flex items-center gap-4 p-3 bg-muted/30 rounded-lg">
                              <div className="w-16 h-16 bg-muted rounded" />
                              <div className="flex-1">
                                <div className="h-3 bg-muted rounded w-3/4 mb-2" />
                                <div className="h-3 bg-muted rounded w-1/2" />
                              </div>
                              <span className="text-primary font-semibold">€29,99</span>
                            </div>
                          </div>
                          <div className="pt-4 border-t border-border space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Subtotaal</span>
                              <span>€79,98</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span>Verzending</span>
                              <span className="text-green-500">Gratis</span>
                            </div>
                            <div className="flex justify-between font-semibold text-lg pt-2">
                              <span>Totaal</span>
                              <span>€79,98</span>
                            </div>
                          </div>
                          <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                            Naar checkout
                          </button>
                        </div>
                      )}

                      {feature.mockupType === "tracking" && (
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                            <Package className="w-5 h-5 text-primary" />
                            <span className="text-sm">Je pakket is onderweg! 📦</span>
                          </div>
                          <div className="space-y-4 p-4">
                            <div className="flex items-start gap-4">
                              <div className="w-12 h-12 bg-muted rounded-lg" />
                              <div className="flex-1 space-y-2">
                                <div className="h-3 bg-muted rounded w-3/4" />
                                <div className="h-3 bg-muted rounded w-1/2" />
                              </div>
                            </div>
                            <div className="relative space-y-4 pl-6 border-l-2 border-primary/30">
                              <div className="relative">
                                <div className="absolute -left-[29px] w-4 h-4 rounded-full bg-primary" />
                                <div>
                                  <div className="font-semibold">Bestelling ontvangen</div>
                                  <div className="text-sm text-muted-foreground">Ma 14:23</div>
                                </div>
                              </div>
                              <div className="relative">
                                <div className="absolute -left-[29px] w-4 h-4 rounded-full bg-primary" />
                                <div>
                                  <div className="font-semibold">In sorteercentrum</div>
                                  <div className="text-sm text-muted-foreground">Di 08:15</div>
                                </div>
                              </div>
                              <div className="relative">
                                <div className="absolute -left-[29px] w-4 h-4 rounded-full border-2 border-border bg-background" />
                                <div>
                                  <div className="text-muted-foreground">Onderweg naar jou</div>
                                  <div className="text-sm text-muted-foreground">Verwacht: Wo voor 18:00</div>
                                </div>
                              </div>
                            </div>
                            <div className="p-3 bg-primary/10 rounded-lg text-sm text-primary">
                              📍 Bezorging morgen voor 18:00
                            </div>
                          </div>
                        </div>
                      )}

                      {feature.mockupType === "return" && (
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                            <RotateCcw className="w-5 h-5 text-primary" />
                            <span className="text-sm">Ik help je graag met je retour</span>
                          </div>
                          <div className="p-4 border border-border rounded-lg space-y-4">
                            <div className="text-sm font-semibold">Selecteer product</div>
                            <div className="flex items-center gap-3 p-3 bg-primary/10 border border-primary/20 rounded-lg">
                              <div className="w-16 h-16 bg-muted rounded" />
                              <div className="flex-1">
                                <div className="h-3 bg-muted rounded w-3/4 mb-2" />
                                <div className="text-xs text-primary">Maat: L • Kleur: Zwart</div>
                              </div>
                              <Check className="w-5 h-5 text-primary" />
                            </div>
                            <div className="text-sm font-semibold">Wat is de reden?</div>
                            <div className="grid grid-cols-2 gap-2">
                              <button className="p-3 border border-border rounded-lg text-sm hover:border-primary/50 transition-colors">
                                🔧 Verkeerde maat
                              </button>
                              <button className="p-3 bg-primary text-primary-foreground rounded-lg text-sm font-semibold">
                                ❌ Verkeerde kleur
                              </button>
                              <button className="p-3 border border-border rounded-lg text-sm hover:border-primary/50 transition-colors">
                                ⚠️ Defect
                              </button>
                              <button className="p-3 border border-border rounded-lg text-sm hover:border-primary/50 transition-colors">
                                📦 Anders
                              </button>
                            </div>
                            <button className="w-full bg-foreground text-background py-3 rounded-lg font-semibold hover:bg-foreground/90 transition-colors">
                              Retourlabel maken
                            </button>
                          </div>
                          <div className="p-3 bg-blue-500/10 rounded-lg text-sm text-blue-600">
                            💡 Je ontvangt het retourlabel per email binnen 5 minuten
                          </div>
                        </div>
                      )}

                      {feature.mockupType === "carousel" && (
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                            <ShoppingCart className="w-5 h-5 text-primary" />
                            <span className="text-sm">Perfect! Deze passen hier ook goed bij:</span>
                          </div>
                          <div className="grid grid-cols-3 gap-3">
                            <div className="p-3 border border-border rounded-lg space-y-2">
                              <div className="w-full aspect-square bg-muted rounded" />
                              <div className="h-2 bg-muted rounded w-3/4" />
                              <div className="h-2 bg-muted rounded w-1/2" />
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-semibold text-primary">€39,99</span>
                                <div className="w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center text-primary text-xs">+</div>
                              </div>
                            </div>
                            <div className="p-3 border-2 border-primary bg-primary/5 rounded-lg space-y-2 relative">
                              <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-primary text-primary-foreground text-xs rounded-full">
                                Populair
                              </div>
                              <div className="w-full aspect-square bg-muted rounded" />
                              <div className="h-2 bg-muted rounded w-3/4" />
                              <div className="h-2 bg-muted rounded w-1/2" />
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-semibold text-primary">€49,99</span>
                                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                                  <Check className="w-4 h-4 text-primary-foreground" />
                                </div>
                              </div>
                            </div>
                            <div className="p-3 border border-border rounded-lg space-y-2">
                              <div className="w-full aspect-square bg-muted rounded" />
                              <div className="h-2 bg-muted rounded w-3/4" />
                              <div className="h-2 bg-muted rounded w-1/2" />
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-semibold text-primary">€29,99</span>
                                <div className="w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center text-primary text-xs">+</div>
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-1 justify-center">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            <div className="w-2 h-2 rounded-full bg-muted" />
                            <div className="w-2 h-2 rounded-full bg-muted" />
                            <div className="w-2 h-2 rounded-full bg-muted" />
                          </div>
                          <div className="p-3 bg-primary/10 rounded-lg text-sm text-primary">
                            🎁 Bestel 2 producten en krijg 10% korting
                          </div>
                        </div>
                      )}

                      {feature.mockupType === "insights" && (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="font-semibold">Dashboard Inzichten</h3>
                            <select className="text-sm border border-border rounded px-3 py-1">
                              <option>Laatste 7 dagen</option>
                            </select>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="p-4 border border-border rounded-lg">
                              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                                <MessageSquare className="w-4 h-4" />
                                Conversaties
                              </div>
                              <div className="text-2xl font-bold">2,847</div>
                              <div className="text-sm text-green-500">↗ +23%</div>
                            </div>
                            <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                                📊 Tevredenheid
                              </div>
                              <div className="text-2xl font-bold">89%</div>
                              <div className="text-sm text-green-500">↗ +5%</div>
                            </div>
                          </div>
                          <div className="p-4 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg">
                            <div className="flex items-start gap-3 mb-3">
                              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                                <Inbox className="w-5 h-5 text-primary" />
                              </div>
                              <div>
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="font-semibold">AI Inzicht</span>
                                  <Badge variant="secondary" className="text-xs">Nieuw</Badge>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                  Veel klanten vragen naar verzendkosten. Overweeg gratis verzending vanaf €50 om conversie te verhogen.
                                </p>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors">
                                Implementeer
                              </button>
                              <button className="px-4 py-2 border border-border rounded-lg text-sm hover:bg-muted/50 transition-colors">
                                Meer info
                              </button>
                            </div>
                          </div>
                          <div className="p-4 border border-border rounded-lg">
                            <div className="text-sm font-semibold mb-3">Top vragen deze week</div>
                            <div className="space-y-3">
                              <div>
                                <div className="flex justify-between text-sm mb-1">
                                  <span>Verzendkosten</span>
                                  <span className="font-semibold">287x</span>
                                </div>
                                <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
                                  <div className="h-full bg-primary rounded-full" style={{width: '85%'}} />
                                </div>
                              </div>
                              <div>
                                <div className="flex justify-between text-sm mb-1">
                                  <span>Retourbeleid</span>
                                  <span className="font-semibold">183x</span>
                                </div>
                                <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
                                  <div className="h-full bg-primary rounded-full" style={{width: '55%'}} />
                                </div>
                              </div>
                              <div>
                                <div className="flex justify-between text-sm mb-1">
                                  <span>Levertijd</span>
                                  <span className="font-semibold">156x</span>
                                </div>
                                <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
                                  <div className="h-full bg-primary rounded-full" style={{width: '45%'}} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-32 text-center">
            <div className="inline-flex flex-col items-center gap-4 p-8 rounded-3xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
              <h3 className="font-inter text-2xl font-semibold">
                Klaar om te beginnen?
              </h3>
              <p className="text-muted-foreground max-w-md">
                Ontdek hoe onze AI-chatbot jouw e-commerce klantenservice naar een hoger niveau tilt.
              </p>
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-semibold transition-colors">
                Gratis aanmelden
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
