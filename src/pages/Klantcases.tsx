import { useState } from "react";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CircleCheck as CheckCircle2, FileText, Lock, Mail, Building2, User, ArrowRight } from "lucide-react";

const WEBHOOK_URL = "https://hook.eu2.make.com/caorgt3v7lm5cpdnektwa3kvo1j8w4ti";

const formSchema = z.object({
  name: z.string().trim().min(1, "Naam is verplicht").max(100),
  email: z.string().trim().email("Ongeldig e-mailadres").max(255),
  company: z.string().trim().min(1, "Bedrijfsnaam is verplicht").max(200),
});

const cases = [
  {
    label: "Absolute Teamsport",
    desc: "Hoe Absolute Teamsport hun klantenservice automatiseerde en conversies verhoogde.",
  },
  {
    label: "Het Cosmeticahuis",
    desc: "Productaanbevelingen via AI die de gemiddelde bestelwaarde verhoogden.",
  },
  {
    label: "Nomige",
    desc: "Gepersonaliseerde huidverzorgingsadviezen via een intelligente chatbot.",
  },
  {
    label: "Lens Online",
    desc: "24/7 klantenondersteuning die de wachttijden drastisch verminderde.",
  },
];

const Klantcases = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", company: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    try {
      const validated = formSchema.parse(formData);

      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: validated.name,
          email: validated.email,
          company: validated.company,
          timestamp: new Date().toISOString(),
          source: "klantcases-pagina",
        }),
      });

      if (!response.ok) {
        throw new Error("Webhook failed");
      }

      setSubmitted(true);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.issues.forEach((err) => {
          if (err.path[0]) newErrors[err.path[0].toString()] = err.message;
        });
        setErrors(newErrors);
        toast({
          title: "Controleer je gegevens",
          description: "Vul alle verplichte velden correct in.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Er ging iets mis",
          description: "Probeer het opnieuw of neem contact op.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Klantcases - Glimps AI | Ontdek hoe webshops groeien met AI"
        description="Bekijk hoe Belgische webshops hun klantenservice automatiseerden en hun omzet verhoogden met Glimps AI. Download onze vier klantcases gratis."
        path="/klantcases"
      />
      <Navigation />

      {/* Hero */}
      <section className="container mx-auto px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Gratis klantcases
          </span>
          <h1 className="mb-6 font-inter text-4xl font-normal leading-tight md:text-5xl">
            Zie hoe webshops groeien{" "}
            <span className="text-primary">met Glimps AI</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Laat je naam en e-mailadres achter en ontvang direct onze vier uitgebreide klantcases — met concrete resultaten van Belgische webshops.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="container mx-auto px-6 pb-24">
        <div className="mx-auto max-w-5xl">
          {!submitted ? (
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
              {/* Left: Case previews */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Wat je ontvangt</h2>
                <div className="space-y-4">
                  {cases.map((c, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 rounded-xl border bg-muted/30 p-5"
                    >
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">{c.label}</span>
                          <Lock className="h-3.5 w-3.5 text-muted-foreground" />
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Card className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white">
                  <h3 className="mb-4 font-bold">Wat je leert uit de cases</h3>
                  <ul className="space-y-3">
                    {[
                      "Welke resultaten realistisch zijn in jouw sector",
                      "Hoe de implementatie verloopt bij vergelijkbare webshops",
                      "Wat de impact is op klanttevredenheid en omzet",
                      "Hoe snel je een rendement behaalt op je investering",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm">
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>

              {/* Right: Form */}
              <div>
                <Card className="p-8">
                  <div className="mb-6 flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Ontvang de klantcases</h3>
                      <p className="text-sm text-muted-foreground">
                        Gratis en vrijblijvend — je ontvangt ze direct per mail.
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        <span className="flex items-center gap-1.5">
                          <User className="h-3.5 w-3.5" />
                          Naam <span className="text-destructive">*</span>
                        </span>
                      </Label>
                      <Input
                        id="name"
                        placeholder="Jan Jansen"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={errors.name ? "border-destructive" : ""}
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive">{errors.name}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">
                        <span className="flex items-center gap-1.5">
                          <Mail className="h-3.5 w-3.5" />
                          E-mailadres <span className="text-destructive">*</span>
                        </span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="jan@bedrijf.be"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={errors.email ? "border-destructive" : ""}
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive">{errors.email}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">
                        <span className="flex items-center gap-1.5">
                          <Building2 className="h-3.5 w-3.5" />
                          Bedrijfsnaam <span className="text-destructive">*</span>
                        </span>
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

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Verzenden..." : (
                        <span className="flex items-center gap-2">
                          Stuur me de klantcases
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      )}
                    </Button>

                    <p className="text-center text-xs text-muted-foreground">
                      We respecteren je privacy en sturen je geen spam.
                    </p>
                  </form>
                </Card>
              </div>
            </div>
          ) : (
            /* Success state */
            <div className="mx-auto max-w-lg text-center">
              <div className="mb-6 flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle2 className="h-10 w-10 text-green-600" />
                </div>
              </div>
              <h2 className="mb-4 text-3xl font-bold">Bedankt, {formData.name.split(" ")[0]}!</h2>
              <p className="mb-8 text-lg text-muted-foreground">
                We sturen de vier klantcases direct naar{" "}
                <span className="font-medium text-foreground">{formData.email}</span>.
                Controleer ook je spamfolder als je de mail niet direct ziet.
              </p>
              <div className="space-y-3">
                {cases.map((c, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-lg border bg-muted/30 px-4 py-3 text-left"
                  >
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-green-600" />
                    <span className="text-sm font-medium">{c.label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <p className="mb-4 text-sm text-muted-foreground">
                  Wil je meer weten over wat Glimps voor jouw webshop kan betekenen?
                </p>
                <Button asChild size="lg">
                  <a href="/demo">Plan een gratis demo</a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Klantcases;
