import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import FAQComponent from "@/components/FAQ";
import SEO from "@/components/SEO";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Veelgestelde Vragen - Glimps AI | Alle antwoorden op één plek"
        description="Vind antwoorden op veelgestelde vragen over Glimps AI chatbot. Van prijzen en integraties tot functies en implementatie."
        path="/faq"
      />
      <Navigation />
      <FAQComponent />
      <ChatWidget />
      <Footer />
    </div>
  );
};

export default FAQ;
