import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "E-commerce Manager",
      company: "FashionHub",
      avatar: "SJ",
      rating: 5,
      text: "glimps transformed our customer support. Response times dropped from hours to seconds, and our conversion rate increased by 23%.",
      color: "bg-purple-400",
    },
    {
      name: "Michael Chen",
      role: "Founder & CEO",
      company: "TechGear Store",
      avatar: "MC",
      rating: 5,
      text: "The AI understands complex product questions better than I expected. It's like having a knowledgeable sales assistant working 24/7.",
      color: "bg-blue-400",
    },
    {
      name: "Emma Williams",
      role: "Customer Success Lead",
      company: "BeautyBox",
      avatar: "EW",
      rating: 5,
      text: "Our team now focuses on complex issues while glimps handles routine questions. Customer satisfaction scores have never been higher!",
      color: "bg-pink-400",
    },
    {
      name: "David Rodriguez",
      role: "Operations Director",
      company: "HomeEssentials",
      avatar: "DR",
      rating: 5,
      text: "The multilingual support is game-changing for our international expansion. glimps helps us serve customers in 12 countries seamlessly.",
      color: "bg-green-400",
    },
    {
      name: "Lisa Anderson",
      role: "Marketing Director",
      company: "SportsPro",
      avatar: "LA",
      rating: 5,
      text: "Not only does it answer questions, but the smart product recommendations have directly increased our average order value by 18%.",
      color: "bg-orange-400",
    },
    {
      name: "James Thompson",
      role: "Co-founder",
      company: "GadgetWorld",
      avatar: "JT",
      rating: 5,
      text: "Implementation was incredibly easy. Within hours, glimps was handling customer inquiries with impressive accuracy and natural conversation.",
      color: "bg-red-400",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-background py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Testimonials
          </span>
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Wall of Love 💜
          </h2>
          <p className="text-lg text-muted-foreground">
            See what e-commerce businesses are saying about glimps
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
