import IndustryTemplate from "@/components/IndustryTemplate";
import { Gamepad2, Tv, Headphones } from "lucide-react";

const GamingEntertainment = () => {
  return (
    <IndustryTemplate
      industryKey="gaming"
      Icon={Gamepad2}
      Icon2={Tv}
      Icon3={Headphones}
      seoTitleNL="AI Chatbot voor Gaming & Entertainment E-commerce - Glimps AI"
      seoTitleFR="Chatbot IA pour Gaming & Divertissement E-commerce - Glimps AI"
      seoDescriptionNL="Verhoog je gaming webshop met AI-chatbots die game-aanbevelingen doen, setup advies geven en technische specificaties uitleggen."
      seoDescriptionFR="Augmentez votre boutique gaming avec des chatbots IA qui font des recommandations de jeux, donnent des conseils de configuration et expliquent les spécifications techniques."
      pathNL="/industries/gaming-entertainment"
      pathFR="/fr/secteurs/gaming-divertissement"
      keywordsNL="AI chatbot gaming, game webshop automatisering, gaming setup advies, console verkoop chatbot"
      keywordsFR="chatbot IA gaming, automatisation boutique jeux, conseils configuration gaming, chatbot vente consoles"
    />
  );
};

export default GamingEntertainment;
