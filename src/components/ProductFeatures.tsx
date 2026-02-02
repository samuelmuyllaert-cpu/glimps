import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { BarChart3, Zap, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ProductFeatures = () => {
  const { language } = useLanguage();

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wider text-primary mb-4">
            {language === 'fr' ? 'FONCTIONNALITÉS PRODUIT' : 'PRODUCT FEATURES'}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {language === 'fr' ? 'Libérez la puissance de l\'automatisation' : 'Ontketen de kracht van automatisering'}
          </h2>
          <p className="text-xl text-muted-foreground">
            {language === 'fr' ? (
              <>Boostez votre excellence <span className="text-primary">e-commerce</span></>
            ) : (
              <>Boost je <span className="text-primary">e-commerce</span> excellentie</>
            )}
          </p>
        </div>

        <Tabs defaultValue="analytics" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              {language === 'fr' ? 'Analytics IA' : 'AI Analytics'}
            </TabsTrigger>
            <TabsTrigger value="automation" className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              {language === 'fr' ? 'Automatisation' : 'Automatisering'}
            </TabsTrigger>
            <TabsTrigger value="personalization" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              {language === 'fr' ? 'Personnalisation' : 'Personalisatie'}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="analytics" className="mt-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold mb-4">
                    {language === 'fr'
                      ? 'Renforcez votre marque et atteignez les clients de manière inédite avec Glimps'
                      : 'Versterk je merk en bereik klanten op een ongekende manier met Glimps'
                    }
                  </h3>
                  <p className="text-muted-foreground">
                    {language === 'fr'
                      ? 'Prêt à transformer votre service client ? Inscrivez-vous pour une démo et commencez votre parcours vers l\'excellence automatisée. Votre success story commence ici.'
                      : 'Klaar om je klantenservice te transformeren? Registreer voor een demo en begin aan je reis naar geautomatiseerde excellentie. Je succesverhaal begint hier.'
                    }
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-5xl font-bold mb-2">92%</div>
                    <p className="text-muted-foreground">
                      {language === 'fr' ? 'Augmentation de la conversion' : 'Toename in conversie'}
                    </p>
                  </div>
                  <div>
                    <div className="text-5xl font-bold mb-2">3.8x</div>
                    <p className="text-muted-foreground">
                      {language === 'fr' ? 'Plus de ventes' : 'Meer verkoop'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Card className="bg-secondary/50 p-8 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm">Overview</span>
                      <span className="text-xs bg-primary text-primary-foreground px-3 py-1 rounded-full">
                        Live
                      </span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="font-semibold">Conversie Trend</h4>
                        <span className="text-primary text-sm">+127%</span>
                      </div>
                      <div className="flex items-end gap-2 h-32">
                        {[40, 50, 45, 60, 70, 65, 80].map((height, i) => (
                          <div
                            key={i}
                            className="flex-1 bg-primary/60 rounded-t"
                            style={{ height: `${height}%` }}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <Card className="p-4 bg-background/50">
                        <p className="text-sm text-muted-foreground mb-2">Active Users</p>
                        <p className="text-2xl font-bold">2,847</p>
                        <p className="text-xs text-green-500">↑ 12%</p>
                      </Card>
                      <Card className="p-4 bg-background/50">
                        <p className="text-sm text-muted-foreground mb-2">Response Time</p>
                        <p className="text-2xl font-bold">1.2s</p>
                        <p className="text-xs text-green-500">↓ 0.3s</p>
                      </Card>
                    </div>

                    <Card className="p-4 bg-background/50">
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="font-semibold text-sm">Customer Insights</h4>
                        <div className="w-10 h-5 bg-primary rounded-full relative">
                          <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-purple-500"></div>
                          <div className="flex-1">
                            <p className="text-sm font-medium">Emma Johnson</p>
                            <p className="text-xs text-muted-foreground">Online</p>
                          </div>
                          <span className="text-xs text-muted-foreground">2 min</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-pink-500"></div>
                          <div className="flex-1">
                            <p className="text-sm font-medium">Michael Brown</p>
                            <p className="text-xs text-muted-foreground">Online</p>
                          </div>
                          <span className="text-xs text-muted-foreground">5 min</span>
                        </div>
                      </div>
                    </Card>
                  </div>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="automation" className="mt-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold mb-4">
                    {language === 'fr'
                      ? 'Automatisez vos workflows et gagnez du temps'
                      : 'Automatiseer je workflows en bespaar tijd'
                    }
                  </h3>
                  <p className="text-muted-foreground">
                    {language === 'fr'
                      ? 'Laissez votre agent IA exécuter automatiquement les tâches répétitives et concentrez-vous sur ce qui compte vraiment pour votre entreprise. Augmentez l\'efficacité et la productivité.'
                      : 'Laat je AI-agent repetitieve taken automatisch uitvoeren en focus op wat echt belangrijk is voor je bedrijf. Verhoog efficiëntie en productiviteit.'
                    }
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-5xl font-bold mb-2">85%</div>
                    <p className="text-muted-foreground">
                      {language === 'fr' ? 'Moins de travail manuel' : 'Minder handmatig werk'}
                    </p>
                  </div>
                  <div>
                    <div className="text-5xl font-bold mb-2">24/7</div>
                    <p className="text-muted-foreground">
                      {language === 'fr' ? 'Toujours disponible' : 'Altijd beschikbaar'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Card className="bg-secondary/50 p-8 backdrop-blur-sm">
                  <div className="flex items-center justify-center h-64">
                    <div className="text-center">
                      <Zap className="w-24 h-24 mx-auto mb-4 text-primary" />
                      <p className="text-xl font-semibold">Automatisering Dashboard</p>
                      <p className="text-muted-foreground mt-2">
                        Stroomlijn je processen met intelligente automatisering
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="personalization" className="mt-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold mb-4">
                    {language === 'fr'
                      ? 'Expériences personnalisées qui convertissent'
                      : 'Persoonlijke ervaringen die converteren'
                    }
                  </h3>
                  <p className="text-muted-foreground">
                    {language === 'fr'
                      ? 'Offrez à chaque client une expérience unique et personnalisée basée sur son comportement et ses préférences. Augmentez l\'engagement et la fidélité.'
                      : 'Bied elke klant een unieke, gepersonaliseerde ervaring op basis van hun gedrag en voorkeuren. Verhoog engagement en loyaliteit.'
                    }
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-5xl font-bold mb-2">4.5x</div>
                    <p className="text-muted-foreground">
                      {language === 'fr' ? 'Engagement supérieur' : 'Hogere engagement'}
                    </p>
                  </div>
                  <div>
                    <div className="text-5xl font-bold mb-2">76%</div>
                    <p className="text-muted-foreground">
                      {language === 'fr' ? 'Plus d\'achats répétés' : 'Meer herhaalaankopen'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Card className="bg-secondary/50 p-8 backdrop-blur-sm">
                  <div className="flex items-center justify-center h-64">
                    <div className="text-center">
                      <Users className="w-24 h-24 mx-auto mb-4 text-primary" />
                      <p className="text-xl font-semibold">
                        {language === 'fr' ? 'Moteur de Personnalisation' : 'Personalisatie Engine'}
                      </p>
                      <p className="text-muted-foreground mt-2">
                        {language === 'fr'
                          ? 'Sur mesure pour chaque client individuel'
                          : 'Maatwerk voor elke individuele klant'
                        }
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProductFeatures;
