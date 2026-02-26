import IndustryTemplate from "@/components/IndustryTemplate";
import { Flower, CheckCircle2, Sparkles } from "lucide-react";

const TuinBuitenleven = () => {
  return (
    <IndustryTemplate
      industryKey="garden"
      Icon={Flower}
      Icon2={CheckCircle2}
      Icon3={Sparkles}
      seoTitleNL="AI Chatbot voor Tuin & Buitenleven Webshops - Glimps AI"
      seoTitleFR="Chatbot IA pour Boutiques Jardin & Vie en Plein Air - Glimps AI"
      seoDescriptionNL="Help klanten hun droompluin creëren met AI die planten, seizoenen en tuinonderhoud begrijpt. Automatiseer tuinadvies voor je tuincentrum of webshop."
      seoDescriptionFR="Aidez les clients à créer leur jardin de rêve avec une IA qui comprend les plantes, saisons et entretien du jardin. Automatisez les conseils jardin pour votre jardinerie ou boutique en ligne."
      pathNL="/industries/tuin-buitenleven"
      pathFR="/fr/secteurs/jardin-plein-air"
      keywordsNL="AI chatbot tuin, tuincentrum webshop automatisering, plantenadvies, seizoensaanbevelingen, tuinonderhoud, tuin e-commerce"
      keywordsFR="chatbot IA jardin, automatisation jardinerie boutique, conseils plantes, recommandations saisonnières, entretien jardin, e-commerce jardin"
    />
  );
};

export default TuinBuitenleven;
