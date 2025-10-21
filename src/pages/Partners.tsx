import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Handshake,
  TrendingUp,
  Users,
  Target,
  Zap,
  Award,
  Euro,
  ArrowRight,
  CheckCircle2,
  Headphones,
  BookOpen,
  Rocket,
} from "lucide-react";
import { useState } from "react";

const Partners = () => {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    clients: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Partner aanmelding:", formData);
    // TODO: Implement form submission
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Partner Programma - Glimps AI | Word reseller en verdien"
        description="Verdien aantrekkelijke commissies door Glimps AI te verkopen. 30% recurrente commissie, dedicated support en marketing materialen."
        path="/partners"
      />
      <StructuredData type="organization" />
      <StructuredData 
        type="service" 
        data={{
          name: "Glimps Partner Programma",
          description: "Verdien tot 40% recurrente commissie als Glimps reseller partner met dedicated support"
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
              Verdien aantrekkelijke commissies door de beste AI chatbot oplossing aan jouw klanten te leveren
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="rounded-full px-8">
                Word Partner
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8">
                Download Partner Kit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">30%</div>
              <p className="text-muted-foreground">Recurrente commissie</p>
            </div>
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
              <h3 className="mb-3 text-2xl font-bold">Aantrekkelijke Commissies</h3>
              <p className="mb-4 text-muted-foreground">
                Verdien 30% recurrente commissie op alle klanten die je aanbrengt. Blijvende inkomsten maand na maand.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm">30% maandelijkse commissie</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm">Levenslange uitbetaling</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm">Extra bonus bij 10+ klanten</span>
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

      {/* Commission Structure */}
      <section className="border-y bg-gradient-to-br from-primary/5 to-background py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold">Commissie Structuur</h2>
            <p className="text-xl text-muted-foreground">
              Transparante en eerlijke verdeling
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            <Card className="relative overflow-hidden p-8">
              <div className="mb-4">
                <div className="text-sm font-medium text-muted-foreground">STARTER</div>
                <div className="mb-2 text-4xl font-bold text-primary">30%</div>
                <div className="text-sm text-muted-foreground">1-9 klanten</div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm">Recurrente commissie</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm">Partner dashboard</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm">Marketing materialen</span>
                </li>
              </ul>
            </Card>

            <Card className="relative overflow-hidden border-2 border-primary p-8">
              <div className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">
                POPULAIR
              </div>
              <div className="mb-4">
                <div className="text-sm font-medium text-muted-foreground">PROFESSIONAL</div>
                <div className="mb-2 text-4xl font-bold text-primary">35%</div>
                <div className="text-sm text-muted-foreground">10-24 klanten</div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm">Alles van Starter +</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm">Lead sharing programma</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm">Priority support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm">Co-marketing budget</span>
                </li>
              </ul>
            </Card>

            <Card className="relative overflow-hidden p-8">
              <div className="mb-4">
                <div className="text-sm font-medium text-muted-foreground">ENTERPRISE</div>
                <div className="mb-2 text-4xl font-bold text-primary">40%</div>
                <div className="text-sm text-muted-foreground">25+ klanten</div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm">Alles van Professional +</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm">Dedicated partner manager</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm">Kwartaal performance bonus</span>
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
              <h3 className="mb-2 text-xl font-bold">Verdienen</h3>
              <p className="text-sm text-muted-foreground">
                Ontvang maandelijks je commissie automatisch
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="border-t bg-gradient-to-br from-background to-primary/5 py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold">Word Vandaag Nog Partner</h2>
              <p className="text-xl text-muted-foreground">
                Vul het formulier in en we nemen binnen 24 uur contact met je op
              </p>
            </div>

            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="company">Bedrijfsnaam *</Label>
                    <Input
                      id="company"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Jouw Agency BV"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="name">Contactpersoon *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jan Jansen"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-mailadres *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jan@agency.be"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefoonnummer *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+32 123 45 67 89"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="clients">Aantal actieve klanten</Label>
                  <Input
                    id="clients"
                    value={formData.clients}
                    onChange={(e) => setFormData({ ...formData, clients: e.target.value })}
                    placeholder="bijv. 25"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Waarom wil je partner worden?</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Vertel ons over je motivatie en doelstellingen..."
                    className="min-h-32"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full rounded-full">
                  Partner Aanvraag Indienen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  We nemen binnen 24 uur contact met je op voor een kennismaking
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;
