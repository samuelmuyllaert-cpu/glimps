import { MessageCircle, ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const FAQ = () => {
  const { language, t } = useLanguage();
  const faqs: Array<{q: string, a: string}> = t('faq.items') as any;

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
              {t('faq.title')}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              {t('faq.subtitle')}
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
                        {faq.q}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.a}
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
