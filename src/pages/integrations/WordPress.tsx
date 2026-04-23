import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import glimpsLogo from "@/assets/glimps-logo-new.png";
import { CircleCheck as CheckCircle2, MessageSquare, TrendingUp, Clock, ArrowRight, Sparkles, FileText, Search, Users, Headphones as HeadphonesIcon } from "lucide-react";

const WordPressIntegration = () => {
  const { language } = useLanguage();
  const isFR = language === 'fr';
  const isEN = language === 'en';

  const wpLogoUrl = "https://cdn.worldvectorlogo.com/logos/wordpress-blue.svg";

  const enContent = {
    badge: "WordPress Integration",
    title: "AI Chatbot for",
    titleHighlight: "WordPress",
    subtitle: "Connect Glimps to your WordPress website via a simple widget. Automatic synchronisation of your content, FAQs and services — for smart visitor assistance 24/7.",
    ctaButton: "Request a demo",
    howTitle: "How the WordPress integration works",
    howSteps: [
      { step: "01", title: "Add the widget", desc: "Paste a simple snippet into your WordPress theme or use our widget code. No plugin required." },
      { step: "02", title: "Content sync", desc: "Your pages, posts, FAQs and service descriptions are automatically imported and indexed." },
      { step: "03", title: "AI training", desc: "The chatbot learns your content, brand voice and common visitor questions within a few hours." },
      { step: "04", title: "Live and running", desc: "Your WordPress chatbot is live and guides visitors 24/7." }
    ],
    benefitsTitle: "What Glimps does for your WordPress website",
    benefits: [
      { icon: Search, title: "Content discovery", desc: "The AI helps visitors find the right page, blog post or product quickly and efficiently." },
      { icon: FileText, title: "FAQ automation", desc: "The chatbot answers frequently asked questions automatically, reducing support load." },
      { icon: Users, title: "Lead generation", desc: "Engage visitors proactively and capture leads before they leave your site." },
      { icon: TrendingUp, title: "Increase conversions", desc: "Guide visitors towards your key conversion goals — contact forms, downloads or purchases." },
      { icon: MessageSquare, title: "Multilingual support", desc: "Serve visitors in Dutch, French, English and more — fully automatically." },
      { icon: Clock, title: "Available 24/7", desc: "Your website never sleeps. The chatbot guides visitors instantly, even on weekends and at night." }
    ],
    useCasesTitle: "What your visitors can ask",
    useCases: [
      "\"What services do you offer?\"",
      "\"How can I contact you?\"",
      "\"Where can I find your pricing?\"",
      "\"Do you work with companies in my sector?\"",
      "\"Can I schedule a demo?\"",
      "\"What are your opening hours?\"",
      "\"How do I get started?\"",
      "\"Do you have case studies I can read?\""
    ],
    statsTitle: "Average results for WordPress websites with Glimps",
    stats: [
      { value: "73%", label: "Of all questions handled automatically" },
      { value: "+21%", label: "Increase in lead generation" },
      { value: "Fast", label: "Setup via widget" },
      { value: "24/7", label: "Continuous visitor assistance" }
    ],
    ctaTitle: "Ready to connect Glimps to WordPress?",
    ctaSubtitle: "Join WordPress website owners using Glimps to automate visitor assistance and generate more leads.",
    seoTitle: "AI Chatbot for WordPress - Glimps AI | WordPress Integration",
    seoDescription: "Connect Glimps to your WordPress website via a widget. Automatic content sync and FAQ automation. AI visitor assistance 24/7 for your WordPress site.",
  };

  const content = isFR ? {
    badge: "Intégration WordPress",
    title: "Chatbot IA pour",
    titleHighlight: "WordPress",
    subtitle: "Connectez Glimps à votre site WordPress via un simple widget. Synchronisation automatique de votre contenu, FAQ et services — pour une assistance visiteur intelligente 24/7.",
    ctaButton: "Demander une démo",
    howTitle: "Comment fonctionne l'intégration WordPress",
    howSteps: [
      { step: "01", title: "Ajoutez le widget", desc: "Collez un simple extrait de code dans votre thème WordPress. Aucun plugin requis." },
      { step: "02", title: "Synchronisation du contenu", desc: "Vos pages, articles, FAQ et descriptions de services sont automatiquement importés et indexés." },
      { step: "03", title: "Formation de l'IA", desc: "Le chatbot apprend votre contenu, votre ton de voix et les questions fréquentes des visiteurs en quelques heures." },
      { step: "04", title: "En ligne et opérationnel", desc: "Votre chatbot WordPress est actif et guide les visiteurs 24h/24, 7j/7." }
    ],
    benefitsTitle: "Ce que Glimps fait pour votre site WordPress",
    benefits: [
      { icon: Search, title: "Découverte de contenu", desc: "L'IA aide les visiteurs à trouver rapidement la bonne page, article de blog ou produit." },
      { icon: FileText, title: "Automatisation des FAQ", desc: "Le chatbot répond automatiquement aux questions fréquentes, réduisant la charge de support." },
      { icon: Users, title: "Génération de leads", desc: "Engagez les visiteurs de manière proactive et capturez des leads avant qu'ils ne quittent votre site." },
      { icon: TrendingUp, title: "Augmenter les conversions", desc: "Guidez les visiteurs vers vos objectifs de conversion — formulaires de contact, téléchargements ou achats." },
      { icon: MessageSquare, title: "Support multilingue", desc: "Servez vos visiteurs en néerlandais, français, anglais et plus encore — automatiquement." },
      { icon: Clock, title: "Disponible 24h/24, 7j/7", desc: "Votre site ne dort jamais. Le chatbot guide les visiteurs instantanément, même le week-end et la nuit." }
    ],
    useCasesTitle: "Ce que vos visiteurs peuvent demander",
    useCases: [
      "\"Quels services proposez-vous ?\"",
      "\"Comment puis-je vous contacter ?\"",
      "\"Où puis-je trouver vos tarifs ?\"",
      "\"Travaillez-vous avec des entreprises de mon secteur ?\"",
      "\"Puis-je planifier une démo ?\"",
      "\"Quels sont vos horaires d'ouverture ?\"",
      "\"Comment démarrer ?\"",
      "\"Avez-vous des études de cas à lire ?\""
    ],
    statsTitle: "Résultats moyens pour les sites WordPress avec Glimps",
    stats: [
      { value: "73%", label: "Des questions traitées automatiquement" },
      { value: "+21%", label: "Augmentation de la génération de leads" },
      { value: "Rapide", label: "Mise en place via widget" },
      { value: "24/7", label: "Assistance visiteur continue" }
    ],
    ctaTitle: "Prêt à connecter Glimps à WordPress ?",
    ctaSubtitle: "Rejoignez des propriétaires de sites WordPress qui utilisent Glimps pour automatiser l'assistance aux visiteurs et générer plus de leads.",
    seoTitle: "Chatbot IA pour WordPress - Glimps AI | Intégration WordPress",
    seoDescription: "Connectez Glimps à votre site WordPress via un widget. Synchronisation automatique du contenu et automatisation des FAQ. Assistance visiteur IA 24/7.",
  } : {
    badge: "WordPress Integratie",
    title: "AI Chatbot voor",
    titleHighlight: "WordPress",
    subtitle: "Verbind Glimps met je WordPress website via een eenvoudige widget. Automatische synchronisatie van je content, FAQ's en diensten — voor slimme bezoekersondersteuning 24/7.",
    ctaButton: "Demo aanvragen",
    howTitle: "Hoe de WordPress integratie werkt",
    howSteps: [
      { step: "01", title: "Voeg de widget toe", desc: "Plak een eenvoudig stukje code in je WordPress thema. Geen plugin vereist." },
      { step: "02", title: "Content synchronisatie", desc: "Je pagina's, blogberichten, FAQ's en dienstbeschrijvingen worden automatisch geïmporteerd en geïndexeerd." },
      { step: "03", title: "AI training", desc: "De chatbot leert je content, merkstijl en veelgestelde bezoekersvragen binnen enkele uren." },
      { step: "04", title: "Live en operationeel", desc: "Je WordPress chatbot staat live en begeleidt bezoekers 24/7." }
    ],
    benefitsTitle: "Wat Glimps doet voor jouw WordPress website",
    benefits: [
      { icon: Search, title: "Content ontdekken", desc: "De AI helpt bezoekers snel de juiste pagina, blogpost of product te vinden." },
      { icon: FileText, title: "FAQ automatisering", desc: "De chatbot beantwoordt veelgestelde vragen automatisch, waardoor de supportlast afneemt." },
      { icon: Users, title: "Leadgeneratie", desc: "Benader bezoekers proactief en leg leads vast voordat ze je site verlaten." },
      { icon: TrendingUp, title: "Conversies verhogen", desc: "Begeleid bezoekers naar je belangrijkste conversiedoelen — contactformulieren, downloads of aankopen." },
      { icon: MessageSquare, title: "Meertalige ondersteuning", desc: "Bedien je bezoekers in het Nederlands, Frans, Engels en meer — volledig automatisch." },
      { icon: Clock, title: "24/7 beschikbaar", desc: "Jouw website slaapt nooit. De chatbot begeleidt bezoekers direct, ook in het weekend en 's nachts." }
    ],
    useCasesTitle: "Wat je bezoekers kunnen vragen",
    useCases: [
      "\"Welke diensten bieden jullie aan?\"",
      "\"Hoe kan ik jullie contacteren?\"",
      "\"Waar kan ik jullie prijzen vinden?\"",
      "\"Werken jullie met bedrijven in mijn sector?\"",
      "\"Kan ik een demo inplannen?\"",
      "\"Wat zijn jullie openingstijden?\"",
      "\"Hoe kan ik starten?\"",
      "\"Hebben jullie case studies die ik kan lezen?\""
    ],
    statsTitle: "Gemiddelde resultaten voor WordPress websites met Glimps",
    stats: [
      { value: "73%", label: "Van alle vragen automatisch afgehandeld" },
      { value: "+21%", label: "Stijging in leadgeneratie" },
      { value: "Snel", label: "Setup via widget" },
      { value: "24/7", label: "Continue bezoekersondersteuning" }
    ],
    ctaTitle: "Klaar om Glimps aan WordPress te koppelen?",
    ctaSubtitle: "Sluit je aan bij WordPress-website-eigenaren die Glimps gebruiken om bezoekersondersteuning te automatiseren en meer leads te genereren.",
    seoTitle: "AI Chatbot voor WordPress - Glimps AI | WordPress Integratie",
    seoDescription: "Verbind Glimps met je WordPress website via een widget. Automatische contentsync en FAQ-automatisering. AI bezoekersondersteuning 24/7.",
  };

  const activeContent = isEN ? enContent : content;

  return (
    <div className="min-h-screen bg-background">
      <SEO title={activeContent.seoTitle} description={activeContent.seoDescription} path={isFR ? "/fr/integrations/wordpress" : isEN ? "/en/integrations/wordpress" : "/integrations/wordpress"} language={language} />
      <StructuredData type="organization" />
      <StructuredData type="webpage" data={{ name: activeContent.seoTitle, description: activeContent.seoDescription, url: isFR ? "https://www.glimps.be/fr/integrations/wordpress" : isEN ? "https://www.glimps.be/en/integrations/wordpress" : "https://www.glimps.be/integrations/wordpress" }} />
      <Navigation />

      <section className="relative overflow-visible px-6 py-20">
        <div className="pointer-events-none absolute bottom-[-200px] left-1/2 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-br from-[#21759B]/20 via-[#21759B]/10 to-transparent blur-3xl" />
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">{activeContent.badge}</span>
          <div className="mb-6 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-border bg-card p-4 shadow-lg">
              <img src={wpLogoUrl} alt="WordPress logo" className="h-full w-full object-contain" />
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
              <img src={wpLogoUrl} alt="WordPress" className="h-full w-full object-contain" />
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

export default WordPressIntegration;
