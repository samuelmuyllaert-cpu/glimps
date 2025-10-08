import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Integrations from "@/components/Integrations";
import AIKnowledge from "@/components/AIKnowledge";
import ProductRecommendations from "@/components/ProductRecommendations";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import ChatWidget from "@/components/ChatWidget";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Features />
      <Integrations />
      <AIKnowledge />
      <ProductRecommendations />
      <Testimonials />
      <FAQ />
      <CTA />
      <ChatWidget />
      <Footer />
    </div>
  );
};

export default Index;
