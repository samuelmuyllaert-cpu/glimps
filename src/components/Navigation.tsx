import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import glimpsLogo from "@/assets/glimps-logo.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const navLinks = language === 'fr' ? [
    { href: "/fr/fonctionnalites", label: "Fonctionnalités" },
    { href: "/fr/comment-nous-travaillons", label: "Comment nous travaillons" },
    { href: "/fr/faq", label: "FAQ" },
    { href: "/fr/blog", label: "Blog" },
    { href: "/fr/a-propos", label: "À propos" },
    { href: "/fr/contact", label: "Contact" },
  ] : [
    { href: "/features", label: "Features" },
    { href: "/how-we-work", label: "Hoe we werken" },
    { href: "/faq", label: "FAQ" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "Over Ons" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href={language === 'fr' ? '/fr' : '/'} className="flex items-center shrink-0">
            <img src={glimpsLogo} alt="glimps" className="h-8 sm:h-10" />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-6 lg:gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA Button and Language Switcher */}
          <div className="hidden md:flex items-center gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Globe className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage('nl')}>
                  <span className="mr-2">🇳🇱</span> Nederlands
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('fr')}>
                  <span className="mr-2">🇫🇷</span> Français
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button asChild variant="default" size="default" className="rounded-full">
              <a href={language === 'fr' ? '/fr/demo' : '/demo'}>
                {language === 'fr' ? 'Demander une démo' : 'Demo aanvragen'}
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="shrink-0">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="flex gap-2 mt-4">
                  <Button
                    variant={language === 'nl' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => {
                      setLanguage('nl');
                      setIsOpen(false);
                    }}
                    className="flex-1"
                  >
                    🇳🇱 NL
                  </Button>
                  <Button
                    variant={language === 'fr' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => {
                      setLanguage('fr');
                      setIsOpen(false);
                    }}
                    className="flex-1"
                  >
                    🇫🇷 FR
                  </Button>
                </div>
                <Button asChild variant="default" size="lg" className="rounded-full">
                  <a href={language === 'fr' ? '/fr/demo' : '/demo'}>
                    {language === 'fr' ? 'Demander une démo' : 'Demo aanvragen'}
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
