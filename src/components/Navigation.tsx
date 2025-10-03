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
            <img src={logoIcon} alt="Supahub" className="h-8 w-8" />
            <span className="text-xl font-bold">Supahub</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden items-center gap-8 md:flex">
            <button className="flex items-center gap-1 text-sm font-medium hover:text-primary">
              Features
              <ChevronDown className="h-4 w-4" />
            </button>
            <a href="#demo" className="text-sm font-medium hover:text-primary">
              Demo
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary">
              Pricing
            </a>
            <a href="#changelog" className="text-sm font-medium hover:text-primary">
              Changelog
            </a>
            <a href="#blog" className="text-sm font-medium hover:text-primary">
              Blog
            </a>
            <button className="text-sm font-medium hover:text-primary">+</button>
            <a href="#login" className="text-sm font-medium hover:text-primary">
              Login
            </a>
          </div>

          {/* CTA Button */}
          <Button variant="default" size="default" className="rounded-full">
            Sign up for free
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
