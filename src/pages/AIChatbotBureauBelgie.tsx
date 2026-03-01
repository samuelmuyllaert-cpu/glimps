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

const AIChatbotBureauBelgie = () => {
  const graphData = [
    {
      "@type": "WebPage",
      "@id": "https://www.glimps.be/ai-chatbot-bureau-belgie-ecommerce",
      "url": "https://www.glimps.be/ai-chatbot-bureau-belgie-ecommerce",
      "name": "AI Chatbot Bureau België E-commerce | Glimps - Specialist in Webshops",
      "description": "Glimps is hét AI chatbot bureau in België voor e-commerce. Professionele chatbot oplossingen die conversie verhogen en klantenservice automatiseren.",
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
      "@id": "https://www.glimps.be/ai-chatbot-bureau-belgie-ecommerce#service",
      "serviceType": "AI Chatbot Agency",
      "provider": {
        "@id": "https://www.glimps.be#organization"
      },
      "name": "AI Chatbot Bureau België E-commerce",
      "description": "Professioneel AI chatbot bureau gespecialiseerd in e-commerce oplossingen. Wij helpen webshops groeien met slimme conversational AI.",
      "areaServed": {
        "@type": "Country",
        "name": "België"
      },
      "category": "AI Chatbot Development Bureau",
      "offers": {
        "@type": "AggregateOffer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "EUR",
        "offers": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "E-commerce Chatbot Development",
              "description": "Op maat gemaakte chatbots voor webshops"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Conversational AI Consultancy",
              "description": "Expert advies voor chatbot strategie"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Chatbot Optimalisatie",
              "description": "Continue verbetering van chatbot prestaties"
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
        title="AI Chatbot Bureau België E-commerce | Glimps - Specialist Webshop Chatbots"
        description="Glimps is hét AI chatbot bureau in België voor e-commerce. Professionele chatbot oplossingen die conversie verhogen en klantenservice automatiseren. Expert ontwikkeling en implementatie."
        path="/ai-chatbot-bureau-belgie-ecommerce"
        canonical="https://www.glimps.be/ai-chatbot-bureau-belgie-ecommerce"
        keywords="AI chatbot bureau België, AI chatbot bureau België e-commerce, chatbot ontwikkeling België, chatbot specialist België, conversational AI België, webshop chatbot bureau"
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

export default AIChatbotBureauBelgie;
