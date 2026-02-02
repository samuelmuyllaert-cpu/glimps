import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Printer,
  CheckCircle2,
  MessageSquare,
  Clock,
  Shield,
  Sparkles
} from "lucide-react";

const PrintingWinkel = () => {
  const { language } = useLanguage();

  useEffect(() => {
    const script = document.createElement('script');
    script.id = "";
    script.type = 'text/javascript';
    script.charset = "";
    script.src = 'https://widgets.glimps.group/integrations/widget/v2.js?widget=cmklndrqs2v9vygfq4vu66wci';
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src*="widgets.glimps.group"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const content = language === 'fr' ? {
    title: "Bienvenue",
    subtitle: "3D Printing Winkel",
    heading: "À votre assistant IA personnel",
    description: "Nous sommes là pour vous aider ! Vous avez des questions sur nos imprimantes 3D, nos filaments, notre résine ou d'autres produits d'impression 3D ? N'hésitez pas à poser votre question via le chat.",
    feature1Title: "Toujours disponible",
    feature1Desc: "Posez toutes vos questions sur nos produits quand cela vous convient",
    feature2Title: "Jour et nuit",
    feature2Desc: "Nous sommes également là pour vous aider en dehors des heures de bureau",
    feature3Title: "Conforme RGPD",
    feature3Desc: "Glimps est conforme au RGPD et respecte votre vie privée",
    howItWorksTitle: "Comment le bot aide les clients",
    howItWorksDesc: "Cliquez sur le chat en bas à droite et posez votre question",
    examplesTitle: "Par exemple",
    seoTitle: "Bienvenue chez 3D Printing Winkel",
    seoDescription: "Bienvenue chez 3D Printing Winkel - Nous sommes heureux de vous aider avec vos questions sur les imprimantes 3D, les filaments et les accessoires d'impression 3D"
  } : {
    title: "Welkom",
    subtitle: "3D Printing Winkel",
    heading: "Bij je persoonlijke AI assistent",
    description: "We zijn er om je te helpen! Heb je vragen over onze 3D printers, filamenten, resin of andere 3D printing producten? Stel gerust je vraag via de chat.",
    feature1Title: "Altijd voor je klaar",
    feature1Desc: "Stel al je vragen over onze producten wanneer het jou uitkomt",
    feature2Title: "Dag en nacht",
    feature2Desc: "Ook buiten kantooruren staan we voor je klaar om te helpen",
    feature3Title: "GDPR conform",
    feature3Desc: "Glimps is GDPR conform en respecteert jouw privacy",
    howItWorksTitle: "Hoe de bot klanten helpt",
    howItWorksDesc: "Klik rechtsonder op de chat en stel je vraag",
    examplesTitle: "Bijvoorbeeld",
    seoTitle: "Welkom bij 3D Printing Winkel",
    seoDescription: "Welkom bij 3D Printing Winkel - We helpen je graag met vragen over 3D printers, filamenten en 3D printing accessoires"
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={content.seoTitle}
        description={content.seoDescription}
        path={language === 'fr' ? '/fr/3dprintingwinkel' : '/3dprintingwinkel'}
        language={language}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 font-inter text-4xl font-bold leading-tight md:text-6xl md:leading-tight">
            {content.title}<br />
            <span className="text-primary">{content.subtitle}</span><br />
            {content.heading}
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            {content.description}
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold">{content.feature1Title}</h3>
              <p className="text-sm text-muted-foreground">
                {content.feature1Desc}
              </p>
            </Card>

            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold">{content.feature2Title}</h3>
              <p className="text-sm text-muted-foreground">
                {content.feature2Desc}
              </p>
            </Card>

            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold">{content.feature3Title}</h3>
              <p className="text-sm text-muted-foreground">
                {content.feature3Desc}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
              <Sparkles className="h-7 w-7 text-primary" />
            </div>
            <h2 className="mb-4 text-3xl font-bold">{content.howItWorksTitle}</h2>
            <p className="text-muted-foreground">
              {content.howItWorksDesc}
            </p>
          </div>

          <Card className="p-8 md:p-12">
            <h3 className="mb-8 text-xl font-semibold">{content.examplesTitle}</h3>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <p className="mb-1 font-medium">Welke printer past bij mij?</p>
                  <p className="text-sm text-muted-foreground">
                    "Ik zoek een beginnersvriendelijke 3D printer"
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <p className="mb-1 font-medium">FDM of Resin printer?</p>
                  <p className="text-sm text-muted-foreground">
                    "Wat is het verschil tussen FDM en resin printing?"
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <p className="mb-1 font-medium">Filament keuze</p>
                  <p className="text-sm text-muted-foreground">
                    "Welk filament gebruik ik voor functionele onderdelen?"
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <p className="mb-1 font-medium">Technische specificaties</p>
                  <p className="text-sm text-muted-foreground">
                    "Wat is de maximale printgrootte van deze printer?"
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <p className="mb-1 font-medium">Levering en voorraad</p>
                  <p className="text-sm text-muted-foreground">
                    "Wanneer is dit filament weer op voorraad?"
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <p className="mb-1 font-medium">Onderhoud en problemen</p>
                  <p className="text-sm text-muted-foreground">
                    "Hoe kalibreer ik mijn printer optimaal?"
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrintingWinkel;
