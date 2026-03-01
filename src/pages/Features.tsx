import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StructuredData, { baseOrganization } from "@/components/StructuredData";
import { Check, Bot, RefreshCw, Package, RotateCcw, Users, MessageSquare, Code, ShoppingCart, Inbox, TrendingUp, Layers, Search, Zap, Star, Mic, Globe, Layout, AlertCircle, ChevronRight, Send } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import productSneakerBlue from "@/assets/product-sneaker-blue.png";
import productJacketRed from "@/assets/product-jacket-red.png";
import productTshirtBlack from "@/assets/product-tshirt-black.png";
import productHoodieGray from "@/assets/product-hoodie-gray.png";
import productBackpackBrown from "@/assets/product-backpack-brown.png";
import productHeadphonesWhite from "@/assets/product-headphones-white.png";
import productWatchSilver from "@/assets/product-watch-silver.png";
import productJeansBlue from "@/assets/product-jeans-blue.png";
import productCapGreen from "@/assets/product-cap-green.png";
import productSunglassesPink from "@/assets/product-sunglasses-pink.png";
import productSneakerYellow from "@/assets/product-sneaker-yellow.png";
import productYogamatPurple from "@/assets/product-yogamat-purple.png";
import productTotebagBeige from "@/assets/product-totebag-beige.png";
import productWalletBlack from "@/assets/product-wallet-black.png";
import productSneakerWhite from "@/assets/product-sneaker-white.png";

