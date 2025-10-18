import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { Star } from "lucide-react";

const Hero = () => {
  // Mock customer avatars using initials
  const customers = [
    { name: "User 1", bg: "bg-orange-400" },
    { name: "User 2", bg: "bg-red-400" },
    { name: "User 3", bg: "bg-pink-400" },
    { name: "User 4", bg: "bg-green-400" },
    { name: "User 5", bg: "bg-yellow-400" },
  ];

  return (
    <div className="relative min-h-[calc(100vh-80px)] w-full overflow-visible">
      {/* Multi-layered Gradient Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Primary gradient blob */}
        <div className="absolute top-0 left-1/4 h-[800px] w-[800px] rounded-full bg-gradient-to-br from-primary/40 via-purple-500/30 to-pink-500/40 blur-3xl animate-pulse" />
        {/* Secondary gradient blob */}
        <div className="absolute bottom-0 right-1/4 h-[700px] w-[700px] rounded-full bg-gradient-to-tr from-blue-500/30 via-primary/40 to-purple-600/30 blur-3xl" />
        {/* Accent blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-r from-orange-400/20 to-red-500/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Floating decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-gradient-to-br from-primary/30 to-purple-500/30 blur-xl animate-float" />
        <div className="absolute top-40 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-pink-500/20 to-orange-400/20 blur-2xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 left-1/4 w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/25 to-primary/25 blur-xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-20 text-center">
        {/* Overline */}
        <div className="mb-6 animate-fade-in">
          <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 via-purple-500/20 to-pink-500/20 border border-primary/30 backdrop-blur-sm">
            <span className="text-sm font-semibold bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
              AI-AANGEDREVEN KLANTENONDERSTEUNING
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="mb-6 font-inter font-bold text-[32px] leading-[40px] tracking-[0.352px] max-sm:text-[32px] max-sm:leading-[40px] max-md:text-[40px] max-md:leading-[48px] md:text-[48px] md:leading-[60px] animate-fade-in">
          <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
            Intelligente
          </span>
          <br />
          <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
            chatbots
          </span>
          <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
            {" "}voor
          </span>
          <br />
          <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
            e-commerce
          </span>
        </h1>

        {/* Subheading */}
        <p className="mb-10 text-lg text-muted-foreground md:text-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Vragen over producten, verzending en bestellingen
          <br />
          worden automatisch beantwoord - ook buiten kantooruren.
        </p>

        {/* CTA Buttons */}
        <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button asChild variant="hero" size="lg" className="rounded-full shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 hover:scale-105 transition-all">
            <a href="/demo" className="flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              Gratis aan de slag
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full border-2 hover:border-primary/50 hover:bg-gradient-to-r hover:from-primary/5 hover:to-purple-500/5 hover:scale-105 transition-all">
            <a href="/features">Zie glimps in actie</a>
          </Button>
        </div>

      </div>
    </div>
  );
};

export default Hero;
