import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Sparkles, Zap, Bug, Calendar, Lightbulb, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useState } from "react";

const Changelog = () => {
  const [featureRequest, setFeatureRequest] = useState("");
  const [featureTitle, setFeatureTitle] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [votes, setVotes] = useState({
    instagram: 47,
    voice: 32,
    analytics: 28
  });

  const handleVote = (feature: keyof typeof votes) => {
    setVotes(prev => ({
      ...prev,
      [feature]: prev[feature] + 1
    }));
  };

  const handleFeatureRequest = async () => {
    if (!featureTitle.trim() || !featureRequest.trim()) return;
    
    setSubmitting(true);
    // Here you would send to your backend/database
    setTimeout(() => {
      setFeatureTitle("");
      setFeatureRequest("");
      setSubmitting(false);
      alert("Feature request ingediend! Dankjewel voor je feedback.");
    }, 1000);
  };

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
      <SEO 
        title="Changelog - Glimps AI | Nieuwste Features & Updates"
        description="Blijf op de hoogte van alle nieuwe features, verbeteringen en updates van Glimps AI. We werken continu aan betere functionaliteit."
        path="/changelog"
        canonical="https://glimps.be/changelog"
        keywords="changelog, product updates, nieuwe features, Glimps updates, release notes"
        type="website"
      />
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

          {/* Product Roadmap */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-sm font-semibold text-primary flex items-center gap-2">
                  <Lightbulb className="h-4 w-4" /> Product Roadmap
                </span>
              </div>
              <h2 className="font-inter text-3xl md:text-4xl font-semibold mb-3">
                Help ons de toekomst te bepalen
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Welke feature zou jouw e-commerce ervaring verbeteren? Deel je idee en stem op bestaande voorstellen.
              </p>
            </div>

            <Card className="p-6 md:p-8 bg-gradient-to-br from-card to-background">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Feature titel</label>
                  <Input
                    placeholder="bijv. WhatsApp integratie"
                    value={featureTitle}
                    onChange={(e) => setFeatureTitle(e.target.value)}
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Beschrijving</label>
                  <Textarea
                    placeholder="Beschrijf je feature idee..."
                    value={featureRequest}
                    onChange={(e) => setFeatureRequest(e.target.value)}
                    className="bg-background min-h-[120px]"
                  />
                </div>
                <Button 
                  onClick={handleFeatureRequest}
                  disabled={submitting || !featureTitle.trim() || !featureRequest.trim()}
                  className="w-full rounded-full"
                  size="lg"
                >
                  <Sparkles className="mr-2 h-4 w-4" />
                  {submitting ? "Versturen..." : "Feature aanvragen"}
                </Button>
              </div>
            </Card>

            {/* Popular Requests */}
            <div className="mt-8 space-y-4">
              <h3 className="font-semibold text-lg mb-4">Populaire verzoeken</h3>
              
              <Card className="p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">Instagram Shopping Integratie</h4>
                    <p className="text-sm text-muted-foreground">Direct producten verkopen via Instagram DM's</p>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="flex items-center gap-2 hover:bg-primary/10"
                    onClick={() => handleVote('instagram')}
                  >
                    <ThumbsUp className="h-4 w-4" />
                    <span className="font-semibold">{votes.instagram}</span>
                  </Button>
                </div>
              </Card>

              <Card className="p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">Voice Assistant Support</h4>
                    <p className="text-sm text-muted-foreground">Klanten kunnen vragen stellen via spraak</p>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="flex items-center gap-2 hover:bg-primary/10"
                    onClick={() => handleVote('voice')}
                  >
                    <ThumbsUp className="h-4 w-4" />
                    <span className="font-semibold">{votes.voice}</span>
                  </Button>
                </div>
              </Card>

              <Card className="p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">Advanced Analytics Dashboard</h4>
                    <p className="text-sm text-muted-foreground">Diepere inzichten in klantgedrag en conversies</p>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="flex items-center gap-2 hover:bg-primary/10"
                    onClick={() => handleVote('analytics')}
                  >
                    <ThumbsUp className="h-4 w-4" />
                    <span className="font-semibold">{votes.analytics}</span>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Changelog;
