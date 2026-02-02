import { useLanguage } from "@/contexts/LanguageContext";

const Quote = () => {
  const { language } = useLanguage();

  return (
    <section className="relative w-full overflow-hidden bg-muted/30 py-32 md:py-40">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center">
          <blockquote className="space-y-4">
            <p className="font-inter text-3xl font-normal leading-tight text-foreground md:text-5xl lg:text-6xl">
              {language === 'fr' ? (
                <>
                  Embrassez l'avenir de
                  <br />
                  <span className="text-primary">l'automatisation IA e-commerce</span>.
                </>
              ) : (
                <>
                  Embrace The Future Of
                  <br />
                  <span className="text-primary">E-commerce AI Automation</span>.
                </>
              )}
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Quote;
