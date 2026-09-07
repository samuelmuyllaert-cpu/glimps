import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StructuredData, { baseOrganization } from "@/components/StructuredData";
import { useLanguage } from "@/contexts/LanguageContext";
import glimpsLogo from "@/assets/glimps-logo-new.png";

const Index = () => {
  const { language } = useLanguage();
  const prefix = language === 'fr' ? '/fr' : language === 'en' ? '/en' : '';

  const t = (nl: string, fr: string, en: string) =>
    language === 'fr' ? fr : language === 'en' ? en : nl;

  const structuredData = [
    {
      "@type": "WebPage",
      "@id": `https://www.glimps.be${prefix || '/'}`,
      url: `https://www.glimps.be${prefix || '/'}`,
      name: t(
        'AI voor je klantenservice | Glimps',
        'IA pour votre service client | Glimps',
        'AI for your customer service | Glimps'
      ),
      description: t(
        'Kies tussen onze e-mailagent en AI chatbot. Glimps automatiseert je klantenservice met slimme AI.',
        'Choisissez entre notre agent e-mail et chatbot IA. Glimps automatise votre service client.',
        'Choose between our email agent and AI chatbot. Glimps automates your customer service with smart AI.'
      ),
      inLanguage: language === 'fr' ? 'fr-BE' : language === 'en' ? 'en-GB' : 'nl-BE',
      publisher: { "@id": "https://www.glimps.be#organization" },
    },
    baseOrganization,
  ];

  return (
    <>
      <SEO
        title={t(
          'AI voor je klantenservice | Glimps',
          'IA pour votre service client | Glimps',
          'AI for your customer service | Glimps'
        )}
        description={t(
          'Kies tussen onze e-mailagent en AI chatbot. Glimps automatiseert je klantenservice met slimme AI.',
          'Choisissez entre notre agent e-mail et chatbot IA. Glimps automatise votre service client.',
          'Choose between our email agent and AI chatbot. Glimps automates your customer service with smart AI.'
        )}
        canonicalPath={prefix || '/'}
      />
      <StructuredData data={structuredData} />
      <Navigation />

      <div style={{ background: '#fff', minHeight: '100vh' }}>
        {/* Background decoration */}
        <div
          style={{
            position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0,
          }}
        >
          <div
            style={{
              position: 'absolute', top: -300, left: -200, width: 900, height: 900,
              borderRadius: '50%', background: 'radial-gradient(circle, #D8E4F0 0%, rgba(231,238,245,0) 70%)',
              opacity: 0.7, filter: 'blur(120px)',
            }}
          />
          <div
            style={{
              position: 'absolute', bottom: -200, right: -200, width: 800, height: 800,
              borderRadius: '50%', background: 'radial-gradient(circle, #F6D9D5 0%, rgba(250,231,229,0) 70%)',
              opacity: 0.7, filter: 'blur(130px)',
            }}
          />
        </div>

        {/* Hero */}
        <section
          style={{
            position: 'relative', zIndex: 1,
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            textAlign: 'center', padding: '160px 24px 40px',
          }}
        >
          <img
            src={glimpsLogo}
            alt="Glimps"
            style={{ height: 40, marginBottom: 32 }}
          />
          <h1
            style={{
              margin: 0, maxWidth: 720,
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontWeight: 400, fontSize: 'clamp(36px, 6vw, 68px)',
              lineHeight: 1.05, letterSpacing: '-0.02em',
              color: '#10161F',
            }}
          >
            {t(
              'Wat wil je automatiseren?',
              'Que voulez-vous automatiser\u00a0?',
              'What do you want to automate?'
            )}
          </h1>
          <p
            style={{
              margin: '20px 0 0', maxWidth: 540,
              fontSize: 18, lineHeight: 1.6, color: '#5A6472',
            }}
          >
            {t(
              'Kies het product dat bij jouw team past.',
              'Choisissez le produit qui convient \u00e0 votre \u00e9quipe.',
              'Pick the product that fits your team.'
            )}
          </p>
        </section>

        {/* Product cards */}
        <section
          style={{
            position: 'relative', zIndex: 1,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
            gap: 28, maxWidth: 1060, margin: '0 auto',
            padding: '40px 24px 120px',
          }}
        >
          {/* Email Agent card */}
          <a
            href={`${prefix}/email-agent`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div
              className="home-card"
              style={{
                position: 'relative', overflow: 'hidden',
                background: '#fff', borderRadius: 28,
                border: '1px solid #E4E7EC',
                boxShadow: '0 2px 6px -3px rgba(16,22,31,0.07), 0 24px 48px -32px rgba(16,22,31,0.22)',
                padding: '44px 40px 40px',
                transition: 'transform 280ms cubic-bezier(0.23,1,0.32,1), box-shadow 280ms cubic-bezier(0.23,1,0.32,1)',
                cursor: 'pointer',
              }}
            >
              {/* Accent bar */}
              <div style={{ position: 'absolute', top: 0, left: 40, right: 40, height: 3, borderRadius: '0 0 3px 3px', background: '#1B3A5C' }} />

              {/* Icon */}
              <div
                style={{
                  width: 56, height: 56, borderRadius: 16,
                  background: '#E7EEF5', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 28,
                }}
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1B3A5C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>

              <h2 style={{ margin: 0, fontSize: 28, fontWeight: 600, letterSpacing: '-0.02em', color: '#10161F' }}>
                {t('E-mailagent', 'Agent e-mail', 'Email Agent')}
              </h2>

              <p style={{ margin: '14px 0 0', fontSize: 17, lineHeight: 1.55, color: '#5A6472', maxWidth: 380 }}>
                {t(
                  'Hij leest je inbox, zoekt op in je ERP en schrijft het antwoord. Jij klikt verzenden.',
                  'Il lit votre boîte mail, cherche dans votre ERP et rédige la réponse. Vous cliquez envoyer.',
                  'It reads your inbox, looks up your ERP and drafts the reply. You click send.'
                )}
              </p>

              {/* Mini inbox preview */}
              <div
                style={{
                  marginTop: 32, background: '#F4F7FA', borderRadius: 16, padding: '18px 20px',
                  display: 'flex', flexDirection: 'column', gap: 12,
                }}
              >
                {[
                  { initials: 'NG', name: 'Nordveld Groothandel', msg: t('Klopt de levertermijn nog?', 'Le délai est-il correct\u00a0?', 'Is the delivery date still correct?') },
                  { initials: 'BW', name: 'Bouwshop Waregem', msg: t('Creditnota voor factuur 2291', 'Note de crédit facture 2291', 'Credit note for invoice 2291') },
                  { initials: 'MD', name: 'Machinehandel Dierckx', msg: t('Welk filter past op de 4400?', 'Quel filtre pour la série 4400\u00a0?', 'Which filter fits the 4400?') },
                ].map((item) => (
                  <div key={item.initials} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span
                      style={{
                        flexShrink: 0, width: 34, height: 34, borderRadius: 10,
                        background: '#E7EEF5', color: '#1B3A5C',
                        fontSize: 11, fontWeight: 600,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}
                    >
                      {item.initials}
                    </span>
                    <div style={{ minWidth: 0, flex: 1 }}>
                      <div style={{ fontSize: 13, fontWeight: 600, color: '#10161F' }}>{item.name}</div>
                      <div style={{ fontSize: 12.5, color: '#5A6472', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' as const }}>{item.msg}</div>
                    </div>
                    <span
                      style={{
                        flexShrink: 0, display: 'inline-flex', alignItems: 'center', gap: 5,
                        background: '#fff', color: '#0E7C66',
                        fontSize: 10.5, fontWeight: 600,
                        padding: '4px 9px', borderRadius: 999,
                      }}
                    >
                      <span style={{ width: 4, height: 4, borderRadius: 999, background: '#0E7C66' }} />
                      {t('Klaar', 'Prêt', 'Ready')}
                    </span>
                  </div>
                ))}
              </div>

              {/* Arrow */}
              <div
                style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  marginTop: 32, fontSize: 15, fontWeight: 500, color: '#1B3A5C',
                }}
              >
                {t('Bekijk de e-mailagent', 'Découvrir l\'agent e-mail', 'Explore the email agent')}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </div>
          </a>

          {/* Chatbot card */}
          <a
            href={`${prefix}/features`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div
              className="home-card"
              style={{
                position: 'relative', overflow: 'hidden',
                background: '#fff', borderRadius: 28,
                border: '1px solid #E4E7EC',
                boxShadow: '0 2px 6px -3px rgba(16,22,31,0.07), 0 24px 48px -32px rgba(16,22,31,0.22)',
                padding: '44px 40px 40px',
                transition: 'transform 280ms cubic-bezier(0.23,1,0.32,1), box-shadow 280ms cubic-bezier(0.23,1,0.32,1)',
                cursor: 'pointer',
              }}
            >
              {/* Accent bar */}
              <div style={{ position: 'absolute', top: 0, left: 40, right: 40, height: 3, borderRadius: '0 0 3px 3px', background: '#E74E4D' }} />

              {/* Icon */}
              <div
                style={{
                  width: 56, height: 56, borderRadius: 16,
                  background: '#FDF4F3', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 28,
                }}
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#E74E4D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  <path d="M8 10h.01" /><path d="M12 10h.01" /><path d="M16 10h.01" />
                </svg>
              </div>

              <h2 style={{ margin: 0, fontSize: 28, fontWeight: 600, letterSpacing: '-0.02em', color: '#10161F' }}>
                {t('AI Chatbot', 'Chatbot IA', 'AI Chatbot')}
              </h2>

              <p style={{ margin: '14px 0 0', fontSize: 17, lineHeight: 1.55, color: '#5A6472', maxWidth: 380 }}>
                {t(
                  'Begeleidt bezoekers 24/7, verhoogt conversie en automatiseert klantenservice op je webshop.',
                  'Guide les visiteurs 24h/24, augmente la conversion et automatise le service client sur votre boutique.',
                  'Guides visitors 24/7, boosts conversion and automates customer service on your webshop.'
                )}
              </p>

              {/* Mini chat preview */}
              <div
                style={{
                  marginTop: 32, background: '#FDF4F3', borderRadius: 16, padding: '18px 20px',
                  display: 'flex', flexDirection: 'column', gap: 10,
                }}
              >
                <div style={{ display: 'flex', gap: 10 }}>
                  <span
                    style={{
                      flexShrink: 0, width: 30, height: 30, borderRadius: 999,
                      background: '#E74E4D', color: '#fff',
                      fontSize: 12, fontWeight: 600,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}
                  >
                    G
                  </span>
                  <div style={{ background: '#fff', borderRadius: '14px 14px 14px 4px', padding: '10px 14px', fontSize: 13, lineHeight: 1.5, color: '#10161F', maxWidth: 280 }}>
                    {t(
                      'Ik zoek een lichte hardloopschoen voor op de weg. Budget rond de \u20ac120.',
                      'Je cherche une chaussure de course l\u00e9g\u00e8re. Budget environ 120\u00a0\u20ac.',
                      'I\'m looking for a lightweight road running shoe. Budget around \u20ac120.'
                    )}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
                  <div style={{ background: '#fff', borderRadius: '14px 14px 4px 14px', padding: '10px 14px', fontSize: 13, lineHeight: 1.5, color: '#10161F', maxWidth: 280 }}>
                    {t(
                      'Dan raad ik de Aero Glide 3 aan - 108 gram, perfect voor tempo.',
                      'Je recommande l\'Aero Glide 3 \u2013 108 g, parfait pour le tempo.',
                      'I\'d recommend the Aero Glide 3 \u2014 108g, perfect for tempo runs.'
                    )}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 6, marginTop: 2 }}>
                  {[
                    t('Specs bekijken', 'Voir les specs', 'View specs'),
                    t('Vergelijken', 'Comparer', 'Compare'),
                  ].map((label) => (
                    <span
                      key={label}
                      style={{
                        display: 'inline-flex', alignItems: 'center',
                        background: '#fff', border: '1px solid #E4E7EC',
                        borderRadius: 999, padding: '5px 11px',
                        fontSize: 11.5, fontWeight: 500, color: '#5A6472',
                      }}
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div
                style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  marginTop: 32, fontSize: 15, fontWeight: 500, color: '#E74E4D',
                }}
              >
                {t('Bekijk de chatbot', 'Découvrir le chatbot', 'Explore the chatbot')}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </div>
          </a>
        </section>

        {/* Trust bar */}
        <section
          style={{
            position: 'relative', zIndex: 1,
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            padding: '0 24px 40px', textAlign: 'center',
          }}
        >
          <p style={{ margin: 0, fontSize: 13, color: '#9AA1AC', letterSpacing: '0.04em' }}>
            {t(
              'Vertrouwd door e-commerceteams in heel België',
              'Approuvé par des équipes e-commerce dans toute la Belgique',
              'Trusted by e-commerce teams across Belgium'
            )}
          </p>
        </section>

        {/* CTA */}
        <section
          style={{
            position: 'relative', zIndex: 1,
            maxWidth: 1060, margin: '0 auto',
            padding: '0 24px 120px',
          }}
        >
          <div
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              flexWrap: 'wrap', gap: 32,
              borderRadius: 36, background: '#14273D', color: '#fff',
              padding: 'clamp(40px, 5vw, 72px)',
            }}
          >
            <div>
              <h2
                style={{
                  margin: 0, maxWidth: 480,
                  fontFamily: "'Instrument Serif', Georgia, serif",
                  fontWeight: 400, fontSize: 'clamp(28px, 4vw, 44px)',
                  lineHeight: 1.1, letterSpacing: '-0.02em',
                }}
              >
                {t('Niet zeker welk product past?', 'Pas sûr quel produit convient\u00a0?', 'Not sure which product fits?')}
              </h2>
              <p style={{ margin: '14px 0 0', fontSize: 17, color: '#D3DDE8' }}>
                {t(
                  'Plan een gesprek van dertig minuten. Wij helpen je kiezen.',
                  'Planifiez un appel de trente minutes. Nous vous aidons \u00e0 choisir.',
                  'Book a thirty-minute call. We\'ll help you choose.'
                )}
              </p>
            </div>
            <a
              href={`${prefix}/demo`}
              style={{
                flexShrink: 0, display: 'inline-flex', alignItems: 'center',
                minHeight: 52, background: '#fff', color: '#14273D',
                fontSize: 15.5, fontWeight: 500,
                padding: '0 30px', borderRadius: 999,
                textDecoration: 'none',
                transition: 'transform 160ms ease-out',
              }}
            >
              {t('Plan een gesprek', 'Planifier un appel', 'Book a call')}
            </a>
          </div>
        </section>
      </div>

      {/* Hover styles */}
      <style>{`
        @media (hover: hover) and (pointer: fine) {
          .home-card:hover {
            transform: translateY(-4px) !important;
            box-shadow: 0 2px 6px -3px rgba(16,22,31,0.07), 0 36px 64px -32px rgba(16,22,31,0.32) !important;
          }
        }
        .home-card:active {
          transform: scale(0.985) !important;
        }
      `}</style>

      <Footer />
    </>
  );
};

export default Index;
