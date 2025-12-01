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
  serviceType?: string[];
  offers?: Array<{
    name: string;
    description: string;
  }>;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface ReviewData {
  reviewBody: string;
  author: string;
  authorOrganization?: string;
  ratingValue: string;
  itemReviewed: string;
}

interface StructuredDataProps {
  type: 'organization' | 'website' | 'software' | 'blog' | 'faq' | 'service' | 'breadcrumb' | 'webpage' | 'aboutpage' | 'contactpage' | 'graph' | 'review';
  data?: OrganizationData | BlogData | FAQItem[] | ServiceData | BreadcrumbItem[] | ReviewData | any;
}

export const baseOrganization = {
  "@type": "Organization",
  "@id": "https://www.glimps.be/#organization",
  "name": "Glimps",
  "url": "https://www.glimps.be",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.glimps.be/favicon.png",
    "width": 512,
    "height": 512
  },
  "image": "https://www.glimps.be/favicon.png",
  "email": "info@glimps.be",
  "telephone": "+32 50 45 45 45",
  "sameAs": [
    "https://www.linkedin.com/company/glimps",
    "https://www.facebook.com/glimps",
    "https://www.instagram.com/glimps"
  ],
  "foundingDate": "2023",
  "description": "Glimps is een Belgische AI chatbot specialist voor e-commerce. Wij helpen webshops hun conversie verhogen met slimme, persoonlijke productaanbevelingen en 24/7 klantenservice.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Smedenstraat 38",
    "addressLocality": "Brugge",
    "postalCode": "8000",
    "addressCountry": "BE"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+32 50 45 45 45",
    "email": "info@glimps.be",
    "contactType": "customer service",
    "areaServed": "BE",
    "availableLanguage": ["nl", "en", "fr"]
  },
  "founder": [
    {
      "@type": "Person",
      "name": "Samuel Muyllaert",
      "jobTitle": "Co-Founder & CEO"
    },
    {
      "@type": "Person",
      "name": "Tom Muyllaert",
      "jobTitle": "Co-Founder & CTO"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "50",
    "bestRating": "5",
    "worstRating": "1"
  }
};

const StructuredData = ({ type, data }: StructuredDataProps) => {
  const generateSchema = () => {
    const baseUrl = 'https://www.glimps.be';
    
    switch (type) {
      case 'graph':
        // For @graph structure, data should be the complete graph array
        return {
          "@context": "https://schema.org",
          "@graph": data
        };

      case 'organization':
        return {
          "@context": "https://schema.org",
          ...baseOrganization
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
            "@id": "https://www.glimps.be/#organization"
          },
          "areaServed": {
            "@type": "Country",
            "name": "België"
          },
          "serviceType": serviceData.serviceType || ["AI Chatbot", "E-commerce Solutions", "Customer Service Automation"],
          "url": "https://www.glimps.be",
          "category": "Software",
          ...(serviceData.offers && {
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": serviceData.name,
              "itemListElement": serviceData.offers.map(offer => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": offer.name,
                  "description": offer.description
                }
              }))
            }
          })
        };

      case 'review':
        const reviewData = data as ReviewData;
        return {
          "@context": "https://schema.org",
          "@type": "Review",
          "reviewBody": reviewData.reviewBody,
          "author": {
            "@type": "Person",
            "name": reviewData.author,
            ...(reviewData.authorOrganization && {
              "affiliation": {
                "@type": "Organization",
                "name": reviewData.authorOrganization
              }
            })
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": reviewData.ratingValue,
            "bestRating": "5"
          },
          "itemReviewed": {
            "@id": reviewData.itemReviewed
          }
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
