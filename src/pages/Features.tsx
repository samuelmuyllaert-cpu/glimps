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
      badge: language === 'fr' ? "BOT DE PAIEMENT" : "CHECKOUT BOT",
      title: language === 'fr' ? "Guidez les clients vers un achat réussi" : "Begeleid klanten naar een succesvolle aankoop",
      description: language === 'fr' ? "Notre bot de paiement aide les clients tout au long du processus de commande avec des suggestions intelligentes, des informations produits directes et une gestion fluide. Augmentez votre conversion jusqu'à 40%." : "Onze checkout bot helpt klanten door het bestelproces met slimme suggesties, directe productinformatie en een naadloze afhandeling. Verhoog je conversie met tot 40%.",
      benefits: language === 'fr' ? [
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
      badge: language === 'fr' ? "CONTEXTE DU PANIER" : "WINKELMANDJE CONTEXT",
      title: language === 'fr' ? "Le bot sait exactement ce qui se trouve dans le panier" : "De bot weet precies wat er in het winkelmandje zit",
      description: language === 'fr' ? "Notre chatbot a un accès en temps réel au contenu du panier et peut guider les clients avec des suggestions ciblées, des réductions et des informations produits basées sur leur sélection actuelle." : "Onze chatbot heeft realtime toegang tot de winkelmandje inhoud en kan klanten begeleiden met gerichte suggesties, kortingen en productinformatie op basis van hun huidige selectie.",
      benefits: language === 'fr' ? [
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
      badge: language === 'fr' ? "INTERVENTION PAIEMENT" : "CHECKOUT INTERVENTIE",
      title: language === 'fr' ? "Intervenez directement lorsque les clients quittent le paiement" : "Grijp direct in wanneer klanten de checkout verlaten",
      description: language === 'fr' ? "Le chatbot détecte quand un client quitte la page de paiement et s'ouvre automatiquement pour l'aider. Pas besoin de réduction - juste la bonne aide au bon moment. Résolvez les objections, répondez aux questions et guidez les clients vers un achat réussi." : "De chatbot detecteert wanneer een klant de checkout pagina verlaat en springt automatisch open om te helpen. Geen korting nodig - gewoon het juiste hulp op het juiste moment. Los bezwaren op, beantwoord vragen en begeleid klanten alsnog naar een succesvolle aankoop.",
      benefits: language === 'fr' ? [
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
      badge: language === 'fr' ? "RECHERCHE PRODUIT INTELLIGENTE" : "SLIMME PRODUCT ZOEKER",
      title: language === 'fr' ? "L'IA recherche automatiquement les produits parfaits" : "AI zoekt automatisch de perfecte producten",
      description: language === 'fr' ? "Le chatbot parcourt intelligemment votre base de données produits complète et trouve exactement ce que les clients recherchent en fonction de la couleur, de la taille, du prix, de la catégorie et de la disponibilité. Utilisez le langage naturel, aucun filtre de recherche nécessaire." : "De chatbot doorzoekt intelligent je volledige productdatabase en vindt precies wat klanten zoeken op basis van kleur, maat, prijs, categorie en beschikbaarheid. Gebruik natuurlijke taal, geen zoekfilters nodig.",
      benefits: language === 'fr' ? [
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
      badge: language === 'fr' ? "CARROUSEL PRODUITS" : "PRODUCT CAROUSEL",
      title: language === 'fr' ? "Affichez les produits dans un carrousel visuellement attrayant" : "Toon producten in een visueel aantrekkelijke carousel",
      description: language === 'fr' ? "Le chatbot présente les produits dans un magnifique carrousel avec des cartes produits claires. Les clients voient immédiatement les images des produits, les spécifications et peuvent faire défiler plusieurs options - parfait pour les aperçus et comparaisons de produits." : "De chatbot presenteert producten in een prachtige carousel weergave met heldere productkaarten. Klanten zien direct productafbeeldingen, specificaties en kunnen door meerdere opties scrollen - perfect voor productoverzichten en vergelijkingen.",
      benefits: language === 'fr' ? [
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
      badge: language === 'fr' ? "VENTE INCITATIVE ET CROISÉE" : "UPSELL & CROSS-SELL",
      title: language === 'fr' ? "Augmentez votre valeur moyenne de commande de 40%" : "Verhoog je gemiddelde orderwaarde met 40%",
      description: language === 'fr' ? "Notre IA reconnaît le moment parfait pour suggérer des produits supplémentaires. Des bundles aux variantes premium - toujours pertinent et jamais intrusif." : "Onze AI herkent het perfecte moment om aanvullende producten voor te stellen. Van bundels tot premium varianten - altijd relevant en nooit opdringerig.",
      benefits: language === 'fr' ? [
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
      badge: language === 'fr' ? "INTERACTION VOCALE" : "SPRAAK INTERACTIE",
      title: language === 'fr' ? "Parlez au bot, obtenez des réponses directes" : "Praat tegen de bot, krijg directe antwoorden",
      description: language === 'fr' ? "Les clients peuvent simplement parler au bot via la voix. Le bot transcrit automatiquement et donne des réponses textuelles. Parfait pour le shopping mains libres et les utilisateurs mobiles." : "Klanten kunnen simpelweg tegen de bot praten via spraak. De bot transcribeert automatisch en geeft textuele antwoorden. Perfect voor hands-free winkelen en mobiele gebruikers.",
      benefits: language === 'fr' ? [
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
      badge: language === 'fr' ? "SUPPORT MULTILINGUE" : "MULTILINGUAL SUPPORT",
      title: language === 'fr' ? "Communiquez mondialement dans plus de 50 langues" : "Communiceer wereldwijd in 50+ talen",
      description: language === 'fr' ? "Le chatbot détecte automatiquement la langue de votre client et répond dans la même langue. Parfait pour les boutiques internationales qui servent des clients du monde entier - sans configuration supplémentaire." : "De chatbot detecteert automatisch de taal van je klant en antwoordt in diezelfde taal. Perfect voor internationale webshops die klanten over de hele wereld bedienen - zonder extra configuratie.",
      benefits: language === 'fr' ? [
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
      badge: language === 'fr' ? "SUIVI DE COLIS" : "PAKKET TRACKING",
      title: language === 'fr' ? "Informations de suivi en direct dans le chat" : "Live tracking informatie direct in de chat",
      description: language === 'fr' ? "Les clients peuvent facilement demander l'état de leur colis et recevoir des mises à jour en temps réel. Réduisez les tickets de support de 70%." : "Klanten kunnen eenvoudig hun pakket status opvragen en realtime updates ontvangen. Verminder support tickets met 70%.",
      benefits: language === 'fr' ? [
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
      badge: language === 'fr' ? "GESTION DES RETOURS" : "RETOUR AFHANDELING",
      title: language === 'fr' ? "Rendez les retours simples pour vous et vos clients" : "Maak retouren simpel voor jou en je klanten",
      description: language === 'fr' ? "Automatisez le processus de retour complet avec des questionnaires intelligents, génération directe d'étiquettes et mises à jour automatiques. Augmentez la satisfaction client et réduisez la charge de travail." : "Automatiseer het complete retourproces met slimme vragenlijsten, directe label generatie en automatische updates. Verhoog klanttevredenheid en reduceer werkdruk.",
      benefits: language === 'fr' ? [
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
      badge: language === 'fr' ? "COLLECTE DE LEADS" : "LEAD VERZAMELING",
      title: language === 'fr' ? "Collectez des leads de qualité pendant les conversations" : "Verzamel kwaliteitsvolle leads tijdens gesprekken",
      description: language === 'fr' ? "Transformez chaque conversation en opportunité de collecter des leads. Le bot demande naturellement les coordonnées et les préférences, sans être intrusif." : "Maak van elke conversatie een kans om leads te verzamelen. De bot vraagt op natuurlijke wijze naar contactgegevens en voorkeuren, zonder opdringerig te zijn.",
      benefits: language === 'fr' ? [
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
      badge: language === 'fr' ? "BOUTONS DE RÉPONSE RAPIDE" : "QUICK REPLY BUTTONS",
      title: language === 'fr' ? "Interaction rapide avec réponses en un clic" : "Snelle interactie met één klik antwoorden",
      description: language === 'fr' ? "Facilitez la vie de vos clients avec des boutons visuels et des réponses rapides. Pas besoin de taper - juste cliquer et continuer. Parfait pour les utilisateurs mobiles." : "Maak het makkelijk voor klanten met visuele knoppen en snelle antwoorden. Geen typen nodig - gewoon klikken en doorgaan. Perfect voor mobiele gebruikers.",
      benefits: language === 'fr' ? [
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
      badge: language === 'fr' ? "API & INTÉGRATIONS" : "API & INTEGRATIES",
      title: language === 'fr' ? "Connectez-vous à tous vos systèmes existants" : "Koppel met al je bestaande systemen",
      description: language === 'fr' ? "Intégration transparente avec votre plateforme e-commerce, CRM, helpdesk et plus. Utilisez notre API REST ou des connecteurs prêts à l'emploi pour les plateformes populaires." : "Naadloze integratie met je e-commerce platform, CRM, helpdesk en meer. Gebruik onze REST API of kant-en-klare connectoren voor populaire platforms.",
      benefits: language === 'fr' ? [
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
      badge: language === 'fr' ? "FLUX CONVERSATIONNELS" : "CONVERSATIONAL FLOWS",
      title: language === 'fr' ? "Flux de conversation intelligents qui s'adaptent" : "Intelligente gespreksflows die zich aanpassen",
      description: language === 'fr' ? "Notre IA s'adapte aux besoins de chaque client. Des questions simples aux conseils produits complexes - toujours le bon flux." : "Onze AI past zich aan aan de behoeften van elke klant. Van simpele vragen tot complexe productadvies - altijd de juiste flow.",
      benefits: language === 'fr' ? [
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
      badge: language === 'fr' ? "BOÎTE DE RÉCEPTION IA & INSIGHTS" : "AI INBOX & INZICHTEN",
      title: language === 'fr' ? "Obtenez des insights approfondis avec des analyses alimentées par l'IA" : "Krijg diepgaande inzichten met AI-powered analytics",
      description: language === 'fr' ? "Notre IA analyse toutes les conversations et vous donne des insights actionnables pour améliorer votre service. Posez des questions à l'agent IA sur les tendances et le comportement des clients." : "Onze AI analyseert alle conversaties en geeft je actionable insights om je service te verbeteren. Stel vragen aan de AI agent over trends en klantgedrag.",
      benefits: language === 'fr' ? [
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
      "@id": language === 'fr' ? "https://www.glimps.be/fr/fonctionnalites" : "https://www.glimps.be/features",
      "url": language === 'fr' ? "https://www.glimps.be/fr/fonctionnalites" : "https://www.glimps.be/features",
      "name": language === 'fr' ? "Fonctionnalités - Glimps AI Chatbot" : "Functies - Glimps AI Chatbot",
      "description": language === 'fr' ? "Découvrez toutes les fonctionnalités de Glimps : bot de paiement, suivi de colis, upselling, support multilingue et plus. Chatbot IA complet pour l'e-commerce." : "Ontdek alle functies van Glimps: checkout bot, pakket tracking, upselling, multilingual support en meer. Complete AI chatbot voor e-commerce.",
      "inLanguage": language === 'fr' ? "fr-BE" : "nl-BE",
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
          "item": language === 'fr' ? "https://www.glimps.be/fr" : "https://www.glimps.be/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": language === 'fr' ? "Fonctionnalités" : "Functies",
          "item": language === 'fr' ? "https://www.glimps.be/fr/fonctionnalites" : "https://www.glimps.be/features"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background">
      <SEO
        title={language === 'fr' ? "Fonctionnalités - Glimps AI Chatbot | Solution E-commerce Complète" : "Functies - Glimps AI Chatbot | Complete E-commerce Oplossing"}
        description={language === 'fr' ? "Découvrez toutes les fonctionnalités de Glimps : bot de paiement, suivi de colis, upselling, support multilingue et plus. Chatbot IA complet pour l'e-commerce." : "Ontdek alle functies van Glimps: checkout bot, pakket tracking, upselling, multilingual support en meer. Complete AI chatbot voor e-commerce."}
        path={language === 'fr' ? "/fr/fonctionnalites" : "/features"}
        canonical={language === 'fr' ? "https://www.glimps.be/fr/fonctionnalites" : "https://www.glimps.be/features"}
        keywords={language === 'fr' ? "fonctionnalités chatbot, bot de paiement, suivi de colis, upselling, support multilingue, interaction vocale, fonctionnalités IA" : "chatbot functies, checkout bot, pakket tracking, upselling, multilingual support, spraak interactie, AI features"}
        type="website"
      />
      <StructuredData type="graph" data={graphData} />
      <Navigation />

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="font-inter text-4xl md:text-6xl font-normal mb-6 leading-tight">
              {language === 'fr'
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
                              {language === 'fr' ? 'INTERACTION VOCALE' : 'SPRAAK INTERACTIE'}
                            </span>
                          </div>
                          
                          <div className="p-4 bg-muted/30 rounded-xl border border-primary/20">
                            <div className="flex items-start gap-3 mb-3">
                              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                                <Mic className="w-4 h-4 text-primary" />
                              </div>
                              <div className="flex-1">
                                <div className="text-xs text-muted-foreground mb-2">
                                  {language === 'fr' ? 'À l\'écoute...' : 'Aan het luisteren...'}
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
                                  {language === 'fr'
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
                                  {language === 'fr' ? 'J\'ai compris votre question ! 👍' : 'Ik heb je vraag begrepen! 👍'}
                                </p>
                                <p className="text-sm">
                                  {language === 'fr'
                                    ? 'Laissez-moi chercher la veste d\'hiver rouge parfaite pour vous en taille M...'
                                    : 'Laat me even de perfecte rode winterjas voor je zoeken in maat M...'}
                                </p>

                                 <div className="flex items-center gap-3 p-3 border border-border rounded-lg bg-background">
                                   <img src={productJacketRed} alt="Winterjas" className="w-16 h-16 rounded object-cover" />
                                   <div className="flex-1">
                                    <div className="font-semibold text-sm mb-1">Winterjas Classic</div>
                                    <div className="text-xs text-muted-foreground mb-1">
                                      {language === 'fr' ? 'Taille M' : 'Maat M'}
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <span className="text-primary font-bold">€89,99</span>
                                      <span className="text-xs bg-green-500/20 text-green-600 px-2 py-0.5 rounded">
                                        {language === 'fr' ? 'En stock' : 'Op voorraad'}
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
                              {language === 'fr'
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
                                {language === 'fr' ? 'Chat Multilingue' : 'Multilingual Chat'}
                              </span>
                            </div>
                            <span className="text-xs bg-green-500/20 text-green-600 px-3 py-1 rounded-full font-medium">
                              {language === 'fr' ? 'Détection auto ON' : 'Auto-detect ON'}
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
                                    {language === 'fr' ? 'Néerlandais détecté' : 'Nederlands gedetecteerd'}
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
                                    {language === 'fr' ? 'Anglais détecté' : 'English detected'}
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
                                    {language === 'fr' ? 'Allemand détecté' : 'Deutsch erkannt'}
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
                                    {language === 'fr' ? 'Espagnol détecté' : 'Español detectado'}
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
                                {language === 'fr' ? 'Langues supportées' : 'Ondersteunde talen'}
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-primary mb-1">⚡ &lt;1s</div>
                              <div className="text-xs text-muted-foreground">
                                {language === 'fr' ? 'Temps de détection' : 'Detectietijd'}
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
                              {language === 'fr' ? 'Voulez-vous commander ces articles ?' : 'Wil je deze items bestellen?'}
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
                              <span>{language === 'fr' ? 'Sous-total' : 'Subtotaal'}</span>
                              <span>€79,98</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span>{language === 'fr' ? 'Livraison' : 'Verzending'}</span>
                              <span className="text-green-500">{language === 'fr' ? 'Gratuit' : 'Gratis'}</span>
                            </div>
                            <div className="flex justify-between font-semibold text-lg pt-2">
                              <span>{language === 'fr' ? 'Total' : 'Totaal'}</span>
                              <span>€79,98</span>
                            </div>
                          </div>
                          <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                            {language === 'fr' ? 'Passer au paiement' : 'Naar checkout'}
                          </button>
                        </div>
                      )}

                      {feature.mockupType === "tracking" && (
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                            <Package className="w-5 h-5 text-primary" />
                            <span className="text-sm">
                              {language === 'fr' ? 'Votre colis est en route ! 📦' : 'Je pakket is onderweg! 📦'}
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
                                    {language === 'fr' ? 'Commande reçue' : 'Bestelling ontvangen'}
                                  </div>
                                  <div className="text-sm text-muted-foreground">
                                    {language === 'fr' ? 'Lun 14:23' : 'Ma 14:23'}
                                  </div>
                                </div>
                              </div>
                              <div className="relative">
                                <div className="absolute -left-[29px] w-4 h-4 rounded-full bg-primary" />
                                <div>
                                  <div className="font-semibold">
                                    {language === 'fr' ? 'Au centre de tri' : 'In sorteercentrum'}
                                  </div>
                                  <div className="text-sm text-muted-foreground">
                                    {language === 'fr' ? 'Mar 08:15' : 'Di 08:15'}
                                  </div>
                                </div>
                              </div>
                              <div className="relative">
                                <div className="absolute -left-[29px] w-4 h-4 rounded-full border-2 border-border bg-background" />
                                <div>
                                  <div className="text-muted-foreground">
                                    {language === 'fr' ? 'En route vers vous' : 'Onderweg naar jou'}
                                  </div>
                                  <div className="text-sm text-muted-foreground">
                                    {language === 'fr' ? 'Prévu : Mer avant 18:00' : 'Verwacht: Wo voor 18:00'}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="p-3 bg-primary/10 rounded-lg text-sm text-primary">
                              {language === 'fr' ? '📍 Livraison demain avant 18:00' : '📍 Bezorging morgen voor 18:00'}
                            </div>
                          </div>
                        </div>
                      )}

                      {feature.mockupType === "return" && (
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                            <RotateCcw className="w-5 h-5 text-primary" />
                            <span className="text-sm">
                              {language === 'fr' ? "Je vous aide volontiers avec votre retour" : "Ik help je graag met je retour"}
                            </span>
                          </div>
                           <div className="p-4 border border-border rounded-lg space-y-4">
                             <div className="text-sm font-semibold">
                               {language === 'fr' ? 'Sélectionnez le produit' : 'Selecteer product'}
                             </div>
                             <div className="flex items-center gap-3 p-3 bg-primary/10 border border-primary/20 rounded-lg">
                               <img src={productTshirtBlack} alt="Product" className="w-16 h-16 rounded object-cover" />
                               <div className="flex-1">
                                 <div className="h-3 bg-muted rounded w-3/4 mb-2" />
                                 <div className="text-xs text-primary">
                                   {language === 'fr' ? 'Taille: L • Couleur: Noir' : 'Maat: L • Kleur: Zwart'}
                                 </div>
                               </div>
                               <Check className="w-5 h-5 text-primary" />
                             </div>
                            <div className="text-sm font-semibold">
                              {language === 'fr' ? 'Quelle est la raison ?' : 'Wat is de reden?'}
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                              <button className="p-3 border border-border rounded-lg text-sm hover:border-primary/50 transition-colors">
                                {language === 'fr' ? '🔧 Mauvaise taille' : '🔧 Verkeerde maat'}
                              </button>
                              <button className="p-3 bg-primary text-primary-foreground rounded-lg text-sm font-semibold">
                                {language === 'fr' ? '❌ Mauvaise couleur' : '❌ Verkeerde kleur'}
                              </button>
                              <button className="p-3 border border-border rounded-lg text-sm hover:border-primary/50 transition-colors">
                                {language === 'fr' ? '⚠️ Défectueux' : '⚠️ Defect'}
                              </button>
                              <button className="p-3 border border-border rounded-lg text-sm hover:border-primary/50 transition-colors">
                                {language === 'fr' ? '📦 Autre' : '📦 Anders'}
                              </button>
                            </div>
                            <button className="w-full bg-foreground text-background py-3 rounded-lg font-semibold hover:bg-foreground/90 transition-colors">
                              {language === 'fr' ? "Créer l'étiquette de retour" : 'Retourlabel maken'}
                            </button>
                          </div>
                          <div className="p-3 bg-blue-500/10 rounded-lg text-sm text-blue-600">
                            {language === 'fr'
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
                              {language === 'fr' ? 'Parfait ! Ceux-ci vont aussi bien avec :' : 'Perfect! Deze passen hier ook goed bij:'}
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
                                 {language === 'fr' ? 'Populaire' : 'Populair'}
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
                            {language === 'fr' ? '🎁 Commandez 2 produits et obtenez 10% de réduction' : '🎁 Bestel 2 producten en krijg 10% korting'}
                          </div>
                        </div>
                      )}

                      {feature.mockupType === "cart-context" && (
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                            <ShoppingCart className="w-5 h-5 text-primary" />
                            <span className="text-sm">
                              {language === 'fr' ? 'Je vois que vous avez 2 articles dans votre panier 🛒' : 'Ik zie dat je 2 items in je winkelmandje hebt 🛒'}
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
                              <span className="font-semibold">{language === 'fr' ? 'Total' : 'Totaal'}</span>
                              <span className="text-xl font-bold">€79,98</span>
                            </div>
                          </div>
                           <div className="p-4 bg-muted/30 rounded-lg">
                             <div className="text-sm font-semibold mb-3">
                               {language === 'fr' ? 'Parfait avec votre sélection :' : 'Perfect bij jouw selectie:'}
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
                              {language === 'fr' ? 'Client quitte la page de paiement' : 'Klant verlaat checkout pagina'}
                            </span>
                            <span className="flex items-center gap-1">
                              <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                              {language === 'fr' ? 'Détection en direct' : 'Live detectie'}
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
                                    {language === 'fr' ? 'Assistant Shopping Glimps' : 'Glimps Shopping Assistent'}
                                  </div>
                                  <div className="text-xs text-green-600 flex items-center gap-1">
                                    <div className="w-2 h-2 rounded-full bg-green-500" />
                                    {language === 'fr' ? 'En ligne maintenant' : 'Online nu'}
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
                                        {language === 'fr' ? 'Hey ! Je vois que vous êtes sur le point de partir 👋' : 'Hey! Ik zie dat je op het punt staat om te vertrekken 👋'}
                                      </p>
                                      <p className="text-sm text-muted-foreground">
                                        {language === 'fr'
                                          ? 'Y a-t-il quelque chose avec quoi je peux vous aider ? Je suis prêt à répondre à toutes vos questions !'
                                          : 'Is er iets waar ik je mee kan helpen? Ik sta klaar om al je vragen te beantwoorden!'}
                                      </p>
                                    </div>
                                    <div className="text-xs text-muted-foreground px-2">
                                      {language === 'fr' ? 'À l\'instant' : 'Zojuist'}
                                    </div>
                                  </div>
                                </div>

                                <div className="space-y-2 p-4 bg-muted/30 rounded-xl">
                                  <div className="text-xs font-semibold text-muted-foreground mb-3">
                                    {language === 'fr' ? 'Votre panier (2 articles) :' : 'Je winkelmandje (2 items):'}
                                  </div>
                                  <div className="flex items-center gap-3 p-2 bg-background rounded-lg">
                                    <img src={productHoodieGray} alt="Product" className="w-12 h-12 rounded object-cover" />
                                    <div className="flex-1 min-w-0">
                                      <div className="text-xs font-medium truncate">Premium Hoodie</div>
                                      <div className="text-xs text-muted-foreground">
                                        {language === 'fr' ? 'Taille L • €59,99' : 'Maat L • €59,99'}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-3 p-2 bg-background rounded-lg">
                                    <img src={productTshirtBlack} alt="Product" className="w-12 h-12 rounded object-cover" />
                                    <div className="flex-1 min-w-0">
                                      <div className="text-xs font-medium truncate">Classic T-shirt</div>
                                      <div className="text-xs text-muted-foreground">
                                        {language === 'fr' ? 'Taille M • €24,99' : 'Maat M • €24,99'}
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="bg-muted/20 rounded-xl p-3 space-y-2">
                                  <div className="text-xs font-semibold mb-2">
                                    {language === 'fr' ? 'Questions fréquentes :' : 'Veelgestelde vragen:'}
                                  </div>
                                  <button className="w-full text-left text-xs bg-background hover:bg-muted/50 border border-border rounded-lg p-3 transition-colors flex items-center justify-between group">
                                    <span>{language === 'fr' ? 'Quels sont les frais de livraison ?' : 'Wat zijn de verzendkosten?'}</span>
                                    <ChevronRight className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors" />
                                  </button>
                                  <button className="w-full text-left text-xs bg-background hover:bg-muted/50 border border-border rounded-lg p-3 transition-colors flex items-center justify-between group">
                                    <span>{language === 'fr' ? 'Puis-je aussi le retourner ?' : 'Kan ik dit ook retourneren?'}</span>
                                    <ChevronRight className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors" />
                                  </button>
                                  <button className="w-full text-left text-xs bg-background hover:bg-muted/50 border border-border rounded-lg p-3 transition-colors flex items-center justify-between group">
                                    <span>{language === 'fr' ? 'Quand sera-t-il livré ?' : 'Wanneer wordt dit geleverd?'}</span>
                                    <ChevronRight className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors" />
                                  </button>
                                </div>

                                <div className="flex gap-2 pt-2">
                                  <input
                                    type="text"
                                    placeholder={language === 'fr' ? 'Posez votre question...' : 'Stel je vraag...'}
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
                              {language === 'fr'
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
                              {language === 'fr' ? 'Je cherche une veste d\'hiver rouge, taille M' : 'Ik zoek een rode winterjas, maat M'}
                            </span>
                          </div>
                          <div className="p-4 bg-muted/30 rounded-xl space-y-2">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Search className="w-4 h-4" />
                              <span>{language === 'fr' ? 'Recherche dans 2.847 produits...' : 'Zoeken in 2.847 producten...'}</span>
                            </div>
                            <div className="text-sm font-semibold">
                              {language === 'fr' ? 'J\'ai trouvé 3 options parfaites ! 🎯' : 'Ik heb 3 perfecte opties gevonden! 🎯'}
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
                                     {language === 'fr' ? 'Taille M' : 'Maat M'}
                                   </Badge>
                                   <Badge variant="secondary" className="text-xs bg-green-500/20 text-green-600 border-0">
                                     {language === 'fr' ? 'En stock' : 'Op voorraad'}
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
                              {language === 'fr' ? 'J\'ai trouvé une sélection de produits pour vous :' : 'Ik heb een selectie producten voor je gevonden:'}
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
                                        {language === 'fr' ? '15% de réduction' : '15% korting'}
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
                                        {language === 'fr'
                                          ? 'Sneakers confortables avec matériaux premium et look moderne'
                                          : 'Comfortabele sneakers met premium materiaal en moderne uitstraling'}
                                      </p>
                                    </div>
                                    <div className="flex items-center justify-between pt-2 border-t border-border">
                                      <div className="text-lg font-bold text-primary">€89,99</div>
                                      <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors">
                                        {language === 'fr' ? 'Voir le produit' : 'Bekijk product'}
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
                                      <Badge className="bg-green-500/20 text-green-600 hover:bg-green-500/20">Op voorraad</Badge>
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
                                        Warme winterjas met waterafstotende stof, perfect voor koude dagen
                                      </p>
                                    </div>
                                    <div className="flex items-center justify-between pt-2 border-t border-border">
                                      <div className="text-lg font-bold text-primary">€149,99</div>
                                      <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors">
                                        Bekijk product
                                      </button>
                                    </div>
                                  </div>
                                </div>

                                <div className="w-64 bg-background border-2 border-primary/50 rounded-xl overflow-hidden relative">
                                  <div className="absolute top-2 right-2 z-10">
                                    <Badge className="bg-primary text-primary-foreground">Populair</Badge>
                                  </div>
                                  <div className="bg-muted/30 p-4 flex items-center justify-center">
                                    <img src={productHeadphonesWhite} alt="Product 3" className="w-full h-40 object-contain" />
                                  </div>
                                  <div className="p-4 space-y-3">
                                    <div className="flex items-center justify-between">
                                      <Badge className="bg-green-500/20 text-green-600 hover:bg-green-500/20">Op voorraad</Badge>
                                      <div className="flex items-center gap-1">
                                        {[1,2,3,4,5].map(i => (
                                          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                        ))}
                                      </div>
                                    </div>
                                    <div>
                                      <h4 className="font-semibold text-base mb-1">Wireless Headphones</h4>
                                      <p className="text-xs text-muted-foreground line-clamp-2">
                                        Premium geluidskwaliteit met noise cancelling en 30 uur batterij
                                      </p>
                                    </div>
                                    <div className="flex items-center justify-between pt-2 border-t border-border">
                                      <div className="text-lg font-bold text-primary">€129,99</div>
                                      <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors">
                                        Bekijk product
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
                              Wil je meer weten over een specifiek product of heb je een vraag voor een bepaald budget?
                            </p>
                          </div>
                        </div>
                      )}

                      {feature.mockupType === "upsell" && (
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                            <TrendingUp className="w-5 h-5 text-primary" />
                            <span className="text-sm">
                              {language === 'fr' ? 'Super choix ! Saviez-vous que ceux-ci sont souvent achetés ensemble ? 🎁' : 'Super keuze! Wist je dat deze vaak samen worden gekocht? 🎁'}
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
                                   {language === 'fr' ? '+€20 pour une meilleure qualité' : '+€20 voor betere kwaliteit'}
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
                                   {language === 'fr' ? 'Améliorer' : 'Upgrade'}
                                 </button>
                               </div>
                             </div>
                           </div>
                           <div className="p-4 border-2 border-primary rounded-lg bg-primary/5">
                             <div className="flex justify-between items-center mb-3">
                               <span className="font-semibold">
                                 {language === 'fr' ? 'Souvent achetés ensemble' : 'Vaak samen gekocht'}
                               </span>
                               <Badge variant="secondary" className="bg-green-500/20 text-green-600">
                                 {language === 'fr' ? 'Économisez €15' : 'Bespaar €15'}
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
                                {language === 'fr' ? 'Ajouter' : 'Voeg toe'}
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
                              {language === 'fr' ? 'Voulez-vous rester informé des nouvelles collections ? 💌' : 'Wil je op de hoogte blijven van nieuwe collecties? 💌'}
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
                                {language === 'fr' ? 'Quels sont vos intérêts ?' : 'Wat zijn je interesses?'}
                              </label>
                              <div className="flex gap-2">
                                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
                                  {language === 'fr' ? 'Mode femme' : 'Damesmode'}
                                </button>
                                <button className="px-4 py-2 border border-border rounded-full text-sm hover:bg-muted/50">
                                  {language === 'fr' ? 'Mode homme' : 'Herenmode'}
                                </button>
                                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
                                  {language === 'fr' ? 'Accessoires' : 'Accessoires'}
                                </button>
                              </div>
                            </div>
                            <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold">
                              {language === 'fr' ? 'S\'inscrire' : 'Aanmelden'}
                            </button>
                          </div>
                          <div className="p-4 bg-muted/30 rounded-lg">
                            <div className="flex items-center gap-2 mb-3">
                              <span className="text-sm font-semibold">
                                {language === 'fr' ? 'Qualité des leads' : 'Lead Kwaliteit'}
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
                                  {language === 'fr' ? 'Qualité' : 'Kwaliteit'}
                                </div>
                              </div>
                              <div className="text-center">
                                <div className="text-2xl font-bold text-primary">23%</div>
                                <div className="text-xs text-muted-foreground">
                                  {language === 'fr' ? 'Conversion' : 'Conversie'}
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
                              {language === 'fr' ? 'Comment puis-je vous aider ? Choisissez une option :' : 'Hoe kan ik je helpen? Kies een optie:'}
                            </span>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <button className="p-4 border-2 border-primary bg-primary/5 rounded-xl text-left hover:bg-primary/10 transition-colors">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-2xl">📦</span>
                                <span className="font-semibold text-sm">
                                  {language === 'fr' ? 'Suivre le colis' : 'Track pakket'}
                                </span>
                              </div>
                            </button>
                            <button className="p-4 border border-border rounded-xl text-left hover:bg-muted/50 transition-colors">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-2xl">🔄</span>
                                <span className="font-semibold text-sm">
                                  {language === 'fr' ? 'Démarrer un retour' : 'Retour starten'}
                                </span>
                              </div>
                            </button>
                            <button className="p-4 border border-border rounded-xl text-left hover:bg-muted/50 transition-colors">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-2xl">👕</span>
                                <span className="font-semibold text-sm">
                                  {language === 'fr' ? 'Rechercher un produit' : 'Product zoeken'}
                                </span>
                              </div>
                            </button>
                            <button className="p-4 border border-border rounded-xl text-left hover:bg-muted/50 transition-colors">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-2xl">💬</span>
                                <span className="font-semibold text-sm">
                                  {language === 'fr' ? 'Poser une question' : 'Vraag stellen'}
                                </span>
                              </div>
                            </button>
                          </div>
                          <div className="p-4 bg-muted/30 rounded-lg">
                            <div className="text-sm text-muted-foreground mb-3">
                              {language === 'fr' ? 'Pour quel produit voulez-vous vérifier le statut ?' : 'Voor welk product wil je de status checken?'}
                            </div>
                            <div className="flex gap-2">
                              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
                                {language === 'fr' ? 'Commande #8473' : 'Bestelling #8473'}
                              </button>
                              <button className="px-4 py-2 border border-border rounded-full text-sm hover:bg-muted/50">
                                {language === 'fr' ? 'Commande #8401' : 'Bestelling #8401'}
                              </button>
                              <button className="px-4 py-2 border border-border rounded-full text-sm hover:bg-muted/50">
                                {language === 'fr' ? 'Autre' : 'Anders'}
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
                              {language === 'fr' ? 'Insights du tableau de bord' : 'Dashboard Inzichten'}
                            </h3>
                            <select className="text-sm border border-border rounded px-3 py-1">
                              <option>{language === 'fr' ? 'Derniers 7 jours' : 'Laatste 7 dagen'}</option>
                            </select>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="p-4 border border-border rounded-lg">
                              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                                <MessageSquare className="w-4 h-4" />
                                {language === 'fr' ? 'Conversations' : 'Conversaties'}
                              </div>
                              <div className="text-2xl font-bold">2,847</div>
                              <div className="text-sm text-green-500">↗ +23%</div>
                            </div>
                            <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                                📊 {language === 'fr' ? 'Satisfaction' : 'Tevredenheid'}
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
                                    {language === 'fr' ? 'Insight IA' : 'AI Inzicht'}
                                  </span>
                                  <Badge variant="secondary" className="text-xs">
                                    {language === 'fr' ? 'Nouveau' : 'Nieuw'}
                                  </Badge>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                  {language === 'fr'
                                    ? 'De nombreux clients posent des questions sur les frais de livraison. Envisagez la livraison gratuite à partir de €50 pour augmenter la conversion.'
                                    : 'Veel klanten vragen naar verzendkosten. Overweeg gratis verzending vanaf €50 om conversie te verhogen.'}
                                </p>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors">
                                {language === 'fr' ? 'Implémenter' : 'Implementeer'}
                              </button>
                              <button className="px-4 py-2 border border-border rounded-lg text-sm hover:bg-muted/50 transition-colors">
                                {language === 'fr' ? 'Plus d\'info' : 'Meer info'}
                              </button>
                            </div>
                          </div>
                          <div className="p-4 border border-border rounded-lg">
                            <div className="text-sm font-semibold mb-3">
                              {language === 'fr' ? 'Questions principales cette semaine' : 'Top vragen deze week'}
                            </div>
                            <div className="space-y-3">
                              <div>
                                <div className="flex justify-between text-sm mb-1">
                                  <span>{language === 'fr' ? 'Frais de livraison' : 'Verzendkosten'}</span>
                                  <span className="font-semibold">287x</span>
                                </div>
                                <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
                                  <div className="h-full bg-primary rounded-full" style={{width: '85%'}} />
                                </div>
                              </div>
                              <div>
                                <div className="flex justify-between text-sm mb-1">
                                  <span>{language === 'fr' ? 'Politique de retour' : 'Retourbeleid'}</span>
                                  <span className="font-semibold">183x</span>
                                </div>
                                <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
                                  <div className="h-full bg-primary rounded-full" style={{width: '55%'}} />
                                </div>
                              </div>
                              <div>
                                <div className="flex justify-between text-sm mb-1">
                                  <span>{language === 'fr' ? 'Délai de livraison' : 'Levertijd'}</span>
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
                {language === 'fr' ? "Prêt à commencer ?" : "Klaar om te beginnen?"}
              </h3>
              <p className="text-muted-foreground max-w-md">
                {language === 'fr'
                  ? "Découvrez comment notre chatbot IA élève votre service client e-commerce à un niveau supérieur."
                  : "Ontdek hoe onze AI-chatbot jouw e-commerce klantenservice naar een hoger niveau tilt."
                }
              </p>
              <a href={language === 'fr' ? "/fr/contact" : "/contact"} className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-semibold transition-colors inline-block">
                {language === 'fr' ? "S'inscrire gratuitement" : "Gratis aanmelden"}
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
