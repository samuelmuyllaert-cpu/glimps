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

const ChatbotBouwBedrijfVlaanderen = () => {
  const graphData = [
    {
      "@type": "WebPage",
      "@id": "https://www.glimps.be/chatbot-bouw-bedrijf-vlaanderen-ecommerce",
      "url": "https://www.glimps.be/chatbot-bouw-bedrijf-vlaanderen-ecommerce",
      "name": "Chatbot Bouw Bedrijf Vlaanderen E-commerce | Glimps - Chatbot Ontwikkelaars",
      "description": "Glimps is een ervaren chatbot bouw bedrijf in Vlaanderen voor e-commerce. Wij bouwen krachtige AI chatbots op maat voor jouw webshop. Van concept tot implementatie.",
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
      "@id": "https://www.glimps.be/chatbot-bouw-bedrijf-vlaanderen-ecommerce#service",
      "serviceType": "Chatbot Development Company",
      "provider": {
        "@id": "https://www.glimps.be#organization"
      },
      "name": "Chatbot Bouw Bedrijf Vlaanderen E-commerce",
      "description": "Gespecialiseerd chatbot bouw bedrijf in Vlaanderen. Wij ontwikkelen intelligente chatbots die de verkoop van e-commerce bedrijven verhogen.",
      "areaServed": {
        "@type": "State",
        "name": "Vlaanderen"
      },
      "category": "Chatbot Development & Construction",
      "offers": {
        "@type": "AggregateOffer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "EUR",
        "offers": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom Chatbot Development",
              "description": "Op maat gebouwde chatbots voor e-commerce"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Chatbot Implementatie",
              "description": "Volledige implementatie in jouw webshop"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Chatbot Onderhoud",
              "description": "Continue support en updates"
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
        title="Chatbot Bouw Bedrijf Vlaanderen E-commerce | Glimps - Expert Chatbot Ontwikkelaars"
        description="Glimps is een ervaren chatbot bouw bedrijf in Vlaanderen voor e-commerce. Wij bouwen krachtige AI chatbots op maat voor jouw webshop. Van concept tot implementatie en onderhoud."
        path="/chatbot-bouw-bedrijf-vlaanderen-ecommerce"
        canonical="https://www.glimps.be/chatbot-bouw-bedrijf-vlaanderen-ecommerce"
        keywords="chatbot bouw bedrijf Vlaanderen, chatbot bouw bedrijf Vlaanderen e-commerce, chatbot ontwikkeling Vlaanderen, chatbot bouwen Vlaanderen, AI chatbot developer Vlaanderen"
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

export default ChatbotBouwBedrijfVlaanderen;
