import IndustryTemplate from "@/components/IndustryTemplate";
import { Dog, Heart, Package } from "lucide-react";

const Huisdieren = () => {
  return (
    <IndustryTemplate
      industryKey="pets"
      Icon={Dog}
      Icon2={Heart}
      Icon3={Package}
      seoTitleNL="AI Chatbot voor Dierenwinkel & Huisdieren E-commerce - Glimps AI"
      seoTitleFR="Chatbot IA pour Animalerie & Animaux E-commerce - Glimps AI"
      seoDescriptionNL="Boost je dierenwinkel met AI-chatbots die voedingsadvies geven, productaanbevelingen doen en huisdiereigenaren 24/7 helpen."
      seoDescriptionFR="Boostez votre animalerie avec des chatbots IA qui donnent des conseils nutritionnels, font des recommandations produits et aident les propriétaires d'animaux 24/7."
      pathNL="/industries/huisdieren"
      pathFR="/fr/secteurs/animaux"
      keywordsNL="AI chatbot dierenwinkel, huisdieren webshop automatisering, voer advies chatbot, dierenwinkel e-commerce"
      keywordsFR="chatbot IA animalerie, automatisation boutique animaux, conseils alimentation chatbot, e-commerce animalerie"
    />
  );
};

export default Huisdieren;
