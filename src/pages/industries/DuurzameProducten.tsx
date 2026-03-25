import IndustryTemplate from "@/components/IndustryTemplate";
import { Leaf, Recycle, Heart } from "lucide-react";

const DuurzameProducten = () => {
  return (
    <IndustryTemplate
      industryKey="eco"
      Icon={Leaf}
      Icon2={Recycle}
      Icon3={Heart}
      seoTitleNL="AI Chatbot voor Duurzame & Eco Producten E-commerce - Glimps AI"
      seoTitleFR="Chatbot IA pour Produits Durables & Éco E-commerce - Glimps AI"
      seoDescriptionNL="Verhoog je eco webshop met AI-chatbots die duurzaamheidsinfo delen, milieuvriendelijke alternatieven suggereren en bewuste consumenten helpen."
      seoDescriptionFR="Augmentez votre boutique éco avec des chatbots IA qui partagent des infos durabilité, suggèrent des alternatives écologiques et aident les consommateurs conscients."
      pathNL="/industries/duurzame-producten"
      pathFR="/fr/secteurs/produits-durables"
      keywordsNL="AI chatbot duurzaam, eco webshop automatisering, milieuvriendelijk advies, groene producten chatbot"
      keywordsFR="chatbot IA durable, automatisation boutique éco, conseils écologiques, chatbot produits verts"
    />
  );
};

export default DuurzameProducten;
