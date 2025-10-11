import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Target, TrendingUp, Lightbulb, Zap, Heart } from "lucide-react";
import samuelPhoto from "@/assets/samuel.png";
import tomPhoto from "@/assets/tom.png";
import SEO from "@/components/SEO";

const About = () => {
  return <div className="min-h-screen bg-background">
      <SEO 
        title="Over Ons - Glimps AI | Marketing-gedreven AI Chatbot"
        description="Ontmoet de oprichters van Glimps AI. Twee broers met sterke marketingachtergrond die AI-chatbots zien als dé tool voor meer omzet en betere klantenservice."
        path="/about"
      />
      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24 text-center">
        <div className="mx-auto max-w-4xl space-y-6">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            Leer ons kennen
          </p>
          <h1 className="font-inter text-4xl font-bold leading-tight md:text-6xl">
            Wij boosten je business met onze AI-chatbot.
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Glimps is opgericht door twee broers met een sterke marketingachtergrond die AI-chatbots zien als dé marketingtool voor meer omzet en betere klantenservice.
          </p>
        </div>

        {/* Team Section */}
        <div className="mx-auto mt-24 grid max-w-5xl gap-12 md:grid-cols-2">
          {/* Samuel */}
          <div className="space-y-6">
            <div className="mx-auto h-48 w-48 overflow-hidden rounded-full bg-gradient-to-br from-primary/20 to-primary/5 p-1">
              <img src={samuelPhoto} alt="Samuel Muyllaert" className="h-full w-full rounded-full object-cover" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Samuel Muyllaert</h3>
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                CO-FOUNDER
              </span>
            </div>
            <p className="text-muted-foreground">
              Gepassioneerd door AI-technologieën en workflows om herhaalde taken om te zetten in automatiseringen.
            </p>
            <Button variant="default" className="rounded-full" onClick={() => window.open('https://www.linkedin.com/in/samuel-muyllaert-17311823a/', '_blank')}>
              LinkedIn profiel
            </Button>
          </div>

          {/* Tom */}
          <div className="space-y-6">
            <div className="mx-auto h-48 w-48 overflow-hidden rounded-full bg-gradient-to-br from-primary/20 to-primary/5 p-1">
              <img src={tomPhoto} alt="Tom Muyllaert" className="h-full w-full rounded-full object-cover" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Tom Muyllaert</h3>
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                CO-FOUNDER
              </span>
            </div>
            <p className="text-muted-foreground">
              Digital Business Professional met +15 ervaring in digital sales en marketing.
            </p>
            <Button variant="default" className="rounded-full" onClick={() => window.open('https://www.linkedin.com/in/tmuyllaert/', '_blank')}>
              LinkedIn profiel
            </Button>
          </div>
        </div>

        {/* Developers Network */}
        <div className="mx-auto mt-24 max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 text-center">
            <h3 className="mb-4 text-2xl font-bold">Ons Ontwikkelaarsnetwerk</h3>
            <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
              Achter Glimps staat een sterk netwerk van getalenteerde developers die onze ideeën helpen vertalen naar software en bijdragen aan het succes van ons platform.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                LB
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                MV
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                AD
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                JS
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                KR
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">BS</div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                EP
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                NB
              </div>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Samen vormen we een team dat technologie en marketing perfect combineert.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="container mx-auto px-6 py-24">
        <Card className="mx-auto max-w-4xl p-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Onze Visie</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Tom Muyllaert & Samuel Muyllaert hebben beiden een sterke achtergrond in marketing en zien een AI-chatbot door een <span className="font-medium text-primary">marketingbril</span>.
              </p>
              <p>
                Onze visie kan je altijd terugleiden naar de uitkomst: <span className="font-medium text-primary">meer omzet</span>. Het is eerst en vooral de bedoeling om de basis benodigdheden van een chatbot te kunnen voorzien omtrent klantenservice: bestellingen opvragen, FAQ beantwoorden, service bieden doorheen de gehele klantreis.
              </p>
              <p>
                Maar met beiden een achtergrond in marketing zien we een AI-chatbot meer als een <span className="font-medium text-primary">marketingtool met als doel meer omzet</span>, maar in eerste instantie customer service automatiseren.
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* Approach Section */}
      <section className="container mx-auto px-6 py-24">
        <h2 className="mb-16 text-center text-4xl font-bold">Onze Aanpak</h2>
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          <Card className="p-8">
            <div className="space-y-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Marketing-gedreven</h3>
              <p className="text-muted-foreground">
                Iedereen kan een bot maken door pagina's op te laden en een bot hierop te laten antwoorden, maar onze visie is om door middel van bepaalde marketingstrategieën ervoor te zorgen dat de bot een <span className="font-medium text-primary">marketingtool</span> is.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span className="text-muted-foreground">Productvoorstelling & showcasing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span className="text-muted-foreground">Conversational commerce</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span className="text-muted-foreground">Upsell & cross-selling strategieën</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span className="text-muted-foreground">Marketing insights & data-analyse</span>
                </li>
              </ul>
            </div>
          </Card>

          <Card className="p-8">
            <div className="space-y-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Slimme Samenwerking</h3>
              <p className="text-muted-foreground">
                We doen beroep op IT-leveranciers zodat wij ons kunnen focussen op de <span className="font-medium text-primary">uitwerking zelf</span>. Dit stelt ons in staat om echt te excelleren in wat ons onderscheidt: marketingstrategieën implementeren in AI-chatbots.
              </p>
              <p className="text-muted-foreground">
                We maken gebruik van geavanceerde insights voor marketing, zoals het analyseren van chathistoriek om te ontdekken welke producten vaak samen worden gevraagd, en dit automatisch toe te voegen aan de suggesties.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Core Principles */}
      <section className="container mx-auto px-6 py-24">
        <h2 className="mb-16 text-center text-4xl font-bold">Onze Kernprincipes</h2>
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-primary bg-background">
              <Zap className="h-10 w-10 text-primary" />
            </div>
            <h3 className="mb-4 text-2xl font-bold">Automatisering</h3>
            <p className="text-muted-foreground">
              Customer service automatiseren zodat bedrijven zich kunnen focussen op groei en strategie.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-primary bg-background">
              <TrendingUp className="h-10 w-10 text-primary" />
            </div>
            <h3 className="mb-4 text-2xl font-bold">Meer Omzet</h3>
            <p className="text-muted-foreground">
              Door slimme marketing automations en strategieën genereren we meetbare groei voor e-commerce bedrijven.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-primary bg-background">
              <Heart className="h-10 w-10 text-primary" />
            </div>
            <h3 className="mb-4 text-2xl font-bold">Klantloyaliteit</h3>
            <p className="text-muted-foreground">
              Betere en snellere service leidt tot meer aankopen en loyaliteit, wat resulteert in meer omzet.
            </p>
          </div>
        </div>
      </section>

      {/* Glimps Formula */}
      <section className="container mx-auto px-6 py-24">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-primary/80 p-12 md:p-16">
          <h2 className="mb-16 text-center text-4xl font-bold text-white">De Glimps Formule</h2>
          <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
            <Card className="flex-1 space-y-2 bg-white/10 p-8 text-center text-white backdrop-blur-sm">
              <h3 className="text-2xl font-bold">Betere Service</h3>
              <p className="text-sm text-white/80">24/7 beschikbaar</p>
            </Card>
            <div className="text-4xl font-bold text-white">+</div>
            <Card className="flex-1 space-y-2 bg-white/10 p-8 text-center text-white backdrop-blur-sm">
              <h3 className="text-2xl font-bold">Snellere Service</h3>
              <p className="text-sm text-white/80">Directe antwoorden</p>
            </Card>
            <div className="text-4xl font-bold text-white">=</div>
            <Card className="flex-1 space-y-2 bg-white/10 p-8 text-center text-white backdrop-blur-sm">
              <h3 className="text-2xl font-bold">Meer Aankopen</h3>
              <p className="text-sm text-white/80">Hogere conversie</p>
            </Card>
          </div>
          <div className="mt-12 flex justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-white">=</div>
              <Card className="mt-8 bg-white px-12 py-6">
                <h3 className="text-3xl font-bold text-primary">Meer Omzet</h3>
                <p className="text-sm text-primary/70">Meetbare groei</p>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <ChatWidget />
      <Footer />
    </div>;
};
export default About;