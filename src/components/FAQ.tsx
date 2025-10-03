const FAQ = () => {
  const faqs = [
    {
      question: "What is glimps?",
      answer: "glimps is an AI-powered chatbot platform specifically designed for e-commerce businesses. We help B2C companies automate customer support, answer product questions, and drive sales through intelligent conversations.",
    },
    {
      question: "Is glimps free?",
      answer: "Yes, glimps offers a free plan to get you started. Paid plans begin at €49/month with additional features and higher conversation limits.",
    },
    {
      question: "How does glimps integrate with my store?",
      answer: "glimps seamlessly integrates with major e-commerce platforms including Shopify, WooCommerce, Magento, and more. Setup takes just minutes with our easy-to-use plugins.",
    },
    {
      question: "Can I customize the chatbot's responses?",
      answer: "Absolutely! glimps offers extensive customization options. You can train the bot with your product data, brand voice, and specific business rules to ensure consistent customer experiences.",
    },
    {
      question: "How does glimps handle multiple languages?",
      answer: "glimps supports over 50 languages out of the box. The AI automatically detects the customer's language and responds accordingly, making it perfect for international businesses.",
    },
    {
      question: "What kind of support questions can glimps handle?",
      answer: "glimps can handle a wide range of queries including product information, order tracking, returns and refunds, shipping details, size guides, and general customer support questions.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-muted/30 py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Everything you need to know
          </h2>
          <p className="text-lg text-muted-foreground">
            If you have anything else you want to ask,{" "}
            <a href="#contact" className="text-primary underline-offset-4 hover:underline">
              reach out to us
            </a>
            .
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="mx-auto grid max-w-5xl gap-x-12 gap-y-10 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <div key={index} className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">
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
            Ready to transform your customer experience?{" "}
            <span className="font-semibold text-foreground">
              glimps is built for you
            </span>
            . Start automating support and boosting sales today.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
