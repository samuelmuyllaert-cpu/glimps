import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Sparkles, CircleCheck as CheckCircle2, MessageSquare, Clock, Shield, Zap } from "lucide-react";

const KMStore = () => {
  const { language } = useLanguage();

  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'chatbotkit-widget';
    script.src = 'https://static.chatbotkit.com/integrations/widget/v2.js';
    script.setAttribute('data-widget', 'cmklndrqs2v9vygfq4vu66wci');
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script#chatbotkit-widget');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const content = language === 'fr' ? {
    title: "Bienvenue chez",
    subtitle: "KM.Store",
    heading: "Votre assistant IA pour les soins Kevin Murphy",
    description: "Nous sommes heureux de vous aider! Avez-vous des questions sur les produits KEVIN.MURPHY, les soins capillaires, les traitements ou les conseils en coiffure? N'hésitez pas à poser votre question via le chat.",
    feature1Title: "Conseils d'experts",
    feature1Desc: "Bénéficiez de l'expertise de professionnels certifiés KEVIN.MURPHY",
    feature2Title: "Disponible 24h/24",
    feature2Desc: "Posez vos questions à tout moment, même en dehors des heures de bureau",
    feature3Title: "Sécurisé et conforme",
    feature3Desc: "Vos données sont protégées et le service est conforme au RGPD",
    howItWorksTitle: "Comment le bot vous aide",
    howItWorksDesc: "Cliquez sur le chat en bas à droite et posez votre question sur nos produits KEVIN.MURPHY",
    examplesTitle: "Par exemple",
    example1Title: "Quel produit pour mes cheveux?",
    example1Desc: "Je cherche un shampooing pour cheveux secs et abîmés",
    example2Title: "Conseils de coiffage",
    example2Desc: "Comment créer une texture bouclée avec les produits KEVIN.MURPHY?",
    example3Title: "Traitement capillaire",
    example3Desc: "Quel soin recommandez-vous pour nourrir mes cheveux?",
    example4Title: "Ingrédients et composition",
    example4Desc: "Vos produits sont-ils vraiment sans sulfates et sans parabènes?",
    example5Title: "Livraison et commande",
    example5Desc: "Combien de temps pour recevoir ma commande?",
    example6Title: "Conseils d'utilisation",
    example6Desc: "Comment utiliser les produits KEVIN.MURPHY correctement?",
    seoTitle: "KM.Store - Assistant IA pour produits KEVIN.MURPHY",
    seoDescription: "Bienvenue chez KM.Store - Découvrez l'assistant IA qui vous aide avec les produits KEVIN.MURPHY pour les soins capillaires professionnels"
  } : {
    title: "Welkom bij",
    subtitle: "KM.Store",
    heading: "Jouw AI assistent voor KEVIN.MURPHY haarverzorg",
    description: "We zijn hier om je te helpen! Heb je vragen over KEVIN.MURPHY producten, haarverzorging, behandelingen of stylingtips? Stel gerust je vraag via de chat.",
    feature1Title: "Advies van experts",
    feature1Desc: "Profiteer van de expertise van KEVIN.MURPHY gecertificeerde professionals",
    feature2Title: "24 uur beschikbaar",
    feature2Desc: "Stel je vragen op elk moment, ook buiten kantooruren",
    feature3Title: "Veilig en GDPR-conform",
    feature3Desc: "Je gegevens zijn beschermd en de service is GDPR-compliant",
    howItWorksTitle: "Hoe de bot je helpt",
    howItWorksDesc: "Klik rechtsonder op de chat en stel je vraag over onze KEVIN.MURPHY producten",
    examplesTitle: "Bijvoorbeeld",
    example1Title: "Welk product past bij mijn haar?",
    example1Desc: "Ik zoek een shampoo voor droog en beschadigd haar",
    example2Title: "Stylingtips",
    example2Desc: "Hoe creëer ik een krullende textuur met KEVIN.MURPHY producten?",
    example3Title: "Haarbehandeling",
    example3Desc: "Welke behandeling bevelen jullie aan voor voeding?",
    example4Title: "Ingrediënten en samenstelling",
    example4Desc: "Zijn uw producten echt vrij van sulfaten en parabenen?",
    example5Title: "Verzending en bestelling",
    example5Desc: "Hoe lang duurt het om mijn bestelling te ontvangen?",
    example6Title: "Gebruikstips",
    example6Desc: "Hoe gebruik je KEVIN.MURPHY producten correct?",
    seoTitle: "KM.Store - AI assistent voor KEVIN.MURPHY producten",
    seoDescription: "Welkom bij KM.Store - Ontdek de AI assistent die je helpt met KEVIN.MURPHY producten voor professionele haarverzorging"
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={content.seoTitle}
        description={content.seoDescription}
        path={language === 'fr' ? '/fr/kmstore' : '/kmstore'}
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
                <Sparkles className="h-6 w-6 text-primary" />
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
              <Zap className="h-7 w-7 text-primary" />
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

export default KMStore;
