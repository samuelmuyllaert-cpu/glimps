import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Atmosphere from '@/components/Atmosphere';
import glimpsLogo from '@/assets/glimps-logo.png';

const EmailAgent = () => {
  const { t, language } = useLanguage();
  const [logoError, setLogoError] = useState(false);

  const demoHref =
    language === 'fr' ? '/fr/demo' : language === 'en' ? '/en/demo' : '/demo';
  const chatbotHref =
    language === 'fr' ? '/fr' : language === 'en' ? '/en' : '/';
  const howWeWorkHref =
    language === 'fr'
      ? '/fr/comment-nous-travaillons'
      : language === 'en'
        ? '/en/how-we-work'
        : '/how-we-work';
  const aboutHref =
    language === 'fr'
      ? '/fr/a-propos'
      : language === 'en'
        ? '/en/about'
        : '/about';

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <Atmosphere showGrid />

      {/* Floating nav pill */}
      <div
        className="relative z-10"
        style={{ padding: '22px 64px 0' }}
      >
        <header
          className="flex items-center"
          style={{
            background: 'rgba(255,255,255,0.86)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid #E4E7EC',
            borderRadius: 999,
            boxShadow: '0 14px 34px -22px rgba(21,23,28,0.28)',
            padding: '8px 8px 8px 28px',
          }}
        >
          {/* Logo */}
          <Link to={language === 'fr' ? '/fr' : language === 'en' ? '/en' : '/'} className="flex-shrink-0">
            {logoError ? (
              <span className="font-semibold text-ink text-sm">glimps</span>
            ) : (
              <img
                src={glimpsLogo}
                alt="glimps"
                style={{ height: 28 }}
                onError={() => setLogoError(true)}
              />
            )}
          </Link>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-1 ml-8">
            <NavLink href="#" active dotColor="#1B3A5C">
              {t('emailAgent.nav.emailAgent')}
            </NavLink>
            <NavLink href={chatbotHref} dotColor="#E74E4D">
              {t('emailAgent.nav.chatbot')}
            </NavLink>
            <NavLink href={howWeWorkHref}>
              {t('emailAgent.nav.howWeWork')}
            </NavLink>
            <NavLink href={aboutHref}>
              {t('emailAgent.nav.about')}
            </NavLink>
          </nav>

          {/* CTA */}
          <div className="ml-auto">
            <Link
              to={demoHref}
              className="inline-flex items-center justify-center motion-press"
              style={{
                background: '#E74E4D',
                color: '#fff',
                fontSize: '14.5px',
                fontWeight: 600,
                height: 40,
                padding: '0 22px',
                borderRadius: 999,
              }}
            >
              {t('emailAgent.nav.cta')}
            </Link>
          </div>
        </header>
      </div>

      {/* Hero */}
      <section
        className="relative z-10 flex flex-col items-center text-center"
        style={{ padding: '200px 24px 200px' }}
      >
        <h1
          className="font-serif motion-enter"
          style={{
            fontWeight: 400,
            fontSize: 78,
            lineHeight: 1.03,
            letterSpacing: '-0.02em',
            maxWidth: 860,
            textWrap: 'balance',
            color: '#10161F',
            animationDelay: '40ms',
          }}
        >
          {t('emailAgent.hero.title')}
        </h1>

        <p
          className="motion-enter"
          style={{
            fontSize: 18,
            lineHeight: 1.62,
            color: '#5A6472',
            maxWidth: 600,
            marginTop: 24,
            animationDelay: '60ms',
          }}
        >
          {t('emailAgent.hero.subtitle')}
        </p>

        <Link
          to={demoHref}
          className="motion-enter motion-press"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#10161F',
            color: '#fff',
            height: 48,
            padding: '0 30px',
            borderRadius: 999,
            fontSize: '15px',
            fontWeight: 500,
            marginTop: 36,
            animationDelay: '120ms',
          }}
        >
          {t('emailAgent.hero.cta')}
        </Link>
      </section>

      {/* Section 1 — Steps strip */}
      <section className="relative z-10" style={{ padding: '0 24px 160px' }}>
        <div className="flex items-center justify-center gap-4 flex-wrap" style={{ maxWidth: 1180, margin: '0 auto' }}>
          <StepBubble num={1} text={t('emailAgent.steps.s1')} />
          <ArrowRight />
          <StepBubble num={2} text={t('emailAgent.steps.s2')} />
          <ArrowRight />
          <span
            className="inline-flex items-center gap-2"
            style={{
              background: '#1B3A5C',
              color: '#fff',
              fontSize: 15,
              fontWeight: 600,
              height: 44,
              padding: '0 24px',
              borderRadius: 999,
            }}
          >
            <span style={{
              width: 22, height: 22, borderRadius: '50%',
              background: 'rgba(255,255,255,0.2)',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 12, fontWeight: 700,
            }}>3</span>
            {t('emailAgent.steps.s3')}
          </span>
        </div>
      </section>

      {/* Section 2 — Cost */}
      <section className="relative z-10" style={{ padding: '160px 24px' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <SectionHeader eyebrow={t('emailAgent.cost.eyebrow')} title={t('emailAgent.cost.title')} />
          <div className="grid md:grid-cols-3 gap-8" style={{ marginTop: 56 }}>
            {/* Card 1 — Timer */}
            <CostCard title={t('emailAgent.cost.card1Title')} text={t('emailAgent.cost.card1Text')}>
              <div className="flex flex-col items-center justify-center" style={{ height: 120 }}>
                <span style={{ fontFamily: 'Instrument Sans, sans-serif', fontVariantNumeric: 'tabular-nums', fontSize: 40, fontWeight: 700, color: '#10161F', lineHeight: 1 }}>
                  {t('emailAgent.cost.card1Mock')}
                </span>
                <span style={{ fontSize: 13, color: '#5A6472', marginTop: 8 }}>
                  {t('emailAgent.cost.card1MockSub')}
                </span>
              </div>
            </CostCard>

            {/* Card 2 — Mail rows */}
            <CostCard title={t('emailAgent.cost.card2Title')} text={t('emailAgent.cost.card2Text')}>
              <div className="flex flex-col gap-3 justify-center" style={{ height: 120 }}>
                <MailRow label={t('emailAgent.cost.card2You')} time="14:12" color="#5A6472" dimmed />
                <MailRow label={t('emailAgent.cost.card2Competitor')} time="09:03" color="#0E7C66" />
              </div>
            </CostCard>

            {/* Card 3 — Double replied */}
            <CostCard title={t('emailAgent.cost.card3Title')} text={t('emailAgent.cost.card3Text')}>
              <div className="flex items-center gap-3 justify-center" style={{ height: 120 }}>
                <div className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M14 8L8 3v3H2v4h6v3l6-5z" fill="#5A6472"/></svg>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M14 8L8 3v3H2v4h6v3l6-5z" fill="#5A6472"/></svg>
                </div>
                <span style={{
                  fontSize: 12, fontWeight: 600, color: '#E74E4D',
                  background: 'rgba(231,78,77,0.08)', padding: '4px 10px', borderRadius: 999,
                }}>
                  {t('emailAgent.cost.card3Label')}
                </span>
              </div>
            </CostCard>
          </div>
        </div>
      </section>

      {/* Section 3 — How it works */}
      <section className="relative z-10" style={{ padding: '160px 24px' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <SectionHeader eyebrow={t('emailAgent.howItWorks.eyebrow')} title={t('emailAgent.howItWorks.title')} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" style={{ marginTop: 56 }}>
            <HowCard num={t('emailAgent.howItWorks.card1Num')} title={t('emailAgent.howItWorks.card1Title')} text={t('emailAgent.howItWorks.card1Text')} />
            <HowCard num={t('emailAgent.howItWorks.card2Num')} title={t('emailAgent.howItWorks.card2Title')} text={t('emailAgent.howItWorks.card2Text')} />
            <HowCard num={t('emailAgent.howItWorks.card3Num')} title={t('emailAgent.howItWorks.card3Title')} text={t('emailAgent.howItWorks.card3Text')} />
            <HowCard num={t('emailAgent.howItWorks.card4Num')} title={t('emailAgent.howItWorks.card4Title')} text={t('emailAgent.howItWorks.card4Text')} dark />
          </div>
        </div>
      </section>

      {/* Inbox panel */}
      <InboxPanel t={t} />
    </div>
  );
};

const MAILS = [
  { initials: 'KN', from: 'Karel Nordveld', time: '09:41', subject: 'Levertermijn order 4821' },
  { initials: 'BW', from: 'Bouwshop Waregem', time: '09:38', subject: 'Creditnota factuur 2291' },
  { initials: 'MD', from: 'Machinehandel Dierckx', time: '09:35', subject: 'Filter 4400 serie' },
  { initials: 'TV', from: 'Transport Vermeulen', time: '09:31', subject: 'Status zending 88214' },
  { initials: 'VC', from: 'Verhuur Callens', time: '09:27', subject: 'Hoogtewerker 12–15 okt' },
  { initials: 'BS', from: 'Bakkerij Sint-Jan', time: '09:22', subject: 'Offerte verpakkingsmateriaal' },
  { initials: 'ED', from: 'Elektro Depot', time: '09:18', subject: 'Retour beschadigd artikel' },
  { initials: 'GD', from: 'Garage Descamps', time: '09:14', subject: 'Bestelling remschijven 306' },
  { initials: 'TR', from: 'Tuincentrum Ravels', time: '09:10', subject: 'Levering buxusplanten' },
  { initials: 'IL', from: 'Interieur Lambrechts', time: '09:06', subject: 'Kleurstalen behangpapier' },
  { initials: 'BD', from: 'Bouwmarkt Deleu', time: '09:02', subject: 'Voorraad houtpanelen' },
  { initials: 'PV', from: 'Printing Vanhoeck', time: '08:57', subject: 'Proefdruk brochure Q4' },
  { initials: 'SK', from: 'Sanitair Knockaert', time: '08:52', subject: 'Garantieclaim boiler' },
  { initials: 'LM', from: 'Logistiek Maes', time: '08:47', subject: 'Palletlevering woensdag' },
  { initials: 'HB', from: 'Horecashop Brugge', time: '08:42', subject: 'Bestek nabestelling' },
  { initials: 'AJ', from: 'Atelier Janssens', time: '08:38', subject: 'Laserdelen op maat' },
  { initials: 'FT', from: 'Fietswereld Tienen', time: '08:33', subject: 'Shimano onderdelen' },
  { initials: 'WC', from: 'Webshop Claes', time: '08:28', subject: 'API-koppeling catalogus' },
];

function InboxPanel({ t }: { t: (key: string) => string }) {
  const panelRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [typedCount, setTypedCount] = useState(0);
  const [hasTyped, setHasTyped] = useState(false);
  const draftText = t('emailAgent.inbox.draftBody');
  const prefersReduced = useRef(false);
  const isNarrow = useRef(false);

  useEffect(() => {
    prefersReduced.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    isNarrow.current = window.innerWidth < 900;

    if (prefersReduced.current || isNarrow.current) {
      setTypedCount(999);
      setHasTyped(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTyped) {
          setHasTyped(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (panelRef.current) observer.observe(panelRef.current);
    return () => observer.disconnect();
  }, [hasTyped]);

  useEffect(() => {
    if (!hasTyped || prefersReduced.current || isNarrow.current) return;
    if (typedCount >= draftText.length) return;
    const timer = setTimeout(() => setTypedCount((c) => c + 1), 28);
    return () => clearTimeout(timer);
  }, [hasTyped, typedCount, draftText.length]);

  const handleScroll = useCallback(() => {
    if (prefersReduced.current || isNarrow.current || !panelRef.current || !listRef.current) return;
    requestAnimationFrame(() => {
      const rect = panelRef.current!.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.max(0, Math.min(1, (vh - rect.top) / (vh + rect.height)));
      const offset = -(progress * 320);
      listRef.current!.style.transform = `translate3d(0,${offset}px,0)`;
    });
  }, []);

  useEffect(() => {
    if (prefersReduced.current || isNarrow.current) return;
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const showCursor = typedCount < draftText.length && !(prefersReduced.current || isNarrow.current);

  return (
    <div className="relative z-10" style={{ padding: '0 24px 160px' }}>
      <div
        ref={panelRef}
        style={{
          maxWidth: 1180, margin: '0 auto', height: 520, overflow: 'hidden',
          borderRadius: 20, background: '#fff',
          boxShadow: '0 2px 4px -2px rgba(6,20,36,.32), 0 24px 40px -22px rgba(6,20,36,.38), 0 60px 100px -44px rgba(6,20,36,.5)',
          position: 'relative',
        }}
      >
        {/* Top bar */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8,
          padding: '14px 24px', borderBottom: '1px solid #EDF1F6',
        }}>
          <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#E4E7EC' }} />
          <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#E4E7EC' }} />
          <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#E4E7EC' }} />
          <span style={{
            fontSize: 12, letterSpacing: '0.06em', color: '#5A6472',
            marginLeft: 12, fontWeight: 500,
          }}>
            {t('emailAgent.inbox.label')}
          </span>
        </div>

        {/* Scan rhythm row */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '12px 24px', borderBottom: '1px solid #EDF1F6', flexWrap: 'wrap', gap: 8,
        }}>
          <span style={{ fontSize: 13, color: '#5A6472' }}>{t('emailAgent.inbox.scanLabel')}</span>
          <div style={{ display: 'flex', gap: 6 }}>
            <ScanPill label={t('emailAgent.inbox.scanQuarter')} />
            <ScanPill label={t('emailAgent.inbox.scanHour')} selected />
            <ScanPill label={t('emailAgent.inbox.scanTwice')} />
          </div>
        </div>

        {/* Mail list with gradient masks */}
        <div style={{ position: 'relative', flex: 1, overflow: 'hidden', height: 'calc(100% - 96px)' }}>
          <div
            style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: 40, zIndex: 2,
              background: 'linear-gradient(180deg, #fff 0%, transparent 100%)', pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute', bottom: 0, left: 0, right: 0, height: 40, zIndex: 2,
              background: 'linear-gradient(0deg, #fff 0%, transparent 100%)', pointerEvents: 'none',
            }}
          />

          <div ref={listRef} style={{ willChange: 'transform', padding: '8px 0' }}>
            {MAILS.map((mail, i) => (
              <div key={i}>
                <InboxRow {...mail} />
                {i === 0 && (
                  <div style={{ background: '#F4F7FA', padding: '16px 24px 16px 80px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                      <span style={{
                        display: 'inline-flex', alignItems: 'center', gap: 5,
                        background: '#fff', borderRadius: 999, padding: '4px 10px',
                        fontSize: 12, fontWeight: 600, color: '#0E7C66',
                      }}>
                        <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#0E7C66' }} />
                        {t('emailAgent.inbox.draftBadge')}
                      </span>
                      <span style={{ fontSize: 12.5, color: '#5A6472' }}>
                        {t('emailAgent.inbox.draftTo')}
                      </span>
                    </div>
                    <p style={{ fontSize: 14, color: '#10161F', lineHeight: 1.6, marginBottom: 12, minHeight: 44 }}>
                      {draftText.slice(0, typedCount)}
                      {showCursor && (
                        <span style={{
                          display: 'inline-block', width: 2, height: 16,
                          background: '#1B3A5C', marginLeft: 1, verticalAlign: 'text-bottom',
                          animation: 'blink 1s step-end infinite',
                        }} />
                      )}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <button style={{
                        background: '#1B3A5C', color: '#fff', border: 'none',
                        borderRadius: 999, height: 36, padding: '0 20px',
                        fontSize: 13, fontWeight: 600, cursor: 'pointer',
                      }}>
                        {t('emailAgent.inbox.sendBtn')}
                      </button>
                      <span style={{ fontSize: 12.5, color: '#5A6472' }}>
                        {t('emailAgent.inbox.lookupNote')}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ScanPill({ label, selected }: { label: string; selected?: boolean }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      border: `1px solid ${selected ? '#1B3A5C' : '#E4E7EC'}`,
      background: selected ? '#E7EEF5' : 'transparent',
      borderRadius: 999, padding: '8px 14px', fontSize: 13,
      fontWeight: selected ? 600 : 400, color: selected ? '#1B3A5C' : '#5A6472',
    }}>
      <span style={{
        width: 10, height: 10, borderRadius: '50%',
        border: selected ? 'none' : '1.5px solid #E4E7EC',
        background: selected ? '#1B3A5C' : 'transparent',
      }} />
      {label}
    </span>
  );
}

function InboxRow({ initials, from, time, subject }: { initials: string; from: string; time: string; subject: string }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 16,
      padding: '10px 24px', cursor: 'default',
    }}>
      <div style={{
        width: 40, height: 40, borderRadius: 14, background: '#1B3A5C',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#fff', fontSize: 13, fontWeight: 600, flexShrink: 0,
      }}>
        {initials}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 15, fontWeight: 600, color: '#10161F' }}>{from}</span>
          <span style={{ fontSize: 12.5, color: '#5A6472', fontVariantNumeric: 'tabular-nums', flexShrink: 0, marginLeft: 8 }}>{time}</span>
        </div>
        <span style={{ fontSize: 14.5, color: '#5A6472', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'block' }}>{subject}</span>
      </div>
    </div>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="text-center">
      <span style={{
        display: 'block', fontSize: 12, letterSpacing: '0.06em',
        color: '#5A6472', textTransform: 'uppercase' as const, marginBottom: 12,
      }}>
        {eyebrow}
      </span>
      <h2 className="font-serif" style={{
        fontWeight: 400, fontSize: 44, lineHeight: 1.12,
        letterSpacing: '-0.015em', color: '#10161F',
      }}>
        {title}
      </h2>
    </div>
  );
}

function StepBubble({ num, text }: { num: number; text: string }) {
  return (
    <span className="inline-flex items-center gap-2" style={{ fontSize: 15, color: '#5A6472' }}>
      <span style={{
        width: 22, height: 22, borderRadius: '50%', border: '1.5px solid #E4E7EC',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 12, fontWeight: 600, color: '#5A6472',
      }}>{num}</span>
      {text}
    </span>
  );
}

function ArrowRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
      <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="#E4E7EC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CostCard({ title, text, children }: { title: string; text: string; children: React.ReactNode }) {
  return (
    <div>
      <div style={{
        background: '#fff', borderRadius: 14,
        boxShadow: '0 2px 4px -2px rgba(6,20,36,.2), 0 18px 30px -20px rgba(6,20,36,.3)',
        padding: 24, marginBottom: 20,
      }}>
        {children}
      </div>
      <h3 style={{ fontSize: 18, fontWeight: 600, color: '#10161F', marginBottom: 6 }}>{title}</h3>
      <p style={{ fontSize: 15, color: '#5A6472', lineHeight: 1.55 }}>{text}</p>
    </div>
  );
}

function MailRow({ label, time, color, dimmed }: { label: string; time: string; color: string; dimmed?: boolean }) {
  return (
    <div className="flex items-center justify-between" style={{
      background: dimmed ? '#F4F7FA' : '#F4F7FA', borderRadius: 8, padding: '10px 16px',
      opacity: dimmed ? 0.6 : 1,
    }}>
      <span style={{ fontSize: 14, color: '#5A6472' }}>{label}</span>
      <span style={{ fontVariantNumeric: 'tabular-nums', fontSize: 14, fontWeight: 600, color }}>{time}</span>
    </div>
  );
}

function HowCard({ num, title, text, dark }: { num: string; title: string; text: string; dark?: boolean }) {
  return (
    <div style={{
      background: dark ? '#1B3A5C' : '#fff',
      border: dark ? 'none' : '1px solid #E4E7EC',
      borderRadius: 16, padding: 28,
    }}>
      <span style={{
        fontSize: 32, fontWeight: 700, lineHeight: 1,
        color: dark ? 'rgba(255,255,255,0.25)' : '#E4E7EC',
        display: 'block', marginBottom: 16,
      }}>{num}</span>
      <h3 style={{ fontSize: 17, fontWeight: 600, color: dark ? '#fff' : '#10161F', marginBottom: 8 }}>{title}</h3>
      <p style={{ fontSize: 15, color: dark ? 'rgba(255,255,255,0.7)' : '#5A6472', lineHeight: 1.55 }}>{text}</p>
    </div>
  );
}

function NavLink({
  href,
  children,
  active,
  dotColor,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  dotColor?: string;
}) {
  return (
    <Link
      to={href}
      className="inline-flex items-center gap-2 px-3"
      style={{
        fontSize: '14.5px',
        color: '#5A6472',
        fontWeight: active ? 600 : 400,
        minHeight: 44,
      }}
    >
      {dotColor && (
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: dotColor,
            flexShrink: 0,
          }}
        />
      )}
      {children}
    </Link>
  );
}

export default EmailAgent;
