import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";

const Navigation = () => {
  return (
    <nav className="w-full border-b border-border/50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logoIcon} alt="glimps" className="h-8 w-8" />
            <span className="font-inter text-xl font-normal">glimps</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden items-center gap-8 md:flex">
            <a href="/features" className="text-sm font-medium hover:text-primary">
              Features
            </a>
            <a href="#demo" className="text-sm font-medium hover:text-primary">
              Demo
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary">
              Prijzen
            </a>
            <a href="#changelog" className="text-sm font-medium hover:text-primary">
              Changelog
            </a>
            <a href="#blog" className="text-sm font-medium hover:text-primary">
              Blog
            </a>
            <button className="text-sm font-medium hover:text-primary">+</button>
            <a href="#login" className="text-sm font-medium hover:text-primary">
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
