import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import glimpsLogo from "@/assets/glimps-logo-new.png";
import {
  CircleCheck as CheckCircle2,
  Package,
  Clock,
  ArrowRight,
  Sparkles,
  Truck,
  MapPin,
  Bell,
  RefreshCw,
} from "lucide-react";

const picqerLogoUrl = "https://cdn.worldvectorlogo.com/logos/picqer.svg";

const PicqerIntegration = () => {
  const { language } = useLanguage();
  const isFR = language === 'fr';
  const isEN = language === 'en';

  const enContent = {
    badge: "Picqer Integration",
    title: "AI Chatbot connected to",
    titleHighlight: "Picqer",
    subtitle: "Connect Glimps to your Picqer warehouse management system and let your chatbot answer stock, inventory and order fulfillment questions automatically — with live warehouse data from Picqer.",
    ctaButton: "Request a demo",
    howTitle: "How the Picqer integration works",
    howSteps: [
      {
        step: "01",
        title: "Connect Picqer",
        desc: "Link your Picqer account to Glimps in a few clicks. No technical knowledge required."
      },
      {
        step: "02",
        title: "Live warehouse data",
        desc: "The chatbot gets real-time access to stock levels, order picking statuses and warehouse locations via the Picqer API."
      },
      {
        step: "03",
        title: "AI learns your warehouse flow",
        desc: "Glimps learns your warehouse layout, picking processes, backorder policies and how to communicate fulfillment delays."
      },
      {
        step: "04",
        title: "Automatic inventory answers",
        desc: "Customers or staff ask about stock or orders — the chatbot checks Picqer and answers immediately, 24/7."
      }
    ],
    benefitsTitle: "What Glimps does with your Picqer data",
    benefits: [
      {
        icon: Package,
        title: "Live stock questions",
        desc: "Customers can ask \"Is this product in stock?\" and get an immediate, accurate answer directly from your Picqer inventory."
      },
      {
        icon: Truck,
        title: "Order picking status",
        desc: "The chatbot checks the current picking status of an order in Picqer and informs customers whether their order is being prepared."
      },
      {
        icon: MapPin,
        title: "Warehouse product locations",
        desc: "Glimps can tell your team exactly where in the warehouse a product is located, based on live Picqer data."
      },
      {
        icon: Clock,
        title: "Backorder ETAs",
        desc: "When a product is on backorder, the chatbot provides the expected restock date so customers know when to expect delivery."
      },
      {
        icon: Bell,
        title: "Fulfillment delay notifications",
        desc: "If a fulfillment is delayed due to picking or stock issues, the chatbot proactively informs customers and manages expectations."
      },
      {
        icon: RefreshCw,
        title: "Inventory-based product recommendations",
        desc: "Glimps can suggest in-stock alternatives when a product is unavailable, directly using your live Picqer stock data."
      }
    ],
    useCasesTitle: "What your customers can ask",
    useCases: [
      "\"Is this product currently in stock?\"",
      "\"When will my backordered item be available?\"",
      "\"Has my order been picked and packed yet?\"",
      "\"Why is my order taking longer than expected?\"",
      "\"Can I get a similar product that is in stock now?\"",
      "\"What is the stock level for product X?\"",
      "\"When will my order be shipped from the warehouse?\"",
      "\"Is there a fulfillment delay on my order?\""
    ],
    statsTitle: "Average results for webshops with Glimps + Picqer",
    stats: [
      { value: "71%", label: "Of stock and warehouse questions automated" },
      { value: "-35%", label: "Fewer \"where is my order\" tickets" },
      { value: "Fast", label: "Setup via API connection" },
      { value: "24/7", label: "Live inventory answers" }
    ],
    ctaTitle: "Ready to connect Glimps to Picqer?",
    ctaSubtitle: "Let your chatbot answer every stock and fulfillment question with live Picqer data — no agent needed.",
    seoTitle: "AI Chatbot with Picqer - Glimps AI | Picqer WMS Integration",
    seoDescription: "Connect Glimps to Picqer for live stock and warehouse answers via chat. Automatic inventory status, backorder ETAs and fulfillment updates. AI customer service 24/7.",
  };

  const content = isFR ? {
    badge: "Intégration Picqer",
    title: "Chatbot IA connecté à",
    titleHighlight: "Picqer",
    subtitle: "Connectez Glimps à votre système de gestion d'entrepôt Picqer et laissez votre chatbot répondre automatiquement aux questions de stock, d'inventaire et d'exécution des commandes — avec les données d'entrepôt en temps réel de Picqer.",
    ctaButton: "Demander une démo",
    howTitle: "Comment fonctionne l'intégration Picqer",
    howSteps: [
      {
        step: "01",
        title: "Connectez Picqer",
        desc: "Liez votre compte Picqer à Glimps en quelques clics. Aucune connaissance technique requise."
      },
      {
        step: "02",
        title: "Données d'entrepôt en temps réel",
        desc: "Le chatbot accède en temps réel aux niveaux de stock, statuts de picking et emplacements en entrepôt via l'API Picqer."
      },
      {
        step: "03",
        title: "L'IA apprend votre flux d'entrepôt",
        desc: "Glimps apprend la disposition de votre entrepôt, les processus de picking, les politiques de réapprovisionnement et comment communiquer les retards."
      },
      {
        step: "04",
        title: "Réponses d'inventaire automatiques",
        desc: "Les clients ou le personnel posent des questions sur le stock ou les commandes — le chatbot consulte Picqer et répond immédiatement, 24h/24."
      }
    ],
    benefitsTitle: "Ce que Glimps fait avec vos données Picqer",
    benefits: [
      {
        icon: Package,
        title: "Questions de stock en direct",
        desc: "Les clients peuvent demander \"Ce produit est-il en stock ?\" et obtenir une réponse immédiate et précise directement depuis votre inventaire Picqer."
      },
      {
        icon: Truck,
        title: "Statut de picking des commandes",
        desc: "Le chatbot vérifie le statut de picking actuel d'une commande dans Picqer et informe les clients si leur commande est en cours de préparation."
      },
      {
        icon: MapPin,
        title: "Emplacements des produits en entrepôt",
        desc: "Glimps peut indiquer à votre équipe exactement où se trouve un produit dans l'entrepôt, sur la base des données live Picqer."
      },
      {
        icon: Clock,
        title: "Délais de réapprovisionnement",
        desc: "Quand un produit est en rupture de stock, le chatbot fournit la date de réapprovisionnement prévue pour que les clients sachent quand s'attendre à la livraison."
      },
      {
        icon: Bell,
        title: "Notifications de retard d'exécution",
        desc: "Si une exécution est retardée en raison de problèmes de picking ou de stock, le chatbot informe proactivement les clients et gère leurs attentes."
      },
      {
        icon: RefreshCw,
        title: "Recommandations de produits basées sur l'inventaire",
        desc: "Glimps peut suggérer des alternatives en stock quand un produit est indisponible, en utilisant directement vos données de stock live Picqer."
      }
    ],
    useCasesTitle: "Ce que vos clients peuvent demander",
    useCases: [
      "\"Ce produit est-il actuellement en stock ?\"",
      "\"Quand mon article en rupture de stock sera-t-il disponible ?\"",
      "\"Ma commande a-t-elle déjà été préparée et emballée ?\"",
      "\"Pourquoi ma commande prend-elle plus de temps que prévu ?\"",
      "\"Puis-je obtenir un produit similaire disponible en stock ?\"",
      "\"Quel est le niveau de stock du produit X ?\"",
      "\"Quand ma commande sera-t-elle expédiée depuis l'entrepôt ?\"",
      "\"Y a-t-il un retard d'exécution sur ma commande ?\""
    ],
    statsTitle: "Résultats moyens pour les webshops avec Glimps + Picqer",
    stats: [
      { value: "71%", label: "Des questions stock et entrepôt automatisées" },
      { value: "-35%", label: "Moins de tickets \"où est ma commande\"" },
      { value: "Rapide", label: "Mise en place via connexion API" },
      { value: "24/7", label: "Réponses d'inventaire en direct" }
    ],
    ctaTitle: "Prêt à connecter Glimps à Picqer ?",
    ctaSubtitle: "Laissez votre chatbot répondre à chaque question de stock et d'exécution avec les données live Picqer — sans agent nécessaire.",
    seoTitle: "Chatbot IA avec Picqer - Glimps AI | Intégration WMS Picqer",
    seoDescription: "Connectez Glimps à Picqer pour des réponses live sur le stock et l'entrepôt via chat. Statut d'inventaire automatique, délais de réapprovisionnement et mises à jour. IA 24/7.",
  } : {
    badge: "Picqer Integratie",
    title: "AI Chatbot gekoppeld aan",
    titleHighlight: "Picqer",
    subtitle: "Koppel Glimps aan je Picqer warehouse management systeem en laat je chatbot automatisch antwoorden op vragen over voorraad, inventaris en orderfulfilment — met live magazijndata van Picqer.",
    ctaButton: "Demo aanvragen",
    howTitle: "Hoe de Picqer integratie werkt",
    howSteps: [
      {
        step: "01",
        title: "Koppel Picqer",
        desc: "Verbind je Picqer-account met Glimps in een paar klikken. Geen technische kennis vereist."
      },
      {
        step: "02",
        title: "Live magazijndata",
        desc: "De chatbot krijgt real-time toegang tot voorraadniveaus, pickingstatussen en magazijnlocaties via de Picqer API."
      },
      {
        step: "03",
        title: "AI leert je magazijnflow",
        desc: "Glimps leert je magazijnindeling, pickingprocessen, nabestellingsbeleid en hoe je vertragingen in fulfilment communiceert."
      },
      {
        step: "04",
        title: "Automatische voorraaanwoorden",
        desc: "Klanten of medewerkers vragen naar voorraad of bestellingen — de chatbot raadpleegt Picqer en antwoordt onmiddellijk, 24/7."
      }
    ],
    benefitsTitle: "Wat Glimps doet met jouw Picqer-data",
    benefits: [
      {
        icon: Package,
        title: "Live voorraadvragen",
        desc: "Klanten kunnen vragen \"Is dit product op voorraad?\" en krijgen direct een accuraat antwoord vanuit jouw Picqer-inventaris."
      },
      {
        icon: Truck,
        title: "Orderpickingstatus",
        desc: "De chatbot controleert de actuele pickingstatus van een bestelling in Picqer en informeert klanten of hun bestelling wordt klaargemaakt."
      },
      {
        icon: MapPin,
        title: "Magazijnlocaties van producten",
        desc: "Glimps kan je team exact vertellen waar in het magazijn een product zich bevindt, op basis van live Picqer-data."
      },
      {
        icon: Clock,
        title: "Nabestellings-ETAs",
        desc: "Als een product nabesteld moet worden, geeft de chatbot de verwachte herbevoorrading zodat klanten weten wanneer levering mogelijk is."
      },
      {
        icon: Bell,
        title: "Fulfilment-vertragingsmeldingen",
        desc: "Als een fulfilment vertraagd is door picking- of voorraadproblemen, informeert de chatbot klanten proactief en managet verwachtingen."
      },
      {
        icon: RefreshCw,
        title: "Voorraad-gebaseerde productaanbevelingen",
        desc: "Glimps kan alternatieven op voorraad suggereren als een product niet beschikbaar is, rechtstreeks op basis van je live Picqer-voorraaddata."
      }
    ],
    useCasesTitle: "Wat je klanten kunnen vragen",
    useCases: [
      "\"Is dit product momenteel op voorraad?\"",
      "\"Wanneer is mijn nabesteld artikel beschikbaar?\"",
      "\"Is mijn bestelling al gepickt en ingepakt?\"",
      "\"Waarom duurt mijn bestelling langer dan verwacht?\"",
      "\"Heb je een vergelijkbaar product dat nu op voorraad is?\"",
      "\"Wat is de voorraadstatus van product X?\"",
      "\"Wanneer wordt mijn bestelling vanuit het magazijn verstuurd?\"",
      "\"Is er een fulfilment-vertraging op mijn bestelling?\""
    ],
    statsTitle: "Gemiddelde resultaten voor webshops met Glimps + Picqer",
    stats: [
      { value: "71%", label: "Van voorraad- en magazijnvragen geautomatiseerd" },
      { value: "-35%", label: "Minder \"waar is mijn bestelling\" tickets" },
      { value: "Snel", label: "Setup via API-koppeling" },
      { value: "24/7", label: "Live voorraadanwoorden" }
    ],
    ctaTitle: "Klaar om Glimps aan Picqer te koppelen?",
    ctaSubtitle: "Laat je chatbot elke voorraad- en fulfilmentvraag beantwoorden met live Picqer-data — geen agent nodig.",
    seoTitle: "AI Chatbot met Picqer - Glimps AI | Picqer WMS Integratie",
    seoDescription: "Koppel Glimps aan Picqer voor live voorraad- en magazijnanwoorden via chat. Automatische inventarisstatus, nabestellings-ETAs en fulfilmentupdates. AI klantenservice 24/7.",
  };

  const activeContent = isEN ? enContent : content;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={activeContent.seoTitle}
        description={activeContent.seoDescription}
        path={isFR ? "/fr/integrations/picqer" : isEN ? "/en/integrations/picqer" : "/integrations/picqer"}
        language={language}
      />
      <StructuredData type="organization" />
      <StructuredData
        type="webpage"
        data={{
          name: activeContent.seoTitle,
          description: activeContent.seoDescription,
          url: isFR
            ? "https://www.glimps.be/fr/integrations/picqer"
            : isEN
            ? "https://www.glimps.be/en/integrations/picqer"
            : "https://www.glimps.be/integrations/picqer"
        }}
      />
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-20">
        <div className="pointer-events-none absolute bottom-[-200px] left-1/2 h-[300px] w-[400px] sm:h-[600px] sm:w-[800px] md:w-[1000px] md:h-[600px] -translate-x-1/2 rounded-full bg-gradient-to-br from-[#0073E6]/20 via-[#0073E6]/10 to-transparent blur-3xl" />
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            {activeContent.badge}
          </span>
          <div className="mb-6 flex justify-center">
            <div className="flex h-16 w-44 items-center justify-center rounded-2xl border border-border bg-card px-6 py-3 shadow-lg">
              <img src={picqerLogoUrl} alt="Picqer logo" className="h-full w-full object-contain" />
            </div>
          </div>
          <h1 className="mb-6 font-inter text-4xl font-normal leading-tight text-foreground md:text-5xl lg:text-6xl">
            {activeContent.title}{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {activeContent.titleHighlight}
            </span>
          </h1>
          <p className="mb-10 mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            {activeContent.subtitle}
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild variant="hero" size="lg" className="rounded-full">
              <a href={isFR ? "/fr/demo" : isEN ? "/en/demo" : "/demo"}>
                <Sparkles className="h-5 w-5" />
                {activeContent.ctaButton}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y bg-muted/30 px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <p className="mb-8 text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            {activeContent.statsTitle}
          </p>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {activeContent.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl font-bold text-primary">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center font-inter text-3xl font-normal md:text-4xl">
            {activeContent.howTitle}
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {activeContent.howSteps.map((step, i) => (
              <div key={i} className="relative rounded-2xl border border-border/50 bg-card p-6">
                <span className="mb-4 block text-4xl font-bold text-primary/20">{step.step}</span>
                <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
                {i < activeContent.howSteps.length - 1 && (
                  <ArrowRight className="absolute -right-3 top-1/2 hidden -translate-y-1/2 h-6 w-6 text-muted-foreground/40 lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-muted/20 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center font-inter text-3xl font-normal md:text-4xl">
            {activeContent.benefitsTitle}
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {activeContent.benefits.map((benefit, i) => (
              <Card key={i} className="p-6 transition-all hover:shadow-md hover:-translate-y-0.5">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center font-inter text-3xl font-normal md:text-4xl">
            {activeContent.useCasesTitle}
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {activeContent.useCases.map((useCase, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-border/50 bg-card p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <p className="text-sm text-muted-foreground">{useCase}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration badge */}
      <section className="border-y bg-muted/20 px-6 py-12">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-3 rounded-2xl border border-border bg-card px-6 py-4 shadow-sm">
            <div className="flex h-10 w-32 items-center justify-center rounded-lg border border-border bg-white p-1.5">
              <img src={picqerLogoUrl} alt="Picqer" className="h-full w-full object-contain" />
            </div>
            <span className="text-muted-foreground">+</span>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg overflow-hidden">
              <img src={glimpsLogo} alt="Glimps AI" className="h-full w-full object-contain" />
            </div>
            <span className="font-semibold">Glimps AI</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 p-12 text-center">
          <h2 className="mb-4 font-inter text-3xl font-normal md:text-4xl">
            {activeContent.ctaTitle}
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            {activeContent.ctaSubtitle}
          </p>
          <Button asChild variant="hero" size="lg" className="rounded-full">
            <a href={isFR ? "/fr/demo" : isEN ? "/en/demo" : "/demo"}>
              {activeContent.ctaButton}
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PicqerIntegration;
