import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { Lock } from "lucide-react";

const EcomAgents = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-6 py-24">
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="max-w-2xl text-center">
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
                Neem contact met ons op voor meer informatie over early access.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ChatWidget />
      <Footer />
    </div>
  );
};

export default EcomAgents;
