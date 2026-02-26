import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle2, AlertCircle, TrendingUp, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface Question {
  id: string;
  question: string;
  questionFr: string;
  options: { value: string; label: string; labelFr: string; points: number }[];
}

const questionsData: Question[] = [
  {
    id: "support_volume",
    question: "Hoeveel support vragen krijg je per dag?",
    questionFr: "Combien de questions de support recevez-vous par jour ?",
    options: [
      { value: "0-10", label: "0-10 vragen", labelFr: "0-10 questions", points: 20 },
      { value: "10-50", label: "10-50 vragen", labelFr: "10-50 questions", points: 50 },
      { value: "50-100", label: "50-100 vragen", labelFr: "50-100 questions", points: 80 },
      { value: "100+", label: "100+ vragen", labelFr: "100+ questions", points: 100 },
    ],
  },
  {
    id: "response_time",
    question: "Hoe snel reageer je gemiddeld op klantvragen?",
    questionFr: "Quelle est votre vitesse de réponse moyenne aux questions clients ?",
    options: [
      { value: "instant", label: "Direct (< 5 min)", labelFr: "Immédiat (< 5 min)", points: 100 },
      { value: "fast", label: "Snel (< 1 uur)", labelFr: "Rapide (< 1 heure)", points: 80 },
      { value: "same_day", label: "Zelfde dag", labelFr: "Le même jour", points: 40 },
      { value: "next_day", label: "Volgende dag of later", labelFr: "Le jour suivant ou plus tard", points: 20 },
    ],
  },
  {
    id: "repetitive_questions",
    question: "Hoeveel procent van je vragen is repetitief?",
    questionFr: "Quel pourcentage de vos questions est répétitif ?",
    options: [
      { value: "0-25", label: "0-25% (meeste vragen zijn uniek)", labelFr: "0-25% (la plupart des questions sont uniques)", points: 20 },
      { value: "25-50", label: "25-50%", labelFr: "25-50%", points: 50 },
      { value: "50-75", label: "50-75%", labelFr: "50-75%", points: 80 },
      { value: "75-100", label: "75-100% (meeste vragen lijken op elkaar)", labelFr: "75-100% (la plupart des questions se ressemblent)", points: 100 },
    ],
  },
  {
    id: "faq_exists",
    question: "Heb je een FAQ sectie op je website?",
    questionFr: "Avez-vous une section FAQ sur votre site web ?",
    options: [
      { value: "no", label: "Nee, geen FAQ", labelFr: "Non, pas de FAQ", points: 100 },
      { value: "basic", label: "Ja, basis FAQ", labelFr: "Oui, FAQ basique", points: 60 },
      { value: "extensive", label: "Ja, uitgebreide FAQ", labelFr: "Oui, FAQ complète", points: 80 },
      { value: "interactive", label: "Ja, met zoekfunctie", labelFr: "Oui, avec fonction de recherche", points: 40 },
    ],
  },
  {
    id: "international",
    question: "Verkoop je internationaal?",
    questionFr: "Vendez-vous à l'international ?",
    options: [
      { value: "no", label: "Nee, alleen België", labelFr: "Non, seulement Belgique", points: 20 },
      { value: "benelux", label: "Ja, Benelux", labelFr: "Oui, Benelux", points: 60 },
      { value: "europe", label: "Ja, Europa", labelFr: "Oui, Europe", points: 80 },
      { value: "worldwide", label: "Ja, wereldwijd", labelFr: "Oui, monde entier", points: 100 },
    ],
  },
  {
    id: "support_hours",
    question: "Wanneer is je klantenservice beschikbaar?",
    questionFr: "Quand votre service client est-il disponible ?",
    options: [
      { value: "24/7", label: "24/7", labelFr: "24/7", points: 20 },
      { value: "extended", label: "Kantooruren + avond", labelFr: "Heures de bureau + soir", points: 60 },
      { value: "business", label: "Alleen kantooruren", labelFr: "Heures de bureau uniquement", points: 100 },
      { value: "limited", label: "Beperkte uren", labelFr: "Heures limitées", points: 100 },
    ],
  },
  {
    id: "team_size",
    question: "Hoeveel mensen werken er in je support team?",
    questionFr: "Combien de personnes travaillent dans votre équipe de support ?",
    options: [
      { value: "0-1", label: "0-1 persoon", labelFr: "0-1 personne", points: 60 },
      { value: "2-5", label: "2-5 mensen", labelFr: "2-5 personnes", points: 80 },
      { value: "6-10", label: "6-10 mensen", labelFr: "6-10 personnes", points: 100 },
      { value: "10+", label: "10+ mensen", labelFr: "10+ personnes", points: 100 },
    ],
  },
  {
    id: "conversion_issue",
    question: "Hoeveel bezoekers verlaten je site zonder aankoop?",
    questionFr: "Combien de visiteurs quittent votre site sans achat ?",
    options: [
      { value: "low", label: "< 50% (hoge conversie)", labelFr: "< 50% (conversion élevée)", points: 40 },
      { value: "medium", label: "50-75%", labelFr: "50-75%", points: 60 },
      { value: "high", label: "75-90%", labelFr: "75-90%", points: 80 },
      { value: "very_high", label: "> 90%", labelFr: "> 90%", points: 100 },
    ],
  },
  {
    id: "product_complexity",
    question: "Hoe complex zijn je producten/diensten?",
    questionFr: "Quelle est la complexité de vos produits/services ?",
    options: [
      { value: "simple", label: "Simpel (weinig uitleg nodig)", labelFr: "Simple (peu d'explications nécessaires)", points: 40 },
      { value: "moderate", label: "Gemiddeld (soms vragen)", labelFr: "Moyen (parfois des questions)", points: 70 },
      { value: "complex", label: "Complex (veel vragen)", labelFr: "Complexe (beaucoup de questions)", points: 100 },
      { value: "very_complex", label: "Zeer complex (specialist nodig)", labelFr: "Très complexe (spécialiste nécessaire)", points: 80 },
    ],
  },
  {
    id: "current_automation",
    question: "Welke automatisering gebruik je nu?",
    questionFr: "Quelle automatisation utilisez-vous actuellement ?",
    options: [
      { value: "none", label: "Geen automatisering", labelFr: "Aucune automatisation", points: 100 },
      { value: "email", label: "Automatische emails", labelFr: "Emails automatiques", points: 80 },
      { value: "basic_chat", label: "Basis chatwidget", labelFr: "Widget de chat basique", points: 60 },
      { value: "advanced", label: "Geavanceerde tools", labelFr: "Outils avancés", points: 40 },
    ],
  },
];

