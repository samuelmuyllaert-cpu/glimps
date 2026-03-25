import IndustryTemplate from "@/components/IndustryTemplate";
import { Building2, TrendingUp, Users } from "lucide-react";

const B2BGroothandel = () => {
  return (
    <IndustryTemplate
      industryKey="b2b"
      Icon={Building2}
      Icon2={TrendingUp}
      Icon3={Users}
      seoTitleNL="AI Chatbot voor B2B Groothandel & Webshops - Glimps AI"
      seoTitleFR="Chatbot IA pour Grossistes B2B & Boutiques - Glimps AI"
      seoDescriptionNL="Optimaliseer je B2B webshop met AI-chatbots die bulk orders afhandelen, offertes genereren en zakelijke klanten 24/7 ondersteunen."
      seoDescriptionFR="Optimisez votre boutique B2B avec des chatbots IA qui gèrent les commandes en gros, génèrent des devis et soutiennent les clients professionnels 24/7."
      pathNL="/industries/b2b-groothandel"
      pathFR="/fr/secteurs/b2b-grossiste"
      keywordsNL="AI chatbot B2B, groothandel automatisering, bulk order chatbot, zakelijke webshop assistent"
      keywordsFR="chatbot IA B2B, automatisation grossiste, chatbot commandes groupées, assistant boutique professionnelle"
    />
  );
};

export default B2BGroothandel;
