import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Mail, FileText } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Legal = () => {
  const { language } = useLanguage();

  const legalDocuments = language === 'fr' ? [
    {
      title: "Politique de Confidentialité",
      description: "Comment nous gérons vos données personnelles"
    },
    {
      title: "Conditions Générales",
      description: "Les conditions d'utilisation de nos services"
    },
    {
      title: "Politique des Cookies",
      description: "Informations sur l'utilisation des cookies"
    },
    {
      title: "RGPD",
      description: "Notre conformité à la législation européenne sur la vie privée"
    }
  ] : [
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
        title={language === 'fr' ? "Documents Juridiques - Glimps AI" : "Juridische Documenten - Glimps AI"}
        description={language === 'fr'
          ? "Politique de confidentialité, conditions générales et informations juridiques de Glimps AI."
          : "Privacy policy, algemene voorwaarden en juridische informatie van Glimps AI."
        }
        path={language === 'fr' ? "/fr/legal" : "/legal"}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            {language === 'fr' ? 'Documents Juridiques' : 'Juridische Documenten'}
          </div>
          <h1 className="mb-6 font-inter text-4xl font-bold leading-tight md:text-6xl">
            {language === 'fr' ? 'Confidentialité & Conditions' : 'Privacy & Voorwaarden'}
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            {language === 'fr'
              ? "Pour les documents juridiques et les informations sur la confidentialité, les conditions générales, les cookies et le RGPD, contactez-nous par e-mail."
              : "Voor juridische documenten en informatie over privacy, algemene voorwaarden, cookies en GDPR, neem contact met ons op via email."
            }
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
            <h2 className="mb-4 text-2xl font-bold">
              {language === 'fr' ? 'Demander des Documents Juridiques' : 'Vraag Juridische Documenten Op'}
            </h2>
            <p className="mb-6 text-muted-foreground">
              {language === 'fr'
                ? "Vous souhaitez recevoir l'un de ces documents ? Contactez-nous par e-mail et nous vous enverrons le document souhaité dans les plus brefs délais."
                : "Wil je een van deze documenten ontvangen? Neem contact met ons op via email en we sturen je het gewenste document zo snel mogelijk toe."
              }
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
            <h3 className="mb-6 text-center text-2xl font-bold">
              {language === 'fr' ? 'Transparence & Confidentialité' : 'Transparantie & Privacy'}
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                {language === 'fr'
                  ? "Chez Glimps, nous accordons une grande importance à la transparence et à la protection de votre vie privée. Tous nos processus sont conformes au RGPD et respectent la législation européenne sur la protection des données."
                  : "Bij Glimps hechten we veel waarde aan transparantie en de bescherming van jouw privacy. Al onze processen zijn GDPR-compliant en voldoen aan de Europese privacywetgeving."
                }
              </p>
              <p>
                {language === 'fr'
                  ? "Pour toute question sur la gestion de vos données, la confidentialité ou nos conditions générales, n'hésitez pas à nous contacter. Nous serons ravis de répondre à toutes vos questions."
                  : "Voor vragen over hoe we omgaan met data, privacy of onze algemene voorwaarden, aarzel niet om contact met ons op te nemen. We beantwoorden graag al je vragen."
                }
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
