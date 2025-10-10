import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { Bot, Search, Settings, TrendingUp } from "lucide-react";

const HowWeWork = () => {
  const steps = [
    {
      number: "01",
      title: "Screening van jouw business",
      description: "We werken enkel samen met merken die écht klaar zijn voor AI. We screenen je webshop, je data en je systemen om te bepalen waar de grootste winst ligt.",
      icon: Search,
    },
    {
      number: "02",
      title: "Analyse van klantvragen",
      description: "We onderzoeken 80% van de meest gestelde vragen — dat is de basis voor maximale automatisering.",
      icon: Search,
    },
    {
      number: "03",
      title: "Implementatie & training",
      description: "Glimps wordt gevoed met jouw productdata, beleid en tone of voice — zodat hij klinkt als jouw merk.",
      icon: Settings,
    },
    {
      number: "04",
      title: "Livegang & optimalisatie",
      description: "Na goedkeuring gaat jouw bot live. Vanaf dan verbeteren we continu op basis van echte data.",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-primary/5 to-background py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 font-inter text-5xl font-normal text-foreground md:text-6xl lg:text-7xl">
              Hoe we werken
            </h1>
            <p className="text-xl text-muted-foreground md:text-2xl">
              Werk slimmer met directe toegang voor elke klant
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="relative w-full overflow-hidden py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-16 md:gap-20">
              {steps.map((step, index) => (
                <div 
                  key={step.number}
                  className="grid gap-8 md:grid-cols-[1fr,2fr] items-start"
                >
                  {/* Left Side - Visual */}
                  <div className="flex flex-col items-center md:items-start">
                    <div className="rounded-2xl bg-primary/5 p-12 mb-6">
                      <step.icon className="h-16 w-16 text-primary" strokeWidth={1.5} />
                    </div>
                    <div className="text-6xl font-normal text-primary">
                      {step.number}
                    </div>
                  </div>

                  {/* Right Side - Content */}
                  <div className="space-y-4 pt-8">
                    <h2 className="text-3xl font-medium text-foreground md:text-4xl">
                      {step.title}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full overflow-hidden bg-primary/5 py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 font-inter text-3xl font-normal text-foreground md:text-4xl">
              Klaar om te starten?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Laten we samen kijken hoe Glimps jouw klantenservice kan transformeren.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Neem contact op
            </a>
          </div>
        </div>
      </section>

      <ChatWidget />
      <Footer />
    </div>
  );
};

export default HowWeWork;
