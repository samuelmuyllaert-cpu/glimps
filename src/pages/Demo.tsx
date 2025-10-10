import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { useState } from "react";
import { Send } from "lucide-react";

const Demo = () => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hallo! 👋 Ik ben je AI shopping assistent. Waar kan ik je mee helpen?"
    }
  ]);
  const [input, setInput] = useState("");

  const demoResponses = [
    "Natuurlijk! We hebben prachtige sneakers in onze collectie. Wat voor stijl zoek je? Sportief, casual of iets chicer?",
    "Ik zie dat je interesse hebt in onze Nike Air Max collectie. Deze zijn nu in de aanbieding! Wil je meer details?",
    "Perfect! Je bestelling #12849 is onderweg en arriveert morgen tussen 14:00-18:00. Je ontvangt een tracking link via email. 📦"
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages([...messages, { role: "user", content: input }]);
    setInput("");

    setTimeout(() => {
      const randomResponse = demoResponses[Math.floor(Math.random() * demoResponses.length)];
      setMessages(prev => [...prev, { role: "assistant", content: randomResponse }]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-semibold text-primary flex items-center gap-2">
                <span className="text-primary">🤖</span> Live demo
              </span>
            </div>
            
            <h1 className="font-inter text-4xl md:text-6xl font-normal mb-6 leading-tight">
              Probeer de chatbot <br />
              <span className="text-primary">direct uit</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Test hoe onze AI-chatbot jouw klanten helpt met productadvies, bestellingen en vragen.
            </p>
          </div>

          {/* Chat Demo */}
          <div className="bg-card border border-border rounded-3xl shadow-lg overflow-hidden">
            {/* Chat Header */}
            <div className="bg-primary/5 border-b border-border px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-white text-lg">🤖</span>
                </div>
                <div>
                  <h3 className="font-semibold">glimps AI Assistent</h3>
                  <p className="text-sm text-muted-foreground">Online - reageert direct</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="h-[500px] overflow-y-auto p-6 space-y-4">
              {messages.map((message, index) => (
                <div 
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] p-4 rounded-2xl ${
                      message.role === 'user' 
                        ? 'bg-primary text-white' 
                        : 'bg-muted'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="border-t border-border p-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Typ je vraag hier..."
                  className="flex-1 px-4 py-3 bg-background border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button 
                  onClick={handleSend}
                  className="bg-primary hover:bg-primary/90 text-white p-3 rounded-full transition-colors"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Demo suggestions */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground mb-4">Probeer bijvoorbeeld:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "Ik zoek nieuwe sneakers",
                "Waar is mijn bestelling?",
                "Retour aanmelden",
                "Producten onder €50"
              ].map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => setInput(suggestion)}
                  className="px-4 py-2 bg-muted hover:bg-muted/80 rounded-full text-sm transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      <ChatWidget />
      <Footer />
    </div>
  );
};

export default Demo;
