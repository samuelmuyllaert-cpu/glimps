import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Sparkles, Flower } from "lucide-react";

const TuinBuitenleven = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-visible px-6 py-20">
        <div className="pointer-events-none absolute bottom-[-200px] left-1/2 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-br from-[#e6575e]/30 via-[#f88a8f]/40 to-[#e6575e]/30 blur-3xl" />
        
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Tuin en Buitenleven
          </span>
          <h1 className="mb-6 font-inter text-4xl font-normal leading-tight text-foreground md:text-5xl lg:text-6xl">
            AI-Chatbots voor Tuin & Buitenleven
          </h1>
          <p className="mb-10 text-lg text-muted-foreground md:text-xl">
            Help klanten hun droompluin creëren met AI die planten, seizoenen en tuinonderhoud begrijpt
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="hero" size="lg" className="rounded-full">
              <Sparkles className="h-5 w-5" />
              Start gratis proefperiode
            </Button>
            <Button variant="outline" size="lg" className="rounded-full">
              Plan een demo
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center font-inter text-3xl font-normal md:text-4xl">
            Waarom glimps perfect is voor tuin webshops
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-border/50 bg-card p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Flower className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Plant & Seizoenadvies</h3>
              <p className="text-muted-foreground">
                AI kent plantensoorten, seizoenen en groeiomstandigheden om perfect advies te geven
              </p>
            </div>
            
            <div className="rounded-2xl border border-border/50 bg-card p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Tuininrichting</h3>
              <p className="text-muted-foreground">
                Help klanten hun tuin inrichten met passende meubels, decoratie en planten
              </p>
            </div>
            
            <div className="rounded-2xl border border-border/50 bg-card p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Onderhoudstips</h3>
              <p className="text-muted-foreground">
                Geef klanten direct advies over onderhoud, water geven en bemesting
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center font-inter text-3xl font-normal md:text-4xl">
            Wat onze AI chatbot kan voor tuin
          </h2>
          <div className="space-y-4">
            {[
              "Adviseer planten op basis van seizoen en groeiplaats",
              "Help bij het kiezen van tuinmeubels en decoratie",
              "Beantwoord vragen over plantverzorging en onderhoud",
              "Geef tips voor het creëren van tuinstijlen",
              "Adviseer over gereedschap en benodigdheden"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 rounded-xl border border-border/50 bg-card p-6">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-primary" />
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 p-12 text-center">
          <h2 className="mb-6 font-inter text-3xl font-normal md:text-4xl">
            Klaar om je tuin business te laten groeien?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Ontdek hoe glimps jouw tuinwebshop bloeiend maakt
          </p>
          <Button variant="hero" size="lg" className="rounded-full">
            Start je gratis proefperiode
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TuinBuitenleven;
