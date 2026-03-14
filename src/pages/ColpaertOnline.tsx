import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Flame, CircleCheck as CheckCircle2, MessageSquare, Clock, Shield, Sparkles, Wrench, Zap, Truck, RefreshCw, Lightbulb, CircleAlert as AlertCircle } from "lucide-react";

const ColpaertOnline = () => {
  const { language } = useLanguage();

  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'chatbotkit-widget';
    script.src = 'https://static.chatbotkit.com/integrations/widget/v2.js';
    script.setAttribute('data-widget', 'cmmqrg0o5002x04jpku8csk38');
    script.setAttribute('data-position', 'bottom-left');
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector('#chatbotkit-widget');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const content = language === 'fr' ? {
    title: "Testez votre",
    subtitle: "Assistant IA Colpaert",
    heading: "Propulsé par Glimps",
    description: "Testez librement votre nouveau chatbot IA ! Posez des questions sur les fours céramiques, matériaux, techniques et entretien. Découvrez comment l'IA peut aider vos clients 24/7 avec des conseils d'experts sur la céramique et la poterie.",
    feature1Title: "Toujours disponible",
    feature1Desc: "Vos clients peuvent poser leurs questions à tout moment",
    feature2Title: "Jour et nuit",
    feature2Desc: "Support automatique même en dehors des heures de bureau",
    feature3Title: "Conforme RGPD",
    feature3Desc: "Toutes les conversations sont sécurisées et conformes au RGPD",
    feature4Title: "Conseils fours",
    feature4Desc: "Le bot connaît votre gamme de fours céramiques et peut conseiller",
    feature5Title: "Expert céramique",
    feature5Desc: "Formé spécifiquement sur les argiles, glaçures, pigments et techniques céramiques",
    feature6Title: "Support technique",
    feature6Desc: "Aide avec les fours, cuisson, émaillage et résolution de problèmes",
    testingTitle: "Comment tester de manière optimale",
    testingDesc: "Suivez ces conseils pour une expérience de test optimale",
    testingTip1Title: "Rafraîchir la conversation",
    testingTip1Desc: "Pour éviter les limitations de tokens, rafraîchissez régulièrement le chat. La limite est de 30 questions par conversation.",
    testingTip2Title: "Notez vos retours",
    testingTip2Desc: "Écrivez tous les points d'amélioration ou questions mal comprises - nous les implémenterons dans la prochaine version.",
    testingTip3Title: "Testez divers scénarios",
    testingTip3Desc: "Essayez différents types de questions : produits, installation, entretien, dépannage, etc.",
    howItWorksTitle: "Testez votre chatbot",
    howItWorksDesc: "Utilisez le chat ci-dessous ou cliquez sur le widget en bas à gauche",
    chatTitle: "Chatbot en direct",
    chatDesc: "Testez directement le chatbot ici",
    examplesTitle: "Questions de test suggérées",
    example1Title: "Choisir un four",
    example1Desc: "Quel four céramique convient pour un atelier amateur ?",
    example2Title: "Types d'argile",
    example2Desc: "Quelle est la différence entre l'argile de poterie et la porcelaine ?",
    example3Title: "Glaçures",
    example3Desc: "Comment appliquer correctement les glaçures céramiques ?",
    example4Title: "Cuisson",
    example4Desc: "Quelle température dois-je utiliser pour cuire la faïence ?",
    example5Title: "Cours et formations",
    example5Desc: "Quels cours de céramique proposez-vous ?",
    example6Title: "Outils nécessaires",
    example6Desc: "De quels outils ai-je besoin pour commencer le tournage ?",
    seoTitle: "Testez votre Assistant IA Colpaert - Propulsé par Glimps",
    seoDescription: "Page de test pour l'assistant IA de Colpaert. Découvrez comment le chatbot peut aider vos clients avec des questions sur la céramique et les fours."
  } : {
    title: "Test je",
    subtitle: "Colpaert AI Assistent",
    heading: "Mogelijk gemaakt door Glimps",
    description: "Test vrijuit je nieuwe AI chatbot! Stel vragen over keramiekovens, materialen, technieken en onderhoud. Ontdek hoe AI je klanten 24/7 kan helpen met expertadvies over keramiek en pottenbakken.",
    feature1Title: "Altijd beschikbaar",
    feature1Desc: "Je klanten kunnen op elk moment hun vragen stellen",
    feature2Title: "Dag en nacht",
    feature2Desc: "Automatische support ook buiten kantooruren",
    feature3Title: "GDPR conform",
    feature3Desc: "Alle gesprekken zijn beveiligd en GDPR-compliant",
    feature4Title: "Oven advies",
    feature4Desc: "De bot kent jouw assortiment keramiekovens en kan adviseren",
    feature5Title: "Keramiek expert",
    feature5Desc: "Specifiek getraind op kleisoorten, glazuren, pigmenten en keramiektechnieken",
    feature6Title: "Technische ondersteuning",
    feature6Desc: "Hulp bij ovens, bakken, glazuren en probleemoplossing",
    testingTitle: "Hoe optimaal testen",
    testingDesc: "Volg deze tips voor een optimale testervaring",
    testingTip1Title: "Ververs het gesprek regelmatig",
    testingTip1Desc: "Om token-limiet te vermijden, ververs de chat af en toe. De limiet is 30 vragen per gesprek.",
    testingTip2Title: "Noteer je feedback",
    testingTip2Desc: "Schrijf alle verbeterpunten of slecht begrepen vragen op - we verwerken dit in de volgende versie.",
    testingTip3Title: "Test verschillende scenario's",
    testingTip3Desc: "Probeer allerlei types vragen: producten, installatie, onderhoud, troubleshooting, etc.",
    howItWorksTitle: "Test je chatbot",
    howItWorksDesc: "Gebruik de chat hieronder of klik op de widget linksonder",
    chatTitle: "Live chatbot",
    chatDesc: "Test de chatbot direct hier",
    examplesTitle: "Gesuggereerde testvragen",
    example1Title: "Oven kiezen",
    example1Desc: "Welke keramiekoven is geschikt voor een hobbywerkplaats?",
    example2Title: "Kleisoorten",
    example2Desc: "Wat is het verschil tussen draaiklei en porselein?",
    example3Title: "Glazuren",
    example3Desc: "Hoe breng ik keramiekglazuren correct aan?",
    example4Title: "Bakken",
    example4Desc: "Welke temperatuur moet ik gebruiken voor het bakken van aardewerk?",
    example5Title: "Cursussen",
    example5Desc: "Welke keramiekcursussen bieden jullie aan?",
    example6Title: "Benodigdheden",
    example6Desc: "Welke gereedschappen heb ik nodig om te beginnen met draaien?",
    seoTitle: "Test je Colpaert AI Assistent - Mogelijk gemaakt door Glimps",
    seoDescription: "Testpagina voor de Colpaert AI assistent. Ontdek hoe de chatbot je klanten kan helpen met vragen over keramiek en ovens."
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5">
      <SEO
        title={content.seoTitle}
        description={content.seoDescription}
        path={language === 'fr' ? '/fr/colpaert-online' : '/colpaert-online'}
        language={language}
      />
      <Navigation />

      <section className="container mx-auto px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 sm:mb-6 inline-flex items-center justify-center">
            <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl sm:rounded-3xl bg-gradient-to-br from-orange-500/20 to-red-500/20 shadow-lg">
              <Flame className="h-8 w-8 sm:h-10 sm:w-10 text-orange-600" />
            </div>
          </div>
          <h1 className="mb-4 sm:mb-6 font-inter text-3xl font-bold leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
            {content.title}<br />
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              {content.subtitle}
            </span>
          </h1>
          <p className="mb-3 sm:mb-4 text-lg sm:text-xl md:text-2xl font-semibold text-foreground/90">
            {content.heading}
          </p>
          <p className="mx-auto max-w-2xl px-4 text-base sm:text-lg text-muted-foreground">
            {content.description}
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8 sm:px-6 sm:py-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="transform border-2 p-4 sm:p-6 shadow-lg transition-all hover:scale-105 hover:shadow-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 shadow-md">
                <MessageSquare className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-2 text-lg font-bold">{content.feature1Title}</h3>
              <p className="text-sm text-muted-foreground">
                {content.feature1Desc}
              </p>
            </Card>

            <Card className="transform border-2 p-6 shadow-lg transition-all hover:scale-105 hover:shadow-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 shadow-md">
                <Clock className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-2 text-lg font-bold">{content.feature2Title}</h3>
              <p className="text-sm text-muted-foreground">
                {content.feature2Desc}
              </p>
            </Card>

            <Card className="transform border-2 p-6 shadow-lg transition-all hover:scale-105 hover:shadow-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 shadow-md">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-2 text-lg font-bold">{content.feature3Title}</h3>
              <p className="text-sm text-muted-foreground">
                {content.feature3Desc}
              </p>
            </Card>

            <Card className="transform border-2 p-6 shadow-lg transition-all hover:scale-105 hover:shadow-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 shadow-md">
                <Truck className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-2 text-lg font-bold">{content.feature4Title}</h3>
              <p className="text-sm text-muted-foreground">
                {content.feature4Desc}
              </p>
            </Card>

            <Card className="transform border-2 p-6 shadow-lg transition-all hover:scale-105 hover:shadow-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 shadow-md">
                <Flame className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-2 text-lg font-bold">{content.feature5Title}</h3>
              <p className="text-sm text-muted-foreground">
                {content.feature5Desc}
              </p>
            </Card>

            <Card className="transform border-2 p-6 shadow-lg transition-all hover:scale-105 hover:shadow-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 shadow-md">
                <Wrench className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-2 text-lg font-bold">{content.feature6Title}</h3>
              <p className="text-sm text-muted-foreground">
                {content.feature6Desc}
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 sm:px-6 sm:py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 sm:mb-12 text-center">
            <div className="mb-4 sm:mb-6 inline-flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
              <Lightbulb className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold">{content.testingTitle}</h2>
            <p className="text-base sm:text-lg text-muted-foreground px-4">
              {content.testingDesc}
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-3 mb-12 sm:mb-16">
            <Card className="border-2 border-blue-200 bg-blue-50/50 p-4 sm:p-6 shadow-lg">
              <div className="mb-3 sm:mb-4 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-md">
                <RefreshCw className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
              </div>
              <h3 className="mb-2 text-base sm:text-lg font-bold text-foreground">{content.testingTip1Title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {content.testingTip1Desc}
              </p>
            </Card>

            <Card className="border-2 border-blue-200 bg-blue-50/50 p-4 sm:p-6 shadow-lg">
              <div className="mb-3 sm:mb-4 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-md">
                <AlertCircle className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
              </div>
              <h3 className="mb-2 text-base sm:text-lg font-bold text-foreground">{content.testingTip2Title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {content.testingTip2Desc}
              </p>
            </Card>

            <Card className="border-2 border-blue-200 bg-blue-50/50 p-4 sm:p-6 shadow-lg">
              <div className="mb-3 sm:mb-4 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-md">
                <MessageSquare className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
              </div>
              <h3 className="mb-2 text-base sm:text-lg font-bold text-foreground">{content.testingTip3Title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {content.testingTip3Desc}
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 sm:mb-12 text-center">
            <div className="mb-4 sm:mb-6 inline-flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl sm:rounded-3xl bg-gradient-to-br from-orange-500 to-red-500 shadow-lg">
              <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold">{content.howItWorksTitle}</h2>
            <p className="text-base sm:text-lg text-muted-foreground px-4">
              {content.howItWorksDesc}
            </p>
          </div>

          <Card className="border-2 p-6 shadow-2xl sm:p-8 md:p-12">
            <h3 className="mb-6 sm:mb-8 text-center text-xl sm:text-2xl font-bold">{content.examplesTitle}</h3>

            <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
              <div className="flex items-start gap-4 rounded-lg bg-orange-50 p-4 transition-all hover:bg-orange-100">
                <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-orange-600" />
                <div>
                  <p className="mb-1 font-semibold text-foreground">{content.example1Title}</p>
                  <p className="text-sm text-muted-foreground">
                    "{content.example1Desc}"
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-lg bg-orange-50 p-4 transition-all hover:bg-orange-100">
                <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-orange-600" />
                <div>
                  <p className="mb-1 font-semibold text-foreground">{content.example2Title}</p>
                  <p className="text-sm text-muted-foreground">
                    "{content.example2Desc}"
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-lg bg-orange-50 p-4 transition-all hover:bg-orange-100">
                <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-orange-600" />
                <div>
                  <p className="mb-1 font-semibold text-foreground">{content.example3Title}</p>
                  <p className="text-sm text-muted-foreground">
                    "{content.example3Desc}"
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-lg bg-orange-50 p-4 transition-all hover:bg-orange-100">
                <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-orange-600" />
                <div>
                  <p className="mb-1 font-semibold text-foreground">{content.example4Title}</p>
                  <p className="text-sm text-muted-foreground">
                    "{content.example4Desc}"
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-lg bg-orange-50 p-4 transition-all hover:bg-orange-100">
                <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-orange-600" />
                <div>
                  <p className="mb-1 font-semibold text-foreground">{content.example5Title}</p>
                  <p className="text-sm text-muted-foreground">
                    "{content.example5Desc}"
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-lg bg-orange-50 p-4 transition-all hover:bg-orange-100">
                <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-orange-600" />
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

      <section className="container mx-auto px-4 py-12 sm:px-6 sm:py-16 bg-gradient-to-b from-background to-primary/5">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 sm:mb-12 text-center">
            <div className="mb-4 sm:mb-6 inline-flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl sm:rounded-3xl bg-gradient-to-br from-orange-500 to-red-500 shadow-lg">
              <MessageSquare className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold">{content.chatTitle}</h2>
            <p className="text-base sm:text-lg text-muted-foreground px-4">
              {content.chatDesc}
            </p>
          </div>

          <div className="flex justify-center items-center py-10">
            <iframe
              src="https://static.chatbotkit.com/integrations/widget/cmmqrg0o5002x04jpku8csk38/frame"
              width="700"
              height="600"
              frameBorder="0"
              className="rounded-xl shadow-2xl"
              allow="microphone"
              title="Colpaert AI Chatbot"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-4xl rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 p-6 text-center shadow-xl sm:p-8 md:p-12">
          <Sparkles className="mx-auto mb-4 sm:mb-6 h-12 w-12 sm:h-16 sm:w-16 text-orange-600" />
          <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl font-bold">
            {language === 'fr' ? 'Testez toutes les possibilités' : 'Test alle mogelijkheden'}
          </h2>
          <p className="mb-4 sm:mb-6 text-base sm:text-lg text-muted-foreground px-2">
            {language === 'fr'
              ? 'Ceci est votre environnement de test personnel. Posez n\'importe quelle question pour voir comment votre chatbot IA répond à vos clients sur la céramique, les fours et les techniques.'
              : 'Dit is je persoonlijke testomgeving. Stel elke vraag die je wilt om te zien hoe je AI chatbot je klanten helpt met keramiek, ovens en technieken.'}
          </p>
          <p className="text-xs sm:text-sm font-medium text-orange-700">
            {language === 'fr'
              ? 'Propulsé par Glimps - Votre partenaire pour l\'IA conversationnelle'
              : 'Mogelijk gemaakt door Glimps - Je partner voor conversationele AI'}
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ColpaertOnline;
