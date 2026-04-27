import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import glimpsLogo from "@/assets/glimps-logo-new.png";
import bpostLogo from "@/assets/bpost-logo.png";
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
} from "lucide-react";

const BpostIntegration = () => {
  const { language } = useLanguage();
  const isFR = language === 'fr';
  const isEN = language === 'en';

  const enContent = {
    badge: "bpost Integration",
    title: "AI Chatbot connected to",
    titleHighlight: "bpost",
    subtitle: "Connect Glimps to bpost and let your chatbot automatically answer Belgian shipping questions — with live domestic tracking, pick-up point locations, and return label support.",
    ctaButton: "Request a demo",
    howTitle: "How the bpost integration works",
    howSteps: [
      {
        step: "01",
        title: "Connect bpost",
        desc: "Link your bpost account to Glimps in a few clicks. No technical knowledge required."
      },
      {
        step: "02",
        title: "Live shipment data",
        desc: "The chatbot gets real-time access to all domestic shipments, tracking codes and delivery statuses via the bpost API."
      },
      {
        step: "03",
        title: "AI learns your Belgian shipping flow",
        desc: "Glimps learns your delivery windows, bpost pick-up points, return policy and how to communicate delays."
      },
      {
        step: "04",
        title: "Automatic tracking answers",
        desc: "Customers ask about their Belgian delivery — the chatbot checks bpost and answers immediately, 24/7."
      }
    ],
    benefitsTitle: "What Glimps does with your bpost data",
    benefits: [
      {
        icon: Package,
        title: "Belgian domestic tracking",
        desc: "Customers get the live status of their bpost shipment directly in the chat, without any manual effort from your team."
      },
      {
        icon: MapPin,
        title: "bpost pick-up point locator",
        desc: "The chatbot finds the nearest bpost pick-up points or post offices so customers can collect or drop off parcels easily."
      },
      {
        icon: Truck,
        title: "Saturday delivery info",
        desc: "Glimps informs customers whether Saturday delivery is available for their order and what the cut-off times are."
      },
      {
        icon: RefreshCw,
        title: "Return labels via bpost",
        desc: "Glimps guides customers step by step through generating a bpost return label — no agent support needed."
      },
      {
        icon: Clock,
        title: "Estimated delivery times",
        desc: "The chatbot communicates accurate estimated delivery times based on live bpost data for Belgian domestic shipments."
      },
      {
        icon: Bell,
        title: "Available 24/7",
        desc: "Shipping questions arrive at all hours. The chatbot handles them instantly, day and night, weekends included."
      }
    ],
    useCasesTitle: "What your customers can ask",
    useCases: [
      "\"Where is my bpost parcel right now?\"",
      "\"My tracking code is 323... — what's the status?\"",
      "\"When will my order be delivered?\"",
      "\"Where is the nearest bpost pick-up point?\"",
      "\"Can I receive my parcel on Saturday?\"",
      "\"My package hasn't arrived yet, what do I do?\"",
      "\"How do I return my order via bpost?\"",
      "\"Where can I drop off my return parcel?\""
    ],
    statsTitle: "Average results for webshops with Glimps + bpost",
    stats: [
      { value: "68%", label: "Of tracking questions handled automatically" },
      { value: "-40%", label: "Fewer support tickets about shipping" },
      { value: "Fast", label: "Setup via API connection" },
      { value: "24/7", label: "Live tracking answers" }
    ],
    ctaTitle: "Ready to connect Glimps to bpost?",
    ctaSubtitle: "Let your chatbot answer every Belgian shipping question with live bpost data — no agent needed.",
    seoTitle: "AI Chatbot with bpost - Glimps AI | bpost Integration",
    seoDescription: "Connect Glimps to bpost for live Belgian domestic tracking via chat. Automatic shipping status answers, pick-up point locator and return labels. AI customer service 24/7.",
  };

  const content = isFR ? {
    badge: "Intégration bpost",
    title: "Chatbot IA connecté à",
    titleHighlight: "bpost",
    subtitle: "Connectez Glimps à bpost et laissez votre chatbot répondre automatiquement aux questions d'expédition belge — avec le suivi domestique en temps réel, les points de retrait bpost et la gestion des étiquettes de retour.",
    ctaButton: "Demander une démo",
    howTitle: "Comment fonctionne l'intégration bpost",
    howSteps: [
      {
        step: "01",
        title: "Connectez bpost",
        desc: "Liez votre compte bpost à Glimps en quelques clics. Aucune connaissance technique requise."
      },
      {
        step: "02",
        title: "Données d'expédition en temps réel",
        desc: "Le chatbot accède en temps réel à toutes les expéditions domestiques, codes de suivi et statuts de livraison via l'API bpost."
      },
      {
        step: "03",
        title: "L'IA apprend votre flux d'expédition belge",
        desc: "Glimps apprend vos délais de livraison, les points de retrait bpost, votre politique de retour et comment communiquer les retards."
      },
      {
        step: "04",
        title: "Réponses de suivi automatiques",
        desc: "Les clients posent des questions sur leur livraison belge — le chatbot consulte bpost et répond immédiatement, 24h/24."
      }
    ],
    benefitsTitle: "Ce que Glimps fait avec vos données bpost",
    benefits: [
      {
        icon: Package,
        title: "Suivi domestique belge",
        desc: "Les clients obtiennent le statut en direct de leur envoi bpost directement dans le chat, sans effort manuel de votre équipe."
      },
      {
        icon: MapPin,
        title: "Localisateur de points de retrait bpost",
        desc: "Le chatbot trouve les points de retrait ou bureaux de poste bpost les plus proches pour que les clients puissent récupérer ou déposer leurs colis facilement."
      },
      {
        icon: Truck,
        title: "Informations sur la livraison du samedi",
        desc: "Glimps informe les clients si la livraison le samedi est disponible pour leur commande et quels sont les horaires limites."
      },
      {
        icon: RefreshCw,
        title: "Étiquettes de retour via bpost",
        desc: "Glimps guide les clients étape par étape pour générer une étiquette de retour bpost — sans support d'agent nécessaire."
      },
      {
        icon: Clock,
        title: "Délais de livraison estimés",
        desc: "Le chatbot communique des délais de livraison estimés précis basés sur les données bpost en direct pour les envois domestiques belges."
      },
      {
        icon: Bell,
        title: "Disponible 24h/24, 7j/7",
        desc: "Les questions d'expédition arrivent à toute heure. Le chatbot les traite instantanément, jour et nuit, week-ends inclus."
      }
    ],
    useCasesTitle: "Ce que vos clients peuvent demander",
    useCases: [
      "\"Où est mon colis bpost en ce moment ?\"",
      "\"Mon code de suivi est 323... — quel est le statut ?\"",
      "\"Quand ma commande sera-t-elle livrée ?\"",
      "\"Où est le point de retrait bpost le plus proche ?\"",
      "\"Puis-je recevoir mon colis le samedi ?\"",
      "\"Mon colis n'est pas encore arrivé, que faire ?\"",
      "\"Comment puis-je retourner ma commande via bpost ?\"",
      "\"Où puis-je déposer mon colis de retour ?\""
    ],
    statsTitle: "Résultats moyens pour les webshops avec Glimps + bpost",
    stats: [
      { value: "68%", label: "Des questions de tracking traitées automatiquement" },
      { value: "-40%", label: "Moins de tickets support sur l'expédition" },
      { value: "Rapide", label: "Mise en place via connexion API" },
      { value: "24/7", label: "Réponses de tracking en direct" }
    ],
    ctaTitle: "Prêt à connecter Glimps à bpost ?",
    ctaSubtitle: "Laissez votre chatbot répondre à chaque question d'expédition belge avec les données live bpost — sans agent nécessaire.",
    seoTitle: "Chatbot IA avec bpost - Glimps AI | Intégration bpost",
    seoDescription: "Connectez Glimps à bpost pour le suivi domestique belge en temps réel via chat. Réponses automatiques sur l'état d'expédition, localisateur de points de retrait et étiquettes de retour. Service client IA 24/7.",
  } : {
    badge: "bpost Integratie",
    title: "AI Chatbot gekoppeld aan",
    titleHighlight: "bpost",
    subtitle: "Koppel Glimps aan bpost en laat je chatbot automatisch antwoorden op Belgische verzendvragen — met live binnenlandse tracking, bpost afhaalpunten en retouretiketten.",
    ctaButton: "Demo aanvragen",
    howTitle: "Hoe de bpost integratie werkt",
    howSteps: [
      {
        step: "01",
        title: "Koppel bpost",
        desc: "Verbind je bpost-account met Glimps in een paar klikken. Geen technische kennis vereist."
      },
      {
        step: "02",
        title: "Live verzenddata",
        desc: "De chatbot krijgt real-time toegang tot alle binnenlandse zendingen, trackingcodes en bezorgstatussen via de bpost API."
      },
      {
        step: "03",
        title: "AI leert je Belgische verzendflow",
        desc: "Glimps leert je levertijden, bpost afhaalpunten, retourbeleid en hoe je vertragingen communiceert."
      },
      {
        step: "04",
        title: "Automatische trackinganwoorden",
        desc: "Klanten vragen naar hun Belgische levering — de chatbot raadpleegt bpost en antwoordt onmiddellijk, 24/7."
      }
    ],
    benefitsTitle: "Wat Glimps doet met jouw bpost-data",
    benefits: [
      {
        icon: Package,
        title: "Belgische binnenlandse tracking",
        desc: "Klanten krijgen de live status van hun bpost-zending direct in de chat, zonder manuele inspanning van jouw team."
      },
      {
        icon: MapPin,
        title: "bpost afhaalpunt locator",
        desc: "De chatbot vindt de dichtstbijzijnde bpost afhaalpunten of postkantoren zodat klanten makkelijk pakketten kunnen ophalen of afgeven."
      },
      {
        icon: Truck,
        title: "Zaterdaglevering info",
        desc: "Glimps informeert klanten of zaterdaglevering beschikbaar is voor hun bestelling en wat de besteldeadlines zijn."
      },
      {
        icon: RefreshCw,
        title: "Retouretiketten via bpost",
        desc: "Glimps begeleid klanten stap voor stap bij het aanmaken van een bpost retouretiket — zonder agentondersteuning."
      },
      {
        icon: Clock,
        title: "Geschatte levertijden",
        desc: "De chatbot communiceert nauwkeurige geschatte levertijden op basis van live bpost-data voor Belgische binnenlandse zendingen."
      },
      {
        icon: Bell,
        title: "24/7 beschikbaar",
        desc: "Verzendvragen komen op alle uren binnen. De chatbot verwerkt ze direct, dag en nacht, ook in het weekend."
      }
    ],
    useCasesTitle: "Wat je klanten kunnen vragen",
    useCases: [
      "\"Waar is mijn bpost pakket op dit moment?\"",
      "\"Mijn trackingcode is 323... — wat is de status?\"",
      "\"Wanneer wordt mijn bestelling geleverd?\"",
      "\"Waar is het dichtstbijzijnde bpost afhaalpunt?\"",
      "\"Kan ik mijn pakket op zaterdag ontvangen?\"",
      "\"Mijn pakket is nog niet aangekomen, wat nu?\"",
      "\"Hoe kan ik mijn bestelling retourneren via bpost?\"",
      "\"Waar kan ik mijn retourpakket afgeven?\""
    ],
    statsTitle: "Gemiddelde resultaten voor webshops met Glimps + bpost",
    stats: [
      { value: "68%", label: "Van trackingvragen automatisch afgehandeld" },
      { value: "-40%", label: "Minder supporttickets over verzending" },
      { value: "Snel", label: "Setup via API-koppeling" },
      { value: "24/7", label: "Live trackinganwoorden" }
    ],
    ctaTitle: "Klaar om Glimps aan bpost te koppelen?",
    ctaSubtitle: "Laat je chatbot elke Belgische verzendvraag beantwoorden met live bpost-data — geen agent nodig.",
    seoTitle: "AI Chatbot met bpost - Glimps AI | bpost Integratie",
    seoDescription: "Koppel Glimps aan bpost voor live Belgische binnenlandse tracking via chat. Automatische verzendstatus antwoorden, afhaalpunt locator en retouretiketten. AI klantenservice 24/7.",
  };

  const activeContent = isEN ? enContent : content;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={activeContent.seoTitle}
        description={activeContent.seoDescription}
        path={isFR ? "/fr/integrations/bpost" : isEN ? "/en/integrations/bpost" : "/integrations/bpost"}
        language={language}
      />
      <StructuredData type="organization" />
      <StructuredData
        type="webpage"
        data={{
          name: activeContent.seoTitle,
          description: activeContent.seoDescription,
          url: isFR
            ? "https://www.glimps.be/fr/integrations/bpost"
            : isEN
            ? "https://www.glimps.be/en/integrations/bpost"
            : "https://www.glimps.be/integrations/bpost"
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
            <div className="flex h-16 w-52 items-center justify-center rounded-2xl border border-border bg-card px-6 py-3 shadow-lg">
              <img src={bpostLogo} alt="bpost logo" className="h-full w-full object-contain" />
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
              <img src={bpostLogo} alt="bpost" className="h-full w-full object-contain" />
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

export default BpostIntegration;
