import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  MessageCircle,
  ShoppingCart,
  Brain,
  Zap,
  Target,
  Check,
  ArrowRight,
  Eye,
  User,
  TrendingUp,
  Star,
  Sparkles,
} from "lucide-react";

const AIJourney = () => {
  const journeySteps = [
    {
      icon: MessageCircle,
      iconBg: "#FF6A6A",
      title: "Klant stelt vraag",
      time: "0.00s",
      content: (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium text-sm">
              E
            </div>
            <div>
              <div className="font-medium text-sm">Emma</div>
              <div className="text-xs text-muted-foreground">Jonge klant</div>
            </div>
          </div>
          <div className="bg-muted/50 rounded-lg p-3 text-sm">
            "Rode sneakers maat 42"
          </div>
        </div>
      ),
    },
    {
      icon: ShoppingCart,
      iconBg: "#FF6A6A",
      title: "Bekijkt winkelmandje",
      time: "0.01s",
      content: (
        <div className="space-y-2">
          <div className="flex items-center gap-2 bg-red-50 rounded p-2">
            <div className="w-8 h-8 bg-red-500 rounded"></div>
            <div className="flex-1 text-xs">
              <div className="font-medium">Nike Air Max</div>
              <div className="text-muted-foreground">€129</div>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-blue-50 rounded p-2">
            <div className="w-8 h-8 bg-blue-500 rounded"></div>
            <div className="flex-1 text-xs">
              <div className="font-medium">Adidas Sokken</div>
              <div className="text-muted-foreground">€12</div>
            </div>
          </div>
          <div className="text-xs text-red-500 flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            Nike voorkeur gedetecteerd
          </div>
        </div>
      ),
    },
    {
      icon: Brain,
      iconBg: "#8B5CF6",
      title: "AI begrijpt context",
      time: "0.015s",
      content: (
        <div className="space-y-3">
          <div className="text-xs text-muted-foreground">
            De AI analyseert intentie, gedrag en context om het perfecte antwoord te vormen.
          </div>
          <div className="flex justify-between gap-2">
            <div className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                <Eye className="w-5 h-5 text-purple-600" />
              </div>
              <div className="text-xs">Intentie</div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                <User className="w-5 h-5 text-purple-600" />
              </div>
              <div className="text-xs">Profiel</div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-purple-600" />
              </div>
              <div className="text-xs">Gedrag</div>
            </div>
          </div>
          <div className="text-xs text-purple-600 flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            Context volledig begrepen
          </div>
        </div>
      ),
    },
    {
      icon: Zap,
      iconBg: "#3B82F6",
      title: "Past tone aan",
      time: "0.025s",
      content: (
        <div className="space-y-3">
          <div className="text-xs text-muted-foreground">
            Herkent wie er spreekt en past toon automatisch aan.
          </div>
          <div className="flex gap-2">
            <div className="flex-1 bg-muted/30 rounded p-2 text-xs opacity-50">
              <div className="flex items-center gap-1 mb-1">
                <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                <span className="text-[10px]">B2B</span>
              </div>
              <div className="text-[10px]">"Goedendag! Graag help ik u verder..."</div>
            </div>
            <div className="flex-1 bg-blue-50 rounded p-2 text-xs border-2 border-blue-500">
              <div className="flex items-center gap-1 mb-1">
                <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-white text-[8px]">
                  E
                </div>
                <span className="text-[10px] font-medium">Emma (Actief)</span>
              </div>
              <div className="text-[10px]">"Hey! 👋 Perfect, ik heb..."</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: Target,
      iconBg: "#22C55E",
      title: "Genereert aanbeveling",
      time: "0.055s",
      content: (
        <div className="space-y-2">
          <div className="text-xs text-muted-foreground mb-2">
            Combineert verkoopdata + klantprofiel + gedrag
          </div>
          <div className="grid grid-cols-2 gap-2 text-[10px]">
            <div className="flex items-center gap-1 text-green-600">
              • Winkelmandje
            </div>
            <div className="flex items-center gap-1 text-green-600">
              • Voorraad
            </div>
            <div className="flex items-center gap-1 text-green-600">
              • Reviews ⭐ 4.8+
            </div>
            <div className="flex items-center gap-1 text-green-600">
              • Conversie
            </div>
          </div>
          <div className="grid grid-cols-3 gap-1 mt-2">
            <div className="bg-red-500 h-12 rounded relative">
              <div className="absolute top-1 right-1 w-3 h-3 bg-green-500 rounded-full flex items-center justify-center">
                <Check className="w-2 h-2 text-white" />
              </div>
            </div>
            <div className="bg-red-500 h-12 rounded relative">
              <div className="absolute top-1 right-1 w-3 h-3 bg-green-500 rounded-full flex items-center justify-center">
                <Check className="w-2 h-2 text-white" />
              </div>
            </div>
            <div className="bg-red-500 h-12 rounded relative">
              <div className="absolute top-1 right-1 w-3 h-3 bg-green-500 rounded-full flex items-center justify-center">
                <Check className="w-2 h-2 text-white" />
              </div>
            </div>
          </div>
          <div className="text-center text-[10px] text-green-600 font-medium">
            Match 95%
          </div>
        </div>
      ),
    },
    {
      icon: Check,
      iconBg: "#22C55E",
      title: "Perfect antwoord",
      time: "⚡ 80ms",
      content: (
        <div className="space-y-2">
          <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-2 text-[10px] text-yellow-900">
            ⚡ 5x sneller dan menselijke reactie (100-150ms)
          </div>
          <div className="bg-muted/30 rounded-lg p-2 space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full flex items-center justify-center text-white text-[10px]">
                G
              </div>
              <span className="text-[10px] font-medium">Glimps AI</span>
            </div>
            <div className="text-[11px]">
              Hey! 👋 Ik heb <span className="font-semibold">23 rode sneakers</span> in maat 42. Op basis van je Nike voorkeur:
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-background rounded p-2">
                <div className="bg-red-500 h-12 rounded mb-1"></div>
                <div className="text-[10px] font-medium">Nike Air Max 1</div>
                <div className="flex items-center justify-between text-[10px]">
                  <span className="text-red-500 font-bold">€130</span>
                  <span className="flex items-center gap-0.5">
                    <Star className="w-2 h-2 fill-yellow-400 text-yellow-400" />
                    4.8
                  </span>
                </div>
              </div>
              <div className="bg-background rounded p-2">
                <div className="bg-red-500 h-12 rounded mb-1"></div>
                <div className="text-[10px] font-medium">Nike Air Max 2</div>
                <div className="flex items-center justify-between text-[10px]">
                  <span className="text-red-500 font-bold">€140</span>
                  <span className="flex items-center gap-0.5">
                    <Star className="w-2 h-2 fill-yellow-400 text-yellow-400" />
                    4.9
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="w-full py-24 px-6 bg-[#F9FAFB] relative overflow-hidden">
      {/* Grid background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(#E5E7EB_1px,transparent_1px),linear-gradient(90deg,#E5E7EB_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
      
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <Badge variant="outline" className="mb-6 text-red-500 border-red-200 bg-white">
            ACHTER DE SCHERMEN
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technisch maar toegankelijk
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
            Van intentieherkenning tot personalisatie: bekijk het proces dat elke klantinteractie efficiënt en accuraat maakt.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-red-500">
            <ArrowRight className="w-4 h-4" />
            <span>Scroll naar rechts om de reis te volgen</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        {/* Journey Steps - Horizontal Scroll */}
        <ScrollArea className="w-full">
          <div className="flex items-start gap-16 pb-8">
            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex items-start gap-8 flex-shrink-0">
                  {/* Step Card */}
                  <Card className="w-[280px] h-[320px] p-5 flex flex-col shadow-lg hover:shadow-xl transition-shadow bg-white">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center"
                        style={{ backgroundColor: step.iconBg }}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <Badge
                        variant="secondary"
                        className="text-xs font-mono"
                        style={{
                          backgroundColor: step.iconBg + "20",
                          color: step.iconBg,
                          border: "none",
                        }}
                      >
                        {step.time}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                    <div className="flex-1 overflow-y-auto">{step.content}</div>
                  </Card>

                  {/* Arrow between steps */}
                  {index < journeySteps.length - 1 && (
                    <div className="flex items-center h-[320px]">
                      <ArrowRight className="w-8 h-8 text-muted-foreground/40" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

      </div>
    </section>
  );
};

export default AIJourney;
