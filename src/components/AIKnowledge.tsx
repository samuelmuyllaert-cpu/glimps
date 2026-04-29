import { CircleCheck as CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const AIKnowledge = () => {
  const { language } = useLanguage();

  return (
    <section className="relative w-full overflow-hidden bg-background py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="mb-6 font-inter text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-foreground">
              {language === 'en' ? (
                <>AI that <span className="italic">knows</span> what you sell</>
              ) : language === 'fr' ? (
                <>IA qui <span className="italic">sait</span> ce que vous vendez</>
              ) : (
                <>AI die <span className="italic">wéét</span> wat je verkoopt</>
              )}
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              {language === 'en'
                ? 'Glimps integrates with your product catalog, inventory and order data. It answers questions about size, color, delivery time and return policy — without your team having to intervene.'
                : language === 'fr'
                ? 'Glimps s\'intègre à votre catalogue de produits, stock et données de commandes. Il répond aux questions sur les tailles, couleurs, délais de livraison et politique de retour — sans que votre équipe ait besoin d\'intervenir.'
                : 'Glimps integreert met jouw productcatalogus, voorraad en orderdata. Zo beantwoordt hij vragen over maat, kleur, levertijd en retourbeleid — zonder dat jouw team erbij komt kijken.'
              }
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {language === 'en' ? 'Real-time product information' : language === 'fr' ? 'Informations produits en temps réel' : 'Realtime productinformatie'}
                  </h3>
                  <p className="text-muted-foreground">
                    {language === 'en' ? 'Direct insight into stock and availability' : language === 'fr' ? 'Aperçu direct du stock et de la disponibilité' : 'Direct inzicht in voorraad en beschikbaarheid'}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {language === 'en' ? 'Smart recommendations' : language === 'fr' ? 'Recommandations intelligentes' : 'Slimme aanbevelingen'}
                  </h3>
                  <p className="text-muted-foreground">
                    {language === 'en' ? 'Upsell and cross-sell at the right moment' : language === 'fr' ? 'Upsell et cross-sell au bon moment' : 'Upsell en cross-sell op het juiste moment'}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {language === 'en' ? 'Your tone of voice' : language === 'fr' ? 'Votre ton de voix' : 'Jouw tone of voice'}
                  </h3>
                  <p className="text-muted-foreground">
                    {language === 'en' ? 'Sounds like your brand, not like a robot' : language === 'fr' ? 'Sonne comme votre marque, pas comme un robot' : 'Klinkt als jouw merk, niet als een robot'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div>
            <Card className="p-8 bg-card border-border">
              <div className="mb-8">
                <p className="text-sm text-muted-foreground mb-2">
                  {language === 'en' ? 'Customer interactions' : language === 'fr' ? 'Interactions clients' : 'Klantinteracties'}
                </p>
                <p className="text-5xl font-bold text-primary">1.245</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="h-2 flex-1 bg-muted rounded-full overflow-hidden mr-4">
                      <div className="h-full w-[70%] bg-[hsl(0,85%,60%)] rounded-full" />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {language === 'en' ? 'Product questions' : language === 'fr' ? 'Questions produits' : 'Productvragen'}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="h-2 flex-1 bg-muted rounded-full overflow-hidden mr-4">
                      <div className="h-full w-[50%] bg-[hsl(45,95%,60%)] rounded-full" />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {language === 'en' ? 'Order tracking' : language === 'fr' ? 'Suivi commandes' : 'Order tracking'}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="h-2 flex-1 bg-muted rounded-full overflow-hidden mr-4">
                      <div className="h-full w-[40%] bg-[hsl(220,85%,60%)] rounded-full" />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {language === 'en' ? 'Return questions' : language === 'fr' ? 'Questions retour' : 'Retourvragen'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-border">
                <span className="text-muted-foreground">
                  {language === 'en' ? 'Automatically resolved' : language === 'fr' ? 'Résolu automatiquement' : 'Automatisch opgelost'}
                </span>
                <span className="text-2xl font-bold text-foreground">85%</span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIKnowledge;
