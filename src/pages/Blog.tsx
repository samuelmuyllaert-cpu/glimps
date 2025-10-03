import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const articles = [
    {
      title: "7 Manieren om conversie te verhogen met AI chatbots",
      excerpt: "Ontdek hoe e-commerce bedrijven hun omzet met 47% verhogen door slimme chatbot strategieën in te zetten.",
      category: "Strategy",
      date: "12 jan 2025",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
    },
    {
      title: "De toekomst van klantenservice: AI in 2025",
      excerpt: "Waarom bedrijven die nu investeren in AI chatbots een voorsprong nemen op de concurrentie.",
      category: "Trends",
      date: "8 jan 2025",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop"
    },
    {
      title: "Case study: Van 20% naar 67% conversie",
      excerpt: "Hoe webshop FashionHub hun checkout conversie meer dan verdriedubbelde met onze AI chatbot.",
      category: "Case Study",
      date: "5 jan 2025",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
    },
    {
      title: "Personalisatie: De sleutel tot hogere conversies",
      excerpt: "Waarom gepersonaliseerde product aanbevelingen zo effectief zijn en hoe je ze implementeert.",
      category: "Product",
      date: "28 dec 2024",
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop"
    },
    {
      title: "5 Fouten die je moet vermijden met chatbots",
      excerpt: "Leer van anderen en voorkom deze veelgemaakte fouten bij het implementeren van AI chatbots.",
      category: "Tips",
      date: "20 dec 2024",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&h=400&fit=crop"
    },
    {
      title: "Integratie met Shopify: Complete gids",
      excerpt: "Stap voor stap uitleg hoe je glimps integreert met je Shopify webshop in minder dan 10 minuten.",
      category: "Tutorial",
      date: "15 dec 2024",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop"
    }
  ];

  const categories = ["Alle", "Strategy", "Trends", "Case Study", "Product", "Tips", "Tutorial"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-semibold text-primary flex items-center gap-2">
                <span className="text-primary">📝</span> Kennisbank
              </span>
            </div>
            
            <h1 className="font-inter text-4xl md:text-6xl font-normal mb-6 leading-tight">
              Inzichten & inspiratie over <br />
              <span className="text-primary">AI klantenservice</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tips, strategieën en case studies om het maximale uit je AI chatbot te halen.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? 'bg-primary text-white'
                    : 'bg-muted hover:bg-muted/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <article 
                key={index}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary/90 text-white text-xs font-semibold rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-inter text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                    Lees verder
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-16 bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-3xl p-12 text-center">
            <h3 className="font-inter text-3xl font-semibold mb-4">
              Mis geen enkel artikel
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Schrijf je in voor onze nieuwsbrief en ontvang wekelijks de beste tips en inzichten over AI klantenservice.
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="je@email.nl"
                className="flex-1 px-6 py-4 bg-background border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold transition-colors">
                Inschrijven
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;
