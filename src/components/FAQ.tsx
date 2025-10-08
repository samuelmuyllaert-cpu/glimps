import { MessageCircle, ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const FAQ = () => {
  const faqs = [
    {
      question: "Wat is Glimps, en hoe kan het mijn business helpen?",
      answer: "Glimps is een AI-aangedreven chatbot platform specifiek ontworpen voor e-commerce bedrijven. We helpen je klantenservice te automatiseren, productvragen te beantwoorden en verkoop te stimuleren door intelligente gesprekken die 24/7 beschikbaar zijn.",
    },
    {
      question: "Welke functionaliteiten biedt Glimps?",
      answer: "Glimps biedt productaanbevelingen, ordertracking, retourverwerking, meertalige ondersteuning, naadloze integraties met populaire e-commerce platforms, en realtime analytics om je klantenservice te optimaliseren.",
    },
    {
      question: "Is er een proefperiode beschikbaar?",
      answer: "Ja, Glimps biedt een gratis plan om je op weg te helpen. Je kunt onze chatbot uitproberen zonder creditcard. Betaalde plannen beginnen bij €49/maand met extra functies en hogere gespreklimieten.",
    },
    {
      question: "Is Glimps geschikt voor bedrijven van verschillende groottes?",
      answer: "Absoluut! Glimps schaalt mee met jouw bedrijf. Of je nu een startende webshop bent of een gevestigde e-commerce speler, onze oplossing past zich aan jouw behoeften aan en groeit mee met je onderneming.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-background py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="mb-12">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              FAQ'S
            </span>
            <h2 className="mt-4 font-inter text-4xl font-normal text-foreground md:text-5xl">
              Nog Vragen?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              We hebben een paar veelgestelde vragen beantwoord om je op weg te helpen. Maar aarzel vooral niet om contact met ons op te nemen voor meer informatie.
            </p>
          </div>

          {/* FAQ Content */}
          <div className="grid gap-8 lg:grid-cols-[350px,1fr]">
            {/* Contact Card */}
            <div>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-foreground">Support Team</h3>
                    <a 
                      href="mailto:info@glimps.be" 
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      info@glimps.be
                    </a>
                  </div>
                </div>
              </Card>
            </div>

            {/* FAQ Accordion */}
            <div>
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="rounded-lg border bg-card px-6 py-2"
                  >
                    <AccordionTrigger className="text-left font-normal text-foreground hover:no-underline">
                      <span className="flex items-center justify-between w-full pr-4">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
