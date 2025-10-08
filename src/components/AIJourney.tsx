import { MessageCircle, ShoppingCart, Brain, Zap, Target, CheckCircle, ArrowRight, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

const AIJourney = () => {
  const journeySteps = [
    {
      icon: MessageCircle,
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
      title: "Klant stelt vraag",
      time: "0.00s",
      content: (
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
              <div className="h-6 w-6 rounded-full bg-blue-500" />
            </div>
            <div>
              <p className="font-medium text-foreground">Emma</p>
              <p className="text-sm text-muted-foreground">Jonge klant</p>
            </div>
          </div>
          <div className="bg-muted/50 rounded-lg p-3">
            <p className="text-foreground">"Rode sneakers maat 42"</p>
          </div>
        </div>
      ),
    },
    {
      icon: ShoppingCart,
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
      title: "Bekijkt winkelmandje",
      time: "0.01s",
      badge: true,
      content: (
        <div className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-red-100 rounded-lg">
              <div className="h-12 w-12 bg-red-500 rounded-md flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground">Nike Air Max</p>
                <p className="text-sm text-muted-foreground">€129</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-blue-100 rounded-lg">
              <div className="h-12 w-12 bg-blue-500 rounded-md flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground">Adidas Sokken</p>
                <p className="text-sm text-muted-foreground">€12</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Sparkles className="h-4 w-4 text-pink-600" />
            <span className="text-pink-600 font-medium">Nike voorkeur gedetecteerd</span>
          </div>
        </div>
      ),
    },
    {
      icon: Brain,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      title: "AI begrijpt context",
      time: "0.015s",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground text-sm">
            De AI analyseert intentie, gedrag en context om het perfecte antwoord te vormen.
          </p>
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center space-y-2">
              <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto">
                <div className="h-6 w-6 text-purple-600">👁️</div>
              </div>
              <p className="text-xs font-medium text-foreground">Intentie</p>
            </div>
            <div className="text-center space-y-2">
              <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto">
                <div className="h-6 w-6 text-purple-600">👤</div>
              </div>
              <p className="text-xs font-medium text-foreground">Profiel</p>
            </div>
            <div className="text-center space-y-2">
              <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto">
                <div className="h-6 w-6 text-purple-600">📊</div>
              </div>
              <p className="text-xs font-medium text-foreground">Gedrag</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Sparkles className="h-4 w-4 text-purple-600" />
            <span className="text-purple-600 font-medium">Context volledig begrepen</span>
          </div>
        </div>
      ),
    },
    {
      icon: Zap,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      title: "Past tone aan",
      time: "0.025s",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground text-sm">
            Herkent wie er spreekt en past toon automatisch aan.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-muted/50 rounded-lg text-center">
              <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-2">
                <span className="text-xs text-muted-foreground">B2B</span>
              </div>
              <p className="text-xs text-muted-foreground italic">
                "Goedendag! Graag help ik u verder..."
              </p>
            </div>
            <div className="p-3 bg-red-50 rounded-lg border-2 border-red-200">
              <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center mx-auto mb-2">
                <span className="text-xs text-white font-medium">Emma (Actief)</span>
              </div>
              <p className="text-xs text-foreground font-medium">
                "Hey! 👋 Perfect, ik heb..."
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: Target,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      title: "Genereert aanbeveling",
      time: "0.055s",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground text-sm">
            Combineert verkoopdata + klantprofiel + gedrag
          </p>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-green-600" />
              <span className="text-foreground">Winkelmandje</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-green-600" />
              <span className="text-foreground">Voorraad</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-green-600" />
              <span className="text-foreground">Reviews ⭐ 4.8+</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-green-600" />
              <span className="text-foreground">Conversie</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-red-500 rounded-lg p-2 relative">
              <div className="absolute top-1 right-1 h-4 w-4 rounded-full bg-green-500 flex items-center justify-center">
                <CheckCircle className="h-3 w-3 text-white" />
              </div>
              <div className="h-16 bg-red-400 rounded mb-2" />
              <p className="text-xs font-medium text-white">Nike 1</p>
              <p className="text-xs text-green-400 font-medium">Match 95%</p>
            </div>
            <div className="bg-red-500 rounded-lg p-2 relative">
              <div className="absolute top-1 right-1 h-4 w-4 rounded-full bg-green-500 flex items-center justify-center">
                <CheckCircle className="h-3 w-3 text-white" />
              </div>
              <div className="h-16 bg-red-400 rounded mb-2" />
              <p className="text-xs font-medium text-white">Nike 2</p>
              <p className="text-xs text-green-400 font-medium">Match 95%</p>
            </div>
            <div className="bg-red-500 rounded-lg p-2 relative">
              <div className="absolute top-1 right-1 h-4 w-4 rounded-full bg-green-500 flex items-center justify-center">
                <CheckCircle className="h-3 w-3 text-white" />
              </div>
              <div className="h-16 bg-red-400 rounded mb-2" />
              <p className="text-xs font-medium text-white">Nike 3</p>
              <p className="text-xs text-green-400 font-medium">Match 95%</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: CheckCircle,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      title: "Perfect antwoord",
      time: "⏱ 80ms",
      content: (
        <div className="space-y-4">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
            <div className="flex items-start gap-2 mb-2">
              <Sparkles className="h-4 w-4 text-yellow-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm font-medium text-yellow-900">
                5x sneller dan menselijke reactie
              </p>
            </div>
            <p className="text-xs text-yellow-800">
              Sneller dan een knippering van het oog (100-150ms)
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 space-y-3">
            <div className="flex items-start gap-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <span className="text-xs text-primary-foreground font-bold">G</span>
              </div>
              <div className="flex-1">
                <p className="text-xs font-medium text-muted-foreground mb-1">Glimps AI</p>
                <p className="text-sm text-foreground">
                  Hey! 👋 Ik heb <span className="font-semibold">23 rode sneakers</span> in maat 42.
                  Op basis van je Nike voorkeur:
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 pl-10">
              <div className="bg-red-500 rounded-lg p-3">
                <div className="h-20 bg-red-400 rounded mb-2" />
                <p className="text-xs font-medium text-white">Nike Air Max 1</p>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-xs text-white">€130</p>
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-yellow-300">⭐</span>
                    <span className="text-xs text-white">4.8</span>
                  </div>
                </div>
              </div>
              <div className="bg-red-500 rounded-lg p-3">
                <div className="h-20 bg-red-400 rounded mb-2" />
                <p className="text-xs font-medium text-white">Nike Air Max 2</p>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-xs text-white">€140</p>
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-yellow-300">⭐</span>
                    <span className="text-xs text-white">4.9</span>
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
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-6 border-red-200 bg-red-50 text-red-600 hover:bg-red-50">
            ACHTER DE SCHERMEN
          </Badge>
          <h2 className="mb-6 font-inter text-4xl font-normal text-foreground md:text-5xl">
            Dit gebeurt er in 0.08 seconden<br />
            wanneer een klant iets <span className="relative inline-block">
              <span className="relative z-10">vraagt</span>
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-red-200 -z-0" />
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-6">
            Van vraag tot perfect antwoord. Bekijk de AI-magie die jouw klanten in realtime de beste ervaring geeft.
          </p>
          <div className="flex items-center justify-center gap-2 text-red-600">
            <ArrowRight className="h-4 w-4" />
            <span className="text-sm font-medium">Scroll naar rechts om de reis te volgen</span>
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>

        {/* Journey Timeline */}
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex gap-6 pb-4">
            {journeySteps.map((step, index) => (
              <div key={index} className="inline-flex flex-col items-center min-w-[380px]">
                {/* Icon and Line */}
                <div className="relative flex items-center w-full mb-6">
                  {index > 0 && (
                    <div className="absolute left-0 right-full h-0.5 bg-border" style={{ width: '24px', right: 'calc(100% - 0px)', left: '-24px' }} />
                  )}
                  <div className={`relative h-16 w-16 rounded-2xl ${step.iconBg} flex items-center justify-center z-10`}>
                    <step.icon className={`h-8 w-8 ${step.iconColor}`} />
                  </div>
                  {index < journeySteps.length - 1 && (
                    <div className="absolute left-full h-0.5 bg-border" style={{ width: '24px' }} />
                  )}
                </div>

                {/* Title and Time */}
                <div className="mb-4 text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                  <Badge variant="secondary" className="text-xs">
                    {step.time}
                  </Badge>
                </div>

                {/* Content Card */}
                <Card className="w-full p-6 bg-card border-border min-h-[320px]">
                  {step.content}
                </Card>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
};

export default AIJourney;
