import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
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
  CheckCircle2,
  Workflow
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
        {
          name: "Lightspeed",
          logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Lightspeed_Logo.svg",
          description: "POS en e-commerce platform voor retail en horeca",
          status: "Live"
        },
        {
          name: "PrestaShop",
          logo: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Prestashop_logo.svg",
          description: "Open source e-commerce oplossing integratie",
          status: "Live"
        },
        {
          name: "Wix",
          logo: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Wix.com_website_logo.svg",
          description: "Wix webshop platform integratie",
          status: "Live"
        },
        {
          name: "WordPress",
          logo: "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg",
          description: "WordPress website en blog integratie",
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
        {
          name: "DHL",
          logo: "https://upload.wikimedia.org/wikipedia/commons/a/ac/DHL_Logo.svg",
          description: "Internationale verzending en tracking via DHL",
          status: "Live"
        },
        {
          name: "GLS",
          logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/GLS_Logo.svg",
          description: "Europese pakketbezorging en tracking",
          status: "Live"
        },
        {
          name: "MyParcel",
          logo: "https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1489559011/rwsccqgzjlcfqmx4ywzi.png",
          description: "Multi-carrier verzendplatform voor webshops",
          status: "Live"
        },
        {
          name: "Picqer",
          logo: "https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1491300506/tz9rlokfmlbhcvqz7a8n.png",
          description: "Magazijn- en voorraadbeheer systeem",
          status: "Live"
        },
        {
          name: "Fulfillment Centers",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Eo_circle_orange_white_letter-f.svg/240px-Eo_circle_orange_white_letter-f.svg.png",
          description: "Koppeling met externe fulfillment en logistieke partners",
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
          name: "Instagram",
          logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
          description: "Beantwoord DM's en comments automatisch via Instagram",
          status: "Live"
        },
        {
          name: "Messenger",
          logo: "https://upload.wikimedia.org/wikipedia/commons/b/be/Facebook_Messenger_logo_2020.svg",
          description: "Facebook Messenger integratie voor klantenservice",
          status: "Live"
        },
        {
          name: "Telegram",
          logo: "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg",
          description: "Telegram bot integratie voor klantcommunicatie",
          status: "Live"
        },
        {
          name: "Twilio",
          logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Twilio-logo-red.svg",
          description: "SMS en voice communicatie via Twilio platform",
          status: "Live"
        },
        {
          name: "Email",
          logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Mail_%28iOS%29.svg",
          description: "Automatische email afhandeling en responses",
          status: "Live"
        },
        {
          name: "Zendesk",
          logo: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Zendesk_logo.svg",
          description: "Customer support ticket systeem integratie",
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
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/HubSpot_Logo.svg/320px-HubSpot_Logo.svg.png",
          description: "CRM synchronisatie en lead management",
          status: "Binnenkort"
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
          logo: "https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/lsrngz7tgupk7kmaaiuj",
          description: "Geavanceerde workflow automatisering en integraties",
          status: "Live"
        },
        {
          name: "Zapier",
          logo: "https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1500230015/yyfagcgul4fdb7pgjrvs.png",
          description: "Automatiseer taken tussen je favoriete apps",
          status: "Live"
        },
        {
          name: "n8n",
          logo: "https://avatars.githubusercontent.com/u/45487711?s=200&v=4",
          description: "Open-source workflow automatisering platform",
          status: "Live"
        },
        {
          name: "REST API",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Eo_circle_blue_white_letter-a.svg/240px-Eo_circle_blue_white_letter-a.svg.png",
          description: "Volledige RESTful API voor custom integraties",
          status: "Live"
        },
        {
          name: "Webhooks",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eo_circle_green_white_letter-w.svg/240px-Eo_circle_green_white_letter-w.svg.png",
          description: "Real-time event notificaties via webhooks",
          status: "Live"
        },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Integraties - Glimps AI | 50+ Koppelingen met je tools"
        description="Koppel Glimps naadloos met Shopify, WooCommerce, SendCloud, WhatsApp en 50+ andere tools. Plug & play setup binnen 5 minuten."
        path="/integraties"
      />
      <StructuredData type="organization" />
      <StructuredData 
        type="service" 
        data={{
          name: "Glimps AI Integraties",
          description: "50+ integraties met e-commerce platforms, verzending, CRM en marketing tools"
        }} 
      />
      <StructuredData 
        type="breadcrumb" 
        data={[
          { name: "Home", url: "/" },
          { name: "Integraties", url: "/integraties" }
        ]} 
      />
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
                Professionele setup en implementatie. We helpen je op weg.
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

      <Footer />
    </div>
  );
};

export default Integraties;
