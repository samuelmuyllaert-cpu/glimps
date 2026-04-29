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
  Truck,
  MapPin,
  Bell,
  RefreshCw,
  Clock,
  ArrowRight,
  Sparkles,
  Globe,
} from "lucide-react";

const glsLogoUrl = "https://cdn.worldvectorlogo.com/logos/gls-1.svg";

const GLSIntegration = () => {
  const { language } = useLanguage();
  const isFR = language === 'fr';
  const isEN = language === 'en';

  const enContent = {
    badge: "GLS Integration",
    title: "AI Chatbot connected to",
    titleHighlight: "GLS",
    subtitle: "Connect Glimps to GLS and let your chatbot answer European parcel delivery questions automatically — with live tracking, GLS ParcelShop locator, estimated delivery windows and return guidance.",
    ctaButton: "Request a demo",
    howTitle: "How the GLS integration works",
    howSteps: [
      {
        step: "01",
        title: "Connect GLS",
        desc: "Link your GLS account to Glimps in a few clicks. No technical knowledge required."
      },
      {
        step: "02",
        title: "Live European shipment data",
        desc: "The chatbot gets real-time access to all GLS parcels, tracking numbers and delivery statuses via the GLS API."
      },
      {
        step: "03",
        title: "AI learns your European shipping flow",
        desc: "Glimps learns your GLS services, delivery windows per country, ParcelShop network and return policies across Europe."
      },
      {
        step: "04",
        title: "Automatic tracking answers",
        desc: "Customers ask about their European order — the chatbot checks GLS and responds immediately, 24/7."
      }
    ],
    benefitsTitle: "What Glimps does with your GLS data",
    benefits: [
      {
        icon: Globe,
        title: "European parcel tracking",
        desc: "Customers get the live status of their GLS parcel across Belgium, Netherlands, Germany, France and more — directly in the chat."
      },
      {
        icon: MapPin,
        title: "GLS ParcelShop locator",
        desc: "The chatbot finds the nearest GLS ParcelShop for pickup or drop-off — based on the customer's address or zip code."
      },
      {
        icon: Clock,
        title: "Estimated delivery window",
        desc: "Glimps tells customers exactly when to expect their GLS parcel — per country and per service level."
      },
      {
        icon: RefreshCw,
        title: "Returns via GLS",
        desc: "Glimps walks customers through initiating a GLS return shipment — step by step, without needing agent support."
      },
      {
        icon: Truck,
        title: "International B2B shipments",
        desc: "For B2B customers, the chatbot handles questions about GLS Business Parcel, freight and cross-border European deliveries."
      },
      {
        icon: Bell,
        title: "Proactive delivery updates",
        desc: "When a GLS parcel is delayed or ready for pickup, the chatbot can inform customers proactively and reduce inbound support contacts."
      }
    ],
    useCasesTitle: "What your customers can ask",
    useCases: [
      "\"Where is my GLS parcel right now?\"",
      "\"My GLS tracking number is 12345 — what's the status?\"",
      "\"When will my order from Germany be delivered?\"",
      "\"Where is the nearest GLS ParcelShop?\"",
      "\"Can I pick up my GLS parcel at a ParcelShop?\"",
      "\"How do I return my order via GLS?\"",
      "\"My GLS parcel hasn't arrived — what do I do?\"",
      "\"Does GLS deliver to France and the Netherlands?\""
    ],
    statsTitle: "Average results for webshops with Glimps + GLS",
    stats: [
      { value: "68%", label: "Of tracking questions handled automatically" },
      { value: "-40%", label: "Fewer support tickets about shipping" },
      { value: "Fast", label: "Setup via API connection" },
      { value: "24/7", label: "Live tracking answers" }
    ],
    ctaTitle: "Ready to connect Glimps to GLS?",
    ctaSubtitle: "Let your chatbot answer every European shipping question with live GLS data — no agent needed.",
    seoTitle: "AI Chatbot with GLS - Glimps AI | GLS Integration",
    seoDescription: "Connect Glimps to GLS for live European parcel tracking via chat. Automatic delivery status answers, GLS ParcelShop locator and return guidance. AI customer service 24/7.",
  };

  const content = isFR ? {
    badge: "Intégration GLS",
    title: "Chatbot IA connecté à",
    titleHighlight: "GLS",
    subtitle: "Connectez Glimps à GLS et laissez votre chatbot répondre automatiquement aux questions de livraison de colis européens — avec le suivi en direct, le localisateur GLS ParcelShop, les délais estimés et les retours.",
    ctaButton: "Demander une démo",
    howTitle: "Comment fonctionne l'intégration GLS",
    howSteps: [
      {
        step: "01",
        title: "Connectez GLS",
        desc: "Liez votre compte GLS à Glimps en quelques clics. Aucune connaissance technique requise."
      },
      {
        step: "02",
        title: "Données d'expédition européenne en temps réel",
        desc: "Le chatbot accède en temps réel à tous les colis GLS, numéros de suivi et statuts de livraison via l'API GLS."
      },
      {
        step: "03",
        title: "L'IA apprend votre flux d'expédition européen",
        desc: "Glimps apprend vos services GLS, délais de livraison par pays, réseau ParcelShop et politiques de retour en Europe."
      },
      {
        step: "04",
        title: "Réponses de suivi automatiques",
        desc: "Les clients demandent leur commande européenne — le chatbot consulte GLS et répond immédiatement, 24h/24."
      }
    ],
    benefitsTitle: "Ce que Glimps fait avec vos données GLS",
    benefits: [
      {
        icon: Globe,
        title: "Suivi de colis européen",
        desc: "Les clients obtiennent le statut en direct de leur colis GLS en Belgique, Pays-Bas, Allemagne, France et plus — directement dans le chat."
      },
      {
        icon: MapPin,
        title: "Localisateur GLS ParcelShop",
        desc: "Le chatbot trouve le GLS ParcelShop le plus proche pour retrait ou dépôt — selon l'adresse ou le code postal du client."
      },
      {
        icon: Clock,
        title: "Délai de livraison estimé",
        desc: "Glimps indique aux clients exactement quand attendre leur colis GLS — par pays et par niveau de service."
      },
      {
        icon: RefreshCw,
        title: "Retours via GLS",
        desc: "Glimps guide les clients étape par étape pour initier un retour GLS — sans support d'agent."
      },
      {
        icon: Truck,
        title: "Expéditions B2B internationales",
        desc: "Pour les clients B2B, le chatbot gère les questions sur GLS Business Parcel, le fret et les livraisons transfrontalières européennes."
      },
      {
        icon: Bell,
        title: "Mises à jour de livraison proactives",
        desc: "Quand un colis GLS est retardé ou prêt à être retiré, le chatbot peut informer proactivement les clients et réduire les contacts support entrants."
      }
    ],
    useCasesTitle: "Ce que vos clients peuvent demander",
    useCases: [
      "\"Où est mon colis GLS en ce moment ?\"",
      "\"Mon numéro de suivi GLS est 12345 — quel est le statut ?\"",
      "\"Quand ma commande d'Allemagne sera-t-elle livrée ?\"",
      "\"Où est le GLS ParcelShop le plus proche ?\"",
      "\"Puis-je retirer mon colis GLS dans un ParcelShop ?\"",
      "\"Comment retourner ma commande via GLS ?\"",
      "\"Mon colis GLS n'est pas arrivé — que faire ?\"",
      "\"GLS livre-t-il en France et aux Pays-Bas ?\""
    ],
    statsTitle: "Résultats moyens pour les webshops avec Glimps + GLS",
    stats: [
      { value: "68%", label: "Des questions de tracking traitées automatiquement" },
      { value: "-40%", label: "Moins de tickets support sur l'expédition" },
      { value: "Rapide", label: "Mise en place via connexion API" },
      { value: "24/7", label: "Réponses de tracking en direct" }
    ],
    ctaTitle: "Prêt à connecter Glimps à GLS ?",
    ctaSubtitle: "Laissez votre chatbot répondre à chaque question de livraison européenne avec les données live GLS — sans agent nécessaire.",
    seoTitle: "Chatbot IA avec GLS - Glimps AI | Intégration GLS",
    seoDescription: "Connectez Glimps à GLS pour le suivi de colis européen en temps réel via chat. Réponses automatiques sur l'état de livraison, localisateur GLS ParcelShop et retours. Service client IA 24/7.",
  } : {
    badge: "GLS Integratie",
    title: "AI Chatbot gekoppeld aan",
    titleHighlight: "GLS",
    subtitle: "Koppel Glimps aan GLS en laat je chatbot automatisch antwoorden op Europese pakketleveringsvragen — met live tracking, GLS ParcelShop locator, geschatte levertijden en retourhulp.",
    ctaButton: "Demo aanvragen",
    howTitle: "Hoe de GLS integratie werkt",
    howSteps: [
      {
        step: "01",
        title: "Koppel GLS",
        desc: "Verbind je GLS-account met Glimps in een paar klikken. Geen technische kennis vereist."
      },
      {
        step: "02",
        title: "Live Europese verzenddata",
        desc: "De chatbot krijgt real-time toegang tot alle GLS-pakketten, trackingnummers en leverstatussen via de GLS API."
      },
      {
        step: "03",
        title: "AI leert je Europese verzendflow",
        desc: "Glimps leert je GLS-diensten, levertijden per land, het ParcelShop-netwerk en retourbeleid in Europa."
      },
      {
        step: "04",
        title: "Automatische trackinganwoorden",
        desc: "Klanten vragen naar hun Europese bestelling — de chatbot raadpleegt GLS en antwoordt onmiddellijk, 24/7."
      }
    ],
    benefitsTitle: "Wat Glimps doet met jouw GLS-data",
    benefits: [
      {
        icon: Globe,
        title: "Europees pakkettracking",
        desc: "Klanten krijgen de live status van hun GLS-pakket in België, Nederland, Duitsland, Frankrijk en meer — direct in de chat."
      },
      {
        icon: MapPin,
        title: "GLS ParcelShop locator",
        desc: "De chatbot vindt het dichtstbijzijnde GLS ParcelShop voor ophaling of afgifte — op basis van het adres of de postcode van de klant."
      },
      {
        icon: Clock,
        title: "Geschat levervenster",
        desc: "Glimps vertelt klanten exact wanneer hun GLS-pakket verwacht wordt — per land en per serviceniveau."
      },
      {
        icon: RefreshCw,
        title: "Retouren via GLS",
        desc: "Glimps begeleid klanten stap voor stap bij het starten van een GLS-retourzending — zonder agentondersteuning."
      },
      {
        icon: Truck,
        title: "Internationale B2B-zendingen",
        desc: "Voor B2B-klanten behandelt de chatbot vragen over GLS Business Parcel, vracht en grensoverschrijdende Europese leveringen."
      },
      {
        icon: Bell,
        title: "Proactieve leveringsupdates",
        desc: "Als een GLS-pakket vertraging heeft of klaar is voor ophaling, kan de chatbot klanten proactief informeren en inkomende supportcontacten verminderen."
      }
    ],
    useCasesTitle: "Wat je klanten kunnen vragen",
    useCases: [
      "\"Waar is mijn GLS-pakket op dit moment?\"",
      "\"Mijn GLS-trackingnummer is 12345 — wat is de status?\"",
      "\"Wanneer wordt mijn bestelling uit Duitsland geleverd?\"",
      "\"Waar is het dichtstbijzijnde GLS ParcelShop?\"",
      "\"Kan ik mijn GLS-pakket ophalen bij een ParcelShop?\"",
      "\"Hoe kan ik mijn bestelling retourneren via GLS?\"",
      "\"Mijn GLS-pakket is nog niet aangekomen — wat nu?\"",
      "\"Levert GLS ook in Frankrijk en Nederland?\""
    ],
    statsTitle: "Gemiddelde resultaten voor webshops met Glimps + GLS",
    stats: [
      { value: "68%", label: "Van trackingvragen automatisch afgehandeld" },
      { value: "-40%", label: "Minder supporttickets over verzending" },
      { value: "Snel", label: "Setup via API-koppeling" },
      { value: "24/7", label: "Live trackinganwoorden" }
    ],
    ctaTitle: "Klaar om Glimps aan GLS te koppelen?",
    ctaSubtitle: "Laat je chatbot elke Europese leveringsvraag beantwoorden met live GLS-data — geen agent nodig.",
    seoTitle: "AI Chatbot met GLS - Glimps AI | GLS Integratie",
    seoDescription: "Koppel Glimps aan GLS voor live Europees pakkettracking via chat. Automatische leveringsstatus antwoorden, GLS ParcelShop locator en retourhulp. AI klantenservice 24/7.",
  };

  const activeContent = isEN ? enContent : content;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={activeContent.seoTitle}
        description={activeContent.seoDescription}
        path={isFR ? "/fr/integrations/gls" : isEN ? "/en/integrations/gls" : "/integrations/gls"}
        language={language}
      />
      <StructuredData type="organization" />
      <StructuredData
        type="webpage"
        data={{
          name: activeContent.seoTitle,
          description: activeContent.seoDescription,
          url: isFR
            ? "https://www.glimps.be/fr/integrations/gls"
            : isEN
            ? "https://www.glimps.be/en/integrations/gls"
            : "https://www.glimps.be/integrations/gls"
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
            <div className="flex h-16 w-40 items-center justify-center rounded-2xl border border-border bg-card px-6 py-3 shadow-lg">
              <img src={glsLogoUrl} alt="GLS logo" className="h-full w-full object-contain" />
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
              <img src={glsLogoUrl} alt="GLS" className="h-full w-full object-contain" />
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

export default GLSIntegration;
