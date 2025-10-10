import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { Card } from "@/components/ui/card";
import { CheckCircle, Target, Users, TrendingUp, Lightbulb, Shield } from "lucide-react";
import { useEffect } from "react";

const Consultancy = () => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Consultancy & Advies
          </div>
          <h1 className="mb-6 font-inter text-4xl font-bold leading-tight md:text-6xl">
            Jouw Partner in Slimme E-commerce Automatisering
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Bij Glimps zijn we meer dan alleen een AI-chatbot platform. Met jarenlange ervaring in e-commerce 
            en klantenservice helpen we je het beste systeem te kiezen dat perfect past bij jouw business.
          </p>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold">Waarom Glimps als Adviseur?</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="p-8">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-4 text-xl font-bold">Jaren Ervaring</h3>
              <p className="text-muted-foreground">
                Diepe kennis van de e-commerce sector en klantenservice automatisering. 
                We begrijpen de uitdagingen waar jouw business mee te maken heeft.
              </p>
            </Card>

            <Card className="p-8">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-4 text-xl font-bold">Eerlijk Advies</h3>
              <p className="text-muted-foreground">
                We adviseren je objectief of Glimps de beste fit is voor jouw situatie. 
                Geen verkoop onder druk, alleen eerlijke expertise.
              </p>
            </Card>

            <Card className="p-8">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-4 text-xl font-bold">Uitgebreide Kennis</h3>
              <p className="text-muted-foreground">
                We kennen alle grote tools en systemen: Shopify, Odoo, Zendesk, custom oplossingen en meer. 
                We kunnen objectief bepalen wat het beste bij je past.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="container mx-auto px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold">Onze Aanpak</h2>
            <p className="text-lg text-muted-foreground">
              Een grondig proces dat altijd begint met luisteren naar jouw unieke situatie
            </p>
          </div>

          <div className="space-y-6">
            <Card className="overflow-hidden border-l-4 border-primary">
              <div className="flex items-start gap-6 p-8">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                  1
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold">Grondige Analyse</h3>
                  <p className="text-muted-foreground">
                    We beginnen met een diepgaande analyse van jouw huidige situatie: wat zijn je doelen, 
                    welke pijnpunten ervaar je, wat is je budget, en wat zijn je groeiverwachtingen?
                  </p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden border-l-4 border-primary">
              <div className="flex items-start gap-6 p-8">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                  2
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold">Behoefteanalyse</h3>
                  <p className="text-muted-foreground">
                    We identificeren precies wat jouw business nodig heeft: welke integraties zijn cruciaal, 
                    welke features zijn must-haves, en waar liggen de grootste groeikansen?
                  </p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden border-l-4 border-primary">
              <div className="flex items-start gap-6 p-8">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                  3
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold">Op Maat Advies</h3>
                  <p className="text-muted-foreground">
                    Op basis van onze analyse geven we een eerlijk advies over welke oplossing het beste past. 
                    Dit kan Glimps zijn, maar ook een alternatief als dat beter bij je situatie past.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden border-l-4 border-primary">
              <div className="flex items-start gap-6 p-8">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                  4
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold">Implementatie Roadmap</h3>
                  <p className="text-muted-foreground">
                    We stellen een duidelijke roadmap op inclusief integratie-opties, implementatiestappen, 
                    groeimogelijkheden en een realistische tijdlijn.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden border-l-4 border-primary">
              <div className="flex items-start gap-6 p-8">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                  5
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold">Continue Ondersteuning</h3>
                  <p className="text-muted-foreground">
                    Ook na implementatie blijven we je ondersteunen met optimalisaties, nieuwe features, 
                    en strategisch advies om je groei te maximaliseren.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Know */}
      <section className="bg-gradient-to-br from-primary/5 to-background py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold">
              Systemen & Tools Die We Kennen
            </h2>
            <Card className="p-12">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-6 flex items-center gap-2 text-xl font-bold">
                    <CheckCircle className="h-6 w-6 text-primary" />
                    E-commerce Platforms
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                      <span className="text-muted-foreground">Shopify & Shopify Plus</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                      <span className="text-muted-foreground">WooCommerce</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                      <span className="text-muted-foreground">Magento</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                      <span className="text-muted-foreground">Odoo</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                      <span className="text-muted-foreground">Custom webshops</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-6 flex items-center gap-2 text-xl font-bold">
                    <CheckCircle className="h-6 w-6 text-primary" />
                    Customer Service Tools
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                      <span className="text-muted-foreground">Zendesk</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                      <span className="text-muted-foreground">Intercom</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                      <span className="text-muted-foreground">Freshdesk</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                      <span className="text-muted-foreground">Help Scout</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                      <span className="text-muted-foreground">Custom CRM systemen</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-6 flex items-center gap-2 text-xl font-bold">
                    <CheckCircle className="h-6 w-6 text-primary" />
                    Verzending & Logistiek
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                      <span className="text-muted-foreground">SendCloud</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                      <span className="text-muted-foreground">PostNL</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                      <span className="text-muted-foreground">Bpost</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                      <span className="text-muted-foreground">DHL</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-6 flex items-center gap-2 text-xl font-bold">
                    <CheckCircle className="h-6 w-6 text-primary" />
                    Marketing & Analytics
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                      <span className="text-muted-foreground">Google Analytics</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                      <span className="text-muted-foreground">Klaviyo</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                      <span className="text-muted-foreground">Mailchimp</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                      <span className="text-muted-foreground">HubSpot</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust & Partnership */}
      <section className="container mx-auto px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <Card className="overflow-hidden bg-gradient-to-br from-primary to-primary/80">
            <div className="p-12 text-white">
              <div className="mb-8 flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                  <Lightbulb className="h-10 w-10 text-white" />
                </div>
              </div>
              <h2 className="mb-6 text-center text-3xl font-bold">
                Vertrouwen & Duurzame Groei
              </h2>
              <p className="mb-6 text-center text-lg text-white/90">
                Ons doel is niet om zomaar te verkopen. We willen je ondersteunen in duurzame groei. 
                Daarom nemen we de tijd om je situatie te begrijpen en geven we eerlijk advies over wat 
                het beste voor jouw business is.
              </p>
              <p className="text-center text-lg text-white/90">
                Als Glimps niet de juiste oplossing is, zeggen we dat. Als we wél de perfecte match zijn, 
                dan zorgen we ervoor dat de implementatie soepel verloopt en je maximaal resultaat haalt 
                uit onze samenwerking.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold">Wat Levert het Op?</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="p-8 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-4 text-xl font-bold">Objectief Inzicht</h3>
              <p className="text-muted-foreground">
                Krijg een helder beeld van welke oplossing het beste past bij jouw situatie, 
                zonder verkoopdruk.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-4 text-xl font-bold">Snellere Implementatie</h3>
              <p className="text-muted-foreground">
                Door onze expertise kan je sneller aan de slag en eerder resultaat zien in je business.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-4 text-xl font-bold">Langetermijn Succes</h3>
              <p className="text-muted-foreground">
                We denken mee over schaalbaarheid en groei, zodat je oplossing meetgroeit met je business.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA & Calendly */}
      <section className="container mx-auto px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-4xl font-bold">Plan een Gratis Consult</h2>
            <p className="text-lg text-muted-foreground">
              Laten we samen kijken wat het slimste volgende stap is voor jouw e-commerce business. 
              Geen verplichtingen, alleen eerlijk advies van experts die je business begrijpen.
            </p>
          </div>

          {/* Calendly Inline Widget */}
          <Card className="overflow-hidden p-0">
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/samuel-muyllaert/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=e6575e&text_color=ffffff&primary_color=1a1a1a" 
              style={{ minWidth: '320px', height: '700px' }}
            ></div>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Heb je liever direct contact? Mail ons op{" "}
              <a href="mailto:info@glimps.be" className="font-medium text-primary hover:underline">
                info@glimps.be
              </a>
            </p>
          </div>
        </div>
      </section>

      <ChatWidget />
      <Footer />
    </div>
  );
};

export default Consultancy;
