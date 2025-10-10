import { Sparkles, TrendingUp, Shield, Users, Target, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

const WhyDifferent = () => {
  const features = [
    {
      icon: Sparkles,
      gradient: "from-pink-500 to-rose-500",
      glowColor: "rgba(236, 72, 153, 0.3)",
      title: "Strategische AI",
      description: "Niet zomaar een chatbot. Een systeem dat denkt, leert en verbetert met elk gesprek.",
    },
    {
      icon: TrendingUp,
      gradient: "from-blue-500 to-cyan-500",
      glowColor: "rgba(59, 130, 246, 0.3)",
      title: "Gebouwd voor Groei",
      description: "Gebouwd voor schaalbare e-commerce. Van 100 tot 100.000 gesprekken per maand.",
    },
    {
      icon: Shield,
      gradient: "from-amber-500 to-orange-500",
      glowColor: "rgba(245, 158, 11, 0.3)",
      title: "Betrouwbaar & Transparant",
      description: "GDPR-compliant, Nederlands/Vlaams gehost, en altijd transparant over hoe AI werkt.",
    },
    {
      icon: Users,
      gradient: "from-purple-500 to-pink-500",
      glowColor: "rgba(168, 85, 247, 0.3)",
      title: "Naadloze Samenwerking",
      description: "Glimps werkt naadloos samen met jouw support team. Escalatie wanneer nodig.",
    },
    {
      icon: Target,
      gradient: "from-emerald-500 to-teal-500",
      glowColor: "rgba(16, 185, 129, 0.3)",
      title: "Conversie-Focus",
      description: "Elk antwoord is geoptimaliseerd om twijfel weg te nemen en aankoop te stimuleren.",
    },
    {
      icon: Heart,
      gradient: "from-rose-500 to-red-500",
      glowColor: "rgba(244, 63, 94, 0.3)",
      title: "Klanttevredenheid",
      description: "95% tevredenheid door snelle, accurate en menselijke antwoorden.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-pink-50 px-4 py-2 text-sm font-medium text-pink-600">
            <Sparkles className="h-4 w-4" />
            Hoe het werkt
          </div>
          <h2 className="mb-6 font-inter text-4xl font-normal text-foreground md:text-5xl lg:text-6xl">
            Slimmer dan een chatbot.
          </h2>
          <h2 className="mb-6 font-inter text-4xl font-normal text-foreground md:text-5xl lg:text-6xl">
            Beter dan een supporttool.
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            We bouwen geen chatbots. We bouwen digitale experts die jouw klanten{" "}
            <span className="text-primary font-medium">verrassen</span>, jouw team{" "}
            <span className="text-primary font-medium">ontlasten</span>, en jouw{" "}
            <span className="text-primary font-medium">verkoop</span> verhogen.
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
