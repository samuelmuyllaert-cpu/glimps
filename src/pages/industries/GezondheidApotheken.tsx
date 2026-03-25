import IndustryTemplate from "@/components/IndustryTemplate";
import { Stethoscope, Shield, Clock } from "lucide-react";

const GezondheidApotheken = () => {
  return (
    <IndustryTemplate
      industryKey="health"
      Icon={Stethoscope}
      Icon2={Shield}
      Icon3={Clock}
      seoTitleNL="AI Chatbot voor Apotheek & Gezondheid E-commerce - Glimps AI"
      seoTitleFR="Chatbot IA pour Pharmacies & Santé E-commerce - Glimps AI"
      seoDescriptionNL="Verbeter je apotheek webshop met AI-chatbots die medicijnadvies geven, vragen beantwoorden en klanten 24/7 helpen met gezondheidsproducten."
      seoDescriptionFR="Améliorez votre pharmacie en ligne avec des chatbots IA qui donnent des conseils médicamenteux, répondent aux questions et aident les clients 24/7 avec des produits de santé."
      pathNL="/industries/gezondheid-apotheken"
      pathFR="/fr/secteurs/sante-pharmacies"
      keywordsNL="AI chatbot apotheek, gezondheid webshop automatisering, medicijnadvies chatbot, apotheek e-commerce, gezondheidsproducten online"
      keywordsFR="chatbot IA pharmacie, automatisation boutique santé, conseils médicaments chatbot, e-commerce pharmacie, produits santé en ligne"
    />
  );
};

export default GezondheidApotheken;
