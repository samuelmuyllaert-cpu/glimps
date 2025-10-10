import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
          <Route path="/hoe-we-werken" element={<HowWeWork />} />
          <Route path="/consultancy" element={<Consultancy />} />
          <Route path="/integraties" element={<Integraties />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
