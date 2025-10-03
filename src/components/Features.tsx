import { CheckCircle2 } from "lucide-react";

const Features = () => {
  const features = [
    "Beantwoord product vragen instant",
    "Persoonlijke aanbevelingen op basis van gedrag",
    "Automatische order tracking updates",
    "Verlaten winkelwagens terugwinnen",
    "Upsell en cross-sell opportunities",
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-semibold text-primary flex items-center gap-2">
                <span className="text-primary">⚡</span> Bewezen resultaten
              </span>
            </div>

            <h2 className="font-inter text-4xl md:text-5xl font-normal mb-6 leading-tight">
              Verhoog je omzet met AI-powered conversaties
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              Onze AI chatbots begrijpen exact wat je klanten nodig hebben en leiden ze moeiteloos naar de perfecte aankoop.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-foreground">{feature}</p>
                </div>
              ))}
            </div>

            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold transition-colors flex items-center gap-2">
              Ontdek de mogelijkheden
              <span>→</span>
            </button>
          </div>

          {/* Right side - Chat Demo */}
          <div className="relative">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8 space-y-4">
              {/* Customer message */}
              <div className="flex justify-end">
                <div className="bg-white rounded-2xl px-6 py-4 shadow-sm max-w-md">
                  <p className="text-sm text-muted-foreground mb-1">Klant</p>
                  <p className="text-foreground">Waar is mijn bestelling? Ik heb ordernummer #12849</p>
                </div>
              </div>

              {/* Bot response */}
              <div className="flex justify-start">
                <div className="bg-gradient-to-br from-[#e6575e] to-[#d93a5f] rounded-2xl px-6 py-4 shadow-md max-w-md">
                  <p className="text-sm text-white/90 mb-1">AI Chatbot</p>
                  <p className="text-white">
                    Je bestelling is onderweg! 📦 Het pakket is gisteren verzonden en arriveert morgen tussen 14:00-18:00. Je kunt je bestelling live volgen via de tracking link die ik zojuist per e-mail heb gestuurd.
                  </p>
                </div>
              </div>

              {/* Customer response */}
              <div className="flex justify-end">
                <div className="bg-white rounded-2xl px-6 py-4 shadow-sm max-w-md">
                  <p className="text-sm text-muted-foreground mb-1">Klant</p>
                  <p className="text-foreground">Perfect! Bedankt 😊</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
