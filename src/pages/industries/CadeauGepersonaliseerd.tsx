import IndustryTemplate from "@/components/IndustryTemplate";
import { Gift, Heart, Sparkles } from "lucide-react";

const CadeauGepersonaliseerd = () => {
  return (
    <IndustryTemplate
      industryKey="gifts"
      Icon={Gift}
      Icon2={Heart}
      Icon3={Sparkles}
      seoTitleNL="AI Chatbot voor Cadeau & Gepersonaliseerde Producten - Glimps AI"
      seoTitleFR="Chatbot IA pour Cadeaux & Produits Personnalisés - Glimps AI"
      seoDescriptionNL="Verhoog je cadeauwinkel conversies met AI-chatbots die cadeau-ideeën suggereren, personalisatie opties uitleggen en speciale momenten vieren."
      seoDescriptionFR="Augmentez les conversions de votre boutique cadeaux avec des chatbots IA qui suggèrent des idées cadeaux, expliquent les options de personnalisation et célèbrent les moments spéciaux."
      pathNL="/industries/cadeau-gepersonaliseerd"
      pathFR="/fr/secteurs/cadeaux-personnalises"
      keywordsNL="AI chatbot cadeauwinkel, gepersonaliseerde producten chatbot, cadeau ideeën, personalisatie advies"
      keywordsFR="chatbot IA boutique cadeaux, chatbot produits personnalisés, idées cadeaux, conseils personnalisation"
    />
  );
};

export default CadeauGepersonaliseerd;
