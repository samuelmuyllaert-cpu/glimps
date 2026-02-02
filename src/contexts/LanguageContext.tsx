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
  const [language, setLanguageState] = useState<Language>('nl');

  useEffect(() => {
    const pathLang = location.pathname.startsWith('/fr') ? 'fr' : 'nl';
    setLanguageState(pathLang);
  }, [location.pathname]);

  const setLanguage = (lang: Language) => {
    const currentPath = location.pathname;
    let newPath: string;

    if (lang === 'fr') {
      if (currentPath.startsWith('/fr')) {
        newPath = currentPath;
      } else if (currentPath === '/') {
        newPath = '/fr';
      } else {
        newPath = `/fr${currentPath}`;
      }
    } else {
      if (currentPath.startsWith('/fr')) {
        newPath = currentPath.replace(/^\/fr/, '') || '/';
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
