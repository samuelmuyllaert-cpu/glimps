import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import glimpsLogo from "@/assets/glimps-logo-new.png";
import postnlLogo from "@/assets/postnl-logo.png";
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

const PostNLIntegration = () => {
  const { language } = useLanguage();
  const isFR = language === 'fr';
  const isEN = language === 'en';

  const enContent = {
    badge: "PostNL Integration",
    title: "AI Chatbot connected to",
    titleHighlight: "PostNL",
    subtitle: "Connect Glimps to PostNL and let your chatbot automatically answer parcel tracking questions — with live Dutch and Belgian shipment data, pick-up point locators, and return shipment guidance.",
    ctaButton: "Request a demo",
    howTitle: "How the PostNL integration works",
    howSteps: [
      {
        step: "01",
        title: "Connect PostNL",
        desc: "Link your PostNL account to Glimps in a few clicks. No technical knowledge required."
      },
      {
        step: "02",
        title: "Live parcel data",
        desc: "The chatbot gets real-time access to all shipments, tracking codes and delivery statuses via the PostNL API."
      },
      {
        step: "03",
        title: "AI learns your shipping flow",
        desc: "Glimps learns your delivery windows, PostNL service points, return policy and how to handle missed deliveries."
      },
      {
        step: "04",
        title: "Automatic tracking answers",
        desc: "Customers ask about their parcel — the chatbot checks PostNL and answers immediately, 24/7."
      }
    ],
    benefitsTitle: "What Glimps does with your PostNL data",
    benefits: [
      {
        icon: Package,
        title: "Dutch and Belgian tracking",
        desc: "Customers get the live status of their PostNL shipment directly in the chat, for both the Netherlands and Belgium."
      },
      {
        icon: MapPin,
        title: "PostNL pick-up point locator",
        desc: "The chatbot finds the nearest PostNL service points and parcel lockers so customers can collect or drop off parcels with ease."
      },
      {
        icon: Bell,
        title: "Missed delivery support",
        desc: "When a delivery attempt fails, Glimps informs customers of the next steps and helps them reschedule or redirect their parcel."
      },
      {
        icon: RefreshCw,
        title: "Return shipments",
        desc: "Glimps guides customers step by step through starting a return shipment via PostNL — no agent support needed."
      },
      {
        icon: Truck,
        title: "Parcel locker (pakketkluis)",
        desc: "The chatbot informs customers about PostNL parcel locker availability and how to use them for 24/7 parcel pickup."
      },
      {
        icon: Clock,
        title: "Available 24/7",
        desc: "Shipping questions arrive at all hours. The chatbot handles them instantly, day and night, weekends included."
      }
    ],
    useCasesTitle: "What your customers can ask",
    useCases: [
      "\"Where is my PostNL parcel right now?\"",
      "\"My tracking code is 3S... — what's the status?\"",
      "\"When will my order be delivered?\"",
      "\"Where is the nearest PostNL pick-up point?\"",
      "\"I missed my delivery — what do I do?\"",
      "\"Can I have my parcel delivered to a parcel locker?\"",
      "\"How do I return my order via PostNL?\"",
      "\"Where can I drop off my return parcel?\""
    ],
    statsTitle: "Average results for webshops with Glimps + PostNL",
    stats: [
      { value: "68%", label: "Of tracking questions handled automatically" },
      { value: "-40%", label: "Fewer support tickets about shipping" },
      { value: "Fast", label: "Setup via API connection" },
      { value: "24/7", label: "Live tracking answers" }
    ],
    ctaTitle: "Ready to connect Glimps to PostNL?",
    ctaSubtitle: "Let your chatbot answer every PostNL shipping question with live parcel data — no agent needed.",
    seoTitle: "AI Chatbot with PostNL - Glimps AI | PostNL Integration",
    seoDescription: "Connect Glimps to PostNL for live parcel tracking via chat. Automatic shipping status answers, pick-up point locator and return shipments for NL and BE. AI customer service 24/7.",
  };

  const content = isFR ? {
    badge: "Intégration PostNL",
    title: "Chatbot IA connecté à",
    titleHighlight: "PostNL",
    subtitle: "Connectez Glimps à PostNL et laissez votre chatbot répondre automatiquement aux questions de suivi de colis — avec les données d'expédition en temps réel pour les Pays-Bas et la Belgique, les points de retrait et la gestion des retours.",
    ctaButton: "Demander une démo",
    howTitle: "Comment fonctionne l'intégration PostNL",
    howSteps: [
      {
        step: "01",
        title: "Connectez PostNL",
        desc: "Liez votre compte PostNL à Glimps en quelques clics. Aucune connaissance technique requise."
      },
      {
        step: "02",
        title: "Données de colis en temps réel",
        desc: "Le chatbot accède en temps réel à tous les envois, codes de suivi et statuts de livraison via l'API PostNL."
      },
      {
        step: "03",
        title: "L'IA apprend votre flux d'expédition",
        desc: "Glimps apprend vos délais de livraison, les points de service PostNL, votre politique de retour et comment gérer les livraisons manquées."
      },
      {
        step: "04",
        title: "Réponses de suivi automatiques",
        desc: "Les clients posent des questions sur leur colis — le chatbot consulte PostNL et répond immédiatement, 24h/24."
      }
    ],
    benefitsTitle: "Ce que Glimps fait avec vos données PostNL",
    benefits: [
      {
        icon: Package,
        title: "Suivi néerlandais et belge",
        desc: "Les clients obtiennent le statut en direct de leur envoi PostNL directement dans le chat, pour les Pays-Bas et la Belgique."
      },
      {
        icon: MapPin,
        title: "Localisateur de points de retrait PostNL",
        desc: "Le chatbot trouve les points de service et consignes à colis PostNL les plus proches pour que les clients puissent récupérer ou déposer leurs colis facilement."
      },
      {
        icon: Bell,
        title: "Support en cas de livraison manquée",
        desc: "Quand une tentative de livraison échoue, Glimps informe les clients des prochaines étapes et les aide à reprogrammer ou rediriger leur colis."
      },
      {
        icon: RefreshCw,
        title: "Retours d'expédition",
        desc: "Glimps guide les clients étape par étape pour initier un retour via PostNL — sans support d'agent nécessaire."
      },
      {
        icon: Truck,
        title: "Consigne à colis (pakketkluis)",
        desc: "Le chatbot informe les clients sur la disponibilité des consignes à colis PostNL et comment les utiliser pour le retrait 24h/24."
      },
      {
        icon: Clock,
        title: "Disponible 24h/24, 7j/7",
        desc: "Les questions d'expédition arrivent à toute heure. Le chatbot les traite instantanément, jour et nuit, week-ends inclus."
      }
    ],
    useCasesTitle: "Ce que vos clients peuvent demander",
    useCases: [
      "\"Où est mon colis PostNL en ce moment ?\"",
      "\"Mon code de suivi est 3S... — quel est le statut ?\"",
      "\"Quand ma commande sera-t-elle livrée ?\"",
      "\"Où est le point de retrait PostNL le plus proche ?\"",
      "\"J'ai raté ma livraison — que faire ?\"",
      "\"Puis-je faire livrer mon colis dans une consigne ?\"",
      "\"Comment puis-je retourner ma commande via PostNL ?\"",
      "\"Où puis-je déposer mon colis de retour ?\""
    ],
    statsTitle: "Résultats moyens pour les webshops avec Glimps + PostNL",
    stats: [
      { value: "68%", label: "Des questions de tracking traitées automatiquement" },
      { value: "-40%", label: "Moins de tickets support sur l'expédition" },
      { value: "Rapide", label: "Mise en place via connexion API" },
      { value: "24/7", label: "Réponses de tracking en direct" }
    ],
    ctaTitle: "Prêt à connecter Glimps à PostNL ?",
    ctaSubtitle: "Laissez votre chatbot répondre à chaque question d'expédition PostNL avec les données de colis en direct — sans agent nécessaire.",
    seoTitle: "Chatbot IA avec PostNL - Glimps AI | Intégration PostNL",
    seoDescription: "Connectez Glimps à PostNL pour le suivi de colis en temps réel via chat. Réponses automatiques sur l'état d'expédition, localisateur de points de retrait et retours pour NL et BE. Service client IA 24/7.",
  } : {
    badge: "PostNL Integratie",
    title: "AI Chatbot gekoppeld aan",
    titleHighlight: "PostNL",
    subtitle: "Koppel Glimps aan PostNL en laat je chatbot automatisch antwoorden op pakketvragen — met live verzenddata voor Nederland en België, afhaalpuntlocators en begeleiding bij retourzendingen.",
    ctaButton: "Demo aanvragen",
    howTitle: "Hoe de PostNL integratie werkt",
    howSteps: [
      {
        step: "01",
        title: "Koppel PostNL",
        desc: "Verbind je PostNL-account met Glimps in een paar klikken. Geen technische kennis vereist."
      },
      {
        step: "02",
        title: "Live pakketdata",
        desc: "De chatbot krijgt real-time toegang tot alle zendingen, trackingcodes en bezorgstatussen via de PostNL API."
      },
      {
        step: "03",
        title: "AI leert je verzendflow",
        desc: "Glimps leert je levertijden, PostNL servicepunten, retourbeleid en hoe je gemiste bezorgingen afhandelt."
      },
      {
        step: "04",
        title: "Automatische trackinganwoorden",
        desc: "Klanten vragen naar hun pakket — de chatbot raadpleegt PostNL en antwoordt onmiddellijk, 24/7."
      }
    ],
    benefitsTitle: "Wat Glimps doet met jouw PostNL-data",
    benefits: [
      {
        icon: Package,
        title: "Nederlandse en Belgische tracking",
        desc: "Klanten krijgen de live status van hun PostNL-zending direct in de chat, voor zowel Nederland als België."
      },
      {
        icon: MapPin,
        title: "PostNL afhaalpunt locator",
        desc: "De chatbot vindt de dichtstbijzijnde PostNL servicepunten en pakkettloketten zodat klanten makkelijk pakketten kunnen ophalen of afgeven."
      },
      {
        icon: Bell,
        title: "Gemiste bezorging afhandeling",
        desc: "Als een bezorgpoging mislukt, informeert Glimps klanten over de volgende stappen en helpt hen bij het herplannen of omleiden van hun pakket."
      },
      {
        icon: RefreshCw,
        title: "Retourzendingen",
        desc: "Glimps begeleid klanten stap voor stap bij het starten van een retourzending via PostNL — zonder agentondersteuning."
      },
      {
        icon: Truck,
        title: "Pakketkluis",
        desc: "De chatbot informeert klanten over de beschikbaarheid van PostNL pakkettloketten en hoe ze die kunnen gebruiken voor 24/7 pakketophaling."
      },
      {
        icon: Clock,
        title: "24/7 beschikbaar",
        desc: "Verzendvragen komen op alle uren binnen. De chatbot verwerkt ze direct, dag en nacht, ook in het weekend."
      }
    ],
    useCasesTitle: "Wat je klanten kunnen vragen",
    useCases: [
      "\"Waar is mijn PostNL pakket op dit moment?\"",
      "\"Mijn trackingcode is 3S... — wat is de status?\"",
      "\"Wanneer wordt mijn bestelling geleverd?\"",
      "\"Waar is het dichtstbijzijnde PostNL afhaalpunt?\"",
      "\"Ik heb mijn bezorging gemist — wat nu?\"",
      "\"Kan mijn pakket in een pakketkluis bezorgd worden?\"",
      "\"Hoe kan ik mijn bestelling retourneren via PostNL?\"",
      "\"Waar kan ik mijn retourpakket afgeven?\""
    ],
    statsTitle: "Gemiddelde resultaten voor webshops met Glimps + PostNL",
    stats: [
      { value: "68%", label: "Van trackingvragen automatisch afgehandeld" },
      { value: "-40%", label: "Minder supporttickets over verzending" },
      { value: "Snel", label: "Setup via API-koppeling" },
      { value: "24/7", label: "Live trackinganwoorden" }
    ],
    ctaTitle: "Klaar om Glimps aan PostNL te koppelen?",
    ctaSubtitle: "Laat je chatbot elke PostNL verzendvraag beantwoorden met live pakketdata — geen agent nodig.",
    seoTitle: "AI Chatbot met PostNL - Glimps AI | PostNL Integratie",
    seoDescription: "Koppel Glimps aan PostNL voor live pakkettracking via chat. Automatische verzendstatus antwoorden, afhaalpunt locator en retourzendingen voor NL en BE. AI klantenservice 24/7.",
  };

  const activeContent = isEN ? enContent : content;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={activeContent.seoTitle}
        description={activeContent.seoDescription}
        path={isFR ? "/fr/integrations/postnl" : isEN ? "/en/integrations/postnl" : "/integrations/postnl"}
        language={language}
      />
      <StructuredData type="organization" />
      <StructuredData
        type="webpage"
        data={{
          name: activeContent.seoTitle,
          description: activeContent.seoDescription,
          url: isFR
            ? "https://www.glimps.be/fr/integrations/postnl"
            : isEN
            ? "https://www.glimps.be/en/integrations/postnl"
            : "https://www.glimps.be/integrations/postnl"
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
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-border bg-card p-3 shadow-lg">
              <img src={postnlLogo} alt="PostNL logo" className="h-full w-full object-contain" />
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
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-white p-1.5">
              <img src={postnlLogo} alt="PostNL" className="h-full w-full object-contain" />
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

export default PostNLIntegration;
