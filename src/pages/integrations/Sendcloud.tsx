import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import glimpsLogo from "@/assets/glimps-logo-new.png";
import sendcloudLogo from "@/assets/sendcloud-logo.png";
import {
  CircleCheck as CheckCircle2,
  Package,
  MessageSquare,
  Clock,
  ArrowRight,
  Sparkles,
  Truck,
  MapPin,
  Bell,
  RefreshCw,
} from "lucide-react";

const SendcloudIntegration = () => {
  const { language } = useLanguage();
  const isFR = language === 'fr';
  const isEN = language === 'en';

  const enContent = {
    badge: "Sendcloud Integration",
    title: "AI Chatbot connected to",
    titleHighlight: "Sendcloud",
    subtitle: "Connect Glimps to your Sendcloud account and let your chatbot answer shipping and order status questions automatically — using live tracking data from all your carriers.",
    ctaButton: "Request a demo",
    howTitle: "How the Sendcloud integration works",
    howSteps: [
      {
        step: "01",
        title: "Connect Sendcloud",
        desc: "Link your Sendcloud account to Glimps in a few clicks. No technical knowledge required."
      },
      {
        step: "02",
        title: "Live shipment data",
        desc: "The chatbot gets real-time access to all shipments, tracking codes and carrier statuses via the Sendcloud API."
      },
      {
        step: "03",
        title: "AI learns your shipping flow",
        desc: "Glimps learns your shipping carriers, delivery windows, return policy and how to communicate delays."
      },
      {
        step: "04",
        title: "Automatic tracking answers",
        desc: "Customers ask about their order — the chatbot checks Sendcloud and answers immediately, 24/7."
      }
    ],
    benefitsTitle: "What Glimps does with your Sendcloud data",
    benefits: [
      {
        icon: Package,
        title: "Real-time order tracking",
        desc: "Customers get the current status of their shipment directly in the chat, without any manual effort from your team."
      },
      {
        icon: Truck,
        title: "Multi-carrier support",
        desc: "Whether you ship with PostNL, DPD, DHL, bpost or GLS — Glimps reads status updates across all Sendcloud carriers."
      },
      {
        icon: MapPin,
        title: "Delivery location updates",
        desc: "The chatbot tells customers exactly where their parcel is and when it's expected to arrive."
      },
      {
        icon: Bell,
        title: "Proactive delay notifications",
        desc: "When a shipment is delayed, the chatbot can proactively inform customers and manage expectations."
      },
      {
        icon: RefreshCw,
        title: "Return shipment guidance",
        desc: "Glimps walks customers through starting a return via Sendcloud — step by step, without needing agent support."
      },
      {
        icon: Clock,
        title: "Available 24/7",
        desc: "Shipping questions arrive at all hours. The chatbot handles them instantly, day and night, weekends included."
      }
    ],
    useCasesTitle: "What your customers can ask",
    useCases: [
      "\"Where is my parcel right now?\"",
      "\"My tracking code is 1Z123 — what's the status?\"",
      "\"When will my order be delivered?\"",
      "\"My package hasn't arrived yet, what do I do?\"",
      "\"Which carrier are you using for my shipment?\"",
      "\"Can I change my delivery address?\"",
      "\"How do I return my order?\"",
      "\"Where can I drop off my return parcel?\""
    ],
    statsTitle: "Average results for webshops with Glimps + Sendcloud",
    stats: [
      { value: "68%", label: "Of tracking questions handled automatically" },
      { value: "-40%", label: "Fewer support tickets about shipping" },
      { value: "Fast", label: "Setup via API connection" },
      { value: "24/7", label: "Live tracking answers" }
    ],
    ctaTitle: "Ready to connect Glimps to Sendcloud?",
    ctaSubtitle: "Let your chatbot answer every shipping question with live Sendcloud data — no agent needed.",
    seoTitle: "AI Chatbot with Sendcloud - Glimps AI | Sendcloud Integration",
    seoDescription: "Connect Glimps to Sendcloud for live order tracking via chat. Automatic shipping status answers across all carriers. AI customer service 24/7.",
  };

  const content = isFR ? {
    badge: "Intégration Sendcloud",
    title: "Chatbot IA connecté à",
    titleHighlight: "Sendcloud",
    subtitle: "Connectez Glimps à votre compte Sendcloud et laissez votre chatbot répondre automatiquement aux questions d'expédition et de suivi de commandes — avec les données de tracking en temps réel de tous vos transporteurs.",
    ctaButton: "Demander une démo",
    howTitle: "Comment fonctionne l'intégration Sendcloud",
    howSteps: [
      {
        step: "01",
        title: "Connectez Sendcloud",
        desc: "Liez votre compte Sendcloud à Glimps en quelques clics. Aucune connaissance technique requise."
      },
      {
        step: "02",
        title: "Données d'expédition en temps réel",
        desc: "Le chatbot accède en temps réel à toutes les expéditions, codes de suivi et statuts des transporteurs via l'API Sendcloud."
      },
      {
        step: "03",
        title: "L'IA apprend votre flux d'expédition",
        desc: "Glimps apprend vos transporteurs, délais de livraison, politique de retour et comment communiquer les retards."
      },
      {
        step: "04",
        title: "Réponses de suivi automatiques",
        desc: "Les clients demandent leur commande — le chatbot consulte Sendcloud et répond immédiatement, 24h/24."
      }
    ],
    benefitsTitle: "Ce que Glimps fait avec vos données Sendcloud",
    benefits: [
      {
        icon: Package,
        title: "Suivi des commandes en temps réel",
        desc: "Les clients obtiennent le statut actuel de leur expédition directement dans le chat, sans effort manuel de votre équipe."
      },
      {
        icon: Truck,
        title: "Support multi-transporteurs",
        desc: "Que vous expédiiez avec PostNL, DPD, DHL, bpost ou GLS — Glimps lit les mises à jour de statut sur tous les transporteurs Sendcloud."
      },
      {
        icon: MapPin,
        title: "Mises à jour de localisation",
        desc: "Le chatbot indique aux clients exactement où se trouve leur colis et quand il doit arriver."
      },
      {
        icon: Bell,
        title: "Notifications de retard proactives",
        desc: "Quand une expédition est retardée, le chatbot peut informer proactivement les clients et gérer leurs attentes."
      },
      {
        icon: RefreshCw,
        title: "Guidage des retours",
        desc: "Glimps guide les clients étape par étape pour initier un retour via Sendcloud — sans support d'agent."
      },
      {
        icon: Clock,
        title: "Disponible 24h/24, 7j/7",
        desc: "Les questions d'expédition arrivent à toute heure. Le chatbot les traite instantanément, jour et nuit, week-ends inclus."
      }
    ],
    useCasesTitle: "Ce que vos clients peuvent demander",
    useCases: [
      "\"Où est mon colis en ce moment ?\"",
      "\"Mon code de suivi est 1Z123 — quel est le statut ?\"",
      "\"Quand ma commande sera-t-elle livrée ?\"",
      "\"Mon colis n'est pas encore arrivé, que faire ?\"",
      "\"Quel transporteur utilisez-vous pour mon expédition ?\"",
      "\"Puis-je modifier mon adresse de livraison ?\"",
      "\"Comment puis-je retourner ma commande ?\"",
      "\"Où puis-je déposer mon colis de retour ?\""
    ],
    statsTitle: "Résultats moyens pour les webshops avec Glimps + Sendcloud",
    stats: [
      { value: "68%", label: "Des questions de tracking traitées automatiquement" },
      { value: "-40%", label: "Moins de tickets support sur l'expédition" },
      { value: "Rapide", label: "Mise en place via connexion API" },
      { value: "24/7", label: "Réponses de tracking en direct" }
    ],
    ctaTitle: "Prêt à connecter Glimps à Sendcloud ?",
    ctaSubtitle: "Laissez votre chatbot répondre à chaque question d'expédition avec les données live Sendcloud — sans agent nécessaire.",
    seoTitle: "Chatbot IA avec Sendcloud - Glimps AI | Intégration Sendcloud",
    seoDescription: "Connectez Glimps à Sendcloud pour le suivi de commandes en temps réel via chat. Réponses automatiques sur l'état d'expédition. Service client IA 24/7.",
  } : {
    badge: "Sendcloud Integratie",
    title: "AI Chatbot gekoppeld aan",
    titleHighlight: "Sendcloud",
    subtitle: "Koppel Glimps aan je Sendcloud-account en laat je chatbot automatisch antwoorden op vragen over verzending en orderstatus — met live trackingdata van al je vervoerders.",
    ctaButton: "Demo aanvragen",
    howTitle: "Hoe de Sendcloud integratie werkt",
    howSteps: [
      {
        step: "01",
        title: "Koppel Sendcloud",
        desc: "Verbind je Sendcloud-account met Glimps in een paar klikken. Geen technische kennis vereist."
      },
      {
        step: "02",
        title: "Live verzenddata",
        desc: "De chatbot krijgt real-time toegang tot alle zendingen, trackingcodes en vervoerdersstatussen via de Sendcloud API."
      },
      {
        step: "03",
        title: "AI leert je verzendflow",
        desc: "Glimps leert je vervoerders, levertijden, retourbeleid en hoe je vertragingen communiceert."
      },
      {
        step: "04",
        title: "Automatische trackinganwoorden",
        desc: "Klanten vragen naar hun bestelling — de chatbot raadpleegt Sendcloud en antwoordt onmiddellijk, 24/7."
      }
    ],
    benefitsTitle: "Wat Glimps doet met jouw Sendcloud-data",
    benefits: [
      {
        icon: Package,
        title: "Real-time besteltracking",
        desc: "Klanten krijgen de huidige status van hun zending direct in de chat, zonder manuele inspanning van jouw team."
      },
      {
        icon: Truck,
        title: "Multi-vervoerder ondersteuning",
        desc: "Of je nu verzendt met PostNL, DPD, DHL, bpost of GLS — Glimps leest statusupdates van alle Sendcloud-vervoerders."
      },
      {
        icon: MapPin,
        title: "Locatie-updates van de zending",
        desc: "De chatbot vertelt klanten exact waar hun pakket zich bevindt en wanneer het verwacht wordt."
      },
      {
        icon: Bell,
        title: "Proactieve vertragingsmeldingen",
        desc: "Als een zending vertraging heeft, kan de chatbot klanten proactief informeren en verwachtingen managen."
      },
      {
        icon: RefreshCw,
        title: "Retourzending begeleiding",
        desc: "Glimps begeleid klanten stap voor stap bij het starten van een retour via Sendcloud — zonder agentondersteuning."
      },
      {
        icon: Clock,
        title: "24/7 beschikbaar",
        desc: "Verzendvragen komen op alle uren binnen. De chatbot verwerkt ze direct, dag en nacht, ook in het weekend."
      }
    ],
    useCasesTitle: "Wat je klanten kunnen vragen",
    useCases: [
      "\"Waar is mijn pakket op dit moment?\"",
      "\"Mijn trackingcode is 1Z123 — wat is de status?\"",
      "\"Wanneer wordt mijn bestelling geleverd?\"",
      "\"Mijn pakket is nog niet aangekomen, wat nu?\"",
      "\"Welke vervoerder gebruiken jullie voor mijn zending?\"",
      "\"Kan ik mijn leveringsadres nog wijzigen?\"",
      "\"Hoe kan ik mijn bestelling retourneren?\"",
      "\"Waar kan ik mijn retourpakket afgeven?\""
    ],
    statsTitle: "Gemiddelde resultaten voor webshops met Glimps + Sendcloud",
    stats: [
      { value: "68%", label: "Van trackingvragen automatisch afgehandeld" },
      { value: "-40%", label: "Minder supporttickets over verzending" },
      { value: "Snel", label: "Setup via API-koppeling" },
      { value: "24/7", label: "Live trackinganwoorden" }
    ],
    ctaTitle: "Klaar om Glimps aan Sendcloud te koppelen?",
    ctaSubtitle: "Laat je chatbot elke verzendvraag beantwoorden met live Sendcloud-data — geen agent nodig.",
    seoTitle: "AI Chatbot met Sendcloud - Glimps AI | Sendcloud Integratie",
    seoDescription: "Koppel Glimps aan Sendcloud voor live besteltracking via chat. Automatische verzendstatus antwoorden bij alle vervoerders. AI klantenservice 24/7.",
  };

  const activeContent = isEN ? enContent : content;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={activeContent.seoTitle}
        description={activeContent.seoDescription}
        path={isFR ? "/fr/integrations/sendcloud" : isEN ? "/en/integrations/sendcloud" : "/integrations/sendcloud"}
        language={language}
      />
      <StructuredData type="organization" />
      <StructuredData
        type="webpage"
        data={{
          name: activeContent.seoTitle,
          description: activeContent.seoDescription,
          url: isFR
            ? "https://www.glimps.be/fr/integrations/sendcloud"
            : isEN
            ? "https://www.glimps.be/en/integrations/sendcloud"
            : "https://www.glimps.be/integrations/sendcloud"
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
            <div className="flex h-16 w-56 items-center justify-center rounded-2xl border border-border bg-card px-6 py-3 shadow-lg">
              <img src={sendcloudLogo} alt="Sendcloud logo" className="h-full w-full object-contain" />
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
              <img src={sendcloudLogo} alt="Sendcloud" className="h-full w-full object-contain" />
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

export default SendcloudIntegration;
