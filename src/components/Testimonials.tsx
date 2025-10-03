import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Jansen",
      role: "E-commerce Manager",
      company: "FashionHub",
      avatar: "SJ",
      rating: 5,
      text: "glimps heeft onze klantenservice getransformeerd. Reactietijden daalden van uren naar seconden, en onze conversieratio steeg met 23%.",
      color: "bg-purple-400",
    },
    {
      name: "Michael de Vries",
      role: "Oprichter & CEO",
      company: "TechGear Store",
      avatar: "MV",
      rating: 5,
      text: "De AI begrijpt complexe productvragen beter dan ik verwachtte. Het is alsof je een deskundige verkoper hebt die 24/7 werkt.",
      color: "bg-blue-400",
    },
    {
      name: "Emma Willems",
      role: "Customer Success Lead",
      company: "BeautyBox",
      avatar: "EW",
      rating: 5,
      text: "Ons team focust nu op complexe problemen terwijl glimps routinevragen afhandelt. Klanttevredenheid is nog nooit zo hoog geweest!",
      color: "bg-pink-400",
    },
    {
      name: "David Rodriguez",
      role: "Operations Director",
      company: "HomeEssentials",
      avatar: "DR",
      rating: 5,
      text: "De meertalige ondersteuning is een gamechanger voor onze internationale expansie. glimps helpt ons klanten in 12 landen naadloos te bedienen.",
      color: "bg-green-400",
    },
    {
      name: "Lisa Andersson",
      role: "Marketing Director",
      company: "SportsPro",
      avatar: "LA",
      rating: 5,
      text: "Het beantwoordt niet alleen vragen, maar de slimme productaanbevelingen hebben onze gemiddelde bestelwaarde met 18% verhoogd.",
      color: "bg-orange-400",
    },
    {
      name: "James Thompson",
      role: "Co-founder",
      company: "GadgetWorld",
      avatar: "JT",
      rating: 5,
      text: "Implementatie was ongelooflijk eenvoudig. Binnen enkele uren behandelde glimps klantvragen met indrukwekkende nauwkeurigheid.",
      color: "bg-red-400",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-background py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Getuigenissen
          </span>
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Wall of Love 💜
          </h2>
          <p className="text-lg text-muted-foreground">
            Zie wat e-commerce bedrijven over glimps zeggen
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
                {[...Array(testimonial.rating)].map((_, i) => (
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
                  className={`flex h-12 w-12 items-center justify-center rounded-full ${testimonial.color} text-sm font-semibold text-white`}
                >
                  {testimonial.avatar}
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
