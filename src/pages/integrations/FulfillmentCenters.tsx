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
  Warehouse,
} from "lucide-react";

const FulfillmentCentersIntegration = () => {
  const { language } = useLanguage();
  const isFR = language === 'fr';
  const isEN = language === 'en';

  const enContent = {
    badge: "Fulfillment Centers Integration",
    title: "AI Chatbot connected to your",
    titleHighlight: "Fulfillment Center",
    subtitle: "Connect Glimps to your external fulfillment partner or 3PL logistics provider and let your chatbot answer questions about order status, stock at the fulfillment center, carrier handoffs and return processing — automatically, 24/7.",
    ctaButton: "Request a demo",
    howTitle: "How the Fulfillment Centers integration works",
    howSteps: [
      {
        step: "01",
        title: "Connect your fulfillment partner",
        desc: "Link your fulfillment center or 3PL to Glimps via API. Most major fulfillment platforms are supported."
      },
      {
        step: "02",
        title: "Live fulfillment data",
        desc: "The chatbot gets real-time access to order statuses, stock levels, carrier handoffs and return processing data."
      },
      {
        step: "03",
        title: "AI learns your logistics flow",
        desc: "Glimps learns your fulfillment SLAs, carrier handoff windows, return procedures and how to handle delay communications."
      },
      {
        step: "04",
        title: "Automatic fulfillment answers",
        desc: "Customers ask about their order or shipment — the chatbot checks your fulfillment center and responds immediately, 24/7."
      }
    ],
    benefitsTitle: "What Glimps does with your fulfillment center data",
    benefits: [
      {
        icon: Package,
        title: "Order handover status",
        desc: "Customers can ask whether their order has been handed over to the carrier from the fulfillment center and get an immediate, accurate answer."
      },
      {
        icon: Truck,
        title: "Carrier handoff tracking",
        desc: "Glimps tracks when an order leaves the fulfillment center and has been picked up by the carrier — and communicates this clearly in chat."
      },
      {
        icon: MapPin,
        title: "Stock at fulfillment center",
        desc: "The chatbot can answer questions about current stock levels at your fulfillment center, including reserved and available inventory."
      },
      {
        icon: RefreshCw,
        title: "Return processing updates",
        desc: "Glimps informs customers about the status of their return at the fulfillment center — whether it has been received, inspected or refunded."
      },
      {
        icon: Bell,
        title: "Fulfillment delay notifications",
        desc: "When a fulfillment delay occurs, the chatbot proactively informs affected customers and sets realistic expectations."
      },
      {
        icon: Clock,
        title: "SLA questions answered automatically",
        desc: "Customers asking about delivery timeframes or SLA commitments get instant answers based on your fulfillment center's current performance data."
      }
    ],
    useCasesTitle: "What your customers can ask",
    useCases: [
      "\"Has my order been shipped from the warehouse yet?\"",
      "\"When was my order handed over to the carrier?\"",
      "\"Is my return being processed at the fulfillment center?\"",
      "\"How long does it take from order to dispatch?\"",
      "\"Is the item I ordered still in stock at your warehouse?\"",
      "\"Why is my order delayed at the fulfillment center?\"",
      "\"Has my return been received and confirmed?\"",
      "\"What is the expected delivery timeframe for my order?\""
    ],
    statsTitle: "Average results for webshops with Glimps + Fulfillment Centers",
    stats: [
      { value: "65%", label: "Of fulfillment questions automated" },
      { value: "-35%", label: "Fewer logistics support tickets" },
      { value: "Fast", label: "API integration setup" },
      { value: "24/7", label: "Live fulfillment answers" }
    ],
    ctaTitle: "Ready to connect Glimps to your Fulfillment Center?",
    ctaSubtitle: "Let your chatbot answer every logistics and fulfillment question with live data from your fulfillment partner — no agent needed.",
    seoTitle: "AI Chatbot with Fulfillment Centers - Glimps AI | 3PL Integration",
    seoDescription: "Connect Glimps to your fulfillment center or 3PL for live order status, carrier handoffs and return processing via chat. AI customer service 24/7.",
  };

  const content = isFR ? {
    badge: "Intégration Centres de Fulfillment",
    title: "Chatbot IA connecté à votre",
    titleHighlight: "Centre de Fulfillment",
    subtitle: "Connectez Glimps à votre partenaire de fulfillment externe ou prestataire logistique 3PL et laissez votre chatbot répondre automatiquement aux questions sur le statut des commandes, le stock au centre de fulfillment, les remises aux transporteurs et le traitement des retours — 24h/24, 7j/7.",
    ctaButton: "Demander une démo",
    howTitle: "Comment fonctionne l'intégration Centres de Fulfillment",
    howSteps: [
      {
        step: "01",
        title: "Connectez votre partenaire fulfillment",
        desc: "Liez votre centre de fulfillment ou 3PL à Glimps via API. La plupart des plateformes de fulfillment majeures sont supportées."
      },
      {
        step: "02",
        title: "Données de fulfillment en temps réel",
        desc: "Le chatbot accède en temps réel aux statuts des commandes, niveaux de stock, remises aux transporteurs et données de traitement des retours."
      },
      {
        step: "03",
        title: "L'IA apprend votre flux logistique",
        desc: "Glimps apprend vos SLA de fulfillment, délais de remise aux transporteurs, procédures de retour et comment gérer les communications de retard."
      },
      {
        step: "04",
        title: "Réponses de fulfillment automatiques",
        desc: "Les clients posent des questions sur leur commande ou expédition — le chatbot consulte votre centre de fulfillment et répond immédiatement, 24h/24."
      }
    ],
    benefitsTitle: "Ce que Glimps fait avec les données de votre centre de fulfillment",
    benefits: [
      {
        icon: Package,
        title: "Statut de remise des commandes",
        desc: "Les clients peuvent demander si leur commande a été remise au transporteur depuis le centre de fulfillment et obtenir une réponse immédiate et précise."
      },
      {
        icon: Truck,
        title: "Suivi de remise aux transporteurs",
        desc: "Glimps suit quand une commande quitte le centre de fulfillment et a été prise en charge par le transporteur — et le communique clairement dans le chat."
      },
      {
        icon: MapPin,
        title: "Stock au centre de fulfillment",
        desc: "Le chatbot peut répondre aux questions sur les niveaux de stock actuels au centre de fulfillment, y compris l'inventaire réservé et disponible."
      },
      {
        icon: RefreshCw,
        title: "Mises à jour du traitement des retours",
        desc: "Glimps informe les clients sur le statut de leur retour au centre de fulfillment — s'il a été reçu, inspecté ou remboursé."
      },
      {
        icon: Bell,
        title: "Notifications de retard de fulfillment",
        desc: "Quand un retard de fulfillment se produit, le chatbot informe proactivement les clients concernés et définit des attentes réalistes."
      },
      {
        icon: Clock,
        title: "Questions SLA répondues automatiquement",
        desc: "Les clients qui posent des questions sur les délais de livraison ou les engagements SLA obtiennent des réponses instantanées basées sur les données actuelles de votre centre."
      }
    ],
    useCasesTitle: "Ce que vos clients peuvent demander",
    useCases: [
      "\"Ma commande a-t-elle déjà été expédiée depuis l'entrepôt ?\"",
      "\"Quand ma commande a-t-elle été remise au transporteur ?\"",
      "\"Mon retour est-il traité au centre de fulfillment ?\"",
      "\"Combien de temps faut-il entre la commande et l'expédition ?\"",
      "\"L'article que j'ai commandé est-il encore en stock dans votre entrepôt ?\"",
      "\"Pourquoi ma commande est-elle retardée au centre de fulfillment ?\"",
      "\"Mon retour a-t-il bien été reçu et confirmé ?\"",
      "\"Quel est le délai de livraison prévu pour ma commande ?\""
    ],
    statsTitle: "Résultats moyens pour les webshops avec Glimps + Centres de Fulfillment",
    stats: [
      { value: "65%", label: "Des questions fulfillment automatisées" },
      { value: "-35%", label: "Moins de tickets support logistique" },
      { value: "Rapide", label: "Intégration API" },
      { value: "24/7", label: "Réponses fulfillment en direct" }
    ],
    ctaTitle: "Prêt à connecter Glimps à votre Centre de Fulfillment ?",
    ctaSubtitle: "Laissez votre chatbot répondre à chaque question logistique et fulfillment avec les données live de votre partenaire fulfillment — sans agent nécessaire.",
    seoTitle: "Chatbot IA avec Centres de Fulfillment - Glimps AI | Intégration 3PL",
    seoDescription: "Connectez Glimps à votre centre de fulfillment ou 3PL pour le statut live des commandes, remises aux transporteurs et traitement des retours via chat. IA 24/7.",
  } : {
    badge: "Fulfillment Centers Integratie",
    title: "AI Chatbot gekoppeld aan je",
    titleHighlight: "Fulfillment Center",
    subtitle: "Koppel Glimps aan je externe fulfilmentpartner of 3PL-logistiek en laat je chatbot automatisch antwoorden op vragen over orderstatus, voorraad bij het fulfilment center, overdracht aan vervoerders en retourverwerking — 24/7.",
    ctaButton: "Demo aanvragen",
    howTitle: "Hoe de Fulfillment Centers integratie werkt",
    howSteps: [
      {
        step: "01",
        title: "Koppel je fulfilmentpartner",
        desc: "Verbind je fulfillment center of 3PL met Glimps via API. De meeste grote fulfilmentplatformen worden ondersteund."
      },
      {
        step: "02",
        title: "Live fulfilmentdata",
        desc: "De chatbot krijgt real-time toegang tot orderstatussen, voorraadniveaus, overdrachten aan vervoerders en retourverwerkingsdata."
      },
      {
        step: "03",
        title: "AI leert je logistieke flow",
        desc: "Glimps leert je fulfilment-SLA's, overdrachtsmomenten naar vervoerders, retourbeschrijvingen en hoe je vertragingen communiceert."
      },
      {
        step: "04",
        title: "Automatische fulfilmentanwoorden",
        desc: "Klanten vragen naar hun bestelling of zending — de chatbot raadpleegt je fulfillment center en antwoordt onmiddellijk, 24/7."
      }
    ],
    benefitsTitle: "Wat Glimps doet met jouw fulfillment center data",
    benefits: [
      {
        icon: Package,
        title: "Overdrachtstatus van bestellingen",
        desc: "Klanten kunnen vragen of hun bestelling al is overgedragen aan de vervoerder vanuit het fulfillment center en krijgen direct een accuraat antwoord."
      },
      {
        icon: Truck,
        title: "Vervoerdersoverdracht tracking",
        desc: "Glimps volgt wanneer een bestelling het fulfillment center verlaat en is opgehaald door de vervoerder — en communiceert dit duidelijk in de chat."
      },
      {
        icon: MapPin,
        title: "Voorraad bij fulfillment center",
        desc: "De chatbot kan vragen beantwoorden over actuele voorraadniveaus bij je fulfillment center, inclusief gereserveerde en beschikbare inventaris."
      },
      {
        icon: RefreshCw,
        title: "Retourverwerkingsupdates",
        desc: "Glimps informeert klanten over de status van hun retour bij het fulfillment center — of het ontvangen, geïnspecteerd of terugbetaald is."
      },
      {
        icon: Bell,
        title: "Fulfilment-vertragingsmeldingen",
        desc: "Als er een fulfilmentvertraging optreedt, informeert de chatbot getroffen klanten proactief en stelt realistische verwachtingen."
      },
      {
        icon: Clock,
        title: "SLA-vragen automatisch beantwoord",
        desc: "Klanten die vragen over levertijden of SLA-afspraken krijgen directe antwoorden op basis van de actuele prestatiedata van je fulfillment center."
      }
    ],
    useCasesTitle: "Wat je klanten kunnen vragen",
    useCases: [
      "\"Is mijn bestelling al verstuurd vanuit het magazijn?\"",
      "\"Wanneer is mijn bestelling overgedragen aan de vervoerder?\"",
      "\"Wordt mijn retour verwerkt bij het fulfillment center?\"",
      "\"Hoe lang duurt het van bestelling tot verzending?\"",
      "\"Is het artikel dat ik besteld heb nog op voorraad bij jullie magazijn?\"",
      "\"Waarom is mijn bestelling vertraagd bij het fulfillment center?\"",
      "\"Is mijn retour al ontvangen en bevestigd?\"",
      "\"Wat is de verwachte levertijd voor mijn bestelling?\""
    ],
    statsTitle: "Gemiddelde resultaten voor webshops met Glimps + Fulfillment Centers",
    stats: [
      { value: "65%", label: "Van fulfilmentvragen geautomatiseerd" },
      { value: "-35%", label: "Minder logistieke supporttickets" },
      { value: "Snel", label: "API-integratie setup" },
      { value: "24/7", label: "Live fulfilmentanwoorden" }
    ],
    ctaTitle: "Klaar om Glimps aan je Fulfillment Center te koppelen?",
    ctaSubtitle: "Laat je chatbot elke logistieke en fulfilmentvraag beantwoorden met live data van je fulfilmentpartner — geen agent nodig.",
    seoTitle: "AI Chatbot met Fulfillment Centers - Glimps AI | 3PL Integratie",
    seoDescription: "Koppel Glimps aan je fulfillment center of 3PL voor live orderstatus, vervoerdersoverdrachten en retourverwerking via chat. AI klantenservice 24/7.",
  };

  const activeContent = isEN ? enContent : content;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={activeContent.seoTitle}
        description={activeContent.seoDescription}
        path={isFR ? "/fr/integrations/fulfillment-centers" : isEN ? "/en/integrations/fulfillment-centers" : "/integrations/fulfillment-centers"}
        language={language}
      />
      <StructuredData type="organization" />
      <StructuredData
        type="webpage"
        data={{
          name: activeContent.seoTitle,
          description: activeContent.seoDescription,
          url: isFR
            ? "https://www.glimps.be/fr/integrations/fulfillment-centers"
            : isEN
            ? "https://www.glimps.be/en/integrations/fulfillment-centers"
            : "https://www.glimps.be/integrations/fulfillment-centers"
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
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-border bg-card p-4 shadow-lg bg-primary/5">
              <Warehouse className="h-12 w-12 text-primary" />
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
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-primary/5 p-1.5">
              <Warehouse className="h-6 w-6 text-primary" />
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

export default FulfillmentCentersIntegration;
