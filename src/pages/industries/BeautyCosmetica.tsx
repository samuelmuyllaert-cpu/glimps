import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Sparkles, Heart } from "lucide-react";

const BeautyCosmetica = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="AI-Chatbots voor Beauty & Cosmetica - Glimps AI"
        description="Geef elke klant persoonlijk beauty advies met AI die huidtypes, ingrediënten en producten begrijpt. Perfect voor beauty webshops."
        path="/industries/beauty-cosmetica"
        canonical="https://glimps.be/industries/beauty-cosmetica"
        keywords="beauty chatbot, cosmetica AI, huidadvies, beauty webshop, personalisatie, ingrediënten"
        type="website"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-visible px-6 py-20">
        <div className="pointer-events-none absolute bottom-[-200px] left-1/2 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-br from-[#e6575e]/30 via-[#f88a8f]/40 to-[#e6575e]/30 blur-3xl" />
        
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Beauty & Cosmetica
          </span>
          <h1 className="mb-6 font-inter text-4xl font-normal leading-tight text-foreground md:text-5xl lg:text-6xl">
            AI-Chatbots voor Beauty & Cosmetica
          </h1>
          <p className="mb-10 text-lg text-muted-foreground md:text-xl">
            Geef elke klant persoonlijk beauty advies met AI die huidtypes, ingrediënten en producten begrijpt
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
            Waarom glimps perfect is voor beauty webshops
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-border/50 bg-card p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Persoonlijk Huidadvies</h3>
              <p className="text-muted-foreground">
                AI analyseert huidtype, concerns en geeft gepersonaliseerde productaanbevelingen
              </p>
            </div>
            
            <div className="rounded-2xl border border-border/50 bg-card p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Ingrediënten Kennis</h3>
              <p className="text-muted-foreground">
                Beantwoord vragen over ingrediënten, allergenen en geschiktheid voor specifieke huidtypes
              </p>
            </div>
            
            <div className="rounded-2xl border border-border/50 bg-card p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Beauty Routines</h3>
              <p className="text-muted-foreground">
                Stel complete skincare routines samen met de juiste volgorde en combinaties
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center font-inter text-3xl font-normal md:text-4xl">
            Wat onze AI chatbot kan voor beauty
          </h2>
          <div className="space-y-4">
            {[
              "Huidtype bepalen en passende producten adviseren",
              "Vragen over ingrediënten en allergenen beantwoorden",
              "Complete skincare routines samenstellen",
              "Kleuradvies voor make-up producten geven",
              "Productvergelijkingen maken op basis van behoeften"
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
            Klaar voor meer beauty conversies?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Ontdek hoe glimps jouw beauty webshop transformeert
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

export default BeautyCosmetica;
