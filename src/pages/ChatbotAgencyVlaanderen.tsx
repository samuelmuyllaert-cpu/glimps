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

const ChatbotAgencyVlaanderen = () => {
  const graphData = [
    {
      "@type": "WebPage",
      "@id": "https://www.glimps.be/chatbot-agency-vlaanderen-ecommerce",
      "url": "https://www.glimps.be/chatbot-agency-vlaanderen-ecommerce",
      "name": "Chatbot Agency Vlaanderen E-commerce | Glimps - AI Experts",
      "description": "Glimps is jouw chatbot agency in Vlaanderen gespecialiseerd in e-commerce. Wij bouwen intelligente AI chatbots die verkopen verhogen en klanten 24/7 helpen.",
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
      "@id": "https://www.glimps.be/chatbot-agency-vlaanderen-ecommerce#service",
      "serviceType": "Chatbot Development Agency",
      "provider": {
        "@id": "https://www.glimps.be#organization"
      },
      "name": "Chatbot Agency Vlaanderen E-commerce",
      "description": "Professionele chatbot ontwikkeling voor e-commerce bedrijven in Vlaanderen. Specialisatie in AI-gedreven klantenservice en verkoopautomatisering.",
      "areaServed": {
        "@type": "State",
        "name": "Vlaanderen"
      },
      "category": "AI Chatbot Development",
      "offers": {
        "@type": "AggregateOffer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "EUR",
        "offers": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "24/7 AI Chatbot voor Webshops",
              "description": "Automatische klantenservice en productadvies"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "E-commerce Integraties",
              "description": "Naadloze koppeling met alle populaire webshop platformen"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Conversie Optimalisatie",
              "description": "Verhoog verkopen met slimme productaanbevelingen"
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
        title="Chatbot Agency Vlaanderen E-commerce | Glimps"
        description="Chatbot agency in Vlaanderen voor e-commerce. Wij bouwen AI chatbots die verkopen verhogen en klanten 24/7 helpen. Expert chatbot ontwikkeling."
        path="/chatbot-agency-vlaanderen-ecommerce"
        canonical="https://www.glimps.be/chatbot-agency-vlaanderen-ecommerce"
        keywords="chatbot agency Vlaanderen, chatbot agency Vlaanderen e-commerce, AI chatbot ontwikkeling Vlaanderen, chatbot bedrijf Vlaanderen, e-commerce chatbot Vlaanderen, webshop chatbot Vlaanderen, AI agency Vlaanderen"
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

export default ChatbotAgencyVlaanderen;
