import { useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
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

  const prefix = language === 'fr' ? '/fr' : language === 'en' ? '/en' : '';

  const navLinks = language === 'fr'
    ? [
        { href: `${prefix}/email-agent`, label: 'Agent e-mail', dot: '#1B3A5C' },
        { href: `${prefix}/fonctionnalites`, label: 'Chatbot', dot: '#E74E4D' },
        { href: `${prefix}/comment-nous-travaillons`, label: 'Comment nous travaillons' },
        { href: `${prefix}/a-propos`, label: 'À propos' },
      ]
    : language === 'en'
    ? [
        { href: `${prefix}/email-agent`, label: 'Email agent', dot: '#1B3A5C' },
        { href: `${prefix}/features`, label: 'Chatbot', dot: '#E74E4D' },
        { href: `${prefix}/how-we-work`, label: 'How we work' },
        { href: `${prefix}/about`, label: 'About us' },
      ]
    : [
        { href: '/email-agent', label: 'E-mailagent', dot: '#1B3A5C' },
        { href: '/features', label: 'Chatbot', dot: '#E74E4D' },
        { href: '/how-we-work', label: 'Hoe we werken' },
        { href: '/about', label: 'Over ons' },
      ];

  const ctaLabel = language === 'fr' ? 'Planifier un appel' : language === 'en' ? 'Book a call' : 'Plan een gesprek';
  const demoHref = `${prefix}/demo`;

  return (
    <div className="sticky top-0 z-50 w-full" style={{ padding: '16px 24px 0' }}>
      <header
        className="mx-auto flex items-center"
        style={{
          maxWidth: 1180,
          background: 'rgba(255,255,255,0.86)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: '1px solid #E4E7EC',
          borderRadius: 999,
          boxShadow: '0 14px 34px -22px rgba(21,23,28,0.28)',
          padding: '8px 8px 8px 28px',
        }}
      >
        <a href={prefix || '/'} className="flex-shrink-0">
          <img src={glimpsLogo} alt="glimps" style={{ height: 28 }} />
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-1 ml-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-flex items-center gap-2 px-3"
              style={{ fontSize: '14.5px', color: '#5A6472', fontWeight: 400, minHeight: 44 }}
            >
              {link.dot && (
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: link.dot, flexShrink: 0 }} />
              )}
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-2 ml-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className="inline-flex items-center justify-center"
                style={{
                  width: 36, height: 36, borderRadius: '50%',
                  border: '1px solid #E4E7EC', background: 'transparent',
                  fontSize: 13, fontWeight: 500, color: '#5A6472', cursor: 'pointer',
                }}
              >
                {language.toUpperCase()}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage('nl')}>Nederlands</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('fr')}>Français</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('en')}>English</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <a
            href={demoHref}
            className="inline-flex items-center justify-center"
            style={{
              background: '#E74E4D', color: '#fff',
              fontSize: '14.5px', fontWeight: 600,
              height: 40, padding: '0 22px', borderRadius: 999,
            }}
          >
            {ctaLabel}
          </a>
        </div>

        {/* Mobile menu */}
        <div className="ml-auto md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="shrink-0">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] max-w-xs">
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-2 text-base font-medium"
                    style={{ color: '#10161F' }}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.dot && (
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: link.dot }} />
                    )}
                    {link.label}
                  </a>
                ))}
                <div className="flex gap-2 mt-4">
                  {(['nl', 'fr', 'en'] as const).map((lng) => (
                    <Button
                      key={lng}
                      variant={language === lng ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => { setLanguage(lng); setIsOpen(false); }}
                      className="flex-1"
                    >
                      {lng.toUpperCase()}
                    </Button>
                  ))}
                </div>
                <a
                  href={demoHref}
                  className="inline-flex items-center justify-center"
                  style={{
                    background: '#E74E4D', color: '#fff',
                    fontSize: 15, fontWeight: 600,
                    height: 48, borderRadius: 999,
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  {ctaLabel}
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </div>
  );
};

export default Navigation;
