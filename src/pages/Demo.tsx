import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import SEO from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Calendar, 
  Video, 
  TrendingUp, 
  Users, 
  CheckCircle2, 
  Shield, 
  Clock,
  MessageSquare,
  Zap
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const demoFormSchema = z.object({
  firstName: z.string().trim().min(1, "Voornaam is verplicht").max(100),
  lastName: z.string().trim().min(1, "Achternaam is verplicht").max(100),
  email: z.string().trim().email("Ongeldig e-mailadres").max(255),
  phone: z.string().trim().optional(),
  company: z.string().trim().min(1, "Bedrijfsnaam is verplicht").max(200),
  website: z.string().trim().optional(),
  employees: z.string().min(1, "Selecteer aantal medewerkers"),
  message: z.string().trim().max(1000).optional()
});

const Demo = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    employees: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    try {
      const validated = demoFormSchema.parse(formData);
      
      // Send directly to webhook
      const response = await fetch("https://hook.eu2.make.com/en55sim9m2dl0w91tg1qdwgxrwl9ifws", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: validated.firstName,
          lastName: validated.lastName,
          name: `${validated.firstName} ${validated.lastName}`,
          email: validated.email,
          company: validated.company,
          phone: validated.phone || "",
          website: validated.website || "",
          employees: validated.employees,
          message: validated.message || "",
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Kon demo aanvraag niet verzenden");
      }

      toast({
        title: "Demo aanvraag verzonden! 🎉",
        description: "We nemen binnen 24 uur contact met je op om een geschikte tijd in te plannen.",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        website: "",
        employees: "",
        message: ""
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
        toast({
          title: "Vul alle verplichte velden in",
          description: "Controleer het formulier en probeer opnieuw.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Er is iets misgegaan",
          description: "Probeer het later opnieuw of neem direct contact met ons op.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    {
      question: "Hoe lang duurt de demo?",
      answer: "De demo duurt ongeveer 30 minuten. We nemen de tijd om jouw specifieke situatie te begrijpen en te laten zien hoe Glimps precies kan helpen."
    },
    {
      question: "Moet ik iets voorbereiden?",
      answer: "Nee, je hoeft niets voor te bereiden. Het helpt wel als je alvast nadenkt over je grootste uitdagingen in klantenservice en welke vragen je vaak krijgt."
    },
    {
      question: "Is de demo echt gratis?",
      answer: "Ja, de demo is volledig gratis en vrijblijvend. Er zitten geen verborgen kosten aan vast en we vragen geen creditcardgegevens."
    },
    {
      question: "Kan ik de demo ook online volgen?",
      answer: "Ja! We doen alle demo's via videobellen (Google Meet of Teams), zodat je gemakkelijk vanaf kantoor of thuis kunt deelnemen."
    },
    {
      question: "Wat als Glimps niet bij mijn bedrijf past?",
      answer: "Geen probleem! We zijn eerlijk over of we een goede match zijn. Als Glimps niet de beste oplossing voor jouw situatie is, zeggen we dat gewoon."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Plan een Demo - Glimps AI | Zie hoe we jouw business transformeren"
        description="Plan een persoonlijke demo van 30 minuten en ontdek hoe Glimps AI jouw klantenservice automatiseert en conversies verhoogt. Gratis en vrijblijvend."
        path="/demo"
      />
      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 font-inter text-4xl font-normal leading-tight md:text-6xl">
            Zie hoe Glimps jouw<br />
            <span className="text-primary">business transformeert</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Plan een persoonlijke demo en ontdek hoe onze AI-chatbot jouw klantenservice 
            automatiseert, conversies verhoogt en klanten bij maakt.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Column - Info */}
            <div className="space-y-8">
              {/* What to Expect */}
              <div>
                <h2 className="mb-8 text-3xl font-bold">Wat je kunt verwachten</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold">30 minuten persoonlijke aandacht</h3>
                      <p className="text-sm text-muted-foreground">
                        Een-op-een sessie met een Glimps expert die jouw specifieke use case begrijpt
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Video className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold">Live demo op jouw data</h3>
                      <p className="text-sm text-muted-foreground">
                        We tonen hoe Glimps werkt met voorbeelden uit jouw branche en producten
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold">ROI berekening voor jouw business</h3>
                      <p className="text-sm text-muted-foreground">
                        Concrete cijfers over hoeveel tijd en geld je bespaart, en hoeveel extra omzet je genereert
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold">Q&A en advies op maat</h3>
                      <p className="text-sm text-muted-foreground">
                        Al je vragen beantwoord en directe feedback op jouw situatie
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Glimps */}
              <Card className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white">
                <h3 className="mb-6 text-xl font-bold">Waarom 100+ webshops voor Glimps kozen</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                      <TrendingUp className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-medium">+43% hogere conversie rate</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                      <MessageSquare className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-medium">89% vragen automatisch opgelost</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                      <Shield className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-medium">Volledig GDPR-compliant</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                      <Zap className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-medium">Live binnen 2 weken</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Column - Form */}
            <div>
              <Card className="p-8">
                <div className="mb-6 flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary">
                    <MessageSquare className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Plan je demo</h3>
                    <p className="text-sm text-muted-foreground">Binnen 24 uur reactie</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">
                        Voornaam <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="Jan"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className={errors.firstName ? "border-destructive" : ""}
                      />
                      {errors.firstName && (
                        <p className="text-sm text-destructive">{errors.firstName}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName">
                        Achternaam <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Jansen"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className={errors.lastName ? "border-destructive" : ""}
                      />
                      {errors.lastName && (
                        <p className="text-sm text-destructive">{errors.lastName}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">
                      E-mailadres <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="jan@bedrijf.nl"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefoonnummer</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+31 6 12345678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">
                      Bedrijfsnaam <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="company"
                      placeholder="Jouw Webshop B.V."
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className={errors.company ? "border-destructive" : ""}
                    />
                    {errors.company && (
                      <p className="text-sm text-destructive">{errors.company}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website">Website URL</Label>
                    <Input
                      id="website"
                      type="url"
                      placeholder="https://jouwwebshop.nl"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="employees">
                      Aantal medewerkers <span className="text-destructive">*</span>
                    </Label>
                    <Select
                      value={formData.employees}
                      onValueChange={(value) => setFormData({ ...formData, employees: value })}
                    >
                      <SelectTrigger className={errors.employees ? "border-destructive" : ""}>
                        <SelectValue placeholder="Selecteer..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-5">1-5 medewerkers</SelectItem>
                        <SelectItem value="6-10">6-10 medewerkers</SelectItem>
                        <SelectItem value="11-50">11-50 medewerkers</SelectItem>
                        <SelectItem value="51-200">51-200 medewerkers</SelectItem>
                        <SelectItem value="200+">200+ medewerkers</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.employees && (
                      <p className="text-sm text-destructive">{errors.employees}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Vertel ons over je uitdaging (optioneel)</Label>
                    <Textarea
                      id="message"
                      placeholder="Waar loop je tegenaan met klantenservice? Wat zijn je grootste uitdagingen?"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      maxLength={1000}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Verzenden..." : "Plan mijn demo →"}
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    Door dit formulier in te vullen ga je akkoord met onze{" "}
                    <a href="#" className="text-primary hover:underline">
                      privacyverklaring
                    </a>
                    . We respecteren je privacy en spammen nooit.
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-t bg-muted/30 py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold">Veelgestelde vragen</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="p-6">
                  <h3 className="mb-3 font-semibold">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold">
            Klaar om tijd te<br />
            <span className="text-primary">besparen en te groeien?</span>
          </h2>
          <p className="mb-12 text-lg text-muted-foreground">
            Plan vandaag nog je persoonlijke demo en ontdek hoe Glimps jouw business kan transformeren.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <span className="font-medium">30 minuten</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Video className="h-6 w-6 text-primary" />
              </div>
              <span className="font-medium">Online</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <span className="font-medium">Gratis</span>
            </div>
          </div>
        </div>
      </section>

      <ChatWidget />
      <Footer />
    </div>
  );
};

export default Demo;
