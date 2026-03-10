import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Testimonials = () => {
  const { language, t } = useLanguage();
  const testimonials: Array<{name: string, role: string, company: string, text: string}> = t('testimonials.items') as any;

  const avatarColors = ["bg-purple-400", "bg-blue-400", "bg-pink-400", "bg-green-400", "bg-orange-400", "bg-red-400"];

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  return (
    <section className="relative w-full overflow-hidden bg-background py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12 lg:mb-16 text-center">
          <span className="mb-3 sm:mb-4 inline-block text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary">
            {t('testimonials.badge')}
          </span>
          <h2 className="mb-3 sm:mb-4 font-inter text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-foreground px-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-4">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mx-auto grid max-w-7xl gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col rounded-xl sm:rounded-2xl border border-border bg-card p-4 sm:p-6 transition-all hover:border-primary/30 hover:shadow-md"
            >
              {/* Rating */}
              <div className="mb-3 sm:mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="mb-4 sm:mb-6 flex-1 text-sm sm:text-base text-muted-foreground leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-2 sm:gap-3">
                <div
                  className={`flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full ${avatarColors[index % avatarColors.length]} text-xs sm:text-sm font-semibold text-white`}
                >
                  {getInitials(testimonial.name)}
                </div>
                <div>
                  <div className="text-sm sm:text-base font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    {testimonial.role} @ {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
