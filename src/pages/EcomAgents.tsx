import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { Lock } from "lucide-react";

const EcomAgents = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Ecom Agents - Glimps AI | Geavanceerde E-commerce Automatisering"
        description="Ontdek Glimps Ecom Agents: de volgende generatie AI-automatisering voor e-commerce. Binnenkort beschikbaar voor geavanceerde workflow automation en intelligente conversie optimalisatie."
        path="/ecom-agents"
        keywords="ecom agents, e-commerce automation, AI agents, workflow automation, conversie optimalisatie, advanced chatbot"
      />
      <StructuredData
        type="webpage"
        data={{
          name: "Ecom Agents - Glimps AI",
          description: "Geavanceerde AI agents voor e-commerce automatisering en workflow optimalisatie",
          url: "https://www.glimps.be/ecom-agents"
        }}
      />
      <Navigation />
      <div className="container mx-auto px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-primary/10 p-6">
                <Lock className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="mb-4 text-4xl font-bold">Ecom Agents</h1>
            <p className="mb-6 text-xl text-muted-foreground">
              Komt binnenkort beschikbaar voor het grote publiek
            </p>
            <div className="rounded-lg border border-border bg-card p-6">
              <p className="text-lg">
                Deze functionaliteit is momenteel enkel toegankelijk voor bestaande klanten.
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                Neem contact op met <a href="mailto:info@glimps.be" className="font-semibold text-primary hover:underline">info@glimps.be</a> voor meer informatie over early access.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EcomAgents;
