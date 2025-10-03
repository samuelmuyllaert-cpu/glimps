import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import glimpsLogo from "@/assets/glimps-logo.png";

const Navigation = () => {
  return (
    <nav className="w-full border-b border-border/50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src={glimpsLogo} alt="glimps" className="h-10" />
          </a>

          {/* Navigation Links */}
          <div className="hidden items-center gap-8 md:flex">
            <a href="/features" className="text-sm font-medium hover:text-primary">
              Features
            </a>
            <a href="/demo" className="text-sm font-medium hover:text-primary">
              Demo
            </a>
            <a href="/faq" className="text-sm font-medium hover:text-primary">
              FAQ
            </a>
            <a href="/changelog" className="text-sm font-medium hover:text-primary">
              Changelog
            </a>
            <a href="/blog" className="text-sm font-medium hover:text-primary">
              Blog
            </a>
            <a href="/about" className="text-sm font-medium hover:text-primary">
              Over Ons
            </a>
            <a href="/login" className="text-sm font-medium hover:text-primary">
              Inloggen
            </a>
          </div>

          {/* CTA Button */}
          <Button variant="default" size="default" className="rounded-full">
            Gratis aanmelden
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
