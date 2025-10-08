import { Sparkles, TrendingUp, Shield, Users, Target, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

const WhyDifferent = () => {
  const features = [
    {
      icon: Sparkles,
      iconBg: "bg-pink-100",
      iconColor: "text-pink-600",
      title: "Strategische AI",
      description: "Niet zomaar een chatbot. Een systeem dat denkt, leert en verbetert met elk gesprek.",
    },
    {
      icon: TrendingUp,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      title: "Gebouwd voor Groei",
      description: "Gebouwd voor schaalbare e-commerce. Van 100 tot 100.000 gesprekken per maand.",
    },
    {
      icon: Shield,
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
      title: "Betrouwbaar & Transparant",
      description: "GDPR-compliant, Nederlands/Vlaams gehost, en altijd transparant over hoe AI werkt.",
    },
    {
      icon: Users,
      iconBg: "bg-pink-100",
      iconColor: "text-pink-600",
      title: "Naadloze Samenwerking",
      description: "Glimps werkt naadloos samen met jouw support team. Escalatie wanneer nodig.",
    },
    {
      icon: Target,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      title: "Conversie-Focus",
      description: "Elk antwoord is geoptimaliseerd om twijfel weg te nemen en aankoop te stimuleren.",
    },
    {
      icon: Heart,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
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
              className="p-8 bg-card border-border hover:shadow-lg transition-shadow"
            >
              <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl ${feature.iconBg}`}>
                <feature.icon className={`h-8 w-8 ${feature.iconColor}`} />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;
