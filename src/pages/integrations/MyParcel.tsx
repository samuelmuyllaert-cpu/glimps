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
  MessageSquare,
  Clock,
  ArrowRight,
  Sparkles,
  Truck,
  MapPin,
  Bell,
  RefreshCw,
} from "lucide-react";

const myparcelLogoUrl = "https://cdn.worldvectorlogo.com/logos/myparcel.svg";

const MyParcelIntegration = () => {
  const { language } = useLanguage();
  const isFR = language === 'fr';
  const isEN = language === 'en';

  const enContent = {
    badge: "MyParcel Integration",
    title: "AI Chatbot connected to",
    titleHighlight: "MyParcel",
    subtitle: "Connect Glimps to your MyParcel account and let your chatbot answer shipping and tracking questions automatically — with live shipment data across all your carriers, including PostNL, DPD, bpost and DHL.",
    ctaButton: "Request a demo",
    howTitle: "How the MyParcel integration works",
    howSteps: [
      {
        step: "01",
        title: "Connect MyParcel",
        desc: "Link your MyParcel account to Glimps in a few clicks. No technical knowledge required."
      },
      {
        step: "02",
        title: "Live shipment data",
        desc: "The chatbot gets real-time access to all shipments, tracking codes and carrier statuses via the MyParcel API."
      },
      {
        step: "03",
        title: "AI learns your shipping flow",
        desc: "Glimps learns your active carriers, delivery windows, return policy and how to communicate delays across NL and BE."
      },
      {
        step: "04",
        title: "Automatic tracking answers",
        desc: "Customers ask about their order — the chatbot checks MyParcel and answers immediately, 24/7."
      }
    ],
    benefitsTitle: "What Glimps does with your MyParcel data",
    benefits: [
      {
        icon: Truck,
        title: "Multi-carrier tracking in one chat",
        desc: "Whether your customer shipped with PostNL, DPD, bpost or DHL — Glimps reads live status updates across all MyParcel carriers in one place."
      },
      {
        icon: MapPin,
        title: "Pick-up point information",
        desc: "The chatbot tells customers which pick-up point their parcel was delivered to and how long it will be held there."
      },
      {
        icon: RefreshCw,
        title: "Return shipment guidance",
        desc: "Glimps guides customers step by step through starting a return via MyParcel — without needing agent support."
      },
      {
        icon: Package,
        title: "Shipment label status",
        desc: "Customers and your team can check whether a shipping label has been created, scanned or is still pending in MyParcel."
      },
      {
        icon: Bell,
        title: "Delivery updates and delay alerts",
        desc: "When a shipment is delayed or rerouted, the chatbot can proactively inform customers and manage their expectations."
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
      "\"Which carrier is delivering my order?\"",
      "\"My package was sent to a pick-up point — which one?\"",
      "\"When will my order be delivered?\"",
      "\"My parcel hasn't arrived yet, what do I do?\"",
      "\"Has my return label been created?\"",
      "\"How do I return my order via MyParcel?\"",
      "\"Can I change the delivery address or carrier?\""
    ],
    statsTitle: "Average results for webshops with Glimps + MyParcel",
    stats: [
      { value: "68%", label: "Of tracking questions handled automatically" },
      { value: "-40%", label: "Fewer support tickets about shipping" },
      { value: "Fast", label: "Setup via API connection" },
      { value: "24/7", label: "Live tracking answers" }
    ],
    ctaTitle: "Ready to connect Glimps to MyParcel?",
    ctaSubtitle: "Let your chatbot answer every shipping question with live MyParcel data — across all carriers, no agent needed.",
    seoTitle: "AI Chatbot with MyParcel - Glimps AI | MyParcel Integration",
    seoDescription: "Connect Glimps to MyParcel for live shipment tracking via chat. Automatic shipping status answers across PostNL, DPD, bpost and DHL. AI customer service 24/7.",
  };

  const content = isFR ? {
    badge: "Intégration MyParcel",
    title: "Chatbot IA connecté à",
    titleHighlight: "MyParcel",
    subtitle: "Connectez Glimps à votre compte MyParcel et laissez votre chatbot répondre automatiquement aux questions d'expédition et de suivi — avec les données d'envoi en temps réel de tous vos transporteurs, dont PostNL, DPD, bpost et DHL.",
    ctaButton: "Demander une démo",
    howTitle: "Comment fonctionne l'intégration MyParcel",
    howSteps: [
      {
        step: "01",
        title: "Connectez MyParcel",
        desc: "Liez votre compte MyParcel à Glimps en quelques clics. Aucune connaissance technique requise."
      },
      {
        step: "02",
        title: "Données d'expédition en temps réel",
        desc: "Le chatbot accède en temps réel à toutes les expéditions, codes de suivi et statuts des transporteurs via l'API MyParcel."
      },
      {
        step: "03",
        title: "L'IA apprend votre flux d'expédition",
        desc: "Glimps apprend vos transporteurs actifs, délais de livraison, politique de retour et comment communiquer les retards pour NL et BE."
      },
      {
        step: "04",
        title: "Réponses de suivi automatiques",
        desc: "Les clients demandent leur commande — le chatbot consulte MyParcel et répond immédiatement, 24h/24."
      }
    ],
    benefitsTitle: "Ce que Glimps fait avec vos données MyParcel",
    benefits: [
      {
        icon: Truck,
        title: "Suivi multi-transporteurs dans un seul chat",
        desc: "Que votre client soit livré par PostNL, DPD, bpost ou DHL — Glimps lit les mises à jour en temps réel de tous les transporteurs MyParcel en un seul endroit."
      },
      {
        icon: MapPin,
        title: "Informations sur les points de retrait",
        desc: "Le chatbot indique aux clients à quel point de retrait leur colis a été livré et combien de temps il y sera conservé."
      },
      {
        icon: RefreshCw,
        title: "Guidage des retours",
        desc: "Glimps guide les clients étape par étape pour initier un retour via MyParcel — sans support d'agent."
      },
      {
        icon: Package,
        title: "Statut des étiquettes d'expédition",
        desc: "Les clients et votre équipe peuvent vérifier si une étiquette d'expédition a été créée, scannée ou est encore en attente dans MyParcel."
      },
      {
        icon: Bell,
        title: "Mises à jour de livraison et alertes de retard",
        desc: "Quand une expédition est retardée ou redirigée, le chatbot peut informer proactivement les clients et gérer leurs attentes."
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
      "\"Quel transporteur livre ma commande ?\"",
      "\"Mon colis a été envoyé à un point de retrait — lequel ?\"",
      "\"Quand ma commande sera-t-elle livrée ?\"",
      "\"Mon colis n'est pas encore arrivé, que faire ?\"",
      "\"Mon étiquette de retour a-t-elle été créée ?\"",
      "\"Comment puis-je retourner ma commande via MyParcel ?\"",
      "\"Puis-je modifier l'adresse de livraison ou le transporteur ?\""
    ],
    statsTitle: "Résultats moyens pour les webshops avec Glimps + MyParcel",
    stats: [
      { value: "68%", label: "Des questions de tracking traitées automatiquement" },
      { value: "-40%", label: "Moins de tickets support sur l'expédition" },
      { value: "Rapide", label: "Mise en place via connexion API" },
      { value: "24/7", label: "Réponses de tracking en direct" }
    ],
    ctaTitle: "Prêt à connecter Glimps à MyParcel ?",
    ctaSubtitle: "Laissez votre chatbot répondre à chaque question d'expédition avec les données live MyParcel — tous transporteurs confondus, sans agent nécessaire.",
    seoTitle: "Chatbot IA avec MyParcel - Glimps AI | Intégration MyParcel",
    seoDescription: "Connectez Glimps à MyParcel pour le suivi d'expéditions en temps réel via chat. Réponses automatiques sur PostNL, DPD, bpost et DHL. Service client IA 24/7.",
  } : {
    badge: "MyParcel Integratie",
    title: "AI Chatbot gekoppeld aan",
    titleHighlight: "MyParcel",
    subtitle: "Koppel Glimps aan je MyParcel-account en laat je chatbot automatisch antwoorden op vragen over verzending en tracking — met live verzenddata van al je vervoerders, waaronder PostNL, DPD, bpost en DHL.",
    ctaButton: "Demo aanvragen",
    howTitle: "Hoe de MyParcel integratie werkt",
    howSteps: [
      {
        step: "01",
        title: "Koppel MyParcel",
        desc: "Verbind je MyParcel-account met Glimps in een paar klikken. Geen technische kennis vereist."
      },
      {
        step: "02",
        title: "Live verzenddata",
        desc: "De chatbot krijgt real-time toegang tot alle zendingen, trackingcodes en vervoerdersstatussen via de MyParcel API."
      },
      {
        step: "03",
        title: "AI leert je verzendflow",
        desc: "Glimps leert je actieve vervoerders, levertijden, retourbeleid en hoe je vertragingen communiceert voor NL en BE."
      },
      {
        step: "04",
        title: "Automatische trackinganwoorden",
        desc: "Klanten vragen naar hun bestelling — de chatbot raadpleegt MyParcel en antwoordt onmiddellijk, 24/7."
      }
    ],
    benefitsTitle: "Wat Glimps doet met jouw MyParcel-data",
    benefits: [
      {
        icon: Truck,
        title: "Multi-vervoerder tracking in één chat",
        desc: "Of je klant nu via PostNL, DPD, bpost of DHL wordt geleverd — Glimps leest live statusupdates van alle MyParcel-vervoerders op één plek."
      },
      {
        icon: MapPin,
        title: "Afhaalpunt informatie",
        desc: "De chatbot vertelt klanten bij welk afhaalpunt hun pakket is afgeleverd en hoe lang het er bewaard blijft."
      },
      {
        icon: RefreshCw,
        title: "Retourzending begeleiding",
        desc: "Glimps begeleid klanten stap voor stap bij het starten van een retour via MyParcel — zonder agentondersteuning."
      },
      {
        icon: Package,
        title: "Status van verzendlabels",
        desc: "Klanten en je team kunnen controleren of een verzendlabel is aangemaakt, gescand of nog in behandeling is in MyParcel."
      },
      {
        icon: Bell,
        title: "Leveringsupdates en vertragingsmeldingen",
        desc: "Als een zending vertraging heeft of omgeleid wordt, kan de chatbot klanten proactief informeren en verwachtingen managen."
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
      "\"Welke vervoerder levert mijn bestelling?\"",
      "\"Mijn pakket is naar een afhaalpunt gestuurd — welk?\"",
      "\"Wanneer wordt mijn bestelling geleverd?\"",
      "\"Mijn pakket is nog niet aangekomen, wat nu?\"",
      "\"Is mijn retouretiket al aangemaakt?\"",
      "\"Hoe kan ik mijn bestelling retourneren via MyParcel?\"",
      "\"Kan ik het leveringsadres of de vervoerder nog wijzigen?\""
    ],
    statsTitle: "Gemiddelde resultaten voor webshops met Glimps + MyParcel",
    stats: [
      { value: "68%", label: "Van trackingvragen automatisch afgehandeld" },
      { value: "-40%", label: "Minder supporttickets over verzending" },
      { value: "Snel", label: "Setup via API-koppeling" },
      { value: "24/7", label: "Live trackinganwoorden" }
    ],
    ctaTitle: "Klaar om Glimps aan MyParcel te koppelen?",
    ctaSubtitle: "Laat je chatbot elke verzendvraag beantwoorden met live MyParcel-data — bij alle vervoerders, geen agent nodig.",
    seoTitle: "AI Chatbot met MyParcel - Glimps AI | MyParcel Integratie",
    seoDescription: "Koppel Glimps aan MyParcel voor live zendingtracking via chat. Automatische verzendstatus antwoorden bij PostNL, DPD, bpost en DHL. AI klantenservice 24/7.",
  };

  const activeContent = isEN ? enContent : content;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={activeContent.seoTitle}
        description={activeContent.seoDescription}
        path={isFR ? "/fr/integrations/myparcel" : isEN ? "/en/integrations/myparcel" : "/integrations/myparcel"}
        language={language}
      />
      <StructuredData type="organization" />
      <StructuredData
        type="webpage"
        data={{
          name: activeContent.seoTitle,
          description: activeContent.seoDescription,
          url: isFR
            ? "https://www.glimps.be/fr/integrations/myparcel"
            : isEN
            ? "https://www.glimps.be/en/integrations/myparcel"
            : "https://www.glimps.be/integrations/myparcel"
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
            <div className="flex h-16 w-48 items-center justify-center rounded-2xl border border-border bg-card px-6 py-3 shadow-lg">
              <img src={myparcelLogoUrl} alt="MyParcel logo" className="h-full w-full object-contain" />
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
              <img src={myparcelLogoUrl} alt="MyParcel" className="h-full w-full object-contain" />
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

export default MyParcelIntegration;
