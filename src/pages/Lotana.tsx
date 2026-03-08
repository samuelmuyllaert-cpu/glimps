import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Puzzle, CircleCheck as CheckCircle2, MessageSquare, Clock, Shield, Sparkles, Package, Gift, Truck } from "lucide-react";

const Lotana = () => {
  const { language } = useLanguage();

  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'chatbotkit-widget';
    script.src = 'https://static.chatbotkit.com/integrations/widget/v2.js';
    script.setAttribute('data-widget', 'cmm3vjek8007i04l4s840o6oi');
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector('#chatbotkit-widget');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const content = language === 'fr' ? {
    title: "Bienvenue chez",
    subtitle: "Lotana",
    heading: "Votre assistant IA personnel pour jeux et puzzles",
    description: "Nous sommes là pour vous aider ! Vous avez des questions sur nos jeux de société, puzzles, jouets éducatifs ou autres produits ? N'hésitez pas à poser votre question via le chat.",
    feature1Title: "Toujours disponible",
    feature1Desc: "Posez toutes vos questions sur nos produits quand cela vous convient",
    feature2Title: "Jour et nuit",
    feature2Desc: "Nous sommes également là pour vous aider en dehors des heures de bureau",
    feature3Title: "Conforme RGPD",
    feature3Desc: "Glimps est conforme au RGPD et respecte votre vie privée",
    feature4Title: "Livraison rapide",
    feature4Desc: "Commandez avant 16h pour une expédition le jour même",
    feature5Title: "Large choix",
    feature5Desc: "Plus de 40 marques de jeux et puzzles de qualité",
    feature6Title: "Conseils d'experts",
    feature6Desc: "Obtenez des recommandations personnalisées pour chaque âge",
    howItWorksTitle: "Comment le bot aide les clients",
    howItWorksDesc: "Cliquez sur le chat en bas à droite et posez votre question",
    examplesTitle: "Exemples de questions",
    example1Title: "Recommandations de jeux",
    example1Desc: "Quels jeux sont adaptés pour des enfants de 6 ans ?",
    example2Title: "Niveau de difficulté des puzzles",
    example2Desc: "Avez-vous des puzzles de 1000 pièces avec des paysages ?",
    example3Title: "Jeux éducatifs",
    example3Desc: "Quel jeu aide à apprendre les mathématiques de manière ludique ?",
    example4Title: "Jeux de société familiaux",
    example4Desc: "Quel jeu de société est amusant pour toute la famille ?",
    example5Title: "Livraison et disponibilité",
    example5Desc: "Ce jeu est-il en stock et quand puis-je le recevoir ?",
    example6Title: "Cadeaux",
    example6Desc: "Quel puzzle convient comme cadeau pour un amateur de voyage ?",
    seoTitle: "Bienvenue chez Lotana - Assistant IA pour jeux et puzzles",
    seoDescription: "Bienvenue chez Lotana - Votre magasin en ligne pour jeux de société, puzzles et jouets éducatifs. Obtenez de l'aide instantanée via notre assistant IA"
  } : {
    title: "Welkom bij",
    subtitle: "Lotana",
    heading: "Je persoonlijke AI assistent voor spellen en puzzels",
    description: "We zijn er om je te helpen! Heb je vragen over onze bordspellen, puzzels, educatief speelgoed of andere producten? Stel gerust je vraag via de chat.",
    feature1Title: "Altijd voor je klaar",
    feature1Desc: "Stel al je vragen over onze producten wanneer het jou uitkomt",
    feature2Title: "Dag en nacht",
    feature2Desc: "Ook buiten kantooruren staan we voor je klaar om te helpen",
    feature3Title: "GDPR conform",
    feature3Desc: "Glimps is GDPR conform en respecteert jouw privacy",
    feature4Title: "Snelle levering",
    feature4Desc: "Bestel voor 16u voor verzending dezelfde dag",
    feature5Title: "Ruime keuze",
    feature5Desc: "Meer dan 40 merken aan kwaliteitsspellen en puzzels",
    feature6Title: "Deskundig advies",
    feature6Desc: "Krijg persoonlijke aanbevelingen voor elke leeftijd",
    howItWorksTitle: "Hoe de bot klanten helpt",
    howItWorksDesc: "Klik rechtsonder op de chat en stel je vraag",
    examplesTitle: "Voorbeeldvragen",
    example1Title: "Speladvies",
    example1Desc: "Welke spellen zijn geschikt voor kinderen van 6 jaar?",
    example2Title: "Puzzelmoeilijkheid",
    example2Desc: "Hebben jullie 1000-stukjes puzzels met landschappen?",
    example3Title: "Educatieve spellen",
    example3Desc: "Welk spel helpt bij het op een leuke manier leren rekenen?",
    example4Title: "Gezelschapsspellen",
    example4Desc: "Welk bordspel is leuk voor het hele gezin?",
    example5Title: "Levering en voorraad",
    example5Desc: "Is dit spel op voorraad en wanneer kan ik het ontvangen?",
    example6Title: "Cadeautips",
    example6Desc: "Welke puzzel is geschikt als cadeau voor een reizenliefhebber?",
    seoTitle: "Welkom bij Lotana - AI Assistent voor spellen en puzzels",
    seoDescription: "Welkom bij Lotana - Jouw online winkel voor bordspellen, puzzels en educatief speelgoed. Krijg direct hulp via onze AI assistent"
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5">
      <SEO
        title={content.seoTitle}
        description={content.seoDescription}
        path={language === 'fr' ? '/fr/lotana' : '/lotana'}
        language={language}
      />
      <Navigation />

      <section className="container mx-auto px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 shadow-lg">
              <Puzzle className="h-10 w-10 text-primary" />
            </div>
          </div>
          <h1 className="mb-6 font-inter text-4xl font-bold leading-tight md:text-6xl md:leading-tight">
            {content.title}<br />
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              {content.subtitle}
            </span>
          </h1>
          <p className="mb-4 text-2xl font-semibold text-foreground/90">
            {content.heading}
          </p>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {content.description}
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="transform border-2 p-6 shadow-lg transition-all hover:scale-105 hover:shadow-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/70 shadow-md">
                <MessageSquare className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-2 text-lg font-bold">{content.feature1Title}</h3>
              <p className="text-sm text-muted-foreground">
                {content.feature1Desc}
              </p>
            </Card>

            <Card className="transform border-2 p-6 shadow-lg transition-all hover:scale-105 hover:shadow-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/70 shadow-md">
                <Clock className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-2 text-lg font-bold">{content.feature2Title}</h3>
              <p className="text-sm text-muted-foreground">
                {content.feature2Desc}
              </p>
            </Card>

            <Card className="transform border-2 p-6 shadow-lg transition-all hover:scale-105 hover:shadow-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/70 shadow-md">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-2 text-lg font-bold">{content.feature3Title}</h3>
              <p className="text-sm text-muted-foreground">
                {content.feature3Desc}
              </p>
            </Card>

            <Card className="transform border-2 p-6 shadow-lg transition-all hover:scale-105 hover:shadow-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/70 shadow-md">
                <Truck className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-2 text-lg font-bold">{content.feature4Title}</h3>
              <p className="text-sm text-muted-foreground">
                {content.feature4Desc}
              </p>
            </Card>

            <Card className="transform border-2 p-6 shadow-lg transition-all hover:scale-105 hover:shadow-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/70 shadow-md">
                <Package className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-2 text-lg font-bold">{content.feature5Title}</h3>
              <p className="text-sm text-muted-foreground">
                {content.feature5Desc}
              </p>
            </Card>

            <Card className="transform border-2 p-6 shadow-lg transition-all hover:scale-105 hover:shadow-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/70 shadow-md">
                <Gift className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-2 text-lg font-bold">{content.feature6Title}</h3>
              <p className="text-sm text-muted-foreground">
                {content.feature6Desc}
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-primary to-primary/70 shadow-lg">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">{content.howItWorksTitle}</h2>
            <p className="text-lg text-muted-foreground">
              {content.howItWorksDesc}
            </p>
          </div>

          <Card className="border-2 p-8 shadow-2xl md:p-12">
            <h3 className="mb-8 text-center text-2xl font-bold">{content.examplesTitle}</h3>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex items-start gap-4 rounded-lg bg-primary/5 p-4 transition-all hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                <div>
                  <p className="mb-1 font-semibold text-foreground">{content.example1Title}</p>
                  <p className="text-sm text-muted-foreground">
                    "{content.example1Desc}"
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-lg bg-primary/5 p-4 transition-all hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                <div>
                  <p className="mb-1 font-semibold text-foreground">{content.example2Title}</p>
                  <p className="text-sm text-muted-foreground">
                    "{content.example2Desc}"
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-lg bg-primary/5 p-4 transition-all hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                <div>
                  <p className="mb-1 font-semibold text-foreground">{content.example3Title}</p>
                  <p className="text-sm text-muted-foreground">
                    "{content.example3Desc}"
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-lg bg-primary/5 p-4 transition-all hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                <div>
                  <p className="mb-1 font-semibold text-foreground">{content.example4Title}</p>
                  <p className="text-sm text-muted-foreground">
                    "{content.example4Desc}"
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-lg bg-primary/5 p-4 transition-all hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                <div>
                  <p className="mb-1 font-semibold text-foreground">{content.example5Title}</p>
                  <p className="text-sm text-muted-foreground">
                    "{content.example5Desc}"
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-lg bg-primary/5 p-4 transition-all hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                <div>
                  <p className="mb-1 font-semibold text-foreground">{content.example6Title}</p>
                  <p className="text-sm text-muted-foreground">
                    "{content.example6Desc}"
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <div className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 p-8 text-center shadow-xl md:p-12">
          <Puzzle className="mx-auto mb-6 h-16 w-16 text-primary" />
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">
            {language === 'fr' ? 'Prêt à découvrir votre prochain jeu favori ?' : 'Klaar om je volgende favoriete spel te ontdekken?'}
          </h2>
          <p className="mb-6 text-lg text-muted-foreground">
            {language === 'fr'
              ? 'Notre assistant IA est disponible 24h/24 et 7j/7 pour vous aider à trouver le jeu ou puzzle parfait pour chaque occasion.'
              : 'Onze AI assistent is 24/7 beschikbaar om je te helpen het perfecte spel of puzzel te vinden voor elke gelegenheid.'}
          </p>
          <p className="text-sm text-muted-foreground">
            {language === 'fr'
              ? 'Cliquez simplement sur le bouton de chat en bas à droite pour commencer'
              : 'Klik gewoon op de chat-knop rechtsonder om te starten'}
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Lotana;
