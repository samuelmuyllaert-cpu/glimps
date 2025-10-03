import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ChatWidget from "@/components/ChatWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ChatWidget />
    </div>
  );
};

export default Index;
