import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Blog = () => {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleNewsletterSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast.error("Vul een geldig e-mailadres in");
      return;
    }

    setSubmitting(true);
    
    try {
      const response = await fetch("https://hook.eu2.make.com/9ag2uhlgs336u7dc4fuinlrikixrmmjr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        toast.success("Je bent ingeschreven voor de nieuwsbrief!");
        setEmail("");
      } else {
        toast.error("Er ging iets mis. Probeer het opnieuw.");
      }
    } catch (error) {
      console.error("Newsletter signup error:", error);
      toast.error("Er ging iets mis. Probeer het opnieuw.");
    } finally {
      setSubmitting(false);
    }
  };
  const articles = [
    {
      title: "Cart Abandonment Reduceren Met AI Chatbots: Van 69% naar 23%",
      excerpt: "AI chatbots reduceren cart abandonment met 66%. Ontdek de exacte strategie waarmee webshops €8.000-12.000 per maand aan verloren omzet terugwinnen.",
      category: "Strategy",
      date: "25 jan 2025",
      readTime: "12 min",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=400&fit=crop",
      slug: "/blog/cart-abandonment-reduceren-chatbot"
    },
    {
      title: "Hoe Chatbots Verkoop Boosten: +67% Conversie in E-commerce",
      excerpt: "AI chatbots verhogen webshop conversie met gemiddeld 67%. Ontdek de 9 manieren waarop chatbots je verkoop direct boosten met concrete cijfers en strategieën.",
      category: "Strategy",
      date: "24 jan 2025",
      readTime: "14 min",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      slug: "/blog/chatbots-boosten-verkoop"
    },
    {
      title: "Conversational Commerce Trends 2025: De Toekomst van Online Shopping",
      excerpt: "Conversational commerce groeit 300% in 2025. Ontdek de 8 trends die e-commerce transformeren: van AI shopping assistants tot voice commerce.",
      category: "Trends",
      date: "23 jan 2025",
      readTime: "13 min",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=400&fit=crop",
      slug: "/blog/conversational-commerce-trends"
    },
    {
      title: "Personalisatie met AI: 47% Hogere Conversie in E-commerce",
      excerpt: "Ontdek hoe AI-gedreven personalisatie je webshop conversie met 47% verhoogt. Van product aanbevelingen tot dynamic pricing - complete gids voor 2025.",
      category: "Strategy",
      date: "22 jan 2025",
      readTime: "11 min",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      slug: "/blog/personalisatie-ai-ecommerce"
    },
    {
      title: "AI Chatbots vs Live Chat: Welke Kies Je in 2025?",
      excerpt: "AI chatbots of live chat? Complete vergelijking op kosten, snelheid, schaalbaarheid en klanttevredenheid. Ontdek welke oplossing het beste past bij jouw webshop.",
      category: "Vergelijking",
      date: "21 jan 2025",
      readTime: "10 min",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=400&fit=crop",
      slug: "/blog/chatbots-vs-live-chat"
    },
    {
      title: "Toekomst AI in E-commerce 2026: Wat Komt Er Aan?",
      excerpt: "De AI revolutie in e-commerce versnelt in 2026. Ontdek de 7 belangrijkste trends die je webshop transformeren en hoe je er nu op voorbereid kunt zijn.",
      category: "Trends",
      date: "20 jan 2025",
      readTime: "12 min",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=400&fit=crop",
      slug: "/blog/toekomst-ai-ecommerce-2026"
    },
    {
      title: "10 Processen die AI Chatbots Automatiseren in E-commerce",
      excerpt: "Ontdek welke repetitieve e-commerce processen AI chatbots volledig automatiseren. Van orderstatus tot productadvies - AI chatbots doen het voor je.",
      category: "Use Cases",
      date: "19 jan 2025",
      readTime: "11 min",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop",
      slug: "/blog/ai-chatbots-automatiseren"
    },
    {
      title: "ROI van AI Chatbots: Concrete Cijfers en Berekeningen",
      excerpt: "Bereken de ROI van AI chatbots voor jouw webshop. Concrete cijfers, cases en rekenmodellen tonen hoe snel AI chatbots zichzelf terugverdienen.",
      category: "Business Case",
      date: "18 jan 2025",
      readTime: "10 min",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      slug: "/blog/roi-ai-chatbots"
    },
    {
      title: "AI Chatbots vs Traditionele Klantenservice: Het Verschil",
      excerpt: "Ontdek de verschillen tussen AI chatbots en traditionele klantenservice. Concrete vergelijking op snelheid, kosten, schaalbaarheid en klanttevredenheid.",
      category: "Vergelijking",
      date: "17 jan 2025",
      readTime: "9 min",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=400&fit=crop",
      slug: "/blog/ai-chatbots-vs-klantenservice"
    },
    {
      title: "AI Chatbots Implementeren: Complete Gids 2025",
      excerpt: "Complete stappenplan voor het implementeren van AI chatbots in je webshop. Van voorbereiding tot lancering, alles wat je moet weten over AI chatbots.",
      category: "Tutorial",
      date: "16 jan 2025",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      slug: "/blog/ai-chatbots-implementeren"
    },
    {
      title: "Amazon Rufus: De Cijfers Achter 's Werelds Slimste Shoppingbot",
      excerpt: "Amazon Rufus groeide in twee jaar uit tot de meest gebruikte AI-bot in retail, met 250 miljoen gebruikers en $10 miljard extra omzet.",
      category: "Case Study",
      date: "15 jan 2025",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&h=400&fit=crop",
      slug: "/blog/amazon-rufus"
    },
    {
      title: "7 Manieren om conversie te verhogen met AI chatbots",
      excerpt: "Ontdek hoe e-commerce bedrijven hun omzet met 47% verhogen door slimme chatbot strategieën in te zetten.",
      category: "Strategy",
      date: "12 jan 2025",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      slug: "/blog/conversie-verhogen"
    },
    {
      title: "De toekomst van klantenservice: AI in 2025",
      excerpt: "Waarom bedrijven die nu investeren in AI chatbots een voorsprong nemen op de concurrentie.",
      category: "Trends",
      date: "8 jan 2025",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
      slug: "/blog/toekomst-ai-2025"
    },
    {
      title: "Case study: Van 20% naar 67% conversie",
      excerpt: "Hoe webshop FashionHub hun checkout conversie meer dan verdriedubbelde met onze AI chatbot.",
      category: "Case Study",
      date: "5 jan 2025",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      slug: "/blog/case-study-fashionhub"
    },
    {
      title: "Personalisatie: De sleutel tot hogere conversies",
      excerpt: "Waarom gepersonaliseerde product aanbevelingen zo effectief zijn en hoe je ze implementeert.",
      category: "Product",
      date: "28 dec 2024",
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
      slug: "/blog/personalisatie-conversies"
    },
    {
      title: "5 Fouten die je moet vermijden met chatbots",
      excerpt: "Leer van anderen en voorkom deze veelgemaakte fouten bij het implementeren van AI chatbots.",
      category: "Tips",
      date: "20 dec 2024",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&h=400&fit=crop",
      slug: "/blog/fouten-chatbots"
    },
    {
      title: "Integratie met Shopify: Complete gids",
      excerpt: "Stap voor stap uitleg hoe je glimps integreert met je Shopify webshop in minder dan 10 minuten.",
      category: "Tutorial",
      date: "15 dec 2024",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop",
      slug: "/blog/shopify-integratie"
    }
  ];

  const categories = ["Alle", "Tutorial", "Business Case", "Vergelijking", "Use Cases", "Strategy", "Trends", "Case Study", "Product", "Tips"];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Blog - Glimps AI | Tips & Strategieën voor E-commerce"
        description="Lees onze nieuwste artikelen over AI chatbots, conversie optimalisatie en e-commerce strategieën. Tips van experts voor meer omzet."
        path="/blog"
        canonical="https://www.glimps.be/blog"
        keywords="AI chatbot blog, e-commerce tips, conversie optimalisatie, chatbot strategieën, case studies"
        type="website"
      />
      <StructuredData type="organization" />
      <StructuredData 
        type="webpage" 
        data={{
          name: "Blog - Glimps AI",
          description: "Tips, strategieën en case studies over AI chatbots en e-commerce",
          url: "https://www.glimps.be/blog"
        }} 
      />
      <StructuredData 
        type="breadcrumb" 
        data={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" }
        ]} 
      />
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
              <a
                key={index}
                href={article.slug}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer block"
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
              </a>
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
            <form onSubmit={handleNewsletterSignup} className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="je@email.be"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={submitting}
                className="flex-1 px-6 py-4 bg-background border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
              />
              <button 
                type="submit"
                disabled={submitting}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold transition-colors disabled:opacity-50"
              >
                {submitting ? "Bezig..." : "Inschrijven"}
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;