const EcomReadiness = () => {
  const { language, t } = useLanguage();
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const questions = questionsData.map(q => ({
    ...q,
    question: language === 'fr' ? q.questionFr : q.question,
    options: q.options.map(opt => ({
      ...opt,
      label: language === 'fr' ? opt.labelFr : opt.label
    }))
  }));

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const calculateScore = () => {
    let totalPoints = 0;
    let maxPoints = 0;

    questions.forEach((q) => {
      const answer = answers[q.id];
      const selectedOption = q.options.find((opt) => opt.value === answer);
      if (selectedOption) {
        totalPoints += selectedOption.points;
      }
      maxPoints += 100;
    });

    return Math.round((totalPoints / maxPoints) * 100);
  };

  const getRecommendations = (score: number) => {
    const isFr = language === 'fr';

    if (score >= 80) {
      return {
        title: isFr ? "Excellent ! Vous êtes prêt pour l'automatisation IA" : "Uitstekend! Je bent klaar voor AI automatisering",
        missing: isFr ? [
          "Vous n'avez actuellement pas de support 24/7 en temps réel",
          "Les clients internationaux ne reçoivent pas de support dans leur langue",
          "Votre équipe passe beaucoup de temps sur des questions répétitives",
        ] : [
          "Je mist momenteel real-time 24/7 support",
          "Internationale klanten krijgen geen support in hun taal",
          "Je team besteedt veel tijd aan repetitieve vragen",
        ],
        quickWins: isFr ? [
          "60% de tickets de support en moins grâce aux réponses IA",
          "Disponibilité 24/7 sans coûts supplémentaires",
          "Réponses dans plus de 50 langues sans traducteurs",
          "Les clients obtiennent une réponse immédiate, augmente la conversion de 25-35%",
        ] : [
          "Direct 60% minder support tickets door AI antwoorden",
          "24/7 beschikbaarheid zonder extra kosten",
          "Antwoorden in 50+ talen zonder vertalers",
          "Klanten krijgen direct antwoord, verhoogt conversie met 25-35%",
        ],
        roi: "€15.000 - €45.000",
        roiPeriod: isFr ? "par an" : "per jaar",
      };
    } else if (score >= 60) {
      return {
        title: isFr ? "Bien ! Il y a un potentiel significatif d'amélioration" : "Goed! Er is significant potentieel voor verbetering",
        missing: isFr ? [
          "Le temps de réponse du support peut être plus rapide",
          "De nombreuses questions répétitives prennent du temps",
          "Vous manquez du chiffre d'affaires en dehors des heures de bureau",
        ] : [
          "Support reactietijd kan sneller",
          "Veel repetitieve vragen nemen tijd in beslag",
          "Buiten kantooruren loop je omzet mis",
        ],
        quickWins: isFr ? [
          "Temps de réponse 50% plus rapide aux questions clients",
          "Réponse automatique aux 20 questions principales",
          "L'équipe de support peut se concentrer sur les cas complexes",
          "Augmentation de la conversion de 15-25% grâce à un meilleur service client",
        ] : [
          "50% snellere responstijd op klantvragen",
          "Automatisch beantwoorden van top 20 vragen",
          "Support team kan focussen op complexe cases",
          "Conversie stijging van 15-25% door betere klantenservice",
        ],
        roi: "€8.000 - €25.000",
        roiPeriod: isFr ? "par an" : "per jaar",
      };
    } else if (score >= 40) {
      return {
        title: isFr ? "Potentiel présent, mais optimisation d'abord" : "Potentieel aanwezig, maar eerst optimaliseren",
        missing: isFr ? [
          "La FAQ peut être mieux structurée",
          "La communication client peut être rationalisée",
          "Le processus de support n'a pas encore d'automatisation",
        ] : [
          "FAQ kan beter gestructureerd worden",
          "Klantcommunicatie kan gestroomlijnder",
          "Support proces heeft nog geen automatisering",
        ],
        quickWins: isFr ? [
          "Commencez par automatiser les questions les plus fréquentes",
          "Prolongez vos heures de support sans personnel supplémentaire",
          "Collectez des données sur le comportement et les questions des clients",
          "Première étape vers une amélioration de la conversion de 10-20%",
        ] : [
          "Begin met automatiseren van meest gestelde vragen",
          "Verleng je support uren zonder extra personeel",
          "Verzamel data over klantgedrag en vragen",
          "Eerste stap naar 10-20% conversie verbetering",
        ],
        roi: "€4.000 - €12.000",
        roiPeriod: isFr ? "par an" : "per jaar",
      };
    } else {
      return {
        title: isFr ? "Commencez petit et construisez étape par étape" : "Begin klein en bouw stap voor stap op",
        missing: isFr ? [
          "Pas encore de FAQ structurée ou de base de connaissances",
          "Le volume de support est encore relativement faible",
          "L'automatisation devient de plus en plus importante à mesure que vous grandissez",
        ] : [
          "Nog geen gestructureerde FAQ of kennisbank",
          "Support volume is nog relatief laag",
          "Automatisering wordt steeds belangrijker naarmate je groeit",
        ],
        quickWins: isFr ? [
          "Commencez par automatiser les questions de base",
          "Construisez une base de connaissances pour des réponses cohérentes",
          "Préparez-vous à la croissance avec un support évolutif",
          "Investissez maintenant, économisez 40% sur les coûts de support plus tard",
        ] : [
          "Start met basis vragen automatiseren",
          "Bouw een kennisbank op voor consistente antwoorden",
          "Bereid je voor op groei met schaalbare support",
          "Investeer nu, bespaar later 40% op support kosten",
        ],
        roi: "€2.000 - €8.000",
        roiPeriod: isFr ? "par an" : "per jaar",
      };
    }
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length === questions.length) {
      setShowResults(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const score = calculateScore();
  const recommendations = getRecommendations(score);
  const allQuestionsAnswered = Object.keys(answers).length === questions.length;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={language === 'fr'
          ? "Quiz de Préparation E-commerce - Glimps AI | Testez votre Potentiel Chatbot"
          : "E-commerce Readiness Quiz - Glimps AI | Test je Chatbot Potentieel"}
        description={language === 'fr'
          ? "Découvrez en 2 minutes si votre boutique en ligne est prête pour l'automatisation par chatbot IA. Obtenez directement des informations sur votre potentiel ROI et des recommandations personnalisées pour plus de conversion."
          : "Ontdek in 2 minuten of jouw webshop klaar is voor AI-chatbot automatisering. Krijg direct inzicht in je ROI potentieel en personaliseerde aanbevelingen voor meer conversie."}
        path={language === 'fr' ? "/fr/ecom-readiness" : "/ecom-readiness"}
        keywords={language === 'fr'
          ? "préparation e-commerce, quiz chatbot, évaluation préparation IA, automatisation boutique en ligne, test conversion, calculateur ROI"
          : "e-commerce readiness, chatbot quiz, AI readiness assessment, webshop automatisering, conversie test, ROI calculator"}
      />
      <StructuredData
        type="webpage"
        data={{
          name: language === 'fr' ? "Quiz de Préparation E-commerce - Glimps AI" : "E-commerce Readiness Quiz - Glimps AI",
          description: language === 'fr'
            ? "Testez si votre boutique en ligne est prête pour l'automatisation par chatbot IA et découvrez votre potentiel ROI"
            : "Test of jouw webshop klaar is voor AI-chatbot automatisering en ontdek je ROI potentieel",
          url: language === 'fr' ? "https://www.glimps.be/fr/ecom-readiness" : "https://www.glimps.be/ecom-readiness"
        }}
      />
      <Navigation />

      <div className="container mx-auto px-6 py-16">
        {!showResults ? (
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <h1 className="mb-4 text-4xl font-bold">{t('ecomReadiness.title')}</h1>
              <p className="text-lg text-muted-foreground">
                {t('ecomReadiness.subtitle')}
              </p>
            </div>

            <div className="space-y-8">
              {questions.map((q, index) => (
                <div key={q.id} className="rounded-lg border bg-card p-6">
                  <h3 className="mb-4 text-lg font-semibold">
                    {index + 1}. {q.question}
                  </h3>
                  <RadioGroup
                    value={answers[q.id]}
                    onValueChange={(value) => handleAnswerChange(q.id, value)}
                  >
                    <div className="space-y-3">
                      {q.options.map((option) => (
                        <div key={option.value} className="flex items-center space-x-3">
                          <RadioGroupItem value={option.value} id={`${q.id}-${option.value}`} />
                          <Label
                            htmlFor={`${q.id}-${option.value}`}
                            className="flex-1 cursor-pointer text-base"
                          >
                            {option.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button
                size="lg"
                className="rounded-full px-12"
                onClick={handleSubmit}
                disabled={!allQuestionsAnswered}
              >
                {t('ecomReadiness.submitButton')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              {!allQuestionsAnswered && (
                <p className="mt-4 text-sm text-muted-foreground">
                  {t('ecomReadiness.submitNote')}
                </p>
              )}
            </div>
          </div>
        ) : (
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <div className="mb-6 inline-flex items-center justify-center rounded-full bg-primary/10 p-4">
                <CheckCircle2 className="h-12 w-12 text-primary" />
              </div>
              <h1 className="mb-4 text-5xl font-bold">{t('ecomReadiness.resultsTitle')}</h1>
              <div className="mb-4 text-7xl font-bold text-primary">{score}/100</div>
              <p className="text-xl text-muted-foreground">{recommendations.title}</p>
            </div>

            <div className="space-y-6">
              {/* What You're Missing */}
              <div className="rounded-lg border bg-card p-8">
                <div className="mb-4 flex items-center gap-3">
                  <AlertCircle className="h-6 w-6 text-orange-500" />
                  <h2 className="text-2xl font-bold">{t('ecomReadiness.whatYouMiss')}</h2>
                </div>
                <ul className="space-y-3">
                  {recommendations.missing.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-orange-500" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Wins */}
              <div className="rounded-lg border bg-card p-8">
                <div className="mb-4 flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500" />
                  <h2 className="text-2xl font-bold">{t('ecomReadiness.quickWins')}</h2>
                </div>
                <ul className="space-y-3">
                  {recommendations.quickWins.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ROI Estimation */}
              <div className="rounded-lg bg-gradient-to-br from-primary to-primary/80 p-8 text-white">
                <div className="mb-4 flex items-center gap-3">
                  <TrendingUp className="h-6 w-6" />
                  <h2 className="text-2xl font-bold">{t('ecomReadiness.estimatedRoi')}</h2>
                </div>
                <div className="mb-2 text-5xl font-bold">{recommendations.roi}</div>
                <p className="mb-6 text-xl opacity-90">{recommendations.roiPeriod}</p>
                <p className="text-lg opacity-90">
                  {t('ecomReadiness.roiNote')}
                </p>
              </div>

              {/* CTA */}
              <div className="rounded-lg border bg-card p-8 text-center">
                <h2 className="mb-4 text-2xl font-bold">{t('ecomReadiness.nextStep.title')}</h2>
                <p className="mb-6 text-lg text-muted-foreground">
                  {t('ecomReadiness.nextStep.description')}
                </p>
                <a href={language === 'fr' ? '/fr/demo' : '/demo'}>
                  <Button size="lg" className="rounded-full px-12">
                    {t('ecomReadiness.nextStep.button')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>

              <div className="text-center">
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowResults(false);
                    setAnswers({});
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  {t('ecomReadiness.retakeQuiz')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default EcomReadiness;
