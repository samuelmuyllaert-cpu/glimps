import { Link } from "react-router-dom";
import { Bot } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Screening van jouw business",
      description: "We werken enkel samen met merken die écht klaar zijn voor AI. We screenen je webshop, je data en je systemen om te bepalen waar de grootste winst ligt.",
    },
    {
      number: "02",
      title: "Analyse van klantvragen",
      description: "We onderzoeken 80% van de meest gestelde vragen — dat is de basis voor maximale automatisering.",
    },
    {
      number: "03",
      title: "Implementatie & training",
      description: "Glimps wordt gevoed met jouw productdata, beleid en tone of voice — zodat hij klinkt als jouw merk.",
    },
    {
      number: "04",
      title: "Livegang & optimalisatie",
      description: "Na goedkeuring gaat jouw bot live. Vanaf dan verbeteren we continu op basis van echte data.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-background py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <Link 
              to="/hoe-we-werken"
              className="inline-block text-sm font-medium text-primary hover:underline mb-4"
            >
              Hoe het werkt
            </Link>
            <h2 className="mb-4 font-inter text-4xl font-normal text-foreground md:text-5xl">
              Werk slimmer
            </h2>
            <p className="text-4xl font-normal text-foreground md:text-5xl">
              met directe toegang voor elke klant.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid gap-12 lg:grid-cols-[1fr,1fr]">
            {/* Left Side - Icon */}
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="rounded-3xl bg-primary/5 p-16">
                  <Bot className="h-32 w-32 text-primary" strokeWidth={1.5} />
                </div>
              </div>
            </div>

            {/* Right Side - Steps */}
            <div className="space-y-10">
              {steps.map((step) => (
                <div key={step.number} className="space-y-2">
                  <div className="text-5xl font-normal text-primary">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-medium text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
