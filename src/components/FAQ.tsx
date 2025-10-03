const FAQ = () => {
  const faqs = [
    {
      question: "Wat is glimps?",
      answer: "glimps is een AI-aangedreven chatbot platform specifiek ontworpen voor e-commerce bedrijven. We helpen B2C bedrijven om klantenservice te automatiseren, productvragen te beantwoorden en verkoop te stimuleren door intelligente gesprekken.",
    },
    {
      question: "Is glimps gratis?",
      answer: "Ja, glimps biedt een gratis plan om je op weg te helpen. Betaalde plannen beginnen bij €49/maand met extra functies en hogere gespreklimieten.",
    },
    {
      question: "Hoe integreert glimps met mijn webshop?",
      answer: "glimps integreert naadloos met grote e-commerce platforms waaronder Shopify, WooCommerce, Magento en meer. Setup duurt slechts enkele minuten met onze gebruiksvriendelijke plugins.",
    },
    {
      question: "Kan ik de antwoorden van de chatbot aanpassen?",
      answer: "Absoluut! glimps biedt uitgebreide aanpassingsmogelijkheden. Je kunt de bot trainen met je productgegevens, merkstem en specifieke bedrijfsregels om consistente klantervaringen te garanderen.",
    },
    {
      question: "Hoe gaat glimps om met meerdere talen?",
      answer: "glimps ondersteunt meer dan 50 talen out of the box. De AI detecteert automatisch de taal van de klant en reageert dienovereenkomstig, perfect voor internationale bedrijven.",
    },
    {
      question: "Welke support vragen kan glimps afhandelen?",
      answer: "glimps kan een breed scala aan vragen afhandelen, waaronder productinformatie, ordertracking, retouren en terugbetalingen, verzenddetails, maattabellen en algemene klantenservice vragen.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-muted/30 py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-inter text-4xl font-normal text-foreground md:text-5xl">
            Alles wat je moet weten
          </h2>
          <p className="text-lg text-muted-foreground">
            Als je iets anders wilt vragen,{" "}
            <a href="#contact" className="text-primary underline-offset-4 hover:underline">
              neem contact met ons op
            </a>
            .
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="mx-auto grid max-w-5xl gap-x-12 gap-y-10 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <div key={index} className="space-y-3">
              <h3 className="font-inter text-lg font-normal text-foreground">
                {faq.question}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            Klaar om je klantervaring te transformeren?{" "}
            <span className="font-semibold text-foreground">
              glimps is voor jou gemaakt
            </span>
            . Begin vandaag nog met het automatiseren van support en het verhogen van verkoop.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
