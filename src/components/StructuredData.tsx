import { Helmet } from 'react-helmet-async';

interface OrganizationData {
  name?: string;
  url?: string;
  logo?: string;
}

interface BlogData {
  headline: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface StructuredDataProps {
  type: 'organization' | 'website' | 'software' | 'blog' | 'faq';
  data?: OrganizationData | BlogData | FAQItem[] | any;
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
  const generateSchema = () => {
    const baseUrl = 'https://glimps.be';
    
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Glimps",
          "url": baseUrl,
          "logo": `${baseUrl}/favicon.png`,
          "description": "AI Chatbot voor E-commerce - Verhoog conversie met persoonlijke aanbevelingen 24/7",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Gent",
            "addressCountry": "BE"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Service",
            "email": "info@glimps.be",
            "availableLanguage": ["nl", "en"]
          },
          "founder": [
            {
              "@type": "Person",
              "name": "Samuel Muyllaert"
            },
            {
              "@type": "Person",
              "name": "Tom Muyllaert"
            }
          ],
          "sameAs": [
            "https://www.linkedin.com/company/glimps-ai"
          ]
        };

      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Glimps",
          "url": baseUrl,
          "description": "Slimme AI chatbot die je webshop bezoekers begeleidt naar de perfecte producten",
          "publisher": {
            "@type": "Organization",
            "name": "Glimps"
          },
          "inLanguage": "nl-BE"
        };

      case 'software':
        return {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Glimps AI Chatbot",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web-based",
          "description": "AI-powered chatbot voor e-commerce die klanten begeleidt en conversie verhoogt",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "EUR",
            "description": "Gratis proefperiode beschikbaar"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "50",
            "bestRating": "5",
            "worstRating": "1"
          }
        };

      case 'blog':
        const blogData = data as BlogData;
        return {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": blogData.headline,
          "author": {
            "@type": "Person",
            "name": blogData.author
          },
          "datePublished": blogData.datePublished,
          "dateModified": blogData.dateModified || blogData.datePublished,
          "publisher": {
            "@type": "Organization",
            "name": "Glimps",
            "logo": {
              "@type": "ImageObject",
              "url": `${baseUrl}/favicon.png`
            }
          },
          "image": blogData.image || `${baseUrl}/favicon.png`,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": baseUrl
          },
          "inLanguage": "nl-BE"
        };

      case 'faq':
        const faqItems = data as FAQItem[];
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqItems.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": item.answer
            }
          }))
        };

      default:
        return null;
    }
  };

  const schema = generateSchema();

  if (!schema) return null;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
