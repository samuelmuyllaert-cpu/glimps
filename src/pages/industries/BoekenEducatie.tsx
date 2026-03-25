import IndustryTemplate from "@/components/IndustryTemplate";
import { BookOpen, GraduationCap, Lightbulb } from "lucide-react";

const BoekenEducatie = () => {
  return (
    <IndustryTemplate
      industryKey="books"
      Icon={BookOpen}
      Icon2={GraduationCap}
      Icon3={Lightbulb}
      seoTitleNL="AI Chatbot voor Boeken & Educatie E-commerce - Glimps AI"
      seoTitleFR="Chatbot IA pour Livres & Éducation E-commerce - Glimps AI"
      seoDescriptionNL="Boost je boekwinkel met AI-chatbots die lees-aanbevelingen doen, studieматериал suggereren en klanten helpen het perfecte boek te vinden."
      seoDescriptionFR="Boostez votre librairie avec des chatbots IA qui font des recommandations de lecture, suggèrent du matériel d'étude et aident les clients à trouver le livre parfait."
      pathNL="/industries/boeken-educatie"
      pathFR="/fr/secteurs/livres-education"
      keywordsNL="AI chatbot boekwinkel, educatie webshop automatisering, boek aanbevelingen, studiemateriaal advies"
      keywordsFR="chatbot IA librairie, automatisation boutique éducation, recommandations livres, conseils matériel étude"
    />
  );
};

export default BoekenEducatie;
