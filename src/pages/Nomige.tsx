import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { MessageSquare, Clock, Shield, Sparkles, Heart, Dna, RefreshCw, Lightbulb, CircleAlert as AlertCircle, FlaskConical } from "lucide-react";

const Nomige = () => {
  const { language } = useLanguage();

  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'chatbotkit-widget';
    script.src = 'https://static.chatbotkit.com/integrations/widget/v2.js';
    script.setAttribute('data-widget', 'cmobclk24001l04l2qhkaebph');
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
    subtitle: "Assistant IA Nomige",
    heading: "Propulsé par Glimps",
    description: "Testez librement votre nouveau chatbot IA ! Posez des questions sur les soins personnalisés à base d'ADN, l'analyse de peau, les produits Nomige et les conseils dermatologiques. Découvrez comment l'IA peut aider vos clients 24/7.",
    feature1Title: "Toujours disponible",
    feature1Desc: "Vos clients peuvent poser leurs questions sur les soins Nomige à tout moment, même la nuit",
    feature2Title: "Jour et nuit",
    feature2Desc: "Support automatique 24h/24 — réponses sur la science ADN, les formules et la routine de soins",
    feature3Title: "Conforme RGPD",
    feature3Desc: "Toutes les conversations sont sécurisées et conformes au RGPD belge",
    feature4Title: "Expert en soins ADN",
    feature4Desc: "Le bot connaît la science Nomige : analyses ADN, sérums personnalisés, crèmes et résultats cliniques",
    feature5Title: "Science dermatologique",
    feature5Desc: "Formé sur les recherches du Dr. Barbara Geusens et les études cliniques publiées",
    feature6Title: "Recommandations personnalisées",
    feature6Desc: "Conseils sur mesure basés sur le type de peau, le profil ADN et le style de vie du client",
    testingTitle: "Comment tester de manière optimale",
    testingDesc: "Suivez ces conseils pour une expérience de test optimale",
    testingTip1Title: "Rafraîchir la conversation",
    testingTip1Desc: "Pour éviter les limitations de tokens, rafraîchissez régulièrement le chat. La limite est de 30 questions par conversation.",
    testingTip2Title: "Notez vos retours",
    testingTip2Desc: "Écrivez tous les points d'amélioration ou questions mal comprises — nous les implémenterons dans la prochaine version.",
    testingTip3Title: "Testez divers scénarios",
    testingTip3Desc: "Essayez différents types de questions : produits, ingrédients, analyse ADN, routine de soins, livraison, etc.",
    chatTitle: "Chatbot en direct",
    chatDesc: "Testez directement le chatbot Nomige ici",
    ctaTitle: "Testez toutes les possibilités",
    ctaDesc: "Ceci est votre environnement de test personnel. Posez n'importe quelle question pour voir comment votre chatbot IA répond à vos clients sur les soins personnalisés, l'analyse ADN et la science dermatologique.",
    ctaFooter: "Propulsé par Glimps — Votre partenaire pour l'IA conversationnelle",
    seoTitle: "Testez votre Assistant IA Nomige - Propulsé par Glimps",
    seoDescription: "Page de test pour l'assistant IA de Nomige. Découvrez comment le chatbot peut aider vos clients avec des questions sur les soins personnalisés à base d'ADN et la science dermatologique."
  } : {
    title: "Test je",
    subtitle: "Nomige AI Assistent",
    heading: "Mogelijk gemaakt door Glimps",
    description: "Test vrijuit je nieuwe AI chatbot! Stel vragen over gepersonaliseerde DNA-huidverzorging, huidanalyse, Nomige producten en dermatologisch advies. Ontdek hoe AI je klanten 24/7 kan helpen.",
    feature1Title: "Altijd beschikbaar",
    feature1Desc: "Je klanten kunnen op elk moment hun vragen stellen over Nomige huidverzorging, ook 's nachts",
    feature2Title: "Dag en nacht",
    feature2Desc: "Automatische support 24/7 — antwoorden over DNA-wetenschap, formules en huidroutines",
    feature3Title: "GDPR conform",
    feature3Desc: "Alle gesprekken zijn beveiligd en GDPR-compliant",
    feature4Title: "Expert DNA-huidverzorging",
    feature4Desc: "De bot kent de Nomige-wetenschap: DNA-analyses, gepersonaliseerde serums, crèmes en klinische resultaten",
    feature5Title: "Dermatologische kennis",
    feature5Desc: "Getraind op het onderzoek van Dr. Barbara Geusens en gepubliceerde klinische studies",
    feature6Title: "Gepersonaliseerde aanbevelingen",
    feature6Desc: "Advies op maat op basis van huidtype, DNA-profiel en levensstijl van de klant",
    testingTitle: "Hoe optimaal testen",
    testingDesc: "Volg deze tips voor een optimale testervaring",
    testingTip1Title: "Ververs het gesprek regelmatig",
    testingTip1Desc: "Om token-limiet te vermijden, ververs de chat af en toe. De limiet is 30 vragen per gesprek.",
    testingTip2Title: "Noteer je feedback",
    testingTip2Desc: "Schrijf alle verbeterpunten of slecht begrepen vragen op — we verwerken dit in de volgende versie.",
    testingTip3Title: "Test verschillende scenario's",
    testingTip3Desc: "Probeer allerlei types vragen: producten, ingrediënten, DNA-analyse, huidroutine, bezorging, etc.",
    chatTitle: "Live chatbot",
    chatDesc: "Test de Nomige chatbot direct hier",
    ctaTitle: "Test alle mogelijkheden",
    ctaDesc: "Dit is je persoonlijke testomgeving. Stel elke vraag die je wilt om te zien hoe je AI chatbot je klanten helpt met gepersonaliseerde huidverzorging, DNA-analyse en dermatologische wetenschap.",
    ctaFooter: "Mogelijk gemaakt door Glimps — Je partner voor conversationele AI",
    seoTitle: "Test je Nomige AI Assistent - Mogelijk gemaakt door Glimps",
    seoDescription: "Testpagina voor de Nomige AI assistent. Ontdek hoe de chatbot je klanten kan helpen met vragen over gepersonaliseerde DNA-huidverzorging en dermatologische wetenschap."
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={content.seoTitle}
        description={content.seoDescription}
        path={language === 'fr' ? '/fr/nomige' : '/nomige'}
        language={language}
      />
      <Navigation />

      <section className="container mx-auto px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 sm:mb-6 inline-flex items-center justify-center">
            <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl sm:rounded-3xl shadow-lg" style={{ background: 'rgba(127,78,59,0.12)' }}>
              <Dna className="h-8 w-8 sm:h-10 sm:w-10" style={{ color: '#7f4e3b' }} />
            </div>
          </div>
          <h1 className="mb-4 sm:mb-6 font-inter text-3xl font-bold leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
            {content.title}<br />
            <span style={{ background: 'linear-gradient(to right, #7f4e3b, #a0624a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
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
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl shadow-md" style={{ background: 'linear-gradient(135deg, #7f4e3b, #a0624a)' }}>
                <MessageSquare className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-2 text-lg font-bold">{content.feature1Title}</h3>
              <p className="text-sm text-muted-foreground">{content.feature1Desc}</p>
            </Card>

            <Card className="transform border-2 p-6 shadow-lg transition-all hover:scale-105 hover:shadow-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl shadow-md" style={{ background: 'linear-gradient(135deg, #7f4e3b, #a0624a)' }}>
                <Clock className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-2 text-lg font-bold">{content.feature2Title}</h3>
              <p className="text-sm text-muted-foreground">{content.feature2Desc}</p>
            </Card>

            <Card className="transform border-2 p-6 shadow-lg transition-all hover:scale-105 hover:shadow-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl shadow-md" style={{ background: 'linear-gradient(135deg, #7f4e3b, #a0624a)' }}>
                <Shield className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-2 text-lg font-bold">{content.feature3Title}</h3>
              <p className="text-sm text-muted-foreground">{content.feature3Desc}</p>
            </Card>

            <Card className="transform border-2 p-6 shadow-lg transition-all hover:scale-105 hover:shadow-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl shadow-md" style={{ background: 'linear-gradient(135deg, #7f4e3b, #a0624a)' }}>
                <Dna className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-2 text-lg font-bold">{content.feature4Title}</h3>
              <p className="text-sm text-muted-foreground">{content.feature4Desc}</p>
            </Card>

            <Card className="transform border-2 p-6 shadow-lg transition-all hover:scale-105 hover:shadow-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl shadow-md" style={{ background: 'linear-gradient(135deg, #7f4e3b, #a0624a)' }}>
                <FlaskConical className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-2 text-lg font-bold">{content.feature5Title}</h3>
              <p className="text-sm text-muted-foreground">{content.feature5Desc}</p>
            </Card>

            <Card className="transform border-2 p-6 shadow-lg transition-all hover:scale-105 hover:shadow-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl shadow-md" style={{ background: 'linear-gradient(135deg, #7f4e3b, #a0624a)' }}>
                <Heart className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-2 text-lg font-bold">{content.feature6Title}</h3>
              <p className="text-sm text-muted-foreground">{content.feature6Desc}</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 sm:px-6 sm:py-16 bg-white">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 sm:mb-12 text-center">
            <div className="mb-4 sm:mb-6 inline-flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
              <Lightbulb className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold">{content.testingTitle}</h2>
            <p className="text-base sm:text-lg text-muted-foreground px-4">{content.testingDesc}</p>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-3 mb-12 sm:mb-16">
            <Card className="border-2 border-blue-200 bg-blue-50/50 p-4 sm:p-6 shadow-lg">
              <div className="mb-3 sm:mb-4 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-md">
                <RefreshCw className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
              </div>
              <h3 className="mb-2 text-base sm:text-lg font-bold text-foreground">{content.testingTip1Title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">{content.testingTip1Desc}</p>
            </Card>

            <Card className="border-2 border-blue-200 bg-blue-50/50 p-4 sm:p-6 shadow-lg">
              <div className="mb-3 sm:mb-4 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-md">
                <AlertCircle className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
              </div>
              <h3 className="mb-2 text-base sm:text-lg font-bold text-foreground">{content.testingTip2Title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">{content.testingTip2Desc}</p>
            </Card>

            <Card className="border-2 border-blue-200 bg-blue-50/50 p-4 sm:p-6 shadow-lg">
              <div className="mb-3 sm:mb-4 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-md">
                <MessageSquare className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
              </div>
              <h3 className="mb-2 text-base sm:text-lg font-bold text-foreground">{content.testingTip3Title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">{content.testingTip3Desc}</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 sm:px-6 sm:py-16 bg-white">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 sm:mb-12 text-center">
            <div className="mb-4 sm:mb-6 inline-flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl sm:rounded-3xl shadow-lg" style={{ background: 'linear-gradient(135deg, #7f4e3b, #a0624a)' }}>
              <MessageSquare className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold">{content.chatTitle}</h2>
            <p className="text-base sm:text-lg text-muted-foreground px-4">{content.chatDesc}</p>
          </div>

          <div className="flex justify-center items-center py-10">
            <iframe
              src="https://static.chatbotkit.com/integrations/widget/cmobclk24001l04l2qhkaebph/frame"
              width="700"
              height="700"
              frameBorder="0"
              className="rounded-xl shadow-2xl"
              allow="microphone"
              title="Nomige AI Chatbot"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-4xl rounded-xl sm:rounded-2xl p-6 text-center shadow-xl sm:p-8 md:p-12" style={{ background: 'linear-gradient(135deg, rgba(127,78,59,0.08), rgba(160,98,74,0.12))' }}>
          <Sparkles className="mx-auto mb-4 sm:mb-6 h-12 w-12 sm:h-16 sm:w-16" style={{ color: '#7f4e3b' }} />
          <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl font-bold">
            {content.ctaTitle}
          </h2>
          <p className="mb-4 sm:mb-6 text-base sm:text-lg text-muted-foreground px-2">
            {content.ctaDesc}
          </p>
          <p className="text-xs sm:text-sm font-medium" style={{ color: '#7f4e3b' }}>
            {content.ctaFooter}
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Nomige;
