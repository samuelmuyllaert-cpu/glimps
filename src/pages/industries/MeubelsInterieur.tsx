import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Sparkles, Home } from "lucide-react";

const MeubelsInterieur = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="AI-Chatbots voor Meubels & Interieur - Glimps AI"
        description="Help klanten hun perfecte interieur samen te stellen met AI die stijl, afmetingen en combinaties begrijpt. Perfect voor meubelwebshops."
        path="/industries/meubels-interieur"
        canonical="https://glimps.be/industries/meubels-interieur"
        keywords="meubel chatbot, interieuradvies, stijl combinaties, afmetingen, meubelwebshop, interieur AI"
        type="website"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-visible px-6 py-20">
        <div className="pointer-events-none absolute bottom-[-200px] left-1/2 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-br from-[#e6575e]/30 via-[#f88a8f]/40 to-[#e6575e]/30 blur-3xl" />
        
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Meubels & Interieur
          </span>
          <h1 className="mb-6 font-inter text-4xl font-normal leading-tight text-foreground md:text-5xl lg:text-6xl">
            AI-Chatbots voor Meubels & Interieur
          </h1>
          <p className="mb-10 text-lg text-muted-foreground md:text-xl">
            Help klanten hun perfecte interieur samen te stellen met AI die stijl, afmetingen en combinaties begrijpt
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
            Waarom glimps perfect is voor meubel webshops
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-border/50 bg-card p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Home className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Stijl & Interieuradvies</h3>
              <p className="text-muted-foreground">
                AI begrijpt interieurstijlen en helpt klanten meubels te vinden die perfect bij elkaar passen
              </p>
            </div>
            
            <div className="rounded-2xl border border-border/50 bg-card p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Afmetingen & Ruimte</h3>
              <p className="text-muted-foreground">
                Help klanten controleren of meubels passen in hun ruimte en adviseer over ideale afmetingen
              </p>
            </div>
            
            <div className="rounded-2xl border border-border/50 bg-card p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Complete Sets</h3>
              <p className="text-muted-foreground">
                Stel complete meubelsets samen die qua stijl en kleur perfect matchen
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center font-inter text-3xl font-normal md:text-4xl">
            Wat onze AI chatbot kan voor meubels
          </h2>
          <div className="space-y-4">
            {[
              "Adviseer over stijlcombinaties en kleurenschema's",
              "Help met het bepalen van de juiste afmetingen",
              "Beantwoord vragen over materialen en onderhoud",
              "Stel complete kamersets samen",
              "Geef levertijd en bezorginformatie per product"
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
            Klaar voor meer interieur sales?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Ontdek hoe glimps jouw meubelwebshop naar een hoger niveau tilt
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

export default MeubelsInterieur;
