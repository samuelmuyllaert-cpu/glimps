import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Sparkles, LucideIcon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface IndustryTemplateProps {
  industryKey: 'fashion' | 'beauty' | 'electronics' | 'furniture' | 'sports' | 'garden';
  Icon: LucideIcon;
  Icon2: LucideIcon;
  Icon3: LucideIcon;
  seoTitleNL: string;
  seoTitleFR: string;
  seoDescriptionNL: string;
  seoDescriptionFR: string;
  pathNL: string;
  pathFR: string;
  keywordsNL: string;
  keywordsFR: string;
}

const IndustryTemplate = ({
  industryKey,
  Icon,
  Icon2,
  Icon3,
  seoTitleNL,
  seoTitleFR,
  seoDescriptionNL,
  seoDescriptionFR,
  pathNL,
  pathFR,
  keywordsNL,
  keywordsFR
}: IndustryTemplateProps) => {
  const { language, t } = useLanguage();
  const industry = t(`industries.${industryKey}`);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={language === 'fr' ? seoTitleFR : seoTitleNL}
        description={language === 'fr' ? seoDescriptionFR : seoDescriptionNL}
        path={language === 'fr' ? pathFR : pathNL}
        keywords={language === 'fr' ? keywordsFR : keywordsNL}
      />
      <StructuredData
        type="webpage"
        data={{
          name: industry.title,
          description: industry.subtitle,
          url: language === 'fr'
            ? `https://www.glimps.be${pathFR}`
            : `https://www.glimps.be${pathNL}`
        }}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-visible px-6 py-20">
        <div className="pointer-events-none absolute bottom-[-200px] left-1/2 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-br from-[#e6575e]/30 via-[#f88a8f]/40 to-[#e6575e]/30 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            {industry.badge}
          </span>
          <h1 className="mb-6 font-inter text-4xl font-normal leading-tight text-foreground md:text-5xl lg:text-6xl">
            {industry.title}
          </h1>
          <p className="mb-10 text-lg text-muted-foreground md:text-xl">
            {industry.subtitle}
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild variant="hero" size="lg" className="rounded-full">
              <a href={language === 'fr' ? "/fr/demo" : "/demo"}>
                <Sparkles className="h-5 w-5" />
                {industry.cta.trial}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <a href={language === 'fr' ? "/fr/demo" : "/demo"}>{industry.cta.demo}</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center font-inter text-3xl font-normal md:text-4xl">
            {industry.whyTitle}
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-border/50 bg-card p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">
                {Object.values(industry.benefits)[0].title}
              </h3>
              <p className="text-muted-foreground">
                {Object.values(industry.benefits)[0].desc}
              </p>
            </div>

            <div className="rounded-2xl border border-border/50 bg-card p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Icon2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">
                {Object.values(industry.benefits)[1].title}
              </h3>
              <p className="text-muted-foreground">
                {Object.values(industry.benefits)[1].desc}
              </p>
            </div>

            <div className="rounded-2xl border border-border/50 bg-card p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Icon3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">
                {Object.values(industry.benefits)[2].title}
              </h3>
              <p className="text-muted-foreground">
                {Object.values(industry.benefits)[2].desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center font-inter text-3xl font-normal md:text-4xl">
            {industry.useCasesTitle}
          </h2>
          <div className="space-y-4">
            {industry.useCases.map((item: string, index: number) => (
              <div key={index} className="flex items-start gap-4 rounded-xl border border-border/50 bg-card p-6">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-primary" />
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 p-12 text-center">
          <h2 className="mb-6 font-inter text-3xl font-normal md:text-4xl">
            {industry.ctaTitle}
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            {industry.ctaSubtitle}
          </p>
          <Button asChild variant="hero" size="lg" className="rounded-full">
            <a href={language === 'fr' ? "/fr/demo" : "/demo"}>
              {industry.ctaButton || industry.cta.trial}
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndustryTemplate;
