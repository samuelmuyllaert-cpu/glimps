import { Sparkles, TrendingUp, Shield, Users, Target, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const WhyDifferent = () => {
  const { t } = useLanguage();
  const featuresData: Array<{title: string, description: string}> = t('whyDifferent.features') as any;

  const icons = [Sparkles, TrendingUp, Shield, Users, Target, Heart];
  const gradients = [
    "from-pink-500 to-rose-500",
    "from-blue-500 to-cyan-500",
    "from-amber-500 to-orange-500",
    "from-purple-500 to-pink-500",
    "from-emerald-500 to-teal-500",
    "from-rose-500 to-red-500"
  ];
  const glowColors = [
    "rgba(236, 72, 153, 0.3)",
    "rgba(59, 130, 246, 0.3)",
    "rgba(245, 158, 11, 0.3)",
    "rgba(168, 85, 247, 0.3)",
    "rgba(16, 185, 129, 0.3)",
    "rgba(244, 63, 94, 0.3)"
  ];

  const features = featuresData.map((feature, index) => ({
    ...feature,
    icon: icons[index],
    gradient: gradients[index],
    glowColor: glowColors[index]
  }));

  return (
    <section className="relative w-full overflow-hidden bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-pink-50 px-4 py-2 text-sm font-medium text-pink-600">
            <Sparkles className="h-4 w-4" />
            {t('whyDifferent.badge')}
          </div>
          <h2 className="mb-6 font-inter text-4xl font-normal text-foreground md:text-5xl lg:text-6xl">
            {t('whyDifferent.title1')}
          </h2>
          <h2 className="mb-6 font-inter text-4xl font-normal text-foreground md:text-5xl lg:text-6xl">
            {t('whyDifferent.title2')}
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            {t('whyDifferent.subtitle')}
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group relative p-8 bg-card border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Subtle background glow effect */}
              <div 
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{ background: feature.glowColor }}
              />
              
              {/* Icon container with glass effect and gradient */}
              <div className="relative mb-6 inline-flex">
                {/* Outer glow */}
                <div 
                  className="absolute inset-0 rounded-2xl blur-md opacity-40 group-hover:opacity-60 transition-opacity"
                  style={{ 
                    background: `linear-gradient(135deg, ${feature.glowColor}, transparent)` 
                  }}
                />
                
                {/* Glass morphism container */}
                <div className={`relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} p-[2px] group-hover:scale-110 transition-transform duration-300`}>
                  <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-card/90 backdrop-blur-sm">
                    <feature.icon className="h-7 w-7 text-foreground relative z-10" strokeWidth={2.5} />
                  </div>
                </div>
                
                {/* Sparkle accent */}
                <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Sparkles className="h-3 w-3 text-yellow-400 fill-yellow-400 animate-pulse" />
                </div>
              </div>
              
              <h3 className="mb-3 text-xl font-semibold text-foreground group-hover:bg-gradient-to-r group-hover:from-foreground group-hover:to-foreground/70 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
              
              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r ${feature.gradient}`} />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;
