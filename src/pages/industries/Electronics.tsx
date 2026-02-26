import IndustryTemplate from "@/components/IndustryTemplate";
import { Cpu, CheckCircle2, Sparkles } from "lucide-react";

const Electronics = () => {
  return (
    <IndustryTemplate
      industryKey="electronics"
      Icon={Cpu}
      Icon2={CheckCircle2}
      Icon3={Sparkles}
      seoTitleNL="AI Chatbot voor Electronics & Technology Webshops - Glimps AI"
      seoTitleFR="Chatbot IA pour Boutiques Électronique & Technologie - Glimps AI"
      seoDescriptionNL="Help klanten de juiste tech keuze maken met AI die specificaties, compatibiliteit en features begrijpt. Slimme productadviseur voor elektronicawinkels."
      seoDescriptionFR="Aidez les clients à faire le bon choix technologique avec une IA qui comprend les spécifications, la compatibilité et les fonctionnalités. Conseiller produit intelligent pour magasins d'électronique."
      pathNL="/industries/electronics"
      pathFR="/fr/secteurs/electronique"
      keywordsNL="AI chatbot electronics, technologie webshop automatisering, product specificaties, compatibiliteit checker, tech aanbevelingen, elektronica e-commerce"
      keywordsFR="chatbot IA électronique, automatisation boutique technologie, spécifications produits, vérificateur compatibilité, recommandations tech, e-commerce électronique"
    />
  );
};

export default Electronics;
