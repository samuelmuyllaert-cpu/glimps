import { useEffect } from "react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Lightbulb,
  Target,
  CheckCircle2,
  Zap,
  MessageSquare,
  Clock,
  Shield
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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <SEO
        title="Welkom Pro Sport Lights - Glimps AI Testomgeving"
        description="Welkom bij de Pro Sport Lights testomgeving voor Glimps AI chatbot"
        path="/prosportlights"
      />

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="mx-auto max-w-5xl">
          {/* Welcome Badge */}
          <div className="mb-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-6 py-2 text-sm font-semibold text-primary">
              <Lightbulb className="h-4 w-4" />
              Testomgeving
            </div>
          </div>

          {/* Main Heading */}
          <div className="mb-12 text-center">
            <h1 className="mb-6 font-inter text-5xl font-bold text-white md:text-7xl">
              Welkom bij je<br />
              <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
                Glimps AI Assistent
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-300">
              Pro Sport Lights - Je persoonlijke AI chatbot staat klaar om je te helpen met
              vragen over verlichting, producten en technische specificaties
            </p>
          </div>

          {/* Features Grid */}
          <div className="mb-16 grid gap-6 md:grid-cols-3">
            <Card className="border-slate-800 bg-slate-900/50 p-6 backdrop-blur">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold text-white">Direct Antwoord</h3>
              <p className="text-sm text-gray-400">
                Krijg onmiddellijk antwoord op al je vragen over sportverlichting
              </p>
            </Card>

            <Card className="border-slate-800 bg-slate-900/50 p-6 backdrop-blur">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold text-white">24/7 Beschikbaar</h3>
              <p className="text-sm text-gray-400">
                Ook buiten kantooruren kun je terecht bij je AI assistent
              </p>
            </Card>

            <Card className="border-slate-800 bg-slate-900/50 p-6 backdrop-blur">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold text-white">Veilig & Betrouwbaar</h3>
              <p className="text-sm text-gray-400">
                GDPR-compliant en gebouwd op de nieuwste AI-technologie
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="container mx-auto px-6 pb-20">
        <div className="mx-auto max-w-4xl">
          <Card className="border-slate-800 bg-slate-900/50 p-8 backdrop-blur md:p-12">
            <div className="mb-8 text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                  <Target className="h-8 w-8 text-white" />
                </div>
              </div>
              <h2 className="mb-4 text-3xl font-bold text-white">Aan de slag</h2>
              <p className="text-gray-300">
                Klik op de chatbot rechtsonder om te beginnen met testen
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white">Wat kun je vragen?</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-white">Productinformatie</p>
                    <p className="text-sm text-gray-400">
                      "Welke LED verlichting is geschikt voor een voetbalveld?"
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-white">Technische specificaties</p>
                    <p className="text-sm text-gray-400">
                      "Wat is de lichtstroom van jullie schijnwerpers?"
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-white">Installatie & Onderhoud</p>
                    <p className="text-sm text-gray-400">
                      "Hoe installeer ik de sportverlichting?"
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-white">Advies op maat</p>
                    <p className="text-sm text-gray-400">
                      "Welke verlichting raad je aan voor een tennisbaan?"
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-white">Prijzen & Offertes</p>
                    <p className="text-sm text-gray-400">
                      "Wat kost de verlichting voor een basketbalveld?"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 pb-20">
        <div className="mx-auto max-w-4xl">
          <Card className="border-primary/20 bg-gradient-to-r from-primary/10 to-orange-500/10 p-8 backdrop-blur md:p-12">
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                  <Zap className="h-8 w-8 text-white" />
                </div>
              </div>
              <h2 className="mb-4 text-3xl font-bold text-white">
                Klaar om te testen?
              </h2>
              <p className="mb-8 text-lg text-gray-300">
                Klik rechtsonder op de chat-widget en stel je eerste vraag aan je AI assistent
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="rounded-full"
                  onClick={() => {
                    const chatButton = document.querySelector('[data-chatbotkit-button]') as HTMLElement;
                    if (chatButton) {
                      chatButton.click();
                    }
                  }}
                >
                  <MessageSquare className="h-5 w-5" />
                  Start Chat
                </Button>
                <a href="https://www.prosportlights.be" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="rounded-full border-slate-700 bg-slate-900/50 text-white hover:bg-slate-800">
                    Bezoek Pro Sport Lights
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer Info */}
      <section className="border-t border-slate-800 bg-slate-950/50 py-8">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm text-gray-500">
              Dit is een testomgeving van Glimps AI voor Pro Sport Lights.
              Feedback? Neem contact op met{" "}
              <a href="mailto:support@glimps.be" className="text-primary hover:underline">
                support@glimps.be
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProSportLights;
