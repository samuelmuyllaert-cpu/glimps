import { useState, useEffect } from "react";
import { Users, Store, Sparkles, X, AlertTriangle, Star } from "lucide-react";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";

type BotType = "none" | "faq" | "glimps";

interface Message {
  role: "user" | "assistant";
  content: string;
  delay?: number;
}

const ChatbotComparison = () => {
  const [selectedBot, setSelectedBot] = useState<BotType | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const faqMessages: Message[] = [
    { role: "user", content: "Ik zoek rode Nike sneakers in maat 42, heb je die op voorraad?", delay: 500 },
    { role: "assistant", content: "Hoi! Ik ben een chatbot. Ik kan je helpen met algemene vragen.", delay: 1500 },
    { role: "user", content: "Ja maar heb je rode Nike sneakers maat 42?", delay: 1000 },
    { role: "assistant", content: "Sorry, ik begrijp je vraag niet. Probeer één van deze opties: 1) Openingstijden 2) Retourbeleid 3) Verzendkosten", delay: 1500 },
    { role: "user", content: "😤 (verlaat website)", delay: 800 }
  ];

  const glimpsMessages: Message[] = [
    { role: "user", content: "Ik zoek rode Nike sneakers in maat 42, heb je die op voorraad?", delay: 500 },
    { role: "assistant", content: "Hey! 👋 Ik zie dat je rode Nike sneakers in maat 42 zoekt. Ik heb 23 opties voor je!", delay: 1000 },
    { role: "assistant", content: "Op basis van je eerdere Nike voorkeur raad ik deze aan:\n\n🔥 Nike Air Max 1 Rood - €129,95 (⭐4.8, op voorraad)\n🔥 Nike Dunk Low University Red - €139,95 (⭐4.9, 2 stuks over)", delay: 2000 },
    { role: "user", content: "Perfect! Wat is de levertijd?", delay: 1000 },
    { role: "assistant", content: "Voor 22:00 besteld = morgen in huis! 📦 Gratis verzending boven €50. Wil je ze in je winkelmandje? 😊", delay: 1200 }
  ];

  useEffect(() => {
    if (!isPlaying || currentMessageIndex >= messages.length) {
      if (currentMessageIndex >= messages.length && messages.length > 0) {
        setIsPlaying(false);
      }
      return;
    }

    const currentMessage = messages[currentMessageIndex];
    const timer = setTimeout(() => {
      setCurrentMessageIndex(prev => prev + 1);
    }, currentMessage.delay || 1000);

    return () => clearTimeout(timer);
  }, [isPlaying, currentMessageIndex, messages]);

  const handleBotSelect = (bot: BotType) => {
    setSelectedBot(bot);
    setMessages([]);
    setCurrentMessageIndex(0);
    setIsPlaying(false);
    
    if (bot === "faq") {
      setMessages(faqMessages);
      setIsPlaying(true);
    } else if (bot === "glimps") {
      setMessages(glimpsMessages);
      setIsPlaying(true);
    }
  };

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-inter text-4xl md:text-5xl font-bold mb-4">
            Niet elke chatbot is de investering{" "}
            <span className="relative">
              waard
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                <path d="M0 4C50 1 150 1 200 4" stroke="hsl(var(--primary))" strokeWidth="3" />
              </svg>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground mt-6">
            Zie het verschil in actie: dezelfde klantvraag, drie totaal verschillende resultaten
          </p>
        </div>

        {/* Bot Selection Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <Button
            variant={selectedBot === "none" ? "default" : "outline"}
            size="lg"
            onClick={() => handleBotSelect("none")}
            className={`gap-2 ${selectedBot === "none" ? "bg-foreground text-background" : ""}`}
          >
            <Users className="w-5 h-5" />
            Geen Bot
          </Button>
          <Button
            variant={selectedBot === "faq" ? "default" : "outline"}
            size="lg"
            onClick={() => handleBotSelect("faq")}
            className={`gap-2 ${selectedBot === "faq" ? "bg-[#FF8C42] hover:bg-[#FF8C42]/90 text-white" : "border-[#FF8C42]/30"}`}
          >
            <Store className="w-5 h-5" />
            Simpele FAQ Bot
            <AlertTriangle className="w-4 h-4 text-[#FF8C42]" />
          </Button>
          <Button
            variant={selectedBot === "glimps" ? "default" : "outline"}
            size="lg"
            onClick={() => handleBotSelect("glimps")}
            className={`gap-2 ${selectedBot === "glimps" ? "bg-primary hover:bg-primary/90 text-white" : ""}`}
          >
            <Sparkles className="w-5 h-5" />
            Glimps AI
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          </Button>
        </div>

        {/* Content Area */}
        <div className="max-w-6xl mx-auto">
          {selectedBot === null && (
            <div className="grid md:grid-cols-3 gap-6">
              {/* Geen Bot Card */}
              <div className="bg-card border border-border rounded-2xl p-6 relative">
                <div className="absolute top-4 right-4 flex items-center gap-2 text-xs text-red-500">
                  <X className="w-4 h-4" />
                  Verouderd
                </div>
                <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">Geen Bot</h3>
                <p className="text-sm text-muted-foreground mb-6">Alleen menselijke customer service</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Reactietijd</span>
                    <span className="font-semibold">2-24u</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Beschikbaarheid</span>
                    <span className="font-semibold">9-17u</span>
                  </div>
                </div>

                <div className="border-t border-border pt-4 space-y-2">
                  <div className="flex items-start gap-2 text-sm text-red-500">
                    <X className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Lange wachttijden</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-red-500">
                    <X className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Geen 24/7 support</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-red-500">
                    <X className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Hoge personeelskosten</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-red-500">
                    <X className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Beperkte schaalbaarheid</span>
                  </div>
                </div>
              </div>

              {/* Simpele FAQ Bot Card */}
              <div className="bg-card border-2 border-[#FF8C42]/30 rounded-2xl p-6 relative">
                <div className="absolute top-4 right-4 flex items-center gap-2 text-xs text-[#FF8C42]">
                  <AlertTriangle className="w-4 h-4" />
                  Grootte verspilling
                </div>
                <div className="w-16 h-16 rounded-2xl bg-[#FF8C42]/10 flex items-center justify-center mb-4">
                  <Store className="w-8 h-8 text-[#FF8C42]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Simpele FAQ Bot</h3>
                <p className="text-sm text-[#FF8C42] mb-6 font-medium">Alleen basis antwoorden - geen productkennis</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Conversie impact</span>
                    <span className="font-semibold text-red-500">-18% 📉</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">ROI</span>
                    <span className="font-semibold text-red-500">Negatief!</span>
                  </div>
                </div>

                <div className="border-t border-border pt-4 space-y-2 bg-[#FF8C42]/5 -mx-6 -mb-6 px-6 py-4 rounded-b-2xl">
                  <p className="text-xs font-semibold text-[#FF8C42] mb-2">Waarom het slecht is:</p>
                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <X className="w-4 h-4 mt-0.5 flex-shrink-0 text-red-500" />
                    <span>Kan alleen FAQ's - geen productkennis</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <X className="w-4 h-4 mt-0.5 flex-shrink-0 text-red-500" />
                    <span>Geen toegang tot voorraad/prijzen</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <X className="w-4 h-4 mt-0.5 flex-shrink-0 text-red-500" />
                    <span>Frustreert klanten met beperkte antwoorden</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <X className="w-4 h-4 mt-0.5 flex-shrink-0 text-red-500" />
                    <span>Geen personalisatie mogelijk</span>
                  </div>
                </div>
              </div>

              {/* Glimps AI Card */}
              <div className="bg-card border-2 border-primary/30 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-4 right-4 flex items-center gap-2 text-xs bg-primary text-white px-3 py-1 rounded-full">
                  ⚡ De Winnaar
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 relative">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Glimps AI</h3>
                <p className="text-sm text-primary mb-6 font-medium">Customer Service + Marketing AI Platform</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Conversie boost</span>
                    <span className="font-semibold text-green-500">+43% 📈</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">ROI</span>
                    <span className="font-semibold text-green-500">+237% 🚀</span>
                  </div>
                </div>

                <div className="border-t border-border pt-4 space-y-2">
                  <div className="flex items-start gap-2 text-sm text-green-600">
                    <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Diepgaande productkennis</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-green-600">
                    <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Live data toegang (voorraad, prijzen)</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-green-600">
                    <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Personalisatie op basis van gedrag</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-green-600">
                    <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Actieve upsell & cross-sell</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-green-600">
                    <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Leert continu en wordt slimmer</span>
                  </div>
                </div>

                <Button className="w-full mt-6 bg-primary hover:bg-primary/90 text-white">
                  Start vandaag →
                </Button>
              </div>
            </div>
          )}

          {/* Chat Display for FAQ Bot */}
          {selectedBot === "faq" && (
            <div className="bg-card border-2 border-[#FF8C42] rounded-3xl overflow-hidden">
              <div className="bg-[#FF8C42] px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Store className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">FAQ Bot</h3>
                    <p className="text-sm text-white/80">Online</p>
                  </div>
                </div>
                <span className="text-xs text-white/80 flex items-center gap-1">
                  🔴 Live demo
                </span>
              </div>

              <div className="h-[400px] overflow-y-auto p-6 space-y-4 bg-muted/20">
                {messages.slice(0, currentMessageIndex).map((message, index) => (
                  <div 
                    key={index}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
                  >
                    <div 
                      className={`max-w-[80%] p-4 rounded-2xl ${
                        message.role === 'user' 
                          ? 'bg-foreground text-background' 
                          : 'bg-card border border-[#FF8C42]/30'
                      }`}
                    >
                      <p className="text-sm leading-relaxed whitespace-pre-line">{message.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Satisfaction Bar */}
              <div className="px-6 py-4 border-t border-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Klanttevredenheid</span>
                  <span className="text-sm font-bold text-red-500">12%</span>
                </div>
                <div className="relative">
                  <Progress value={12} className="h-2 bg-muted" />
                  <div className="flex justify-between mt-2">
                    <span className="text-red-500">☹️</span>
                    <span className="text-orange-500">😐</span>
                    <span className="text-green-500">😊</span>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 p-6 border-t border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">2-5min</div>
                  <div className="text-sm text-muted-foreground">Reactietijd</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-500 mb-1">-18%</div>
                  <div className="text-sm text-muted-foreground">Conversie impact</div>
                </div>
              </div>
            </div>
          )}

          {/* Chat Display for Glimps AI */}
          {selectedBot === "glimps" && (
            <div className="bg-card border-2 border-primary rounded-3xl overflow-hidden">
              <div className="bg-primary px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Glimps AI</h3>
                    <p className="text-sm text-white/80">Online</p>
                  </div>
                </div>
                <span className="text-xs text-white/80 flex items-center gap-1">
                  🔴 Live demo
                </span>
              </div>

              <div className="h-[400px] overflow-y-auto p-6 space-y-4 bg-muted/20">
                {messages.slice(0, currentMessageIndex).map((message, index) => (
                  <div 
                    key={index}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
                  >
                    <div 
                      className={`max-w-[80%] p-4 rounded-2xl ${
                        message.role === 'user' 
                          ? 'bg-foreground text-background' 
                          : 'bg-card border border-primary/30'
                      }`}
                    >
                      <p className="text-sm leading-relaxed whitespace-pre-line">{message.content}</p>
                      {index === messages.length - 1 && message.role === "assistant" && (
                        <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-green-500"></span>
                          Antwoord in 0.08s
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Satisfaction Bar */}
              <div className="px-6 py-4 border-t border-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Klanttevredenheid</span>
                  <span className="text-sm font-bold text-green-500">96%</span>
                </div>
                <div className="relative">
                  <Progress value={96} className="h-2 bg-muted" />
                  <div className="flex justify-between mt-2">
                    <span className="text-red-500">☹️</span>
                    <span className="text-orange-500">😐</span>
                    <span className="text-green-500">😊</span>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 p-6 border-t border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">0.08s</div>
                  <div className="text-sm text-muted-foreground">Reactietijd</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-500 mb-1">+43%</div>
                  <div className="text-sm text-muted-foreground">Conversie impact</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-foreground text-background rounded-3xl py-12 px-6">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Stop met geld verspillen aan bots die niks doen
          </h3>
          <p className="text-lg mb-8">
            Kies voor AI die{" "}
            <span className="text-purple-400 font-semibold">begrijpt</span>,{" "}
            <span className="text-blue-400 font-semibold">verkoopt</span> en{" "}
            <span className="text-primary font-semibold">resultaat</span> levert.
          </p>
          <Button size="lg" variant="hero" className="bg-background text-foreground hover:bg-background/90">
            Plan een gratis demo →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ChatbotComparison;
