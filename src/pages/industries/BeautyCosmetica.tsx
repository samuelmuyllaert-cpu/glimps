import IndustryTemplate from "@/components/IndustryTemplate";
import { Heart, CheckCircle2, Sparkles } from "lucide-react";

const BeautyCosmetica = () => {
  return (
    <IndustryTemplate
      industryKey="beauty"
      Icon={Heart}
      Icon2={CheckCircle2}
      Icon3={Sparkles}
      seoTitleNL="AI Chatbot voor Beauty & Cosmetica Webshops - Glimps AI"
      seoTitleFR="Chatbot IA pour Boutiques Beauté & Cosmétiques - Glimps AI"
      seoDescriptionNL="Persoonlijk beauty advies met AI die huidtypes, ingrediënten en producten begrijpt. Automatiseer productaanbevelingen voor je cosmetica webshop met slimme chatbots."
      seoDescriptionFR="Conseils beauté personnalisés avec IA qui comprend les types de peau, ingrédients et produits. Automatisez les recommandations produits pour votre boutique cosmétique avec des chatbots intelligents."
      pathNL="/industries/beauty-cosmetica"
      pathFR="/fr/secteurs/beaute-cosmetique"
      keywordsNL="AI chatbot beauty, cosmetica webshop automatisering, huidtype advies, beauty product aanbevelingen, skincare chatbot, cosmetica e-commerce"
      keywordsFR="chatbot IA beauté, automatisation boutique cosmétique, conseils type de peau, recommandations produits beauté, chatbot soins peau, e-commerce cosmétique"
    />
  );
};

export default BeautyCosmetica;
