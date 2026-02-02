import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
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
import { useLanguage } from "@/contexts/LanguageContext";

const Demo = () => {
  const { language, t } = useLanguage();
  const { toast } = useToast();

  const demoFormSchema = z.object({
    firstName: z.string().trim().min(1, language === 'fr' ? "Le prénom est obligatoire" : "Voornaam is verplicht").max(100),
    lastName: z.string().trim().min(1, language === 'fr' ? "Le nom est obligatoire" : "Achternaam is verplicht").max(100),
    email: z.string().trim().email(language === 'fr' ? "Adresse e-mail invalide" : "Ongeldig e-mailadres").max(255),
    phone: z.string().trim().optional(),
    company: z.string().trim().min(1, language === 'fr' ? "Le nom de l'entreprise est obligatoire" : "Bedrijfsnaam is verplicht").max(200),
    website: z.string().trim().optional(),
    employees: z.string().min(1, language === 'fr' ? "Sélectionnez le nombre d'employés" : "Selecteer aantal medewerkers"),
    message: z.string().trim().max(1000).optional()
  });
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
        throw new Error("Could not send demo request");
      }

      toast({
        title: t('demo.toastSuccess'),
        description: t('demo.toastSuccessDesc'),
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
        error.issues.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
        toast({
          title: t('demo.toastValidation'),
          description: t('demo.toastValidationDesc'),
          variant: "destructive",
        });
      } else {
        toast({
          title: t('demo.toastError'),
          description: t('demo.toastErrorDesc'),
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs: Array<{q: string, a: string}> = t('demo.faqs') as any;

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Plan een Demo - Glimps AI | Zie hoe we jouw business transformeren"
        description="Plan een persoonlijke demo van 30 minuten en ontdek hoe Glimps AI jouw klantenservice automatiseert en conversies verhoogt. Gratis en vrijblijvend."
        path="/demo"
      />
      <StructuredData type="organization" />
      <StructuredData 
        type="service" 
        data={{
          name: "Glimps AI Demo",
          description: "Persoonlijke demo van 30 minuten om te zien hoe Glimps AI jouw e-commerce business transformeert"
        }} 
      />
      <StructuredData 
        type="breadcrumb" 
        data={[
          { name: "Home", url: "/" },
          { name: "Demo", url: "/demo" }
        ]} 
      />
      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 font-inter text-4xl font-normal leading-tight md:text-6xl">
            {t('demo.title').split('\n').map((line, i) => (
              <span key={i}>
                {i === 0 ? line : <span className="text-primary">{line}</span>}
                {i < t('demo.title').split('\n').length - 1 && <br />}
              </span>
            ))}
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            {t('demo.subtitle')}
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
                <h2 className="mb-8 text-3xl font-bold">{t('demo.whatToExpect')}</h2>
                <div className="space-y-6">
                  {(t('demo.expectItems') as any).map((item: {title: string, description: string}, index: number) => {
                    const icons = [Calendar, Video, TrendingUp, Users];
                    const Icon = icons[index];
                    return (
                      <div key={index} className="flex gap-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="mb-2 font-semibold">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Why Choose Glimps */}
              <Card className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white">
                <h3 className="mb-6 text-xl font-bold">{t('demo.whyChoose')}</h3>
                <div className="space-y-4">
                  {(t('demo.benefits') as any).map((benefit: string, index: number) => {
                    const icons = [TrendingUp, MessageSquare, Shield, Zap];
                    const Icon = icons[index];
                    return (
                      <div key={index} className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <span className="font-medium">{benefit}</span>
                      </div>
                    );
                  })}
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
                    <h3 className="text-xl font-bold">{t('demo.formTitle')}</h3>
                    <p className="text-sm text-muted-foreground">{t('demo.formSubtitle')}</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">
                        {t('demo.firstName')} <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="firstName"
                        placeholder={language === 'fr' ? 'Jean' : 'Jan'}
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
                        {t('demo.lastName')} <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="lastName"
                        placeholder={language === 'fr' ? 'Dupont' : 'Jansen'}
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
                      {t('demo.email')} <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={language === 'fr' ? 'jean@entreprise.be' : 'jan@bedrijf.be'}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">{t('demo.phone')}</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+32 123 45 67 89"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">
                      {t('demo.company')} <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="company"
                      placeholder={language === 'fr' ? 'Votre Boutique S.A.' : 'Jouw Webshop B.V.'}
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className={errors.company ? "border-destructive" : ""}
                    />
                    {errors.company && (
                      <p className="text-sm text-destructive">{errors.company}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website">{t('demo.website')}</Label>
                    <Input
                      id="website"
                      type="url"
                      placeholder={language === 'fr' ? 'https://votreboutique.be' : 'https://jouwwebshop.be'}
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="employees">
                      {t('demo.employees')} <span className="text-destructive">*</span>
                    </Label>
                    <Select
                      value={formData.employees}
                      onValueChange={(value) => setFormData({ ...formData, employees: value })}
                    >
                      <SelectTrigger className={errors.employees ? "border-destructive" : ""}>
                        <SelectValue placeholder={language === 'fr' ? 'Sélectionner...' : 'Selecteer...'} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-5">{(t('demo.employeeOptions') as any)['1-5']}</SelectItem>
                        <SelectItem value="6-10">{(t('demo.employeeOptions') as any)['6-10']}</SelectItem>
                        <SelectItem value="11-50">{(t('demo.employeeOptions') as any)['11-50']}</SelectItem>
                        <SelectItem value="51-200">{(t('demo.employeeOptions') as any)['51-200']}</SelectItem>
                        <SelectItem value="200+">{(t('demo.employeeOptions') as any)['200+']}</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.employees && (
                      <p className="text-sm text-destructive">{errors.employees}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t('demo.message')}</Label>
                    <Textarea
                      id="message"
                      placeholder={language === 'fr' ? 'Quels sont vos défis avec le service client ?' : 'Waar loop je tegenaan met klantenservice? Wat zijn je grootste uitdagingen?'}
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
                    {isSubmitting ? t('demo.submitting') : t('demo.submit')}
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    {t('demo.privacyText')}{" "}
                    <a href="#" className="text-primary hover:underline">
                      {t('demo.privacyLink')}
                    </a>
                    . {t('demo.privacyNote')}
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
            <h2 className="mb-12 text-center text-3xl font-bold">{t('demo.faqTitle')}</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="p-6">
                  <h3 className="mb-3 font-semibold">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
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
            {t('demo.finalCta').split('\n').map((line, i) => (
              <span key={i}>
                {i === 0 ? line : <span className="text-primary">{line}</span>}
                {i < t('demo.finalCta').split('\n').length - 1 && <br />}
              </span>
            ))}
          </h2>
          <p className="mb-12 text-lg text-muted-foreground">
            {t('demo.finalSubtitle')}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <span className="font-medium">{t('demo.timeLabel')}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Video className="h-6 w-6 text-primary" />
              </div>
              <span className="font-medium">{t('demo.onlineLabel')}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <span className="font-medium">{t('demo.freeLabel')}</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Demo;
