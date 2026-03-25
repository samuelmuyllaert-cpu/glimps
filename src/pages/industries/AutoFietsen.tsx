import IndustryTemplate from "@/components/IndustryTemplate";
import { Car, Bike, Wrench } from "lucide-react";

const AutoFietsen = () => {
  return (
    <IndustryTemplate
      industryKey="automotive"
      Icon={Car}
      Icon2={Bike}
      Icon3={Wrench}
      seoTitleNL="AI Chatbot voor Auto & Fiets E-commerce - Glimps AI"
      seoTitleFR="Chatbot IA pour Auto & Vélo E-commerce - Glimps AI"
      seoDescriptionNL="Boost je auto- en fietswinkel met AI-chatbots die technische specificaties uitleggen, onderdelen adviseren en compatibiliteit checken."
      seoDescriptionFR="Boostez votre magasin auto et vélo avec des chatbots IA qui expliquent les spécifications techniques, conseillent les pièces et vérifient la compatibilité."
      pathNL="/industries/auto-fietsen"
      pathFR="/fr/secteurs/auto-velo"
      keywordsNL="AI chatbot auto, fietswinkel automatisering, onderdelen advies, auto accessoires chatbot, fiets webshop"
      keywordsFR="chatbot IA auto, automatisation magasin vélo, conseils pièces, chatbot accessoires auto, boutique vélo en ligne"
    />
  );
};

export default AutoFietsen;
