import IndustryTemplate from "@/components/IndustryTemplate";
import { Gem, Crown, Sparkles } from "lucide-react";

const SieradenLuxe = () => {
  return (
    <IndustryTemplate
      industryKey="jewelry"
      Icon={Gem}
      Icon2={Crown}
      Icon3={Sparkles}
      seoTitleNL="AI Chatbot voor Sieraden & Luxe E-commerce - Glimps AI"
      seoTitleFR="Chatbot IA pour Bijoux & Luxe E-commerce - Glimps AI"
      seoDescriptionNL="Verhoog je juwelier webshop met AI-chatbots die persoonlijk advies geven, edelsteeninfo delen en luxe shopping ervaring bieden."
      seoDescriptionFR="Augmentez votre bijouterie en ligne avec des chatbots IA qui donnent des conseils personnalisés, partagent des infos sur les pierres précieuses et offrent une expérience shopping luxueuse."
      pathNL="/industries/sieraden-luxe"
      pathFR="/fr/secteurs/bijoux-luxe"
      keywordsNL="AI chatbot juwelier, sieraden webshop automatisering, luxe shopping assistent, edelstenen advies"
      keywordsFR="chatbot IA bijouterie, automatisation boutique bijoux, assistant shopping luxe, conseils pierres précieuses"
    />
  );
};

export default SieradenLuxe;
