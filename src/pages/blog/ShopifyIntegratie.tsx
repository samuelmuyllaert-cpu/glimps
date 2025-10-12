import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowLeft, Share2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ShopifyIntegratie = () => {
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
              Tutorial
            </span>
          </div>

          <h1 className="font-inter text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Integratie met Shopify: Complete gids
          </h1>

          <div className="flex items-center gap-6 text-muted-foreground mb-12">
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              15 dec 2024
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              8 min leestijd
            </span>
            <Button variant="ghost" size="sm" className="ml-auto">
              <Share2 className="h-4 w-4 mr-2" />
              Delen
            </Button>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden mb-12 bg-muted">
            <img 
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=600&fit=crop" 
              alt="Shopify integratie"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              In minder dan 10 minuten kan je Glimps AI volledig geïntegreerd hebben met je Shopify webshop. Deze stap-voor-stap gids laat je zien hoe.
            </p>

            <Card className="p-6 bg-blue-50 dark:bg-blue-950/20 my-8">
              <h3 className="text-xl font-bold mb-3">⏱️ Wat je nodig hebt</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Een actieve Shopify webshop</li>
                <li>Admin toegang tot je Shopify store</li>
                <li>Een Glimps AI account (start gratis trial)</li>
                <li>10 minuten van je tijd</li>
              </ul>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-6">Stap 1: Maak je Glimps AI account aan</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Ga naar glimps.be en klik op "Gratis aanmelden". Vul je bedrijfsgegevens in en je Shopify store URL. We detecteren automatisch je productcatalogus.
            </p>

            <Card className="p-6 my-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-2">Pro tip:</h4>
                  <p className="text-muted-foreground text-sm">
                    Gebruik je zakelijke email voor snellere goedkeuring. Gmail/Hotmail accounts worden manueel gecontroleerd.
                  </p>
                </div>
              </div>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-6">Stap 2: Installeer de Shopify app</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Log in op je Glimps dashboard en klik op "Integraties" → "Shopify". Klik op "Installeren" en je wordt doorgestuurd naar de Shopify App Store.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Klik daar op "Add app" en autoriseer de benodigde permissies:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
              <li>Product data lezen (voor productaanbevelingen)</li>
              <li>Order data lezen (voor order tracking)</li>
              <li>Customer data lezen (voor gepersonaliseerde service)</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">Stap 3: Configureer je chatbot</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Na installatie word je teruggestuurd naar je Glimps dashboard. Hier kan je:
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Merkidentiteit instellen</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Upload je logo, kies je brand kleuren en bepaal de tone of voice. Wil je formeel of casual klinken? Gebruik emoji's of niet?
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Welkomstbericht</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Pas het eerste bericht aan dat klanten zien. Bijvoorbeeld: "Hey! 👋 Ik ben Lisa, je persoonlijke shopping assistent. Kan ik je helpen iets te vinden?"
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">FAQ training</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Upload je meest gestelde vragen of laat onze AI ze automatisch detecteren uit je helpdesk historiek.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Stap 4: Embed code plaatsen</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Kopieer de embed code uit je Glimps dashboard. In Shopify ga je naar:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-muted-foreground mb-6">
              <li>Online Store → Themes</li>
              <li>Klik op "Actions" → "Edit code"</li>
              <li>Zoek naar theme.liquid</li>
              <li>Plak de code vlak voor de sluitende <code>&lt;/body&gt;</code> tag</li>
              <li>Klik op "Save"</li>
            </ol>

            <Card className="p-6 bg-yellow-50 dark:bg-yellow-950/20 my-6">
              <h4 className="font-bold mb-2">⚠️ Let op:</h4>
              <p className="text-muted-foreground text-sm">
                Maak altijd een backup van je theme voordat je code wijzigingen maakt. Ga naar "Actions" → "Duplicate" om een kopie te maken.
              </p>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-6">Stap 5: Test & Go Live</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Voor je live gaat, test deze scenario's:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
              <li>Vraag naar een specifiek product</li>
              <li>Test het winkelmandje proces</li>
              <li>Vraag naar verzendkosten en levertijd</li>
              <li>Test op mobiel en desktop</li>
              <li>Controleer of order tracking werkt</li>
            </ul>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Als alles werkt, zet je de chatbot op "Live" in je Glimps dashboard. Gefeliciteerd! Je chatbot is nu actief.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Bonus: Geavanceerde features</h2>
            
            <h3 className="text-2xl font-bold mt-8 mb-4">Abandoned cart recovery</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Activeer abandoned cart triggers in je Glimps dashboard. De chatbot stuurt automatisch een reminder bericht naar klanten die items in hun winkelwagen hebben laten staan.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Product upsells</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Configureer welke producten vaak samen gekocht worden. De chatbot zal deze automatisch suggereren tijdens het shopping proces.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Analytics dashboard</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Monitor je chatbot performance in het analytics dashboard. Zie hoeveel gesprekken je hebt, wat de meest gestelde vragen zijn, en hoeveel conversie de chatbot genereert.
            </p>

            <div className="bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 p-6 rounded-r-lg mt-12">
              <h3 className="text-xl font-bold mb-3">🎉 Klaar!</h3>
              <p className="text-muted-foreground">
                Je Shopify integratie is compleet. De chatbot leert automatisch bij van elke interactie. Check over een week je analytics om de impact te zien!
              </p>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Hulp nodig bij de integratie?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Ons team helpt je graag met een persoonlijke onboarding en integratie.
            </p>
            <Button size="lg" asChild>
              <a href="/demo">Plan een onboarding call</a>
            </Button>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default ShopifyIntegratie;
