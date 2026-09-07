import glimpsLogo from "@/assets/glimps-logo-new.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { language } = useLanguage();
  const prefix = language === 'fr' ? '/fr' : language === 'en' ? '/en' : '';

  const t = (nl: string, fr: string, en: string) =>
    language === 'fr' ? fr : language === 'en' ? en : nl;

  return (
    <>
      <footer style={{ background: '#fff', padding: '80px 24px 0' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          {/* Five columns */}
          <div
            className="grid gap-12"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}
          >
            {/* Col 1 — Brand */}
            <div style={{ maxWidth: 260 }}>
              <a href={prefix || '/'}>
                <img src={glimpsLogo} alt="glimps" style={{ height: 32, marginBottom: 16 }} />
              </a>
              <p style={{ fontSize: 15, color: '#5A6472', lineHeight: 1.55, marginBottom: 16 }}>
                {t(
                  'Een digitale medewerker voor je inbox',
                  'Un collaborateur digital pour votre boîte mail',
                  'A digital employee for your inbox'
                )}
              </p>
              <span style={{ fontSize: 11, letterSpacing: '0.06em', color: '#5A6472', textTransform: 'uppercase' as const }}>
                {t('HET ANTWOORD LIGT AL KLAAR', 'LA RÉPONSE EST DÉJÀ PRÊTE', 'THE ANSWER IS ALREADY READY')}
              </span>
            </div>

            {/* Col 2 — Email Agent */}
            <div>
              <ColHeading>{t('E-MAILAGENT', 'AGENT E-MAIL', 'EMAIL AGENT')}</ColHeading>
              <ColLinks links={[
                { href: `${prefix}/email-agent`, label: t('Hoe het werkt', 'Comment ça marche', 'How it works') },
                { href: `${prefix}/integraties`, label: t('Integraties', 'Intégrations', 'Integrations') },
                { href: `${prefix}/email-agent`, label: t('Voor welke bedrijven', 'Pour quelles entreprises', 'For which companies') },
                { href: `${prefix}/faq`, label: t('Veelgestelde vragen', 'Questions fréquentes', 'FAQ') },
              ]} />
            </div>

            {/* Col 3 — Chatbot */}
            <div>
              <ColHeading>CHATBOT</ColHeading>
              <ColLinks links={[
                { href: language === 'fr' ? `${prefix}/fonctionnalites` : `${prefix}/features`, label: 'Features' },
                { href: `${prefix}/integraties`, label: t('Integraties', 'Intégrations', 'Integrations') },
                { href: language === 'fr' ? `${prefix}/industries/mode-design` : `${prefix}/industries/fashion-design`, label: t('Sectoren', 'Secteurs', 'Industries') },
                { href: language === 'fr' ? `${prefix}/pret-ecom` : `${prefix}/ecom-readiness`, label: 'Readiness quiz' },
              ]} />
            </div>

            {/* Col 4 — Company */}
            <div>
              <ColHeading>{t('BEDRIJF', 'ENTREPRISE', 'COMPANY')}</ColHeading>
              <ColLinks links={[
                { href: language === 'fr' ? `${prefix}/a-propos` : `${prefix}/about`, label: t('Over ons', 'À propos', 'About us') },
                { href: language === 'fr' ? `${prefix}/comment-nous-travaillons` : `${prefix}/how-we-work`, label: t('Hoe we werken', 'Comment nous travaillons', 'How we work') },
                { href: `${prefix}/blog`, label: 'Blog' },
                { href: language === 'fr' ? `${prefix}/carrieres` : `${prefix}/career`, label: t('Vacatures', 'Emplois', 'Careers') },
                { href: `${prefix}/contact`, label: 'Contact' },
              ]} />
              <a
                href={`${prefix}/contact`}
                style={{ display: 'block', fontSize: 14, fontStyle: 'italic', color: '#5A6472', marginTop: 12 }}
              >
                {t('Klantcases op aanvraag', 'Études de cas sur demande', 'Case studies on request')}
              </a>
            </div>

            {/* Col 5 — Legal */}
            <div>
              <ColHeading>{t('JURIDISCH', 'JURIDIQUE', 'LEGAL')}</ColHeading>
              <ColLinks links={[
                { href: language === 'fr' ? `${prefix}/legal` : `${prefix}/legal`, label: t('Privacy', 'Confidentialité', 'Privacy') },
                { href: `${prefix}/legal`, label: t('Algemene voorwaarden', 'Conditions générales', 'Terms & conditions') },
                { href: `${prefix}/legal`, label: 'Cookies' },
              ]} />
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{
            borderTop: '1px solid #EDF1F6', marginTop: 64, padding: '24px 0 32px',
            display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 8,
          }}>
            <span style={{ fontSize: 13, color: '#5A6472' }}>
              Rustenburgstraat 9, 8000 Brugge &middot; BE 0682.779.139
            </span>
            <span style={{ fontSize: 13, color: '#5A6472' }}>
              {t(
                'Glimps is onderdeel van Uplevel bv',
                'Glimps fait partie de Uplevel bv',
                'Glimps is part of Uplevel bv'
              )}
            </span>
          </div>
        </div>
      </footer>

      {/* Integration links row */}
      <div style={{ background: '#fff', padding: '0 24px 24px' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          {(() => {
            const integrations = [
              'shopify', 'woocommerce', 'shopware', 'magento', 'odoo',
              'lightspeed', 'prestashop', 'wix', 'wordpress', 'sendcloud',
              'bpost', 'postnl', 'dhl', 'gls', 'myparcel', 'picqer', 'fulfillment-centers',
            ];
            const labels: Record<string, string> = {
              'fulfillment-centers': 'Fulfillment Centers',
              prestashop: 'PrestaShop',
              postnl: 'PostNL',
              woocommerce: 'WooCommerce',
            };
            return (
              <div className="flex flex-wrap gap-x-3 gap-y-1" style={{ fontSize: 11, color: 'rgba(90,100,114,0.35)' }}>
                {integrations.map((slug) => (
                  <a
                    key={slug}
                    href={`${prefix}/integrations/${slug}`}
                    style={{ textTransform: 'capitalize' }}
                    className="hover:text-muted-foreground/60 transition-colors"
                  >
                    {labels[slug] ?? slug}
                  </a>
                ))}
              </div>
            );
          })()}
        </div>
      </div>
    </>
  );
};

function ColHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4 style={{
      fontSize: 11, letterSpacing: '0.06em', color: '#5A6472',
      fontWeight: 600, marginBottom: 20, textTransform: 'uppercase' as const,
    }}>
      {children}
    </h4>
  );
}

function ColLinks({ links }: { links: { href: string; label: string }[] }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
      {links.map((link) => (
        <li key={link.href + link.label}>
          <a
            href={link.href}
            style={{ fontSize: 14, color: '#5A6472', textDecoration: 'none' }}
            className="hover:text-foreground transition-colors"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Footer;
