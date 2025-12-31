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
        title="Welkom bij Pro Sport Lights"
        description="Welkom bij Pro Sport Lights - We helpen je graag met vragen over fietshelmen met verlichting en fietsverlichting"
        path="/prosportlights"
      />
      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 font-inter text-4xl font-bold leading-tight md:text-6xl md:leading-tight">
            Welkom<br />
            <span className="text-primary">Pro Sport Lights</span><br />
            Bij je persoonlijke ai assistent
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            We zijn er om je te helpen! Heb je vragen over onze fietshelmen met verlichting,
            USB-oplaadbare verlichtingssets of andere producten? Stel gerust je vraag via de chat.
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
              <h3 className="mb-2 font-semibold">Altijd voor je klaar</h3>
              <p className="text-sm text-muted-foreground">
                Stel al je vragen over onze producten wanneer het jou uitkomt
              </p>
            </Card>

            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold">Dag en nacht</h3>
              <p className="text-sm text-muted-foreground">
                Ook buiten kantooruren staan we voor je klaar om te helpen
              </p>
            </Card>

            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold">GDPR conform</h3>
              <p className="text-sm text-muted-foreground">
                Glimps is GDPR conform en respecteert jouw privacy
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
            <h2 className="mb-4 text-3xl font-bold">Hoe de bot klanten helpt</h2>
            <p className="text-muted-foreground">
              Klik rechtsonder op de chat en stel je vraag
            </p>
          </div>

          <Card className="p-8 md:p-12">
            <h3 className="mb-8 text-xl font-semibold">Bijvoorbeeld</h3>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <p className="mb-1 font-medium">Welke helm past bij mij?</p>
                  <p className="text-sm text-muted-foreground">
                    "Ik zoek een helm met verlichting voor in de stad"
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <p className="mb-1 font-medium">Hoe sterk is de verlichting?</p>
                  <p className="text-sm text-muted-foreground">
                    "Hoeveel lumen hebben jullie fietslichten?"
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <p className="mb-1 font-medium">Voor speedpedelec</p>
                  <p className="text-sm text-muted-foreground">
                    "Is er een helm geschikt voor mijn speedpedelec?"
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <p className="mb-1 font-medium">Voor de kinderen</p>
                  <p className="text-sm text-muted-foreground">
                    "Welke maat heeft mijn kind van 8 jaar nodig?"
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <p className="mb-1 font-medium">Prijs en levering</p>
                  <p className="text-sm text-muted-foreground">
                    "Wanneer kan ik mijn bestelling ontvangen?"
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <p className="mb-1 font-medium">Onderhoud en garantie</p>
                  <p className="text-sm text-muted-foreground">
                    "Kan ik onderdelen vervangen?"
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProSportLights;
