import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import glimpsLogo from "@/assets/glimps-logo-new.png";
const prestashopLogoUrl = "https://cdn.worldvectorlogo.com/logos/prestashop.svg";
import {
  ShoppingCart,
  CircleCheck as CheckCircle2,
  Package,
  MessageSquare,
  TrendingUp,
  Clock,
  RefreshCw,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const PrestaShopIntegration = () => {
  const { language } = useLanguage();
  const isFR = language === 'fr';
  const isEN = language === 'en';

  const enContent = {
    badge: "PrestaShop Integration",
    title: "AI Chatbot for",
    titleHighlight: "PrestaShop",
    subtitle: "Connect Glimps to your PrestaShop store via a simple widget. Automatic synchronisation of products, stock and orders — for smart customer service 24/7.",
    ctaButton: "Request a demo",
    howTitle: "How the PrestaShop integration works",
    howSteps: [
      { step: "01", title: "Add the widget", desc: "Paste a simple snippet into your PrestaShop theme. No module, no complex setup." },
      { step: "02", title: "Automatic sync", desc: "All your products, categories, prices and stock are automatically imported via the PrestaShop API." },
      { step: "03", title: "AI training", desc: "The chatbot learns your catalogue, policies and brand voice within a few hours." },
      { step: "04", title: "Live and running", desc: "Your PrestaShop chatbot is live and answers customers 24/7." }
    ],
    benefitsTitle: "What Glimps does for your PrestaShop store",
    benefits: [
      { icon: ShoppingCart, title: "Product recommendations", desc: "The AI guides visitors to the right products based on their needs, increasing average order value." },
      { icon: Package, title: "Real-time order tracking", desc: "Customers can track their order directly via chat, without contacting your team." },
      { icon: RefreshCw, title: "Returns & exchanges", desc: "The chatbot guides customers through the return process in line with your PrestaShop policy." },
      { icon: TrendingUp, title: "Recover abandoned carts", desc: "Automatically re-engage visitors who leave without buying and boost your conversions." },
      { icon: MessageSquare, title: "Multilingual support", desc: "Serve your customers in Dutch, French, English and more — fully automatically." },
      { icon: Clock, title: "Available 24/7", desc: "Your store never sleeps. The chatbot responds instantly, even on weekends and at night." }
    ],
    useCasesTitle: "What your customers can ask",
    useCases: [
      "\"Where is my PrestaShop order #12345?\"",
      "\"Do you have this product in another colour?\"",
      "\"What is your return policy?\"",
      "\"Recommend me products for outdoor activities\"",
      "\"How long does delivery take?\"",
      "\"Is this product available in my size?\"",
      "\"Can I still change my delivery address?\"",
      "\"Are there any current discounts?\""
    ],
    statsTitle: "Average results for PrestaShop stores with Glimps",
    stats: [
      { value: "73%", label: "Of all questions handled automatically" },
      { value: "+21%", label: "Increase in conversion rate" },
      { value: "Fast", label: "Setup via widget" },
      { value: "24/7", label: "Continuous customer service" }
    ],
    ctaTitle: "Ready to connect Glimps to PrestaShop?",
    ctaSubtitle: "Join PrestaShop stores using Glimps to automate their customer service and sell more.",
    seoTitle: "AI Chatbot for PrestaShop - Glimps AI | PrestaShop Integration",
    seoDescription: "Connect Glimps to your PrestaShop store via a widget. Automatic product sync and order tracking. AI customer service 24/7 for your PrestaShop store.",
  };

  const content = isFR ? {
    badge: "Intégration PrestaShop",
    title: "Chatbot IA pour",
    titleHighlight: "PrestaShop",
    subtitle: "Connectez Glimps à votre boutique PrestaShop via un simple widget. Synchronisation automatique des produits, du stock et des commandes — pour un service client intelligent 24/7.",
    ctaButton: "Demander une démo",
    howTitle: "Comment fonctionne l'intégration PrestaShop",
    howSteps: [
      { step: "01", title: "Ajoutez le widget", desc: "Collez un simple extrait de code dans votre thème PrestaShop. Aucun module, aucune configuration complexe." },
      { step: "02", title: "Synchronisation automatique", desc: "Tous vos produits, catégories, prix et stock sont importés automatiquement via l'API PrestaShop." },
      { step: "03", title: "Formation de l'IA", desc: "Le chatbot apprend votre catalogue, vos politiques et votre ton de voix en quelques heures." },
      { step: "04", title: "En ligne et opérationnel", desc: "Votre chatbot PrestaShop est actif et répond aux clients 24h/24, 7j/7." }
    ],
    benefitsTitle: "Ce que Glimps fait pour votre boutique PrestaShop",
    benefits: [
      { icon: ShoppingCart, title: "Recommandations de produits", desc: "L'IA guide les visiteurs vers les bons produits en fonction de leurs besoins, augmentant la valeur moyenne du panier." },
      { icon: Package, title: "Suivi des commandes en temps réel", desc: "Les clients peuvent suivre leur commande directement via le chat, sans contacter votre équipe." },
      { icon: RefreshCw, title: "Gestion des retours & échanges", desc: "Le chatbot guide les clients dans les procédures de retour conformément à votre politique PrestaShop." },
      { icon: TrendingUp, title: "Récupération de paniers abandonnés", desc: "Relancez automatiquement les visiteurs qui quittent sans acheter et augmentez vos conversions." },
      { icon: MessageSquare, title: "Support multilingue", desc: "Servez vos clients en néerlandais, français, anglais et plus encore — automatiquement." },
      { icon: Clock, title: "Disponible 24h/24, 7j/7", desc: "Votre boutique ne dort jamais. Le chatbot répond instantanément, même le week-end et la nuit." }
    ],
    useCasesTitle: "Ce que vos clients peuvent demander",
    useCases: [
      "\"Où est ma commande PrestaShop #12345 ?\"",
      "\"Avez-vous ce produit dans une autre couleur ?\"",
      "\"Quelle est votre politique de retour ?\"",
      "\"Recommandez-moi des produits pour les activités en plein air\"",
      "\"Combien de temps prend la livraison ?\"",
      "\"Ce produit est-il disponible dans ma taille ?\"",
      "\"Puis-je modifier mon adresse de livraison ?\"",
      "\"Y a-t-il des remises en cours ?\""
    ],
    statsTitle: "Résultats moyens pour les boutiques PrestaShop avec Glimps",
    stats: [
      { value: "73%", label: "Des questions traitées automatiquement" },
      { value: "+21%", label: "Augmentation du taux de conversion" },
      { value: "Rapide", label: "Mise en place via widget" },
      { value: "24/7", label: "Support client continu" }
    ],
    ctaTitle: "Prêt à connecter Glimps à PrestaShop ?",
    ctaSubtitle: "Rejoignez des boutiques PrestaShop qui utilisent Glimps pour automatiser leur service client et augmenter leurs ventes.",
    seoTitle: "Chatbot IA pour PrestaShop - Glimps AI | Intégration PrestaShop",
    seoDescription: "Connectez Glimps à votre boutique PrestaShop via un widget. Synchronisation automatique des produits et commandes. Service client IA 24/7.",
  } : {
    badge: "PrestaShop Integratie",
    title: "AI Chatbot voor",
    titleHighlight: "PrestaShop",
    subtitle: "Verbind Glimps met je PrestaShop webshop via een eenvoudige widget. Automatische synchronisatie van producten, voorraad en bestellingen — voor slimme klantenservice 24/7.",
    ctaButton: "Demo aanvragen",
    howTitle: "Hoe de PrestaShop integratie werkt",
    howSteps: [
      { step: "01", title: "Voeg de widget toe", desc: "Plak een eenvoudig stukje code in je PrestaShop thema. Geen module, geen complexe setup." },
      { step: "02", title: "Automatische synchronisatie", desc: "Al je producten, categorieën, prijzen en voorraad worden automatisch ingeladen via de PrestaShop API." },
      { step: "03", title: "AI training", desc: "De chatbot leert je catalogus, beleid en merkstijl binnen enkele uren." },
      { step: "04", title: "Live en operationeel", desc: "Je PrestaShop chatbot staat live en beantwoordt klanten 24/7." }
    ],
    benefitsTitle: "Wat Glimps doet voor jouw PrestaShop webshop",
    benefits: [
      { icon: ShoppingCart, title: "Productaanbevelingen", desc: "De AI begeleidt bezoekers naar de juiste producten op basis van hun wensen, waardoor de gemiddelde orderwaarde stijgt." },
      { icon: Package, title: "Real-time besteltracking", desc: "Klanten kunnen hun bestelling direct via de chat volgen, zonder dat jouw team hoeft in te grijpen." },
      { icon: RefreshCw, title: "Retour- en ruilbeheer", desc: "De chatbot begeleidt klanten door het retourproces conform jouw PrestaShop-beleid." },
      { icon: TrendingUp, title: "Verlaten winkelwagens terugwinnen", desc: "Heractiveer automatisch bezoekers die vertrekken zonder te kopen en verhoog je conversie." },
      { icon: MessageSquare, title: "Meertalige ondersteuning", desc: "Bedien je klanten in het Nederlands, Frans, Engels en meer — volledig automatisch." },
      { icon: Clock, title: "24/7 beschikbaar", desc: "Jouw webshop slaapt nooit. De chatbot antwoordt direct, ook in het weekend en 's nachts." }
    ],
    useCasesTitle: "Wat je klanten kunnen vragen",
    useCases: [
      "\"Waar is mijn PrestaShop bestelling #12345?\"",
      "\"Hebben jullie dit product in een andere kleur?\"",
      "\"Wat is jullie retourbeleid?\"",
      "\"Aanbeveel me producten voor buitenactiviteiten\"",
      "\"Hoe lang duurt de levering?\"",
      "\"Is dit product beschikbaar in mijn maat?\"",
      "\"Kan ik mijn leveringsadres nog wijzigen?\"",
      "\"Zijn er momenteel kortingen?\""
    ],
    statsTitle: "Gemiddelde resultaten voor PrestaShop webshops met Glimps",
    stats: [
      { value: "73%", label: "Van alle vragen automatisch afgehandeld" },
      { value: "+21%", label: "Stijging in conversieratio" },
      { value: "Snel", label: "Setup via widget" },
      { value: "24/7", label: "Continue klantenservice" }
    ],
    ctaTitle: "Klaar om Glimps aan PrestaShop te koppelen?",
    ctaSubtitle: "Sluit je aan bij PrestaShop webshops die Glimps gebruiken om hun klantenservice te automatiseren en meer te verkopen.",
    seoTitle: "AI Chatbot voor PrestaShop - Glimps AI | PrestaShop Integratie",
    seoDescription: "Verbind Glimps met je PrestaShop webshop via een widget. Automatische productsync en besteltracking. AI klantenservice 24/7.",
  };

  const activeContent = isEN ? enContent : content;

  return (
    <div className="min-h-screen bg-background">
      <SEO title={activeContent.seoTitle} description={activeContent.seoDescription} path={isFR ? "/fr/integrations/prestashop" : isEN ? "/en/integrations/prestashop" : "/integrations/prestashop"} language={language} />
      <StructuredData type="organization" />
      <StructuredData type="webpage" data={{ name: activeContent.seoTitle, description: activeContent.seoDescription, url: isFR ? "https://www.glimps.be/fr/integrations/prestashop" : isEN ? "https://www.glimps.be/en/integrations/prestashop" : "https://www.glimps.be/integrations/prestashop" }} />
      <Navigation />

      <section className="relative overflow-hidden px-6 py-20">
        <div className="pointer-events-none absolute bottom-[-200px] left-1/2 h-[300px] w-[400px] sm:h-[600px] sm:w-[800px] md:w-[1000px] md:h-[600px] -translate-x-1/2 rounded-full bg-gradient-to-br from-[#DF0067]/20 via-[#DF0067]/10 to-transparent blur-3xl" />
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">{activeContent.badge}</span>
          <div className="mb-6 flex justify-center">
            <div className="flex h-20 w-48 items-center justify-center rounded-2xl border border-border bg-card px-5 py-4 shadow-lg">
              <img src={prestashopLogoUrl} alt="PrestaShop logo" className="h-full w-full object-contain" />
            </div>
          </div>
          <h1 className="mb-6 font-inter text-4xl font-normal leading-tight text-foreground md:text-5xl lg:text-6xl">
            {activeContent.title}{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{activeContent.titleHighlight}</span>
          </h1>
          <p className="mb-10 mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">{activeContent.subtitle}</p>
          <Button asChild variant="hero" size="lg" className="rounded-full">
            <a href={isFR ? "/fr/demo" : isEN ? "/en/demo" : "/demo"}><Sparkles className="h-5 w-5" />{activeContent.ctaButton}</a>
          </Button>
        </div>
      </section>

      <section className="border-y bg-muted/30 px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <p className="mb-8 text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">{activeContent.statsTitle}</p>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {activeContent.stats.map((stat, i) => (<div key={i} className="text-center"><p className="text-4xl font-bold text-primary">{stat.value}</p><p className="mt-1 text-sm text-muted-foreground">{stat.label}</p></div>))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center font-inter text-3xl font-normal md:text-4xl">{activeContent.howTitle}</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {activeContent.howSteps.map((step, i) => (
              <div key={i} className="relative rounded-2xl border border-border/50 bg-card p-6">
                <span className="mb-4 block text-4xl font-bold text-primary/20">{step.step}</span>
                <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
                {i < activeContent.howSteps.length - 1 && <ArrowRight className="absolute -right-3 top-1/2 hidden -translate-y-1/2 h-6 w-6 text-muted-foreground/40 lg:block" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/20 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center font-inter text-3xl font-normal md:text-4xl">{activeContent.benefitsTitle}</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {activeContent.benefits.map((benefit, i) => (
              <Card key={i} className="p-6 transition-all hover:shadow-md hover:-translate-y-0.5">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10"><benefit.icon className="h-6 w-6 text-primary" /></div>
                <h3 className="mb-2 text-lg font-semibold">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center font-inter text-3xl font-normal md:text-4xl">{activeContent.useCasesTitle}</h2>
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

      <section className="border-y bg-muted/20 px-6 py-12">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-3 rounded-2xl border border-border bg-card px-6 py-4 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-white p-1.5">
              <img src={prestashopLogoUrl} alt="PrestaShop" className="h-full w-full object-contain" />
            </div>
            <span className="text-muted-foreground">+</span>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg overflow-hidden">
              <img src={glimpsLogo} alt="Glimps AI" className="h-full w-full object-contain" />
            </div>
            <span className="font-semibold">Glimps AI</span>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 p-12 text-center">
          <h2 className="mb-4 font-inter text-3xl font-normal md:text-4xl">{activeContent.ctaTitle}</h2>
          <p className="mb-8 text-lg text-muted-foreground">{activeContent.ctaSubtitle}</p>
          <Button asChild variant="hero" size="lg" className="rounded-full">
            <a href={isFR ? "/fr/demo" : isEN ? "/en/demo" : "/demo"}>{activeContent.ctaButton}</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrestaShopIntegration;
