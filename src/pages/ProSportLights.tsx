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
        description="Welkom bij de Pro Sport Lights testomgeving voor Glimps AI chatbot"
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
            <span className="text-primary">AI Assistent</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Je Glimps AI chatbot staat klaar om te helpen met vragen over sportverlichting,
            producten en technische specificaties. Test de AI assistent en ervaar hoe je
            klanten straks 24/7 geholpen worden.
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
              <h3 className="mb-2 font-semibold">Direct Antwoord</h3>
              <p className="text-sm text-muted-foreground">
                Krijg onmiddellijk antwoord op al je vragen over sportverlichting
              </p>
            </Card>

            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold">24/7 Beschikbaar</h3>
              <p className="text-sm text-muted-foreground">
                Ook buiten kantooruren kun je terecht bij je AI assistent
              </p>
            </Card>

            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold">Veilig & Betrouwbaar</h3>
              <p className="text-sm text-muted-foreground">
                GDPR-compliant en gebouwd op de nieuwste AI-technologie
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
                  <p className="mb-1 font-medium">Productinformatie</p>
                  <p className="text-sm text-muted-foreground">
                    "Welke LED verlichting is geschikt voor een voetbalveld?"
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <p className="mb-1 font-medium">Technische specificaties</p>
                  <p className="text-sm text-muted-foreground">
                    "Wat is de lichtstroom van jullie schijnwerpers?"
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <p className="mb-1 font-medium">Installatie & Onderhoud</p>
                  <p className="text-sm text-muted-foreground">
                    "Hoe installeer ik de sportverlichting?"
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <p className="mb-1 font-medium">Advies op maat</p>
                  <p className="text-sm text-muted-foreground">
                    "Welke verlichting raad je aan voor een tennisbaan?"
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <p className="mb-1 font-medium">Prijzen & Offertes</p>
                  <p className="text-sm text-muted-foreground">
                    "Wat kost de verlichting voor een basketbalveld?"
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <p className="mb-1 font-medium">Product vergelijkingen</p>
                  <p className="text-sm text-muted-foreground">
                    "Wat is het verschil tussen LED en halogeen?"
                  </p>
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
              Klik rechtsonder op de chat-widget en stel je eerste vraag aan je AI assistent
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
