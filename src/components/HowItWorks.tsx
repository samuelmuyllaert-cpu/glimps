import { Link } from "react-router-dom";
import { Bot } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HowItWorks = () => {
  const { language, t } = useLanguage();
  const steps: Array<{number: string, title: string, description: string}> = t('howItWorks.steps') as any;

  return (
    <section className="relative w-full overflow-hidden bg-background py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="mb-10 sm:mb-12 lg:mb-16 text-center">
            <Link
              to={language === 'fr' ? '/fr/comment-nous-travaillons' : '/how-we-work'}
              className="inline-block text-xs sm:text-sm font-medium text-primary hover:underline mb-3 sm:mb-4"
            >
              {t('howItWorks.badge')}
            </Link>
            <h2 className="mb-3 sm:mb-4 font-inter text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-foreground px-4">
              {t('howItWorks.title')}
            </h2>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-foreground px-4">
              {t('howItWorks.subtitle')}
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid gap-8 sm:gap-10 lg:gap-12 lg:grid-cols-[1fr,1fr]">
            {/* Left Side - Icon */}
            <div className="flex items-center justify-center order-2 lg:order-1">
              <div className="relative">
                <div className="rounded-2xl sm:rounded-3xl bg-primary/5 p-8 sm:p-12 lg:p-16">
                  <Bot className="h-20 w-20 sm:h-24 sm:w-24 lg:h-32 lg:w-32 text-primary" strokeWidth={1.5} />
                </div>
              </div>
            </div>

            {/* Right Side - Steps */}
            <div className="space-y-6 sm:space-y-8 lg:space-y-10 order-1 lg:order-2">
              {steps.map((step) => (
                <div key={step.number} className="space-y-2">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-normal text-primary">
                    {step.number}
                  </div>
                  <h3 className="text-lg sm:text-xl font-medium text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
