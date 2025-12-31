import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card } from "@/components/ui/card";
import {
  Lightbulb,
  CheckCircle2,
  MessageSquare,
  Clock,
  Shield,
  Sparkles
} from "lucide-react";

const ProSportLights = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'chatbotkit-widget';
    script.src = 'https://static.chatbotkit.com/integrations/widget/v2.js';
    script.setAttribute('data-widget', 'cmjtqwg4i1wel2uh16muurbv6');
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.getElementById('chatbotkit-widget');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Welkom Pro Sport Lights - Glimps AI Testomgeving"
        description="Test de Glimps AI chatbot voor Pro Sport Lights - Fietshelmen met verlichting en fietsverlichting"
        path="/prosportlights"
      />
      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <div className="flex items-center gap-2">
              <Lightbulb className="h-4 w-4" />
              Testomgeving Pro Sport Lights
            </div>
          </div>
          <h1 className="mb-6 font-inter text-4xl font-bold leading-tight md:text-6xl">
            Welkom bij je persoonlijke<br />
            <span className="text-primary">AI Fietsverlichting Assistent</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Je Glimps AI chatbot staat klaar om te helpen met vragen over fietshelmen met verlichting,
            USB-oplaadbare fietsverlichting en fietsaccessoires. Test de AI assistent en ervaar hoe je
            klanten straks 24/7 professioneel geholpen worden.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold">Direct Productadvies</h3>
              <p className="text-sm text-muted-foreground">
                Krijg onmiddellijk antwoord over fietshelmen, verlichting en accessoires
              </p>
            </Card>

            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold">24/7 Beschikbaar</h3>
              <p className="text-sm text-muted-foreground">
                Ook buiten kantooruren kan je klanten geholpen worden
              </p>
            </Card>

            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold">Belgische Service</h3>
              <p className="text-sm text-muted-foreground">
                Snelle levering in België en Europa, bestelling voor 16:00 = volgende werkdag
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
              <Sparkles className="h-7 w-7 text-primary" />
            </div>
            <h2 className="mb-4 text-3xl font-bold">Aan de slag</h2>
            <p className="text-muted-foreground">
              Klik op de chat-widget rechtsonder om te beginnen met testen
            </p>
          </div>

          <Card className="p-8 md:p-12">
            <h3 className="mb-8 text-xl font-semibold">Wat kun je vragen?</h3>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <p className="mb-1 font-medium">Fietshelmen met verlichting</p>
                  <p className="text-sm text-muted-foreground">
                    "Welke helm heeft de sterkste LED-verlichting?"
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <p className="mb-1 font-medium">USB-oplaadbare verlichting</p>
                  <p className="text-sm text-muted-foreground">
                    "Hoeveel lumen heeft de 1300/120 lumen verlichtingsset?"
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <p className="mb-1 font-medium">Speedpedelec helmen</p>
                  <p className="text-sm text-muted-foreground">
                    "Hebben jullie helmen voor speedpedelecs met vizier?"
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <p className="mb-1 font-medium">Kinderhelmen</p>
                  <p className="text-sm text-muted-foreground">
                    "Welke helm is geschikt voor mijn kind van 8 jaar?"
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <p className="mb-1 font-medium">Prijzen & Levertijd</p>
                  <p className="text-sm text-muted-foreground">
                    "Wat kost een premium helm en wanneer wordt het geleverd?"
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <p className="mb-1 font-medium">Garantie & Service</p>
                  <p className="text-sm text-muted-foreground">
                    "Hoe wissel ik het vizier van mijn helm?"
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* About Pro Sport Lights */}
      <section className="container mx-auto px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <Card className="overflow-hidden border-primary/20 bg-gradient-to-br from-primary/5 to-transparent p-8 md:p-12">
            <div className="mb-6 text-center">
              <h2 className="mb-4 text-3xl font-bold">Over Pro Sport Lights</h2>
              <p className="text-muted-foreground">Belgische pionier in fietsverlichting sinds 2018</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <p className="font-medium">Eerste in België</p>
                    <p className="text-sm text-muted-foreground">
                      Eerste Belgische aanbieder van fietshelmen met ingebouwde verlichting
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <p className="font-medium">Breed assortiment</p>
                    <p className="text-sm text-muted-foreground">
                      Van €19,99 kinderhelmen tot €99,99 premium speedpedelec modellen
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <p className="font-medium">Snelle levering</p>
                    <p className="text-sm text-muted-foreground">
                      Bestelling voor 16:00 = volgende werkdag in België en Europa
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <p className="font-medium">Hoge klanttevredenheid</p>
                    <p className="text-sm text-muted-foreground">
                      4,9 sterren gemiddelde met 325+ Google reviews
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <p className="font-medium">Betrouwbare partner</p>
                    <p className="text-sm text-muted-foreground">
                      Samenwerking met NMBS voor fietsstallingen
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <p className="font-medium">Complete service</p>
                    <p className="text-sm text-muted-foreground">
                      Blogs, video's en uitstekende klantenondersteuning
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-muted/30 py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-bold">
              Klaar om te testen?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Klik rechtsonder op de chat-widget en stel je eerste vraag aan je AI assistent.<br />
              Ontdek hoe de chatbot klanten helpt bij het vinden van de perfecte fietshelm of verlichting.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://www.prosportlights.be"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-white transition-all hover:bg-primary/90"
              >
                Bezoek Pro Sport Lights →
              </a>
            </div>
            <p className="mt-8 text-sm text-muted-foreground">
              Dit is een testomgeving van Glimps AI voor Pro Sport Lights.<br />
              Feedback? Neem contact op met{" "}
              <a href="mailto:info@glimps.be" className="text-primary hover:underline">
                info@glimps.be
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProSportLights;
