import IndustryTemplate from "@/components/IndustryTemplate";
import { Coffee, ShoppingCart, Truck } from "lucide-react";

const VoedingDranken = () => {
  return (
    <IndustryTemplate
      industryKey="food"
      Icon={Coffee}
      Icon2={ShoppingCart}
      Icon3={Truck}
      seoTitleNL="AI Chatbot voor Voeding & Dranken E-commerce - Glimps AI"
      seoTitleFR="Chatbot IA pour Alimentation & Boissons E-commerce - Glimps AI"
      seoDescriptionNL="Verhoog je food e-commerce sales met AI-chatbots die receptideeën delen, allergieën checken en persoonlijke productsuggesties geven."
      seoDescriptionFR="Augmentez vos ventes e-commerce alimentaire avec des chatbots IA qui partagent des idées de recettes, vérifient les allergies et donnent des suggestions de produits personnalisées."
      pathNL="/industries/voeding-dranken"
      pathFR="/fr/secteurs/alimentation-boissons"
      keywordsNL="AI chatbot voeding, food e-commerce automatisering, recept suggesties, allergie check, online supermarkt chatbot"
      keywordsFR="chatbot IA alimentation, automatisation e-commerce alimentaire, suggestions recettes, vérification allergies, chatbot supermarché en ligne"
    />
  );
};

export default VoedingDranken;
