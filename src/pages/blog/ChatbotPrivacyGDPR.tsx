import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO";

const ChatbotPrivacyGDPR = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="AI Chatbot Privacy & GDPR: Compliant Blijven in 2026 | Glimps"
        description="Leer hoe je AI chatbot GDPR-compliant maakt. Data retention, consent, privacy - alles wat je moet weten voor een legale chatbot implementatie."
        keywords="chatbot GDPR, chatbot privacy, AVG compliance chatbot, data protection AI, chatbot wetgeving"
      />
      <Navigation />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-8">
          <Link to="/blog" className="text-primary hover:underline mb-4 inline-block">
            ← Terug naar blog
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            AI Chatbot Privacy & GDPR: Blijf Compliant in 2026
          </h1>
          <div className="flex items-center gap-4 text-muted-foreground">
            <time dateTime="2026-04-01">1 april 2026</time>
            <span>•</span>
            <span>6 min leestijd</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground">
            GDPR boetes kunnen oplopen tot €20 miljoen of 4% van je omzet. Je chatbot verwerkt persoonlijke data - gesprekken, emails, voorkeuren. Hoe blijf je compliant én effectief? Complete guide.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Waarom GDPR Belangrijk Is voor Chatbots
          </h2>
          <p>
            Chatbots verzamelen veel data:
          </p>
          <ul>
            <li>Gesprek transcripts (potentieel gevoelige info)</li>
            <li>Email adressen, namen, adressen</li>
            <li>Voorkeuren en gedragspatronen</li>
            <li>Soms: medische info, financiële data</li>
          </ul>
          <p>
            GDPR (AVG in NL/BE) reguleert hoe je deze data mag verzamelen, opslaan, gebruiken. Non-compliance = grote problemen.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            De 7 GDPR Principes voor Chatbots
          </h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">1. Lawfulness, Fairness, Transparency</h3>
          <p>
            <strong>In de praktijk:</strong>
          </p>
          <ul>
            <li>Vertel klanten dat ze met AI praten (geen fake menselijke agent)</li>
            <li>Toon privacy policy link in chatbot intro</li>
            <li>Leg uit welke data je verzamelt en waarom</li>
          </ul>
          <div className="bg-gray-50 border-l-4 border-gray-300 p-4 my-4">
            <p><strong>Goed voorbeeld:</strong></p>
            <p>"Hoi! Ik ben je AI shopping assistant. Ik help je producten vinden en vragen beantwoorden. Dit gesprek wordt opgeslagen om je ervaring te verbeteren. [Privacy Policy]"</p>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-3">2. Purpose Limitation</h3>
          <p>
            Data alleen gebruiken waarvoor klant toestemming gaf.
          </p>
          <p>
            <strong>Goed:</strong> Chat data gebruiken om support te bieden → OK
          </p>
          <p>
            <strong>Fout:</strong> Chat data verkopen aan derden → NIET OK (zonder expliciete toestemming)
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">3. Data Minimization</h3>
          <p>
            Verzamel ALLEEN wat nodig is.
          </p>
          <ul>
            <li><strong>Nodig:</strong> Order number voor tracking vraag</li>
            <li><strong>Niet nodig:</strong> Geboortedatum voor productadvies</li>
          </ul>
          <p>
            Je chatbot moet niet "fishing" doen voor onnodige persoonlijke info.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">4. Accuracy</h3>
          <p>
            Data moet accuraat en up-to-date zijn.
          </p>
          <ul>
            <li>Geef klanten optie om hun profiel te updaten</li>
            <li>Verify critical info (address bij checkout)</li>
            <li>Delete oude, verouderde data</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">5. Storage Limitation</h3>
          <p>
            Bewaar data niet langer dan nodig.
          </p>
          <p>
            <strong>Aanbevolen retention periods:</strong>
          </p>
          <ul>
            <li>Chat transcripts: 6-12 maanden</li>
            <li>Customer profiles: Tot account deletion</li>
            <li>Anonymous analytics: Kan langer (geen personal data)</li>
          </ul>
          <p>
            Setup automatic deletion na retention period.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">6. Integrity & Confidentiality</h3>
          <p>
            Bescherm data tegen unauthorized access.
          </p>
          <ul>
            <li><strong>Encryption:</strong> Data at rest en in transit (SSL/TLS)</li>
            <li><strong>Access controls:</strong> Wie mag chat transcripts lezen?</li>
            <li><strong>Audit logs:</strong> Track wie data accessed</li>
            <li><strong>Regular security audits:</strong> Penetration testing</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">7. Accountability</h3>
          <p>
            Bewijs dat je compliant bent.
          </p>
          <ul>
            <li>Documenteer je data processing</li>
            <li>Privacy Impact Assessments</li>
            <li>Data Processing Agreements met vendors (AI provider, hosting)</li>
            <li>Appointed Data Protection Officer (bij grote organisaties)</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Implementatie: Maak Je Chatbot Compliant
          </h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">Step 1: Consent Management</h3>
          <p>
            Haal toestemming voor data processing:
          </p>
          <div className="bg-gray-50 border-l-4 border-gray-300 p-4 my-4">
            <p><strong>Bij eerste interactie:</strong></p>
            <p>"Door verder te chatten ga je akkoord met onze [Privacy Policy]. We gebruiken je gegevens om je te helpen en service te verbeteren."</p>
            <p>[Akkoord] [Meer info]</p>
          </div>
          <p>
            Consent moet: freely given, specific, informed, unambiguous.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Step 2: Data Access & Portability</h3>
          <p>
            Klanten hebben recht op hun data. Implementeer:
          </p>
          <ul>
            <li><strong>Data export:</strong> "Download mijn chat geschiedenis"</li>
            <li><strong>Data viewing:</strong> "Toon mijn opgeslagen profiel"</li>
            <li><strong>Easy access:</strong> Via chatbot zelf of customer portal</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Step 3: Right to be Forgotten</h3>
          <p>
            Klanten kunnen verzoeken om data deletion:
          </p>
          <div className="bg-gray-50 border-l-4 border-gray-300 p-4 my-4">
            <p><strong>Klant:</strong> "Verwijder mijn gegevens"</p>
            <p><strong>Bot:</strong> "Ik begrijp het. Wil je je hele account en alle gesprekken verwijderen? Dit kan niet ongedaan worden."</p>
            <p>[Ja, verwijder alles] [Nee, annuleer]</p>
          </div>
          <p>
            Binnen 30 dagen moet data weg zijn (tenzij legal obligation om te bewaren).
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Step 4: Data Processing Agreements</h3>
          <p>
            Als je third-party AI gebruikt (OpenAI, Anthropic):
          </p>
          <ul>
            <li>Check hun GDPR compliance (meestal OK bij grote providers)</li>
            <li>Sign Data Processing Agreement (DPA)</li>
            <li>Verify data location (EU servers preferred)</li>
            <li>Understand subprocessors</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Step 5: Security Measures</h3>
          <ul>
            <li><strong>Encryption:</strong> End-to-end waar mogelijk</li>
            <li><strong>Anonymization:</strong> Voor analytics, strip personal identifiers</li>
            <li><strong>Access logs:</strong> Wie accessed welke data wanneer?</li>
            <li><strong>Breach procedures:</strong> Plan voor data leaks (binnen 72u melden)</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Special Cases: Gevoelige Data
          </h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">Gezondheidsinformatie</h3>
          <p>
            Verkoop je health/beauty products? Klanten kunnen medische info delen:
          </p>
          <ul>
            <li><strong>Extra security:</strong> Striktere access controls</li>
            <li><strong>Explicit consent:</strong> Aparte toestemming voor health data</li>
            <li><strong>Limited retention:</strong> Korter bewaren, sneller deleten</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Minderjarigen</h3>
          <p>
            Kids onder 16 (13 in sommige landen)?
          </p>
          <ul>
            <li>Parental consent vereist</li>
            <li>Age verification mechanisms</li>
            <li>Extra bescherming (geen targeted ads, profiling)</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Financiële Data</h3>
          <p>
            Payment info, creditcard numbers:
          </p>
          <ul>
            <li><strong>Nooit opslaan</strong> in chat transcripts</li>
            <li>Use tokenization via payment provider</li>
            <li>PCI-DSS compliance naast GDPR</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Common Pitfalls te Vermijden
          </h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">❌ Pre-checked Consent Boxes</h3>
          <p>
            NIET OK: Default opt-in. Consent moet active zijn (unchecked by default).
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">❌ Vague Privacy Policies</h3>
          <p>
            "We may use your data" is te vaag. Wees specifiek: "We gebruiken chat data voor: 1) Support, 2) Product recommendations, 3) Service improvement"
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">❌ Indefinite Data Retention</h3>
          <p>
            "We bewaren chat history forever" → NIET OK. Zet limiet (bv. 12 maanden).
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">❌ Geen Data Breach Plan</h3>
          <p>
            Als je gehackt wordt: 72 uur om autoriteiten te informeren. Heb je een plan? Nee = probleem.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">❌ Third-party Data Sharing Zonder Consent</h3>
          <p>
            Chat data delen met analytics tool, marketing platform zonder expliciete toestemming → NIET OK.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Chatbot-Specific GDPR Features
          </h2>
          <p>
            Moderne compliant chatbots hebben:
          </p>
          <ul>
            <li><strong>"Forget me" command:</strong> Klant typt "delete my data" → Instant processing</li>
            <li><strong>Data export button:</strong> Download conversatie geschiedenis</li>
            <li><strong>Consent withdrawal:</strong> Opt-out van data verzameling mid-conversation</li>
            <li><strong>Privacy dashboard:</strong> Zie welke data opgeslagen is</li>
            <li><strong>Auto-redaction:</strong> AI detecteert credit cards, passwords → Automatic masking</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Checklist: Is Je Chatbot GDPR-Compliant?
          </h2>
          <ul>
            <li>☐ Privacy policy linked in chatbot</li>
            <li>☐ Clear disclosure dat het AI is (niet fake human)</li>
            <li>☐ Consent mechanisme voor data processing</li>
            <li>☐ Data retention policy (automatic deletion)</li>
            <li>☐ Right to access implementation (data export)</li>
            <li>☐ Right to be forgotten (account/data deletion)</li>
            <li>☐ Encryption at rest en in transit</li>
            <li>☐ DPA met AI provider (OpenAI/Anthropic/etc)</li>
            <li>☐ Access controls (wie mag transcripts zien?)</li>
            <li>☐ Audit logging</li>
            <li>☐ Data breach response plan</li>
            <li>☐ Regular compliance reviews</li>
          </ul>

          <div className="bg-gray-50 border-l-4 border-gray-300 p-6 my-8">
            <h3 className="text-lg font-bold mb-2">Pro Tip: Privacy as Marketing</h3>
            <p>
              GDPR compliance is niet alleen legal obligation - het is competitive advantage:
            </p>
            <ul>
              <li>Klanten vertrouwen brands die transparant zijn over data</li>
              <li>"GDPR-compliant AI chatbot" is selling point</li>
              <li>Expliciet privacy beleid verhoogt conversie (trust factor)</li>
            </ul>
            <p className="mt-2">
              Maak van compliance een feature, niet een afterthought.
            </p>
          </div>

          <div className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r-lg">
            <h3 className="text-xl font-bold mb-2">GDPR-compliant chatbots out-of-the-box</h3>
            <p className="mb-4">
              Glimps bouwt chatbots met ingebouwde GDPR compliance. Consent management, data retention, encryption - alles geregeld zodat jij focus kan op verkoop.
            </p>
            <Link
              to="/demo"
              className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Plan een demo
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default ChatbotPrivacyGDPR;
