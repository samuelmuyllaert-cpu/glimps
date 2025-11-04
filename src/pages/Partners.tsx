import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { Card } from "@/components/ui/card";
import {
  Handshake,
  TrendingUp,
  Users,
  Target,
  Zap,
  Award,
  Euro,
  CheckCircle2,
  Headphones,
  BookOpen,
  Rocket,
} from "lucide-react";

const Partners = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Partner Programma - Glimps AI | Word partner"
        description="Word partner van Glimps AI en help e-commerce bedrijven groeien met de beste AI chatbot oplossing. Dedicated support en marketing materialen."
        path="/partners"
      />
      <StructuredData type="organization" />
      <StructuredData 
        type="service" 
        data={{
          name: "Glimps Partner Programma",
          description: "Word partner van Glimps AI met dedicated support en marketing materialen"
        }} 
      />
      <StructuredData 
        type="breadcrumb" 
        data={[
          { name: "Home", url: "/" },
          { name: "Partners", url: "/partners" }
        ]} 
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-background py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center justify-center rounded-full bg-primary/10 p-4">
              <Handshake className="h-12 w-12 text-primary" />
            </div>
            <h1 className="mb-6 text-5xl font-bold md:text-6xl">
              Word Glimps Partner
            </h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Help jouw klanten groeien met de beste AI chatbot oplossing voor e-commerce
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">500+</div>
              <p className="text-muted-foreground">Actieve klanten</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">24/7</div>
              <p className="text-muted-foreground">Partner support</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">95%</div>
              <p className="text-muted-foreground">Klanttevredenheid</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold">Waarom Glimps Partner worden?</h2>
            <p className="text-xl text-muted-foreground">
              Alles wat je nodig hebt om succesvol te zijn
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="p-8">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <Euro className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 text-2xl font-bold">Aantrekkelijke Voorwaarden</h3>
              <p className="mb-4 text-muted-foreground">
                Als partner ontvang je aantrekkelijke voorwaarden voor elke klant die je aanbrengt. Neem contact op voor meer details.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm">Transparante afspraken</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm">Langetermijn samenwerking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm">Flexibele afspraken mogelijk</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <Headphones className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 text-2xl font-bold">Dedicated Support</h3>
              <p className="mb-4 text-muted-foreground">
                Een toegewijd partner manager die jou en je klanten ondersteunt bij elke stap.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm">Persoonlijke partner manager</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm">24/7 technische support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm">Partner slack community</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <BookOpen className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 text-2xl font-bold">Marketing Materialen</h3>
              <p className="mb-4 text-muted-foreground">
                Professionele sales en marketing tools om makkelijk klanten te winnen.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm">Sales decks en case studies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm">Co-marketing campagnes</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <Zap className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 text-2xl font-bold">Snelle Onboarding</h3>
              <p className="mb-4 text-muted-foreground">
                Begin binnen een week met verkopen dankzij ons gestroomlijnde proces.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm">Partner training programma</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm">Certificering mogelijkheid</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm">Partner dashboard toegang</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 text-2xl font-bold">Lead Sharing</h3>
              <p className="mb-4 text-muted-foreground">
                Krijg warme leads van ons die matchen met jouw doelgroep en expertise.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm">Pre-qualified leads</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm">Geografische targeting</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm">Industry matching</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <Rocket className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 text-2xl font-bold">Groei Samen</h3>
              <p className="mb-4 text-muted-foreground">
                Naarmate je meer klanten aanbrengt, stijgen je voordelen en commissies.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm">Tier-based commissies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm">Kwartaal performance bonus</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm">Exclusieve partner events</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold">Hoe werkt het?</h2>
            <p className="text-xl text-muted-foreground">
              In 4 stappen partner worden
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white mx-auto">
                1
              </div>
              <h3 className="mb-2 text-xl font-bold">Aanmelden</h3>
              <p className="text-sm text-muted-foreground">
                Vul het formulier in en vertel ons over je business
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white mx-auto">
                2
              </div>
              <h3 className="mb-2 text-xl font-bold">Onboarding</h3>
              <p className="text-sm text-muted-foreground">
                Krijg toegang tot training, materialen en je dashboard
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white mx-auto">
                3
              </div>
              <h3 className="mb-2 text-xl font-bold">Verkopen</h3>
              <p className="text-sm text-muted-foreground">
                Bied Glimps aan je klanten aan met onze support
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white mx-auto">
                4
              </div>
              <h3 className="mb-2 text-xl font-bold">Samenwerken</h3>
              <p className="text-sm text-muted-foreground">
                Bouw samen een succesvolle samenwerking op
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="border-t bg-gradient-to-br from-background to-primary/5 py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-12">
              <h2 className="mb-4 text-4xl font-bold">Interesse om Partner te Worden?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Neem contact op voor meer informatie over ons partnerprogramma en de mogelijkheden voor jouw organisatie.
              </p>
              <div className="rounded-lg border border-border bg-card p-8">
                <p className="text-lg mb-4">
                  Stuur een email naar <a href="mailto:info@glimps.be" className="font-semibold text-primary hover:underline">info@glimps.be</a>
                </p>
                <p className="text-muted-foreground">
                  We nemen binnen 24 uur contact met je op voor een vrijblijvend gesprek over de mogelijkheden.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;
