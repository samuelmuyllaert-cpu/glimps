import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import WhyDifferent from "@/components/WhyDifferent";
import AIJourney from "@/components/AIJourney";
import Integrations from "@/components/Integrations";
import AIKnowledge from "@/components/AIKnowledge";
import ProductFeatures from "@/components/ProductFeatures";
import HowItWorks from "@/components/HowItWorks";
import Quote from "@/components/Quote";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ChatbotComparison from "@/components/ChatbotComparison";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Glimps - AI Chatbot voor E-commerce | Verhoog Conversie"
        description="Slimme AI chatbot die je webshop bezoekers begeleidt naar de perfecte producten. Verhoog conversie met persoonlijke aanbevelingen 24/7."
        path="/"
        canonical="https://www.glimps.be"
        keywords="AI chatbot, e-commerce, webshop, conversie verhogen, klantenservice, productaanbevelingen, online verkoop, België"
        type="website"
      />
      <StructuredData type="organization" />
      <StructuredData type="website" />
      <StructuredData type="software" />
      <Navigation />
      <Hero />
      <Features />
      <ChatbotComparison />
      <WhyDifferent />
      <Integrations />
      <AIJourney />
      <AIKnowledge />
      <ProductFeatures />
      <HowItWorks />
      <Quote />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
