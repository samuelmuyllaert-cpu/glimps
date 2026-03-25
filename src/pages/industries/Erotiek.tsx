import IndustryTemplate from "@/components/IndustryTemplate";
import { Heart, Lock, MessageCircle } from "lucide-react";

const Erotiek = () => {
  return (
    <IndustryTemplate
      industryKey="adult"
      Icon={Heart}
      Icon2={Lock}
      Icon3={MessageCircle}
      seoTitleNL="AI Chatbot voor Erotiek & Wellness E-commerce - Glimps AI"
      seoTitleFR="Chatbot IA pour Érotisme & Bien-être E-commerce - Glimps AI"
      seoDescriptionNL="Verhoog je erotiek webshop conversies met discrete AI-chatbots die persoonlijk advies geven, vragen beantwoorden en klanten 24/7 helpen in vertrouwelijkheid."
      seoDescriptionFR="Augmentez les conversions de votre boutique érotique avec des chatbots IA discrets qui donnent des conseils personnalisés, répondent aux questions et aident les clients 24/7 en toute confidentialité."
      pathNL="/industries/erotiek"
      pathFR="/fr/secteurs/erotisme"
      keywordsNL="AI chatbot erotiek, discrete shopping assistent, wellness producten chatbot, intieme producten advies"
      keywordsFR="chatbot IA érotisme, assistant shopping discret, chatbot produits bien-être, conseils produits intimes"
    />
  );
};

export default Erotiek;
