import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  ShoppingCart,
  Zap,
  CircleCheck as CheckCircle2,
  Package,
  MessageSquare,
  TrendingUp,
  Clock,
  RefreshCw,
  Star,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const ShopifyIntegration = () => {
  const { language } = useLanguage();

  const isFR = language === 'fr';

  const content = isFR ? {
    badge: "Intégration Shopify",
    title: "Chatbot IA pour",
    titleHighlight: "Shopify",
    subtitle: "Connectez Glimps à votre boutique Shopify en quelques minutes. Synchronisation automatique des produits, du stock et des commandes — pour un service client intelligent 24/7.",
    ctaTrial: "Démarrer gratuitement",
    ctaDemo: "Voir la démo",
    howTitle: "Comment fonctionne l'intégration Shopify",
    howSteps: [
      {
        step: "01",
        title: "Installez l'application",
        desc: "Ajoutez Glimps depuis l'App Store Shopify en un clic. Aucun code requis."
      },
      {
        step: "02",
        title: "Synchronisation automatique",
        desc: "Tous vos produits, catégories, prix et stock sont importés automatiquement."
      },
      {
        step: "03",
        title: "Formation de l'IA",
        desc: "Le chatbot apprend vos produits, politiques et ton de voix en quelques heures."
      },
      {
        step: "04",
        title: "En ligne et opérationnel",
        desc: "Votre bot Shopify est actif et répond aux clients 24h/24, 7j/7."
      }
    ],
    benefitsTitle: "Ce que Glimps fait pour votre boutique Shopify",
    benefits: [
      {
        icon: ShoppingCart,
        title: "Recommandations de produits",
        desc: "L'IA guide les visiteurs vers les bons produits en fonction de leurs besoins, augmentant la valeur moyenne du panier."
      },
      {
        icon: Package,
        title: "Suivi des commandes en temps réel",
        desc: "Les clients peuvent suivre leur commande directement via le chat, sans contacter votre équipe."
      },
      {
        icon: RefreshCw,
        title: "Gestion des retours & échanges",
        desc: "Le chatbot guide les clients dans les procédures de retour conformément à votre politique Shopify."
      },
      {
        icon: TrendingUp,
        title: "Récupération de paniers abandonnés",
        desc: "Relancez automatiquement les visiteurs qui quittent sans acheter et augmentez vos conversions."
      },
      {
        icon: MessageSquare,
        title: "Support multilingue",
        desc: "Servez vos clients en néerlandais, français, anglais et plus encore — automatiquement."
      },
      {
        icon: Clock,
        title: "Disponible 24h/24, 7j/7",
        desc: "Votre boutique ne dort jamais. Le chatbot répond instantanément, même le week-end et la nuit."
      }
    ],
    useCasesTitle: "Ce que vos clients peuvent demander",
    useCases: [
      "\"Où est ma commande Shopify #12345 ?\"",
      "\"Avez-vous ce t-shirt en taille L ?\"",
      "\"Quelle est votre politique de retour ?\"",
      "\"Recommandez-moi des chaussures pour la course à pied\"",
      "\"Combien de temps prend la livraison en Belgique ?\"",
      "\"Ce produit convient-il aux peaux sensibles ?\"",
      "\"Puis-je modifier mon adresse de livraison ?\"",
      "\"Y a-t-il des promotions en cours ?\""
    ],
    statsTitle: "Résultats moyens pour les boutiques Shopify avec Glimps",
    stats: [
      { value: "73%", label: "Des questions traitées automatiquement" },
      { value: "+21%", label: "Augmentation du taux de conversion" },
      { value: "4 min", label: "Temps de configuration moyen" },
      { value: "24/7", label: "Support client continu" }
    ],
    ctaTitle: "Prêt à connecter Glimps à Shopify ?",
    ctaSubtitle: "Rejoignez des centaines de boutiques Shopify qui utilisent Glimps pour automatiser leur service client et augmenter leurs ventes.",
    ctaButton: "Démarrer avec Shopify →",
    seoTitle: "Chatbot IA pour Shopify - Glimps AI | Intégration Shopify",
    seoDescription: "Connectez Glimps à votre boutique Shopify en quelques minutes. Synchronisation automatique des produits et commandes. Service client IA 24/7 pour votre webshop Shopify.",
  } : {
    badge: "Shopify Integratie",
    title: "AI Chatbot voor",
    titleHighlight: "Shopify",
    subtitle: "Verbind Glimps met je Shopify webshop in enkele minuten. Automatische synchronisatie van producten, voorraad en bestellingen — voor slimme klantenservice 24/7.",
    ctaTrial: "Gratis starten",
    ctaDemo: "Bekijk demo",
    howTitle: "Hoe de Shopify integratie werkt",
    howSteps: [
      {
        step: "01",
        title: "Installeer de app",
        desc: "Voeg Glimps toe vanuit de Shopify App Store met één klik. Geen code nodig."
      },
      {
        step: "02",
        title: "Automatische synchronisatie",
        desc: "Al je producten, categorieën, prijzen en voorraad worden automatisch ingeladen."
      },
      {
        step: "03",
        title: "AI training",
        desc: "De chatbot leert je producten, beleid en tone of voice binnen enkele uren."
      },
      {
        step: "04",
        title: "Live en operationeel",
        desc: "Je Shopify bot staat live en beantwoordt klanten 24/7."
      }
    ],
    benefitsTitle: "Wat Glimps doet voor jouw Shopify webshop",
    benefits: [
      {
        icon: ShoppingCart,
        title: "Productaanbevelingen",
        desc: "De AI begeleidt bezoekers naar de juiste producten op basis van hun wensen, waardoor de gemiddelde orderwaarde stijgt."
      },
      {
        icon: Package,
        title: "Real-time besteltracking",
        desc: "Klanten kunnen hun bestelling direct via de chat volgen, zonder dat jouw team hoeft in te grijpen."
      },
      {
        icon: RefreshCw,
        title: "Retour- en ruilbeheer",
        desc: "De chatbot begeleidt klanten door het retourproces conform jouw Shopify-beleid."
      },
      {
        icon: TrendingUp,
        title: "Verlaten winkelwagens terugwinnen",
        desc: "Heractiveer automatisch bezoekers die vertrekken zonder te kopen en verhoog je conversie."
      },
      {
        icon: MessageSquare,
        title: "Meertalige ondersteuning",
        desc: "Bedien je klanten in het Nederlands, Frans, Engels en meer — volledig automatisch."
      },
      {
        icon: Clock,
        title: "24/7 beschikbaar",
        desc: "Jouw webshop slaapt nooit. De chatbot antwoordt direct, ook in het weekend en 's nachts."
      }
    ],
    useCasesTitle: "Wat je klanten kunnen vragen",
    useCases: [
      "\"Waar is mijn Shopify bestelling #12345?\"",
      "\"Hebben jullie dit t-shirt in maat L?\"",
      "\"Wat is jullie retourbeleid?\"",
      "\"Aanbeveel me schoenen voor hardlopen\"",
      "\"Hoe lang duurt levering in België?\"",
      "\"Is dit product geschikt voor gevoelige huid?\"",
      "\"Kan ik mijn leveringsadres nog wijzigen?\"",
      "\"Zijn er momenteel kortingen?\""
    ],
    statsTitle: "Gemiddelde resultaten voor Shopify webshops met Glimps",
    stats: [
      { value: "73%", label: "Van alle vragen automatisch afgehandeld" },
      { value: "+21%", label: "Stijging in conversieratio" },
      { value: "4 min", label: "Gemiddelde setup-tijd" },
      { value: "24/7", label: "Continue klantenservice" }
    ],
    ctaTitle: "Klaar om Glimps aan Shopify te koppelen?",
    ctaSubtitle: "Sluit je aan bij honderden Shopify webshops die Glimps gebruiken om hun klantenservice te automatiseren en meer te verkopen.",
    ctaButton: "Starten met Shopify →",
    seoTitle: "AI Chatbot voor Shopify - Glimps AI | Shopify Integratie",
    seoDescription: "Verbind Glimps met je Shopify webshop in enkele minuten. Automatische productsync en besteltracking. AI klantenservice 24/7 voor je Shopify webshop.",
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={content.seoTitle}
        description={content.seoDescription}
        path={isFR ? "/fr/integrations/shopify" : "/integrations/shopify"}
        language={language}
      />
      <StructuredData type="organization" />
      <StructuredData
        type="webpage"
        data={{
          name: content.seoTitle,
          description: content.seoDescription,
          url: isFR
            ? "https://www.glimps.be/fr/integrations/shopify"
            : "https://www.glimps.be/integrations/shopify"
        }}
      />
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-visible px-6 py-20">
        <div className="pointer-events-none absolute bottom-[-200px] left-1/2 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-br from-[#96bf48]/20 via-[#96bf48]/10 to-transparent blur-3xl" />
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            {content.badge}
          </span>
          <div className="mb-6 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-border bg-card p-4 shadow-lg">
              <img
                src="https://cdn.worldvectorlogo.com/logos/shopify.svg"
                alt="Shopify logo"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
          <h1 className="mb-6 font-inter text-4xl font-normal leading-tight text-foreground md:text-5xl lg:text-6xl">
            {content.title}{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {content.titleHighlight}
            </span>
          </h1>
          <p className="mb-10 mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            {content.subtitle}
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild variant="hero" size="lg" className="rounded-full">
              <a href={isFR ? "/fr/demo" : "/demo"}>
                <Sparkles className="h-5 w-5" />
                {content.ctaTrial}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <a href={isFR ? "/fr/demo" : "/demo"}>{content.ctaDemo}</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y bg-muted/30 px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <p className="mb-8 text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            {content.statsTitle}
          </p>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {content.stats.map((stat, i) => (
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
            {content.howTitle}
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {content.howSteps.map((step, i) => (
              <div key={i} className="relative rounded-2xl border border-border/50 bg-card p-6">
                <span className="mb-4 block text-4xl font-bold text-primary/20">{step.step}</span>
                <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
                {i < content.howSteps.length - 1 && (
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
            {content.benefitsTitle}
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {content.benefits.map((benefit, i) => (
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
            {content.useCasesTitle}
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {content.useCases.map((useCase, i) => (
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
              <img
                src="https://cdn.worldvectorlogo.com/logos/shopify.svg"
                alt="Shopify"
                className="h-full w-full object-contain"
              />
            </div>
            <span className="text-muted-foreground">+</span>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary p-1.5">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <span className="font-semibold">Glimps AI</span>
            <span className="ml-2 flex items-center gap-1 text-sm text-green-600 font-medium">
              <Star className="h-4 w-4 fill-green-500 text-green-500" />
              {isFR ? "Intégration officielle" : "Officiële integratie"}
            </span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 p-12 text-center">
          <h2 className="mb-4 font-inter text-3xl font-normal md:text-4xl">
            {content.ctaTitle}
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            {content.ctaSubtitle}
          </p>
          <Button asChild variant="hero" size="lg" className="rounded-full">
            <a href={isFR ? "/fr/demo" : "/demo"}>
              {content.ctaButton}
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ShopifyIntegration;
