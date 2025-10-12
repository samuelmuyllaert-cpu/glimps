import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import { useEffect } from "react";

const Contact = () => {
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

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Contact - Glimps AI | Neem contact op voor een gratis gesprek"
        description="Heb je vragen over Glimps AI? Plan een gratis gesprek, stuur een email of bel ons. We helpen je graag verder."
        path="/contact"
        canonical="https://www.glimps.be/contact"
        keywords="contact Glimps, gratis gesprek, demo plannen, email, telefoon, Gent België"
        type="website"
      />
      <StructuredData type="organization" />
      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Neem Contact Op
          </div>
          <h1 className="mb-6 font-inter text-4xl font-bold leading-tight md:text-6xl">
            Laten we Kennismaken
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Heb je vragen over Glimps AI? Wil je weten of we de juiste oplossing zijn voor jouw business? 
            Plan een gratis gesprek in of neem direct contact op.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="container mx-auto px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <Mail className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-2 font-bold">Email</h3>
              <a href="mailto:info@glimps.be" className="text-sm text-muted-foreground hover:text-primary">
                info@glimps.be
              </a>
            </Card>

            <Card className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <MapPin className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-2 font-bold">Locatie</h3>
              <p className="text-sm text-muted-foreground">
                Brugge, België
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <MessageSquare className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-2 font-bold">Live Chat</h3>
              <p className="text-sm text-muted-foreground">
                Gebruik de chat rechtsonder
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Calendly Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-4xl font-bold">Plan een Gratis Gesprek</h2>
            <p className="text-lg text-muted-foreground">
              Kies een moment dat voor jou werkt. We nemen alle tijd om je vragen te beantwoorden 
              en te kijken hoe Glimps AI jouw business kan helpen groeien.
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
              Of stuur ons direct een email op{" "}
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
            <h3 className="mb-6 text-2xl font-bold">Veelgestelde Vragen</h3>
            <p className="mb-8 text-muted-foreground">
              Heb je snel een antwoord nodig? Bekijk onze FAQ pagina voor antwoorden op de meest gestelde vragen.
            </p>
            <a 
              href="/faq" 
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-white transition-all hover:bg-primary/90"
            >
              Bekijk FAQ →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
