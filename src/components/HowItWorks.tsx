import { Link } from "react-router-dom";
import { Bot } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HowItWorks = () => {
  const { language, t } = useLanguage();
  const steps: Array<{number: string, title: string, description: string}> = t('howItWorks.steps') as any;

  return (
    <section className="relative w-full overflow-hidden bg-background py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <Link
              to={language === 'fr' ? '/fr/comment-nous-travaillons' : '/how-we-work'}
              className="inline-block text-sm font-medium text-primary hover:underline mb-4"
            >
              {t('howItWorks.badge')}
            </Link>
            <h2 className="mb-4 font-inter text-4xl font-normal text-foreground md:text-5xl">
              {t('howItWorks.title')}
            </h2>
            <p className="text-4xl font-normal text-foreground md:text-5xl">
              {t('howItWorks.subtitle')}
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid gap-12 lg:grid-cols-[1fr,1fr]">
            {/* Left Side - Icon */}
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="rounded-3xl bg-primary/5 p-16">
                  <Bot className="h-32 w-32 text-primary" strokeWidth={1.5} />
                </div>
              </div>
            </div>

            {/* Right Side - Steps */}
            <div className="space-y-10">
              {steps.map((step) => (
                <div key={step.number} className="space-y-2">
                  <div className="text-5xl font-normal text-primary">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-medium text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
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
