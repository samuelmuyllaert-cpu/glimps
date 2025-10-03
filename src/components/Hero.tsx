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
    <div className="relative min-h-[calc(100vh-80px)] w-full overflow-hidden">
      {/* Gradient Blob Background */}
      <div className="absolute bottom-0 left-1/2 h-[600px] w-[1200px] -translate-x-1/2 rounded-full bg-gradient-to-br from-[#e6575e]/40 via-[#f88a8f]/50 to-[#e6575e]/40 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-20 text-center">
        {/* Overline */}
        <div className="mb-6">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            AI-Aangedreven Klantenondersteuning
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="mb-6 font-inter text-[32px] leading-[40px] tracking-[0.352px] text-foreground max-sm:text-[32px] max-sm:leading-[40px] max-md:text-[40px] max-md:leading-[48px] md:text-[48px] md:leading-[60px]">
          Intelligente chatbots
          <br />
          die je e-commerce
          <br />
          omzet verhogen
        </h1>

        {/* Subheading */}
        <p className="mb-10 text-lg text-muted-foreground md:text-xl">
          glimps levert AI-aangedreven chatbots die je klanten begrijpen,
          <br />
          vragen direct beantwoorden en conversies 24/7 stimuleren.
        </p>

        {/* CTA Buttons */}
        <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button variant="hero" size="lg" className="rounded-full">
            <Sparkles className="h-5 w-5" />
            Gratis aan de slag
          </Button>
          <Button variant="outline" size="lg" className="rounded-full">
            Zie glimps in actie
          </Button>
        </div>

      </div>
    </div>
  );
};

export default Hero;