const Features = () => {
  const { language } = useLanguage();
  const features = [
    {
      icon: Bot,
      badge: language === 'en' ? "CHECKOUT BOT" : language === 'en'
          ? "BOT DE PAIEMENT"
          : language === 'fr'
          ? "BOT DE PAIEMENT"
          : "CHECKOUT BOT",
      title: language === 'en' ? "Guide customers to a successful purchase" : language === 'en'
          ? "Guidez les clients vers un achat reussi"
          : language === 'fr'
          ? "Guidez les clients vers un achat réussi"
          : "Begeleid klanten naar een succesvolle aankoop",
      description: language === 'en' ? "Our checkout bot helps customers through the order process with smart suggestions, direct product information and seamless handling. Increase your conversion by up to 40%." : language === 'en'
          ? "Notre bot de paiement aide les clients tout au long du processus de commande avec des suggestions intelligentes, des informations produits directes et une gestion fluide. Augmentez votre conversion jusqu'à 40%."
          : language === 'fr'
          ? "Notre bot de paiement aide les clients tout au long du processus de commande avec des suggestions intelligentes, des informations produits directes et une gestion fluide. Augmentez votre conversion jusqu'à 40%."
          : "Onze checkout bot helpt klanten door het bestelproces met slimme suggesties, directe productinformatie en een naadloze afhandeling. Verhoog je conversie met tot 40%.",
      benefits: language === 'en' ? [
        "Place order directly via chat",
        "Automatic upselling and bundle suggestions",
        "Live stock and delivery times"
      ] : language === 'fr' ? [
        "Passer commande directement via le chat",
        "Suggestions de vente incitative et de bundles automatiques",
        "Stock et délais de livraison en temps réel"
      ] : [
        "Direct bestelling plaatsen via chat",
        "Automatische upselling en bundel suggesties",
        "Live voorraad en leveringstijden"
      ],
      mockupType: "checkout"
    },
    {
      icon: ShoppingCart,
      badge: language === 'en' ? "SHOPPING CART CONTEXT" : language === 'en'
          ? "CONTEXTE DU PANIER"
          : language === 'fr'
          ? "CONTEXTE DU PANIER"
          : "WINKELMANDJE CONTEXT",
      title: language === 'en' ? "The bot knows exactly what's in the shopping cart" : language === 'en'
          ? "Le bot sait exactement ce qui se trouve dans le panier"
          : language === 'fr'
          ? "Le bot sait exactement ce qui se trouve dans le panier"
          : "De bot weet precies wat er in het winkelmandje zit",
      description: language === 'en' ? "Our chatbot has real-time access to the shopping cart content and can guide customers with targeted suggestions, discounts and product information based on their current selection." : language === 'en'
          ? "Notre chatbot a un acces en temps reel au contenu du panier et peut guider les clients avec des suggestions ciblees, des reductions et des informations produits basees sur leur selection actuelle."
          : language === 'fr'
          ? "Notre chatbot a un accès en temps réel au contenu du panier et peut guider les clients avec des suggestions ciblées, des réductions et des informations produits basées sur leur sélection actuelle."
          : "Onze chatbot heeft realtime toegang tot de winkelmandje inhoud en kan klanten begeleiden met gerichte suggesties, kortingen en productinformatie op basis van hun huidige selectie.",
      benefits: language === 'en' ? [
        "Real-time synchronization with shopping cart",
        "Smart suggestions based on cart content",
        "Direct checkout from chat possible"
      ] : language === 'fr' ? [
        "Synchronisation en temps réel avec le panier",
        "Suggestions intelligentes basées sur le contenu du panier",
        "Paiement direct depuis le chat possible"
      ] : [
        "Realtime synchronisatie met winkelmandje",
        "Slimme suggesties gebaseerd op mandje inhoud",
        "Directe checkout vanuit chat mogelijk"
      ],
      mockupType: "cart-context"
    },
    {
      icon: RefreshCw,
      badge: language === 'en' ? "CHECKOUT INTERVENTION" : language === 'en'
          ? "INTERVENTION PAIEMENT"
          : language === 'fr'
          ? "INTERVENTION PAIEMENT"
          : "CHECKOUT INTERVENTIE",
      title: language === 'en' ? "Intervene directly when customers leave checkout" : language === 'en'
          ? "Intervenez directement lorsque les clients quittent le paiement"
          : language === 'fr'
          ? "Intervenez directement lorsque les clients quittent le paiement"
          : "Grijp direct in wanneer klanten de checkout verlaten",
      description: language === 'en' ? "The chatbot detects when a customer leaves the checkout page and automatically opens to help. No discount needed - just the right help at the right time. Resolve objections, answer questions and still guide customers to a successful purchase." : language === 'en'
          ? "Le chatbot detecte quand un client quitte la page de paiement et s'ouvre automatiquement pour l'aider. Pas besoin de reduction - juste la bonne aide au bon moment. Resolvez les objections, repondez aux questions et guidez les clients vers un achat reussi."
          : language === 'fr'
          ? "Le chatbot détecte quand un client quitte la page de paiement et s'ouvre automatiquement pour l'aider. Pas besoin de réduction - juste la bonne aide au bon moment. Résolvez les objections, répondez aux questions et guidez les clients vers un achat réussi."
          : "De chatbot detecteert wanneer een klant de checkout pagina verlaat en springt automatisch open om te helpen. Geen korting nodig - gewoon het juiste hulp op het juiste moment. Los bezwaren op, beantwoord vragen en begeleid klanten alsnog naar een succesvolle aankoop.",
      benefits: language === 'en' ? [
        "Real-time detection of checkout abandonment",
        "Proactive help before the customer really leaves",
        "Identify and resolve objections directly"
      ] : language === 'fr' ? [
        "Détection en temps réel de l'abandon de paiement",
        "Aide proactive avant que le client ne parte vraiment",
        "Identifiez et résolvez les objections directement"
      ] : [
        "Real-time detectie van checkout-verlating",
        "Proactieve hulp voordat de klant echt weg is",
        "Identificeer én los bezwaren direct op"
      ],
      mockupType: "cart-recovery"
    },
    {
      icon: Search,
      badge: language === 'en' ? "SMART PRODUCT SEARCH" : language === 'en'
          ? "RECHERCHE PRODUIT INTELLIGENTE"
          : language === 'fr'
          ? "RECHERCHE PRODUIT INTELLIGENTE"
          : "SLIMME PRODUCT ZOEKER",
      title: language === 'en' ? "AI automatically searches for the perfect products" : language === 'en'
          ? "L'IA recherche automatiquement les produits parfaits"
          : language === 'fr'
          ? "L'IA recherche automatiquement les produits parfaits"
          : "AI zoekt automatisch de perfecte producten",
      description: language === 'en' ? "The chatbot intelligently searches your complete product database and finds exactly what customers are looking for based on color, size, price, category and availability. Use natural language, no search filters needed." : language === 'en'
          ? "Le chatbot parcourt intelligemment votre base de donnees produits complete et trouve exactement ce que les clients recherchent en fonction de la couleur, de la taille, du prix, de la categorie et de la disponibilite. Utilisez le langage naturel, aucun filtre de recherche necessaire."
          : language === 'fr'
          ? "Le chatbot parcourt intelligemment votre base de données produits complète et trouve exactement ce que les clients recherchent en fonction de la couleur, de la taille, du prix, de la catégorie et de la disponibilité. Utilisez le langage naturel, aucun filtre de recherche nécessaire."
          : "De chatbot doorzoekt intelligent je volledige productdatabase en vindt precies wat klanten zoeken op basis van kleur, maat, prijs, categorie en beschikbaarheid. Gebruik natuurlijke taal, geen zoekfilters nodig.",
      benefits: language === 'en' ? [
        "Semantic searches in natural language",
        "Filter by size, color, price and stock",
        "Real-time synchronization with product catalog"
      ] : language === 'fr' ? [
        "Recherches sémantiques en langage naturel",
        "Filtrer par taille, couleur, prix et stock",
        "Synchronisation en temps réel avec le catalogue produits"
      ] : [
        "Semantische zoekopdrachten in natuurlijke taal",
        "Filter op maat, kleur, prijs en voorraad",
        "Realtime synchronisatie met productcatalogus"
      ],
      mockupType: "product-search"
    },
    {
      icon: Layout,
      badge: language === 'en' ? "PRODUCT CAROUSEL" : language === 'en'
          ? "CARROUSEL PRODUITS"
          : language === 'fr'
          ? "CARROUSEL PRODUITS"
          : "PRODUCT CAROUSEL",
      title: language === 'en' ? "Display products in a visually attractive carousel" : language === 'en'
          ? "Affichez les produits dans un carrousel visuellement attrayant"
          : language === 'fr'
          ? "Affichez les produits dans un carrousel visuellement attrayant"
          : "Toon producten in een visueel aantrekkelijke carousel",
      description: language === 'en' ? "The chatbot presents products in a beautiful carousel display with clear product cards. Customers immediately see product images, specifications and can scroll through multiple options - perfect for product overviews and comparisons." : language === 'en'
          ? "Le chatbot presente les produits dans un magnifique carrousel avec des cartes produits claires. Les clients voient immediatement les images des produits, les specifications et peuvent faire defiler plusieurs options - parfait pour les aperçus et comparaisons de produits."
          : language === 'fr'
          ? "Le chatbot présente les produits dans un magnifique carrousel avec des cartes produits claires. Les clients voient immédiatement les images des produits, les spécifications et peuvent faire défiler plusieurs options - parfait pour les aperçus et comparaisons de produits."
          : "De chatbot presenteert producten in een prachtige carousel weergave met heldere productkaarten. Klanten zien direct productafbeeldingen, specificaties en kunnen door meerdere opties scrollen - perfect voor productoverzichten en vergelijkingen.",
      benefits: language === 'en' ? [
        "Visually attractive product cards with images",
        "Horizontally scrollable carousel for multiple products",
        "Direct call-to-action buttons per product"
      ] : language === 'fr' ? [
        "Cartes produits visuellement attrayantes avec images",
        "Carrousel défilant horizontalement pour plusieurs produits",
        "Boutons d'appel à l'action directs par produit"
      ] : [
        "Visueel aantrekkelijke productkaarten met afbeeldingen",
        "Horizontaal scrollbare carousel voor meerdere producten",
        "Directe call-to-action buttons per product"
      ],
      mockupType: "product-carousel"
    },
    {
      icon: TrendingUp,
      badge: language === 'en' ? "UPSELL & CROSS-SELL" : language === 'en'
          ? "VENTE INCITATIVE ET CROISÉE"
          : language === 'fr'
          ? "VENTE INCITATIVE ET CROISÉE"
          : "UPSELL & CROSS-SELL",
      title: language === 'en' ? "Increase your average order value by 40%" : language === 'en'
          ? "Augmentez votre valeur moyenne de commande de 40%"
          : language === 'fr'
          ? "Augmentez votre valeur moyenne de commande de 40%"
          : "Verhoog je gemiddelde orderwaarde met 40%",
      description: language === 'en' ? "Our AI recognizes the perfect moment to suggest additional products. From bundles to premium variants - always relevant and never intrusive." : language === 'en'
          ? "Notre IA reconnaît le moment parfait pour suggerer des produits supplementaires. Des bundles aux variantes premium - toujours pertinent et jamais intrusif."
          : language === 'fr'
          ? "Notre IA reconnaît le moment parfait pour suggérer des produits supplémentaires. Des bundles aux variantes premium - toujours pertinent et jamais intrusif."
          : "Onze AI herkent het perfecte moment om aanvullende producten voor te stellen. Van bundels tot premium varianten - altijd relevant en nooit opdringerig.",
      benefits: language === 'en' ? [
        "Smart product bundles and combinations",
        "Premium variant suggestions at the right moment",
        "Automatic discounts on bundle purchases"
      ] : language === 'fr' ? [
        "Bundles de produits intelligents et combinaisons",
        "Suggestions de variantes premium au bon moment",
        "Réductions automatiques lors d'achats groupés"
      ] : [
        "Slimme product bundels en combinaties",
        "Premium variant suggesties op juiste moment",
        "Automatische kortingen bij bundel aankoop"
      ],
      mockupType: "upsell"
    },
    {
      icon: Mic,
      badge: language === 'en' ? "VOICE INTERACTION" : language === 'en'
          ? "INTERACTION VOCALE"
          : language === 'fr'
          ? "INTERACTION VOCALE"
          : "SPRAAK INTERACTIE",
      title: language === 'en' ? "Talk to the bot, get direct answers" : language === 'en'
          ? "Parlez au bot, obtenez des reponses directes"
          : language === 'fr'
          ? "Parlez au bot, obtenez des réponses directes"
          : "Praat tegen de bot, krijg directe antwoorden",
      description: language === 'en' ? "Customers can simply talk to the bot via voice. The bot automatically transcribes and gives text responses. Perfect for hands-free shopping and mobile users." : language === 'en'
          ? "Les clients peuvent simplement parler au bot via la voix. Le bot transcrit automatiquement et donne des reponses textuelles. Parfait pour le shopping mains libres et les utilisateurs mobiles."
          : language === 'fr'
          ? "Les clients peuvent simplement parler au bot via la voix. Le bot transcrit automatiquement et donne des réponses textuelles. Parfait pour le shopping mains libres et les utilisateurs mobiles."
          : "Klanten kunnen simpelweg tegen de bot praten via spraak. De bot transcribeert automatisch en geeft textuele antwoorden. Perfect voor hands-free winkelen en mobiele gebruikers.",
      benefits: language === 'en' ? [
        "Voice-to-text in real-time",
        "High accuracy in English",
        "Hands-free shopping experience"
      ] : language === 'fr' ? [
        "Voix vers texte en temps réel",
        "Haute précision en néerlandais et français",
        "Expérience de shopping mains libres"
      ] : [
        "Spraak-naar-tekst in realtime",
        "Hoge nauwkeurigheid in Nederlands",
        "Hands-free shopping ervaring"
      ],
      mockupType: "voice"
    },
    {
      icon: Globe,
      badge: language === 'en' ? "MULTILINGUAL SUPPORT" : language === 'en'
          ? "SUPPORT MULTILINGUE"
          : language === 'fr'
          ? "SUPPORT MULTILINGUE"
          : "MULTILINGUAL SUPPORT",
      title: language === 'en' ? "Communicate globally in 50+ languages" : language === 'en'
          ? "Communiquez mondialement dans plus de 50 langues"
          : language === 'fr'
          ? "Communiquez mondialement dans plus de 50 langues"
          : "Communiceer wereldwijd in 50+ talen",
      description: language === 'en' ? "The chatbot automatically detects your customer's language and responds in the same language. Perfect for international webshops serving customers worldwide - without extra configuration." : language === 'en'
          ? "Le chatbot detecte automatiquement la langue de votre client et repond dans la même langue. Parfait pour les boutiques internationales qui servent des clients du monde entier - sans configuration supplementaire."
          : language === 'fr'
          ? "Le chatbot détecte automatiquement la langue de votre client et répond dans la même langue. Parfait pour les boutiques internationales qui servent des clients du monde entier - sans configuration supplémentaire."
          : "De chatbot detecteert automatisch de taal van je klant en antwoordt in diezelfde taal. Perfect voor internationale webshops die klanten over de hele wereld bedienen - zonder extra configuratie.",
      benefits: language === 'en' ? [
        "Automatic language detection - 50+ languages supported",
        "Natural conversations in every language with contextual understanding",
        "Real-time translation of product info and responses"
      ] : language === 'fr' ? [
        "Détection automatique de la langue - Plus de 50 langues supportées",
        "Conversations naturelles dans chaque langue avec compréhension contextuelle",
        "Traduction en temps réel des informations produits et réponses"
      ] : [
        "Automatische taaldetectie - 50+ talen ondersteund",
        "Natuurlijke conversaties in elke taal met context begrip",
        "Real-time vertaling van productinfo en antwoorden"
      ],
      mockupType: "multilingual"
    },
    {
      icon: Package,
      badge: language === 'en' ? "PACKAGE TRACKING" : language === 'en'
          ? "SUIVI DE COLIS"
          : language === 'fr'
          ? "SUIVI DE COLIS"
          : "PAKKET TRACKING",
      title: language === 'en' ? "Live tracking information directly in the chat" : language === 'en'
          ? "Informations de suivi en direct dans le chat"
          : language === 'fr'
          ? "Informations de suivi en direct dans le chat"
          : "Live tracking informatie direct in de chat",
      description: language === 'en' ? "Customers can easily request their package status and receive real-time updates. Reduce support tickets by 70%." : language === 'en'
          ? "Les clients peuvent facilement demander l'etat de leur colis et recevoir des mises à jour en temps reel. Reduisez les tickets de support de 70%."
          : language === 'fr'
          ? "Les clients peuvent facilement demander l'état de leur colis et recevoir des mises à jour en temps réel. Réduisez les tickets de support de 70%."
          : "Klanten kunnen eenvoudig hun pakket status opvragen en realtime updates ontvangen. Verminder support tickets met 70%.",
      benefits: language === 'en' ? [
        "Integration with all major carriers",
        "Proactive updates on delays",
        "Delivery time window communication"
      ] : language === 'fr' ? [
        "Intégration avec tous les transporteurs majeurs",
        "Mises à jour proactives en cas de retard",
        "Communication de la fenêtre de livraison"
      ] : [
        "Integratie met alle major carriers",
        "Proactieve updates bij vertraging",
        "Bezorgtijdvenster communicatie"
      ],
      mockupType: "tracking"
    },
    {
      icon: RotateCcw,
      badge: language === 'en' ? "RETURN HANDLING" : language === 'en'
          ? "GESTION DES RETOURS"
          : language === 'fr'
          ? "GESTION DES RETOURS"
          : "RETOUR AFHANDELING",
      title: language === 'en' ? "Make returns simple for you and your customers" : language === 'en'
          ? "Rendez les retours simples pour vous et vos clients"
          : language === 'fr'
          ? "Rendez les retours simples pour vous et vos clients"
          : "Maak retouren simpel voor jou en je klanten",
      description: language === 'en' ? "Automate the complete return process with smart questionnaires, direct label generation and automatic updates. Increase customer satisfaction and reduce workload." : language === 'en'
          ? "Automatisez le processus de retour complet avec des questionnaires intelligents, generation directe d'etiquettes et mises à jour automatiques. Augmentez la satisfaction client et reduisez la charge de travail."
          : language === 'fr'
          ? "Automatisez le processus de retour complet avec des questionnaires intelligents, génération directe d'étiquettes et mises à jour automatiques. Augmentez la satisfaction client et réduisez la charge de travail."
          : "Automatiseer het complete retourproces met slimme vragenlijsten, directe label generatie en automatische updates. Verhoog klanttevredenheid en reduceer werkdruk.",
      benefits: language === 'en' ? [
        "Automatic return label generation",
        "Smart question flow for return reason",
        "Direct refund upon receipt"
      ] : language === 'fr' ? [
        "Génération automatique d'étiquettes de retour",
        "Flux de questions intelligent pour la raison du retour",
        "Remboursement direct à la réception"
      ] : [
        "Automatische retourlabel generatie",
        "Slimme vragenflow voor retour reden",
        "Directe terugbetaling bij ontvangst"
      ],
      mockupType: "return"
    },
    {
      icon: Users,
      badge: language === 'en' ? "LEAD COLLECTION" : language === 'en'
          ? "COLLECTE DE LEADS"
          : language === 'fr'
          ? "COLLECTE DE LEADS"
          : "LEAD VERZAMELING",
      title: language === 'en' ? "Collect quality leads during conversations" : language === 'en'
          ? "Collectez des leads de qualite pendant les conversations"
          : language === 'fr'
          ? "Collectez des leads de qualité pendant les conversations"
          : "Verzamel kwaliteitsvolle leads tijdens gesprekken",
      description: language === 'en' ? "Turn every conversation into an opportunity to collect leads. The bot naturally asks for contact details and preferences, without being intrusive." : language === 'en'
          ? "Transformez chaque conversation en opportunite de collecter des leads. Le bot demande naturellement les coordonnees et les preferences, sans être intrusif."
          : language === 'fr'
          ? "Transformez chaque conversation en opportunité de collecter des leads. Le bot demande naturellement les coordonnées et les préférences, sans être intrusif."
          : "Maak van elke conversatie een kans om leads te verzamelen. De bot vraagt op natuurlijke wijze naar contactgegevens en voorkeuren, zonder opdringerig te zijn.",
      benefits: language === 'en' ? [
        "Natural question flow for contact details",
        "Automatic segmentation based on interest",
        "Direct export to CRM and email tools"
      ] : language === 'fr' ? [
        "Flux de questions naturel pour les coordonnées",
        "Segmentation automatique basée sur l'intérêt",
        "Export direct vers CRM et outils email"
      ] : [
        "Natuurlijke vraagflow voor contactgegevens",
        "Automatische segmentatie op basis van interesse",
        "Directe export naar CRM en email tools"
      ],
      mockupType: "lead-collection"
    },
    {
      icon: Zap,
      badge: language === 'en' ? "QUICK REPLY BUTTONS" : language === 'en'
          ? "BOUTONS DE RÉPONSE RAPIDE"
          : language === 'fr'
          ? "BOUTONS DE RÉPONSE RAPIDE"
          : "QUICK REPLY BUTTONS",
      title: language === 'en' ? "Quick interaction with one-click answers" : language === 'en'
          ? "Interaction rapide avec reponses en un clic"
          : language === 'fr'
          ? "Interaction rapide avec réponses en un clic"
          : "Snelle interactie met één klik antwoorden",
      description: language === 'en' ? "Make it easy for customers with visual buttons and quick answers. No typing needed - just click and continue. Perfect for mobile users." : language === 'en'
          ? "Facilitez la vie de vos clients avec des boutons visuels et des reponses rapides. Pas besoin de taper - juste cliquer et continuer. Parfait pour les utilisateurs mobiles."
          : language === 'fr'
          ? "Facilitez la vie de vos clients avec des boutons visuels et des réponses rapides. Pas besoin de taper - juste cliquer et continuer. Parfait pour les utilisateurs mobiles."
          : "Maak het makkelijk voor klanten met visuele knoppen en snelle antwoorden. Geen typen nodig - gewoon klikken en doorgaan. Perfect voor mobiele gebruikers.",
      benefits: language === 'en' ? [
        "Contextual buttons based on situation",
        "Visual buttons with emojis and icons",
        "Mobile-optimized for touch interfaces"
      ] : language === 'fr' ? [
        "Boutons contextuels basés sur la situation",
        "Boutons visuels avec emojis et icônes",
        "Optimisé mobile pour interfaces tactiles"
      ] : [
        "Contextuele knoppen gebaseerd op situatie",
        "Visuele knoppen met emoji's en iconen",
        "Mobiel-geoptimaliseerd voor touch interfaces"
      ],
      mockupType: "quick-replies"
    },
    {
      icon: Code,
      badge: language === 'en' ? "API & INTEGRATIONS" : language === 'en'
          ? "API & INTÉGRATIONS"
          : language === 'fr'
          ? "API & INTÉGRATIONS"
          : "API & INTEGRATIES",
      title: language === 'en' ? "Connect with all your existing systems" : language === 'en'
          ? "Connectez-vous à tous vos systemes existants"
          : language === 'fr'
          ? "Connectez-vous à tous vos systèmes existants"
          : "Koppel met al je bestaande systemen",
      description: language === 'en' ? "Seamless integration with your e-commerce platform, CRM, helpdesk and more. Use our REST API or ready-made connectors for popular platforms." : language === 'en'
          ? "Integration transparente avec votre plateforme e-commerce, CRM, helpdesk et plus. Utilisez notre API REST ou des connecteurs prêts à l'emploi pour les plateformes populaires."
          : language === 'fr'
          ? "Intégration transparente avec votre plateforme e-commerce, CRM, helpdesk et plus. Utilisez notre API REST ou des connecteurs prêts à l'emploi pour les plateformes populaires."
          : "Naadloze integratie met je e-commerce platform, CRM, helpdesk en meer. Gebruik onze REST API of kant-en-klare connectoren voor populaire platforms.",
      benefits: language === 'en' ? [
        "RESTful API with comprehensive documentation",
        "Native integrations with Shopify, WooCommerce",
        "Webhooks for real-time event notifications"
      ] : language === 'fr' ? [
        "API RESTful avec documentation complète",
        "Intégrations natives avec Shopify, WooCommerce",
        "Webhooks pour notifications d'événements en temps réel"
      ] : [
        "RESTful API met uitgebreide documentatie",
        "Native integraties met Shopify, WooCommerce",
        "Webhooks voor realtime event notificaties"
      ],
      mockupType: "api"
    },
    {
      icon: MessageSquare,
      badge: language === 'en' ? "CONVERSATIONAL FLOWS" : language === 'en'
          ? "FLUX CONVERSATIONNELS"
          : language === 'fr'
          ? "FLUX CONVERSATIONNELS"
          : "CONVERSATIONAL FLOWS",
      title: language === 'en' ? "Intelligent conversation flows that adapt" : language === 'en'
          ? "Flux de conversation intelligents qui s'adaptent"
          : language === 'fr'
          ? "Flux de conversation intelligents qui s'adaptent"
          : "Intelligente gespreksflows die zich aanpassen",
      description: language === 'en' ? "Our AI adapts to the needs of every customer. From simple questions to complex product advice - always the right flow." : language === 'en'
          ? "Notre IA s'adapte aux besoins de chaque client. Des questions simples aux conseils produits complexes - toujours le bon flux."
          : language === 'fr'
          ? "Notre IA s'adapte aux besoins de chaque client. Des questions simples aux conseils produits complexes - toujours le bon flux."
          : "Onze AI past zich aan aan de behoeften van elke klant. Van simpele vragen tot complexe productadvies - altijd de juiste flow.",
      benefits: language === 'en' ? [
        "Dynamic flows based on context",
        "Multi-turn conversations with memory",
        "Natural language processing for understanding"
      ] : language === 'fr' ? [
        "Flux dynamiques basés sur le contexte",
        "Conversations multi-tours avec mémoire",
        "Traitement du langage naturel pour la compréhension"
      ] : [
        "Dynamische flows op basis van context",
        "Multi-turn conversaties met geheugen",
        "Natuurlijke taalverwerking voor begrip"
      ],
      mockupType: "carousel"
    },
    {
      icon: Inbox,
      badge: language === 'en' ? "AI INBOX & INSIGHTS" : language === 'en'
          ? "BOÎTE DE RÉCEPTION IA & INSIGHTS"
          : language === 'fr'
          ? "BOÎTE DE RÉCEPTION IA & INSIGHTS"
          : "AI INBOX & INZICHTEN",
      title: language === 'en' ? "Get deep insights with AI-powered analytics" : language === 'en'
          ? "Obtenez des insights approfondis avec des analyses alimentees par l'IA"
          : language === 'fr'
          ? "Obtenez des insights approfondis avec des analyses alimentées par l'IA"
          : "Krijg diepgaande inzichten met AI-powered analytics",
      description: language === 'en' ? "Our AI analyzes all conversations and gives you actionable insights to improve your service. Ask questions to the AI agent about trends and customer behavior." : language === 'en'
          ? "Notre IA analyse toutes les conversations et vous donne des insights actionnables pour ameliorer votre service. Posez des questions à l'agent IA sur les tendances et le comportement des clients."
          : language === 'fr'
          ? "Notre IA analyse toutes les conversations et vous donne des insights actionnables pour améliorer votre service. Posez des questions à l'agent IA sur les tendances et le comportement des clients."
          : "Onze AI analyseert alle conversaties en geeft je actionable insights om je service te verbeteren. Stel vragen aan de AI agent over trends en klantgedrag.",
      benefits: language === 'en' ? [
        "Real-time dashboard with KPIs",
        "AI-generated improvement points",
        "Conversation analysis and sentiment tracking"
      ] : language === 'fr' ? [
        "Tableau de bord en temps réel avec KPI",
        "Points d'amélioration générés par l'IA",
        "Analyse de conversation et suivi du sentiment"
      ] : [
        "Realtime dashboard met KPI's",
        "AI-gegenereerde verbeterpunten",
        "Conversatie analyse en sentiment tracking"
      ],
      mockupType: "insights"
    }
  ];

  const graphData = [
    {
      "@type": "WebPage",
      "@id": language === 'en' ? "https://www.glimps.be/en/features" : language === 'en'
          ? "https://www.glimps.be/fr/fonctionnalites"
          : language === 'fr'
          ? "https://www.glimps.be/fr/fonctionnalites"
          : "https://www.glimps.be/features",
      "url": language === 'en' ? "https://www.glimps.be/en/features" : language === 'en'
          ? "https://www.glimps.be/fr/fonctionnalites"
          : language === 'fr'
          ? "https://www.glimps.be/fr/fonctionnalites"
          : "https://www.glimps.be/features",
      "name": language === 'en' ? "Features - Glimps AI Chatbot" : language === 'en'
          ? "Fonctionnalites - Glimps AI Chatbot"
          : language === 'fr'
          ? "Fonctionnalités - Glimps AI Chatbot"
          : "Functies - Glimps AI Chatbot",
      "description": language === 'en' ? "Discover all features of Glimps: checkout bot, package tracking, upselling, multilingual support and more. Complete AI chatbot for e-commerce." : language === 'en'
          ? "Decouvrez toutes les fonctionnalites de Glimps : bot de paiement, suivi de colis, upselling, support multilingue et plus. Chatbot IA complet pour l'e-commerce."
          : language === 'fr'
          ? "Découvrez toutes les fonctionnalités de Glimps : bot de paiement, suivi de colis, upselling, support multilingue et plus. Chatbot IA complet pour l'e-commerce."
          : "Ontdek alle functies van Glimps: checkout bot, pakket tracking, upselling, multilingual support en meer. Complete AI chatbot voor e-commerce.",
      "inLanguage": language === 'en' ? "en-US" : language === 'en'
          ? "fr-BE"
          : language === 'fr'
          ? "fr-BE"
          : "nl-BE",
      "isPartOf": {
        "@id": "https://www.glimps.be#website"
      },
      "publisher": {
        "@id": "https://www.glimps.be#organization"
      },
      "about": {
        "@type": "Service",
        "name": "Glimps AI Chatbot Features",
        "description": "Complete feature set voor e-commerce AI chatbots",
        "provider": {
          "@id": "https://www.glimps.be#organization"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Chatbot Features",
          "itemListElement": features.map(feature => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": feature.title,
              "description": feature.description
            }
          }))
        }
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
          "item": language === 'en' ? "https://www.glimps.be/en" : language === 'en'
          ? "https://www.glimps.be/fr"
          : language === 'fr'
          ? "https://www.glimps.be/fr"
          : "https://www.glimps.be/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": language === 'en' ? "Features" : language === 'en'
          ? "Fonctionnalites"
          : language === 'fr'
          ? "Fonctionnalités"
          : "Functies",
          "item": language === 'en' ? "https://www.glimps.be/en/features" : language === 'en'
          ? "https://www.glimps.be/fr/fonctionnalites"
          : language === 'fr'
          ? "https://www.glimps.be/fr/fonctionnalites"
          : "https://www.glimps.be/features"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background">
      <SEO
        title={language === 'en' ? "Features - Glimps AI Chatbot | Complete E-commerce Solution" : language === 'en'
          ? "Fonctionnalites - Glimps AI Chatbot | Solution E-commerce Complete"
          : language === 'fr'
          ? "Fonctionnalités - Glimps AI Chatbot | Solution E-commerce Complète"
          : "Functies - Glimps AI Chatbot | Complete E-commerce Oplossing"}
        description={language === 'en' ? "Discover all features of Glimps: checkout bot, package tracking, upselling, multilingual support and more. Complete AI chatbot for e-commerce." : language === 'en'
          ? "Decouvrez toutes les fonctionnalites de Glimps : bot de paiement, suivi de colis, upselling, support multilingue et plus. Chatbot IA complet pour l'e-commerce."
          : language === 'fr'
          ? "Découvrez toutes les fonctionnalités de Glimps : bot de paiement, suivi de colis, upselling, support multilingue et plus. Chatbot IA complet pour l'e-commerce."
          : "Ontdek alle functies van Glimps: checkout bot, pakket tracking, upselling, multilingual support en meer. Complete AI chatbot voor e-commerce."}
        path={language === 'en' ? "/en/features" : language === 'en'
          ? "/fr/fonctionnalites"
          : language === 'fr'
          ? "/fr/fonctionnalites"
          : "/features"}
        canonical={language === 'en' ? "https://www.glimps.be/en/features" : language === 'en'
          ? "https://www.glimps.be/fr/fonctionnalites"
          : language === 'fr'
          ? "https://www.glimps.be/fr/fonctionnalites"
          : "https://www.glimps.be/features"}
        keywords={language === 'en' ? "chatbot features, checkout bot, package tracking, upselling, multilingual support, voice interaction, AI features" : language === 'en'
          ? "fonctionnalites chatbot, bot de paiement, suivi de colis, upselling, support multilingue, interaction vocale, fonctionnalites IA"
          : language === 'fr'
          ? "fonctionnalités chatbot, bot de paiement, suivi de colis, upselling, support multilingue, interaction vocale, fonctionnalités IA"
          : "chatbot functies, checkout bot, pakket tracking, upselling, multilingual support, spraak interactie, AI features"}
        type="website"
      />
      <StructuredData type="graph" data={graphData} />
      <Navigation />

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="font-inter text-4xl md:text-6xl font-normal mb-6 leading-tight">
              {language === 'en'
                ? "Our AI chatbot offers complete functionality for every phase of the customer journey"
                : language === 'fr'
                ? "Notre chatbot IA offre une fonctionnalité complète pour chaque phase du parcours client"
                : "Onze AI chatbot biedt complete functionaliteit voor elke fase van de customer journey"
              }
            </h1>
          </div>

          {/* Features */}
          <div className="space-y-32">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content Side */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <Badge variant="outline" className="mb-6 px-4 py-2 bg-primary/10 border-primary/20 text-primary">
                    <feature.icon className="w-4 h-4 mr-2" />
                    {feature.badge}
                  </Badge>
                  
                  <h2 className="font-inter text-3xl md:text-4xl font-normal mb-4 leading-tight">
                    {feature.title}
                  </h2>
                  
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="space-y-3">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mockup Side */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative">
                    {/* Background gradient blur */}
                    <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-2xl" />
                    
                    {/* Main mockup card */}
                    <div className="relative bg-card border border-border rounded-2xl shadow-2xl p-8">
                      {feature.mockupType === "voice" && (
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-xl">
                            <div className="relative">
                              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center animate-pulse">
                                <Mic className="w-5 h-5 text-primary-foreground" />
                              </div>
                              <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
                            </div>
                            <span className="text-sm font-medium">
                              {language === 'en' ? 'VOICE INTERACTION' : language === 'fr' ? 'INTERACTION VOCALE' : 'SPRAAK INTERACTIE'}
                            </span>
                          </div>
                          
                          <div className="p-4 bg-muted/30 rounded-xl border border-primary/20">
                            <div className="flex items-start gap-3 mb-3">
                              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                                <Mic className="w-4 h-4 text-primary" />
                              </div>
                              <div className="flex-1">
                                <div className="text-xs text-muted-foreground mb-2">
                                  {language === 'en' ? 'Listening...' : language === 'fr' ? 'À l\'écoute...' : 'Aan het luisteren...'}
                                </div>
                                <div className="flex items-center gap-1 mb-2">
                                  {[...Array(20)].map((_, i) => (
                                    <div
                                      key={i}
                                      className="w-1 bg-primary rounded-full animate-pulse"
                                      style={{
                                        height: `${Math.random() * 24 + 8}px`,
                                        animationDelay: `${i * 0.1}s`
                                      }}
                                    />
                                  ))}
                                </div>
                                <p className="text-sm italic text-muted-foreground">
                                  {language === 'en'
                                    ? '"I\'m looking for a red winter jacket in size M"'
                                    : language === 'fr'
                                    ? '"Je cherche une veste d\'hiver rouge en taille M"'
                                    : '"Ik zoek een rode winterjas in maat M"'}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="p-4 bg-muted/50 rounded-xl">
                            <div className="flex items-start gap-3">
                              <Bot className="w-5 h-5 text-primary mt-0.5" />
                              <div className="flex-1 space-y-3">
                                <p className="text-sm">
                                  {language === 'en' ? 'I understood your question! 👍' : language === 'fr' ? 'J\'ai compris votre question ! 👍' : 'Ik heb je vraag begrepen! 👍'}
                                </p>
                                <p className="text-sm">
                                  {language === 'en'
                                    ? 'Let me search for the perfect red winter jacket for you in size M...'
                                    : language === 'fr'
                                    ? 'Laissez-moi chercher la veste d\'hiver rouge parfaite pour vous en taille M...'
                                    : 'Laat me even de perfecte rode winterjas voor je zoeken in maat M...'}
                                </p>

                                 <div className="flex items-center gap-3 p-3 border border-border rounded-lg bg-background">
                                   <img src={productJacketRed} alt="Winterjas" className="w-16 h-16 rounded object-cover" />
                                   <div className="flex-1">
                                    <div className="font-semibold text-sm mb-1">Winterjas Classic</div>
                                    <div className="text-xs text-muted-foreground mb-1">
                                      {language === 'en' ? 'Size M' : language === 'fr' ? 'Taille M' : 'Maat M'}
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <span className="text-primary font-bold">€89,99</span>
                                      <span className="text-xs bg-green-500/20 text-green-600 px-2 py-0.5 rounded">
                                        {language === 'en' ? 'In stock' : language === 'fr' ? 'En stock' : 'Op voorraad'}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center justify-center gap-2 p-3 bg-muted/30 rounded-lg">
                            <Mic className="w-4 h-4 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">
                              {language === 'en'
                                ? '💡 Tip: Click on the microphone to speak'
                                : language === 'fr'
                                ? '💡 Astuce : Cliquez sur le microphone pour parler'
                                : '💡 Tip: Klik op de microfoon om te spreken'}
                            </span>
                          </div>
                        </div>
                      )}

                      {feature.mockupType === "multilingual" && (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between p-4 bg-primary/10 rounded-xl mb-4">
                            <div className="flex items-center gap-2">
                              <Globe className="w-5 h-5 text-primary" />
                              <span className="text-sm font-medium">
                                {language === 'en' ? 'Multilingual Chat' : language === 'fr' ? 'Chat Multilingue' : 'Multilingual Chat'}
                              </span>
                            </div>
                            <span className="text-xs bg-green-500/20 text-green-600 px-3 py-1 rounded-full font-medium">
                              {language === 'en' ? 'Auto-detect ON' : language === 'fr' ? 'Détection auto ON' : 'Auto-detect ON'}
                            </span>
                          </div>

                          <div className="space-y-3">
                            {/* Dutch message */}
                            <div className="p-4 bg-muted/50 rounded-xl">
                              <div className="flex items-start gap-3">
                                <div className="text-xl">🇳🇱</div>
                                <div className="flex-1">
                                  <p className="text-sm mb-1">Hallo! Hoe kan ik je helpen?</p>
                                  <p className="text-xs text-muted-foreground">
                                    {language === 'en' ? 'Dutch detected' : language === 'fr' ? 'Néerlandais détecté' : 'Nederlands gedetecteerd'}
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* English message */}
                            <div className="p-4 bg-muted/50 rounded-xl">
                              <div className="flex items-start gap-3">
                                <div className="text-xl">🇬🇧</div>
                                <div className="flex-1">
                                  <p className="text-sm mb-1">Hello! How can I help you today?</p>
                                  <p className="text-xs text-muted-foreground">
                                    {language === 'en' ? 'English detected' : language === 'fr' ? 'Anglais détecté' : 'English detected'}
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* German message */}
                            <div className="p-4 bg-muted/50 rounded-xl">
                              <div className="flex items-start gap-3">
                                <div className="text-xl">🇩🇪</div>
                                <div className="flex-1">
                                  <p className="text-sm mb-1">Hallo! Wie kann ich Ihnen helfen?</p>
                                  <p className="text-xs text-muted-foreground">
                                    {language === 'en' ? 'German detected' : language === 'fr' ? 'Allemand détecté' : 'Deutsch erkannt'}
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* French message */}
                            <div className="p-4 bg-muted/50 rounded-xl">
                              <div className="flex items-start gap-3">
                                <div className="text-xl">🇫🇷</div>
                                <div className="flex-1">
                                  <p className="text-sm mb-1">Bonjour! Comment puis-je vous aider?</p>
                                  <p className="text-xs text-muted-foreground">Français détecté</p>
                                </div>
                              </div>
                            </div>

                            {/* Spanish message */}
                            <div className="p-4 bg-muted/50 rounded-xl">
                              <div className="flex items-start gap-3">
                                <div className="text-xl">🇪🇸</div>
                                <div className="flex-1">
                                  <p className="text-sm mb-1">¡Hola! ¿Cómo puedo ayudarte?</p>
                                  <p className="text-xs text-muted-foreground">
                                    {language === 'en' ? 'Spanish detected' : language === 'fr' ? 'Espagnol détecté' : 'Español detectado'}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Stats section */}
                          <div className="grid grid-cols-2 gap-3 mt-4 p-4 bg-green-500/10 rounded-xl">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-primary mb-1">🌍 50+</div>
                              <div className="text-xs text-muted-foreground">
                                {language === 'en' ? 'Supported languages' : language === 'fr' ? 'Langues supportées' : 'Ondersteunde talen'}
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-primary mb-1">⚡ &lt;1s</div>
                              <div className="text-xs text-muted-foreground">
                                {language === 'en' ? 'Detection time' : language === 'fr' ? 'Temps de détection' : 'Detectietijd'}
                              </div>
                            </div>
                          </div>

                          {/* Language badges */}
                          <div className="flex flex-wrap gap-2 p-4 bg-muted/30 rounded-xl">
                            <div className="flex items-center gap-1 text-xs bg-background px-2 py-1 rounded border border-border">
                              🇳🇱 NL
                            </div>
                            <div className="flex items-center gap-1 text-xs bg-background px-2 py-1 rounded border border-border">
                              🇬🇧 EN
                            </div>
                            <div className="flex items-center gap-1 text-xs bg-background px-2 py-1 rounded border border-border">
                              🇩🇪 DE
                            </div>
                            <div className="flex items-center gap-1 text-xs bg-background px-2 py-1 rounded border border-border">
                              🇫🇷 FR
                            </div>
                            <div className="flex items-center gap-1 text-xs bg-background px-2 py-1 rounded border border-border">
                              🇪🇸 ES
                            </div>
                            <div className="flex items-center gap-1 text-xs bg-background px-2 py-1 rounded border border-border">
                              🇮🇹 IT
                            </div>
                            <div className="flex items-center gap-1 text-xs bg-background px-2 py-1 rounded border border-border">
                              🇵🇹 PT
                            </div>
                            <div className="flex items-center gap-1 text-xs bg-background px-2 py-1 rounded border border-border">
                              🇵🇱 PL
                            </div>
                            <div className="flex items-center gap-1 text-xs bg-background px-2 py-1 rounded border border-border">
                              🇷🇺 RU
                            </div>
                            <div className="flex items-center gap-1 text-xs bg-background px-2 py-1 rounded border border-border">
                              🇯🇵 JP
                            </div>
                            <div className="flex items-center gap-1 text-xs bg-background px-2 py-1 rounded border border-border">
                              🇨🇳 ZH
                            </div>
                            <div className="text-xs bg-primary/20 text-primary px-2 py-1 rounded font-medium">
                              +40 meer
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {feature.mockupType === "checkout" && (
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                            <MessageSquare className="w-5 h-5 text-primary" />
                            <span className="text-sm">
                              {language === 'en' ? 'Would you like to order these items?' : language === 'fr' ? 'Voulez-vous commander ces articles ?' : 'Wil je deze items bestellen?'}
                            </span>
                          </div>
                           <div className="space-y-3">
                             <div className="flex items-center gap-4 p-3 bg-muted/30 rounded-lg">
                               <img src={productSneakerBlue} alt="Product" className="w-16 h-16 rounded object-cover" />
                               <div className="flex-1">
                                 <div className="h-3 bg-muted rounded w-3/4 mb-2" />
                                 <div className="h-3 bg-muted rounded w-1/2" />
                               </div>
                               <span className="text-primary font-semibold">€49,99</span>
                             </div>
                             <div className="flex items-center gap-4 p-3 bg-muted/30 rounded-lg">
                               <img src={productHoodieGray} alt="Product" className="w-16 h-16 rounded object-cover" />
                               <div className="flex-1">
                                 <div className="h-3 bg-muted rounded w-3/4 mb-2" />
                                 <div className="h-3 bg-muted rounded w-1/2" />
                               </div>
                               <span className="text-primary font-semibold">€29,99</span>
                             </div>
                           </div>
                          <div className="pt-4 border-t border-border space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>{language === 'en' ? 'Subtotal' : language === 'fr' ? 'Sous-total' : 'Subtotaal'}</span>
                              <span>€79,98</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span>{language === 'en' ? 'Shipping' : language === 'fr' ? 'Livraison' : 'Verzending'}</span>
                              <span className="text-green-500">{language === 'en' ? 'Free' : language === 'fr' ? 'Gratuit' : 'Gratis'}</span>
                            </div>
                            <div className="flex justify-between font-semibold text-lg pt-2">
                              <span>{language === 'en' ? 'Total' : language === 'fr' ? 'Total' : 'Totaal'}</span>
                              <span>€79,98</span>
                            </div>
                          </div>
                          <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                            {language === 'en' ? 'Proceed to checkout' : language === 'fr' ? 'Passer au paiement' : 'Naar checkout'}
                          </button>
                        </div>
                      )}

                      {feature.mockupType === "tracking" && (
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                            <Package className="w-5 h-5 text-primary" />
                            <span className="text-sm">
                              {language === 'en' ? 'Your package is on its way! 📦' : language === 'fr' ? 'Votre colis est en route ! 📦' : 'Je pakket is onderweg! 📦'}
                            </span>
                          </div>
                           <div className="space-y-4 p-4">
                             <div className="flex items-start gap-4">
                               <img src={productBackpackBrown} alt="Product" className="w-12 h-12 rounded-lg object-cover" />
                               <div className="flex-1 space-y-2">
                                 <div className="h-3 bg-muted rounded w-3/4" />
                                 <div className="h-3 bg-muted rounded w-1/2" />
                               </div>
                             </div>
                            <div className="relative space-y-4 pl-6 border-l-2 border-primary/30">
                              <div className="relative">
                                <div className="absolute -left-[29px] w-4 h-4 rounded-full bg-primary" />
                                <div>
                                  <div className="font-semibold">
                                    {language === 'en' ? 'Order received' : language === 'fr' ? 'Commande reçue' : 'Bestelling ontvangen'}
                                  </div>
                                  <div className="text-sm text-muted-foreground">
                                    {language === 'en' ? 'Mon 14:23' : language === 'fr' ? 'Lun 14:23' : 'Ma 14:23'}
                                  </div>
                                </div>
                              </div>
                              <div className="relative">
                                <div className="absolute -left-[29px] w-4 h-4 rounded-full bg-primary" />
                                <div>
                                  <div className="font-semibold">
                                    {language === 'en' ? 'At sorting center' : language === 'fr' ? 'Au centre de tri' : 'In sorteercentrum'}
                                  </div>
                                  <div className="text-sm text-muted-foreground">
                                    {language === 'en' ? 'Tue 08:15' : language === 'fr' ? 'Mar 08:15' : 'Di 08:15'}
                                  </div>
                                </div>
                              </div>
                              <div className="relative">
                                <div className="absolute -left-[29px] w-4 h-4 rounded-full border-2 border-border bg-background" />
                                <div>
                                  <div className="text-muted-foreground">
                                    {language === 'en' ? 'On the way to you' : language === 'fr' ? 'En route vers vous' : 'Onderweg naar jou'}
                                  </div>
                                  <div className="text-sm text-muted-foreground">
                                    {language === 'en' ? 'Expected: Wed before 18:00' : language === 'fr' ? 'Prévu : Mer avant 18:00' : 'Verwacht: Wo voor 18:00'}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="p-3 bg-primary/10 rounded-lg text-sm text-primary">
                              {language === 'en' ? '📍 Delivery tomorrow before 18:00' : language === 'fr' ? '📍 Livraison demain avant 18:00' : '📍 Bezorging morgen voor 18:00'}
                            </div>
                          </div>
                        </div>
                      )}

                      {feature.mockupType === "return" && (
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                            <RotateCcw className="w-5 h-5 text-primary" />
                            <span className="text-sm">
                              {language === 'en' ? "I'm happy to help you with your return" : language === 'en'
          ? "Je vous aide volontiers avec votre retour"
          : language === 'fr'
          ? "Je vous aide volontiers avec votre retour"
          : "Ik help je graag met je retour"}
                            </span>
                          </div>
                           <div className="p-4 border border-border rounded-lg space-y-4">
                             <div className="text-sm font-semibold">
                               {language === 'en' ? 'Select product' : language === 'fr' ? 'Sélectionnez le produit' : 'Selecteer product'}
                             </div>
                             <div className="flex items-center gap-3 p-3 bg-primary/10 border border-primary/20 rounded-lg">
                               <img src={productTshirtBlack} alt="Product" className="w-16 h-16 rounded object-cover" />
                               <div className="flex-1">
                                 <div className="h-3 bg-muted rounded w-3/4 mb-2" />
                                 <div className="text-xs text-primary">
                                   {language === 'en' ? 'Size: L • Color: Black' : language === 'fr' ? 'Taille: L • Couleur: Noir' : 'Maat: L • Kleur: Zwart'}
                                 </div>
                               </div>
                               <Check className="w-5 h-5 text-primary" />
                             </div>
                            <div className="text-sm font-semibold">
                              {language === 'en' ? 'What is the reason?' : language === 'fr' ? 'Quelle est la raison ?' : 'Wat is de reden?'}
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                              <button className="p-3 border border-border rounded-lg text-sm hover:border-primary/50 transition-colors">
                                {language === 'en' ? '🔧 Wrong size' : language === 'fr' ? '🔧 Mauvaise taille' : '🔧 Verkeerde maat'}
                              </button>
                              <button className="p-3 bg-primary text-primary-foreground rounded-lg text-sm font-semibold">
                                {language === 'en' ? '❌ Wrong color' : language === 'fr' ? '❌ Mauvaise couleur' : '❌ Verkeerde kleur'}
                              </button>
                              <button className="p-3 border border-border rounded-lg text-sm hover:border-primary/50 transition-colors">
                                {language === 'en' ? '⚠️ Defective' : language === 'fr' ? '⚠️ Défectueux' : '⚠️ Defect'}
                              </button>
                              <button className="p-3 border border-border rounded-lg text-sm hover:border-primary/50 transition-colors">
                                {language === 'en' ? '📦 Other' : language === 'fr' ? '📦 Autre' : '📦 Anders'}
                              </button>
                            </div>
                            <button className="w-full bg-foreground text-background py-3 rounded-lg font-semibold hover:bg-foreground/90 transition-colors">
                              {language === 'en' ? "Create return label" : language === 'fr' ? "Créer l'étiquette de retour" : 'Retourlabel maken'}
                            </button>
                          </div>
                          <div className="p-3 bg-blue-500/10 rounded-lg text-sm text-blue-600">
                            {language === 'en'
                              ? "💡 You will receive the return label by email within 5 minutes"
                              : language === 'fr'
                              ? "💡 Vous recevrez l'étiquette de retour par email dans 5 minutes"
                              : '💡 Je ontvangt het retourlabel per email binnen 5 minuten'}
                          </div>
                        </div>
                      )}

                      {feature.mockupType === "carousel" && (
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                            <ShoppingCart className="w-5 h-5 text-primary" />
                            <span className="text-sm">
                              {language === 'en' ? 'Perfect! These also go well with:' : language === 'fr' ? 'Parfait ! Ceux-ci vont aussi bien avec :' : 'Perfect! Deze passen hier ook goed bij:'}
                            </span>
                          </div>
                           <div className="grid grid-cols-3 gap-3">
                             <div className="p-3 border border-border rounded-lg space-y-2">
                               <img src={productCapGreen} alt="Product" className="w-full aspect-square rounded object-cover" />
                               <div className="h-2 bg-muted rounded w-3/4" />
                               <div className="h-2 bg-muted rounded w-1/2" />
                               <div className="flex items-center justify-between">
                                 <span className="text-sm font-semibold text-primary">€39,99</span>
                                 <div className="w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center text-primary text-xs">+</div>
                               </div>
                             </div>
                             <div className="p-3 border-2 border-primary bg-primary/5 rounded-lg space-y-2 relative">
                               <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-primary text-primary-foreground text-xs rounded-full">
                                 {language === 'en' ? 'Popular' : language === 'fr' ? 'Populaire' : 'Populair'}
                               </div>
                               <img src={productJeansBlue} alt="Product" className="w-full aspect-square rounded object-cover" />
                               <div className="h-2 bg-muted rounded w-3/4" />
                               <div className="h-2 bg-muted rounded w-1/2" />
                               <div className="flex items-center justify-between">
                                 <span className="text-sm font-semibold text-primary">€49,99</span>
                                 <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                                   <Check className="w-4 h-4 text-primary-foreground" />
                                 </div>
                               </div>
                             </div>
                             <div className="p-3 border border-border rounded-lg space-y-2">
                               <img src={productSunglassesPink} alt="Product" className="w-full aspect-square rounded object-cover" />
                               <div className="h-2 bg-muted rounded w-3/4" />
                               <div className="h-2 bg-muted rounded w-1/2" />
                               <div className="flex items-center justify-between">
                                 <span className="text-sm font-semibold text-primary">€29,99</span>
                                 <div className="w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center text-primary text-xs">+</div>
                               </div>
                             </div>
                           </div>
                          <div className="flex gap-1 justify-center">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            <div className="w-2 h-2 rounded-full bg-muted" />
                            <div className="w-2 h-2 rounded-full bg-muted" />
                            <div className="w-2 h-2 rounded-full bg-muted" />
                          </div>
                          <div className="p-3 bg-primary/10 rounded-lg text-sm text-primary">
                            {language === 'en' ? '🎁 Order 2 products and get 10% discount' : language === 'fr' ? '🎁 Commandez 2 produits et obtenez 10% de réduction' : '🎁 Bestel 2 producten en krijg 10% korting'}
                          </div>
                        </div>
                      )}

                      {feature.mockupType === "cart-context" && (
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                            <ShoppingCart className="w-5 h-5 text-primary" />
                            <span className="text-sm">
                              {language === 'en' ? 'I see you have 2 items in your shopping cart 🛒' : language === 'fr' ? 'Je vois que vous avez 2 articles dans votre panier 🛒' : 'Ik zie dat je 2 items in je winkelmandje hebt 🛒'}
                            </span>
                          </div>
                           <div className="space-y-3 p-4 border border-border rounded-lg">
                             <div className="flex items-center gap-4 p-3 bg-muted/30 rounded-lg">
                               <img src={productSneakerYellow} alt="Product" className="w-16 h-16 rounded object-cover" />
                               <div className="flex-1">
                                 <div className="h-3 bg-muted rounded w-3/4 mb-2" />
                                 <div className="h-3 bg-muted rounded w-1/2" />
                               </div>
                               <span className="text-primary font-semibold">€49,99</span>
                             </div>
                             <div className="flex items-center gap-4 p-3 bg-muted/30 rounded-lg">
                               <img src={productWatchSilver} alt="Product" className="w-16 h-16 rounded object-cover" />
                               <div className="flex-1">
                                 <div className="h-3 bg-muted rounded w-3/4 mb-2" />
                                 <div className="h-3 bg-muted rounded w-1/2" />
                               </div>
                               <span className="text-primary font-semibold">€29,99</span>
                             </div>
                            <div className="pt-3 border-t border-border flex justify-between items-center">
                              <span className="font-semibold">{language === 'en' ? 'Total' : language === 'fr' ? 'Total' : 'Totaal'}</span>
                              <span className="text-xl font-bold">€79,98</span>
                            </div>
                          </div>
                           <div className="p-4 bg-muted/30 rounded-lg">
                             <div className="text-sm font-semibold mb-3">
                               {language === 'en' ? 'Perfect with your selection:' : language === 'fr' ? 'Parfait avec votre sélection :' : 'Perfect bij jouw selectie:'}
                             </div>
                             <div className="flex items-center gap-3 p-3 bg-background border border-border rounded-lg">
                               <img src={productHeadphonesWhite} alt="Product" className="w-12 h-12 rounded object-cover" />
                               <div className="flex-1">
                                 <div className="h-2 bg-muted rounded w-2/3 mb-2" />
                                 <div className="h-2 bg-muted rounded w-1/2" />
                               </div>
                               <span className="text-sm text-primary font-semibold">€19,99</span>
                               <button className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg">
                                 +
                               </button>
                             </div>
                           </div>
                        </div>
                      )}

                      {feature.mockupType === "cart-recovery" && (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between p-3 bg-orange-500/10 border border-orange-500/30 rounded-lg text-xs">
                            <span className="flex items-center gap-2 text-orange-600 dark:text-orange-400 font-medium">
                              <AlertCircle className="w-4 h-4" />
                              {language === 'en' ? 'Customer leaving checkout page' : language === 'fr' ? 'Client quitte la page de paiement' : 'Klant verlaat checkout pagina'}
                            </span>
                            <span className="flex items-center gap-1">
                              <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                              {language === 'en' ? 'Live detection' : language === 'fr' ? 'Détection en direct' : 'Live detectie'}
                            </span>
                          </div>

                          <div className="relative border-2 border-primary rounded-2xl bg-gradient-to-br from-background to-muted/30 shadow-2xl overflow-hidden">
                            <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-primary/5 to-transparent" />

                            <div className="relative p-6 space-y-4">
                              <div className="flex items-center gap-3 pb-4 border-b border-border">
                                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                                  <Bot className="w-6 h-6 text-primary-foreground" />
                                </div>
                                <div>
                                  <div className="font-semibold text-sm">
                                    {language === 'en' ? 'Glimps Shopping Assistant' : language === 'fr' ? 'Assistant Shopping Glimps' : 'Glimps Shopping Assistent'}
                                  </div>
                                  <div className="text-xs text-green-600 flex items-center gap-1">
                                    <div className="w-2 h-2 rounded-full bg-green-500" />
                                    {language === 'en' ? 'Online now' : language === 'fr' ? 'En ligne maintenant' : 'Online nu'}
                                  </div>
                                </div>
                              </div>

                              <div className="space-y-3">
                                <div className="flex gap-3">
                                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                                    <Bot className="w-4 h-4 text-primary" />
                                  </div>
                                  <div className="flex-1 space-y-2">
                                    <div className="bg-primary/10 border border-primary/20 rounded-2xl rounded-tl-sm p-4">
                                      <p className="text-sm font-semibold mb-2">
                                        {language === 'en' ? 'Hey! I see you\'re about to leave 👋' : language === 'fr' ? 'Hey ! Je vois que vous êtes sur le point de partir 👋' : 'Hey! Ik zie dat je op het punt staat om te vertrekken 👋'}
                                      </p>
                                      <p className="text-sm text-muted-foreground">
                                        {language === 'en'
                                          ? 'Is there something I can help you with? I\'m ready to answer all your questions!'
                                          : language === 'fr'
                                          ? 'Y a-t-il quelque chose avec quoi je peux vous aider ? Je suis prêt à répondre à toutes vos questions !'
                                          : 'Is er iets waar ik je mee kan helpen? Ik sta klaar om al je vragen te beantwoorden!'}
                                      </p>
                                    </div>
                                    <div className="text-xs text-muted-foreground px-2">
                                      {language === 'en' ? 'Just now' : language === 'fr' ? 'À l\'instant' : 'Zojuist'}
                                    </div>
                                  </div>
                                </div>

                                <div className="space-y-2 p-4 bg-muted/30 rounded-xl">
                                  <div className="text-xs font-semibold text-muted-foreground mb-3">
                                    {language === 'en' ? 'Your shopping cart (2 items):' : language === 'fr' ? 'Votre panier (2 articles) :' : 'Je winkelmandje (2 items):'}
                                  </div>
                                  <div className="flex items-center gap-3 p-2 bg-background rounded-lg">
                                    <img src={productHoodieGray} alt="Product" className="w-12 h-12 rounded object-cover" />
                                    <div className="flex-1 min-w-0">
                                      <div className="text-xs font-medium truncate">Premium Hoodie</div>
                                      <div className="text-xs text-muted-foreground">
                                        {language === 'en' ? 'Size L • €59,99' : language === 'fr' ? 'Taille L • €59,99' : 'Maat L • €59,99'}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-3 p-2 bg-background rounded-lg">
                                    <img src={productTshirtBlack} alt="Product" className="w-12 h-12 rounded object-cover" />
                                    <div className="flex-1 min-w-0">
                                      <div className="text-xs font-medium truncate">Classic T-shirt</div>
                                      <div className="text-xs text-muted-foreground">
                                        {language === 'en' ? 'Size M • €24,99' : language === 'fr' ? 'Taille M • €24,99' : 'Maat M • €24,99'}
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="bg-muted/20 rounded-xl p-3 space-y-2">
                                  <div className="text-xs font-semibold mb-2">
                                    {language === 'en' ? 'Frequently asked questions:' : language === 'fr' ? 'Questions fréquentes :' : 'Veelgestelde vragen:'}
                                  </div>
                                  <button className="w-full text-left text-xs bg-background hover:bg-muted/50 border border-border rounded-lg p-3 transition-colors flex items-center justify-between group">
                                    <span>{language === 'en' ? 'What are the shipping costs?' : language === 'fr' ? 'Quels sont les frais de livraison ?' : 'Wat zijn de verzendkosten?'}</span>
                                    <ChevronRight className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors" />
                                  </button>
                                  <button className="w-full text-left text-xs bg-background hover:bg-muted/50 border border-border rounded-lg p-3 transition-colors flex items-center justify-between group">
                                    <span>{language === 'en' ? 'Can I also return this?' : language === 'fr' ? 'Puis-je aussi le retourner ?' : 'Kan ik dit ook retourneren?'}</span>
                                    <ChevronRight className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors" />
                                  </button>
                                  <button className="w-full text-left text-xs bg-background hover:bg-muted/50 border border-border rounded-lg p-3 transition-colors flex items-center justify-between group">
                                    <span>{language === 'en' ? 'When will this be delivered?' : language === 'fr' ? 'Quand sera-t-il livré ?' : 'Wanneer wordt dit geleverd?'}</span>
                                    <ChevronRight className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors" />
                                  </button>
                                </div>

                                <div className="flex gap-2 pt-2">
                                  <input
                                    type="text"
                                    placeholder={language === 'en' ? 'Ask your question...' : language === 'fr' ? 'Posez votre question...' : 'Stel je vraag...'}
                                    className="flex-1 text-sm px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                                  />
                                  <button className="px-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors">
                                    <Send className="w-4 h-4" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 text-xs text-muted-foreground p-3 bg-primary/5 border border-primary/20 rounded-lg">
                            <Zap className="w-4 h-4 text-primary" />
                            <span>
                              {language === 'en'
                                ? 'Bot automatically opens when checkout abandonment is detected'
                                : language === 'fr'
                                ? 'Le bot s\'ouvre automatiquement lorsqu\'un abandon de paiement est détecté'
                                : 'Bot springt automatisch open wanneer checkout-verlating wordt gedetecteerd'}
                            </span>
                          </div>
                        </div>
                      )}

                      {feature.mockupType === "product-search" && (
                        <div className="space-y-4">
                          <div className="p-3 border-2 border-primary rounded-xl">
                            <MessageSquare className="w-4 h-4 text-primary mb-2" />
                            <span className="text-sm">
                              {language === 'en' ? 'I\'m looking for a red winter jacket, size M' : language === 'fr' ? 'Je cherche une veste d\'hiver rouge, taille M' : 'Ik zoek een rode winterjas, maat M'}
                            </span>
                          </div>
                          <div className="p-4 bg-muted/30 rounded-xl space-y-2">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Search className="w-4 h-4" />
                              <span>{language === 'en' ? 'Searching through 2,847 products...' : language === 'fr' ? 'Recherche dans 2.847 produits...' : 'Zoeken in 2.847 producten...'}</span>
                            </div>
                            <div className="text-sm font-semibold">
                              {language === 'en' ? 'I found 3 perfect options! 🎯' : language === 'fr' ? 'J\'ai trouvé 3 options parfaites ! 🎯' : 'Ik heb 3 perfecte opties gevonden! 🎯'}
                            </div>
                          </div>
                           <div className="space-y-3">
                             <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg">
                               <img src={productJacketRed} alt="Product" className="w-16 h-16 rounded object-cover" />
                               <div className="flex-1">
                                 <div className="h-3 bg-muted rounded w-3/4 mb-2" />
                                 <div className="h-3 bg-muted rounded w-1/2 mb-2" />
                                 <div className="flex items-center gap-2">
                                   <Badge variant="secondary" className="text-xs bg-primary/20 text-primary border-0">
                                     {language === 'en' ? 'Size M' : language === 'fr' ? 'Taille M' : 'Maat M'}
                                   </Badge>
                                   <Badge variant="secondary" className="text-xs bg-green-500/20 text-green-600 border-0">
                                     {language === 'en' ? 'In stock' : language === 'fr' ? 'En stock' : 'Op voorraad'}
                                   </Badge>
                                 </div>
                               </div>
                               <div className="text-right">
                                 <div className="text-lg font-bold text-primary">€89,99</div>
                                 <div className="flex gap-0.5">
                                   {[1,2,3,4,5].map(i => (
                                     <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                   ))}
                                 </div>
                               </div>
                             </div>
                             <div className="flex items-center gap-3 p-3 border border-border rounded-lg">
                               <img src={productTotebagBeige} alt="Product" className="w-16 h-16 rounded object-cover" />
                               <div className="flex-1">
                                 <div className="h-3 bg-muted rounded w-3/4 mb-2" />
                                 <div className="h-3 bg-muted rounded w-1/2" />
                               </div>
                               <span className="text-primary font-semibold">€79,99</span>
                             </div>
                             <div className="flex items-center gap-3 p-3 border border-border rounded-lg">
                               <img src={productWalletBlack} alt="Product" className="w-16 h-16 rounded object-cover" />
                               <div className="flex-1">
                                 <div className="h-3 bg-muted rounded w-3/4 mb-2" />
                                 <div className="h-3 bg-muted rounded w-1/2" />
                               </div>
                               <span className="text-primary font-semibold">€99,99</span>
                             </div>
                           </div>
                        </div>
                      )}

                      {feature.mockupType === "product-carousel" && (
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-xl">
                            <Layout className="w-5 h-5 text-primary" />
                            <span className="text-sm font-medium">
                              {language === 'en' ? 'I found a selection of products for you:' : language === 'fr' ? 'J\'ai trouvé une sélection de produits pour vous :' : 'Ik heb een selectie producten voor je gevonden:'}
                            </span>
                          </div>

                          <div className="relative">
                            <div className="overflow-x-auto pb-4 scrollbar-hide">
                              <div className="flex gap-4 min-w-max px-1">
                                <div className="w-64 bg-background border-2 border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors">
                                  <div className="bg-muted/30 p-4 flex items-center justify-center">
                                    <img src={productSneakerBlue} alt="Product 1" className="w-full h-40 object-contain" />
                                  </div>
                                  <div className="p-4 space-y-3">
                                    <div className="flex items-center justify-between">
                                      <Badge className="bg-primary/20 text-primary hover:bg-primary/20">
                                        {language === 'en' ? '15% discount' : language === 'fr' ? '15% de réduction' : '15% korting'}
                                      </Badge>
                                      <div className="flex items-center gap-1">
                                        {[1,2,3,4,5].map(i => (
                                          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                        ))}
                                      </div>
                                    </div>
                                    <div>
                                      <h4 className="font-semibold text-base mb-1">Classic Sneakers</h4>
                                      <p className="text-xs text-muted-foreground line-clamp-2">
                                        {language === 'en'
                                          ? 'Comfortable sneakers with premium material and modern look'
                                          : language === 'fr'
                                          ? 'Sneakers confortables avec matériaux premium et look moderne'
                                          : 'Comfortabele sneakers met premium materiaal en moderne uitstraling'}
                                      </p>
                                    </div>
                                    <div className="flex items-center justify-between pt-2 border-t border-border">
                                      <div className="text-lg font-bold text-primary">€89,99</div>
                                      <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors">
                                        {language === 'en' ? 'View product' : language === 'fr' ? 'Voir le produit' : 'Bekijk product'}
                                      </button>
                                    </div>
                                  </div>
                                </div>

                                <div className="w-64 bg-background border-2 border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors">
                                  <div className="bg-muted/30 p-4 flex items-center justify-center">
                                    <img src={productJacketRed} alt="Product 2" className="w-full h-40 object-contain" />
                                  </div>
                                  <div className="p-4 space-y-3">
                                    <div className="flex items-center justify-between">
                                      <Badge className="bg-green-500/20 text-green-600 hover:bg-green-500/20">{language === 'en' ? 'In stock' : language === 'fr' ? 'En stock' : 'Op voorraad'}</Badge>
                                      <div className="flex items-center gap-1">
                                        {[1,2,3,4].map(i => (
                                          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                        ))}
                                        <Star className="w-3 h-3 text-muted-foreground" />
                                      </div>
                                    </div>
                                    <div>
                                      <h4 className="font-semibold text-base mb-1">Winterjas Premium</h4>
                                      <p className="text-xs text-muted-foreground line-clamp-2">
                                        {language === 'en' ? 'Warm winter jacket with water-repellent fabric, perfect for cold days' : language === 'fr' ? 'Veste d\'hiver chaude avec tissu déperlant, parfaite pour les jours froids' : 'Warme winterjas met waterafstotende stof, perfect voor koude dagen'}
                                      </p>
                                    </div>
                                    <div className="flex items-center justify-between pt-2 border-t border-border">
                                      <div className="text-lg font-bold text-primary">€149,99</div>
                                      <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors">
                                        {language === 'en' ? 'View product' : language === 'fr' ? 'Voir le produit' : 'Bekijk product'}
                                      </button>
                                    </div>
                                  </div>
                                </div>

                                <div className="w-64 bg-background border-2 border-primary/50 rounded-xl overflow-hidden relative">
                                  <div className="absolute top-2 right-2 z-10">
                                    <Badge className="bg-primary text-primary-foreground">{language === 'en' ? 'Popular' : language === 'fr' ? 'Populaire' : 'Populair'}</Badge>
                                  </div>
                                  <div className="bg-muted/30 p-4 flex items-center justify-center">
                                    <img src={productHeadphonesWhite} alt="Product 3" className="w-full h-40 object-contain" />
                                  </div>
                                  <div className="p-4 space-y-3">
                                    <div className="flex items-center justify-between">
                                      <Badge className="bg-green-500/20 text-green-600 hover:bg-green-500/20">{language === 'en' ? 'In stock' : language === 'fr' ? 'En stock' : 'Op voorraad'}</Badge>
                                      <div className="flex items-center gap-1">
                                        {[1,2,3,4,5].map(i => (
                                          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                        ))}
                                      </div>
                                    </div>
                                    <div>
                                      <h4 className="font-semibold text-base mb-1">Wireless Headphones</h4>
                                      <p className="text-xs text-muted-foreground line-clamp-2">
                                        {language === 'en' ? 'Premium sound quality with noise cancelling and 30 hour battery' : language === 'fr' ? 'Qualité sonore premium avec réduction de bruit et 30 heures de batterie' : 'Premium geluidskwaliteit met noise cancelling en 30 uur batterij'}
                                      </p>
                                    </div>
                                    <div className="flex items-center justify-between pt-2 border-t border-border">
                                      <div className="text-lg font-bold text-primary">€129,99</div>
                                      <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors">
                                        {language === 'en' ? 'View product' : language === 'fr' ? 'Voir le produit' : 'Bekijk product'}
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center justify-center gap-2 mt-3">
                              <div className="w-2 h-2 rounded-full bg-primary" />
                              <div className="w-2 h-2 rounded-full bg-muted" />
                              <div className="w-2 h-2 rounded-full bg-muted" />
                            </div>
                          </div>

                          <div className="p-4 bg-muted/30 rounded-xl">
                            <p className="text-sm text-muted-foreground">
                              {language === 'en' ? 'Would you like to know more about a specific product or have a question for a certain budget?' : language === 'fr' ? 'Voulez-vous en savoir plus sur un produit spécifique ou avez-vous une question pour un certain budget ?' : 'Wil je meer weten over een specifiek product of heb je een vraag voor een bepaald budget?'}
                            </p>
                          </div>
                        </div>
                      )}

                      {feature.mockupType === "upsell" && (
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                            <TrendingUp className="w-5 h-5 text-primary" />
                            <span className="text-sm">
                              {language === 'en' ? 'Great choice! Did you know these are often bought together? 🎁' : language === 'fr' ? 'Super choix ! Saviez-vous que ceux-ci sont souvent achetés ensemble ? 🎁' : 'Super keuze! Wist je dat deze vaak samen worden gekocht? 🎁'}
                            </span>
                          </div>
                           <div className="p-4 border-2 border-primary/30 rounded-lg space-y-3">
                             <div className="flex items-center gap-3 p-3 bg-background rounded-lg">
                               <img src={productYogamatPurple} alt="Product" className="w-16 h-16 rounded object-cover" />
                               <div className="flex-1">
                                 <div className="h-2 bg-muted rounded w-3/4 mb-2" />
                                 <div className="h-2 bg-muted rounded w-1/2" />
                               </div>
                               <span className="text-primary font-semibold">€49,99</span>
                             </div>
                             <div className="p-3 bg-gradient-to-r from-purple-500/10 to-purple-500/5 border border-purple-500/20 rounded-lg">
                               <div className="flex items-center justify-between mb-2">
                                 <Badge className="bg-primary text-primary-foreground">Premium</Badge>
                                 <span className="text-xs text-muted-foreground">
                                   {language === 'en' ? '+€20 for better quality' : language === 'fr' ? '+€20 pour une meilleure qualité' : '+€20 voor betere kwaliteit'}
                                 </span>
                               </div>
                               <div className="flex items-center gap-3">
                                 <img src={productYogamatPurple} alt="Premium Product" className="w-16 h-16 rounded object-cover" />
                                 <div className="flex-1">
                                   <div className="h-2 bg-muted rounded w-3/4 mb-2" />
                                   <div className="h-2 bg-muted rounded w-1/2" />
                                 </div>
                                 <div>
                                   <div className="text-xs text-muted-foreground line-through">€69,99</div>
                                   <div className="text-primary font-semibold">€59,99</div>
                                 </div>
                                 <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold">
                                   {language === 'en' ? 'Upgrade' : language === 'fr' ? 'Améliorer' : 'Upgrade'}
                                 </button>
                               </div>
                             </div>
                           </div>
                           <div className="p-4 border-2 border-primary rounded-lg bg-primary/5">
                             <div className="flex justify-between items-center mb-3">
                               <span className="font-semibold">
                                 {language === 'en' ? 'Often bought together' : language === 'fr' ? 'Souvent achetés ensemble' : 'Vaak samen gekocht'}
                               </span>
                               <Badge variant="secondary" className="bg-green-500/20 text-green-600">
                                 {language === 'en' ? 'Save €15' : language === 'fr' ? 'Économisez €15' : 'Bespaar €15'}
                               </Badge>
                             </div>
                             <div className="flex gap-2 mb-3">
                               <div className="flex-1 p-2 bg-background rounded border border-border">
                                 <img src={productSneakerWhite} alt="Product" className="w-full aspect-square rounded object-cover mb-2" />
                                 <div className="text-center text-xs">+</div>
                               </div>
                               <div className="flex-1 p-2 bg-background rounded border border-border">
                                 <img src={productHeadphonesWhite} alt="Product" className="w-full aspect-square rounded object-cover mb-2" />
                                 <div className="text-center text-xs">+</div>
                               </div>
                             </div>
                            <div className="flex justify-between items-center pt-3 border-t border-border">
                              <div>
                                <div className="text-xs text-muted-foreground line-through">€99,97</div>
                                <div className="text-xl font-bold text-primary">€84,97</div>
                              </div>
                              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold">
                                {language === 'en' ? 'Add' : language === 'fr' ? 'Ajouter' : 'Voeg toe'}
                              </button>
                            </div>
                          </div>
                        </div>
                      )}

                      {feature.mockupType === "lead-collection" && (
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                            <Users className="w-5 h-5 text-primary" />
                            <span className="text-sm">
                              {language === 'en' ? 'Would you like to stay informed about new collections? 💌' : language === 'fr' ? 'Voulez-vous rester informé des nouvelles collections ? 💌' : 'Wil je op de hoogte blijven van nieuwe collecties? 💌'}
                            </span>
                          </div>
                          <div className="p-4 border border-border rounded-lg space-y-4">
                            <div>
                              <label className="text-sm font-medium mb-2 block">Email</label>
                              <div className="h-10 bg-muted rounded flex items-center px-3">
                                <div className="h-2 bg-muted-foreground/30 rounded w-32" />
                              </div>
                            </div>
                            <div>
                              <label className="text-sm font-medium mb-2 block">
                                {language === 'en' ? 'What are your interests?' : language === 'fr' ? 'Quels sont vos intérêts ?' : 'Wat zijn je interesses?'}
                              </label>
                              <div className="flex gap-2">
                                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
                                  {language === 'en' ? 'Women\'s fashion' : language === 'fr' ? 'Mode femme' : 'Damesmode'}
                                </button>
                                <button className="px-4 py-2 border border-border rounded-full text-sm hover:bg-muted/50">
                                  {language === 'en' ? 'Men\'s fashion' : language === 'fr' ? 'Mode homme' : 'Herenmode'}
                                </button>
                                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
                                  {language === 'en' ? 'Accessories' : language === 'fr' ? 'Accessoires' : 'Accessoires'}
                                </button>
                              </div>
                            </div>
                            <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold">
                              {language === 'en' ? 'Sign up' : language === 'fr' ? 'S\'inscrire' : 'Aanmelden'}
                            </button>
                          </div>
                          <div className="p-4 bg-muted/30 rounded-lg">
                            <div className="flex items-center gap-2 mb-3">
                              <span className="text-sm font-semibold">
                                {language === 'en' ? 'Lead Quality' : language === 'fr' ? 'Qualité des leads' : 'Lead Kwaliteit'}
                              </span>
                              <TrendingUp className="w-4 h-4 text-green-500" />
                            </div>
                            <div className="grid grid-cols-3 gap-3">
                              <div className="text-center">
                                <div className="text-2xl font-bold text-primary">342</div>
                                <div className="text-xs text-muted-foreground">Leads</div>
                              </div>
                              <div className="text-center">
                                <div className="text-2xl font-bold text-primary">78%</div>
                                <div className="text-xs text-muted-foreground">
                                  {language === 'en' ? 'Quality' : language === 'fr' ? 'Qualité' : 'Kwaliteit'}
                                </div>
                              </div>
                              <div className="text-center">
                                <div className="text-2xl font-bold text-primary">23%</div>
                                <div className="text-xs text-muted-foreground">
                                  {language === 'en' ? 'Conversion' : language === 'fr' ? 'Conversion' : 'Conversie'}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {feature.mockupType === "quick-replies" && (
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                            <Zap className="w-5 h-5 text-primary" />
                            <span className="text-sm">
                              {language === 'en' ? 'How can I help you? Choose an option:' : language === 'fr' ? 'Comment puis-je vous aider ? Choisissez une option :' : 'Hoe kan ik je helpen? Kies een optie:'}
                            </span>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <button className="p-4 border-2 border-primary bg-primary/5 rounded-xl text-left hover:bg-primary/10 transition-colors">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-2xl">📦</span>
                                <span className="font-semibold text-sm">
                                  {language === 'en' ? 'Track package' : language === 'fr' ? 'Suivre le colis' : 'Track pakket'}
                                </span>
                              </div>
                            </button>
                            <button className="p-4 border border-border rounded-xl text-left hover:bg-muted/50 transition-colors">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-2xl">🔄</span>
                                <span className="font-semibold text-sm">
                                  {language === 'en' ? 'Start return' : language === 'fr' ? 'Démarrer un retour' : 'Retour starten'}
                                </span>
                              </div>
                            </button>
                            <button className="p-4 border border-border rounded-xl text-left hover:bg-muted/50 transition-colors">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-2xl">👕</span>
                                <span className="font-semibold text-sm">
                                  {language === 'en' ? 'Search product' : language === 'fr' ? 'Rechercher un produit' : 'Product zoeken'}
                                </span>
                              </div>
                            </button>
                            <button className="p-4 border border-border rounded-xl text-left hover:bg-muted/50 transition-colors">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-2xl">💬</span>
                                <span className="font-semibold text-sm">
                                  {language === 'en' ? 'Ask a question' : language === 'fr' ? 'Poser une question' : 'Vraag stellen'}
                                </span>
                              </div>
                            </button>
                          </div>
                          <div className="p-4 bg-muted/30 rounded-lg">
                            <div className="text-sm text-muted-foreground mb-3">
                              {language === 'en' ? 'For which product would you like to check the status?' : language === 'fr' ? 'Pour quel produit voulez-vous vérifier le statut ?' : 'Voor welk product wil je de status checken?'}
                            </div>
                            <div className="flex gap-2">
                              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
                                {language === 'en' ? 'Order #8473' : language === 'fr' ? 'Commande #8473' : 'Bestelling #8473'}
                              </button>
                              <button className="px-4 py-2 border border-border rounded-full text-sm hover:bg-muted/50">
                                {language === 'en' ? 'Order #8401' : language === 'fr' ? 'Commande #8401' : 'Bestelling #8401'}
                              </button>
                              <button className="px-4 py-2 border border-border rounded-full text-sm hover:bg-muted/50">
                                {language === 'en' ? 'Other' : language === 'fr' ? 'Autre' : 'Anders'}
                              </button>
                            </div>
                          </div>
                        </div>
                      )}

                      {feature.mockupType === "api" && (
                        <div className="space-y-4">
                          <div className="p-4 bg-foreground text-background rounded-xl space-y-3 font-mono text-xs">
                            <div className="flex items-center gap-2 text-green-400">
                              <Code className="w-4 h-4" />
                              <span>API Documentation</span>
                            </div>
                            <div className="text-purple-300">POST /api/v1/chat</div>
                            <div className="pl-2 text-muted">{'{'}</div>
                            <div className="pl-4">
                              <span className="text-blue-300">"message"</span>: <span className="text-green-300">"Wat is de status?"</span>,
                            </div>
                            <div className="pl-4">
                              <span className="text-blue-300">"userId"</span>: <span className="text-green-300">"usr_123"</span>,
                            </div>
                            <div className="pl-4">
                              <span className="text-blue-300">"context"</span>: {'{'}
                            </div>
                            <div className="pl-6">
                              <span className="text-blue-300">"cartId"</span>: <span className="text-green-300">"cart_456"</span>,
                            </div>
                            <div className="pl-6">
                              <span className="text-blue-300">"orderId"</span>: <span className="text-green-300">"ord_789"</span>
                            </div>
                            <div className="pl-4">{'}'}</div>
                            <div className="pl-2">{'}'}</div>
                            <div className="border-t border-muted-foreground/20 pt-2 mt-2">
                              <div className="text-green-400">● 200 OK</div>
                            </div>
                            <div className="pl-2 text-muted">{'{'}</div>
                            <div className="pl-4">
                              <span className="text-blue-300">"response"</span>: <span className="text-green-300">"Je pakket..."</span>,
                            </div>
                            <div className="pl-4">
                              <span className="text-blue-300">"buttons"</span>: [...]
                            </div>
                            <div className="pl-2">{'}'}</div>
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            <div className="p-3 border border-border rounded-lg text-center">
                              <div className="w-8 h-8 mx-auto mb-2 bg-gradient-to-br from-green-500 to-green-600 rounded flex items-center justify-center text-xl">
                                🛍️
                              </div>
                              <div className="text-xs font-semibold">Shopify</div>
                            </div>
                            <div className="p-3 border border-border rounded-lg text-center">
                              <div className="w-8 h-8 mx-auto mb-2 bg-gradient-to-br from-purple-500 to-purple-600 rounded flex items-center justify-center text-xl">
                                💎
                              </div>
                              <div className="text-xs font-semibold">WooCommerce</div>
                            </div>
                            <div className="p-3 border border-border rounded-lg text-center">
                              <div className="w-8 h-8 mx-auto mb-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded flex items-center justify-center text-xl">
                                ⚡
                              </div>
                              <div className="text-xs font-semibold">Custom API</div>
                            </div>
                          </div>
                          <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-sm text-green-700 dark:text-green-400">
                            <div className="flex items-center gap-2">
                              <Zap className="w-4 h-4" />
                              <span className="font-semibold">Webhook events voor realtime synchronisatie</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {feature.mockupType === "insights" && (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="font-semibold">
                              {language === 'en' ? 'Dashboard Insights' : language === 'fr' ? 'Insights du tableau de bord' : 'Dashboard Inzichten'}
                            </h3>
                            <select className="text-sm border border-border rounded px-3 py-1">
                              <option>{language === 'en' ? 'Last 7 days' : language === 'fr' ? 'Derniers 7 jours' : 'Laatste 7 dagen'}</option>
                            </select>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="p-4 border border-border rounded-lg">
                              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                                <MessageSquare className="w-4 h-4" />
                                {language === 'en' ? 'Conversations' : language === 'fr' ? 'Conversations' : 'Conversaties'}
                              </div>
                              <div className="text-2xl font-bold">2,847</div>
                              <div className="text-sm text-green-500">↗ +23%</div>
                            </div>
                            <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                                📊 {language === 'en' ? 'Satisfaction' : language === 'fr' ? 'Satisfaction' : 'Tevredenheid'}
                              </div>
                              <div className="text-2xl font-bold">89%</div>
                              <div className="text-sm text-green-500">↗ +5%</div>
                            </div>
                          </div>
                          <div className="p-4 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg">
                            <div className="flex items-start gap-3 mb-3">
                              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                                <Inbox className="w-5 h-5 text-primary" />
                              </div>
                              <div>
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="font-semibold">
                                    {language === 'en' ? 'AI Insight' : language === 'fr' ? 'Insight IA' : 'AI Inzicht'}
                                  </span>
                                  <Badge variant="secondary" className="text-xs">
                                    {language === 'en' ? 'New' : language === 'fr' ? 'Nouveau' : 'Nieuw'}
                                  </Badge>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                  {language === 'en'
                                    ? 'Many customers ask about shipping costs. Consider free shipping from €50 to increase conversion.'
                                    : language === 'fr'
                                    ? 'De nombreux clients posent des questions sur les frais de livraison. Envisagez la livraison gratuite à partir de €50 pour augmenter la conversion.'
                                    : 'Veel klanten vragen naar verzendkosten. Overweeg gratis verzending vanaf €50 om conversie te verhogen.'}
                                </p>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors">
                                {language === 'en' ? 'Implement' : language === 'fr' ? 'Implémenter' : 'Implementeer'}
                              </button>
                              <button className="px-4 py-2 border border-border rounded-lg text-sm hover:bg-muted/50 transition-colors">
                                {language === 'en' ? 'More info' : language === 'fr' ? 'Plus d\'info' : 'Meer info'}
                              </button>
                            </div>
                          </div>
                          <div className="p-4 border border-border rounded-lg">
                            <div className="text-sm font-semibold mb-3">
                              {language === 'en' ? 'Top questions this week' : language === 'fr' ? 'Questions principales cette semaine' : 'Top vragen deze week'}
                            </div>
                            <div className="space-y-3">
                              <div>
                                <div className="flex justify-between text-sm mb-1">
                                  <span>{language === 'en' ? 'Shipping costs' : language === 'fr' ? 'Frais de livraison' : 'Verzendkosten'}</span>
                                  <span className="font-semibold">287x</span>
                                </div>
                                <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
                                  <div className="h-full bg-primary rounded-full" style={{width: '85%'}} />
                                </div>
                              </div>
                              <div>
                                <div className="flex justify-between text-sm mb-1">
                                  <span>{language === 'en' ? 'Return policy' : language === 'fr' ? 'Politique de retour' : 'Retourbeleid'}</span>
                                  <span className="font-semibold">183x</span>
                                </div>
                                <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
                                  <div className="h-full bg-primary rounded-full" style={{width: '55%'}} />
                                </div>
                              </div>
                              <div>
                                <div className="flex justify-between text-sm mb-1">
                                  <span>{language === 'en' ? 'Delivery time' : language === 'fr' ? 'Délai de livraison' : 'Levertijd'}</span>
                                  <span className="font-semibold">156x</span>
                                </div>
                                <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
                                  <div className="h-full bg-primary rounded-full" style={{width: '45%'}} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-32 text-center">
            <div className="inline-flex flex-col items-center gap-4 p-8 rounded-3xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
              <h3 className="font-inter text-2xl font-semibold">
                {language === 'en' ? "Ready to get started?" : language === 'en'
          ? "Prêt à commencer ?"
          : language === 'fr'
          ? "Prêt à commencer ?"
          : "Klaar om te beginnen?"}
              </h3>
              <p className="text-muted-foreground max-w-md">
                {language === 'en'
                  ? "Discover how our AI chatbot elevates your e-commerce customer service to the next level."
                  : language === 'fr'
                  ? "Découvrez comment notre chatbot IA élève votre service client e-commerce à un niveau supérieur."
                  : "Ontdek hoe onze AI-chatbot jouw e-commerce klantenservice naar een hoger niveau tilt."
                }
              </p>
              <a href={language === 'en' ? "/en/contact" : language === 'en'
          ? "/fr/contact"
          : language === 'fr'
          ? "/fr/contact"
          : "/contact"} className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-semibold transition-colors inline-block">
                {language === 'en' ? "Sign up for free" : language === 'en'
          ? "S'inscrire gratuitement"
          : language === 'fr'
          ? "S'inscrire gratuitement"
          : "Gratis aanmelden"}
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Features;
