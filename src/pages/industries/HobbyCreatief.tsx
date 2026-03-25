import IndustryTemplate from "@/components/IndustryTemplate";
import { Palette, Scissors, Sparkles } from "lucide-react";

const HobbyCreatief = () => {
  return (
    <IndustryTemplate
      industryKey="hobby"
      Icon={Palette}
      Icon2={Scissors}
      Icon3={Sparkles}
      seoTitleNL="AI Chatbot voor Hobby & Creatief E-commerce - Glimps AI"
      seoTitleFR="Chatbot IA pour Loisirs & Créatifs E-commerce - Glimps AI"
      seoDescriptionNL="Boost je hobbywinkel met AI-chatbots die project-ideeën delen, materialen adviseren en creatieve klanten inspireren met persoonlijke suggesties."
      seoDescriptionFR="Boostez votre magasin de loisirs avec des chatbots IA qui partagent des idées de projets, conseillent les matériaux et inspirent les clients créatifs avec des suggestions personnalisées."
      pathNL="/industries/hobby-creatief"
      pathFR="/fr/secteurs/loisirs-creatifs"
      keywordsNL="AI chatbot hobbywinkel, creatieve materialen chatbot, knutsel advies, DIY project ideeën"
      keywordsFR="chatbot IA magasin loisirs, chatbot matériaux créatifs, conseils bricolage, idées projets DIY"
    />
  );
};

export default HobbyCreatief;
