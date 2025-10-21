import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQComponent from "@/components/FAQ";
import SEO from "@/components/SEO";
import StructuredData, { baseOrganization } from "@/components/StructuredData";

const FAQ = () => {
  const faqData = [
    {
      question: "Wat kost Glimps?",
      answer: "Glimps biedt verschillende prijsplannen aan, afgestemd op de grootte van je webshop. We hebben een gratis proefperiode beschikbaar."
    },
    {
      question: "Hoe snel kan ik Glimps implementeren?",
      answer: "De implementatie van Glimps is eenvoudig en kan binnen enkele minuten klaar zijn. Je hoeft alleen een code snippet toe te voegen aan je website."
    },
    {
      question: "Welke e-commerce platformen worden ondersteund?",
      answer: "Glimps werkt met alle grote e-commerce platforms zoals Shopify, WooCommerce, Magento, PrestaShop en meer."
    },
    {
      question: "Kan Glimps in meerdere talen werken?",
      answer: "Ja, Glimps ondersteunt meerdere talen en past zich automatisch aan de taal van je webshop aan."
    },
    {
      question: "Hoe leert de AI over mijn producten?",
      answer: "Glimps integreert direct met je productcatalogus en leert automatisch over je producten, voorraad en kenmerken."
    }
  ];

  const graphData = [
    {
      "@type": "WebPage",
      "@id": "https://www.glimps.be/faq",
      "url": "https://www.glimps.be/faq",
      "name": "Veelgestelde Vragen - Glimps AI",
      "description": "Vind antwoorden op veelgestelde vragen over Glimps AI chatbot. Van prijzen en integraties tot functies en implementatie.",
      "inLanguage": "nl-BE",
      "isPartOf": {
        "@id": "https://www.glimps.be#website"
      },
      "publisher": {
        "@id": "https://www.glimps.be#organization"
      },
      "mainEntity": {
        "@type": "FAQPage",
        "mainEntity": faqData.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      }
    },
    baseOrganization,
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.glimps.be/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "FAQ",
          "item": "https://www.glimps.be/faq"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Veelgestelde Vragen - Glimps AI | Alle antwoorden op één plek"
        description="Vind antwoorden op veelgestelde vragen over Glimps AI chatbot. Van prijzen en integraties tot functies en implementatie."
        path="/faq"
        canonical="https://www.glimps.be/faq"
        keywords="FAQ, veelgestelde vragen, Glimps AI, chatbot vragen, prijzen, implementatie"
        type="website"
      />
      <StructuredData type="graph" data={graphData} />
      <Navigation />
      <FAQComponent />
      <Footer />
    </div>
  );
};

export default FAQ;
