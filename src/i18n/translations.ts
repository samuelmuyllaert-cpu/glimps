export const translations = {
  nl: {
    nav: {
      features: 'Features',
      demo: 'Demo',
      pricing: 'Prijzen',
      blog: 'Blog',
      contact: 'Contact',
      login: 'Inloggen'
    },
    hero: {
      title: 'De AI Chatbot voor',
      subtitle: 'E-commerce',
      description: 'Verhoog je conversie met 24/7 gepersonaliseerde productaanbevelingen en klantenservice',
      cta: 'Gratis Demo',
      ctaSecondary: 'Bekijk Features'
    },
    features: {
      title: 'Waarom Glimps AI?',
      subtitle: 'Alles wat je nodig hebt voor betere conversie',
      feature1Title: '24/7 Beschikbaar',
      feature1Description: 'Geen verlofdagen, geen pauzes. Altijd klaar om je klanten te helpen',
      feature2Title: 'Intelligente Aanbevelingen',
      feature2Description: 'Begrijpt context en doet gepersonaliseerde productvoorstellen',
      feature3Title: 'Naadloze Integratie',
      feature3Description: 'Integreert moeiteloos met je bestaande e-commerce platform'
    },
    footer: {
      product: 'Product',
      company: 'Bedrijf',
      resources: 'Resources',
      legal: 'Juridisch',
      allRightsReserved: 'Alle rechten voorbehouden'
    },
    common: {
      readMore: 'Lees meer',
      learnMore: 'Meer informatie',
      getStarted: 'Aan de slag',
      contactUs: 'Neem contact op'
    }
  },
  fr: {
    nav: {
      features: 'Fonctionnalités',
      demo: 'Démo',
      pricing: 'Tarifs',
      blog: 'Blog',
      contact: 'Contact',
      login: 'Connexion'
    },
    hero: {
      title: 'Le Chatbot IA pour',
      subtitle: 'E-commerce',
      description: 'Augmentez votre conversion avec des recommandations de produits personnalisées et un service client 24/7',
      cta: 'Démo Gratuite',
      ctaSecondary: 'Voir les Fonctionnalités'
    },
    features: {
      title: 'Pourquoi Glimps AI?',
      subtitle: 'Tout ce dont vous avez besoin pour une meilleure conversion',
      feature1Title: 'Disponible 24/7',
      feature1Description: 'Pas de congés, pas de pauses. Toujours prêt à aider vos clients',
      feature2Title: 'Recommandations Intelligentes',
      feature2Description: 'Comprend le contexte et fait des suggestions de produits personnalisées',
      feature3Title: 'Intégration Transparente',
      feature3Description: "S'intègre facilement avec votre plateforme e-commerce existante"
    },
    footer: {
      product: 'Produit',
      company: 'Entreprise',
      resources: 'Ressources',
      legal: 'Juridique',
      allRightsReserved: 'Tous droits réservés'
    },
    common: {
      readMore: 'En savoir plus',
      learnMore: 'Plus d\'informations',
      getStarted: 'Commencer',
      contactUs: 'Nous contacter'
    }
  }
};

export type TranslationKey = string;
export type Language = keyof typeof translations;

export const getTranslation = (lang: Language, key: string): string => {
  const keys = key.split('.');
  let value: any = translations[lang];

  for (const k of keys) {
    if (value && typeof value === 'object') {
      value = value[k];
    } else {
      return key;
    }
  }

  return typeof value === 'string' ? value : key;
};
