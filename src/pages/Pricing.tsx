import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "€99",
      period: "/maand",
      description: "Perfect om te beginnen met AI-powered klantenservice",
      features: [
        "1.000 gesprekken per maand",
        "Basis chatbot features",
        "Email support",
        "1 integratie",
        "Basic analytics"
      ],
      cta: "Start gratis trial",
      highlighted: false
    },
    {
      name: "Professional",
      price: "€299",
      period: "/maand",
      description: "Voor groeiende webshops met meer klanten",
      features: [
        "5.000 gesprekken per maand",
        "Alle chatbot features",
        "Prioriteit support",
        "Onbeperkte integraties",
        "Advanced analytics",
        "Custom branding",
        "API toegang",
        "Lead verzameling"
      ],
      cta: "Start nu",
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Voor grote webshops met specifieke wensen",
      features: [
        "Onbeperkte gesprekken",
        "Dedicated account manager",
        "24/7 support",
        "Custom AI training",
        "White-label oplossing",
        "SLA garantie",
        "Custom features",
        "Persoonlijke onboarding"
      ],
      cta: "Neem contact op",
      highlighted: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-semibold text-primary flex items-center gap-2">
                <span className="text-primary">💎</span> Transparante prijzen
              </span>
            </div>
            
            <h1 className="font-inter text-4xl md:text-6xl font-normal mb-6 leading-tight">
              Kies het plan dat bij <br />
              <span className="text-primary">jouw business past</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Geen verborgen kosten. Geen lange contracten. Upgrade of downgrade wanneer je wilt.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-3xl p-8 ${
                  plan.highlighted
                    ? 'bg-primary text-white shadow-2xl scale-105 border-2 border-primary'
                    : 'bg-card border border-border'
                }`}
              >
                <h3 className="font-inter text-2xl font-semibold mb-2">
                  {plan.name}
                </h3>
                
                <div className="mb-4">
                  <span className="font-inter text-5xl font-bold">{plan.price}</span>
                  <span className={plan.highlighted ? 'text-white/80' : 'text-muted-foreground'}>
                    {plan.period}
                  </span>
                </div>
                
                <p className={`mb-8 ${plan.highlighted ? 'text-white/90' : 'text-muted-foreground'}`}>
                  {plan.description}
                </p>

                <button 
                  className={`w-full py-4 rounded-full font-semibold mb-8 transition-colors ${
                    plan.highlighted
                      ? 'bg-white text-primary hover:bg-white/90'
                      : 'bg-primary text-white hover:bg-primary/90'
                  }`}
                >
                  {plan.cta}
                </button>

                <div className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className={`h-5 w-5 flex-shrink-0 ${plan.highlighted ? 'text-white' : 'text-primary'}`} />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="bg-muted/30 rounded-3xl p-12">
            <h2 className="font-inter text-3xl font-semibold mb-8 text-center">
              Veelgestelde vragen over prijzen
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-2">Kan ik van plan wisselen?</h3>
                <p className="text-muted-foreground">Ja, je kunt op elk moment upgraden of downgraden. Wijzigingen gaan direct in.</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Wat gebeurt er als ik mijn limiet bereik?</h3>
                <p className="text-muted-foreground">Je ontvangt een notificatie. De chatbot blijft werken, maar je wordt gevraagd te upgraden.</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Is er een gratis trial?</h3>
                <p className="text-muted-foreground">Ja, je krijgt 14 dagen gratis om glimps volledig uit te proberen zonder creditcard.</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Welke betaalmethoden accepteren jullie?</h3>
                <p className="text-muted-foreground">We accepteren alle gangbare creditcards, iDEAL en SEPA automatische incasso.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Pricing;
