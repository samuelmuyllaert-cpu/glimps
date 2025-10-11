import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { Info, BarChart3, Users, Bot } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ROI = () => {
  // Input states - Traffic & Conversie
  const [visitors, setVisitors] = useState("15000");
  const [avgOrderValue, setAvgOrderValue] = useState("85");
  const [conversionRate, setConversionRate] = useState("2.5");
  const [visitorsWithQuestions, setVisitorsWithQuestions] = useState("35");

  // Input states - Support Team
  const [supportStaff, setSupportStaff] = useState("3");
  const [hourlySalary, setHourlySalary] = useState("25");
  const [timePerTicket, setTimePerTicket] = useState("8");
  const [ticketsPerMonth, setTicketsPerMonth] = useState("450");

  // Input states - AI Settings
  const [aiResolvePercentage, setAiResolvePercentage] = useState([60]);
  const [conversionLift, setConversionLift] = useState([30]);

  // Calculated values
  const [results, setResults] = useState({
    // Current situation
    currentConversions: 0,
    currentRevenueMonth: 0,
    currentRevenueYear: 0,
    supportHoursMonth: 0,
    supportCostMonth: 0,
    supportCostYear: 0,
    // With AI
    aiTickets: 0,
    newSupportHours: 0,
    savedHours: 0,
    costSavingsMonth: 0,
    costSavingsYear: 0,
    newConversionRate: 0,
    extraConversions: 0,
    extraRevenueMonth: 0,
    extraRevenueYear: 0,
    // Totals
    totalROIYear: 0,
    monthlyROI: 0,
    dailyROI: 0,
    paybackDays: 0,
  });

  const chatbotCost = 497;

  // Live calculations
  useEffect(() => {
    const v = parseFloat(visitors) || 0;
    const aov = parseFloat(avgOrderValue) || 0;
    const cr = parseFloat(conversionRate) || 0;
    const vwq = parseFloat(visitorsWithQuestions) || 0;
    const ss = parseFloat(supportStaff) || 0;
    const hs = parseFloat(hourlySalary) || 0;
    const tpt = parseFloat(timePerTicket) || 0;
    const tpm = parseFloat(ticketsPerMonth) || 0;
    const aiResolve = aiResolvePercentage[0];
    const clift = conversionLift[0];

    // Current situation
    const currentConversions = v * (cr / 100);
    const currentRevenueMonth = currentConversions * aov;
    const currentRevenueYear = currentRevenueMonth * 12;
    const supportHoursMonth = (tpm * tpt) / 60;
    const supportCostMonth = supportHoursMonth * hs;
    const supportCostYear = supportCostMonth * 12;

    // With AI
    const aiTickets = tpm * (aiResolve / 100);
    const humanTickets = tpm - aiTickets;
    const newSupportHours = (humanTickets * tpt) / 60;
    const savedHours = supportHoursMonth - newSupportHours;
    const costSavingsMonth = savedHours * hs;
    const costSavingsYear = costSavingsMonth * 12;

    // Conversion lift
    const newConversionRate = cr * (1 + clift / 100);
    const extraConversions = v * ((newConversionRate - cr) / 100);
    const extraRevenueMonth = extraConversions * aov;
    const extraRevenueYear = extraRevenueMonth * 12;

    // Totals
    const totalROIYear = costSavingsYear + extraRevenueYear;
    const monthlyROI = totalROIYear / 12;
    const dailyROI = totalROIYear / 365;
    const paybackDays = monthlyROI > 0 ? (chatbotCost / monthlyROI) * 30 : 0;

    setResults({
      currentConversions: Math.round(currentConversions),
      currentRevenueMonth: Math.round(currentRevenueMonth),
      currentRevenueYear: Math.round(currentRevenueYear),
      supportHoursMonth: Math.round(supportHoursMonth),
      supportCostMonth: Math.round(supportCostMonth),
      supportCostYear: Math.round(supportCostYear),
      aiTickets: Math.round(aiTickets),
      newSupportHours: Math.round(newSupportHours),
      savedHours: Math.round(savedHours),
      costSavingsMonth: Math.round(costSavingsMonth),
      costSavingsYear: Math.round(costSavingsYear),
      newConversionRate: parseFloat(newConversionRate.toFixed(2)),
      extraConversions: Math.round(extraConversions),
      extraRevenueMonth: Math.round(extraRevenueMonth),
      extraRevenueYear: Math.round(extraRevenueYear),
      totalROIYear: Math.round(totalROIYear),
      monthlyROI: Math.round(monthlyROI),
      dailyROI: Math.round(dailyROI),
      paybackDays: Math.round(paybackDays),
    });
  }, [
    visitors,
    avgOrderValue,
    conversionRate,
    visitorsWithQuestions,
    supportStaff,
    hourlySalary,
    timePerTicket,
    ticketsPerMonth,
    aiResolvePercentage,
    conversionLift,
  ]);

  const TooltipInfo = ({ text }: { text: string }) => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Info className="inline h-4 w-4 cursor-help text-muted-foreground" />
        </TooltipTrigger>
        <TooltipContent className="max-w-xs">
          <p className="text-sm">{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="ROI Calculator - Glimps AI | Bereken je Return on Investment"
        description="Bereken direct wat een AI chatbot jou oplevert. Zie hoeveel tijd en geld je bespaart en hoeveel extra omzet je genereert met Glimps."
        path="/roi"
      />
      <Navigation />
      
      <div className="container mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Bereken Jouw ROI</h1>
          <p className="text-lg text-muted-foreground">
            Vul je gegevens in en zie direct wat een AI chatbot jou oplevert
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* LEFT: Input Form */}
          <div className="space-y-10">
            {/* Section 1: Traffic & Conversie */}
            <Card className="p-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <BarChart3 className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold">Traffic & Conversie</h2>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    Maandelijkse websitebezoekers{" "}
                    <TooltipInfo text="Het totaal aantal unieke bezoekers op je website per maand" />
                  </Label>
                  <Input
                    type="number"
                    placeholder="15.000"
                    value={visitors}
                    onChange={(e) => setVisitors(e.target.value)}
                    className="border-border/50 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    Gemiddelde orderwaarde{" "}
                    <TooltipInfo text="De gemiddelde waarde van een bestelling in je webshop" />
                  </Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                      €
                    </span>
                    <Input
                      type="number"
                      placeholder="85"
                      value={avgOrderValue}
                      onChange={(e) => setAvgOrderValue(e.target.value)}
                      className="border-border/50 pl-7 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    Huidige conversie rate{" "}
                    <TooltipInfo text="Percentage bezoekers dat daadwerkelijk een aankoop doet" />
                  </Label>
                  <div className="relative">
                    <Input
                      type="number"
                      placeholder="2.5"
                      value={conversionRate}
                      onChange={(e) => setConversionRate(e.target.value)}
                      className="border-border/50 pr-8 focus:border-primary"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                      %
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    % bezoekers met vragen{" "}
                    <TooltipInfo text="Geschat percentage bezoekers dat vragen heeft tijdens het shopproces" />
                  </Label>
                  <div className="relative">
                    <Input
                      type="number"
                      placeholder="35"
                      value={visitorsWithQuestions}
                      onChange={(e) => setVisitorsWithQuestions(e.target.value)}
                      className="border-border/50 pr-8 focus:border-primary"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                      %
                    </span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Section 2: Support Team */}
            <Card className="p-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold">Support Team</h2>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <Label>Aantal customer support medewerkers</Label>
                  <Input
                    type="number"
                    placeholder="3"
                    value={supportStaff}
                    onChange={(e) => setSupportStaff(e.target.value)}
                    className="border-border/50 focus:border-primary"
                  />
                  <p className="text-xs text-muted-foreground">
                    Inclusief part-time (bereken als FTE)
                  </p>
                </div>

                <div className="space-y-2">
                  <Label>Salaris customer support per uur</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                      €
                    </span>
                    <Input
                      type="number"
                      placeholder="25"
                      value={hourlySalary}
                      onChange={(e) => setHourlySalary(e.target.value)}
                      className="border-border/50 pl-7 focus:border-primary"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Bruto incl. werkgeverslasten
                  </p>
                </div>

                <div className="space-y-2">
                  <Label>Tijd per ticket in minuten</Label>
                  <Input
                    type="number"
                    placeholder="8"
                    value={timePerTicket}
                    onChange={(e) => setTimePerTicket(e.target.value)}
                    className="border-border/50 focus:border-primary"
                  />
                  <p className="text-xs text-muted-foreground">
                    Gemiddelde handletijd
                  </p>
                </div>

                <div className="space-y-2">
                  <Label>Aantal support tickets per maand</Label>
                  <Input
                    type="number"
                    placeholder="450"
                    value={ticketsPerMonth}
                    onChange={(e) => setTicketsPerMonth(e.target.value)}
                    className="border-border/50 focus:border-primary"
                  />
                  <p className="text-xs text-muted-foreground">
                    Email, chat, telefoon totaal
                  </p>
                </div>
              </div>
            </Card>

            {/* Section 3: AI Settings */}
            <Card className="p-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Bot className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold">AI Instellingen</h2>
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>% tickets dat AI automatisch oplost</Label>
                    <span className="text-2xl font-bold text-primary">
                      {aiResolvePercentage[0]}%
                    </span>
                  </div>
                  <Slider
                    value={aiResolvePercentage}
                    onValueChange={setAiResolvePercentage}
                    max={95}
                    step={5}
                    className="py-4"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>0%</span>
                    <span>25%</span>
                    <span>50%</span>
                    <span>75%</span>
                    <span>95%</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Realistisch voor e-commerce: 50-70%
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>Gewenste conversie lift</Label>
                    <span className="text-2xl font-bold text-primary">
                      {conversionLift[0]}%
                    </span>
                  </div>
                  <Slider
                    value={conversionLift}
                    onValueChange={setConversionLift}
                    max={50}
                    step={5}
                    className="py-4"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>0%</span>
                    <span>15%</span>
                    <span>30%</span>
                    <span>50%</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Door snellere antwoorden
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* RIGHT: Results */}
          <div className="lg:sticky lg:top-8 lg:h-fit">
            <Card className="space-y-6 p-8 shadow-lg">
              {/* Section 1: Current Situation */}
              <div className="rounded-lg bg-muted/30 p-6">
                <h3 className="mb-4 flex items-center gap-2 text-lg font-bold">
                  📍 Jouw Huidige Situatie
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Conversies nu:</span>
                    <span className="font-semibold">
                      {results.currentConversions} ({conversionRate}%)
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Omzet per maand:</span>
                    <span className="font-semibold">
                      €{results.currentRevenueMonth.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Omzet per jaar:</span>
                    <span className="font-medium text-muted-foreground">
                      €{results.currentRevenueYear.toLocaleString()}
                    </span>
                  </div>
                  <div className="my-4 border-t border-border/50" />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Support uren/maand:</span>
                    <span className="font-semibold">{results.supportHoursMonth} uur</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Support kosten/maand:</span>
                    <span className="font-semibold">
                      €{results.supportCostMonth.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Support kosten/jaar:</span>
                    <span className="font-medium text-muted-foreground">
                      €{results.supportCostYear.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Section 2: With AI Chatbot */}
              <div className="rounded-lg bg-green-50 p-6 dark:bg-green-950/20">
                <h3 className="mb-4 flex items-center gap-2 text-lg font-bold">
                  ✨ Met AI Chatbot
                </h3>
                
                {/* Kostenbesparing */}
                <div className="mb-4 space-y-3 text-sm">
                  <p className="font-semibold">Kostenbesparing</p>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">AI lost automatisch op:</span>
                    <span className="font-semibold">
                      {aiResolvePercentage[0]}% ({results.aiTickets} tickets)
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Support uren/maand:</span>
                    <span className="font-semibold">
                      {results.newSupportHours} uur{" "}
                      <span className="text-xs text-muted-foreground">
                        (was {results.supportHoursMonth})
                      </span>
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Besparing:</span>
                    <span className="font-semibold">
                      {results.savedHours} uur/maand = €
                      {results.costSavingsMonth.toLocaleString()}/maand
                    </span>
                  </div>
                  <div className="mt-2 flex justify-between border-t border-green-200 pt-2 dark:border-green-900">
                    <span className="font-semibold">👉 Besparing per jaar:</span>
                    <span className="text-2xl font-bold text-green-600">
                      €{results.costSavingsYear.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Omzetstijging */}
                <div className="space-y-3 border-t border-green-200 pt-4 text-sm dark:border-green-900">
                  <p className="font-semibold">Omzetstijging</p>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Nieuwe conversie rate:</span>
                    <span className="font-semibold">
                      {results.newConversionRate}%{" "}
                      <span className="text-xs text-muted-foreground">
                        (was {conversionRate}%)
                      </span>
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Extra conversies/maand:</span>
                    <span className="font-semibold">{results.extraConversions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Extra omzet/maand:</span>
                    <span className="font-semibold">
                      €{results.extraRevenueMonth.toLocaleString()}
                    </span>
                  </div>
                  <div className="mt-2 flex justify-between border-t border-green-200 pt-2 dark:border-green-900">
                    <span className="font-semibold">👉 Extra omzet/jaar:</span>
                    <span className="text-2xl font-bold text-green-600">
                      €{results.extraRevenueYear.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Section 3: Total ROI */}
              <div className="rounded-lg bg-gradient-to-br from-primary to-primary/80 p-6 text-white">
                <h3 className="mb-4 text-center text-xl font-bold">🎯 TOTALE ROI</h3>
                <div className="space-y-2 text-center">
                  <div className="text-lg">
                    Kostenbesparing: €{results.costSavingsYear.toLocaleString()}/jaar
                  </div>
                  <div className="text-lg">
                    Extra omzet: €{results.extraRevenueYear.toLocaleString()}/jaar
                  </div>
                  <div className="my-3 border-t-2 border-white/30" />
                  <div className="text-5xl font-bold">
                    €{results.totalROIYear.toLocaleString()}
                  </div>
                  <div className="text-sm">per jaar</div>
                  <div className="mt-4 flex justify-center gap-4 text-sm opacity-90">
                    <span>Per maand: €{results.monthlyROI.toLocaleString()}</span>
                    <span>|</span>
                    <span>Per dag: €{results.dailyROI.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Section 4: Payback Time */}
              <div className="space-y-4">
                <h3 className="flex items-center gap-2 text-lg font-bold">
                  ⏱️ Terugverdientijd
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Investering chatbot:</span>
                    <span className="font-semibold">€{chatbotCost}/maand</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">ROI per maand:</span>
                    <span className="font-semibold">
                      €{results.monthlyROI.toLocaleString()}
                    </span>
                  </div>
                  <div className="my-2 border-t border-border/50" />
                  <div className="flex justify-between">
                    <span className="font-semibold">→ Terugverdiend in:</span>
                    <span className="text-2xl font-bold text-green-600">
                      {results.paybackDays > 0 ? results.paybackDays : "0"} dagen
                    </span>
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full bg-green-600 transition-all duration-500"
                      style={{
                        width: `${Math.min((30 / Math.max(results.paybackDays, 1)) * 100, 100)}%`,
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Button className="w-full rounded-full py-6 text-lg font-bold" size="lg">
                Plan Gratis ROI Audit
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                We tonen je exact hoe dit werkt voor jouw webshop
              </p>
            </Card>
          </div>
        </div>
      </div>

      <ChatWidget />
      <Footer />
    </div>
  );
};

export default ROI;