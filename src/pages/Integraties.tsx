import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ShoppingCart, 
  Package, 
  MessageSquare, 
  Mail, 
  BarChart, 
  Users,
  Zap,
  CheckCircle2
} from "lucide-react";
import bpostLogo from "@/assets/bpost-logo.png";
import odooLogo from "@/assets/odoo-logo.png";
import postnlLogo from "@/assets/postnl-logo.png";
import sendcloudLogo from "@/assets/sendcloud-logo.png";

const Integraties = () => {
  const integrationCategories = [
    {
      title: "E-commerce Platforms",
      icon: ShoppingCart,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      integrations: [
        { 
          name: "Shopify", 
          logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg",
          description: "Automatische sync van producten, voorraad en klantgegevens",
          status: "Live"
        },
        { 
          name: "WooCommerce", 
          logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/WooCommerce_logo.svg",
          description: "Volledige integratie met WordPress en WooCommerce stores",
          status: "Live"
        },
        { 
          name: "Magento", 
          logo: "https://upload.wikimedia.org/wikipedia/commons/5/55/Magento_Logo.svg",
          description: "Enterprise e-commerce platform integratie",
          status: "Live"
        },
        { 
          name: "Odoo", 
          logo: odooLogo,
          description: "Complete ERP en e-commerce suite integratie",
          status: "Live"
        },
      ]
    },
    {
      title: "Verzending & Logistiek",
      icon: Package,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      integrations: [
        { 
          name: "SendCloud", 
          logo: sendcloudLogo,
          description: "Track & trace, verzendlabels en automatische updates",
          status: "Live"
        },
        { 
          name: "bpost", 
          logo: bpostLogo,
          description: "Belgische postsysteem integratie voor tracking",
          status: "Live"
        },
        { 
          name: "PostNL", 
          logo: postnlLogo,
          description: "Nederlandse post tracking en verzending",
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
          name: "WhatsApp Business", 
          logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
          description: "Directe WhatsApp communicatie met klanten",
          status: "Live"
        },
        { 
          name: "Slack", 
          logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
          description: "Team notificaties en interne communicatie",
          status: "Live"
        },
        { 
          name: "HubSpot", 
          logo: "https://www.hubspot.com/hubfs/HubSpot_Logos/HubSpot-Inversed-Favicon.png",
          description: "CRM synchronisatie en lead management",
          status: "Binnenkort"
        },
        { 
          name: "Intercom", 
          logo: "https://static.intercomassets.com/assets/favicon-v2/favicon-32x32-c9b2c4b03f17fa7fef46a8ad9e56cfb8.png",
          description: "Customer messaging platform integratie",
          status: "Binnenkort"
        },
      ]
    },
    {
      title: "Analytics & Data",
      icon: BarChart,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      integrations: [
        { 
          name: "Google Analytics", 
          logo: "https://www.gstatic.com/analytics-suite/header/suite/v2/ic_analytics.svg",
          description: "Conversie tracking en gedragsanalyse",
          status: "Live"
        },
        { 
          name: "Supabase", 
          logo: "https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png",
          description: "Real-time database en backend services",
          status: "Live"
        },
        { 
          name: "Mixpanel", 
          logo: "https://cdn.worldvectorlogo.com/logos/mixpanel-1.svg",
          description: "Product analytics en user insights",
          status: "Binnenkort"
        },
      ]
    },
    {
      title: "Marketing & Email",
      icon: Mail,
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
      integrations: [
        { 
          name: "Mailchimp", 
          logo: "https://eep.io/images/yzco4xsimv0y/1u3hha8lkEM2oOMe8gcuiY/7b3d6f85bf3f3bc834d4e7e8cfb03924/MC_Icon_MailChimp_Smile.png",
          description: "Email marketing campagnes en nieuwsbrieven",
          status: "Live"
        },
        { 
          name: "Klaviyo", 
          logo: "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_5e9e134e5f4f44c4ea4e4d3f26a42fdb/klaviyo.png",
          description: "E-commerce email marketing automation",
          status: "Binnenkort"
        },
        { 
          name: "ActiveCampaign", 
          logo: "https://www.activecampaign.com/site/icons/icon-96x96.png",
          description: "Marketing automation en CRM",
          status: "Binnenkort"
        },
      ]
    },
    {
      title: "Betalingen",
      icon: Zap,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      integrations: [
        { 
          name: "Stripe", 
          logo: "https://images.ctfassets.net/fzn2n1nzq965/HTTOloNPhisV9P4hlMPNA/cacf1bb88b9fc492dfad34378d844280/Stripe_icon_-_square.svg",
          description: "Online betalingen en transacties",
          status: "Live"
        },
        { 
          name: "Mollie", 
          logo: "https://www.mollie.com/external/icons/payment-methods/ideal.svg",
          description: "Nederlandse betalingsprovider",
          status: "Live"
        },
        { 
          name: "PayPal", 
          logo: "https://www.paypalobjects.com/webstatic/icon/pp258.png",
          description: "Wereldwijde online betalingen",
          status: "Live"
        },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-background py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-2">
              <Zap className="mr-2 h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-primary">50+ Integraties</span>
            </div>
            <h1 className="mb-6 text-5xl font-bold md:text-6xl">
              Naadloos verbonden met <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                jouw favoriete tools
              </span>
            </h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Glimps AI integreert moeiteloos met alle platforms die jij al gebruikt. 
              Geen gedoe, gewoon werken.
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
              <h3 className="mb-2 text-xl font-bold">Plug & Play Setup</h3>
              <p className="text-muted-foreground">
                Meeste integraties werken binnen 5 minuten. Geen developers nodig.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10">
                  <Zap className="h-7 w-7 text-blue-500" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-bold">Real-time Sync</h3>
              <p className="text-muted-foreground">
                Alle data wordt direct gesynchroniseerd. Altijd up-to-date.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10">
                  <Users className="h-7 w-7 text-purple-500" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-bold">Custom Integraties</h3>
              <p className="text-muted-foreground">
                Mis je een integratie? We bouwen custom API koppelingen.
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
              Mis je een integratie?
            </h2>
            <p className="mb-8 text-xl text-muted-foreground">
              We bouwen graag custom koppelingen met jouw systemen. Neem contact op en we kijken wat mogelijk is.
            </p>
            <a
              href="/consultancy"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-primary/90 hover:gap-3"
            >
              Bespreek jouw integratie →
            </a>
          </div>
        </div>
      </section>

      <ChatWidget />
      <Footer />
    </div>
  );
};

export default Integraties;
