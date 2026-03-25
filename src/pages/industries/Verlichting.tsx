import IndustryTemplate from "@/components/IndustryTemplate";
import { Lightbulb, Zap, Chrome as Home } from "lucide-react";

const Verlichting = () => {
  return (
    <IndustryTemplate
      industryKey="lighting"
      Icon={Lightbulb}
      Icon2={Zap}
      Icon3={Home}
      seoTitleNL="AI Chatbot voor Verlichting E-commerce - Glimps AI"
      seoTitleFR="Chatbot IA pour Éclairage E-commerce - Glimps AI"
      seoDescriptionNL="Verhoog je verlichting webshop met AI-chatbots die technisch advies geven, lichtplan suggesties doen en klanten helpen de perfecte verlichting te vinden."
      seoDescriptionFR="Augmentez votre boutique d'éclairage avec des chatbots IA qui donnent des conseils techniques, suggèrent des plans d'éclairage et aident les clients à trouver l'éclairage parfait."
      pathNL="/industries/verlichting"
      pathFR="/fr/secteurs/eclairage"
      keywordsNL="AI chatbot verlichting, lampen webshop automatisering, lichtplan advies, LED verlichting chatbot"
      keywordsFR="chatbot IA éclairage, automatisation boutique lampes, conseils plan lumière, chatbot éclairage LED"
    />
  );
};

export default Verlichting;
