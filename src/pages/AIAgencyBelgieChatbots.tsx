import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import WhyDifferent from "@/components/WhyDifferent";
import AIJourney from "@/components/AIJourney";
import Integrations from "@/components/Integrations";
import AIKnowledge from "@/components/AIKnowledge";
import ProductFeatures from "@/components/ProductFeatures";
import HowItWorks from "@/components/HowItWorks";
import Quote from "@/components/Quote";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ChatbotComparison from "@/components/ChatbotComparison";
import SEO from "@/components/SEO";
import StructuredData, { baseOrganization } from "@/components/StructuredData";

const AIAgencyBelgieChatbots = () => {
  const graphData = [
    {
      "@type": "WebPage",
      "@id": "https://www.glimps.be/ai-agency-belgie-chatbots",
      "url": "https://www.glimps.be/ai-agency-belgie-chatbots",
      "name": "AI Agency België Chatbots | Glimps - Artificiële Intelligentie Experts",
      "description": "Glimps is een toonaangevend AI agency in België gespecialiseerd in chatbots voor e-commerce. Ontdek hoe onze AI-oplossingen jouw business transformeren.",
      "inLanguage": "nl-BE",
      "isPartOf": {
        "@id": "https://www.glimps.be#website"
      },
      "about": {
        "@id": "https://www.glimps.be#organization"
      },
      "publisher": {
        "@id": "https://www.glimps.be#organization"
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.glimps.be/ai-agency-belgie-chatbots#service",
      "serviceType": "Artificial Intelligence Agency",
      "provider": {
        "@id": "https://www.glimps.be#organization"
      },
      "name": "AI Agency België Chatbots",
      "description": "Leading AI agency in België delivering cutting-edge chatbot solutions for e-commerce businesses. Expert AI implementation and optimization.",
      "areaServed": {
        "@type": "Country",
        "name": "België"
      },
      "category": "Artificial Intelligence Services",
      "offers": {
        "@type": "AggregateOffer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "EUR",
        "offers": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Chatbot Development",
              "description": "Custom AI chatbot solutions voor e-commerce"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Machine Learning Integration",
              "description": "Slimme productaanbevelingen met AI"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI-powered Customer Service",
              "description": "24/7 geautomatiseerde klantenservice"
            }
          }
        ]
      }
    },
    baseOrganization
  ];

  return (
    <div className="min-h-screen bg-background" style={{ zoom: '0.8' }}>
      <SEO
        title="AI Agency België Chatbots | Glimps - Artificiële Intelligentie Experts E-commerce"
        description="Glimps is een toonaangevend AI agency in België gespecialiseerd in chatbots voor e-commerce. Ontdek hoe onze AI-oplossingen jouw webshop transformeren en verkopen verhogen met slimme automatisering."
        path="/ai-agency-belgie-chatbots"
        canonical="https://www.glimps.be/ai-agency-belgie-chatbots"
        keywords="AI agency België, AI agency België chatbots, artificiële intelligentie België, AI bedrijf België, chatbot AI België, machine learning België, AI e-commerce België"
        type="website"
        language="nl"
      />
      <StructuredData type="graph" data={graphData} />
      <Navigation />
      <Hero />
      <Features />
      <WhyDifferent />
      <Integrations />
      <AIJourney />
      <AIKnowledge />
      <ProductFeatures />
      <HowItWorks />
      <ChatbotComparison />
      <Quote />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default AIAgencyBelgieChatbots;
