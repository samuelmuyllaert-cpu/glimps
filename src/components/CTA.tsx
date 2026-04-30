import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CTA = () => {
  const { language, t } = useLanguage();

  return (
    <section className="relative w-full overflow-hidden py-12 sm:py-16 lg:py-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#e6575e]/20 via-[#f88a8f]/30 to-[#e6575e]/20" />
      <div className="absolute bottom-1/2 left-1/2 translate-y-1/2 h-[300px] sm:h-[400px] md:h-[600px] lg:h-[700px] w-[300px] sm:w-[600px] md:w-[900px] lg:w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-br from-[#e6575e]/40 via-[#f88a8f]/50 to-[#e6575e]/40 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary">
            {t('cta.overline')}
          </span>

          <h2 className="mb-6 font-inter text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-normal text-foreground">
            {t('cta.title').split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i < t('cta.title').split('\n').length - 1 && <br />}
              </span>
            ))}
          </h2>

          <p className="mb-8 sm:mb-10 text-sm sm:text-base md:text-lg text-muted-foreground lg:text-xl px-4">
            {t('cta.description')}
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <a href={language === 'fr' ? '/fr/demo' : '/demo'}>{t('cta.button')}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
