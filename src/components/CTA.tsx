import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative w-full overflow-hidden py-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#e6575e]/20 via-[#f88a8f]/30 to-[#e6575e]/20" />
      <div className="absolute bottom-0 left-1/2 h-[500px] w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-br from-[#e6575e]/40 via-[#f88a8f]/50 to-[#e6575e]/40 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Begin gratis met glimps
          </span>
          
          <h2 className="mb-6 font-inter text-4xl font-normal text-foreground md:text-5xl lg:text-6xl">
            Stop met omzet mislopen & begin
            <br />
            klanten te verrassen
          </h2>
          
          <p className="mb-10 text-lg text-muted-foreground md:text-xl">
            Sluit je aan bij honderden e-commerce bedrijven die AI gebruiken voor directe support,
            24/7 vragen beantwoorden en conversies verhogen.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <a href="/demo">Plan een demo</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
