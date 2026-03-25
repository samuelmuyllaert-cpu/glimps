import IndustryTemplate from "@/components/IndustryTemplate";
import { Baby, Heart, ShoppingBag } from "lucide-react";

const BabyKind = () => {
  return (
    <IndustryTemplate
      industryKey="baby"
      Icon={Baby}
      Icon2={Heart}
      Icon3={ShoppingBag}
      seoTitleNL="AI Chatbot voor Baby & Kind Webshops - Glimps AI"
      seoTitleFR="Chatbot IA pour Boutiques Bébé & Enfant - Glimps AI"
      seoDescriptionNL="Verhoog je baby & kind webshop conversies met AI-chatbots die ouders helpen met productadvies, veiligheidsinfo en persoonlijke aanbevelingen."
      seoDescriptionFR="Augmentez les conversions de votre boutique bébé & enfant avec des chatbots IA qui aident les parents avec des conseils produits, infos sécurité et recommandations personnalisées."
      pathNL="/industries/baby-kind"
      pathFR="/fr/secteurs/bebe-enfant"
      keywordsNL="AI chatbot baby, kinderwinkel automatisering, babyproducten advies, baby webshop chatbot, ouder assistentie"
      keywordsFR="chatbot IA bébé, automatisation magasin enfants, conseils produits bébé, chatbot boutique bébé, assistance parents"
    />
  );
};

export default BabyKind;
