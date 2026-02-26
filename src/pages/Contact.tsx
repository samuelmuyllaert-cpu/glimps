import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StructuredData, { baseOrganization } from "@/components/StructuredData";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const graphData = [
    {
      "@type": "ContactPage",
      "@id": "https://www.glimps.be/contact",
      "url": "https://www.glimps.be/contact",
      "name": "Contact - Glimps AI",
      "description": "Heb je vragen over Glimps AI? Plan een gratis gesprek, stuur een email of bel ons. We helpen je graag verder.",
      "inLanguage": "nl-BE",
      "isPartOf": {
        "@id": "https://www.glimps.be#website"
      },
      "publisher": {
        "@id": "https://www.glimps.be#organization"
      }
    },
    baseOrganization,
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.glimps.be/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Contact",
          "item": "https://www.glimps.be/contact"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Contact - Glimps AI | Neem contact op voor een gratis gesprek"
        description="Heb je vragen over Glimps AI? Plan een gratis gesprek, stuur een email of bel ons. We helpen je graag verder."
        path="/contact"
        canonical="https://www.glimps.be/contact"
        keywords="contact Glimps, gratis gesprek, demo plannen, email, telefoon, Brugge België"
        type="website"
      />
      <StructuredData type="graph" data={graphData} />
      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            {t('contact.badge')}
          </div>
          <h1 className="mb-6 font-inter text-4xl font-bold leading-tight md:text-6xl">
            {t('contact.title')}
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="container mx-auto px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <Mail className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-2 font-bold">{t('contact.email')}</h3>
              <a href="mailto:info@glimps.be" className="text-sm text-muted-foreground hover:text-primary">
                info@glimps.be
              </a>
            </Card>

            <Card className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <MapPin className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-2 font-bold">{t('contact.location')}</h3>
              <p className="text-sm text-muted-foreground">
                {t('contact.locationValue')}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Calendly Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-4xl font-bold">{t('contact.planMeeting.title')}</h2>
            <p className="text-lg text-muted-foreground">
              {t('contact.planMeeting.description')}
            </p>
          </div>

          {/* Calendly Inline Widget */}
          <Card className="overflow-hidden p-0">
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/samuel-muyllaert/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=e6575e&text_color=ffffff&primary_color=1a1a1a" 
              style={{ minWidth: '320px', height: '700px' }}
            ></div>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              {t('contact.planMeeting.or')}{" "}
              <a href="mailto:info@glimps.be" className="font-medium text-primary hover:underline">
                info@glimps.be
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="border-t bg-muted/30 py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h3 className="mb-6 text-2xl font-bold">{t('contact.faq.title')}</h3>
            <p className="mb-8 text-muted-foreground">
              {t('contact.faq.description')}
            </p>
            <a
              href="/faq"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-white transition-all hover:bg-primary/90"
            >
              {t('contact.faq.button')}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
