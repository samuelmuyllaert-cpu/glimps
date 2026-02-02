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
      overline: 'AI-Aangedreven Klantenondersteuning',
      title: 'Intelligente\nchatbots voor\ne-commerce',
      description: 'Onze intelligente chatbots beantwoorden vragen over producten, verzending en bestellingen\nautomatisch - ook buiten kantooruren. Verhoog je conversie met AI.',
      cta: 'Gratis aan de slag',
      ctaSecondary: 'Zie glimps in actie'
    },
    seo: {
      home: {
        title: 'Intelligente chatbots voor e-commerce | Glimps',
        description: 'AI chatbots voor je webshop. Begeleid bezoekers 24/7, verhoog conversie en automatiseer klantenservice met intelligente AI.'
      },
      features: {
        title: 'Features - Glimps AI Chatbot',
        description: 'Ontdek alle features van Glimps AI: 24/7 beschikbaarheid, intelligente productaanbevelingen en naadloze integraties.'
      },
      demo: {
        title: 'Demo aanvragen - Glimps',
        description: 'Vraag een gratis demo aan en ontdek hoe Glimps AI jouw e-commerce conversie verhoogt.'
      },
      about: {
        title: 'Over Ons - Glimps',
        description: 'Leer meer over Glimps en ons team. We bouwen intelligente AI-chatbots voor e-commerce.'
      },
      contact: {
        title: 'Contact - Glimps',
        description: 'Neem contact met ons op. We helpen je graag met jouw vragen over Glimps AI.'
      }
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
      overline: 'Support Client Propulsé par IA',
      title: 'Chatbots intelligents\npour l\'e-commerce',
      description: 'Nos chatbots intelligents répondent automatiquement aux questions sur les produits, la livraison et les commandes\n- même en dehors des heures de bureau. Augmentez votre conversion avec l\'IA.',
      cta: 'Commencer gratuitement',
      ctaSecondary: 'Voir glimps en action'
    },
    seo: {
      home: {
        title: 'Chatbots intelligents pour l\'e-commerce | Glimps',
        description: 'Chatbots IA pour votre boutique en ligne. Guidez les visiteurs 24/7, augmentez la conversion et automatisez le service client avec l\'IA intelligente.'
      },
      features: {
        title: 'Fonctionnalités - Glimps AI Chatbot',
        description: 'Découvrez toutes les fonctionnalités de Glimps AI : disponibilité 24/7, recommandations de produits intelligentes et intégrations transparentes.'
      },
      demo: {
        title: 'Demander une démo - Glimps',
        description: 'Demandez une démo gratuite et découvrez comment Glimps AI augmente votre conversion e-commerce.'
      },
      about: {
        title: 'À propos - Glimps',
        description: 'En savoir plus sur Glimps et notre équipe. Nous développons des chatbots IA intelligents pour l\'e-commerce.'
      },
      contact: {
        title: 'Contact - Glimps',
        description: 'Contactez-nous. Nous sommes heureux de répondre à vos questions sur Glimps AI.'
      }
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
