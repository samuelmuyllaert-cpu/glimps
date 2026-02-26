import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { Lock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const EcomAgents = () => {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={language === 'fr'
          ? "Agents E-commerce - Glimps AI | Automatisation E-commerce Avancée"
          : "Ecom Agents - Glimps AI | Geavanceerde E-commerce Automatisering"}
        description={language === 'fr'
          ? "Découvrez Glimps Agents E-commerce : la prochaine génération d'automatisation IA pour le e-commerce. Bientôt disponible pour l'automatisation avancée des workflows et l'optimisation intelligente de la conversion."
          : "Ontdek Glimps Ecom Agents: de volgende generatie AI-automatisering voor e-commerce. Binnenkort beschikbaar voor geavanceerde workflow automation en intelligente conversie optimalisatie."}
        path={language === 'fr' ? "/fr/agents-ecom" : "/ecom-agents"}
        keywords={language === 'fr'
          ? "agents ecommerce, automatisation e-commerce, agents IA, automatisation workflow, optimisation conversion, chatbot avancé"
          : "ecom agents, e-commerce automation, AI agents, workflow automation, conversie optimalisatie, advanced chatbot"}
      />
      <StructuredData
        type="webpage"
        data={{
          name: language === 'fr' ? "Agents E-commerce - Glimps AI" : "Ecom Agents - Glimps AI",
          description: language === 'fr'
            ? "Agents IA avancés pour l'automatisation e-commerce et l'optimisation des workflows"
            : "Geavanceerde AI agents voor e-commerce automatisering en workflow optimalisatie",
          url: language === 'fr' ? "https://www.glimps.be/fr/agents-ecom" : "https://www.glimps.be/ecom-agents"
        }}
      />
      <Navigation />
      <div className="container mx-auto px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-primary/10 p-6">
                <Lock className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="mb-4 text-4xl font-bold">{t('ecomAgents.title')}</h1>
            <p className="mb-6 text-xl text-muted-foreground">
              {t('ecomAgents.subtitle')}
            </p>
            <div className="rounded-lg border border-border bg-card p-6">
              <p className="text-lg">
                {t('ecomAgents.description')}
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                {t('ecomAgents.contact')} <a href="mailto:info@glimps.be" className="font-semibold text-primary hover:underline">info@glimps.be</a> {t('ecomAgents.forInfo')}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EcomAgents;
