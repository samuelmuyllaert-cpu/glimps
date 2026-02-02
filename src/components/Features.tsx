import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Features = () => {
  const { language, t } = useLanguage();
  const features: string[] = t('features.list') as any;

  return <section className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-semibold text-primary flex items-center gap-2">
                <span className="text-primary">⚡</span> {t('features.badge')}
              </span>
            </div>

            <h2 className="font-inter text-4xl md:text-5xl font-normal mb-6 leading-tight">
              {t('features.title')}
            </h2>

            <p className="text-lg text-muted-foreground mb-8">{t('features.description')}</p>

            <div className="space-y-4 mb-8">
              {features.map((feature: string, index: number) => <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-foreground">{feature}</p>
                </div>)}
            </div>

            <a href={language === 'fr' ? '/fr/fonctionnalites' : '/features'} className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold transition-colors flex items-center gap-2">
              {t('features.cta')}
              <span>→</span>
            </a>
          </div>

          {/* Right side - Chat Demo */}
          <div className="relative">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8 space-y-4">
              {/* Customer message */}
              <div className="flex justify-end">
                <div className="bg-white rounded-2xl px-6 py-4 shadow-sm max-w-md">
                  <p className="text-sm text-muted-foreground mb-1">{t('features.chatCustomer')}</p>
                  <p className="text-foreground">{t('features.chatMessage1')}</p>
                </div>
              </div>

              {/* Bot response */}
              <div className="flex justify-start">
                <div className="bg-gradient-to-br from-[#e6575e] to-[#d93a5f] rounded-2xl px-6 py-4 shadow-md max-w-md">
                  <p className="text-sm text-white/90 mb-1">{t('features.chatBot')}</p>
                  <p className="text-white">
                    {t('features.chatReply1')}
                  </p>
                </div>
              </div>

              {/* Customer response */}
              <div className="flex justify-end">
                <div className="bg-white rounded-2xl px-6 py-4 shadow-sm max-w-md">
                  <p className="text-sm text-muted-foreground mb-1">{t('features.chatCustomer')}</p>
                  <p className="text-foreground">{t('features.chatMessage2')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Features;