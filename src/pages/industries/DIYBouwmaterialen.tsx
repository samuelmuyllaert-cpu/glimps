import IndustryTemplate from "@/components/IndustryTemplate";
import { Hammer, Ruler, Wrench } from "lucide-react";

const DIYBouwmaterialen = () => {
  return (
    <IndustryTemplate
      industryKey="diy"
      Icon={Hammer}
      Icon2={Ruler}
      Icon3={Wrench}
      seoTitleNL="AI Chatbot voor DIY & Bouwmaterialen E-commerce - Glimps AI"
      seoTitleFR="Chatbot IA pour Bricolage & Matériaux de Construction - Glimps AI"
      seoDescriptionNL="Verbeter je bouwmarkt webshop met AI-chatbots die technisch advies geven, materialen berekenen en klussen helpen plannen."
      seoDescriptionFR="Améliorez votre magasin de bricolage en ligne avec des chatbots IA qui donnent des conseils techniques, calculent les matériaux et aident à planifier les projets."
      pathNL="/industries/diy-bouwmaterialen"
      pathFR="/fr/secteurs/bricolage-materiaux-construction"
      keywordsNL="AI chatbot bouwmarkt, DIY webshop automatisering, technisch advies chatbot, bouwmaterialen berekenen"
      keywordsFR="chatbot IA magasin bricolage, automatisation boutique DIY, conseils techniques chatbot, calcul matériaux construction"
    />
  );
};

export default DIYBouwmaterialen;
