import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Features from "./pages/Features";
import Demo from "./pages/Demo";
import FAQ from "./pages/FAQ";
import ROI from "./pages/ROI";
import Changelog from "./pages/Changelog";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Career from "./pages/Career";
import Login from "./pages/Login";
import EcomAgents from "./pages/EcomAgents";
import EcomReadiness from "./pages/EcomReadiness";
import Partners from "./pages/Partners";
import HowWeWork from "./pages/HowWeWork";
import Consultancy from "./pages/Consultancy";
import Integraties from "./pages/Integraties";
import Contact from "./pages/Contact";
import ConversieVerhogen from "./pages/blog/ConversieVerhogen";
import ToekomstAI2025 from "./pages/blog/ToekomstAI2025";
import CaseStudyFashionHub from "./pages/blog/CaseStudyFashionHub";
import PersonalisatieConversies from "./pages/blog/PersonalisatieConversies";
import FoutenChatbots from "./pages/blog/FoutenChatbots";
import ShopifyIntegratie from "./pages/blog/ShopifyIntegratie";
import AmazonRufus from "./pages/blog/AmazonRufus";
import AIChatbotsImplementeren from "./pages/blog/AIChatbotsImplementeren";
import AIChatbotsVsKlantenservice from "./pages/blog/AIChatbotsVsKlantenservice";
import ROIAIChatbots from "./pages/blog/ROIAIChatbots";
import AIChatbotsAutomatiseren from "./pages/blog/AIChatbotsAutomatiseren";
import FashionDesign from "./pages/industries/FashionDesign";
import BeautyCosmetica from "./pages/industries/BeautyCosmetica";
import Electronics from "./pages/industries/Electronics";
import MeubelsInterieur from "./pages/industries/MeubelsInterieur";
import SportkledingFitness from "./pages/industries/SportkledingFitness";
import TuinBuitenleven from "./pages/industries/TuinBuitenleven";
import Legal from "./pages/Legal";
import ProSportLights from "./pages/ProSportLights";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/features" element={<Features />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/roi" element={<ROI />} />
        <Route path="/changelog" element={<Changelog />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ecom-agents" element={<EcomAgents />} />
        <Route path="/ecom-readiness" element={<EcomReadiness />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/how-we-work" element={<HowWeWork />} />
        <Route path="/consultancy" element={<Consultancy />} />
        <Route path="/integraties" element={<Integraties />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/conversie-verhogen" element={<ConversieVerhogen />} />
        <Route path="/blog/toekomst-ai-2025" element={<ToekomstAI2025 />} />
        <Route path="/blog/case-study-fashionhub" element={<CaseStudyFashionHub />} />
        <Route path="/blog/personalisatie-conversies" element={<PersonalisatieConversies />} />
        <Route path="/blog/fouten-chatbots" element={<FoutenChatbots />} />
        <Route path="/blog/shopify-integratie" element={<ShopifyIntegratie />} />
        <Route path="/blog/amazon-rufus" element={<AmazonRufus />} />
        <Route path="/blog/ai-chatbots-implementeren" element={<AIChatbotsImplementeren />} />
        <Route path="/blog/ai-chatbots-vs-klantenservice" element={<AIChatbotsVsKlantenservice />} />
        <Route path="/blog/roi-ai-chatbots" element={<ROIAIChatbots />} />
        <Route path="/blog/ai-chatbots-automatiseren" element={<AIChatbotsAutomatiseren />} />
        <Route path="/industries/fashion-design" element={<FashionDesign />} />
        <Route path="/industries/beauty-cosmetica" element={<BeautyCosmetica />} />
        <Route path="/industries/electronics" element={<Electronics />} />
        <Route path="/industries/meubels-interieur" element={<MeubelsInterieur />} />
        <Route path="/industries/sportkleding-fitness" element={<SportkledingFitness />} />
        <Route path="/industries/tuin-buitenleven" element={<TuinBuitenleven />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/prosportlights" element={<ProSportLights />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
