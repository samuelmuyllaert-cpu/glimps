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
    <section className="relative w-full overflow-hidden bg-background py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            {t('testimonials.badge')}
          </span>
          <h2 className="mb-4 font-inter text-4xl font-normal text-foreground md:text-5xl">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md"
            >
              {/* Rating */}
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="mb-6 flex-1 text-muted-foreground leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full ${avatarColors[index % avatarColors.length]} text-sm font-semibold text-white`}
                >
                  {getInitials(testimonial.name)}
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
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
