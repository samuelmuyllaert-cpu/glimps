import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Features = () => {
  const { language, t } = useLanguage();
  const features: string[] = t('features.list') as any;

  return <section className="relative py-12 px-4 sm:py-16 sm:px-6 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <div className="inline-block mb-4 sm:mb-6 px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/10 rounded-full">
              <span className="text-xs sm:text-sm font-semibold text-primary flex items-center gap-2">
                <span className="text-primary">⚡</span> {t('features.badge')}
              </span>
            </div>

            <h2 className="font-inter text-3xl sm:text-4xl md:text-5xl font-normal mb-4 sm:mb-6 leading-tight">
              {t('features.title')}
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">{t('features.description')}</p>

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {features.map((feature: string, index: number) => <div key={index} className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <p className="text-sm sm:text-base text-foreground">{feature}</p>
                </div>)}
            </div>

            <a href={language === 'fr' ? '/fr/fonctionnalites' : '/features'} className="inline-flex w-full sm:w-auto justify-center bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-colors items-center gap-2">
              {t('features.cta')}
              <span>→</span>
            </a>
          </div>

          {/* Right side - Chat Demo */}
          <div className="relative mt-8 lg:mt-0">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 space-y-3 sm:space-y-4">
              {/* Customer message */}
              <div className="flex justify-end">
                <div className="bg-white rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 shadow-sm max-w-[85%] sm:max-w-md">
                  <p className="text-xs sm:text-sm text-muted-foreground mb-1">{t('features.chatCustomer')}</p>
                  <p className="text-sm sm:text-base text-foreground">{t('features.chatMessage1')}</p>
                </div>
              </div>

              {/* Bot response */}
              <div className="flex justify-start">
                <div className="bg-gradient-to-br from-[#e6575e] to-[#d93a5f] rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 shadow-md max-w-[85%] sm:max-w-md">
                  <p className="text-xs sm:text-sm text-white/90 mb-1">{t('features.chatBot')}</p>
                  <p className="text-sm sm:text-base text-white">
                    {t('features.chatReply1')}
                  </p>
                </div>
              </div>

              {/* Customer response */}
              <div className="flex justify-end">
                <div className="bg-white rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 shadow-sm max-w-[85%] sm:max-w-md">
                  <p className="text-xs sm:text-sm text-muted-foreground mb-1">{t('features.chatCustomer')}</p>
                  <p className="text-sm sm:text-base text-foreground">{t('features.chatMessage2')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Features;