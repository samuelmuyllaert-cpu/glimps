import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { Calendar, Clock, ArrowLeft, Share2, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const CaseStudyFashionHub = () => {
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
              Case Study
            </span>
          </div>

          <h1 className="font-inter text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Case study: Van 20% naar 67% conversie
          </h1>

          <div className="flex items-center gap-6 text-muted-foreground mb-12">
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              5 jan 2025
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              6 min leestijd
            </span>
            <Button variant="ghost" size="sm" className="ml-auto">
              <Share2 className="h-4 w-4 mr-2" />
              Delen
            </Button>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden mb-12 bg-muted">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop" 
              alt="FashionHub case study"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              FashionHub, een middelgrote fashion webshop, worstel met lage conversie rates. Na implementatie van Glimps AI zagen ze hun checkout conversie meer dan verdrievoudigen in slechts 3 maanden. Dit is hun verhaal.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">De uitdaging</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              FashionHub had een mooie website met duizenden unieke bezoekers per maand, maar slechts 20% van de bezoekers die iets in hun winkelwagen plaatsten, maakte de aankoop af. Het team vermoedte dat bezoekers te veel vragen hadden die onbeantwoord bleven.
            </p>

            <Card className="p-8 bg-muted/30 my-8">
              <h3 className="text-xl font-bold mb-4">📊 Situatie voor Glimps AI</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">20%</div>
                  <div className="text-sm text-muted-foreground">Checkout conversie</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">€45</div>
                  <div className="text-sm text-muted-foreground">Gemiddelde orderwaarde</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">€180k</div>
                  <div className="text-sm text-muted-foreground">Maandelijkse omzet</div>
                </div>
              </div>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-6">De aanpak</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Samen met het FashionHub team hebben we een drie-fasen plan uitgevoerd:
            </p>
            
            <h3 className="text-2xl font-bold mt-8 mb-4">Fase 1: Data analyse (Week 1-2)</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We analyseerden alle klantvragen uit hun helpdesk, email en social media van de afgelopen 6 maanden. De top 50 meest gestelde vragen werden geïdentificeerd en gecategoriseerd.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Fase 2: AI training (Week 3-4)</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              De Glimps AI werd getraind op hun productcatalogus, verzendbeleid, retourbeleid en merkidentiteit. Speciale aandacht ging naar maatadvies - de #1 vraag bij fashion webshops.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Fase 3: Implementatie & optimalisatie (Week 5-12)</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              De chatbot werd live gezet met proactieve triggers op strategische momenten: bij het bekijken van productpagina's, bij het toevoegen aan winkelwagen, en bij abandoned cart situaties.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">De resultaten</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Na 3 maanden waren de resultaten spectaculair:
            </p>

            <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 my-8">
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="h-6 w-6 text-green-600" />
                <h3 className="text-xl font-bold">Resultaten na 3 maanden</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">67%</div>
                  <div className="text-sm text-muted-foreground">Checkout conversie</div>
                  <div className="text-sm font-semibold text-green-600 mt-1">+235% ↑</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">€58</div>
                  <div className="text-sm text-muted-foreground">Gemiddelde orderwaarde</div>
                  <div className="text-sm font-semibold text-green-600 mt-1">+29% ↑</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">€467k</div>
                  <div className="text-sm text-muted-foreground">Maandelijkse omzet</div>
                  <div className="text-sm font-semibold text-green-600 mt-1">+159% ↑</div>
                </div>
              </div>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-6">Wat maakte het verschil?</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Volgens het team van FashionHub waren dit de belangrijkste succesfactoren:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
              <li><strong>Instant antwoorden op maatadvies</strong> - voorheen de #1 reden voor abandoned carts</li>
              <li><strong>Proactieve upselling</strong> - relevante style suggesties tijdens het winkelen</li>
              <li><strong>24/7 beschikbaarheid</strong> - klanten konden ook 's avonds en in het weekend hun vragen stellen</li>
              <li><strong>Persoonlijke ervaring</strong> - de AI onthield voorkeuren en eerdere aankopen</li>
            </ul>

            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mt-12">
              <h3 className="text-xl font-bold mb-3">💬 Quote van de klant</h3>
              <p className="text-muted-foreground italic mb-4">
                "Glimps AI heeft onze business getransformeerd. We hadden nooit gedacht dat een chatbot zo'n impact kon hebben op onze conversie én klanttevredenheid. Onze support tickets zijn met 60% gedaald terwijl onze omzet meer dan verdubbeld is."
              </p>
              <p className="text-sm font-semibold">
                — Lisa van den Berg, COO FashionHub
              </p>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Wil jij ook deze resultaten?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Ontdek hoe Glimps AI jouw conversie kan verdrievoudigen in slechts 3 maanden.
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

export default CaseStudyFashionHub;
