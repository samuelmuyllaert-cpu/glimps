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
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { language, t } = useLanguage();

  const getStructuredData = () => {
    if (language === 'en') {
      return [
        {
          "@type": "WebPage",
          "@id": "https://www.glimps.be/en",
          "url": "https://www.glimps.be/en",
          "name": "Intelligent chatbots for e-commerce | Glimps",
          "description": "AI chatbots for your online store. Guide visitors 24/7, increase conversion and automate customer service with intelligent AI.",
          "inLanguage": "en-GB",
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
              "name": "Intelligent chatbots for e-commerce",
              "description": "Glimps provides intelligent chatbots for e-commerce that help online store visitors find the perfect products and increase conversion with personalized recommendations 24/7.",
              "areaServed": "Belgium",
              "provider": {
                "@id": "https://www.glimps.be#organization"
              },
              "serviceType": [
                "AI Chatbot",
                "E-commerce Conversion Optimization",
                "Automated Customer Service",
                "Product Recommendations",
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
                      "name": "Smart Product Recommendations",
                      "description": "AI guides customers to the perfect products based on their preferences and behavior"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "24/7 Customer Service",
                      "description": "Automated answering of questions about products, shipping and returns"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "E-commerce Integrations",
                      "description": "Seamless integration with Shopify, WooCommerce, Magento, PrestaShop and more"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Multilingual Support",
                      "description": "Support for multiple languages to serve international customers"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Real-time Analytics",
                      "description": "Insights into customer behavior and conversion optimization"
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
                "name": "How much does Glimps cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Glimps offers different pricing plans, tailored to the size of your online store. We have a free trial available so you can test the chatbot first."
                }
              },
              {
                "@type": "Question",
                "name": "How quickly can I implement Glimps?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Implementing Glimps is simple and can be ready within minutes. You only need to add a code snippet to your website and the chatbot is immediately operational."
                }
              },
              {
                "@type": "Question",
                "name": "Which e-commerce platforms are supported?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Glimps works with all major e-commerce platforms like Shopify, WooCommerce, Magento, PrestaShop, Odoo and more. The integration is plug-and-play."
                }
              },
              {
                "@type": "Question",
                "name": "Can Glimps work in multiple languages?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Glimps supports multiple languages and automatically adapts to the language of your online store. Perfect for international e-commerce."
                }
              },
              {
                "@type": "Question",
                "name": "How does the AI learn about my products?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Glimps integrates directly with your product catalog and automatically learns about your products, inventory, features and specifications. The AI gets smarter as more customers interact with it."
                }
              }
            ]
          }
        },
        baseOrganization,
        {
          "@type": "WebSite",
          "@id": "https://www.glimps.be#website",
          "name": "Glimps - Intelligent chatbots for e-commerce",
          "url": "https://www.glimps.be",
          "description": "AI chatbots for your online store. Guide visitors 24/7, increase conversion and automate customer service with intelligent AI.",
          "publisher": {
            "@id": "https://www.glimps.be#organization"
          },
          "inLanguage": "en-GB"
        },
        {
          "@type": "SoftwareApplication",
          "name": "Glimps - Intelligent chatbots for e-commerce",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web",
          "description": "Intelligent chatbots for e-commerce that help visitors find the perfect products and increase conversion with personalized recommendations and automated customer service 24/7.",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "EUR",
            "description": "Free trial available"
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
          "reviewBody": "Thanks to Glimps, our customers can find the perfect products much faster. Our conversion has increased by 40% and we save hours on customer service.",
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
              "item": "https://www.glimps.be/en"
            }
          ]
        }
      ];
    } else if (language === 'fr') {
      return [
        {
          "@type": "WebPage",
          "@id": "https://www.glimps.be/fr",
          "url": "https://www.glimps.be/fr",
          "name": "Chatbots intelligents pour e-commerce | Glimps",
          "description": "Chatbots IA pour votre boutique en ligne. Guidez les visiteurs 24/7, augmentez la conversion et automatisez le service client avec l'IA intelligente.",
          "inLanguage": "fr-BE",
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
              "name": "Chatbots intelligents pour e-commerce",
              "description": "Glimps propose des chatbots intelligents pour l'e-commerce qui aident les visiteurs de boutiques en ligne à trouver les produits parfaits et augmentent la conversion avec des recommandations personnalisées 24/7.",
              "areaServed": "Belgique",
              "provider": {
                "@id": "https://www.glimps.be#organization"
              },
              "serviceType": [
                "Chatbot IA",
                "Optimisation de la conversion e-commerce",
                "Service client automatisé",
                "Recommandations de produits",
                "Support multilingue"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Fonctionnalités Glimps AI",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Recommandations de produits intelligentes",
                      "description": "L'IA guide les clients vers les produits parfaits en fonction de leurs préférences et comportements"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Service client 24/7",
                      "description": "Réponses automatiques aux questions sur les produits, la livraison et les retours"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Intégrations e-commerce",
                      "description": "Intégration transparente avec Shopify, WooCommerce, Magento, PrestaShop et plus"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Support multilingue",
                      "description": "Support pour plusieurs langues pour servir les clients internationaux"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Analyses en temps réel",
                      "description": "Aperçus du comportement des clients et optimisation de la conversion"
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
                "name": "Combien coûte Glimps ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Glimps propose différents plans tarifaires, adaptés à la taille de votre boutique en ligne. Nous avons une période d'essai gratuite disponible pour que vous puissiez d'abord tester le chatbot."
                }
              },
              {
                "@type": "Question",
                "name": "À quelle vitesse puis-je implémenter Glimps ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "L'implémentation de Glimps est simple et peut être prête en quelques minutes. Vous n'avez qu'à ajouter un extrait de code à votre site Web et le chatbot est immédiatement opérationnel."
                }
              },
              {
                "@type": "Question",
                "name": "Quelles plateformes e-commerce sont prises en charge ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Glimps fonctionne avec toutes les principales plateformes e-commerce comme Shopify, WooCommerce, Magento, PrestaShop, Odoo et plus. L'intégration est plug-and-play."
                }
              },
              {
                "@type": "Question",
                "name": "Glimps peut-il fonctionner dans plusieurs langues ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oui, Glimps prend en charge plusieurs langues et s'adapte automatiquement à la langue de votre boutique en ligne. Parfait pour l'e-commerce international."
                }
              },
              {
                "@type": "Question",
                "name": "Comment l'IA apprend-elle sur mes produits ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Glimps s'intègre directement à votre catalogue de produits et apprend automatiquement sur vos produits, votre inventaire, vos caractéristiques et spécifications. L'IA devient plus intelligente au fur et à mesure que davantage de clients interagissent avec elle."
                }
              }
            ]
          }
        },
        baseOrganization,
        {
          "@type": "WebSite",
          "@id": "https://www.glimps.be#website",
          "name": "Glimps - Chatbots intelligents pour e-commerce",
          "url": "https://www.glimps.be",
          "description": "Chatbots IA pour votre boutique en ligne. Guidez les visiteurs 24/7, augmentez la conversion et automatisez le service client avec l'IA intelligente.",
          "publisher": {
            "@id": "https://www.glimps.be#organization"
          },
          "inLanguage": "fr-BE"
        },
        {
          "@type": "SoftwareApplication",
          "name": "Glimps - Chatbots intelligents pour e-commerce",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web",
          "description": "Chatbots intelligents pour l'e-commerce qui aident les visiteurs à trouver les produits parfaits et augmentent la conversion avec des recommandations personnalisées et un service client automatisé 24/7.",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "EUR",
            "description": "Essai gratuit disponible"
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
          "reviewBody": "Grâce à Glimps, nos clients peuvent trouver les produits parfaits beaucoup plus rapidement. Notre conversion a augmenté de 40% et nous économisons des heures de service client.",
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
              "name": "Accueil",
              "item": "https://www.glimps.be/fr"
            }
          ]
        }
      ];
    } else {
      return [
        {
          "@type": "WebPage",
          "@id": "https://www.glimps.be/",
          "url": "https://www.glimps.be/",
          "name": "Intelligente chatbots voor e-commerce | Glimps",
          "description": "AI chatbots voor je webshop. Begeleid bezoekers 24/7, verhoog conversie en automatiseer klantenservice met intelligente AI.",
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
              "name": "Intelligente chatbots voor e-commerce",
              "description": "Glimps biedt intelligente chatbots voor e-commerce die webshop bezoekers helpen de perfecte producten te vinden en conversie verhogen met persoonlijke aanbevelingen 24/7.",
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
          "name": "Glimps - Intelligente chatbots voor e-commerce",
          "url": "https://www.glimps.be",
          "description": "AI chatbots voor je webshop. Begeleid bezoekers 24/7, verhoog conversie en automatiseer klantenservice met intelligente AI.",
          "publisher": {
            "@id": "https://www.glimps.be#organization"
          },
          "inLanguage": "nl-BE"
        },
        {
          "@type": "SoftwareApplication",
          "name": "Glimps - Intelligente chatbots voor e-commerce",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web",
          "description": "Intelligente chatbots voor e-commerce die bezoekers helpen de perfecte producten te vinden en conversie verhoogt met persoonlijke aanbevelingen en automatische klantenservice 24/7.",
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
    }
  };

  const graphData = getStructuredData();

  return (
    <div className="min-h-screen bg-background" style={{ zoom: '0.8' }}>
      <SEO
        title={t('seo.home.title')}
        description={t('seo.home.description')}
        path={language === 'fr' ? '/fr' : language === 'en' ? '/en' : '/'}
        canonical={language === 'fr' ? 'https://www.glimps.be/fr' : language === 'en' ? 'https://www.glimps.be/en' : 'https://www.glimps.be'}
        keywords={
          language === 'fr'
            ? 'chatbots intelligents e-commerce, chatbot e-commerce, chatbot IA boutique en ligne, chatbot e-commerce Belgique'
            : language === 'en'
            ? 'intelligent chatbots for e-commerce, chatbot e-commerce, AI chatbot online store, e-commerce chatbot Belgium'
            : 'intelligente chatbots voor e-commerce, chatbot e-commerce, AI chatbot webshop, e-commerce chatbot België'
        }
        type="website"
        language={language}
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
