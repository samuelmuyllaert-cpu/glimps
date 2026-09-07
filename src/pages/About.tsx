import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Target, TrendingUp, Lightbulb, Zap, Heart } from "lucide-react";
import samuelPhoto from "@/assets/1777392448773.jpeg";
import tomPhoto from "@/assets/tom.png";
import SEO from "@/components/SEO";
import StructuredData, { baseOrganization } from "@/components/StructuredData";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  const graphData = [
    {
      "@type": "AboutPage",
      "@id": "https://www.glimps.be/about",
      "url": "https://www.glimps.be/about",
      "name": "Over Ons - Glimps AI",
      "description": "Ontmoet de oprichters van Glimps AI. Twee ondernemers met sterke marketingachtergrond die AI-chatbots zien als dé tool voor meer omzet en betere klantenservice.",
      "inLanguage": "nl-BE",
      "isPartOf": {
        "@id": "https://www.glimps.be#website"
      },
      "publisher": {
        "@id": "https://www.glimps.be#organization"
      },
      "mainEntity": {
        "@id": "https://www.glimps.be#organization"
      }
    },
    baseOrganization,
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.glimps.be/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Over Ons",
          "item": "https://www.glimps.be/about"
        }
      ]
    }
  ];

  const developerInitials = ["LB", "MV", "AD", "JS", "KR", "BS", "EP", "NB"];

  return (
    <div className="min-h-screen bg-white" style={{ color: "#10161F" }}>
      <SEO
        title="Over Ons - Glimps AI | Marketing-gedreven AI Chatbot"
        description="Ontmoet de oprichters van Glimps AI. Twee ondernemers met sterke marketingachtergrond die AI-chatbots zien als dé tool voor meer omzet en betere klantenservice."
        path="/about"
        canonical="https://www.glimps.be/about"
        keywords="over glimps, oprichters, Samuel Muyllaert, Tom Muyllaert, AI chatbot team, marketing achtergrond"
        type="website"
      />
      <StructuredData type="graph" data={graphData} />
      <Navigation />

      {/* Subtle background accents */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          className="absolute opacity-80"
          style={{
            top: "-200px",
            left: "-200px",
            width: "900px",
            height: "700px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #D8E4F0 0%, #E7EEF5 62%, rgba(231,238,245,0) 100%)",
            filter: "blur(120px)",
          }}
        />
        <div
          className="absolute opacity-70"
          style={{
            top: "800px",
            right: "-250px",
            width: "800px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #F6D9D5 0%, #FAE7E5 58%, rgba(250,231,229,0) 100%)",
            filter: "blur(130px)",
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative mx-auto max-w-[1440px] px-6 text-center md:px-16" style={{ paddingTop: "160px", paddingBottom: "80px" }}>
        <span
          className="inline-block uppercase"
          style={{
            fontSize: "11.5px",
            fontWeight: 600,
            letterSpacing: "0.14em",
            color: "#5A6472",
          }}
        >
          {t('about.tagline')}
        </span>
        <h1
          className="mx-auto mt-4"
          style={{
            maxWidth: "860px",
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontWeight: 400,
            fontSize: "clamp(40px, 6vw, 78px)",
            lineHeight: 1.03,
            letterSpacing: "-0.02em",
            textWrap: "balance",
          }}
        >
          {t('about.title')}
        </h1>
        <p
          className="mx-auto mt-6"
          style={{
            maxWidth: "600px",
            fontSize: "18px",
            lineHeight: 1.62,
            color: "#5A6472",
            textWrap: "pretty",
          }}
        >
          {t('about.subtitle')}
        </p>
      </section>

      {/* Team Section */}
      <section className="relative mx-auto max-w-[1440px] px-6 md:px-16" style={{ paddingBottom: "160px" }}>
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
          {/* Samuel */}
          <div className="flex flex-col items-center text-center">
            <div
              className="overflow-hidden"
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "24px",
                boxShadow: "0 22px 44px -34px rgba(16,22,31,0.38), 0 2px 6px -3px rgba(16,22,31,0.07)",
              }}
            >
              <img
                src={samuelPhoto}
                alt="Samuel Muyllaert"
                className="h-full w-full object-cover"
                style={{ filter: "grayscale(1)" }}
              />
            </div>
            <div className="mt-8">
              <h3
                style={{
                  margin: 0,
                  fontSize: "22px",
                  fontWeight: 600,
                  letterSpacing: "-0.015em",
                }}
              >
                Samuel Muyllaert
              </h3>
              <span
                className="mt-3 inline-flex items-center gap-2"
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#1B3A5C",
                  background: "#E7EEF5",
                  padding: "6px 14px",
                  borderRadius: "999px",
                }}
              >
                <span
                  style={{
                    width: "5px",
                    height: "5px",
                    borderRadius: "999px",
                    background: "#1B3A5C",
                  }}
                />
                {t('about.cofounder')}
              </span>
            </div>
            <p
              className="mt-5 max-w-sm"
              style={{
                fontSize: "16.5px",
                lineHeight: 1.55,
                color: "#5A6472",
              }}
            >
              {t('about.samuel.description')}
            </p>
            <button
              onClick={() => window.open('https://www.linkedin.com/in/samuel-muyllaert-17311823a/', '_blank')}
              className="mt-6 cursor-pointer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                minHeight: "44px",
                background: "#10161F",
                color: "#fff",
                fontSize: "14.5px",
                fontWeight: 500,
                padding: "0 24px",
                borderRadius: "999px",
                border: "none",
                transition: "transform 160ms ease-out",
              }}
              onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.97)")}
              onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              {t('about.linkedinProfile')}
            </button>
          </div>

          {/* Tom */}
          <div className="flex flex-col items-center text-center">
            <div
              className="overflow-hidden"
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "24px",
                boxShadow: "0 22px 44px -34px rgba(16,22,31,0.38), 0 2px 6px -3px rgba(16,22,31,0.07)",
              }}
            >
              <img
                src={tomPhoto}
                alt="Tom Muyllaert"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-8">
              <h3
                style={{
                  margin: 0,
                  fontSize: "22px",
                  fontWeight: 600,
                  letterSpacing: "-0.015em",
                }}
              >
                Tom Muyllaert
              </h3>
              <span
                className="mt-3 inline-flex items-center gap-2"
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#1B3A5C",
                  background: "#E7EEF5",
                  padding: "6px 14px",
                  borderRadius: "999px",
                }}
              >
                <span
                  style={{
                    width: "5px",
                    height: "5px",
                    borderRadius: "999px",
                    background: "#1B3A5C",
                  }}
                />
                {t('about.cofounder')}
              </span>
            </div>
            <p
              className="mt-5 max-w-sm"
              style={{
                fontSize: "16.5px",
                lineHeight: 1.55,
                color: "#5A6472",
              }}
            >
              {t('about.tom.description')}
            </p>
            <button
              onClick={() => window.open('https://www.linkedin.com/in/tmuyllaert/', '_blank')}
              className="mt-6 cursor-pointer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                minHeight: "44px",
                background: "#10161F",
                color: "#fff",
                fontSize: "14.5px",
                fontWeight: 500,
                padding: "0 24px",
                borderRadius: "999px",
                border: "none",
                transition: "transform 160ms ease-out",
              }}
              onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.97)")}
              onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              {t('about.linkedinProfile')}
            </button>
          </div>
        </div>

        {/* Developers Network */}
        <div className="mx-auto mt-24 max-w-4xl">
          <div
            className="text-center"
            style={{
              background: "#fff",
              borderRadius: "24px",
              boxShadow: "0 22px 44px -34px rgba(16,22,31,0.38), 0 2px 6px -3px rgba(16,22,31,0.07)",
              padding: "48px 40px",
            }}
          >
            <h3
              style={{
                margin: 0,
                fontSize: "22px",
                fontWeight: 600,
                letterSpacing: "-0.015em",
              }}
            >
              {t('about.developersNetwork.title')}
            </h3>
            <p
              className="mx-auto mt-4 max-w-2xl"
              style={{
                fontSize: "16.5px",
                lineHeight: 1.55,
                color: "#5A6472",
              }}
            >
              {t('about.developersNetwork.description')}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {developerInitials.map((initials) => (
                <span
                  key={initials}
                  className="flex items-center justify-center"
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "14px",
                    background: "#E7EEF5",
                    color: "#1B3A5C",
                    fontSize: "14px",
                    fontWeight: 600,
                  }}
                >
                  {initials}
                </span>
              ))}
            </div>
            <p
              className="mt-6"
              style={{
                fontSize: "13px",
                color: "#5A6472",
              }}
            >
              {t('about.developersNetwork.teamWork')}
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="relative mx-auto max-w-[1440px] px-6 md:px-16" style={{ paddingBottom: "160px" }}>
        <div className="mx-auto max-w-4xl">
          <div
            style={{
              background: "#F4F7FA",
              borderRadius: "24px",
              padding: "56px",
            }}
          >
            <div className="flex items-center gap-5">
              <span
                className="flex items-center justify-center"
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "16px",
                  background: "#E7EEF5",
                }}
              >
                <Target style={{ width: "28px", height: "28px", color: "#1B3A5C" }} />
              </span>
              <h2
                style={{
                  margin: 0,
                  fontFamily: "'Instrument Serif', Georgia, serif",
                  fontWeight: 400,
                  fontSize: "clamp(32px, 4vw, 52px)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                }}
              >
                {t('about.vision.title')}
              </h2>
            </div>
            <div className="mt-8 space-y-4">
              <p style={{ margin: 0, fontSize: "16.5px", lineHeight: 1.62, color: "#5A6472" }}>
                {t('about.vision.paragraph1')}
              </p>
              <p style={{ margin: 0, fontSize: "16.5px", lineHeight: 1.62, color: "#5A6472" }}>
                {t('about.vision.paragraph2')}
              </p>
              <p style={{ margin: 0, fontSize: "16.5px", lineHeight: 1.62, color: "#5A6472" }}>
                {t('about.vision.paragraph3')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="relative mx-auto max-w-[1440px] px-6 md:px-16" style={{ paddingBottom: "160px" }}>
        <div style={{ marginBottom: "56px" }}>
          <span
            className="uppercase"
            style={{
              fontSize: "11.5px",
              fontWeight: 600,
              letterSpacing: "0.14em",
              color: "#5A6472",
            }}
          >
            Aanpak
          </span>
          <h2
            style={{
              margin: "14px 0 0",
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontWeight: 400,
              fontSize: "clamp(32px, 4vw, 52px)",
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
            }}
          >
            {t('about.approach.title')}
          </h2>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {/* Marketing Card */}
          <div
            style={{
              background: "#fff",
              borderRadius: "24px",
              boxShadow: "0 22px 44px -34px rgba(16,22,31,0.38), 0 2px 6px -3px rgba(16,22,31,0.07)",
              padding: "40px",
            }}
          >
            <span
              className="flex items-center justify-center"
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "16px",
                background: "#E7EEF5",
              }}
            >
              <TrendingUp style={{ width: "28px", height: "28px", color: "#1B3A5C" }} />
            </span>
            <h3
              className="mt-6"
              style={{
                margin: 0,
                marginTop: "24px",
                fontSize: "22px",
                fontWeight: 600,
                letterSpacing: "-0.015em",
              }}
            >
              {t('about.approach.marketing.title')}
            </h3>
            <p
              className="mt-4"
              style={{
                margin: 0,
                marginTop: "16px",
                fontSize: "16.5px",
                lineHeight: 1.55,
                color: "#5A6472",
              }}
            >
              {t('about.approach.marketing.description')}
            </p>
            <ul className="mt-6 flex flex-col gap-3" style={{ listStyle: "none", padding: 0, margin: 0, marginTop: "24px" }}>
              {[0, 1, 2, 3].map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-2 flex-none"
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "999px",
                      background: "#1B3A5C",
                    }}
                  />
                  <span style={{ fontSize: "15px", lineHeight: 1.55, color: "#5A6472" }}>
                    {t(`about.approach.marketing.items.${i}`)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Collaboration Card */}
          <div
            style={{
              background: "#fff",
              borderRadius: "24px",
              boxShadow: "0 22px 44px -34px rgba(16,22,31,0.38), 0 2px 6px -3px rgba(16,22,31,0.07)",
              padding: "40px",
            }}
          >
            <span
              className="flex items-center justify-center"
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "16px",
                background: "#E7EEF5",
              }}
            >
              <Lightbulb style={{ width: "28px", height: "28px", color: "#1B3A5C" }} />
            </span>
            <h3
              style={{
                margin: 0,
                marginTop: "24px",
                fontSize: "22px",
                fontWeight: 600,
                letterSpacing: "-0.015em",
              }}
            >
              {t('about.approach.collaboration.title')}
            </h3>
            <p
              style={{
                margin: 0,
                marginTop: "16px",
                fontSize: "16.5px",
                lineHeight: 1.55,
                color: "#5A6472",
              }}
            >
              {t('about.approach.collaboration.paragraph1')}
            </p>
            <p
              style={{
                margin: 0,
                marginTop: "12px",
                fontSize: "16.5px",
                lineHeight: 1.55,
                color: "#5A6472",
              }}
            >
              {t('about.approach.collaboration.paragraph2')}
            </p>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="relative mx-auto max-w-[1440px] px-6 md:px-16" style={{ paddingBottom: "160px" }}>
        <div style={{ marginBottom: "56px" }}>
          <span
            className="uppercase"
            style={{
              fontSize: "11.5px",
              fontWeight: 600,
              letterSpacing: "0.14em",
              color: "#5A6472",
            }}
          >
            Principes
          </span>
          <h2
            style={{
              margin: "14px 0 0",
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontWeight: 400,
              fontSize: "clamp(32px, 4vw, 52px)",
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
            }}
          >
            {t('about.principles.title')}
          </h2>
        </div>
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {/* Automation */}
          <div
            className="flex flex-col gap-4"
            style={{
              background: "#E7EEF5",
              borderRadius: "24px",
              padding: "32px",
            }}
          >
            <span
              className="flex items-center justify-center"
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "14px",
                background: "#fff",
              }}
            >
              <Zap style={{ width: "24px", height: "24px", color: "#1B3A5C" }} />
            </span>
            <h3
              style={{
                margin: 0,
                fontSize: "19px",
                fontWeight: 600,
                letterSpacing: "-0.01em",
              }}
            >
              {t('about.principles.automation.title')}
            </h3>
            <p
              style={{
                margin: 0,
                fontSize: "15px",
                lineHeight: 1.55,
                color: "#5A6472",
              }}
            >
              {t('about.principles.automation.description')}
            </p>
          </div>

          {/* Revenue */}
          <div
            className="flex flex-col gap-4"
            style={{
              background: "#E7EEF5",
              borderRadius: "24px",
              padding: "32px",
            }}
          >
            <span
              className="flex items-center justify-center"
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "14px",
                background: "#fff",
              }}
            >
              <TrendingUp style={{ width: "24px", height: "24px", color: "#1B3A5C" }} />
            </span>
            <h3
              style={{
                margin: 0,
                fontSize: "19px",
                fontWeight: 600,
                letterSpacing: "-0.01em",
              }}
            >
              {t('about.principles.revenue.title')}
            </h3>
            <p
              style={{
                margin: 0,
                fontSize: "15px",
                lineHeight: 1.55,
                color: "#5A6472",
              }}
            >
              {t('about.principles.revenue.description')}
            </p>
          </div>

          {/* Loyalty */}
          <div
            className="flex flex-col gap-4"
            style={{
              background: "#E7EEF5",
              borderRadius: "24px",
              padding: "32px",
            }}
          >
            <span
              className="flex items-center justify-center"
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "14px",
                background: "#fff",
              }}
            >
              <Heart style={{ width: "24px", height: "24px", color: "#E74E4D" }} />
            </span>
            <h3
              style={{
                margin: 0,
                fontSize: "19px",
                fontWeight: 600,
                letterSpacing: "-0.01em",
              }}
            >
              {t('about.principles.loyalty.title')}
            </h3>
            <p
              style={{
                margin: 0,
                fontSize: "15px",
                lineHeight: 1.55,
                color: "#5A6472",
              }}
            >
              {t('about.principles.loyalty.description')}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
