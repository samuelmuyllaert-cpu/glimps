import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { Card } from "@/components/ui/card";
import { Handshake, TrendingUp, Users, Target, Zap, Award, Euro, CircleCheck as CheckCircle2, Headphones, BookOpen, Rocket } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Partners = () => {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={language === 'en'
          ? "Partner Program - Glimps AI | Become a partner"
          : language === 'fr'
          ? "Programme Partenaires - Glimps AI | Devenez partenaire"
          : "Partner Programma - Glimps AI | Word partner"}
        description={language === 'en'
          ? "Become a Glimps AI partner and help e-commerce businesses grow with the best AI chatbot solution. Dedicated support and marketing materials."
          : language === 'fr'
          ? "Devenez partenaire de Glimps AI et aidez les entreprises e-commerce à grandir avec la meilleure solution de chatbot IA. Support dédié et matériel marketing."
          : "Word partner van Glimps AI en help e-commerce bedrijven groeien met de beste AI chatbot oplossing. Dedicated support en marketing materialen."}
        path={language === 'en' ? "/en/partners" : language === 'fr' ? "/fr/partenaires" : "/partners"}
      />
      <StructuredData type="organization" />
      <StructuredData
        type="service"
        data={{
          name: language === 'en' ? "Glimps Partner Program" : language === 'fr' ? "Programme Partenaires Glimps" : "Glimps Partner Programma",
          description: language === 'en'
            ? "Become a Glimps AI partner with dedicated support and marketing materials"
            : language === 'fr'
            ? "Devenez partenaire de Glimps AI avec support dédié et matériel marketing"
            : "Word partner van Glimps AI met dedicated support en marketing materialen"
        }}
      />
      <StructuredData
        type="breadcrumb"
        data={[
          { name: "Home", url: language === 'en' ? "/en" : language === 'fr' ? "/fr" : "/" },
          { name: language === 'en' ? "Partners" : language === 'fr' ? "Partenaires" : "Partners", url: language === 'en' ? "/en/partners" : language === 'fr' ? "/fr/partenaires" : "/partners" }
        ]}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-background py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 sm:mb-6 inline-flex items-center justify-center rounded-full bg-primary/10 p-3 sm:p-4">
              <Handshake className="h-10 w-10 sm:h-12 sm:w-12 text-primary" />
            </div>
            <h1 className="mb-4 sm:mb-6 text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl px-4">
              {t('partners.hero.title')}
            </h1>
            <p className="mb-6 sm:mb-8 text-base sm:text-lg md:text-xl text-muted-foreground px-4">
              {t('partners.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-2 text-3xl sm:text-4xl font-bold text-primary">500+</div>
              <p className="text-sm sm:text-base text-muted-foreground">{t('partners.stats.customers')}</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl sm:text-4xl font-bold text-primary">24/7</div>
              <p className="text-sm sm:text-base text-muted-foreground">{t('partners.stats.support')}</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl sm:text-4xl font-bold text-primary">95%</div>
              <p className="text-sm sm:text-base text-muted-foreground">{t('partners.stats.satisfaction')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-10 sm:mb-12 lg:mb-16 text-center">
            <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold px-4">{t('partners.benefits.title')}</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
              {t('partners.benefits.subtitle')}
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6 sm:p-8">
              <div className="mb-3 sm:mb-4 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-primary/10">
                <Euro className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
              </div>
              <h3 className="mb-2 sm:mb-3 text-xl sm:text-2xl font-bold">{t('partners.benefits.commission.title')}</h3>
              <p className="mb-3 sm:mb-4 text-sm sm:text-base text-muted-foreground">
                {t('partners.benefits.commission.description')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-green-500" />
                  <span className="text-xs sm:text-sm">{t('partners.benefits.commission.transparent')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-green-500" />
                  <span className="text-xs sm:text-sm">{t('partners.benefits.commission.longterm')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-green-500" />
                  <span className="text-xs sm:text-sm">{t('partners.benefits.commission.flexible')}</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 sm:p-8">
              <div className="mb-3 sm:mb-4 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-primary/10">
                <Headphones className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
              </div>
              <h3 className="mb-2 sm:mb-3 text-xl sm:text-2xl font-bold">{t('partners.benefits.support.title')}</h3>
              <p className="mb-3 sm:mb-4 text-sm sm:text-base text-muted-foreground">
                {t('partners.benefits.support.description')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-green-500" />
                  <span className="text-xs sm:text-sm">{t('partners.benefits.support.manager')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-green-500" />
                  <span className="text-xs sm:text-sm">{t('partners.benefits.support.technical')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-green-500" />
                  <span className="text-xs sm:text-sm">{t('partners.benefits.support.community')}</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 sm:p-8">
              <div className="mb-3 sm:mb-4 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-primary/10">
                <BookOpen className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
              </div>
              <h3 className="mb-2 sm:mb-3 text-xl sm:text-2xl font-bold">{t('partners.benefits.materials.title')}</h3>
              <p className="mb-3 sm:mb-4 text-sm sm:text-base text-muted-foreground">
                {t('partners.benefits.materials.description')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-green-500" />
                  <span className="text-xs sm:text-sm">{t('partners.benefits.materials.decks')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-green-500" />
                  <span className="text-xs sm:text-sm">{t('partners.benefits.materials.comarketing')}</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 sm:p-8">
              <div className="mb-3 sm:mb-4 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-primary/10">
                <Zap className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
              </div>
              <h3 className="mb-2 sm:mb-3 text-xl sm:text-2xl font-bold">{t('partners.benefits.onboarding.title')}</h3>
              <p className="mb-3 sm:mb-4 text-sm sm:text-base text-muted-foreground">
                {t('partners.benefits.onboarding.description')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-green-500" />
                  <span className="text-xs sm:text-sm">{t('partners.benefits.onboarding.training')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-green-500" />
                  <span className="text-xs sm:text-sm">{t('partners.benefits.onboarding.certification')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-green-500" />
                  <span className="text-xs sm:text-sm">{t('partners.benefits.onboarding.dashboard')}</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 sm:p-8">
              <div className="mb-3 sm:mb-4 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-primary/10">
                <Target className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
              </div>
              <h3 className="mb-2 sm:mb-3 text-xl sm:text-2xl font-bold">{t('partners.benefits.leads.title')}</h3>
              <p className="mb-3 sm:mb-4 text-sm sm:text-base text-muted-foreground">
                {t('partners.benefits.leads.description')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-green-500" />
                  <span className="text-xs sm:text-sm">{t('partners.benefits.leads.qualified')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-green-500" />
                  <span className="text-xs sm:text-sm">{t('partners.benefits.leads.targeting')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-green-500" />
                  <span className="text-xs sm:text-sm">{t('partners.benefits.leads.matching')}</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 sm:p-8">
              <div className="mb-3 sm:mb-4 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-primary/10">
                <Rocket className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
              </div>
              <h3 className="mb-2 sm:mb-3 text-xl sm:text-2xl font-bold">{t('partners.benefits.grow.title')}</h3>
              <p className="mb-3 sm:mb-4 text-sm sm:text-base text-muted-foreground">
                {t('partners.benefits.grow.description')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-green-500" />
                  <span className="text-xs sm:text-sm">{t('partners.benefits.grow.tiered')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-green-500" />
                  <span className="text-xs sm:text-sm">{t('partners.benefits.grow.bonus')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-green-500" />
                  <span className="text-xs sm:text-sm">{t('partners.benefits.grow.events')}</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-10 sm:mb-12 lg:mb-16 text-center">
            <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold px-4">{t('partners.howItWorks.title')}</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
              {t('partners.howItWorks.subtitle')}
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-3 sm:mb-4 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-primary text-xl sm:text-2xl font-bold text-white mx-auto">
                1
              </div>
              <h3 className="mb-2 text-lg sm:text-xl font-bold px-2">{t('partners.howItWorks.step1.title')}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground px-2">
                {t('partners.howItWorks.step1.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="mb-3 sm:mb-4 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-primary text-xl sm:text-2xl font-bold text-white mx-auto">
                2
              </div>
              <h3 className="mb-2 text-lg sm:text-xl font-bold px-2">{t('partners.howItWorks.step2.title')}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground px-2">
                {t('partners.howItWorks.step2.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="mb-3 sm:mb-4 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-primary text-xl sm:text-2xl font-bold text-white mx-auto">
                3
              </div>
              <h3 className="mb-2 text-lg sm:text-xl font-bold px-2">{t('partners.howItWorks.step3.title')}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground px-2">
                {t('partners.howItWorks.step3.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="mb-3 sm:mb-4 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-primary text-xl sm:text-2xl font-bold text-white mx-auto">
                4
              </div>
              <h3 className="mb-2 text-lg sm:text-xl font-bold px-2">{t('partners.howItWorks.step4.title')}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground px-2">
                {t('partners.howItWorks.step4.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="border-t bg-gradient-to-br from-background to-primary/5 py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-8 sm:mb-12">
              <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold px-4">{t('partners.cta.title')}</h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 px-4">
                {t('partners.cta.subtitle')}
              </p>
              <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
                <p className="text-base sm:text-lg mb-3 sm:mb-4">
                  {t('partners.cta.email')} <a href="mailto:info@glimps.be" className="font-semibold text-primary hover:underline break-all">info@glimps.be</a>
                </p>
                <p className="text-sm sm:text-base text-muted-foreground">
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
