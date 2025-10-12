import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const ToekomstAI2025 = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <article className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <a href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Terug naar blog
          </a>

          <div className="mb-6">
            <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full">
              Trends
            </span>
          </div>

          <h1 className="font-inter text-4xl md:text-6xl font-bold mb-6 leading-tight">
            De toekomst van klantenservice: AI in 2025
          </h1>

          <div className="flex items-center gap-6 text-muted-foreground mb-12">
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              8 jan 2025
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              7 min leestijd
            </span>
            <Button variant="ghost" size="sm" className="ml-auto">
              <Share2 className="h-4 w-4 mr-2" />
              Delen
            </Button>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden mb-12 bg-muted">
            <img 
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop" 
              alt="AI klantenservice toekomst"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              2025 markeert een keerpunt in klantenservice. Bedrijven die nu investeren in AI chatbots nemen een beslissende voorsprong op de concurrentie. Hier is waarom.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">De AI revolutie is hier</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Kunstmatige intelligentie heeft een explosieve groei doorgemaakt. Waar chatbots vroeger beperkt waren tot simpele FAQ's, kunnen ze nu complexe vragen beantwoorden, emoties herkennen en context begrijpen zoals nooit tevoren.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Klanten verwachten instant antwoorden</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              De moderne consument heeft geen geduld meer. 82% van de klanten verwacht binnen 10 minuten antwoord. Bedrijven zonder AI-ondersteuning kunnen dit simpelweg niet leveren - vooral niet buiten kantooruren.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Personalisatie op schaal</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              AI maakt het mogelijk om elke klant een gepersonaliseerde ervaring te bieden, ongeacht het aantal klanten. Van productaanbevelingen tot gepersonaliseerde kortingen - alles kan geautomatiseerd worden zonder aan kwaliteit in te boeten.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Cost reduction zonder kwaliteitsverlies</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Bedrijven die AI chatbots implementeren zien hun klantenservice kosten met 30-50% dalen, terwijl de klanttevredenheid stijgt. De AI handelt routine vragen af, waardoor menselijke agents zich kunnen focussen op complexe cases.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Wat komt er in 2025?</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We voorspellen een sterke groei in:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
              <li>Voice-first interfaces - spraakgestuurde interacties worden de norm</li>
              <li>Predictive support - AI die problemen voorspelt voor klanten ze ervaren</li>
              <li>Emotional intelligence - chatbots die emoties kunnen herkennen en hierop reageren</li>
              <li>Seamless omnichannel - één consistent klantbeeld over alle kanalen</li>
            </ul>

            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mt-12">
              <h3 className="text-xl font-bold mb-3">🚀 Conclusie</h3>
              <p className="text-muted-foreground">
                Bedrijven die nu al investeren in AI klantenservice bouwen een competitief voordeel op dat moeilijk in te halen is. De vraag is niet meer óf je AI inzet, maar hoe snel je start.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Blijf niet achter</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Start vandaag nog met AI klantenservice en neem een voorsprong op je concurrentie.
            </p>
            <Button size="lg" asChild>
              <a href="/demo">Plan een gratis demo</a>
            </Button>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default ToekomstAI2025;
