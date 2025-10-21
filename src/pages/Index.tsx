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

const Index = () => {
  const graphData = [
    {
      "@type": "WebPage",
      "@id": "https://www.glimps.be/",
      "url": "https://www.glimps.be/",
      "name": "Glimps - AI Chatbot voor E-commerce | Verhoog Conversie",
      "description": "Slimme AI chatbot die je webshop bezoekers begeleidt naar de perfecte producten. Verhoog conversie met persoonlijke aanbevelingen 24/7.",
      "inLanguage": "nl-BE",
      "isPartOf": {
        "@id": "https://www.glimps.be#website"
      },
      "image": "https://www.glimps.be/glimps-hero.png",
      "publisher": {
        "@id": "https://www.glimps.be#organization"
      },
      "about": [
        {
          "@type": "Service",
          "name": "AI Chatbot voor E-commerce",
          "description": "Glimps biedt AI-gedreven chatbot oplossingen die webshop bezoekers helpen de perfecte producten te vinden en conversie verhogen met persoonlijke aanbevelingen 24/7.",
          "areaServed": "België",
          "provider": {
            "@id": "https://www.glimps.be#organization"
          },
          "serviceType": [
            "AI Chatbot",
            "E-commerce Conversie Optimalisatie",
            "Automatische Klantenservice",
            "Product Aanbevelingen",
            "Multi-language Support"
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Glimps AI Features",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Slimme Product Aanbevelingen",
                  "description": "AI begeleidt klanten naar de perfecte producten op basis van hun voorkeuren en gedrag"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "24/7 Klantenservice",
                  "description": "Automatische beantwoording van vragen over producten, verzending en retour"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "E-commerce Integraties",
                  "description": "Naadloze integratie met Shopify, WooCommerce, Magento, PrestaShop en meer"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Meertalige Support",
                  "description": "Ondersteuning voor meerdere talen om internationale klanten te bedienen"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Real-time Analytics",
                  "description": "Inzicht in klantgedrag en conversie optimalisatie"
                }
              }
            ]
          }
        }
      ],
      "mainEntity": {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Wat kost Glimps?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Glimps biedt verschillende prijsplannen aan, afgestemd op de grootte van je webshop. We hebben een gratis proefperiode beschikbaar zodat je de chatbot eerst kunt testen."
            }
          },
          {
            "@type": "Question",
            "name": "Hoe snel kan ik Glimps implementeren?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "De implementatie van Glimps is eenvoudig en kan binnen enkele minuten klaar zijn. Je hoeft alleen een code snippet toe te voegen aan je website en de chatbot is direct operationeel."
            }
          },
          {
            "@type": "Question",
            "name": "Welke e-commerce platformen worden ondersteund?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Glimps werkt met alle grote e-commerce platforms zoals Shopify, WooCommerce, Magento, PrestaShop, Odoo en meer. De integratie is plug-and-play."
            }
          },
          {
            "@type": "Question",
            "name": "Kan Glimps in meerdere talen werken?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ja, Glimps ondersteunt meerdere talen en past zich automatisch aan de taal van je webshop aan. Perfect voor internationale webshops."
            }
          },
          {
            "@type": "Question",
            "name": "Hoe leert de AI over mijn producten?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Glimps integreert direct met je productcatalogus en leert automatisch over je producten, voorraad, kenmerken en specificaties. De AI wordt slimmer naarmate meer klanten ermee interacteren."
            }
          }
        ]
      }
    },
    baseOrganization,
    {
      "@type": "WebSite",
      "@id": "https://www.glimps.be#website",
      "name": "Glimps - AI Chatbot voor E-commerce",
      "url": "https://www.glimps.be",
      "description": "Slimme AI chatbot die je webshop bezoekers begeleidt naar de perfecte producten. Verhoog conversie met persoonlijke aanbevelingen 24/7.",
      "publisher": {
        "@id": "https://www.glimps.be#organization"
      },
      "inLanguage": "nl-BE"
    },
    {
      "@type": "SoftwareApplication",
      "name": "Glimps AI Chatbot",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "description": "AI-gedreven chatbot voor e-commerce die bezoekers helpt de perfecte producten te vinden en conversie verhoogt met persoonlijke aanbevelingen en automatische klantenservice.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "EUR",
        "description": "Gratis proefperiode beschikbaar"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "50"
      },
      "provider": {
        "@id": "https://www.glimps.be#organization"
      }
    },
    {
      "@type": "Review",
      "reviewBody": "Dankzij Glimps kunnen onze klanten veel sneller de perfecte producten vinden. Onze conversie is met 40% gestegen en we besparen uren aan klantenservice.",
      "author": {
        "@type": "Person",
        "name": "Lisa Van den Berg",
        "affiliation": {
          "@type": "Organization",
          "name": "Fashion Hub"
        }
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "itemReviewed": {
        "@id": "https://www.glimps.be/"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.glimps.be/"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Glimps - AI Chatbot voor E-commerce | Verhoog Conversie"
        description="Slimme AI chatbot die je webshop bezoekers begeleidt naar de perfecte producten. Verhoog conversie met persoonlijke aanbevelingen 24/7."
        path="/"
        canonical="https://www.glimps.be"
        keywords="AI chatbot, e-commerce, webshop, conversie verhogen, klantenservice, productaanbevelingen, online verkoop, België"
        type="website"
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

export default Index;
