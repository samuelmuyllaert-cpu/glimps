import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle2, AlertCircle, TrendingUp, ArrowRight } from "lucide-react";

interface Question {
  id: string;
  question: string;
  options: { value: string; label: string; points: number }[];
}

const questions: Question[] = [
  {
    id: "support_volume",
    question: "Hoeveel support vragen krijg je per dag?",
    options: [
      { value: "0-10", label: "0-10 vragen", points: 20 },
      { value: "10-50", label: "10-50 vragen", points: 50 },
      { value: "50-100", label: "50-100 vragen", points: 80 },
      { value: "100+", label: "100+ vragen", points: 100 },
    ],
  },
  {
    id: "response_time",
    question: "Hoe snel reageer je gemiddeld op klantvragen?",
    options: [
      { value: "instant", label: "Direct (< 5 min)", points: 100 },
      { value: "fast", label: "Snel (< 1 uur)", points: 80 },
      { value: "same_day", label: "Zelfde dag", points: 40 },
      { value: "next_day", label: "Volgende dag of later", points: 20 },
    ],
  },
  {
    id: "repetitive_questions",
    question: "Hoeveel procent van je vragen is repetitief?",
    options: [
      { value: "0-25", label: "0-25% (meeste vragen zijn uniek)", points: 20 },
      { value: "25-50", label: "25-50%", points: 50 },
      { value: "50-75", label: "50-75%", points: 80 },
      { value: "75-100", label: "75-100% (meeste vragen lijken op elkaar)", points: 100 },
    ],
  },
  {
    id: "faq_exists",
    question: "Heb je een FAQ sectie op je website?",
    options: [
      { value: "no", label: "Nee, geen FAQ", points: 100 },
      { value: "basic", label: "Ja, basis FAQ", points: 60 },
      { value: "extensive", label: "Ja, uitgebreide FAQ", points: 80 },
      { value: "interactive", label: "Ja, met zoekfunctie", points: 40 },
    ],
  },
  {
    id: "international",
    question: "Verkoop je internationaal?",
    options: [
      { value: "no", label: "Nee, alleen België", points: 20 },
      { value: "benelux", label: "Ja, Benelux", points: 60 },
      { value: "europe", label: "Ja, Europa", points: 80 },
      { value: "worldwide", label: "Ja, wereldwijd", points: 100 },
    ],
  },
  {
    id: "support_hours",
    question: "Wanneer is je klantenservice beschikbaar?",
    options: [
      { value: "24/7", label: "24/7", points: 20 },
      { value: "extended", label: "Kantooruren + avond", points: 60 },
      { value: "business", label: "Alleen kantooruren", points: 100 },
      { value: "limited", label: "Beperkte uren", points: 100 },
    ],
  },
  {
    id: "team_size",
    question: "Hoeveel mensen werken er in je support team?",
    options: [
      { value: "0-1", label: "0-1 persoon", points: 60 },
      { value: "2-5", label: "2-5 mensen", points: 80 },
      { value: "6-10", label: "6-10 mensen", points: 100 },
      { value: "10+", label: "10+ mensen", points: 100 },
    ],
  },
  {
    id: "conversion_issue",
    question: "Hoeveel bezoekers verlaten je site zonder aankoop?",
    options: [
      { value: "low", label: "< 50% (hoge conversie)", points: 40 },
      { value: "medium", label: "50-75%", points: 60 },
      { value: "high", label: "75-90%", points: 80 },
      { value: "very_high", label: "> 90%", points: 100 },
    ],
  },
  {
    id: "product_complexity",
    question: "Hoe complex zijn je producten/diensten?",
    options: [
      { value: "simple", label: "Simpel (weinig uitleg nodig)", points: 40 },
      { value: "moderate", label: "Gemiddeld (soms vragen)", points: 70 },
      { value: "complex", label: "Complex (veel vragen)", points: 100 },
      { value: "very_complex", label: "Zeer complex (specialist nodig)", points: 80 },
    ],
  },
  {
    id: "current_automation",
    question: "Welke automatisering gebruik je nu?",
    options: [
      { value: "none", label: "Geen automatisering", points: 100 },
      { value: "email", label: "Automatische emails", points: 80 },
      { value: "basic_chat", label: "Basis chatwidget", points: 60 },
      { value: "advanced", label: "Geavanceerde tools", points: 40 },
    ],
  },
];

