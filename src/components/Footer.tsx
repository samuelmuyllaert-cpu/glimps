import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Shield, Lock, Award, ArrowRight } from "lucide-react";
import { useState } from "react";
import logoIcon from "@/assets/logo-icon.png";
import glimpsLogoFooter from "@/assets/glimps-logo-new.png";
import { toast } from "sonner";

const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [submittingNewsletter, setSubmittingNewsletter] = useState(false);

  const handleNewsletterSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newsletterEmail.trim()) {
      toast.error("Vul een geldig e-mailadres in");
      return;
    }

    setSubmittingNewsletter(true);
    
    try {
      const response = await fetch("https://hook.eu2.make.com/9ag2uhlgs336u7dc4fuinlrikixrmmjr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: newsletterEmail }),
      });

      if (response.ok) {
        toast.success("Je bent ingeschreven voor de nieuwsbrief!");
        setNewsletterEmail("");
      } else {
        toast.error("Er ging iets mis. Probeer het opnieuw.");
      }
    } catch (error) {
      console.error("Newsletter signup error:", error);
      toast.error("Er ging iets mis. Probeer het opnieuw.");
    } finally {
      setSubmittingNewsletter(false);
    }
  };

  return (
    <footer className="border-t border-border/50 bg-background">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-5">
          {/* Company Info */}
          <div className="space-y-4 md:col-span-1">
            <a href="/" className="flex items-center">
              <img src={glimpsLogoFooter} alt="glimps" className="h-16" />
            </a>
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

          {/* Industries Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Industrieën</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/industries/fashion-design" className="text-muted-foreground hover:text-primary">
                  Fashion & Design
                </a>
              </li>
              <li>
                <a href="/industries/beauty-cosmetica" className="text-muted-foreground hover:text-primary">
                  Beauty & Cosmetica
                </a>
              </li>
              <li>
                <a href="/industries/electronics" className="text-muted-foreground hover:text-primary">
                  Electronics & Technology
                </a>
              </li>
              <li>
                <a href="/industries/meubels-interieur" className="text-muted-foreground hover:text-primary">
                  Meubels & Interieur
                </a>
              </li>
              <li>
                <a href="/industries/sportkleding-fitness" className="text-muted-foreground hover:text-primary">
                  Sportkleding & Fitness
                </a>
              </li>
              <li>
                <a href="/industries/tuin-buitenleven" className="text-muted-foreground hover:text-primary">
                  Tuin en Buitenleven
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Juridisch</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/legal" className="text-muted-foreground hover:text-primary">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/legal" className="text-muted-foreground hover:text-primary">
                  Algemene Voorwaarden
                </a>
              </li>
              <li>
                <a href="/legal" className="text-muted-foreground hover:text-primary">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="/legal" className="text-muted-foreground hover:text-primary">
                  GDPR
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 border-t border-border/50 pt-12">
          <div className="max-w-md mx-auto text-center">
            <h4 className="font-semibold text-lg mb-2">Blijf op de hoogte</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Ontvang de nieuwste updates, tips en AI-insights direct in je inbox
            </p>
            <form onSubmit={handleNewsletterSignup} className="flex gap-2">
              <Input
                type="email"
                placeholder="je@email.be"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                disabled={submittingNewsletter}
                className="bg-background"
              />
              <Button 
                type="submit"
                variant="default" 
                className="rounded-full"
                disabled={submittingNewsletter}
              >
                {submittingNewsletter ? "Bezig..." : "Abonneer"}
              </Button>
            </form>
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
