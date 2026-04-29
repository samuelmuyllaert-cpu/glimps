import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { language, t } = useLanguage();

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
      <div className="pointer-events-none absolute bottom-[-200px] left-1/2 h-[400px] w-[300px] -translate-x-1/2 rounded-full bg-gradient-to-br from-[#e6575e]/30 via-[#f88a8f]/40 to-[#e6575e]/30 blur-3xl sm:bottom-[-300px] sm:h-[800px] sm:w-[600px] md:bottom-[-400px] md:h-[1200px] md:w-[1000px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-12 text-center sm:px-6 sm:py-20">
        {/* Overline */}
        <div className="mb-4 sm:mb-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary sm:text-sm">
            {t('hero.overline')}
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="mb-4 font-inter font-normal text-[28px] leading-[36px] tracking-[0.352px] text-foreground sm:mb-6 sm:text-[40px] sm:leading-[48px] md:text-[48px] md:leading-[60px]">
          {t('hero.title').split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i < t('hero.title').split('\n').length - 1 && <br />}
            </span>
          ))}
        </h1>

        {/* Subheading */}
        <p className="mb-8 px-2 text-base text-muted-foreground sm:mb-10 sm:px-0 sm:text-lg md:text-xl">
          {t('hero.description').split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i < t('hero.description').split('\n').length - 1 && <br />}
            </span>
          ))}
        </p>

        {/* CTA Buttons */}
        <div className="mb-12 flex flex-col items-center justify-center gap-3 px-4 sm:mb-16 sm:flex-row sm:gap-4 sm:px-0">
          <Button asChild variant="hero" size="lg" className="w-full rounded-full sm:w-auto">
            <a href={language === 'fr' ? '/fr/demo' : '/demo'}>
              <Sparkles className="h-5 w-5" />
              {t('hero.cta')}
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full rounded-full sm:w-auto">
            <a href={language === 'fr' ? '/fr/fonctionnalites' : '/features'}>
              {t('hero.ctaSecondary')}
            </a>
          </Button>
        </div>

      </div>
    </div>
  );
};

export default Hero;
