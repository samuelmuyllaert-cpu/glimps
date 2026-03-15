import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Car, CircleCheck as CheckCircle2, MessageSquare, Clock, Shield, Sparkles, MapPin, Users, Truck, Calendar, Wrench, Zap } from "lucide-react";

const VerhuurMeerschaert = () => {
  const { language } = useLanguage();

  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'chatbotkit-widget';
    script.src = 'https://static.chatbotkit.com/integrations/widget/v2.js';
    script.setAttribute('data-widget', 'cmmjoimyq000n04l4i4r8tsls');
    script.setAttribute('data-position', 'bottom-right');
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
    subtitle: "Assistant IA Autoverhuur Meerschaert",
    heading: "Propulsé par Glimps",
    description: "Testez librement votre nouveau chatbot IA ! Posez des questions sur la location de véhicules, tarifs, disponibilité et services. Découvrez comment l'IA peut aider vos clients 24/7 avec des informations sur votre flotte de plus de 400 véhicules.",
    feature1Title: "Toujours disponible",
    feature1Desc: "Vos clients peuvent réserver et s'informer à tout moment",
    feature2Title: "24/7 Support",
    feature2Desc: "Assistance automatique même en dehors des heures d'ouverture",
    feature3Title: "Conforme RGPD",
    feature3Desc: "Toutes les conversations sont sécurisées et conformes au RGPD",
    feature4Title: "Info disponibilité",
    feature4Desc: "Le bot connaît votre flotte et peut informer sur la disponibilité",
    feature5Title: "Expert location",
    feature5Desc: "Formé sur votre gamme complète de voitures, minibus et camionnettes",
    feature6Title: "Conseils pratiques",
    feature6Desc: "Aide pour choisir le bon véhicule et les accessoires nécessaires",
    testingTitle: "Comment tester de manière optimale",
    testingDesc: "Suivez ces conseils pour une expérience de test optimale",
    testingTip1Title: "Rafraîchir la conversation",
    testingTip1Desc: "Pour éviter les limitations de tokens, rafraîchissez régulièrement le chat. La limite est de 30 questions par conversation.",
    testingTip2Title: "Notez vos retours",
    testingTip2Desc: "Écrivez tous les points d'amélioration ou questions mal comprises - nous les implémenterons dans la prochaine version.",
    testingTip3Title: "Testez divers scénarios",
    testingTip3Desc: "Essayez différents types de questions : véhicules, tarifs, réservations, accessoires, etc.",
    howItWorksTitle: "Testez votre chatbot",
    howItWorksDesc: "Utilisez le chat ci-dessous ou cliquez sur le widget en bas à droite",
    chatTitle: "Chatbot en direct",
    chatDesc: "Testez directement le chatbot ici",
    examplesTitle: "Questions de test suggérées",
    example1Title: "Choisir un véhicule",
    example1Desc: "Quel véhicule convient pour un déménagement ?",
    example2Title: "Tarifs location",
    example2Desc: "Combien coûte la location d'un minibus pour un week-end ?",
    example3Title: "Disponibilité",
    example3Desc: "Avez-vous un camion de déménagement disponible la semaine prochaine ?",
    example4Title: "Services inclus",
    example4Desc: "L'assurance omnium est-elle incluse dans le prix ?",
    example5Title: "Accessoires",
    example5Desc: "Puis-je louer du matériel de déménagement comme des diables et des couvertures ?",
    example6Title: "Réservation",
    example6Desc: "Comment puis-je réserver un véhicule et quelles sont les conditions ?",
    seoTitle: "Testez votre Assistant IA Autoverhuur Meerschaert - Propulsé par Glimps",
    seoDescription: "Page de test pour l'assistant IA d'Autoverhuur Meerschaert. Découvrez comment le chatbot peut aider vos clients avec des questions sur la location de véhicules."
  } : {
    title: "Test je",
    subtitle: "Autoverhuur Meerschaert AI Assistent",
    heading: "Mogelijk gemaakt door Glimps",
    description: "Test vrijuit je nieuwe AI chatbot! Stel vragen over autoverhuur, tarieven, beschikbaarheid en diensten. Ontdek hoe AI je klanten 24/7 kan helpen met informatie over je wagenpark van meer dan 400 voertuigen.",
    feature1Title: "Altijd beschikbaar",
    feature1Desc: "Je klanten kunnen op elk moment reserveren en informatie opvragen",
    feature2Title: "24/7 ondersteuning",
    feature2Desc: "Automatische hulp ook buiten openingsuren",
    feature3Title: "GDPR conform",
    feature3Desc: "Alle gesprekken zijn beveiligd en GDPR-compliant",
    feature4Title: "Beschikbaarheid info",
    feature4Desc: "De bot kent je wagenpark en kan beschikbaarheid doorgeven",
    feature5Title: "Verhuur expert",
    feature5Desc: "Specifiek getraind op je volledige gamma personenwagens, minibussen en bestelwagens",
    feature6Title: "Praktisch advies",
    feature6Desc: "Hulp bij het kiezen van het juiste voertuig en benodigde accessoires",
    testingTitle: "Hoe optimaal testen",
    testingDesc: "Volg deze tips voor een optimale testervaring",
    testingTip1Title: "Ververs het gesprek regelmatig",
    testingTip1Desc: "Om token-limiet te vermijden, ververs de chat af en toe. De limiet is 30 vragen per gesprek.",
    testingTip2Title: "Noteer je feedback",
    testingTip2Desc: "Schrijf alle verbeterpunten of slecht begrepen vragen op - we verwerken dit in de volgende versie.",
    testingTip3Title: "Test verschillende scenario's",
    testingTip3Desc: "Probeer allerlei types vragen: voertuigen, prijzen, reservaties, accessoires, etc.",
    howItWorksTitle: "Test je chatbot",
    howItWorksDesc: "Gebruik de chat hieronder of klik op de widget rechtsonder",
    chatTitle: "Live chatbot",
    chatDesc: "Test de chatbot direct hier",
    examplesTitle: "Gesuggereerde testvragen",
    example1Title: "Voertuig kiezen",
    example1Desc: "Welk voertuig is geschikt voor een verhuizing?",
    example2Title: "Huurprijzen",
    example2Desc: "Hoeveel kost het huren van een minibus voor een weekend?",
    example3Title: "Beschikbaarheid",
    example3Desc: "Hebben jullie volgende week een verhuiswagen beschikbaar?",
    example4Title: "Inbegrepen diensten",
    example4Desc: "Is een omniumverzekering inbegrepen in de prijs?",
    example5Title: "Accessoires",
    example5Desc: "Kan ik verhuismateriaal huren zoals steekwagens en verhuisdekens?",
    example6Title: "Reserveren",
    example6Desc: "Hoe kan ik een voertuig reserveren en wat zijn de voorwaarden?",
    seoTitle: "Test je Autoverhuur Meerschaert AI Assistent - Mogelijk gemaakt door Glimps",
    seoDescription: "Testpagina voor de Autoverhuur Meerschaert AI assistent. Ontdek hoe de chatbot je klanten kan helpen met vragen over autoverhuur."
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5">
      <SEO
        title={content.seoTitle}
        description={content.seoDescription}
        path={language === 'fr' ? '/fr/verhuur-meerschaert' : '/verhuur-meerschaert'}
        language={language}
      />
      <Navigation />

      <section className="container mx-auto px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 sm:mb-6 inline-flex items-center justify-center">
            <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl sm:rounded-3xl bg-gradient-to-br from-orange-500/20 to-red-500/20 shadow-lg">
              <Car className="h-8 w-8 sm:h-10 sm:w-10 text-orange-600" />
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
            <Card className="border-2 p-4 shadow-lg transition-all hover:shadow-xl sm:p-6">
              <div className="mb-3 sm:mb-4 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 shadow-md">
                <Clock className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
              </div>
              <h3 className="mb-2 text-base sm:text-lg font-bold text-foreground">{content.feature1Title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {content.feature1Desc}
              </p>
            </Card>

            <Card className="border-2 p-4 shadow-lg transition-all hover:shadow-xl sm:p-6">
              <div className="mb-3 sm:mb-4 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 shadow-md">
                <Sparkles className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
              </div>
              <h3 className="mb-2 text-base sm:text-lg font-bold text-foreground">{content.feature2Title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {content.feature2Desc}
              </p>
            </Card>

            <Card className="border-2 p-4 shadow-lg transition-all hover:shadow-xl sm:p-6">
              <div className="mb-3 sm:mb-4 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 shadow-md">
                <Shield className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
              </div>
              <h3 className="mb-2 text-base sm:text-lg font-bold text-foreground">{content.feature3Title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {content.feature3Desc}
              </p>
            </Card>

            <Card className="border-2 p-4 shadow-lg transition-all hover:shadow-xl sm:p-6">
              <div className="mb-3 sm:mb-4 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 shadow-md">
                <Calendar className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
              </div>
              <h3 className="mb-2 text-base sm:text-lg font-bold text-foreground">{content.feature4Title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {content.feature4Desc}
              </p>
            </Card>

            <Card className="border-2 p-4 shadow-lg transition-all hover:shadow-xl sm:p-6">
              <div className="mb-3 sm:mb-4 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 shadow-md">
                <Truck className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
              </div>
              <h3 className="mb-2 text-base sm:text-lg font-bold text-foreground">{content.feature5Title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {content.feature5Desc}
              </p>
            </Card>

            <Card className="border-2 p-4 shadow-lg transition-all hover:shadow-xl sm:p-6">
              <div className="mb-3 sm:mb-4 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 shadow-md">
                <Zap className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
              </div>
              <h3 className="mb-2 text-base sm:text-lg font-bold text-foreground">{content.feature6Title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {content.feature6Desc}
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8 sm:px-6 sm:py-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 sm:mb-8 text-center">
            <div className="mb-3 sm:mb-4 inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 shadow-md">
              <Wrench className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
            </div>
            <h2 className="mb-2 sm:mb-3 text-xl sm:text-2xl md:text-3xl font-bold">{content.testingTitle}</h2>
            <p className="text-sm sm:text-base text-muted-foreground px-4">
              {content.testingDesc}
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
            <Card className="border-2 border-orange-200 bg-orange-50/50 p-4 shadow-lg sm:p-6">
              <div className="mb-3 sm:mb-4 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 shadow-md">
                <Sparkles className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
              </div>
              <h3 className="mb-2 text-base sm:text-lg font-bold text-foreground">{content.testingTip1Title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {content.testingTip1Desc}
              </p>
            </Card>

            <Card className="border-2 border-orange-200 bg-orange-50/50 p-4 shadow-lg sm:p-6">
              <div className="mb-3 sm:mb-4 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 shadow-md">
                <CheckCircle2 className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
              </div>
              <h3 className="mb-2 text-base sm:text-lg font-bold text-foreground">{content.testingTip2Title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {content.testingTip2Desc}
              </p>
            </Card>

            <Card className="border-2 border-orange-200 bg-orange-50/50 p-4 shadow-lg sm:p-6">
              <div className="mb-3 sm:mb-4 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 shadow-md">
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

          <div className="flex justify-center">
            <div className="w-full max-w-[450px]">
              <iframe
                src="https://static.chatbotkit.com/integrations/widget/v2/cmmjoimyq000n04l4i4r8tsls"
                width="100%"
                height="650"
                frameBorder="0"
                className="rounded-xl shadow-2xl"
                allow="clipboard-write"
                title="Autoverhuur Meerschaert AI Chatbot"
              />
            </div>
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
              ? 'Ceci est votre environnement de test personnel. Posez n\'importe quelle question pour voir comment votre chatbot IA aide vos clients avec la location de véhicules.'
              : 'Dit is je persoonlijke testomgeving. Stel elke vraag die je wilt om te zien hoe je AI chatbot je klanten helpt met autoverhuur.'}
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

export default VerhuurMeerschaert;
