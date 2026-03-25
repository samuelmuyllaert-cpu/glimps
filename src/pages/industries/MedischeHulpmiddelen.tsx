import IndustryTemplate from "@/components/IndustryTemplate";
import { HeartPulse, Shield, Accessibility } from "lucide-react";

const MedischeHulpmiddelen = () => {
  return (
    <IndustryTemplate
      industryKey="medical"
      Icon={HeartPulse}
      Icon2={Shield}
      Icon3={Accessibility}
      seoTitleNL="AI Chatbot voor Medische Hulpmiddelen E-commerce - Glimps AI"
      seoTitleFR="Chatbot IA pour Dispositifs Médicaux E-commerce - Glimps AI"
      seoDescriptionNL="Verbeter je medische hulpmiddelen webshop met AI-chatbots die productadvies geven, gebruiksinstructies delen en patiënten 24/7 helpen."
      seoDescriptionFR="Améliorez votre boutique de dispositifs médicaux avec des chatbots IA qui donnent des conseils produits, partagent des instructions d'utilisation et aident les patients 24/7."
      pathNL="/industries/medische-hulpmiddelen"
      pathFR="/fr/secteurs/dispositifs-medicaux"
      keywordsNL="AI chatbot medische hulpmiddelen, zorgproducten webshop, medisch advies chatbot, hulpmiddelen e-commerce"
      keywordsFR="chatbot IA dispositifs médicaux, boutique produits soins, chatbot conseils médicaux, e-commerce aides médicales"
    />
  );
};

export default MedischeHulpmiddelen;
