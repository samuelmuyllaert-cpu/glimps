import { useLanguage } from "@/contexts/LanguageContext";

const Quote = () => {
  const { language } = useLanguage();

  return (
    <section className="relative w-full overflow-hidden bg-muted/30 py-16 sm:py-24 md:py-32 lg:py-40">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <blockquote className="space-y-4 px-4">
            <p className="font-inter text-xl sm:text-2xl md:text-4xl lg:text-5xl font-normal leading-tight text-foreground">
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
