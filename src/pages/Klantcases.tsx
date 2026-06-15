import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CircleCheck as CheckCircle2, Download } from "lucide-react";

const Klantcases = () => {
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
            Download direct onze vier uitgebreide klantcases — met concrete resultaten van Belgische webshops.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="container mx-auto px-6 pb-24">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-6">
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

            <div className="flex flex-col items-center gap-4 pt-2">
              <Button asChild size="lg" className="w-full sm:w-auto px-10">
                <a href="/klantcases_glimps_pdf.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download de klantcases (PDF)
                </a>
              </Button>
              <p className="text-sm text-muted-foreground">Gratis en vrijblijvend.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Klantcases;
