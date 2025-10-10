import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const PersonalisatieConversies = () => {
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
              Product
            </span>
          </div>

          <h1 className="font-inter text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Personalisatie: De sleutel tot hogere conversies
          </h1>

          <div className="flex items-center gap-6 text-muted-foreground mb-12">
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              28 dec 2024
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              4 min leestijd
            </span>
            <Button variant="ghost" size="sm" className="ml-auto">
              <Share2 className="h-4 w-4 mr-2" />
              Delen
            </Button>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden mb-12 bg-muted">
            <img 
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop" 
              alt="Personalisatie e-commerce"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Gepersonaliseerde productaanbevelingen zijn geen nice-to-have meer, het is een must. Bedrijven die personalisatie goed doen zien 3-5x hogere conversies. Maar hoe implementeer je dit effectief?
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Waarom personalisatie werkt</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Moderne consumenten verwachten een op maat gemaakte ervaring. 80% van de klanten geeft aan meer geneigd te zijn om te kopen bij bedrijven die personaliseren. De reden? Ze voelen zich begrepen en gewaardeerd.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Data is de basis</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Effectieve personalisatie begint met data. Verzamel informatie over:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
              <li>Browse-gedrag en gekeken producten</li>
              <li>Eerdere aankopen en retourpatronen</li>
              <li>Klik-gedrag in emails en notificaties</li>
              <li>Zoekgeschiedenis en filters</li>
              <li>Tijd besteed per productcategorie</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">AI maakt het schaalbaar</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Zonder AI is personalisatie onbetaalbaar. Je zou een heel team nodig hebben om elke klant manueel te bedienen. Met AI kan je chatbot:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
              <li>Real-time patronen herkennen in klantgedrag</li>
              <li>Voorspellen wat klanten waarschijnlijk willen kopen</li>
              <li>Het perfecte moment bepalen voor aanbevelingen</li>
              <li>Toon en stijl aanpassen aan de klant</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">Praktische implementatie</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Begin klein en schaal op. Start met deze drie quick wins:
            </p>
            
            <h3 className="text-2xl font-bold mt-8 mb-4">1. Verwante producten bij winkelwagen</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Als een klant een product aan de winkelwagen toevoegt, toon dan complementaire items. "Klanten die dit kochten, kochten ook..." werkt simpel maar effectief.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">2. Retargeting van bekeken producten</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Herinner klanten aan producten die ze eerder bekeken met een persoonlijke boodschap: "Je keek naar deze rode sneakers. Nu 15% korting!"
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">3. Gepersonaliseerde homepages</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Toon op de homepage verschillende producten gebaseerd op eerdere interacties. Nieuwe bezoekers zien bestsellers, terugkerende klanten zien items uit hun favoriete categorieën.
            </p>

            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mt-12">
              <h3 className="text-xl font-bold mb-3">⚡ Pro tip</h3>
              <p className="text-muted-foreground">
                Zorg dat je personalisatie altijd relevant blijft. Te agressieve of niet-relevante aanbevelingen werken averechts. Test en meet continu wat werkt.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Start met personalisatie</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Glimps AI biedt out-of-the-box personalisatie zonder maandenlang development werk.
            </p>
            <Button size="lg" asChild>
              <a href="/demo">Plan een gratis demo</a>
            </Button>
          </div>
        </div>
      </article>

      <ChatWidget />
      <Footer />
    </div>
  );
};

export default PersonalisatieConversies;
