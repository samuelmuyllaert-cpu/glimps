import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getTranslation } from '@/i18n/translations';

type Language = 'nl' | 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Initialize language based on current path (works for SSR)
  const getLanguageFromPath = (pathname: string): Language => {
    if (pathname.startsWith('/fr')) return 'fr';
    if (pathname.startsWith('/en')) return 'en';
    return 'nl';
  };

  const initialLang = getLanguageFromPath(location.pathname);
  const [language, setLanguageState] = useState<Language>(initialLang);

  useEffect(() => {
    const pathLang = getLanguageFromPath(location.pathname);
    setLanguageState(pathLang);
  }, [location.pathname]);

  const setLanguage = (lang: Language) => {
    const currentPath = location.pathname;
    let newPath: string;

    // Base routes (NL -> EN/FR mapping)
    const nlToFr: Record<string, string> = {
      '/features': '/fonctionnalites',
      '/how-we-work': '/comment-nous-travaillons',
      '/about': '/a-propos',
      '/partners': '/partenaires',
      '/career': '/carrieres',
      '/consultancy': '/consultance',
      '/login': '/connexion',
      '/integraties': '/integrations',
      '/ecom-agents': '/agents-ecom',
      '/ecom-readiness': '/pret-ecom',
      '/industries/fashion-design': '/industries/mode-design',
      '/industries/electronics': '/industries/electronique',
      '/industries/beauty-cosmetica': '/industries/beaute-cosmetique',
      '/industries/meubels-interieur': '/industries/meubles-interieur',
      '/industries/sportkleding-fitness': '/industries/vetements-sport-fitness',
      '/industries/tuin-buitenleven': '/industries/jardin-exterieur',
      '/blog/ai-chatbots-automatiseren': '/blog/automatiser-chatbots-ia',
      '/blog/ai-chatbots-implementeren': '/blog/implementer-chatbots-ia',
      '/blog/ai-chatbots-vs-klantenservice': '/blog/chatbots-ia-vs-service-client',
      '/blog/cart-abandonment-reduceren-chatbot': '/blog/reduire-abandon-panier-chatbot',
      '/blog/case-study-fashionhub': '/blog/etude-cas-fashionhub',
      '/blog/chatbots-boosten-verkoop': '/blog/chatbots-booster-ventes',
      '/blog/chatbots-vs-live-chat': '/blog/chatbots-vs-chat-en-direct',
      '/blog/conversational-commerce-trends': '/blog/tendances-commerce-conversationnel',
      '/blog/conversie-verhogen': '/blog/augmenter-conversion',
      '/blog/fouten-chatbots': '/blog/erreurs-chatbots',
      '/blog/personalisatie-ai-ecommerce': '/blog/personnalisation-ia-ecommerce',
      '/blog/personalisatie-conversies': '/blog/personnalisation-conversions',
      '/blog/roi-ai-chatbots': '/blog/roi-chatbots-ia',
      '/blog/shopify-integratie': '/blog/integration-shopify',
      '/blog/toekomst-ai-2025': '/blog/avenir-ia-2025',
      '/blog/toekomst-ai-ecommerce-2026': '/blog/avenir-ia-ecommerce-2026',
    };

    const nlToEn: Record<string, string> = {
      '/features': '/features',
      '/how-we-work': '/how-we-work',
      '/about': '/about',
      '/partners': '/partners',
      '/career': '/career',
      '/consultancy': '/consultancy',
      '/login': '/login',
      '/integraties': '/integrations',
      '/ecom-agents': '/ecom-agents',
      '/ecom-readiness': '/ecom-readiness',
      '/demo': '/demo',
      '/contact': '/contact',
      '/faq': '/faq',
      '/blog': '/blog',
      '/legal': '/legal',
      '/changelog': '/changelog',
      '/roi': '/roi',
      '/lensonline': '/lensonline',
      '/prosportlights': '/prosportlights',
      '/industries/fashion-design': '/industries/fashion-design',
      '/industries/electronics': '/industries/electronics',
      '/industries/beauty-cosmetica': '/industries/beauty-cosmetics',
      '/industries/meubels-interieur': '/industries/furniture-interior',
      '/industries/sportkleding-fitness': '/industries/sportswear-fitness',
      '/industries/tuin-buitenleven': '/industries/garden-outdoor',
      '/blog/ai-chatbots-automatiseren': '/blog/automate-ai-chatbots',
      '/blog/ai-chatbots-implementeren': '/blog/implement-ai-chatbots',
      '/blog/ai-chatbots-vs-klantenservice': '/blog/ai-chatbots-vs-customer-service',
      '/blog/amazon-rufus': '/blog/amazon-rufus',
      '/blog/cart-abandonment-reduceren-chatbot': '/blog/reduce-cart-abandonment-chatbot',
      '/blog/case-study-fashionhub': '/blog/case-study-fashionhub',
      '/blog/chatbots-boosten-verkoop': '/blog/chatbots-boost-sales',
      '/blog/chatbots-vs-live-chat': '/blog/chatbots-vs-live-chat',
      '/blog/conversational-commerce-trends': '/blog/conversational-commerce-trends',
      '/blog/conversie-verhogen': '/blog/increase-conversion',
      '/blog/fouten-chatbots': '/blog/chatbot-mistakes',
      '/blog/personalisatie-ai-ecommerce': '/blog/ai-personalization-ecommerce',
      '/blog/personalisatie-conversies': '/blog/personalization-conversions',
      '/blog/roi-ai-chatbots': '/blog/roi-ai-chatbots',
      '/blog/shopify-integratie': '/blog/shopify-integration',
      '/blog/toekomst-ai-2025': '/blog/future-ai-2025',
      '/blog/toekomst-ai-ecommerce-2026': '/blog/future-ai-ecommerce-2026',
    };

    // Helper to remove language prefix
    const removePrefix = (path: string): string => {
      return path.replace(/^\/(fr|en)/, '') || '/';
    };

    // Get base path (without language prefix)
    const basePath = removePrefix(currentPath);

    // Build new path based on target language
    if (lang === 'nl') {
      newPath = basePath;
    } else if (lang === 'fr') {
      const mappedPath = nlToFr[basePath] || basePath;
      newPath = `/fr${mappedPath}`;
    } else if (lang === 'en') {
      const mappedPath = nlToEn[basePath] || basePath;
      newPath = `/en${mappedPath}`;
    } else {
      newPath = currentPath;
    }

    navigate(newPath);
  };

  const t = (key: string) => {
    return getTranslation(language, key);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
