import IndustryTemplate from "@/components/IndustryTemplate";
import { Home, CheckCircle2, Sparkles } from "lucide-react";

const MeubelsInterieur = () => {
  return (
    <IndustryTemplate
      industryKey="furniture"
      Icon={Home}
      Icon2={CheckCircle2}
      Icon3={Sparkles}
      seoTitleNL="AI Chatbot voor Meubels & Interieur Webshops - Glimps AI"
      seoTitleFR="Chatbot IA pour Boutiques Meubles & Intérieur - Glimps AI"
      seoDescriptionNL="Help klanten hun perfecte interieur samenstellen met AI die stijl, afmetingen en combinaties begrijpt. Automatiseer interieuradvies voor je meubelwinkel."
      seoDescriptionFR="Aidez les clients à composer leur intérieur parfait avec une IA qui comprend le style, les dimensions et les combinaisons. Automatisez les conseils d'intérieur pour votre magasin de meubles."
      pathNL="/industries/meubels-interieur"
      pathFR="/fr/secteurs/meubles-interieur"
      keywordsNL="AI chatbot meubels, interieur webshop automatisering, stijladvies, afmetingen checker, meubel combinaties, interieur e-commerce"
      keywordsFR="chatbot IA meubles, automatisation boutique intérieur, conseils style, vérificateur dimensions, combinaisons meubles, e-commerce intérieur"
    />
  );
};

export default MeubelsInterieur;
