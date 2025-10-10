import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import FAQComponent from "@/components/FAQ";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FAQComponent />
      <ChatWidget />
      <Footer />
    </div>
  );
};

export default FAQ;
