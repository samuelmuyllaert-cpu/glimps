import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Shield, Lock, Award, Calculator, ArrowRight } from "lucide-react";
import { useState } from "react";
import logoIcon from "@/assets/logo-icon.png";

const Footer = () => {
  const [monthlyChats, setMonthlyChats] = useState("");
  const [conversionRate, setConversionRate] = useState("");
  const [averageOrder, setAverageOrder] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [roi, setRoi] = useState({ monthly: 0, yearly: 0, investment: 99 });

  const calculateROI = () => {
    const chats = parseInt(monthlyChats) || 0;
    const conversion = parseFloat(conversionRate) || 0;
    const order = parseFloat(averageOrder) || 0;

    // Bereken extra omzet door chatbot (5% conversie verbetering)
    const extraConversions = (chats * (conversion / 100) * 0.05);
    const monthlyRevenue = extraConversions * order;
    const yearlyRevenue = monthlyRevenue * 12;
    const investment = 99; // Monthly cost

    setRoi({
      monthly: Math.round(monthlyRevenue),
      yearly: Math.round(yearlyRevenue),
      investment: investment
    });
    setShowResult(true);
  };

  return (
    <footer className="border-t border-border/50 bg-background">
      {/* ROI Calculator Lead Magnet */}
      <div className="border-b border-border/50 bg-gradient-to-br from-primary/5 to-background py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl">
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 md:p-12">
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white">
                    <Calculator className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold md:text-3xl">Bereken je ROI</h3>
                    <p className="text-muted-foreground">
                      Ontdek hoeveel een AI-chatbot jouw business kan opleveren
                    </p>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Maandelijkse chats</label>
                    <Input
                      type="number"
                      placeholder="bijv. 1000"
                      value={monthlyChats}
                      onChange={(e) => setMonthlyChats(e.target.value)}
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Conversie rate (%)</label>
                    <Input
                      type="number"
                      placeholder="bijv. 2.5"
                      value={conversionRate}
                      onChange={(e) => setConversionRate(e.target.value)}
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Gem. orderwaarde (€)</label>
                    <Input
                      type="number"
                      placeholder="bijv. 75"
                      value={averageOrder}
                      onChange={(e) => setAverageOrder(e.target.value)}
                      className="bg-background"
                    />
                  </div>
                </div>

                <Button
                  onClick={calculateROI}
                  className="mt-6 w-full rounded-full md:w-auto"
                  size="lg"
                >
                  Bereken ROI
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                {showResult && (
                  <div className="mt-8 grid gap-4 rounded-2xl bg-background p-6 md:grid-cols-3">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Extra omzet / maand</p>
                      <p className="text-3xl font-bold text-primary">€{roi.monthly.toLocaleString()}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Extra omzet / jaar</p>
                      <p className="text-3xl font-bold text-primary">€{roi.yearly.toLocaleString()}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Investering / maand</p>
                      <p className="text-3xl font-bold">€{roi.investment}</p>
                    </div>
                    <div className="col-span-full mt-4 text-center">
                      <p className="text-sm text-muted-foreground">
                        ROI: <span className="text-2xl font-bold text-green-600">{Math.round((roi.yearly / (roi.investment * 12)) * 100)}%</span> per jaar
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center">
              <img src={logoIcon} alt="glimps" className="h-8" />
            </div>
            <p className="text-sm text-muted-foreground">
              De slimste AI-chatbot voor e-commerce. Boost je omzet met geautomatiseerde klantenservice.
            </p>
            
            {/* Trust Badges */}
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">GDPR Compliant</p>
                  <p className="text-xs text-muted-foreground">100% EU regelgeving</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Lock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Privacy First</p>
                  <p className="text-xs text-muted-foreground">Jouw data is veilig</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Best in Tech</p>
                  <p className="text-xs text-muted-foreground">Nieuwste AI technologie</p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Product</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/features" className="text-muted-foreground hover:text-primary">
                  Features
                </a>
              </li>
              <li>
                <a href="/integraties" className="text-muted-foreground hover:text-primary">
                  Integraties
                </a>
              </li>
              <li>
                <a href="/demo" className="text-muted-foreground hover:text-primary">
                  Demo
                </a>
              </li>
              <li>
                <a href="/roi" className="text-muted-foreground hover:text-primary">
                  ROI Calculator
                </a>
              </li>
              <li>
                <a href="/ecom-readiness" className="text-muted-foreground hover:text-primary">
                  Readiness Quiz
                </a>
              </li>
              <li>
                <a href="/ecom-agents" className="text-muted-foreground hover:text-primary">
                  Ecom Agents
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Bedrijf</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/about" className="text-muted-foreground hover:text-primary">
                  Over Ons
                </a>
              </li>
              <li>
                <a href="/how-we-work" className="text-muted-foreground hover:text-primary">
                  Hoe we werken
                </a>
              </li>
              <li>
                <a href="/partners" className="text-muted-foreground hover:text-primary">
                  Partners
                </a>
              </li>
              <li>
                <a href="/blog" className="text-muted-foreground hover:text-primary">
                  Blog
                </a>
              </li>
              <li>
                <a href="/career" className="text-muted-foreground hover:text-primary">
                  Carrière
                </a>
              </li>
              <li>
                <a href="/consultancy" className="text-muted-foreground hover:text-primary">
                  Consultancy
                </a>
              </li>
              <li>
                <a href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </a>
              </li>
              <li>
                <a href="/changelog" className="text-muted-foreground hover:text-primary">
                  Changelog
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Juridisch</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Algemene Voorwaarden
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  GDPR
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Glimps. Alle rechten voorbehouden.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
