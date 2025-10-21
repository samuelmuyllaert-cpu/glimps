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

interface ServiceData {
  name: string;
  description: string;
  provider?: string;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface StructuredDataProps {
  type: 'organization' | 'website' | 'software' | 'blog' | 'faq' | 'service' | 'breadcrumb' | 'webpage' | 'aboutpage' | 'contactpage';
  data?: OrganizationData | BlogData | FAQItem[] | ServiceData | BreadcrumbItem[] | any;
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
  const generateSchema = () => {
    const baseUrl = 'https://www.glimps.be';
    
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

      case 'service':
        const serviceData = data as ServiceData;
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": serviceData.name,
          "description": serviceData.description,
          "provider": {
            "@type": "Organization",
            "name": serviceData.provider || "Glimps",
            "url": baseUrl
          },
          "areaServed": {
            "@type": "Country",
            "name": "Belgium"
          },
          "serviceType": "AI Chatbot",
          "category": "E-commerce Software"
        };

      case 'breadcrumb':
        const breadcrumbs = data as BreadcrumbItem[];
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": breadcrumbs.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": `${baseUrl}${item.url}`
          }))
        };

      case 'webpage':
        return {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": data?.name || "Glimps AI",
          "description": data?.description || "AI Chatbot voor E-commerce",
          "url": data?.url || baseUrl,
          "inLanguage": "nl-BE",
          "isPartOf": {
            "@type": "WebSite",
            "name": "Glimps",
            "url": baseUrl
          },
          "about": {
            "@type": "Thing",
            "name": "AI Chatbot for E-commerce"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Glimps"
          }
        };

      case 'aboutpage':
        return {
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "Over Glimps AI",
          "description": "Ontmoet het team achter Glimps AI - Marketing-gedreven AI chatbot voor e-commerce",
          "url": `${baseUrl}/about`,
          "inLanguage": "nl-BE",
          "mainEntity": {
            "@type": "Organization",
            "name": "Glimps",
            "url": baseUrl,
            "founder": [
              {
                "@type": "Person",
                "name": "Samuel Muyllaert",
                "jobTitle": "Co-Founder"
              },
              {
                "@type": "Person",
                "name": "Tom Muyllaert",
                "jobTitle": "Co-Founder"
              }
            ]
          }
        };

      case 'contactpage':
        return {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Glimps AI",
          "description": "Neem contact op met Glimps AI voor vragen of een demo",
          "url": `${baseUrl}/contact`,
          "inLanguage": "nl-BE",
          "mainEntity": {
            "@type": "Organization",
            "name": "Glimps",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Customer Service",
              "email": "info@glimps.be",
              "availableLanguage": ["nl", "en"]
            }
          }
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
