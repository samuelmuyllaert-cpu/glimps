import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { ShoppingCart, Package, MessageSquare, Users, Zap, CircleCheck as CheckCircle2, Workflow } from "lucide-react";

const Integraties = () => {
  const { language } = useLanguage();

  const integrationCategories = [
    {
      title: language === 'en'
          ? "Plateformes E-commerce"
          : language === 'fr'
          ? "Plateformes E-commerce"
          : "E-commerce Platforms",
      icon: ShoppingCart,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      integrations: [
        {
          name: "Shopify",
          logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg",
          description: language === 'fr'
            ? "Synchronisation automatique des produits, stock et données clients"
            : "Automatische sync van producten, voorraad en klantgegevens",
          status: "Live"
        },
        {
          name: "WooCommerce",
          logo: "https://cdn.worldvectorlogo.com/logos/woocommerce.svg",
          description: language === 'fr'
            ? "Intégration complète avec WordPress et boutiques WooCommerce"
            : "Volledige integratie met WordPress en WooCommerce stores",
          status: "Live"
        },
        {
          name: "Shopware",
          logo: "https://cdn.worldvectorlogo.com/logos/shopware.svg",
          description: language === 'fr'
            ? "Plateforme e-commerce flexible pour entreprises innovantes"
            : "Flexibel e-commerce platform voor innovatieve bedrijven",
          status: "Live"
        },
        {
          name: "Magento",
          logo: "https://cdn.worldvectorlogo.com/logos/magento.svg",
          description: language === 'fr'
            ? "Intégration de plateforme e-commerce entreprise"
            : "Enterprise e-commerce platform integratie",
          status: "Live"
        },
        {
          name: "Odoo",
          logo: "https://cdn.worldvectorlogo.com/logos/odoo.svg",
          description: language === 'fr'
            ? "Intégration complète ERP et suite e-commerce"
            : "Complete ERP en e-commerce suite integratie",
          status: "Live"
        },
        {
          name: "Lightspeed",
          logo: "https://cdn.worldvectorlogo.com/logos/lightspeed.svg",
          description: language === 'fr'
            ? "Plateforme POS et e-commerce pour retail et horeca"
            : "POS en e-commerce platform voor retail en horeca",
          status: "Live"
        },
        {
          name: "PrestaShop",
          logo: "https://cdn.worldvectorlogo.com/logos/prestashop.svg",
          description: language === 'fr'
            ? "Intégration de solution e-commerce open source"
            : "Open source e-commerce oplossing integratie",
          status: "Live"
        },
        {
          name: "Wix",
          logo: "https://cdn.worldvectorlogo.com/logos/wix.svg",
          description: language === 'fr'
            ? "Intégration plateforme boutique en ligne Wix"
            : "Wix webshop platform integratie",
          status: "Live"
        },
        {
          name: "WordPress",
          logo: "https://cdn.worldvectorlogo.com/logos/wordpress-icon-1.svg",
          description: language === 'fr'
            ? "Intégration site web et blog WordPress"
            : "WordPress website en blog integratie",
          status: "Live"
        },
      ]
    },
    {
      title: language === 'en'
          ? "Expedition & Logistique"
          : language === 'fr'
          ? "Expédition & Logistique"
          : "Verzending & Logistiek",
      icon: Package,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      integrations: [
        {
          name: "SendCloud",
          logo: "https://www.sendcloud.com/wp-content/uploads/2023/09/Sendcloud_Logo-Secondary_Blue-White_RGB.svg",
          description: language === 'fr'
            ? "Track & trace, étiquettes d'expédition et mises à jour automatiques"
            : "Track & trace, verzendlabels en automatische updates",
          status: "Live"
        },
        {
          name: "bpost",
          logo: "https://cdn.worldvectorlogo.com/logos/bpost.svg",
          description: language === 'fr'
            ? "Intégration du système postal belge pour le suivi"
            : "Belgische postsysteem integratie voor tracking",
          status: "Live"
        },
        {
          name: "PostNL",
          logo: "https://cdn.worldvectorlogo.com/logos/postnl.svg",
          description: language === 'fr'
            ? "Suivi et expédition de la poste néerlandaise"
            : "Nederlandse post tracking en verzending",
          status: "Live"
        },
        {
          name: "DHL",
          logo: "https://cdn.worldvectorlogo.com/logos/dhl.svg",
          description: language === 'fr'
            ? "Expédition et suivi international via DHL"
            : "Internationale verzending en tracking via DHL",
          status: "Live"
        },
        {
          name: "GLS",
          logo: "https://cdn.worldvectorlogo.com/logos/gls.svg",
          description: language === 'fr'
            ? "Livraison de colis européen et suivi"
            : "Europese pakketbezorging en tracking",
          status: "Live"
        },
        {
          name: "MyParcel",
          logo: "https://www.myparcel.nl/app/uploads/MyParcel_logo_zwart-1.svg",
          description: language === 'fr'
            ? "Plateforme d'expédition multi-transporteurs pour boutiques en ligne"
            : "Multi-carrier verzendplatform voor webshops",
          status: "Live"
        },
        {
          name: "Picqer",
          logo: "https://picqer.com/images/picqer-logo.svg",
          description: language === 'fr'
            ? "Système de gestion d'entrepôt et de stock"
            : "Magazijn- en voorraadbeheer systeem",
          status: "Live"
        },
        {
          name: "Fulfillment Centers",
          logo: "https://cdn-icons-png.flaticon.com/512/679/679720.png",
          description: language === 'fr'
            ? "Connexion avec partenaires externes de fulfillment et logistique"
            : "Koppeling met externe fulfillment en logistieke partners",
          status: "Live"
        },
      ]
    },
    {
      title: "Communicatie & CRM",
      icon: MessageSquare,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      integrations: [
        {
          name: "Instagram",
          logo: "https://cdn.worldvectorlogo.com/logos/instagram-2016-5.svg",
          description: language === 'fr'
            ? "Répondez automatiquement aux DM et commentaires via Instagram"
            : "Beantwoord DM's en comments automatisch via Instagram",
          status: "Live"
        },
        {
          name: "Telegram",
          logo: "https://cdn.worldvectorlogo.com/logos/telegram.svg",
          description: language === 'fr'
            ? "Intégration bot Telegram pour communication client"
            : "Telegram bot integratie voor klantcommunicatie",
          status: "Live"
        },
        {
          name: "Twilio",
          logo: "https://cdn.worldvectorlogo.com/logos/twilio.svg",
          description: language === 'fr'
            ? "Communication SMS et vocale via plateforme Twilio"
            : "SMS en voice communicatie via Twilio platform",
          status: "Live"
        },
        {
          name: "Email",
          logo: "https://cdn-icons-png.flaticon.com/512/732/732200.png",
          description: language === 'fr'
            ? "Gestion automatique des emails et réponses"
            : "Automatische email afhandeling en responses",
          status: "Live"
        },
        {
          name: "Zendesk",
          logo: "https://cdn.worldvectorlogo.com/logos/zendesk.svg",
          description: language === 'fr'
            ? "Intégration système de tickets support client"
            : "Customer support ticket systeem integratie",
          status: "Live"
        },
        {
          name: "Slack",
          logo: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg",
          description: language === 'fr'
            ? "Notifications d'équipe et communication interne"
            : "Team notificaties en interne communicatie",
          status: "Live"
        },
        {
          name: "HubSpot",
          logo: "https://cdn.worldvectorlogo.com/logos/hubspot.svg",
          description: language === 'fr'
            ? "Synchronisation CRM et gestion des leads"
            : "CRM synchronisatie en lead management",
          status: language === 'en'
          ? "Bientôt"
          : language === 'fr'
          ? "Bientôt"
          : "Binnenkort"
        },
        {
          name: "WhatsApp",
          logo: "https://cdn.worldvectorlogo.com/logos/whatsapp-tile.svg",
          description: language === 'fr'
            ? "Service client via WhatsApp avec réponses automatiques"
            : "Klantenservice via WhatsApp met automatische antwoorden",
          status: "Live"
        },
        {
          name: "Messenger",
          logo: "https://cdn.worldvectorlogo.com/logos/messenger-1.svg",
          description: language === 'fr'
            ? "Automatisez vos conversations Facebook Messenger"
            : "Automatiseer je Facebook Messenger gesprekken",
          status: "Live"
        },
      ]
    },
    {
      title: "Automations & API",
      icon: Workflow,
      color: "text-violet-500",
      bgColor: "bg-violet-500/10",
      integrations: [
        {
          name: "Make (Integromat)",
          logo: "https://cdn.worldvectorlogo.com/logos/make-1.svg",
          description: language === 'fr'
            ? "Automatisation de workflow avancée et intégrations"
            : "Geavanceerde workflow automatisering en integraties",
          status: "Live"
        },
        {
          name: "Zapier",
          logo: "https://cdn.worldvectorlogo.com/logos/zapier.svg",
          description: language === 'fr'
            ? "Automatisez les tâches entre vos applications préférées"
            : "Automatiseer taken tussen je favoriete apps",
          status: "Live"
        },
        {
          name: "n8n",
          logo: "https://cdn.worldvectorlogo.com/logos/n8n.svg",
          description: language === 'fr'
            ? "Plateforme d'automatisation de workflow open-source"
            : "Open-source workflow automatisering platform",
          status: "Live"
        },
        {
          name: "REST API",
          logo: "https://cdn-icons-png.flaticon.com/512/919/919836.png",
          description: language === 'fr'
            ? "API RESTful complète pour intégrations personnalisées"
            : "Volledige RESTful API voor custom integraties",
          status: "Live"
        },
        {
          name: "Webhooks",
          logo: "https://cdn-icons-png.flaticon.com/512/2166/2166823.png",
          description: language === 'fr'
            ? "Notifications d'événements en temps réel via webhooks"
            : "Real-time event notificaties via webhooks",
          status: "Live"
        },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={language === 'fr'
          ? "Intégrations - Glimps AI | 50+ Connexions avec vos outils"
          : "Integraties - Glimps AI | 50+ Koppelingen met je tools"}
        description={language === 'fr'
          ? "Connectez Glimps de manière transparente avec Shopify, WooCommerce, SendCloud, WhatsApp et 50+ autres outils. Configuration plug & play en 5 minutes."
          : "Koppel Glimps naadloos met Shopify, WooCommerce, SendCloud, WhatsApp en 50+ andere tools. Plug & play setup binnen 5 minuten."}
        path={language === 'en'
          ? "/fr/integrations"
          : language === 'fr'
          ? "/fr/integrations"
          : "/integraties"}
      />
      <StructuredData type="organization" />
      <StructuredData
        type="service"
        data={{
          name: language === 'en'
          ? "Integrations Glimps AI"
          : language === 'fr'
          ? "Intégrations Glimps AI"
          : "Glimps AI Integraties",
          description: language === 'fr'
            ? "50+ intégrations avec plateformes e-commerce, expédition, CRM et outils marketing"
            : "50+ integraties met e-commerce platforms, verzending, CRM en marketing tools"
        }}
      />
      <StructuredData
        type="breadcrumb"
        data={[
          { name: "Home", url: language === 'en'
          ? "/fr"
          : language === 'fr'
          ? "/fr"
          : "/" },
          { name: language === 'en'
          ? "Integrations"
          : language === 'fr'
          ? "Intégrations"
          : "Integraties", url: language === 'en'
          ? "/fr/integrations"
          : language === 'fr'
          ? "/fr/integrations"
          : "/integraties" }
        ]}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-background py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-2">
              <Zap className="mr-2 h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-primary">
                {language === 'en'
          ? "50+ Integrations"
          : language === 'fr'
          ? "50+ Intégrations"
          : "50+ Integraties"}
              </span>
            </div>
            <h1 className="mb-6 text-5xl font-bold md:text-6xl">
              {language === 'fr' ? (
                <>
                  Connecté de manière transparente avec <br />
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    vos outils préférés
                  </span>
                </>
              ) : (
                <>
                  Naadloos verbonden met <br />
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    jouw favoriete tools
                  </span>
                </>
              )}
            </h1>
            <p className="mb-8 text-xl text-muted-foreground">
              {language === 'fr'
                ? "Glimps AI s'intègre sans effort avec toutes les plateformes que vous utilisez déjà. Pas de tracas, juste du travail."
                : "Glimps AI integreert moeiteloos met alle platforms die jij al gebruikt. Geen gedoe, gewoon werken."}
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="border-b py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/10">
                  <CheckCircle2 className="h-7 w-7 text-green-500" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-bold">
                {language === 'en'
          ? "Configuration Plug & Play"
          : language === 'fr'
          ? "Configuration Plug & Play"
          : "Plug & Play Setup"}
              </h3>
              <p className="text-muted-foreground">
                {language === 'fr'
                  ? "Configuration et implémentation professionnelle. Nous vous aidons à démarrer."
                  : "Professionele setup en implementatie. We helpen je op weg."}
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10">
                  <Zap className="h-7 w-7 text-blue-500" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-bold">
                {language === 'en'
          ? "Synchronisation en Temps Reel"
          : language === 'fr'
          ? "Synchronisation en Temps Réel"
          : "Real-time Sync"}
              </h3>
              <p className="text-muted-foreground">
                {language === 'fr'
                  ? "Toutes les données sont synchronisées directement. Toujours à jour."
                  : "Alle data wordt direct gesynchroniseerd. Altijd up-to-date."}
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10">
                  <Users className="h-7 w-7 text-purple-500" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-bold">
                {language === 'en'
          ? "Integrations Personnalisees"
          : language === 'fr'
          ? "Intégrations Personnalisées"
          : "Custom Integraties"}
              </h3>
              <p className="text-muted-foreground">
                {language === 'fr'
                  ? "Il vous manque une intégration ? Nous créons des connexions API personnalisées."
                  : "Mis je een integratie? We bouwen custom API koppelingen."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Categories */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {integrationCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="mb-8 flex items-center gap-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${category.bgColor}`}>
                    <category.icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <h2 className="text-3xl font-bold">{category.title}</h2>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {category.integrations.map((integration, index) => (
                    <Card key={index} className="group p-6 transition-all hover:shadow-lg hover:-translate-y-1">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card p-2">
                            <img
                              src={integration.logo}
                              alt={`${integration.name} logo`}
                              className="h-full w-full object-contain"
                            />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg">{integration.name}</h3>
                            <Badge 
                              variant={integration.status === "Live" ? "default" : "secondary"}
                              className="mt-1"
                            >
                              {integration.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {integration.description}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-gradient-to-br from-primary/5 to-background py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold">
              {language === 'en'
          ? "Il vous manque une integration ?"
          : language === 'fr'
          ? "Il vous manque une intégration ?"
          : "Mis je een integratie?"}
            </h2>
            <p className="mb-8 text-xl text-muted-foreground">
              {language === 'fr'
                ? "Nous créons volontiers des connexions personnalisées avec vos systèmes. Contactez-nous et nous verrons ce qui est possible."
                : "We bouwen graag custom koppelingen met jouw systemen. Neem contact op en we kijken wat mogelijk is."}
            </p>
            <a
              href={language === 'en'
          ? "/fr/consultance"
          : language === 'fr'
          ? "/fr/consultance"
          : "/consultancy"}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-primary/90 hover:gap-3"
            >
              {language === 'en'
          ? "Discutez de votre integration →"
          : language === 'fr'
          ? "Discutez de votre intégration →"
          : "Bespreek jouw integratie →"}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Integraties;
