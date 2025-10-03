import { Bot, MessageSquare, TrendingUp, Clock, Languages, Sparkles } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: "AI-Powered Conversations",
      description: "Advanced natural language processing understands customer intent and delivers human-like responses.",
    },
    {
      icon: TrendingUp,
      title: "Boost Conversions",
      description: "Guide customers through their journey with personalized product recommendations and smart upselling.",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Never miss a sale. Your AI assistant works round the clock to support customers in any timezone.",
    },
    {
      icon: MessageSquare,
      title: "Instant Responses",
      description: "Answer customer questions in seconds, reducing wait times and improving satisfaction.",
    },
    {
      icon: Languages,
      title: "Multilingual Support",
      description: "Communicate with customers in their preferred language across multiple markets seamlessly.",
    },
    {
      icon: Sparkles,
      title: "Smart Learning",
      description: "Continuously improves from every interaction to provide better answers over time.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-background py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Powerful Features
          </span>
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Everything you need to scale
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            All the features of an AI chatbot you need to easily handle customer support
            and drive sales for your e-commerce business.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
