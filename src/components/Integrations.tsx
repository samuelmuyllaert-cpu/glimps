import bpostLogo from "@/assets/bpost-logo.png";
import odooLogo from "@/assets/odoo-logo.png";
import postnlLogo from "@/assets/postnl-logo.png";
import sendcloudLogo from "@/assets/sendcloud-logo.png";

const Integrations = () => {
  const integrations = [
    { name: "Shopify", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg" },
    { name: "SendCloud", logo: sendcloudLogo },
    { name: "WooCommerce", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/WooCommerce_logo.svg" },
    { name: "WhatsApp", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" },
    { name: "Odoo", logo: odooLogo },
    { name: "Supabase", logo: "https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png" },
    { name: "Slack", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" },
    { name: "Magento", logo: "https://upload.wikimedia.org/wikipedia/commons/5/55/Magento_Logo.svg" },
    { name: "bpost", logo: bpostLogo },
    { name: "PostNL", logo: postnlLogo },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
            Onze primaire integraties
          </p>
          <h2 className="mb-4 font-inter text-4xl font-normal text-foreground md:text-5xl">
            Maak productiviteit makkelijker
            <br />
            met{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              50+ integraties
            </span>
          </h2>
        </div>

        {/* Integration Grid */}
        <div className="grid grid-cols-3 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="group flex items-center justify-center rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg"
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
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline transition-all hover:gap-3"
          >
            Bekijk alle integraties →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
