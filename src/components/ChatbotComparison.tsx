import { useState, useEffect } from "react";
import { Users, Store, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { useLanguage } from "@/contexts/LanguageContext";

type BotType = "none" | "faq" | "glimps";

interface Message {
  role: "user" | "assistant";
  content: string;
  delay?: number;
}

const ChatbotComparison = () => {
  const { language } = useLanguage();
  const [selectedBot, setSelectedBot] = useState<BotType | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const faqMessages: Message[] = language === 'fr' ? [
    { role: "user", content: "Je cherche des baskets Nike rouges en taille 42, en avez-vous en stock ?", delay: 500 },
    { role: "assistant", content: "Bonjour ! Je suis un chatbot. Je peux vous aider avec des questions générales.", delay: 1500 },
    { role: "user", content: "Oui mais avez-vous des baskets Nike rouges taille 42 ?", delay: 1000 },
    { role: "assistant", content: "Désolé, je ne comprends pas votre question. Essayez l'une de ces options : 1) Heures d'ouverture 2) Politique de retour 3) Frais de livraison", delay: 1500 },
    { role: "user", content: "😤 (quitte le site)", delay: 800 }
  ] : [
    { role: "user", content: "Ik zoek rode Nike sneakers in maat 42, heb je die op voorraad?", delay: 500 },
    { role: "assistant", content: "Hoi! Ik ben een chatbot. Ik kan je helpen met algemene vragen.", delay: 1500 },
    { role: "user", content: "Ja maar heb je rode Nike sneakers maat 42?", delay: 1000 },
    { role: "assistant", content: "Sorry, ik begrijp je vraag niet. Probeer één van deze opties: 1) Openingstijden 2) Retourbeleid 3) Verzendkosten", delay: 1500 },
    { role: "user", content: "😤 (verlaat website)", delay: 800 }
  ];

  const glimpsMessages: Message[] = language === 'fr' ? [
    { role: "user", content: "Je cherche des baskets Nike rouges en taille 42, en avez-vous en stock ?", delay: 500 },
    { role: "assistant", content: "Hey! 👋 Je vois que vous cherchez des baskets Nike rouges en taille 42. J'ai 23 options pour vous !", delay: 1000 },
    { role: "assistant", content: "Basé sur votre préférence Nike précédente, je recommande celles-ci :\n\n🔥 Nike Air Max 1 Rouge - €129,95 (⭐4.8, en stock)\n🔥 Nike Dunk Low University Red - €139,95 (⭐4.9, 2 restants)", delay: 2000 },
    { role: "user", content: "Parfait ! Quel est le délai de livraison ?", delay: 1000 },
    { role: "assistant", content: "Commandé avant 22h00 = livré demain ! 📦 Livraison gratuite au-dessus de €50. Voulez-vous les ajouter à votre panier ? 😊", delay: 1200 }
  ] : [
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
    <section className="py-20 px-6 bg-gradient-to-br from-primary/5 via-background to-purple-50/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-purple-500/20 border border-primary/20 mb-4">
            <span className="text-sm font-semibold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              {language === 'fr' ? 'COMPARER & CHOISIR' : 'VERGELIJK & KIES'}
            </span>
          </div>
          <h2 className="font-inter text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            {language === 'fr'
              ? 'Quelle solution de service client correspond à votre boutique en ligne ?'
              : 'Welke klantenservice oplossing past bij jouw webshop?'
            }
          </h2>
          <p className="text-lg text-muted-foreground mt-6">
            {language === 'fr'
              ? 'Le bon choix dépend de votre taille, votre trafic et vos ambitions. Découvrez quelle approche convient à votre situation.'
              : 'De juiste keuze hangt af van je grootte, verkeer en ambities. Ontdek welke aanpak bij jouw situatie past.'
            }
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
            {language === 'fr' ? 'Aucun Bot' : 'Geen Bot'}
          </Button>
          <Button
            variant={selectedBot === "faq" ? "default" : "outline"}
            size="lg"
            onClick={() => handleBotSelect("faq")}
            className={`gap-2 ${selectedBot === "faq" ? "bg-muted-foreground hover:bg-muted-foreground/90 text-background" : ""}`}
          >
            <Store className="w-5 h-5" />
            {language === 'fr' ? 'Bot FAQ Simple' : 'Simpele FAQ Bot'}
          </Button>
          <Button
            variant={selectedBot === "glimps" ? "default" : "outline"}
            size="lg"
            onClick={() => handleBotSelect("glimps")}
            className={`gap-2 ${selectedBot === "glimps" ? "bg-primary hover:bg-primary/90 text-white" : ""}`}
          >
            <Sparkles className="w-5 h-5" />
            Glimps AI
          </Button>
        </div>

        {/* Content Area */}
        <div className="max-w-6xl mx-auto">
          {(selectedBot === null || selectedBot === "none") && (
            <div className="grid md:grid-cols-3 gap-6">
              {/* Alleen menselijk team Card */}
              <div className="bg-card border border-border rounded-2xl p-6 relative hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  {language === 'fr' ? 'Équipe humaine uniquement' : 'Alleen menselijk team'}
                </h3>
                <p className="text-sm text-primary font-medium mb-4">
                  {language === 'fr'
                    ? 'Convient pour : Boutiques en ligne avec <200 contacts clients par mois'
                    : 'Geschikt voor: Webshops met <200 klantcontacten per maand'
                  }
                </p>

                <div className="mb-4">
                  <p className="text-sm font-semibold mb-2">
                    {language === 'fr' ? 'Ce qui fonctionne bien :' : 'Wat het goed doet:'}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2 text-sm">
                      <span className="text-foreground">✓</span>
                      <span>{language === 'fr' ? 'Contact personnel et empathie' : 'Persoonlijk contact en empathie'}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <span className="text-foreground">✓</span>
                      <span>{language === 'fr' ? 'Questions complexes bien répondues directement' : 'Complexe vragen direct goed beantwoord'}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <span className="text-foreground">✓</span>
                      <span>{language === 'fr' ? 'Aucune implémentation nécessaire' : 'Geen implementatie nodig'}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-semibold mb-2">
                    {language === 'fr' ? 'Limitations :' : 'Beperkingen:'}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span>•</span>
                      <span>{language === 'fr' ? 'Non évolutif en cas de croissance' : 'Niet schaalbaar bij groei'}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span>•</span>
                      <span>{language === 'fr' ? 'Limité aux heures de bureau' : 'Beperkt tot kantooruren'}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span>•</span>
                      <span>{language === 'fr' ? 'Coûts de personnel élevés avec plus de trafic' : 'Hoge personeelskosten bij meer verkeer'}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span>•</span>
                      <span>{language === 'fr' ? 'L\'équipe se noie dans les questions répétitives' : 'Team verdrinkt in repetitieve vragen'}</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border pt-4">
                  <p className="text-xs font-semibold mb-2">
                    {language === 'fr' ? 'Résultat typique :' : 'Typisch resultaat:'}
                  </p>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div>{language === 'fr' ? 'Temps de réponse : 2-24 heures' : 'Reactietijd: 2-24 uur'}</div>
                    <div>{language === 'fr' ? 'Disponibilité : 9h-17h en semaine' : 'Beschikbaarheid: 9-17u weekdagen'}</div>
                  </div>
                </div>
              </div>

              {/* Simpele FAQ Bot Card */}
              <div className="bg-card border border-border rounded-2xl p-6 relative hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center mb-4">
                  <Store className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  {language === 'fr' ? 'Bot FAQ Simple' : 'Simpele FAQ Bot'}
                </h3>
                <p className="text-sm text-primary font-medium mb-4">
                  {language === 'fr'
                    ? 'Convient pour : Boutiques en ligne qui veulent uniquement automatiser les FAQ standards'
                    : 'Geschikt voor: Webshops die alleen standaard FAQ\'s willen automatiseren'
                  }
                </p>

                <div className="mb-4">
                  <p className="text-sm font-semibold mb-2">
                    {language === 'fr' ? 'Ce qui fonctionne bien :' : 'Wat het goed doet:'}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2 text-sm">
                      <span className="text-foreground">✓</span>
                      <span>{language === 'fr' ? 'Toujours disponible (24/7)' : 'Altijd beschikbaar (24/7)'}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <span className="text-foreground">✓</span>
                      <span>{language === 'fr' ? 'Répond instantanément aux questions de base' : 'Beantwoordt basis vragen instant'}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <span className="text-foreground">✓</span>
                      <span>{language === 'fr' ? 'Moins cher qu\'une équipe humaine' : 'Goedkoper dan menselijk team'}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-semibold mb-2">
                    {language === 'fr' ? 'Limitations :' : 'Beperkingen:'}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span>•</span>
                      <span>{language === 'fr' ? 'Aucun accès aux données produits/stock' : 'Geen toegang tot productdata/voorraad'}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span>•</span>
                      <span>{language === 'fr' ? 'Ne peut pas aider au choix des produits' : 'Kan niet helpen bij productkeuze'}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span>•</span>
                      <span>{language === 'fr' ? 'Frustre les clients avec des réponses limitées' : 'Frustreert klanten met beperkte antwoorden'}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span>•</span>
                      <span>{language === 'fr' ? 'Aucune personnalisation possible' : 'Geen personalisatie mogelijk'}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span>•</span>
                      <span>{language === 'fr' ? 'N\'apprend pas' : 'Leert niet bij'}</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border pt-4">
                  <p className="text-xs font-semibold mb-2">
                    {language === 'fr' ? 'Résultat typique :' : 'Typisch resultaat:'}
                  </p>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div>{language === 'fr' ? '30-40% des questions résolues automatiquement' : '30-40% van vragen automatisch opgelost'}</div>
                    <div>{language === 'fr' ? 'Souvent de la frustration chez les clients' : 'Vaak frustratie bij klanten'}</div>
                  </div>
                </div>
              </div>

              {/* Glimps AI Card */}
              <div className="bg-card border-2 border-primary/30 rounded-2xl p-6 relative hover:shadow-xl hover:shadow-primary/20 transition-all hover:-translate-y-1">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center mb-4 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-purple-600 rounded-2xl opacity-10 animate-pulse"></div>
                  <Sparkles className="w-8 h-8 text-primary relative z-10" />
                </div>
                <h3 className="text-xl font-bold mb-2">Glimps AI</h3>
                <p className="text-sm text-primary font-medium mb-4">
                  {language === 'fr'
                    ? 'Convient pour : Entreprises e-commerce en croissance (500+ contacts clients/mois)'
                    : 'Geschikt voor: Groeiende e-commerce bedrijven (500+ klantcontacten/maand)'
                  }
                </p>

                <div className="mb-4">
                  <p className="text-sm font-semibold mb-2">
                    {language === 'fr' ? 'Ce qui fonctionne bien :' : 'Wat het goed doet:'}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2 text-sm">
                      <span className="text-foreground">✓</span>
                      <span>{language === 'fr' ? 'Accès aux données en temps réel (stock, prix, commandes)' : 'Toegang tot live data (voorraad, prijzen, bestellingen)'}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <span className="text-foreground">✓</span>
                      <span>{language === 'fr' ? 'Aide activement au choix des produits' : 'Helpt actief bij productkeuze'}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <span className="text-foreground">✓</span>
                      <span>{language === 'fr' ? 'Automatise 70-80% des questions' : 'Automatiseert 70-80% van vragen'}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <span className="text-foreground">✓</span>
                      <span>{language === 'fr' ? 'Apprend continuellement et devient plus intelligent' : 'Leert continu en wordt slimmer'}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <span className="text-foreground">✓</span>
                      <span>{language === 'fr' ? 'Personnalisation basée sur le comportement' : 'Personalisatie op basis van gedrag'}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-semibold mb-2">
                    {language === 'fr' ? 'Limitations :' : 'Beperkingen:'}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span>•</span>
                      <span>{language === 'fr' ? 'Nécessite des données produits structurées' : 'Vereist gestructureerde productdata'}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span>•</span>
                      <span>{language === 'fr' ? 'L\'implémentation prend 2-4 semaines' : 'Implementatie duurt 2-4 weken'}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span>•</span>
                      <span>{language === 'fr' ? 'Non adapté pour <200 contacts/mois' : 'Niet geschikt voor <200 contacten/maand'}</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border pt-4 mb-4">
                  <p className="text-xs font-semibold mb-2">
                    {language === 'fr' ? 'Résultat typique :' : 'Typisch resultaat:'}
                  </p>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div>{language === 'fr' ? '15-20 heures économisées par semaine' : '15-20 uur per week bespaard'}</div>
                    <div>{language === 'fr' ? '70-80% taux d\'automatisation' : '70-80% automatisering rate'}</div>
                    <div>{language === 'fr' ? 'Disponibilité 24/7' : '24/7 beschikbaarheid'}</div>
                  </div>
                </div>

                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white">
                  <a href={language === 'fr' ? '/fr/fonctionnalites' : '/features'}>
                    {language === 'fr' ? 'Découvrir toutes les fonctionnalités →' : 'Ontdek alle features →'}
                  </a>
                </Button>
              </div>
            </div>
          )}

          {/* Chat Display for FAQ Bot */}
          {selectedBot === "faq" && (
            <div className="bg-card border border-border rounded-3xl overflow-hidden">
              <div className="bg-muted-foreground px-6 py-4 flex items-center justify-between">
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
                          : 'bg-card border border-border'
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
                  <span className="text-sm font-medium">
                    {language === 'fr' ? 'Satisfaction client' : 'Klanttevredenheid'}
                  </span>
                  <span className="text-sm font-bold">45%</span>
                </div>
                <div className="relative">
                  <Progress value={45} className="h-2 bg-muted" />
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 p-6 border-t border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">Instant</div>
                  <div className="text-sm text-muted-foreground">
                    {language === 'fr' ? 'Temps de réponse' : 'Reactietijd'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground">
                    {language === 'fr' ? 'Disponible' : 'Beschikbaar'}
                  </div>
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
                          {language === 'fr' ? 'Réponse en 0.08s' : 'Antwoord in 0.08s'}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Satisfaction Bar */}
              <div className="px-6 py-4 border-t border-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">
                    {language === 'fr' ? 'Satisfaction client' : 'Klanttevredenheid'}
                  </span>
                  <span className="text-sm font-bold">92%</span>
                </div>
                <div className="relative">
                  <Progress value={92} className="h-2 bg-muted" />
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 p-6 border-t border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">0.08s</div>
                  <div className="text-sm text-muted-foreground">
                    {language === 'fr' ? 'Temps de réponse' : 'Reactietijd'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">70-80%</div>
                  <div className="text-sm text-muted-foreground">
                    {language === 'fr' ? 'Automatisation' : 'Automatisering'}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-muted/30 rounded-3xl py-12 px-6 border border-border">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            {language === 'fr'
              ? 'Aucune solution n\'est parfaite pour tout le monde'
              : 'Geen oplossing is perfect voor iedereen'
            }
          </h3>
          <p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
            {language === 'fr'
              ? 'Le bon choix dépend de votre taille, votre trafic et vos ambitions. Vous hésitez ? Planifiez une conversation sans engagement - nous vous aidons à choisir la meilleure solution, même si ce n\'est pas Glimps.'
              : 'De juiste keuze hangt af van je grootte, je verkeer en je ambities. Twijfel je? Plan een vrijblijvend gesprek - we helpen je de beste oplossing kiezen, ook als dat niet Glimps is.'
            }
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
            <a href={language === 'fr' ? '/fr/contact' : '/contact'}>
              {language === 'fr' ? 'Planifier une conversation sans engagement →' : 'Plan een vrijblijvend gesprek →'}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ChatbotComparison;
