import bpostLogo from "@/assets/bpost-logo.png";
import odooLogo from "@/assets/odoo-logo.png";
import postnlLogo from "@/assets/postnl-logo.png";
import sendcloudLogo from "@/assets/sendcloud-logo.png";
import prestashopLogo from "@/assets/prestashop-logo.png";
import woocommerceLogo from "@/assets/woocommerce-logo.svg";

const Integrations = () => {
  const integrations = [
    { name: "Shopify", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg" },
    { name: "SendCloud", logo: sendcloudLogo },
    { name: "WooCommerce", logo: woocommerceLogo },
    { name: "WhatsApp", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" },
    { name: "Odoo", logo: odooLogo },
    { name: "PrestaShop", logo: prestashopLogo },
    { name: "Slack", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" },
    { name: "Magento", logo: "https://upload.wikimedia.org/wikipedia/commons/5/55/Magento_Logo.svg" },
    { name: "bpost", logo: bpostLogo },
    { name: "PostNL", logo: postnlLogo },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-primary/5 via-purple-50/30 to-background py-24">
      {/* Decorative gradient blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-primary/10 rounded-full blur-3xl"></div>
      
      <div className="mx-auto max-w-6xl px-6 relative z-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-purple-500/20 border border-primary/20 mb-4">
            <p className="text-sm font-semibold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              ONZE PRIMAIRE INTEGRATIES
            </p>
          </div>
          <h2 className="mb-4 font-inter text-4xl font-normal text-foreground md:text-5xl">
            Maak productiviteit makkelijker
            <br />
            met{" "}
            <span className="bg-gradient-to-r from-primary via-purple-600 to-accent bg-clip-text text-transparent font-bold">
              50+ integraties
            </span>
          </h2>
        </div>

        {/* Integration Grid */}
        <div className="grid grid-cols-3 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="group flex items-center justify-center rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 hover:bg-gradient-to-br hover:from-card hover:to-primary/5"
            >
              <img
                src={integration.logo}
                alt={`${integration.name} logo`}
                className="h-12 w-auto object-contain opacity-70 transition-opacity group-hover:opacity-100"
              />
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            En nog veel meer integraties beschikbaar
          </p>
          <a 
            href="/integraties" 
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline transition-all hover:gap-3 hover:text-purple-600"
          >
            Bekijk alle integraties →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
