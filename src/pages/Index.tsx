import { useEffect, useRef, useState } from 'react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StructuredData, { baseOrganization } from "@/components/StructuredData";
import { useLanguage } from "@/contexts/LanguageContext";

const TYPED_TEXT = 'Beste Karel, bestelling 4821 staat gepland voor donderdag 11/09. De twee rekken uit lijn 3 zijn gisteren binnengekomen, dus de levering blijft volledig.';

const Index = () => {
  const { language } = useLanguage();
  const prefix = language === 'fr' ? '/fr' : language === 'en' ? '/en' : '';
  const t = (nl: string, fr: string, en: string) =>
    language === 'fr' ? fr : language === 'en' ? en : nl;

  const [typed, setTyped] = useState('');
  const hasTyped = useRef(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const prefersRM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !hasTyped.current) {
        hasTyped.current = true;
        if (prefersRM) { setTyped(TYPED_TEXT); return; }
        let i = 0;
        const iv = setInterval(() => {
          if (i < TYPED_TEXT.length) { setTyped(TYPED_TEXT.slice(0, ++i)); } else clearInterval(iv);
        }, 28);
      }
    }, { threshold: 0.3 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const structuredData = [
    {
      "@type": "WebPage",
      "@id": `https://www.glimps.be${prefix || '/'}`,
      url: `https://www.glimps.be${prefix || '/'}`,
      name: t('AI voor je klantenservice | Glimps', 'IA pour votre service client | Glimps', 'AI for your customer service | Glimps'),
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
        title={t('AI voor je klantenservice | Glimps', 'IA pour votre service client | Glimps', 'AI for your customer service | Glimps')}
        description={t(
          'Kies tussen onze e-mailagent en AI chatbot. Glimps automatiseert je klantenservice met slimme AI.',
          'Choisissez entre notre agent e-mail et chatbot IA.',
          'Choose between our email agent and AI chatbot.'
        )}
        canonicalPath={prefix || '/'}
      />
      <StructuredData data={structuredData} />
      <Navigation />

      <div style={{ background: '#fff', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
        {/* Background decorations */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
          <div style={{
            position: 'absolute', inset: '0 0 auto', height: 940,
            backgroundImage: 'repeating-linear-gradient(90deg, rgba(27,58,92,0.05) 0 1px, transparent 1px 64px), repeating-linear-gradient(0deg, rgba(27,58,92,0.05) 0 1px, transparent 1px 64px)',
            maskImage: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 52%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 52%, transparent 100%)',
          }} />
          <div style={{ position: 'absolute', top: -300, left: -280, width: 1240, height: 940, borderRadius: '50%', background: 'radial-gradient(circle, #D8E4F0 0%, #E7EEF5 62%, rgba(231,238,245,0) 100%)', opacity: 0.85, filter: 'blur(120px)' }} />
          <div style={{ position: 'absolute', top: 560, right: -300, width: 1120, height: 820, borderRadius: '50%', background: 'radial-gradient(circle, #F6D9D5 0%, #FAE7E5 58%, rgba(250,231,229,0) 100%)', opacity: 0.85, filter: 'blur(130px)' }} />
        </div>

        {/* Hero */}
        <section style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '180px 24px 48px' }}>
          <span style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: '#5A6472', marginBottom: 18 }}>
            {t('HET ANTWOORD LIGT AL KLAAR', 'LA RÉPONSE EST DÉJÀ PRÊTE', 'THE ANSWER IS ALREADY READY')}
          </span>
          <h1 style={{
            margin: 0, maxWidth: 860,
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontWeight: 400, fontSize: 'clamp(40px, 6vw, 78px)',
            lineHeight: 1.03, letterSpacing: '-0.02em', color: '#10161F',
            textWrap: 'balance' as any,
          }}>
            {t('Een digitale medewerker voor je inbox', 'Un collaborateur digital pour votre boîte mail', 'A digital employee for your inbox')}
          </h1>
          <p style={{ margin: '26px 0 0', maxWidth: 600, fontSize: 18, lineHeight: 1.62, color: '#5A6472' }}>
            {t(
              'Hij doet het mailwerk van je binnendienst. Voorbereid, jij verstuurt.',
              'Il fait le travail de messagerie de votre service interne. Préparé, vous envoyez.',
              'It handles your back-office email work. Prepared, you send.'
            )}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginTop: 38, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href={`${prefix}/demo`} className="press" style={{
              display: 'flex', alignItems: 'center', minHeight: 48, background: '#10161F', color: '#fff',
              fontSize: 15, fontWeight: 500, padding: '0 30px', borderRadius: 999, textDecoration: 'none',
            }}>
              {t('Plan een gesprek', 'Planifier un appel', 'Book a call')}
            </a>
            <a href="#producten" style={{
              display: 'flex', alignItems: 'center', gap: 8, fontSize: 15, fontWeight: 500, color: '#5A6472', textDecoration: 'none',
            }}>
              {t('Zie hoe hij een mail afhandelt', 'Voir comment il traite un e-mail', 'See how it handles an email')}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </a>
          </div>

          {/* Integration logos */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 64, gap: 18 }}>
            <span style={{ fontSize: 12.5, color: '#5A6472', letterSpacing: '0.04em' }}>
              {t('Werkt in de systemen die je al gebruikt', 'Fonctionne dans les systèmes que vous utilisez déjà', 'Works in the systems you already use')}
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 48, flexWrap: 'wrap', justifyContent: 'center' }}>
              <span style={{ fontSize: 17, fontWeight: 500, color: '#9AA1AC' }}>Outlook</span>
              <img src="https://cdn.simpleicons.org/gmail/9AA1AC" alt="Gmail" style={{ height: 22 }} onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              <img src="https://cdn.simpleicons.org/hubspot/9AA1AC" alt="HubSpot" style={{ height: 26 }} onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              <img src="https://cdn.simpleicons.org/odoo/9AA1AC" alt="Odoo" style={{ height: 26 }} onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              <img src="https://cdn.simpleicons.org/shopify/9AA1AC" alt="Shopify" style={{ height: 26 }} onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              <span style={{ fontSize: 17, fontWeight: 500, color: '#9AA1AC' }}>Teamleader</span>
            </div>
          </div>
        </section>

        {/* Two product demos side by side */}
        <section id="producten" ref={heroRef} style={{
          position: 'relative', zIndex: 1,
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
          gap: 32, maxWidth: 1240, margin: '0 auto', padding: '80px 24px 0',
        }}>
          {/* Email agent demo */}
          <div style={{
            background: '#fff', borderRadius: 20, overflow: 'hidden',
            boxShadow: '0 2px 4px -2px rgba(6,20,36,0.32), 0 24px 40px -22px rgba(6,20,36,0.38), 0 60px 100px -44px rgba(6,20,36,0.5)',
          }}>
            {/* Window chrome */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '16px 22px', borderBottom: '1px solid #EDF1F6' }}>
              <span style={{ width: 9, height: 9, borderRadius: 999, background: '#E4E7EC' }} />
              <span style={{ width: 9, height: 9, borderRadius: 999, background: '#E4E7EC' }} />
              <span style={{ width: 9, height: 9, borderRadius: 999, background: '#E4E7EC' }} />
              <span style={{ marginLeft: 10, fontSize: 12, color: '#5A6472', letterSpacing: '0.06em', textTransform: 'uppercase' as const }}>
                {t('POSTVAK IN', 'BOÎTE DE RÉCEPTION', 'INBOX')}
              </span>
            </div>
            {/* Email header */}
            <div style={{ display: 'flex', gap: 15, padding: '22px' }}>
              <span style={{ flex: 'none', width: 40, height: 40, borderRadius: 14, background: '#1B3A5C', color: '#fff', fontSize: 14, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>NG</span>
              <div style={{ minWidth: 0, flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 14 }}>
                  <span style={{ fontSize: 15, fontWeight: 600, color: '#10161F' }}>Nordveld Groothandel</span>
                  <span style={{ fontSize: 12.5, color: '#5A6472', fontVariantNumeric: 'tabular-nums' }}>08:14</span>
                </div>
                <div style={{ marginTop: 4, fontSize: 14.5, lineHeight: 1.4, color: '#10161F' }}>
                  {t('Klopt de levertermijn van bestelling 4821 nog?', 'Le délai de livraison de la commande 4821 est-il correct\u00a0?', 'Is the delivery time for order 4821 still correct?')}
                </div>
              </div>
            </div>
            {/* Draft area */}
            <div style={{ display: 'flex', flexDirection: 'column', padding: '22px 22px 26px', background: '#F4F7FA', borderTop: '1px solid #EDF1F6' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: '#fff', color: '#0E7C66', fontSize: 12, fontWeight: 600, letterSpacing: '0.02em', padding: '6px 12px', borderRadius: 999 }}>
                  <span style={{ width: 5, height: 5, borderRadius: 999, background: '#0E7C66' }} />
                  {t('Concept klaar', 'Brouillon prêt', 'Draft ready')}
                </span>
                <span style={{ fontSize: 12.5, color: '#5A6472' }}>
                  {t('Antwoord aan Karel Nordveld', 'Réponse à Karel Nordveld', 'Reply to Karel Nordveld')}
                </span>
              </div>
              <p style={{ margin: '16px 0 0', fontSize: 14.5, lineHeight: 1.62, color: '#5A6472', minHeight: 48 }}>
                {typed}
                <span className="caret" style={{ display: 'inline-block', width: 2, height: 16, marginLeft: 2, verticalAlign: -2, background: '#1B3A5C' }} />
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 22 }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', minHeight: 40, background: '#1B3A5C', color: '#fff', fontSize: 13.5, fontWeight: 500, padding: '0 20px', borderRadius: 12 }}>
                  {t('Verzenden', 'Envoyer', 'Send')}
                </span>
                <span style={{ fontSize: 12.5, color: '#5A6472' }}>
                  {t('Opgezocht in Odoo, 12 seconden geleden', 'Recherché dans Odoo, il y a 12 secondes', 'Looked up in Odoo, 12 seconds ago')}
                </span>
              </div>
            </div>
            {/* Odoo lookup badge */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '0 22px 22px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 11, background: '#fff', borderRadius: 16, boxShadow: '0 12px 28px -16px rgba(16,22,31,0.35), 0 2px 5px -2px rgba(16,22,31,0.08)', padding: '11px 14px' }}>
                <span style={{ width: 32, height: 32, borderRadius: 10, background: '#F4F7FA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src="https://cdn.simpleicons.org/odoo/9AA1AC" alt="Odoo" style={{ height: 16 }} onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                </span>
                <span style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: 12.5, fontWeight: 600, color: '#10161F' }}>Odoo &middot; order 4821</span>
                  <span style={{ fontSize: 11.5, color: '#5A6472' }}>{t('Levering do 11/09 \u00b7 volledig', 'Livraison je 11/09 \u00b7 complet', 'Delivery Thu 11/09 \u00b7 complete')}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Chatbot demo */}
          <div style={{
            background: '#fff', borderRadius: 20, overflow: 'hidden',
            boxShadow: '0 2px 4px -2px rgba(6,20,36,0.12), 0 24px 40px -22px rgba(6,20,36,0.18), 0 60px 100px -44px rgba(6,20,36,0.22)',
            border: '1px solid #EDF1F6',
          }}>
            {/* Chat header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 22px', borderBottom: '1px solid #EDF1F6' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ width: 36, height: 36, borderRadius: 999, background: '#E74E4D', color: '#fff', fontSize: 14, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>g</span>
                <span style={{ fontSize: 15, fontWeight: 600, color: '#10161F' }}>Chat met Glimps</span>
              </div>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12.5, color: '#0E7C66' }}>
                <span style={{ width: 6, height: 6, borderRadius: 999, background: '#0E7C66' }} />
                Online
              </span>
            </div>
            {/* Chat messages */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: '22px', minHeight: 200 }}>
              {/* Empty space at top like screenshot */}
              <div style={{ flex: 1 }} />
              {/* Customer message (right aligned) */}
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <div style={{ background: '#F4F7FA', borderRadius: '14px 14px 4px 14px', padding: '12px 16px', fontSize: 14, lineHeight: 1.5, color: '#10161F', maxWidth: 280 }}>
                  {t('Hebben jullie deze jas nog in maat M?', 'Avez-vous encore cette veste en taille M\u00a0?', 'Do you still have this jacket in size M?')}
                </div>
              </div>
              {/* Bot reply */}
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{ background: '#E74E4D', borderRadius: '14px 14px 14px 4px', padding: '12px 16px', fontSize: 14, lineHeight: 1.5, color: '#fff', maxWidth: 340 }}>
                  {t(
                    'Ja, nog 4 stuks op voorraad. Besteld voor 17u, morgen geleverd.',
                    'Oui, encore 4 en stock. Commandé avant 17h, livré demain.',
                    'Yes, 4 left in stock. Order before 5pm, delivered tomorrow.'
                  )}
                </div>
              </div>
              {/* Product card */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, background: '#fff', border: '1px solid #EDF1F6', borderRadius: 16, padding: '14px 16px', maxWidth: 320 }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: '#F4F7FA', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#10161F' }}>Winterjas Classic, maat M</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 4 }}>
                    <span style={{ fontSize: 12.5, fontWeight: 600, color: '#0E7C66' }}>{t('Op voorraad', 'En stock', 'In stock')}</span>
                    <span style={{ fontSize: 14, fontWeight: 600, color: '#10161F' }}>&euro; 89,99</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Chat input */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 22px', borderTop: '1px solid #EDF1F6' }}>
              <div style={{ flex: 1, background: '#F4F7FA', borderRadius: 999, padding: '12px 18px', fontSize: 14, color: '#9AA1AC' }}>
                {t('Typ je vraag...', 'Tapez votre question...', 'Type your question...')}
              </div>
              <span style={{ width: 36, height: 36, borderRadius: 999, background: '#E74E4D', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5" /><path d="m5 12 7-7 7 7" /></svg>
              </span>
            </div>
            {/* Shopify lookup badge */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '0 22px 22px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 11, background: '#fff', borderRadius: 16, boxShadow: '0 12px 28px -16px rgba(16,22,31,0.35), 0 2px 5px -2px rgba(16,22,31,0.08)', padding: '11px 14px' }}>
                <span style={{ width: 32, height: 32, borderRadius: 10, background: '#F4F7FA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src="https://cdn.simpleicons.org/shopify/9AA1AC" alt="Shopify" style={{ height: 16 }} onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                </span>
                <span style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: 12.5, fontWeight: 600, color: '#10161F' }}>Winterjas Classic</span>
                  <span style={{ fontSize: 11.5, color: '#5A6472' }}>Maat M &middot; &euro; 89,99</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Two product description cards */}
        <section style={{
          position: 'relative', zIndex: 1,
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
          gap: 0, maxWidth: 1240, margin: '0 auto', padding: '48px 24px 0',
        }}>
          {/* Email agent card - dark */}
          <div style={{
            background: '#14273D', color: '#fff', borderRadius: '28px 0 0 28px', padding: 'clamp(40px, 5vw, 56px)',
          }}
          className="home-card-left"
          >
            <span style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: '#7BA0C4' }}>
              {t('IN JE MAILBOX', 'DANS VOTRE BOÎTE MAIL', 'IN YOUR MAILBOX')}
            </span>
            <h2 style={{
              margin: '14px 0 0',
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontWeight: 400, fontSize: 'clamp(32px, 4vw, 48px)',
              lineHeight: 1.05, letterSpacing: '-0.025em',
            }}>
              {t('De e-mailagent', 'L\'agent e-mail', 'The email agent')}
            </h2>
            <p style={{ margin: '18px 0 0', fontSize: 17, lineHeight: 1.55, color: '#D3DDE8', maxWidth: 420 }}>
              {t(
                'Antwoorden staan klaar als concept in Outlook, Gmail of HubSpot. Jullie doen de laatste klik.',
                'Les réponses sont prêtes en brouillon dans Outlook, Gmail ou HubSpot. Vous faites le dernier clic.',
                'Replies are ready as drafts in Outlook, Gmail or HubSpot. You do the last click.'
              )}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 32, paddingTop: 28, borderTop: '1px solid rgba(255,255,255,0.12)' }}>
              {[
                t('Zoekt eerst op in je ERP of CRM, en schrijft dan pas', 'Cherche d\'abord dans votre ERP ou CRM, puis rédige', 'First looks up your ERP or CRM, then writes'),
                t('Stuurt mails door naar de juiste collega en map', 'Transfère les mails au bon collègue et dossier', 'Forwards emails to the right colleague and folder'),
                t('Geen nieuw systeem, hij werkt in de inbox die je al hebt', 'Pas de nouveau système, il travaille dans la boîte que vous avez', 'No new system, it works in the inbox you already have'),
              ].map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <span style={{ flexShrink: 0, width: 22, height: 22, borderRadius: 999, background: '#1B3A5C', color: '#7BA0C4', fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1 }}>&#10003;</span>
                  <span style={{ fontSize: 15.5, lineHeight: 1.45, color: '#E7EEF5' }}>{item}</span>
                </div>
              ))}
            </div>
            <a href={`${prefix}/email-agent`} style={{
              display: 'inline-flex', alignItems: 'center', minHeight: 48, marginTop: 32,
              background: '#fff', color: '#14273D', fontSize: 15, fontWeight: 500,
              padding: '0 28px', borderRadius: 999, textDecoration: 'none',
              transition: 'transform 160ms ease-out',
            }} className="press">
              {t('Bekijk de e-mailagent', 'Découvrir l\'agent e-mail', 'Explore the email agent')}
            </a>
          </div>

          {/* Chatbot card - light */}
          <div style={{
            background: '#fff', borderRadius: '0 28px 28px 0', padding: 'clamp(40px, 5vw, 56px)',
            border: '1px solid #EDF1F6', borderLeft: 'none',
          }}
          className="home-card-right"
          >
            <span style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: '#E74E4D' }}>
              {t('OP JE WEBSITE', 'SUR VOTRE SITE', 'ON YOUR WEBSITE')}
            </span>
            <h2 style={{
              margin: '14px 0 0',
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontWeight: 400, fontSize: 'clamp(32px, 4vw, 48px)',
              lineHeight: 1.05, letterSpacing: '-0.025em', color: '#10161F',
            }}>
              {t('De chatbot', 'Le chatbot', 'The chatbot')}
            </h2>
            <p style={{ margin: '18px 0 0', fontSize: 17, lineHeight: 1.55, color: '#5A6472', maxWidth: 420 }}>
              {t(
                'Beantwoordt bezoekers meteen, met je voorraad, prijzen en orderdata erbij.',
                'Répond immédiatement aux visiteurs, avec votre stock, prix et données de commande.',
                'Answers visitors instantly, with your stock, prices and order data included.'
              )}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 32, paddingTop: 28, borderTop: '1px solid #EDF1F6' }}>
              {[
                t('Kent je volledige catalogus en voorraad', 'Connaît votre catalogue complet et stock', 'Knows your full catalog and stock'),
                t('Begeleidt twijfelaars tot in de checkout', 'Guide les hésitants jusqu\'au checkout', 'Guides hesitators all the way to checkout'),
                t('Geeft door aan je team zodra het moet', 'Transfère à votre équipe dès que nécessaire', 'Hands off to your team when needed'),
              ].map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <span style={{ flexShrink: 0, width: 22, height: 22, borderRadius: 999, background: '#FDF4F3', color: '#E74E4D', fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1 }}>&#10003;</span>
                  <span style={{ fontSize: 15.5, lineHeight: 1.45, color: '#10161F' }}>{item}</span>
                </div>
              ))}
            </div>
            <a href={`${prefix}/features`} style={{
              display: 'inline-flex', alignItems: 'center', minHeight: 48, marginTop: 32,
              background: '#E74E4D', color: '#fff', fontSize: 15, fontWeight: 500,
              padding: '0 28px', borderRadius: 999, textDecoration: 'none',
              transition: 'transform 160ms ease-out',
            }} className="press">
              {t('Bekijk de chatbot', 'Découvrir le chatbot', 'Explore the chatbot')}
            </a>
          </div>
        </section>

        {/* Shared integration bar */}
        <section style={{
          position: 'relative', zIndex: 1,
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          padding: '80px 24px 120px', textAlign: 'center',
        }}>
          <span style={{ fontSize: 14, color: '#5A6472' }}>
            {t('Allebei werken ze in de systemen die je al hebt', 'Les deux fonctionnent dans les systèmes que vous avez déjà', 'Both work in the systems you already have')}
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 48, flexWrap: 'wrap', justifyContent: 'center', marginTop: 24 }}>
            <span style={{ fontSize: 17, fontWeight: 500, color: '#9AA1AC' }}>Outlook</span>
            <img src="https://cdn.simpleicons.org/gmail/9AA1AC" alt="Gmail" style={{ height: 22 }} onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
            <img src="https://cdn.simpleicons.org/hubspot/9AA1AC" alt="HubSpot" style={{ height: 26 }} onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
            <img src="https://cdn.simpleicons.org/odoo/9AA1AC" alt="Odoo" style={{ height: 26 }} onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
            <img src="https://cdn.simpleicons.org/shopify/9AA1AC" alt="Shopify" style={{ height: 26 }} onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
            <span style={{ fontSize: 17, fontWeight: 500, color: '#9AA1AC' }}>Teamleader</span>
          </div>
        </section>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes gBlink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
        .caret { animation: gBlink 1s steps(1, end) infinite; }
        .press { transition: transform 160ms ease-out; }
        .press:active { transform: scale(0.97); }
        @media (max-width: 900px) {
          .home-card-left { border-radius: 28px 28px 0 0 !important; }
          .home-card-right { border-radius: 0 0 28px 28px !important; border-left: 1px solid #EDF1F6 !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          .caret { animation: none; }
          .press { transition: none; }
        }
      `}</style>

      <Footer />
    </>
  );
};

export default Index;
