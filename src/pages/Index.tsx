import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Integrations from "@/components/Integrations";
import ProductRecommendations from "@/components/ProductRecommendations";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import ChatWidget from "@/components/ChatWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Features />
      <Integrations />
      <ProductRecommendations />
      <Testimonials />
      <FAQ />
      <CTA />
      <ChatWidget />
    </div>
  );
};

export default Index;
