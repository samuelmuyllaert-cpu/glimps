import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getTranslation } from '@/i18n/translations';

type Language = 'nl' | 'fr';

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
  const initialLang = location.pathname.startsWith('/fr') ? 'fr' : 'nl';
  const [language, setLanguageState] = useState<Language>(initialLang);

  useEffect(() => {
    const pathLang = location.pathname.startsWith('/fr') ? 'fr' : 'nl';
    setLanguageState(pathLang);
  }, [location.pathname]);

  const setLanguage = (lang: Language) => {
    const currentPath = location.pathname;
    let newPath: string;

    // Route mapping between NL and FR
    const routeMapping: Record<string, string> = {
      '/features': '/fr/fonctionnalites',
      '/how-we-work': '/fr/comment-nous-travaillons',
      '/about': '/fr/a-propos',
      '/demo': '/fr/demo',
      '/contact': '/fr/contact',
      '/faq': '/fr/faq',
      '/blog': '/fr/blog',
      '/legal': '/fr/legal',
      '/partners': '/fr/partenaires',
      '/career': '/fr/carrieres',
      '/consultancy': '/fr/consultance',
      '/changelog': '/fr/changelog',
      '/login': '/fr/connexion',
      '/integraties': '/fr/integrations',
      '/ecom-agents': '/fr/agents-ecom',
      '/ecom-readiness': '/fr/pret-ecom',
      '/roi': '/fr/roi',
      '/lensonline': '/fr/lensonline',
      '/prosportlights': '/fr/prosportlights',
      '/industries/fashion-design': '/fr/industries/mode-design',
      '/industries/electronics': '/fr/industries/electronique',
      '/industries/beauty-cosmetica': '/fr/industries/beaute-cosmetique',
      '/industries/meubels-interieur': '/fr/industries/meubles-interieur',
      '/industries/sportkleding-fitness': '/fr/industries/vetements-sport-fitness',
      '/industries/tuin-buitenleven': '/fr/industries/jardin-exterieur',
      '/blog/ai-chatbots-automatiseren': '/fr/blog/automatiser-chatbots-ia',
      '/blog/ai-chatbots-implementeren': '/fr/blog/implementer-chatbots-ia',
      '/blog/ai-chatbots-vs-klantenservice': '/fr/blog/chatbots-ia-vs-service-client',
      '/blog/amazon-rufus': '/fr/blog/amazon-rufus',
      '/blog/cart-abandonment-reduceren-chatbot': '/fr/blog/reduire-abandon-panier-chatbot',
      '/blog/case-study-fashionhub': '/fr/blog/etude-cas-fashionhub',
      '/blog/chatbots-boosten-verkoop': '/fr/blog/chatbots-booster-ventes',
      '/blog/chatbots-vs-live-chat': '/fr/blog/chatbots-vs-chat-en-direct',
      '/blog/conversational-commerce-trends': '/fr/blog/tendances-commerce-conversationnel',
      '/blog/conversie-verhogen': '/fr/blog/augmenter-conversion',
      '/blog/fouten-chatbots': '/fr/blog/erreurs-chatbots',
      '/blog/personalisatie-ai-ecommerce': '/fr/blog/personnalisation-ia-ecommerce',
      '/blog/personalisatie-conversies': '/fr/blog/personnalisation-conversions',
      '/blog/roi-ai-chatbots': '/fr/blog/roi-chatbots-ia',
      '/blog/shopify-integratie': '/fr/blog/integration-shopify',
      '/blog/toekomst-ai-2025': '/fr/blog/avenir-ia-2025',
      '/blog/toekomst-ai-ecommerce-2026': '/fr/blog/avenir-ia-ecommerce-2026',
    };

    // Reverse mapping for FR to NL
    const reverseMapping: Record<string, string> = Object.fromEntries(
      Object.entries(routeMapping).map(([nl, fr]) => [fr, nl])
    );

    if (lang === 'fr') {
      if (currentPath.startsWith('/fr')) {
        newPath = currentPath;
      } else if (currentPath === '/') {
        newPath = '/fr';
      } else {
        newPath = routeMapping[currentPath] || `/fr${currentPath}`;
      }
    } else {
      if (currentPath.startsWith('/fr')) {
        newPath = reverseMapping[currentPath] || currentPath.replace(/^\/fr/, '') || '/';
      } else {
        newPath = currentPath;
      }
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
