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

const dhlLogoUrl = "https://cdn.worldvectorlogo.com/logos/dhl-1.svg";

const DHLIntegration = () => {
  const { language } = useLanguage();
  const isFR = language === 'fr';
  const isEN = language === 'en';

  const enContent = {
    badge: "DHL Integration",
    title: "AI Chatbot connected to",
    titleHighlight: "DHL",
    subtitle: "Connect Glimps to DHL and let your chatbot answer international shipping questions automatically — with live parcel tracking, customs information, DHL ServicePoint locations and return guidance.",
    ctaButton: "Request a demo",
    howTitle: "How the DHL integration works",
    howSteps: [
      {
        step: "01",
        title: "Connect DHL",
        desc: "Link your DHL account to Glimps in a few clicks. No technical knowledge required."
      },
      {
        step: "02",
        title: "Live international shipment data",
        desc: "The chatbot gets real-time access to all DHL shipments, tracking numbers and delivery statuses via the DHL API."
      },
      {
        step: "03",
        title: "AI learns your international shipping flow",
        desc: "Glimps learns your DHL services, delivery windows per country, customs requirements and how to handle international delays."
      },
      {
        step: "04",
        title: "Automatic tracking answers",
        desc: "Customers ask about their international order — the chatbot checks DHL and responds immediately, 24/7."
      }
    ],
    benefitsTitle: "What Glimps does with your DHL data",
    benefits: [
      {
        icon: Globe,
        title: "International parcel tracking",
        desc: "Customers get the live status of their international DHL shipment directly in the chat, without any manual effort from your team."
      },
      {
        icon: MapPin,
        title: "DHL ServicePoint locator",
        desc: "The chatbot finds the nearest DHL ServicePoint or parcel locker for pickup or drop-off — based on the customer's location."
      },
      {
        icon: Package,
        title: "Customs clearance questions",
        desc: "Glimps answers common customs questions — required documents, import duties and expected clearance times — automatically."
      },
      {
        icon: Truck,
        title: "Express vs standard delivery",
        desc: "The chatbot explains the difference between DHL Express and DHL Parcel and helps customers choose the right service."
      },
      {
        icon: RefreshCw,
        title: "International returns via DHL",
        desc: "Glimps walks customers through initiating a DHL return shipment — step by step, without needing agent support."
      },
      {
        icon: Bell,
        title: "Delayed international shipments",
        desc: "When a DHL shipment is delayed — due to customs or transit — the chatbot informs customers proactively and manages expectations."
      }
    ],
    useCasesTitle: "What your customers can ask",
    useCases: [
      "\"Where is my international DHL parcel right now?\"",
      "\"My DHL tracking number is 1Z123 — what's the status?\"",
      "\"When will my order from abroad be delivered?\"",
      "\"Are there customs charges on my shipment?\"",
      "\"Where is the nearest DHL ServicePoint?\"",
      "\"What's the difference between DHL Express and DHL Parcel?\"",
      "\"How do I return my order via DHL?\"",
      "\"My DHL parcel is stuck in customs — what do I do?\""
    ],
    statsTitle: "Average results for webshops with Glimps + DHL",
    stats: [
      { value: "68%", label: "Of tracking questions handled automatically" },
      { value: "-40%", label: "Fewer support tickets about shipping" },
      { value: "Fast", label: "Setup via API connection" },
      { value: "24/7", label: "Live tracking answers" }
    ],
    ctaTitle: "Ready to connect Glimps to DHL?",
    ctaSubtitle: "Let your chatbot answer every international shipping question with live DHL data — no agent needed.",
    seoTitle: "AI Chatbot with DHL - Glimps AI | DHL Integration",
    seoDescription: "Connect Glimps to DHL for live international parcel tracking via chat. Automatic shipping status answers, customs info and ServicePoint locator. AI customer service 24/7.",
  };

  const content = isFR ? {
    badge: "Intégration DHL",
    title: "Chatbot IA connecté à",
    titleHighlight: "DHL",
    subtitle: "Connectez Glimps à DHL et laissez votre chatbot répondre automatiquement aux questions d'expédition internationale — avec le suivi de colis en direct, les informations douanières, les points de service DHL et les retours.",
    ctaButton: "Demander une démo",
    howTitle: "Comment fonctionne l'intégration DHL",
    howSteps: [
      {
        step: "01",
        title: "Connectez DHL",
        desc: "Liez votre compte DHL à Glimps en quelques clics. Aucune connaissance technique requise."
      },
      {
        step: "02",
        title: "Données d'expédition internationale en temps réel",
        desc: "Le chatbot accède en temps réel à toutes les expéditions DHL, numéros de suivi et statuts de livraison via l'API DHL."
      },
      {
        step: "03",
        title: "L'IA apprend votre flux d'expédition international",
        desc: "Glimps apprend vos services DHL, délais de livraison par pays, exigences douanières et comment gérer les retards internationaux."
      },
      {
        step: "04",
        title: "Réponses de suivi automatiques",
        desc: "Les clients demandent leur commande internationale — le chatbot consulte DHL et répond immédiatement, 24h/24."
      }
    ],
    benefitsTitle: "Ce que Glimps fait avec vos données DHL",
    benefits: [
      {
        icon: Globe,
        title: "Suivi de colis international",
        desc: "Les clients obtiennent le statut en direct de leur expédition DHL internationale directement dans le chat, sans effort manuel de votre équipe."
      },
      {
        icon: MapPin,
        title: "Localisateur de ServicePoints DHL",
        desc: "Le chatbot trouve le ServicePoint DHL ou le casier à colis le plus proche pour retrait ou dépôt — selon la localisation du client."
      },
      {
        icon: Package,
        title: "Questions de dédouanement",
        desc: "Glimps répond aux questions douanières courantes — documents requis, droits d'importation et délais de dédouanement — automatiquement."
      },
      {
        icon: Truck,
        title: "Express vs livraison standard",
        desc: "Le chatbot explique la différence entre DHL Express et DHL Parcel et aide les clients à choisir le bon service."
      },
      {
        icon: RefreshCw,
        title: "Retours internationaux via DHL",
        desc: "Glimps guide les clients étape par étape pour initier un retour DHL — sans support d'agent."
      },
      {
        icon: Bell,
        title: "Expéditions internationales retardées",
        desc: "Quand une expédition DHL est retardée — en raison de la douane ou du transit — le chatbot informe proactivement les clients et gère leurs attentes."
      }
    ],
    useCasesTitle: "Ce que vos clients peuvent demander",
    useCases: [
      "\"Où est mon colis DHL international en ce moment ?\"",
      "\"Mon numéro de suivi DHL est 1Z123 — quel est le statut ?\"",
      "\"Quand ma commande de l'étranger sera-t-elle livrée ?\"",
      "\"Y a-t-il des frais de douane sur mon expédition ?\"",
      "\"Où est le ServicePoint DHL le plus proche ?\"",
      "\"Quelle est la différence entre DHL Express et DHL Parcel ?\"",
      "\"Comment retourner ma commande via DHL ?\"",
      "\"Mon colis DHL est bloqué en douane — que faire ?\""
    ],
    statsTitle: "Résultats moyens pour les webshops avec Glimps + DHL",
    stats: [
      { value: "68%", label: "Des questions de tracking traitées automatiquement" },
      { value: "-40%", label: "Moins de tickets support sur l'expédition" },
      { value: "Rapide", label: "Mise en place via connexion API" },
      { value: "24/7", label: "Réponses de tracking en direct" }
    ],
    ctaTitle: "Prêt à connecter Glimps à DHL ?",
    ctaSubtitle: "Laissez votre chatbot répondre à chaque question d'expédition internationale avec les données live DHL — sans agent nécessaire.",
    seoTitle: "Chatbot IA avec DHL - Glimps AI | Intégration DHL",
    seoDescription: "Connectez Glimps à DHL pour le suivi de colis international en temps réel via chat. Réponses automatiques sur l'état d'expédition, infos douanières et localisateur ServicePoint. Service client IA 24/7.",
  } : {
    badge: "DHL Integratie",
    title: "AI Chatbot gekoppeld aan",
    titleHighlight: "DHL",
    subtitle: "Koppel Glimps aan DHL en laat je chatbot automatisch antwoorden op internationale verzendvragen — met live pakkettracking, douane-informatie, DHL ServicePoint locator en retourhulp.",
    ctaButton: "Demo aanvragen",
    howTitle: "Hoe de DHL integratie werkt",
    howSteps: [
      {
        step: "01",
        title: "Koppel DHL",
        desc: "Verbind je DHL-account met Glimps in een paar klikken. Geen technische kennis vereist."
      },
      {
        step: "02",
        title: "Live internationale verzenddata",
        desc: "De chatbot krijgt real-time toegang tot alle DHL-zendingen, trackingnummers en leverstatussen via de DHL API."
      },
      {
        step: "03",
        title: "AI leert je internationale verzendflow",
        desc: "Glimps leert je DHL-diensten, levertijden per land, douanevereisten en hoe je internationale vertragingen communiceert."
      },
      {
        step: "04",
        title: "Automatische trackinganwoorden",
        desc: "Klanten vragen naar hun internationale bestelling — de chatbot raadpleegt DHL en antwoordt onmiddellijk, 24/7."
      }
    ],
    benefitsTitle: "Wat Glimps doet met jouw DHL-data",
    benefits: [
      {
        icon: Globe,
        title: "Internationaal pakkettracking",
        desc: "Klanten krijgen de live status van hun internationale DHL-zending direct in de chat, zonder manuele inspanning van jouw team."
      },
      {
        icon: MapPin,
        title: "DHL ServicePoint locator",
        desc: "De chatbot vindt het dichtstbijzijnde DHL ServicePoint of pakketautomaat voor ophaling of afgifte — op basis van de locatie van de klant."
      },
      {
        icon: Package,
        title: "Douane-informatie",
        desc: "Glimps beantwoordt veelgestelde douanevragen — benodigde documenten, invoerrechten en verwachte inklaaringstijden — automatisch."
      },
      {
        icon: Truck,
        title: "Express vs standaard levering",
        desc: "De chatbot legt het verschil uit tussen DHL Express en DHL Parcel en helpt klanten de juiste dienst te kiezen."
      },
      {
        icon: RefreshCw,
        title: "Internationale retouren via DHL",
        desc: "Glimps begeleid klanten stap voor stap bij het starten van een DHL-retourzending — zonder agentondersteuning."
      },
      {
        icon: Bell,
        title: "Vertraagde internationale zendingen",
        desc: "Als een DHL-zending vertraging heeft — door douane of transit — informeert de chatbot klanten proactief en managet hun verwachtingen."
      }
    ],
    useCasesTitle: "Wat je klanten kunnen vragen",
    useCases: [
      "\"Waar is mijn internationaal DHL-pakket op dit moment?\"",
      "\"Mijn DHL-trackingnummer is 1Z123 — wat is de status?\"",
      "\"Wanneer wordt mijn bestelling uit het buitenland geleverd?\"",
      "\"Zijn er douanekosten op mijn zending?\"",
      "\"Waar is het dichtstbijzijnde DHL ServicePoint?\"",
      "\"Wat is het verschil tussen DHL Express en DHL Parcel?\"",
      "\"Hoe kan ik mijn bestelling retourneren via DHL?\"",
      "\"Mijn DHL-pakket zit vast bij de douane — wat nu?\""
    ],
    statsTitle: "Gemiddelde resultaten voor webshops met Glimps + DHL",
    stats: [
      { value: "68%", label: "Van trackingvragen automatisch afgehandeld" },
      { value: "-40%", label: "Minder supporttickets over verzending" },
      { value: "Snel", label: "Setup via API-koppeling" },
      { value: "24/7", label: "Live trackinganwoorden" }
    ],
    ctaTitle: "Klaar om Glimps aan DHL te koppelen?",
    ctaSubtitle: "Laat je chatbot elke internationale verzendvraag beantwoorden met live DHL-data — geen agent nodig.",
    seoTitle: "AI Chatbot met DHL - Glimps AI | DHL Integratie",
    seoDescription: "Koppel Glimps aan DHL voor live internationaal pakkettracking via chat. Automatische verzendstatus antwoorden, douane-info en ServicePoint locator. AI klantenservice 24/7.",
  };

  const activeContent = isEN ? enContent : content;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={activeContent.seoTitle}
        description={activeContent.seoDescription}
        path={isFR ? "/fr/integrations/dhl" : isEN ? "/en/integrations/dhl" : "/integrations/dhl"}
        language={language}
      />
      <StructuredData type="organization" />
      <StructuredData
        type="webpage"
        data={{
          name: activeContent.seoTitle,
          description: activeContent.seoDescription,
          url: isFR
            ? "https://www.glimps.be/fr/integrations/dhl"
            : isEN
            ? "https://www.glimps.be/en/integrations/dhl"
            : "https://www.glimps.be/integrations/dhl"
        }}
      />
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-visible px-6 py-20">
        <div className="pointer-events-none absolute bottom-[-200px] left-1/2 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-br from-[#0073E6]/20 via-[#0073E6]/10 to-transparent blur-3xl" />
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            {activeContent.badge}
          </span>
          <div className="mb-6 flex justify-center">
            <div className="flex h-16 w-44 items-center justify-center rounded-2xl border border-border bg-card px-6 py-3 shadow-lg">
              <img src={dhlLogoUrl} alt="DHL logo" className="h-full w-full object-contain" />
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
              <img src={dhlLogoUrl} alt="DHL" className="h-full w-full object-contain" />
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

export default DHLIntegration;
