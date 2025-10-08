import { MessageCircle, ShoppingCart, Brain, Zap, Target, CheckCircle, ArrowRight, Sparkles, Eye, User, Activity } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

const AIJourney = () => {
  const journeySteps = [
    {
      icon: MessageCircle,
      iconBg: "bg-red-500",
      iconColor: "text-white",
      title: "Klant stelt vraag",
      time: "0.00s",
      content: (
        <div className="space-y-4">
          <div className="flex items-start gap-3 p-4 bg-background rounded-xl border border-border">
            <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
              <User className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="font-semibold text-foreground">Emma</p>
              <p className="text-sm text-muted-foreground">Jonge klant</p>
            </div>
          </div>
          <div className="bg-muted rounded-xl p-4">
            <p className="text-foreground font-medium">"Rode sneakers maat 42"</p>
          </div>
        </div>
      ),
    },
    {
      icon: ShoppingCart,
      iconBg: "bg-red-500",
      iconColor: "text-white",
      title: "Bekijkt winkelmandje",
      time: "0.01s",
      content: (
        <div className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-4 bg-red-50 rounded-xl border border-red-100">
              <div className="h-14 w-14 bg-red-500 rounded-lg flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-foreground">Nike Air Max</p>
                <p className="text-sm text-muted-foreground">€129</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
              <div className="h-14 w-14 bg-blue-500 rounded-lg flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-foreground">Adidas Sokken</p>
                <p className="text-sm text-muted-foreground">€12</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 p-3 bg-pink-50 rounded-lg border border-pink-100">
            <Sparkles className="h-4 w-4 text-pink-600 flex-shrink-0" />
            <span className="text-sm text-pink-600 font-semibold">Nike voorkeur gedetecteerd</span>
          </div>
        </div>
      ),
    },
    {
      icon: Brain,
      iconBg: "bg-purple-500",
      iconColor: "text-white",
      title: "AI begrijpt context",
      time: "0.015s",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">
            De AI analyseert intentie, gedrag en context om het perfecte antwoord te vormen.
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center space-y-3">
              <div className="h-14 w-14 rounded-2xl bg-purple-100 flex items-center justify-center mx-auto">
                <Eye className="h-7 w-7 text-purple-600" />
              </div>
              <p className="text-sm font-semibold text-foreground">Intentie</p>
            </div>
            <div className="text-center space-y-3">
              <div className="h-14 w-14 rounded-2xl bg-purple-100 flex items-center justify-center mx-auto">
                <User className="h-7 w-7 text-purple-600" />
              </div>
              <p className="text-sm font-semibold text-foreground">Profiel</p>
            </div>
            <div className="text-center space-y-3">
              <div className="h-14 w-14 rounded-2xl bg-purple-100 flex items-center justify-center mx-auto">
                <Activity className="h-7 w-7 text-purple-600" />
              </div>
              <p className="text-sm font-semibold text-foreground">Gedrag</p>
            </div>
          </div>
          <div className="flex items-center gap-2 p-3 bg-purple-50 rounded-lg border border-purple-100">
            <Sparkles className="h-4 w-4 text-purple-600 flex-shrink-0" />
            <span className="text-sm text-purple-600 font-semibold">Context volledig begrepen</span>
          </div>
        </div>
      ),
    },
    {
      icon: Zap,
      iconBg: "bg-blue-500",
      iconColor: "text-white",
      title: "Past tone aan",
      time: "0.025s",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Herkent wie er spreekt en past toon automatisch aan.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-muted rounded-xl border border-border">
              <div className="h-12 w-12 rounded-full bg-muted-foreground/20 flex items-center justify-center mx-auto mb-3">
                <span className="text-xs font-bold text-muted-foreground">B2B</span>
              </div>
              <p className="text-xs text-muted-foreground text-center italic">
                "Goedendag! Graag help ik u verder..."
              </p>
            </div>
            <div className="p-4 bg-blue-50 rounded-xl border-2 border-blue-500">
              <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center mx-auto mb-3">
                <User className="h-6 w-6 text-white" />
              </div>
              <p className="text-xs font-semibold text-center text-blue-900 mb-1">
                Emma<br/>(Actief)
              </p>
              <p className="text-xs text-center text-foreground font-medium">
                "Hey! 👋 Perfect, ik heb..."
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: Target,
      iconBg: "bg-green-500",
      iconColor: "text-white",
      title: "Genereert aanbeveling",
      time: "0.055s",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Combineert verkoopdata + klantprofiel + gedrag
          </p>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-foreground">Winkelmandje</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-foreground">Voorraad</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-foreground">Reviews ⭐ 4.8+</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-foreground">Conversie</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-red-500 rounded-xl p-3 relative">
              <div className="absolute top-2 right-2 h-5 w-5 rounded-full bg-green-500 flex items-center justify-center">
                <CheckCircle className="h-3 w-3 text-white" />
              </div>
              <div className="h-20 bg-red-400 rounded-lg mb-3" />
              <p className="text-xs font-semibold text-white mb-1">Nike 1</p>
              <p className="text-xs text-green-300 font-bold">Match 95%</p>
            </div>
            <div className="bg-red-500 rounded-xl p-3 relative">
              <div className="absolute top-2 right-2 h-5 w-5 rounded-full bg-green-500 flex items-center justify-center">
                <CheckCircle className="h-3 w-3 text-white" />
              </div>
              <div className="h-20 bg-red-400 rounded-lg mb-3" />
              <p className="text-xs font-semibold text-white mb-1">Nike 2</p>
              <p className="text-xs text-green-300 font-bold">Match 95%</p>
            </div>
            <div className="bg-red-500 rounded-xl p-3 relative">
              <div className="absolute top-2 right-2 h-5 w-5 rounded-full bg-green-500 flex items-center justify-center">
                <CheckCircle className="h-3 w-3 text-white" />
              </div>
              <div className="h-20 bg-red-400 rounded-lg mb-3" />
              <p className="text-xs font-semibold text-white mb-1">Nike 3</p>
              <p className="text-xs text-green-300 font-bold">Match 95%</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: CheckCircle,
      iconBg: "bg-green-500",
      iconColor: "text-white",
      title: "Perfect antwoord",
      time: "⏱ 80ms",
      content: (
        <div className="space-y-4">
          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-4">
            <div className="flex items-start gap-2 mb-2">
              <Sparkles className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm font-bold text-yellow-900">
                5x sneller dan menselijke reactie
              </p>
            </div>
            <p className="text-xs text-yellow-800">
              Sneller dan een knippering van het oog (100-150ms)
            </p>
          </div>
          <div className="bg-background border-2 border-primary/20 rounded-xl p-4 space-y-4">
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <span className="text-sm text-primary-foreground font-bold">G</span>
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold text-muted-foreground mb-2">Glimps AI</p>
                <p className="text-sm text-foreground leading-relaxed">
                  Hey! 👋 Ik heb <span className="font-bold">23 rode sneakers</span> in maat 42.
                  Op basis van je Nike voorkeur:
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-red-500 rounded-xl p-3">
                <div className="h-24 bg-red-400 rounded-lg mb-3" />
                <p className="text-sm font-bold text-white mb-2">Nike Air Max 1</p>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-white font-semibold">€130</p>
                  <div className="flex items-center gap-1">
                    <span className="text-sm text-yellow-300">⭐</span>
                    <span className="text-sm text-white font-semibold">4.8</span>
                  </div>
                </div>
              </div>
              <div className="bg-red-500 rounded-xl p-3">
                <div className="h-24 bg-red-400 rounded-lg mb-3" />
                <p className="text-sm font-bold text-white mb-2">Nike Air Max 2</p>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-white font-semibold">€140</p>
                  <div className="flex items-center gap-1">
                    <span className="text-sm text-yellow-300">⭐</span>
                    <span className="text-sm text-white font-semibold">4.9</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <Badge variant="outline" className="mb-6 border-red-200 bg-red-50 text-red-600 hover:bg-red-50 px-4 py-2">
            ACHTER DE SCHERMEN
          </Badge>
          <h2 className="mb-6 font-inter text-4xl font-normal text-foreground md:text-5xl lg:text-6xl">
            Dit gebeurt er in 0.08 seconden<br />
            wanneer een klant iets <span className="relative inline-block">
              <span className="relative z-10">vraagt</span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-red-200 -z-0" />
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground mb-8">
            Van vraag tot perfect antwoord. Bekijk de AI-magie die jouw klanten in realtime de beste ervaring geeft.
          </p>
          <div className="flex items-center justify-center gap-3 text-red-600 animate-pulse">
            <ArrowRight className="h-5 w-5" />
            <span className="text-sm font-semibold">Scroll naar rechts om de reis te volgen</span>
            <ArrowRight className="h-5 w-5" />
          </div>
        </div>

        {/* Journey Timeline */}
        <ScrollArea className="w-full whitespace-nowrap rounded-xl">
          <div className="flex gap-0 pb-6">
            {journeySteps.map((step, index) => (
              <div key={index} className="inline-flex flex-col min-w-[420px] px-4 first:pl-0 last:pr-0">
                {/* Timeline connector and icon */}
                <div className="relative flex items-center justify-center mb-8">
                  {/* Connecting line before */}
                  {index > 0 && (
                    <div className="absolute right-1/2 top-1/2 h-[2px] w-full bg-border" />
                  )}
                  
                  {/* Icon with time badge */}
                  <div className="relative z-10">
                    <div className={`h-20 w-20 rounded-3xl ${step.iconBg} flex items-center justify-center shadow-lg`}>
                      <step.icon className={`h-10 w-10 ${step.iconColor}`} />
                    </div>
                    <Badge 
                      variant="secondary" 
                      className="absolute -top-2 -right-2 text-xs font-bold bg-background border-2 border-primary/20 px-2 py-1"
                    >
                      {step.time}
                    </Badge>
                  </div>
                  
                  {/* Connecting line after */}
                  {index < journeySteps.length - 1 && (
                    <div className="absolute left-1/2 top-1/2 h-[2px] w-full bg-border" />
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-6 text-center px-4">
                  {step.title}
                </h3>

                {/* Content Card */}
                <Card className="w-full p-6 bg-card border-2 border-border hover:border-primary/20 transition-all duration-300 shadow-md hover:shadow-xl min-h-[380px]">
                  {step.content}
                </Card>

                {/* Arrow between cards */}
                {index < journeySteps.length - 1 && (
                  <div className="absolute right-0 top-[580px] -translate-y-1/2 z-20">
                    <ArrowRight className="h-8 w-8 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" className="h-3" />
        </ScrollArea>
      </div>
    </section>
  );
};

export default AIJourney;
