import Navigation from "@/components/Navigation";
import { CheckCircle2, Bot, RefreshCw, Package, RotateCcw, Users, MessageSquare, Code, ShoppingCart, Inbox } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: "Checkout bot",
      description: "Begeleid klanten moeiteloos door het checkout proces met een intelligente AI assistent die vragen beantwoordt en bezwaren wegneemt."
    },
    {
      icon: RefreshCw,
      title: "Follow-up systeem",
      description: "Automatische follow-ups voor verlaten winkelwagens en bestellingen. Verhoog conversies met gepersonaliseerde herinneringen."
    },
    {
      icon: Package,
      title: "Ophalen van pakketten",
      description: "Real-time tracking updates en automatische notificaties over pakket status. Klanten blijven altijd op de hoogte."
    },
    {
      icon: RotateCcw,
      title: "Aanmelden van retour",
      description: "Vereenvoudig het retourproces met geautomatiseerde retourafhandeling en directe communicatie met klanten."
    },
    {
      icon: Users,
      title: "Leads verzamelen",
      description: "Verzamel waardevolle klantinformatie tijdens natuurlijke gesprekken. Bouw je database slim op."
    },
    {
      icon: MessageSquare,
      title: "Conversational flows",
      description: "Intelligente gespreksflows die zich aanpassen aan de behoeften van elke klant. Van simpele vragen tot complexe productadvies."
    },
    {
      icon: Code,
      title: "API integratie",
      description: "Naadloze integratie met je bestaande systemen via onze krachtige API. Werk samen met je CRM, ERP en e-commerce platform."
    },
    {
      icon: ShoppingCart,
      title: "Product carousel met upsell & cross-sell",
      description: "Slim systeem dat producten visueel toont in een carousel met intelligente upsell en cross-sell aanbevelingen op het perfecte moment."
    },
    {
      icon: Inbox,
      title: "Inbox met AI inzichten",
      description: "Krachtige inbox met diepgaande inzichten in alle conversaties. Stel je AI agent vragen over gesprekken en krijg direct waardevolle analyses."
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
                <span className="text-primary">⚡</span> Alle mogelijkheden
              </span>
            </div>
            
            <h1 className="font-inter text-4xl md:text-6xl font-normal mb-6 leading-tight">
              Alles wat je nodig hebt voor <br />
              <span className="text-primary">uitstekende klantenservice</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Onze AI-chatbot biedt een complete oplossing voor e-commerce klantenservice, van checkout tot retour en alles daartussen.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                
                <h3 className="font-inter text-xl font-semibold mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col items-center gap-4 p-8 rounded-3xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
              <h3 className="font-inter text-2xl font-semibold">
                Klaar om te beginnen?
              </h3>
              <p className="text-muted-foreground max-w-md">
                Ontdek hoe onze AI-chatbot jouw e-commerce klantenservice naar een hoger niveau tilt.
              </p>
              <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold transition-colors">
                Gratis aanmelden
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
