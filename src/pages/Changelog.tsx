import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { Sparkles, Zap, Bug, Calendar } from "lucide-react";

const Changelog = () => {
  const updates = [
    {
      date: "15 januari 2025",
      version: "v2.4.0",
      type: "feature",
      title: "AI Product Recommendations",
      description: "Nieuwe intelligente product aanbevelingen op basis van klantgedrag en voorkeuren. Verhoog conversies met +47%.",
      icon: Sparkles
    },
    {
      date: "8 januari 2025",
      version: "v2.3.5",
      type: "improvement",
      title: "Snellere Response Times",
      description: "Chatbot reageert nu gemiddeld 40% sneller dankzij geoptimaliseerde AI modellen.",
      icon: Zap
    },
    {
      date: "28 december 2024",
      version: "v2.3.0",
      title: "Inbox & Analytics Dashboard",
      type: "feature",
      description: "Nieuw dashboard met diepgaande inzichten in alle conversaties. AI agent beantwoordt vragen over je data.",
      icon: Sparkles
    },
    {
      date: "15 december 2024",
      version: "v2.2.8",
      type: "bugfix",
      title: "Bug Fixes",
      description: "Opgelost: Tracking links werden niet altijd correct verstuurd. Verbeterde error handling voor API integraties.",
      icon: Bug
    },
    {
      date: "1 december 2024",
      version: "v2.2.0",
      type: "feature",
      title: "Multi-language Support",
      description: "Chatbot ondersteunt nu 12 talen en detecteert automatisch de taal van de klant.",
      icon: Sparkles
    },
    {
      date: "20 november 2024",
      version: "v2.1.5",
      type: "improvement",
      title: "Verbeterde Integraties",
      description: "Nieuwe integraties met Shopify, WooCommerce en Lightspeed. Setup nu 3x sneller.",
      icon: Zap
    },
    {
      date: "10 november 2024",
      version: "v2.1.0",
      type: "feature",
      title: "Conversational Flows Builder",
      description: "Bouw custom gespreksflows met drag-and-drop interface. Geen code nodig.",
      icon: Sparkles
    },
    {
      date: "25 oktober 2024",
      version: "v2.0.0",
      type: "feature",
      title: "glimps 2.0 Launch",
      description: "Complete rebuild met nieuwe AI engine, 5x betere nauwkeurigheid en modern dashboard.",
      icon: Sparkles
    }
  ];

  const getTypeColor = (type: string) => {
    switch(type) {
      case 'feature': return 'bg-primary/10 text-primary border-primary/20';
      case 'improvement': return 'bg-blue-500/10 text-blue-600 border-blue-500/20';
      case 'bugfix': return 'bg-orange-500/10 text-orange-600 border-orange-500/20';
      default: return 'bg-muted text-foreground border-border';
    }
  };

  const getTypeLabel = (type: string) => {
    switch(type) {
      case 'feature': return 'Nieuw';
      case 'improvement': return 'Verbetering';
      case 'bugfix': return 'Bug fix';
      default: return 'Update';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-semibold text-primary flex items-center gap-2">
                <Calendar className="h-4 w-4" /> Product updates
              </span>
            </div>
            
            <h1 className="font-inter text-4xl md:text-6xl font-normal mb-6 leading-tight">
              Wat is er <span className="text-primary">nieuw?</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We werken continu aan nieuwe features en verbeteringen. Blijf op de hoogte van alle updates.
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {updates.map((update, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-border pb-8 last:pb-0">
                {/* Icon */}
                <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <update.icon className="h-3 w-3 text-white" />
                </div>

                {/* Content */}
                <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getTypeColor(update.type)}`}>
                        {getTypeLabel(update.type)}
                      </span>
                      <span className="text-sm font-mono text-muted-foreground">
                        {update.version}
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {update.date}
                    </span>
                  </div>

                  <h3 className="font-inter text-xl font-semibold mb-2">
                    {update.title}
                  </h3>

                  <p className="text-muted-foreground">
                    {update.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Subscribe CTA */}
          <div className="mt-16 bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-3xl p-8 text-center">
            <h3 className="font-inter text-2xl font-semibold mb-3">
              Blijf op de hoogte
            </h3>
            <p className="text-muted-foreground mb-6">
              Ontvang een email bij belangrijke updates en nieuwe features
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="je@email.nl"
                className="flex-1 px-4 py-3 bg-background border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-semibold transition-colors">
                Abonneer
              </button>
            </div>
          </div>
        </div>
      </section>
      <ChatWidget />
      <Footer />
    </div>
  );
};

export default Changelog;
