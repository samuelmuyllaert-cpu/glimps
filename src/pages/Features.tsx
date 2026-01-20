import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StructuredData, { baseOrganization } from "@/components/StructuredData";
import { Check, Bot, RefreshCw, Package, RotateCcw, Users, MessageSquare, Code, ShoppingCart, Inbox, TrendingUp, Layers, Search, Zap, Star, Mic, Globe, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
  const features = [
    {
      icon: Bot,
      badge: "CHECKOUT BOT",
      title: "Begeleid klanten naar een succesvolle aankoop",
      description: "Onze checkout bot helpt klanten door het bestelproces met slimme suggesties, directe productinformatie en een naadloze afhandeling. Verhoog je conversie met tot 40%.",
      benefits: [
        "Direct bestelling plaatsen via chat",
        "Automatische upselling en bundel suggesties",
        "Live voorraad en leveringstijden"
      ],
      mockupType: "checkout"
    },
    {
      icon: ShoppingCart,
      badge: "WINKELMANDJE CONTEXT",
      title: "De bot weet precies wat er in het winkelmandje zit",
      description: "Onze chatbot heeft realtime toegang tot de winkelmandje inhoud en kan klanten begeleiden met gerichte suggesties, kortingen en productinformatie op basis van hun huidige selectie.",
      benefits: [
        "Realtime synchronisatie met winkelmandje",
        "Slimme suggesties gebaseerd op mandje inhoud",
        "Directe checkout vanuit chat mogelijk"
      ],
      mockupType: "cart-context"
    },
    {
      icon: Search,
      badge: "SLIMME PRODUCT ZOEKER",
      title: "AI zoekt automatisch de perfecte producten",
      description: "De chatbot doorzoekt intelligent je volledige productdatabase en vindt precies wat klanten zoeken op basis van kleur, maat, prijs, categorie en beschikbaarheid. Gebruik natuurlijke taal, geen zoekfilters nodig.",
      benefits: [
        "Semantische zoekopdrachten in natuurlijke taal",
        "Filter op maat, kleur, prijs en voorraad",
        "Realtime synchronisatie met productcatalogus"
      ],
      mockupType: "product-search"
    },
    {
      icon: TrendingUp,
      badge: "UPSELL & CROSS-SELL",
      title: "Verhoog je gemiddelde orderwaarde met 40%",
      description: "Onze AI herkent het perfecte moment om aanvullende producten voor te stellen. Van bundels tot premium varianten - altijd relevant en nooit opdringerig.",
      benefits: [
        "Slimme product bundels en combinaties",
        "Premium variant suggesties op juiste moment",
        "Automatische kortingen bij bundel aankoop"
      ],
      mockupType: "upsell"
    },
    {
      icon: Mic,
      badge: "SPRAAK INTERACTIE",
      title: "Praat tegen de bot, krijg directe antwoorden",
      description: "Klanten kunnen simpelweg tegen de bot praten via spraak. De bot transcribeert automatisch en geeft textuele antwoorden. Perfect voor hands-free winkelen en mobiele gebruikers.",
      benefits: [
        "Spraak-naar-tekst in realtime",
        "Hoge nauwkeurigheid in Nederlands",
        "Hands-free shopping ervaring"
      ],
      mockupType: "voice"
    },
    {
      icon: Globe,
      badge: "MULTILINGUAL SUPPORT",
      title: "Communiceer wereldwijd in 50+ talen",
      description: "De chatbot detecteert automatisch de taal van je klant en antwoordt in diezelfde taal. Perfect voor internationale webshops die klanten over de hele wereld bedienen - zonder extra configuratie.",
      benefits: [
        "Automatische taaldetectie - 50+ talen ondersteund",
        "Natuurlijke conversaties in elke taal met context begrip",
        "Real-time vertaling van productinfo en antwoorden"
      ],
      mockupType: "multilingual"
    },
    {
      icon: Package,
      badge: "PAKKET TRACKING",
      title: "Live tracking informatie direct in de chat",
      description: "Klanten kunnen eenvoudig hun pakket status opvragen en realtime updates ontvangen. Verminder support tickets met 70%.",
      benefits: [
        "Integratie met alle major carriers",
        "Proactieve updates bij vertraging",
        "Bezorgtijdvenster communicatie"
      ],
      mockupType: "tracking"
    },
    {
      icon: RotateCcw,
      badge: "RETOUR AFHANDELING",
      title: "Maak retouren simpel voor jou en je klanten",
      description: "Automatiseer het complete retourproces met slimme vragenlijsten, directe label generatie en automatische updates. Verhoog klanttevredenheid en reduceer werkdruk.",
      benefits: [
        "Automatische retourlabel generatie",
        "Slimme vragenflow voor retour reden",
        "Directe terugbetaling bij ontvangst"
      ],
      mockupType: "return"
    },
    {
      icon: Users,
      badge: "LEAD VERZAMELING",
      title: "Verzamel kwaliteitsvolle leads tijdens gesprekken",
      description: "Maak van elke conversatie een kans om leads te verzamelen. De bot vraagt op natuurlijke wijze naar contactgegevens en voorkeuren, zonder opdringerig te zijn.",
      benefits: [
        "Natuurlijke vraagflow voor contactgegevens",
        "Automatische segmentatie op basis van interesse",
        "Directe export naar CRM en email tools"
      ],
      mockupType: "lead-collection"
    },
    {
      icon: Zap,
      badge: "QUICK REPLY BUTTONS",
      title: "Snelle interactie met één klik antwoorden",
      description: "Maak het makkelijk voor klanten met visuele knoppen en snelle antwoorden. Geen typen nodig - gewoon klikken en doorgaan. Perfect voor mobiele gebruikers.",
      benefits: [
        "Contextuele knoppen gebaseerd op situatie",
        "Visuele knoppen met emoji's en iconen",
        "Mobiel-geoptimaliseerd voor touch interfaces"
      ],
      mockupType: "quick-replies"
    },
    {
      icon: Code,
      badge: "API & INTEGRATIES",
      title: "Koppel met al je bestaande systemen",
      description: "Naadloze integratie met je e-commerce platform, CRM, helpdesk en meer. Gebruik onze REST API of kant-en-klare connectoren voor populaire platforms.",
      benefits: [
        "RESTful API met uitgebreide documentatie",
        "Native integraties met Shopify, WooCommerce",
        "Webhooks voor realtime event notificaties"
      ],
      mockupType: "api"
    },
    {
      icon: MessageSquare,
      badge: "CONVERSATIONAL FLOWS",
      title: "Intelligente gespreksflows die zich aanpassen",
      description: "Onze AI past zich aan aan de behoeften van elke klant. Van simpele vragen tot complexe productadvies - altijd de juiste flow.",
      benefits: [
        "Dynamische flows op basis van context",
        "Multi-turn conversaties met geheugen",
        "Natuurlijke taalverwerking voor begrip"
      ],
      mockupType: "carousel"
    },
    {
      icon: Inbox,
      badge: "AI INBOX & INZICHTEN",
      title: "Krijg diepgaande inzichten met AI-powered analytics",
      description: "Onze AI analyseert alle conversaties en geeft je actionable insights om je service te verbeteren. Stel vragen aan de AI agent over trends en klantgedrag.",
      benefits: [
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
      "@id": "https://www.glimps.be/features",
      "url": "https://www.glimps.be/features",
      "name": "Functies - Glimps AI Chatbot",
      "description": "Ontdek alle functies van Glimps: checkout bot, pakket tracking, upselling, multilingual support en meer. Complete AI chatbot voor e-commerce.",
      "inLanguage": "nl-BE",
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
          "item": "https://www.glimps.be/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Functies",
          "item": "https://www.glimps.be/features"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background">
      <SEO 
        title="Functies - Glimps AI Chatbot | Complete E-commerce Oplossing"
        description="Ontdek alle functies van Glimps: checkout bot, pakket tracking, upselling, multilingual support en meer. Complete AI chatbot voor e-commerce."
        path="/features"
        canonical="https://www.glimps.be/features"
        keywords="chatbot functies, checkout bot, pakket tracking, upselling, multilingual support, spraak interactie, AI features"
        type="website"
      />
      <StructuredData type="graph" data={graphData} />
      <Navigation />
      
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="font-inter text-4xl md:text-6xl font-normal mb-6 leading-tight">
              Onze AI chatbot biedt complete functionaliteit voor elke fase van de customer journey
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
                            <span className="text-sm font-medium">SPRAAK INTERACTIE</span>
                          </div>
                          
                          <div className="p-4 bg-muted/30 rounded-xl border border-primary/20">
                            <div className="flex items-start gap-3 mb-3">
                              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                                <Mic className="w-4 h-4 text-primary" />
                              </div>
                              <div className="flex-1">
                                <div className="text-xs text-muted-foreground mb-2">Aan het luisteren...</div>
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
                                  "Ik zoek een rode winterjas in maat M"
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="p-4 bg-muted/50 rounded-xl">
                            <div className="flex items-start gap-3">
                              <Bot className="w-5 h-5 text-primary mt-0.5" />
                              <div className="flex-1 space-y-3">
                                <p className="text-sm">Ik heb je vraag begrepen! 👍</p>
                                <p className="text-sm">Laat me even de perfecte rode winterjas voor je zoeken in maat M...</p>
                                
                                 <div className="flex items-center gap-3 p-3 border border-border rounded-lg bg-background">
                                   <img src={productJacketRed} alt="Winterjas" className="w-16 h-16 rounded object-cover" />
                                   <div className="flex-1">
                                    <div className="font-semibold text-sm mb-1">Winterjas Classic</div>
                                    <div className="text-xs text-muted-foreground mb-1">Maat M</div>
                                    <div className="flex items-center gap-2">
                                      <span className="text-primary font-bold">€89,99</span>
                                      <span className="text-xs bg-green-500/20 text-green-600 px-2 py-0.5 rounded">Op voorraad</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center justify-center gap-2 p-3 bg-muted/30 rounded-lg">
                            <Mic className="w-4 h-4 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">💡 Tip: Klik op de microfoon om te spreken</span>
                          </div>
                        </div>
                      )}

                      {feature.mockupType === "multilingual" && (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between p-4 bg-primary/10 rounded-xl mb-4">
                            <div className="flex items-center gap-2">
                              <Globe className="w-5 h-5 text-primary" />
                              <span className="text-sm font-medium">Multilingual Chat</span>
                            </div>
                            <span className="text-xs bg-green-500/20 text-green-600 px-3 py-1 rounded-full font-medium">Auto-detect ON</span>
                          </div>

                          <div className="space-y-3">
                            {/* Dutch message */}
                            <div className="p-4 bg-muted/50 rounded-xl">
                              <div className="flex items-start gap-3">
                                <div className="text-xl">🇳🇱</div>
                                <div className="flex-1">
                                  <p className="text-sm mb-1">Hallo! Hoe kan ik je helpen?</p>
                                  <p className="text-xs text-muted-foreground">Nederlands gedetecteerd</p>
                                </div>
                              </div>
                            </div>

                            {/* English message */}
                            <div className="p-4 bg-muted/50 rounded-xl">
                              <div className="flex items-start gap-3">
                                <div className="text-xl">🇬🇧</div>
                                <div className="flex-1">
                                  <p className="text-sm mb-1">Hello! How can I help you today?</p>
                                  <p className="text-xs text-muted-foreground">English detected</p>
                                </div>
                              </div>
                            </div>

                            {/* German message */}
                            <div className="p-4 bg-muted/50 rounded-xl">
                              <div className="flex items-start gap-3">
                                <div className="text-xl">🇩🇪</div>
                                <div className="flex-1">
                                  <p className="text-sm mb-1">Hallo! Wie kann ich Ihnen helfen?</p>
                                  <p className="text-xs text-muted-foreground">Deutsch erkannt</p>
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
                                  <p className="text-xs text-muted-foreground">Español detectado</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Stats section */}
                          <div className="grid grid-cols-2 gap-3 mt-4 p-4 bg-green-500/10 rounded-xl">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-primary mb-1">🌍 50+</div>
                              <div className="text-xs text-muted-foreground">Ondersteunde talen</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-primary mb-1">⚡ &lt;1s</div>
                              <div className="text-xs text-muted-foreground">Detectietijd</div>
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
                            <span className="text-sm">Wil je deze items bestellen?</span>
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
                              <span>Subtotaal</span>
                              <span>€79,98</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span>Verzending</span>
                              <span className="text-green-500">Gratis</span>
                            </div>
                            <div className="flex justify-between font-semibold text-lg pt-2">
                              <span>Totaal</span>
                              <span>€79,98</span>
                            </div>
                          </div>
                          <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                            Naar checkout
                          </button>
                        </div>
                      )}

                      {feature.mockupType === "tracking" && (
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                            <Package className="w-5 h-5 text-primary" />
                            <span className="text-sm">Je pakket is onderweg! 📦</span>
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
                                  <div className="font-semibold">Bestelling ontvangen</div>
                                  <div className="text-sm text-muted-foreground">Ma 14:23</div>
                                </div>
                              </div>
                              <div className="relative">
                                <div className="absolute -left-[29px] w-4 h-4 rounded-full bg-primary" />
                                <div>
                                  <div className="font-semibold">In sorteercentrum</div>
                                  <div className="text-sm text-muted-foreground">Di 08:15</div>
                                </div>
                              </div>
                              <div className="relative">
                                <div className="absolute -left-[29px] w-4 h-4 rounded-full border-2 border-border bg-background" />
                                <div>
                                  <div className="text-muted-foreground">Onderweg naar jou</div>
                                  <div className="text-sm text-muted-foreground">Verwacht: Wo voor 18:00</div>
                                </div>
                              </div>
                            </div>
                            <div className="p-3 bg-primary/10 rounded-lg text-sm text-primary">
                              📍 Bezorging morgen voor 18:00
                            </div>
                          </div>
                        </div>
                      )}

                      {feature.mockupType === "return" && (
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                            <RotateCcw className="w-5 h-5 text-primary" />
                            <span className="text-sm">Ik help je graag met je retour</span>
                          </div>
                           <div className="p-4 border border-border rounded-lg space-y-4">
                             <div className="text-sm font-semibold">Selecteer product</div>
                             <div className="flex items-center gap-3 p-3 bg-primary/10 border border-primary/20 rounded-lg">
                               <img src={productTshirtBlack} alt="Product" className="w-16 h-16 rounded object-cover" />
                               <div className="flex-1">
                                 <div className="h-3 bg-muted rounded w-3/4 mb-2" />
                                 <div className="text-xs text-primary">Maat: L • Kleur: Zwart</div>
                               </div>
                               <Check className="w-5 h-5 text-primary" />
                             </div>
                            <div className="text-sm font-semibold">Wat is de reden?</div>
                            <div className="grid grid-cols-2 gap-2">
                              <button className="p-3 border border-border rounded-lg text-sm hover:border-primary/50 transition-colors">
                                🔧 Verkeerde maat
                              </button>
                              <button className="p-3 bg-primary text-primary-foreground rounded-lg text-sm font-semibold">
                                ❌ Verkeerde kleur
                              </button>
                              <button className="p-3 border border-border rounded-lg text-sm hover:border-primary/50 transition-colors">
                                ⚠️ Defect
                              </button>
                              <button className="p-3 border border-border rounded-lg text-sm hover:border-primary/50 transition-colors">
                                📦 Anders
                              </button>
                            </div>
                            <button className="w-full bg-foreground text-background py-3 rounded-lg font-semibold hover:bg-foreground/90 transition-colors">
                              Retourlabel maken
                            </button>
                          </div>
                          <div className="p-3 bg-blue-500/10 rounded-lg text-sm text-blue-600">
                            💡 Je ontvangt het retourlabel per email binnen 5 minuten
                          </div>
                        </div>
                      )}

                      {feature.mockupType === "carousel" && (
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                            <ShoppingCart className="w-5 h-5 text-primary" />
                            <span className="text-sm">Perfect! Deze passen hier ook goed bij:</span>
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
                                 Populair
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
                            🎁 Bestel 2 producten en krijg 10% korting
                          </div>
                        </div>
                      )}

                      {feature.mockupType === "cart-context" && (
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                            <ShoppingCart className="w-5 h-5 text-primary" />
                            <span className="text-sm">Ik zie dat je 2 items in je winkelmandje hebt 🛒</span>
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
                              <span className="font-semibold">Totaal</span>
                              <span className="text-xl font-bold">€79,98</span>
                            </div>
                          </div>
                           <div className="p-4 bg-muted/30 rounded-lg">
                             <div className="text-sm font-semibold mb-3">Perfect bij jouw selectie:</div>
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

                      {feature.mockupType === "product-search" && (
                        <div className="space-y-4">
                          <div className="p-3 border-2 border-primary rounded-xl">
                            <MessageSquare className="w-4 h-4 text-primary mb-2" />
                            <span className="text-sm">Ik zoek een rode winterjas, maat M</span>
                          </div>
                          <div className="p-4 bg-muted/30 rounded-xl space-y-2">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Search className="w-4 h-4" />
                              <span>Zoeken in 2.847 producten...</span>
                            </div>
                            <div className="text-sm font-semibold">Ik heb 3 perfecte opties gevonden! 🎯</div>
                          </div>
                           <div className="space-y-3">
                             <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg">
                               <img src={productJacketRed} alt="Product" className="w-16 h-16 rounded object-cover" />
                               <div className="flex-1">
                                 <div className="h-3 bg-muted rounded w-3/4 mb-2" />
                                 <div className="h-3 bg-muted rounded w-1/2 mb-2" />
                                 <div className="flex items-center gap-2">
                                   <Badge variant="secondary" className="text-xs bg-primary/20 text-primary border-0">Maat M</Badge>
                                   <Badge variant="secondary" className="text-xs bg-green-500/20 text-green-600 border-0">Op voorraad</Badge>
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

                      {feature.mockupType === "upsell" && (
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                            <TrendingUp className="w-5 h-5 text-primary" />
                            <span className="text-sm">Super keuze! Wist je dat deze vaak samen worden gekocht? 🎁</span>
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
                                 <span className="text-xs text-muted-foreground">+€20 voor betere kwaliteit</span>
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
                                   Upgrade
                                 </button>
                               </div>
                             </div>
                           </div>
                           <div className="p-4 border-2 border-primary rounded-lg bg-primary/5">
                             <div className="flex justify-between items-center mb-3">
                               <span className="font-semibold">Vaak samen gekocht</span>
                               <Badge variant="secondary" className="bg-green-500/20 text-green-600">Bespaar €15</Badge>
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
                                Voeg toe
                              </button>
                            </div>
                          </div>
                        </div>
                      )}

                      {feature.mockupType === "lead-collection" && (
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                            <Users className="w-5 h-5 text-primary" />
                            <span className="text-sm">Wil je op de hoogte blijven van nieuwe collecties? 💌</span>
                          </div>
                          <div className="p-4 border border-border rounded-lg space-y-4">
                            <div>
                              <label className="text-sm font-medium mb-2 block">Email</label>
                              <div className="h-10 bg-muted rounded flex items-center px-3">
                                <div className="h-2 bg-muted-foreground/30 rounded w-32" />
                              </div>
                            </div>
                            <div>
                              <label className="text-sm font-medium mb-2 block">Wat zijn je interesses?</label>
                              <div className="flex gap-2">
                                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
                                  Damesmode
                                </button>
                                <button className="px-4 py-2 border border-border rounded-full text-sm hover:bg-muted/50">
                                  Herenmode
                                </button>
                                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
                                  Accessoires
                                </button>
                              </div>
                            </div>
                            <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold">
                              Aanmelden
                            </button>
                          </div>
                          <div className="p-4 bg-muted/30 rounded-lg">
                            <div className="flex items-center gap-2 mb-3">
                              <span className="text-sm font-semibold">Lead Kwaliteit</span>
                              <TrendingUp className="w-4 h-4 text-green-500" />
                            </div>
                            <div className="grid grid-cols-3 gap-3">
                              <div className="text-center">
                                <div className="text-2xl font-bold text-primary">342</div>
                                <div className="text-xs text-muted-foreground">Leads</div>
                              </div>
                              <div className="text-center">
                                <div className="text-2xl font-bold text-primary">78%</div>
                                <div className="text-xs text-muted-foreground">Kwaliteit</div>
                              </div>
                              <div className="text-center">
                                <div className="text-2xl font-bold text-primary">23%</div>
                                <div className="text-xs text-muted-foreground">Conversie</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {feature.mockupType === "quick-replies" && (
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                            <Zap className="w-5 h-5 text-primary" />
                            <span className="text-sm">Hoe kan ik je helpen? Kies een optie:</span>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <button className="p-4 border-2 border-primary bg-primary/5 rounded-xl text-left hover:bg-primary/10 transition-colors">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-2xl">📦</span>
                                <span className="font-semibold text-sm">Track pakket</span>
                              </div>
                            </button>
                            <button className="p-4 border border-border rounded-xl text-left hover:bg-muted/50 transition-colors">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-2xl">🔄</span>
                                <span className="font-semibold text-sm">Retour starten</span>
                              </div>
                            </button>
                            <button className="p-4 border border-border rounded-xl text-left hover:bg-muted/50 transition-colors">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-2xl">👕</span>
                                <span className="font-semibold text-sm">Product zoeken</span>
                              </div>
                            </button>
                            <button className="p-4 border border-border rounded-xl text-left hover:bg-muted/50 transition-colors">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-2xl">💬</span>
                                <span className="font-semibold text-sm">Vraag stellen</span>
                              </div>
                            </button>
                          </div>
                          <div className="p-4 bg-muted/30 rounded-lg">
                            <div className="text-sm text-muted-foreground mb-3">
                              Voor welk product wil je de status checken?
                            </div>
                            <div className="flex gap-2">
                              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
                                Bestelling #8473
                              </button>
                              <button className="px-4 py-2 border border-border rounded-full text-sm hover:bg-muted/50">
                                Bestelling #8401
                              </button>
                              <button className="px-4 py-2 border border-border rounded-full text-sm hover:bg-muted/50">
                                Anders
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
                            <h3 className="font-semibold">Dashboard Inzichten</h3>
                            <select className="text-sm border border-border rounded px-3 py-1">
                              <option>Laatste 7 dagen</option>
                            </select>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="p-4 border border-border rounded-lg">
                              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                                <MessageSquare className="w-4 h-4" />
                                Conversaties
                              </div>
                              <div className="text-2xl font-bold">2,847</div>
                              <div className="text-sm text-green-500">↗ +23%</div>
                            </div>
                            <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                                📊 Tevredenheid
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
                                  <span className="font-semibold">AI Inzicht</span>
                                  <Badge variant="secondary" className="text-xs">Nieuw</Badge>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                  Veel klanten vragen naar verzendkosten. Overweeg gratis verzending vanaf €50 om conversie te verhogen.
                                </p>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors">
                                Implementeer
                              </button>
                              <button className="px-4 py-2 border border-border rounded-lg text-sm hover:bg-muted/50 transition-colors">
                                Meer info
                              </button>
                            </div>
                          </div>
                          <div className="p-4 border border-border rounded-lg">
                            <div className="text-sm font-semibold mb-3">Top vragen deze week</div>
                            <div className="space-y-3">
                              <div>
                                <div className="flex justify-between text-sm mb-1">
                                  <span>Verzendkosten</span>
                                  <span className="font-semibold">287x</span>
                                </div>
                                <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
                                  <div className="h-full bg-primary rounded-full" style={{width: '85%'}} />
                                </div>
                              </div>
                              <div>
                                <div className="flex justify-between text-sm mb-1">
                                  <span>Retourbeleid</span>
                                  <span className="font-semibold">183x</span>
                                </div>
                                <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
                                  <div className="h-full bg-primary rounded-full" style={{width: '55%'}} />
                                </div>
                              </div>
                              <div>
                                <div className="flex justify-between text-sm mb-1">
                                  <span>Levertijd</span>
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

          {/* Product Carousel Section */}
          <div className="mt-32">
            <div className="text-center mb-12">
              <h2 className="font-inter text-3xl md:text-5xl font-normal mb-4 leading-tight">
                Ontdek onze <span className="text-primary">product collectie</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Bekijk een selectie van producten waarmee onze AI chatbot je klanten kan helpen
              </p>
            </div>

            <div className="max-w-6xl mx-auto px-12">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-4">
                  <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                      <div className="aspect-square overflow-hidden bg-muted/30">
                        <img
                          src={productSneakerBlue}
                          alt="Sneaker Blue"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="font-semibold text-lg mb-2">Premium Sneakers</h3>
                        <p className="text-sm text-muted-foreground mb-4">Comfortabele sportschoenen voor dagelijks gebruik</p>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-primary">€89,99</span>
                          <Badge className="bg-green-500/20 text-green-600 hover:bg-green-500/30">Op voorraad</Badge>
                        </div>
                      </div>
                    </Card>
                  </CarouselItem>

                  <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                      <div className="aspect-square overflow-hidden bg-muted/30">
                        <img
                          src={productJacketRed}
                          alt="Jacket Red"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="font-semibold text-lg mb-2">Winterjas Classic</h3>
                        <p className="text-sm text-muted-foreground mb-4">Warme winterjas voor koude dagen</p>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-primary">€129,99</span>
                          <Badge className="bg-green-500/20 text-green-600 hover:bg-green-500/30">Op voorraad</Badge>
                        </div>
                      </div>
                    </Card>
                  </CarouselItem>

                  <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                      <div className="aspect-square overflow-hidden bg-muted/30">
                        <img
                          src={productHoodieGray}
                          alt="Hoodie Gray"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="font-semibold text-lg mb-2">Hoodie Comfort</h3>
                        <p className="text-sm text-muted-foreground mb-4">Zachte hoodie voor casual looks</p>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-primary">€49,99</span>
                          <Badge className="bg-green-500/20 text-green-600 hover:bg-green-500/30">Op voorraad</Badge>
                        </div>
                      </div>
                    </Card>
                  </CarouselItem>

                  <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                      <div className="aspect-square overflow-hidden bg-muted/30">
                        <img
                          src={productBackpackBrown}
                          alt="Backpack Brown"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="font-semibold text-lg mb-2">Rugzak Vintage</h3>
                        <p className="text-sm text-muted-foreground mb-4">Stijlvolle rugzak voor onderweg</p>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-primary">€79,99</span>
                          <Badge className="bg-green-500/20 text-green-600 hover:bg-green-500/30">Op voorraad</Badge>
                        </div>
                      </div>
                    </Card>
                  </CarouselItem>

                  <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                      <div className="aspect-square overflow-hidden bg-muted/30">
                        <img
                          src={productHeadphonesWhite}
                          alt="Headphones White"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="font-semibold text-lg mb-2">Koptelefoon Pro</h3>
                        <p className="text-sm text-muted-foreground mb-4">Premium geluidskwaliteit met noise cancelling</p>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-primary">€199,99</span>
                          <Badge className="bg-green-500/20 text-green-600 hover:bg-green-500/30">Op voorraad</Badge>
                        </div>
                      </div>
                    </Card>
                  </CarouselItem>

                  <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                      <div className="aspect-square overflow-hidden bg-muted/30">
                        <img
                          src={productWatchSilver}
                          alt="Watch Silver"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="font-semibold text-lg mb-2">Smartwatch Elite</h3>
                        <p className="text-sm text-muted-foreground mb-4">Stijlvolle smartwatch met alle functies</p>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-primary">€249,99</span>
                          <Badge className="bg-green-500/20 text-green-600 hover:bg-green-500/30">Op voorraad</Badge>
                        </div>
                      </div>
                    </Card>
                  </CarouselItem>

                  <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                      <div className="aspect-square overflow-hidden bg-muted/30">
                        <img
                          src={productSunglassesPink}
                          alt="Sunglasses Pink"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="font-semibold text-lg mb-2">Zonnebril Fashion</h3>
                        <p className="text-sm text-muted-foreground mb-4">Trendy zonnebril met UV-bescherming</p>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-primary">€39,99</span>
                          <Badge className="bg-green-500/20 text-green-600 hover:bg-green-500/30">Op voorraad</Badge>
                        </div>
                      </div>
                    </Card>
                  </CarouselItem>

                  <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                      <div className="aspect-square overflow-hidden bg-muted/30">
                        <img
                          src={productYogamatPurple}
                          alt="Yogamat Purple"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="font-semibold text-lg mb-2">Yogamat Premium</h3>
                        <p className="text-sm text-muted-foreground mb-4">Extra dikke yogamat voor optimaal comfort</p>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-primary">€59,99</span>
                          <Badge className="bg-green-500/20 text-green-600 hover:bg-green-500/30">Op voorraad</Badge>
                        </div>
                      </div>
                    </Card>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
              </Carousel>
            </div>

            <div className="text-center mt-12">
              <a
                href="/demo"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors group"
              >
                Bekijk hoe de chatbot helpt met deze producten
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-32 text-center">
            <div className="inline-flex flex-col items-center gap-4 p-8 rounded-3xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
              <h3 className="font-inter text-2xl font-semibold">
                Klaar om te beginnen?
              </h3>
              <p className="text-muted-foreground max-w-md">
                Ontdek hoe onze AI-chatbot jouw e-commerce klantenservice naar een hoger niveau tilt.
              </p>
              <a href="/contact" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-semibold transition-colors inline-block">
                Gratis aanmelden
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
