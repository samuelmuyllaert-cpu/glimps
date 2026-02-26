import IndustryTemplate from "@/components/IndustryTemplate";
import { Heart, TrendingUp, Sparkles } from "lucide-react";

const FashionDesign = () => {
  return (
    <IndustryTemplate
      industryKey="fashion"
      Icon={Heart}
      Icon2={TrendingUp}
      Icon3={Sparkles}
      seoTitleNL="AI Chatbot voor Fashion & Design Webshops - Glimps AI"
      seoTitleFR="Chatbot IA pour Boutiques de Mode & Design - Glimps AI"
      seoDescriptionNL="Verhoog je fashion sales met AI-chatbots die persoonlijke style adviezen geven, outfit suggesties doen en kledingmaten adviseren. Perfecte AI-assistent voor mode webshops."
      seoDescriptionFR="Augmentez vos ventes de mode avec des chatbots IA qui donnent des conseils de style personnalisés, suggèrent des tenues et conseillent sur les tailles. Assistant IA parfait pour les boutiques de mode."
      pathNL="/industries/fashion-design"
      pathFR="/fr/secteurs/mode-design"
      keywordsNL="AI chatbot fashion, mode webshop automatisering, persoonlijk style advies, outfit aanbevelingen, kledingmaat adviseur, fashion e-commerce"
      keywordsFR="chatbot IA mode, automatisation boutique mode, conseils style personnalisés, recommandations tenues, conseiller taille vêtements, e-commerce mode"
    />
  );
};

export default FashionDesign;
