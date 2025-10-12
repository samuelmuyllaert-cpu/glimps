import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Mail, FileText } from "lucide-react";

const Legal = () => {
  const legalDocuments = [
    {
      title: "Privacy Policy",
      description: "Hoe we omgaan met jouw persoonlijke gegevens"
    },
    {
      title: "Algemene Voorwaarden",
      description: "De voorwaarden voor het gebruik van onze diensten"
    },
    {
      title: "Cookie Policy",
      description: "Informatie over hoe we cookies gebruiken"
    },
    {
      title: "GDPR",
      description: "Onze naleving van de Europese privacywetgeving"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Juridische Documenten - Glimps AI"
        description="Privacy policy, algemene voorwaarden en juridische informatie van Glimps AI."
        path="/legal"
      />
      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Juridische Documenten
          </div>
          <h1 className="mb-6 font-inter text-4xl font-bold leading-tight md:text-6xl">
            Privacy & Voorwaarden
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Voor juridische documenten en informatie over privacy, algemene voorwaarden, cookies en GDPR, 
            neem contact met ons op via email.
          </p>
        </div>
      </section>

      {/* Documents Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 md:grid-cols-2">
            {legalDocuments.map((doc, index) => (
              <Card key={index} className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold">{doc.title}</h3>
                <p className="text-sm text-muted-foreground">{doc.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="mx-auto max-w-2xl">
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary">
              <Mail className="h-8 w-8 text-white" />
            </div>
            <h2 className="mb-4 text-2xl font-bold">Vraag Juridische Documenten Op</h2>
            <p className="mb-6 text-muted-foreground">
              Wil je een van deze documenten ontvangen? Neem contact met ons op via email en 
              we sturen je het gewenste document zo snel mogelijk toe.
            </p>
            <a
              href="mailto:info@glimps.be"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-white transition-all hover:bg-primary/90"
            >
              <Mail className="h-5 w-5" />
              info@glimps.be
            </a>
          </Card>
        </div>
      </section>

      {/* Additional Info */}
      <section className="border-t bg-muted/30 py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl">
            <h3 className="mb-6 text-center text-2xl font-bold">Transparantie & Privacy</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Bij Glimps hechten we veel waarde aan transparantie en de bescherming van jouw privacy. 
                Al onze processen zijn GDPR-compliant en voldoen aan de Europese privacywetgeving.
              </p>
              <p>
                Voor vragen over hoe we omgaan met data, privacy of onze algemene voorwaarden, 
                aarzel niet om contact met ons op te nemen. We beantwoorden graag al je vragen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Legal;
