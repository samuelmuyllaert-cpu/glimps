import IndustryTemplate from "@/components/IndustryTemplate";
import { Dumbbell, CheckCircle2, Sparkles } from "lucide-react";

const SportkledingFitness = () => {
  return (
    <IndustryTemplate
      industryKey="sports"
      Icon={Dumbbell}
      Icon2={CheckCircle2}
      Icon3={Sparkles}
      seoTitleNL="AI Chatbot voor Sportkleding & Fitness Webshops - Glimps AI"
      seoTitleFR="Chatbot IA pour Boutiques Vêtements de Sport & Fitness - Glimps AI"
      seoDescriptionNL="Boost je sportwebshop met AI die atleten helpt de perfecte gear te vinden voor hun sport en niveau. Automatiseer sportadvies en productaanbevelingen."
      seoDescriptionFR="Boostez votre boutique de sport avec une IA qui aide les athlètes à trouver l'équipement parfait pour leur sport et niveau. Automatisez les conseils sportifs et les recommandations produits."
      pathNL="/industries/sportkleding-fitness"
      pathFR="/fr/secteurs/vetements-sport-fitness"
      keywordsNL="AI chatbot sport, fitness webshop automatisering, sportkleding advies, gear aanbevelingen, fitness producten, sport e-commerce"
      keywordsFR="chatbot IA sport, automatisation boutique fitness, conseils vêtements sport, recommandations équipement, produits fitness, e-commerce sport"
    />
  );
};

export default SportkledingFitness;
