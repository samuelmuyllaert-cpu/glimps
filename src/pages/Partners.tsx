import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { Card } from "@/components/ui/card";
import {
  Handshake,
  TrendingUp,
  Users,
  Target,
  Zap,
  Award,
  Euro,
  CheckCircle2,
  Headphones,
  BookOpen,
  Rocket,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Partners = () => {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={language === 'fr'
          ? "Programme Partenaires - Glimps AI | Devenez partenaire"
          : "Partner Programma - Glimps AI | Word partner"}
        description={language === 'fr'
          ? "Devenez partenaire de Glimps AI et aidez les entreprises e-commerce à grandir avec la meilleure solution de chatbot IA. Support dédié et matériel marketing."
          : "Word partner van Glimps AI en help e-commerce bedrijven groeien met de beste AI chatbot oplossing. Dedicated support en marketing materialen."}
        path={language === 'fr' ? "/fr/partenaires" : "/partners"}
      />
      <StructuredData type="organization" />
      <StructuredData
        type="service"
        data={{
          name: language === 'fr' ? "Programme Partenaires Glimps" : "Glimps Partner Programma",
          description: language === 'fr'
            ? "Devenez partenaire de Glimps AI avec support dédié et matériel marketing"
            : "Word partner van Glimps AI met dedicated support en marketing materialen"
        }}
      />
      <StructuredData
        type="breadcrumb"
        data={[
          { name: "Home", url: language === 'fr' ? "/fr" : "/" },
          { name: language === 'fr' ? "Partenaires" : "Partners", url: language === 'fr' ? "/fr/partenaires" : "/partners" }
        ]}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-background py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center justify-center rounded-full bg-primary/10 p-4">
              <Handshake className="h-12 w-12 text-primary" />
            </div>
            <h1 className="mb-6 text-5xl font-bold md:text-6xl">
              {t('partners.hero.title')}
            </h1>
            <p className="mb-8 text-xl text-muted-foreground">
              {t('partners.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">500+</div>
              <p className="text-muted-foreground">{t('partners.stats.customers')}</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">24/7</div>
              <p className="text-muted-foreground">{t('partners.stats.support')}</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">95%</div>
              <p className="text-muted-foreground">{t('partners.stats.satisfaction')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold">{t('partners.benefits.title')}</h2>
            <p className="text-xl text-muted-foreground">
              {t('partners.benefits.subtitle')}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="p-8">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <Euro className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 text-2xl font-bold">{t('partners.benefits.commission.title')}</h3>
              <p className="mb-4 text-muted-foreground">
                {t('partners.benefits.commission.description')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm">{t('partners.benefits.commission.transparent')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm">{t('partners.benefits.commission.longterm')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm">{t('partners.benefits.commission.flexible')}</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <Headphones className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 text-2xl font-bold">{t('partners.benefits.support.title')}</h3>
              <p className="mb-4 text-muted-foreground">
                {t('partners.benefits.support.description')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm">{t('partners.benefits.support.manager')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm">{t('partners.benefits.support.technical')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm">{t('partners.benefits.support.community')}</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <BookOpen className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 text-2xl font-bold">{t('partners.benefits.materials.title')}</h3>
              <p className="mb-4 text-muted-foreground">
                {t('partners.benefits.materials.description')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm">{t('partners.benefits.materials.decks')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm">{t('partners.benefits.materials.comarketing')}</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <Zap className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 text-2xl font-bold">{t('partners.benefits.onboarding.title')}</h3>
              <p className="mb-4 text-muted-foreground">
                {t('partners.benefits.onboarding.description')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm">{t('partners.benefits.onboarding.training')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm">{t('partners.benefits.onboarding.certification')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm">{t('partners.benefits.onboarding.dashboard')}</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 text-2xl font-bold">{t('partners.benefits.leads.title')}</h3>
              <p className="mb-4 text-muted-foreground">
                {t('partners.benefits.leads.description')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm">{t('partners.benefits.leads.qualified')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm">{t('partners.benefits.leads.targeting')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm">{t('partners.benefits.leads.matching')}</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <Rocket className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 text-2xl font-bold">{t('partners.benefits.grow.title')}</h3>
              <p className="mb-4 text-muted-foreground">
                {t('partners.benefits.grow.description')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm">{t('partners.benefits.grow.tiered')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm">{t('partners.benefits.grow.bonus')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm">{t('partners.benefits.grow.events')}</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold">{t('partners.howItWorks.title')}</h2>
            <p className="text-xl text-muted-foreground">
              {t('partners.howItWorks.subtitle')}
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white mx-auto">
                1
              </div>
              <h3 className="mb-2 text-xl font-bold">{t('partners.howItWorks.step1.title')}</h3>
              <p className="text-sm text-muted-foreground">
                {t('partners.howItWorks.step1.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white mx-auto">
                2
              </div>
              <h3 className="mb-2 text-xl font-bold">{t('partners.howItWorks.step2.title')}</h3>
              <p className="text-sm text-muted-foreground">
                {t('partners.howItWorks.step2.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white mx-auto">
                3
              </div>
              <h3 className="mb-2 text-xl font-bold">{t('partners.howItWorks.step3.title')}</h3>
              <p className="text-sm text-muted-foreground">
                {t('partners.howItWorks.step3.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white mx-auto">
                4
              </div>
              <h3 className="mb-2 text-xl font-bold">{t('partners.howItWorks.step4.title')}</h3>
              <p className="text-sm text-muted-foreground">
                {t('partners.howItWorks.step4.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="border-t bg-gradient-to-br from-background to-primary/5 py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-12">
              <h2 className="mb-4 text-4xl font-bold">{t('partners.cta.title')}</h2>
              <p className="text-xl text-muted-foreground mb-8">
                {t('partners.cta.subtitle')}
              </p>
              <div className="rounded-lg border border-border bg-card p-8">
                <p className="text-lg mb-4">
                  {t('partners.cta.email')} <a href="mailto:info@glimps.be" className="font-semibold text-primary hover:underline">info@glimps.be</a>
                </p>
                <p className="text-muted-foreground">
                  {t('partners.cta.response')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;