const EcomReadiness = () => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

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
    if (score >= 80) {
      return {
        title: "Uitstekend! Je bent klaar voor AI automatisering",
        missing: [
          "Je mist momenteel real-time 24/7 support",
          "Internationale klanten krijgen geen support in hun taal",
          "Je team besteedt veel tijd aan repetitieve vragen",
        ],
        quickWins: [
          "Direct 60% minder support tickets door AI antwoorden",
          "24/7 beschikbaarheid zonder extra kosten",
          "Antwoorden in 50+ talen zonder vertalers",
          "Klanten krijgen direct antwoord, verhoogt conversie met 25-35%",
        ],
        roi: "€15.000 - €45.000",
        roiPeriod: "per jaar",
      };
    } else if (score >= 60) {
      return {
        title: "Goed! Er is significant potentieel voor verbetering",
        missing: [
          "Support reactietijd kan sneller",
          "Veel repetitieve vragen nemen tijd in beslag",
          "Buiten kantooruren loop je omzet mis",
        ],
        quickWins: [
          "50% snellere responstijd op klantvragen",
          "Automatisch beantwoorden van top 20 vragen",
          "Support team kan focussen op complexe cases",
          "Conversie stijging van 15-25% door betere klantenservice",
        ],
        roi: "€8.000 - €25.000",
        roiPeriod: "per jaar",
      };
    } else if (score >= 40) {
      return {
        title: "Potentieel aanwezig, maar eerst optimaliseren",
        missing: [
          "FAQ kan beter gestructureerd worden",
          "Klantcommunicatie kan gestroomlijnder",
          "Support proces heeft nog geen automatisering",
        ],
        quickWins: [
          "Begin met automatiseren van meest gestelde vragen",
          "Verleng je support uren zonder extra personeel",
          "Verzamel data over klantgedrag en vragen",
          "Eerste stap naar 10-20% conversie verbetering",
        ],
        roi: "€4.000 - €12.000",
        roiPeriod: "per jaar",
      };
    } else {
      return {
        title: "Begin klein en bouw stap voor stap op",
        missing: [
          "Nog geen gestructureerde FAQ of kennisbank",
          "Support volume is nog relatief laag",
          "Automatisering wordt steeds belangrijker naarmate je groeit",
        ],
        quickWins: [
          "Start met basis vragen automatiseren",
          "Bouw een kennisbank op voor consistente antwoorden",
          "Bereid je voor op groei met schaalbare support",
          "Investeer nu, bespaar later 40% op support kosten",
        ],
        roi: "€2.000 - €8.000",
        roiPeriod: "per jaar",
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
        title="E-commerce Readiness Quiz - Glimps AI | Test je Chatbot Potentieel"
        description="Ontdek in 2 minuten of jouw webshop klaar is voor AI-chatbot automatisering. Krijg direct inzicht in je ROI potentieel en personaliseerde aanbevelingen voor meer conversie."
        path="/ecom-readiness"
        keywords="e-commerce readiness, chatbot quiz, AI readiness assessment, webshop automatisering, conversie test, ROI calculator"
      />
      <StructuredData
        type="webpage"
        data={{
          name: "E-commerce Readiness Quiz - Glimps AI",
          description: "Test of jouw webshop klaar is voor AI-chatbot automatisering en ontdek je ROI potentieel",
          url: "https://www.glimps.be/ecom-readiness"
        }}
      />
      <Navigation />

      <div className="container mx-auto px-6 py-16">
        {!showResults ? (
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <h1 className="mb-4 text-4xl font-bold">Chatbot Readiness Quiz</h1>
              <p className="text-lg text-muted-foreground">
                Ontdek in 2 minuten of een AI chatbot perfect is voor jouw webshop
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
                Bekijk Mijn Readiness Score
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              {!allQuestionsAnswered && (
                <p className="mt-4 text-sm text-muted-foreground">
                  Beantwoord alle vragen om je score te zien
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
              <h1 className="mb-4 text-5xl font-bold">Je Chatbot Readiness Score</h1>
              <div className="mb-4 text-7xl font-bold text-primary">{score}/100</div>
              <p className="text-xl text-muted-foreground">{recommendations.title}</p>
            </div>

            <div className="space-y-6">
              {/* What You're Missing */}
              <div className="rounded-lg border bg-card p-8">
                <div className="mb-4 flex items-center gap-3">
                  <AlertCircle className="h-6 w-6 text-orange-500" />
                  <h2 className="text-2xl font-bold">Wat je nu mist</h2>
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
                  <h2 className="text-2xl font-bold">Quick Wins met AI Chatbot</h2>
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
                  <h2 className="text-2xl font-bold">Geschatte ROI voor jouw situatie</h2>
                </div>
                <div className="mb-2 text-5xl font-bold">{recommendations.roi}</div>
                <p className="mb-6 text-xl opacity-90">{recommendations.roiPeriod}</p>
                <p className="text-lg opacity-90">
                  Gebaseerd op je antwoorden: kostenbesparing + omzetstijging door betere conversie
                </p>
              </div>

              {/* CTA */}
              <div className="rounded-lg border bg-card p-8 text-center">
                <h2 className="mb-4 text-2xl font-bold">Volgende stap: Persoonlijke Demo</h2>
                <p className="mb-6 text-lg text-muted-foreground">
                  Ontdek precies hoe een AI chatbot werkt voor jouw webshop. We laten je live zien
                  wat mogelijk is en berekenen samen je exacte ROI.
                </p>
                <a href="/demo">
                  <Button size="lg" className="rounded-full px-12">
                    Plan Gratis Demo
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
                  Quiz opnieuw doen
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
