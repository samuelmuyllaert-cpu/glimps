import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Target, TrendingUp, Lightbulb, Zap, Heart } from "lucide-react";
import samuelPhoto from "@/assets/samuel.png";
import tomPhoto from "@/assets/tom.png";
import SEO from "@/components/SEO";
import StructuredData, { baseOrganization } from "@/components/StructuredData";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  const graphData = [
    {
      "@type": "AboutPage",
      "@id": "https://www.glimps.be/about",
      "url": "https://www.glimps.be/about",
      "name": "Over Ons - Glimps AI",
      "description": "Ontmoet de oprichters van Glimps AI. Twee ondernemers met sterke marketingachtergrond die AI-chatbots zien als dé tool voor meer omzet en betere klantenservice.",
      "inLanguage": "nl-BE",
      "isPartOf": {
        "@id": "https://www.glimps.be#website"
      },
      "publisher": {
        "@id": "https://www.glimps.be#organization"
      },
      "mainEntity": {
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
          "name": "Over Ons",
          "item": "https://www.glimps.be/about"
        }
      ]
    }
  ];

  return <div className="min-h-screen bg-background">
      <SEO 
        title="Over Ons - Glimps AI | Marketing-gedreven AI Chatbot"
        description="Ontmoet de oprichters van Glimps AI. Twee ondernemers met sterke marketingachtergrond die AI-chatbots zien als dé tool voor meer omzet en betere klantenservice."
        path="/about"
        canonical="https://www.glimps.be/about"
        keywords="over glimps, oprichters, Samuel Muyllaert, Tom Muyllaert, AI chatbot team, marketing achtergrond"
        type="website"
      />
      <StructuredData type="graph" data={graphData} />
      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24 text-center">
        <div className="mx-auto max-w-4xl space-y-6">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            {t('about.tagline')}
          </p>
          <h1 className="font-inter text-4xl font-bold leading-tight md:text-6xl">
            {t('about.title')}
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Team Section */}
        <div className="mx-auto mt-24 grid max-w-5xl gap-12 md:grid-cols-2">
          {/* Samuel */}
          <div className="space-y-6">
            <div className="mx-auto h-48 w-48 overflow-hidden rounded-full bg-gradient-to-br from-primary/20 to-primary/5 p-1">
              <img src={samuelPhoto} alt="Samuel Muyllaert" className="h-full w-full rounded-full object-cover" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Samuel Muyllaert</h3>
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                {t('about.cofounder')}
              </span>
            </div>
            <p className="text-muted-foreground">
              {t('about.samuel.description')}
            </p>
            <Button variant="default" className="rounded-full" onClick={() => window.open('https://www.linkedin.com/in/samuel-muyllaert-17311823a/', '_blank')}>
              {t('about.linkedinProfile')}
            </Button>
          </div>

          {/* Tom */}
          <div className="space-y-6">
            <div className="mx-auto h-48 w-48 overflow-hidden rounded-full bg-gradient-to-br from-primary/20 to-primary/5 p-1">
              <img src={tomPhoto} alt="Tom Muyllaert" className="h-full w-full rounded-full object-cover" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Tom Muyllaert</h3>
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                {t('about.cofounder')}
              </span>
            </div>
            <p className="text-muted-foreground">
              {t('about.tom.description')}
            </p>
            <Button variant="default" className="rounded-full" onClick={() => window.open('https://www.linkedin.com/in/tmuyllaert/', '_blank')}>
              {t('about.linkedinProfile')}
            </Button>
          </div>
        </div>

        {/* Developers Network */}
        <div className="mx-auto mt-24 max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 text-center">
            <h3 className="mb-4 text-2xl font-bold">{t('about.developersNetwork.title')}</h3>
            <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
              {t('about.developersNetwork.description')}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                LB
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                MV
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                AD
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                JS
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                KR
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">BS</div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                EP
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                NB
              </div>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              {t('about.developersNetwork.teamWork')}
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="container mx-auto px-6 py-24">
        <Card className="mx-auto max-w-4xl p-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">{t('about.vision.title')}</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>{t('about.vision.paragraph1')}</p>
              <p>{t('about.vision.paragraph2')}</p>
              <p>{t('about.vision.paragraph3')}</p>
            </div>
          </div>
        </Card>
      </section>

      {/* Approach Section */}
      <section className="container mx-auto px-6 py-24">
        <h2 className="mb-16 text-center text-4xl font-bold">{t('about.approach.title')}</h2>
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          <Card className="p-8">
            <div className="space-y-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">{t('about.approach.marketing.title')}</h3>
              <p className="text-muted-foreground">
                {t('about.approach.marketing.description')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span className="text-muted-foreground">{t('about.approach.marketing.items.0')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span className="text-muted-foreground">{t('about.approach.marketing.items.1')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span className="text-muted-foreground">{t('about.approach.marketing.items.2')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span className="text-muted-foreground">{t('about.approach.marketing.items.3')}</span>
                </li>
              </ul>
            </div>
          </Card>

          <Card className="p-8">
            <div className="space-y-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">{t('about.approach.collaboration.title')}</h3>
              <p className="text-muted-foreground">
                {t('about.approach.collaboration.paragraph1')}
              </p>
              <p className="text-muted-foreground">
                {t('about.approach.collaboration.paragraph2')}
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Core Principles */}
      <section className="container mx-auto px-6 py-24">
        <h2 className="mb-16 text-center text-4xl font-bold">{t('about.principles.title')}</h2>
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-primary bg-background">
              <Zap className="h-10 w-10 text-primary" />
            </div>
            <h3 className="mb-4 text-2xl font-bold">{t('about.principles.automation.title')}</h3>
            <p className="text-muted-foreground">
              {t('about.principles.automation.description')}
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-primary bg-background">
              <TrendingUp className="h-10 w-10 text-primary" />
            </div>
            <h3 className="mb-4 text-2xl font-bold">{t('about.principles.revenue.title')}</h3>
            <p className="text-muted-foreground">
              {t('about.principles.revenue.description')}
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-primary bg-background">
              <Heart className="h-10 w-10 text-primary" />
            </div>
            <h3 className="mb-4 text-2xl font-bold">{t('about.principles.loyalty.title')}</h3>
            <p className="text-muted-foreground">
              {t('about.principles.loyalty.description')}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default About;