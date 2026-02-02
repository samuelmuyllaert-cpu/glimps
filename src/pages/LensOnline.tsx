import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Eye,
  CheckCircle2,
  MessageSquare,
  Clock,
  Shield,
  Sparkles
} from "lucide-react";

const LensOnline = () => {
  const { language } = useLanguage();

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://widgets.glimps.group/integrations/widget/v2.js?widget=cmahzsmr139usin6z1lvlvxi0';
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
    subtitle: "LensOnline",
    heading: "À votre assistant IA personnel",
    description: "Nous sommes là pour vous aider ! Vous avez des questions sur les lentilles de contact, les lunettes, les soins oculaires ou d'autres produits ? N'hésitez pas à poser votre question via le chat.",
    feature1Title: "Toujours disponible",
    feature1Desc: "Posez toutes vos questions sur nos produits quand cela vous convient",
    feature2Title: "Jour et nuit",
    feature2Desc: "Nous sommes également là pour vous aider en dehors des heures de bureau",
    feature3Title: "Conforme RGPD",
    feature3Desc: "Glimps est conforme au RGPD et respecte votre vie privée",
    howItWorksTitle: "Comment le bot aide les clients",
    howItWorksDesc: "Cliquez sur le chat en bas à droite et posez votre question",
    examplesTitle: "Par exemple",
    example1Title: "Quelles lentilles me conviennent ?",
    example1Desc: "Je recherche des lentilles journalières très respirantes",
    example2Title: "Ma puissance et spécifications",
    example2Desc: "Comment trouver la bonne puissance pour mes lentilles ?",
    example3Title: "Lunettes et montures",
    example3Desc: "Quelles lunettes avez-vous dans ma puissance ?",
    example4Title: "Entretien et soins",
    example4Desc: "Quelle solution pour lentilles recommandez-vous ?",
    example5Title: "Prix et livraison",
    example5Desc: "Quand puis-je recevoir ma commande ?",
    example6Title: "Réclamations et retours",
    example6Desc: "Comment puis-je retourner mes lentilles ?",
    seoTitle: "Bienvenue chez LensOnline",
    seoDescription: "Bienvenue chez LensOnline - Nous sommes heureux de vous aider avec vos questions sur les lentilles de contact, les lunettes et les soins oculaires"
  } : {
    title: "Welkom",
    subtitle: "LensOnline",
    heading: "Bij je persoonlijke AI assistent",
    description: "We zijn er om je te helpen! Heb je vragen over contactlenzen, brillen, oogzorg of andere producten? Stel gerust je vraag via de chat.",
    feature1Title: "Altijd voor je klaar",
    feature1Desc: "Stel al je vragen over onze producten wanneer het jou uitkomt",
    feature2Title: "Dag en nacht",
    feature2Desc: "Ook buiten kantooruren staan we voor je klaar om te helpen",
    feature3Title: "GDPR conform",
    feature3Desc: "Glimps is GDPR conform en respecteert jouw privacy",
    howItWorksTitle: "Hoe de bot klanten helpt",
    howItWorksDesc: "Klik rechtsonder op de chat en stel je vraag",
    examplesTitle: "Bijvoorbeeld",
    example1Title: "Welke lenzen passen bij mij?",
    example1Desc: "Ik zoek daglenzen met hoge ademendheid",
    example2Title: "Mijn sterkte en specificaties",
    example2Desc: "Hoe vind ik de juiste sterkte voor mijn lenzen?",
    example3Title: "Brillen en monturen",
    example3Desc: "Welke brillen hebben jullie in mijn sterkte?",
    example4Title: "Verzorging en onderhoud",
    example4Desc: "Welke lenzenvloeistof adviseren jullie?",
    example5Title: "Prijs en levering",
    example5Desc: "Wanneer kan ik mijn bestelling ontvangen?",
    example6Title: "Klachten en retourneren",
    example6Desc: "Hoe kan ik mijn lenzen retourneren?",
    seoTitle: "Welkom bij LensOnline",
    seoDescription: "Welkom bij LensOnline - We helpen je graag met vragen over contactlenzen, brillen en oogzorg"
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={content.seoTitle}
        description={content.seoDescription}
        path={language === 'fr' ? '/fr/lensonline' : '/lensonline'}
        language={language}
      />
      <Navigation />

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
                  <p className="mb-1 font-medium">{content.example1Title}</p>
                  <p className="text-sm text-muted-foreground">
                    "{content.example1Desc}"
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <p className="mb-1 font-medium">{content.example2Title}</p>
                  <p className="text-sm text-muted-foreground">
                    "{content.example2Desc}"
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <p className="mb-1 font-medium">{content.example3Title}</p>
                  <p className="text-sm text-muted-foreground">
                    "{content.example3Desc}"
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <p className="mb-1 font-medium">{content.example4Title}</p>
                  <p className="text-sm text-muted-foreground">
                    "{content.example4Desc}"
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <p className="mb-1 font-medium">{content.example5Title}</p>
                  <p className="text-sm text-muted-foreground">
                    "{content.example5Desc}"
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <p className="mb-1 font-medium">{content.example6Title}</p>
                  <p className="text-sm text-muted-foreground">
                    "{content.example6Desc}"
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

export default LensOnline;
