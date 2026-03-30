import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
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
import ToekomstAI2026 from "./pages/blog/ToekomstAI2026";
import ChatbotsVsLiveChat from "./pages/blog/ChatbotsVsLiveChat";
import PersonalisatieAI from "./pages/blog/PersonalisatieAI";
import ConversationalCommerce from "./pages/blog/ConversationalCommerce";
import ChatbotsBoostenVerkoop from "./pages/blog/ChatbotsBoostenVerkoop";
import CartAbandonmentReduceren from "./pages/blog/CartAbandonmentReduceren";
import AIAgentsKlantenservice2026 from "./pages/blog/AIAgentsKlantenservice2026";
import VoiceCommerceTrends2026 from "./pages/blog/VoiceCommerceTrends2026";
import AIVoorraadbeheer2026 from "./pages/blog/AIVoorraadbeheer2026";
import DuurzaamEcommerceAI from "./pages/blog/DuurzaamEcommerceAI";
import ARVROnlineShopping2026 from "./pages/blog/ARVROnlineShopping2026";
import AIFraudeDetectie2026 from "./pages/blog/AIFraudeDetectie2026";
import HyperPersonalisatie2026 from "./pages/blog/HyperPersonalisatie2026";
import AIContentGeneratie2026 from "./pages/blog/AIContentGeneratie2026";
import PredictiveAnalytics2026 from "./pages/blog/PredictiveAnalytics2026";
import AutonomeShoppingAssistenten2026 from "./pages/blog/AutonomeShoppingAssistenten2026";
import ChatbotMeerkanaalsStrategie from "./pages/blog/ChatbotMeerkanaalsStrategie";
import ChatbotProductAanbevelingen from "./pages/blog/ChatbotProductAanbevelingen";
import ChatbotKlantensegmentatie from "./pages/blog/ChatbotKlantensegmentatie";
import ChatbotNaVerkoopService from "./pages/blog/ChatbotNaVerkoopService";
import ChatbotTaalModellen from "./pages/blog/ChatbotTaalModellen";
import ChatbotABTesting from "./pages/blog/ChatbotA-BTesting";
import ChatbotMultilingual from "./pages/blog/ChatbotMultilingual";
import ChatbotPrivacyGDPR from "./pages/blog/ChatbotPrivacyGDPR";
import ChatbotVoiceIntegration from "./pages/blog/ChatbotVoiceIntegration";
import ChatbotKosten from "./pages/blog/ChatbotKosten";
import ChatbotConversieMeer from "./pages/blog/ChatbotConversieMeer";
import FashionDesign from "./pages/industries/FashionDesign";
import BeautyCosmetica from "./pages/industries/BeautyCosmetica";
import Electronics from "./pages/industries/Electronics";
import MeubelsInterieur from "./pages/industries/MeubelsInterieur";
import SportkledingFitness from "./pages/industries/SportkledingFitness";
import TuinBuitenleven from "./pages/industries/TuinBuitenleven";
import GezondheidApotheken from "./pages/industries/GezondheidApotheken";
import BabyKind from "./pages/industries/BabyKind";
import Huisdieren from "./pages/industries/Huisdieren";
import VoedingDranken from "./pages/industries/VoedingDranken";
import DIYBouwmaterialen from "./pages/industries/DIYBouwmaterialen";
import AutoFietsen from "./pages/industries/AutoFietsen";
import SieradenLuxe from "./pages/industries/SieradenLuxe";
import CadeauGepersonaliseerd from "./pages/industries/CadeauGepersonaliseerd";
import BoekenEducatie from "./pages/industries/BoekenEducatie";
import GamingEntertainment from "./pages/industries/GamingEntertainment";
import B2BGroothandel from "./pages/industries/B2BGroothandel";
import DuurzameProducten from "./pages/industries/DuurzameProducten";
import MedischeHulpmiddelen from "./pages/industries/MedischeHulpmiddelen";
import Erotiek from "./pages/industries/Erotiek";
import HobbyCreatief from "./pages/industries/HobbyCreatief";
import Verlichting from "./pages/industries/Verlichting";
import Legal from "./pages/Legal";
import ProSportLights from "./pages/ProSportLights";
import LensOnline from "./pages/LensOnline";
import Lotana from "./pages/Lotana";
import ColpaertOnline from "./pages/ColpaertOnline";
import VerhuurMeerschaert from "./pages/VerhuurMeerschaert";
import AbsoluteTeamsport from "./pages/AbsoluteTeamsport";
import HetCosmeticahuis from "./pages/HetCosmeticahuis";
import ChatbotAgencyVlaanderen from "./pages/ChatbotAgencyVlaanderen";
import AIAgencyBelgieChatbots from "./pages/AIAgencyBelgieChatbots";
import AIChatbotBureauBelgie from "./pages/AIChatbotBureauBelgie";
import ChatbotBouwBedrijfVlaanderen from "./pages/ChatbotBouwBedrijfVlaanderen";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <LanguageProvider>
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
        <Route path="/blog/toekomst-ai-ecommerce-2026" element={<ToekomstAI2026 />} />
        <Route path="/blog/chatbots-vs-live-chat" element={<ChatbotsVsLiveChat />} />
        <Route path="/blog/personalisatie-ai-ecommerce" element={<PersonalisatieAI />} />
        <Route path="/blog/conversational-commerce-trends" element={<ConversationalCommerce />} />
        <Route path="/blog/chatbots-boosten-verkoop" element={<ChatbotsBoostenVerkoop />} />
        <Route path="/blog/cart-abandonment-reduceren-chatbot" element={<CartAbandonmentReduceren />} />
        <Route path="/blog/ai-agents-klantenservice-2026" element={<AIAgentsKlantenservice2026 />} />
        <Route path="/blog/voice-commerce-trends-2026" element={<VoiceCommerceTrends2026 />} />
        <Route path="/blog/ai-voorraadbeheer-2026" element={<AIVoorraadbeheer2026 />} />
        <Route path="/blog/duurzaam-ecommerce-ai" element={<DuurzaamEcommerceAI />} />
        <Route path="/blog/ar-vr-online-shopping-2026" element={<ARVROnlineShopping2026 />} />
        <Route path="/blog/ai-fraude-detectie-2026" element={<AIFraudeDetectie2026 />} />
        <Route path="/blog/hyper-personalisatie-2026" element={<HyperPersonalisatie2026 />} />
        <Route path="/blog/ai-content-generatie-2026" element={<AIContentGeneratie2026 />} />
        <Route path="/blog/predictive-analytics-2026" element={<PredictiveAnalytics2026 />} />
        <Route path="/blog/autonome-shopping-assistenten-2026" element={<AutonomeShoppingAssistenten2026 />} />
        <Route path="/blog/chatbot-meerkanaals-strategie" element={<ChatbotMeerkanaalsStrategie />} />
        <Route path="/blog/chatbot-product-aanbevelingen" element={<ChatbotProductAanbevelingen />} />
        <Route path="/blog/chatbot-klantensegmentatie" element={<ChatbotKlantensegmentatie />} />
        <Route path="/blog/chatbot-na-verkoop-service" element={<ChatbotNaVerkoopService />} />
        <Route path="/blog/chatbot-taalmodellen-vergelijking" element={<ChatbotTaalModellen />} />
        <Route path="/blog/chatbot-ab-testing" element={<ChatbotABTesting />} />
        <Route path="/blog/meertalige-chatbot" element={<ChatbotMultilingual />} />
        <Route path="/blog/chatbot-privacy-gdpr" element={<ChatbotPrivacyGDPR />} />
        <Route path="/blog/chatbot-voice-integration" element={<ChatbotVoiceIntegration />} />
        <Route path="/blog/chatbot-kosten-prijzen" element={<ChatbotKosten />} />
        <Route path="/blog/chatbot-conversie-meer" element={<ChatbotConversieMeer />} />
        <Route path="/industries/fashion-design" element={<FashionDesign />} />
        <Route path="/industries/beauty-cosmetica" element={<BeautyCosmetica />} />
        <Route path="/industries/electronics" element={<Electronics />} />
        <Route path="/industries/meubels-interieur" element={<MeubelsInterieur />} />
        <Route path="/industries/sportkleding-fitness" element={<SportkledingFitness />} />
        <Route path="/industries/tuin-buitenleven" element={<TuinBuitenleven />} />
        <Route path="/industries/gezondheid-apotheken" element={<GezondheidApotheken />} />
        <Route path="/industries/baby-kind" element={<BabyKind />} />
        <Route path="/industries/huisdieren" element={<Huisdieren />} />
        <Route path="/industries/voeding-dranken" element={<VoedingDranken />} />
        <Route path="/industries/diy-bouwmaterialen" element={<DIYBouwmaterialen />} />
        <Route path="/industries/auto-fietsen" element={<AutoFietsen />} />
        <Route path="/industries/sieraden-luxe" element={<SieradenLuxe />} />
        <Route path="/industries/cadeau-gepersonaliseerd" element={<CadeauGepersonaliseerd />} />
        <Route path="/industries/boeken-educatie" element={<BoekenEducatie />} />
        <Route path="/industries/gaming-entertainment" element={<GamingEntertainment />} />
        <Route path="/industries/b2b-groothandel" element={<B2BGroothandel />} />
        <Route path="/industries/duurzame-producten" element={<DuurzameProducten />} />
        <Route path="/industries/medische-hulpmiddelen" element={<MedischeHulpmiddelen />} />
        <Route path="/industries/erotiek" element={<Erotiek />} />
        <Route path="/industries/hobby-creatief" element={<HobbyCreatief />} />
        <Route path="/industries/verlichting" element={<Verlichting />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/prosportlights" element={<ProSportLights />} />
        <Route path="/lensonline" element={<LensOnline />} />
        <Route path="/lotana" element={<Lotana />} />
        <Route path="/colpaert-online" element={<ColpaertOnline />} />
        <Route path="/verhuur-meerschaert" element={<VerhuurMeerschaert />} />
        <Route path="/absolute-teamsport" element={<AbsoluteTeamsport />} />
        <Route path="/het-cosmeticahuis" element={<HetCosmeticahuis />} />
        <Route path="/chatbot-agency-vlaanderen-ecommerce" element={<ChatbotAgencyVlaanderen />} />
        <Route path="/ai-agency-belgie-chatbots" element={<AIAgencyBelgieChatbots />} />
        <Route path="/ai-chatbot-bureau-belgie-ecommerce" element={<AIChatbotBureauBelgie />} />
        <Route path="/chatbot-bouw-bedrijf-vlaanderen-ecommerce" element={<ChatbotBouwBedrijfVlaanderen />} />
        {/* French Routes */}
        <Route path="/fr" element={<Index />} />
        <Route path="/fr/fonctionnalites" element={<Features />} />
        <Route path="/fr/demo" element={<Demo />} />
        <Route path="/fr/faq" element={<FAQ />} />
        <Route path="/fr/roi" element={<ROI />} />
        <Route path="/fr/changelog" element={<Changelog />} />
        <Route path="/fr/blog" element={<Blog />} />
        <Route path="/fr/a-propos" element={<About />} />
        <Route path="/fr/carrieres" element={<Career />} />
        <Route path="/fr/connexion" element={<Login />} />
        <Route path="/fr/agents-ecom" element={<EcomAgents />} />
        <Route path="/fr/pret-ecom" element={<EcomReadiness />} />
        <Route path="/fr/partenaires" element={<Partners />} />
        <Route path="/fr/comment-nous-travaillons" element={<HowWeWork />} />
        <Route path="/fr/consultance" element={<Consultancy />} />
        <Route path="/fr/integrations" element={<Integraties />} />
        <Route path="/fr/contact" element={<Contact />} />
        <Route path="/fr/blog/augmenter-conversion" element={<ConversieVerhogen />} />
        <Route path="/fr/blog/avenir-ia-2025" element={<ToekomstAI2025 />} />
        <Route path="/fr/blog/etude-cas-fashionhub" element={<CaseStudyFashionHub />} />
        <Route path="/fr/blog/personnalisation-conversions" element={<PersonalisatieConversies />} />
        <Route path="/fr/blog/erreurs-chatbots" element={<FoutenChatbots />} />
        <Route path="/fr/blog/integration-shopify" element={<ShopifyIntegratie />} />
        <Route path="/fr/blog/amazon-rufus" element={<AmazonRufus />} />
        <Route path="/fr/blog/implementer-chatbots-ia" element={<AIChatbotsImplementeren />} />
        <Route path="/fr/blog/chatbots-ia-vs-service-client" element={<AIChatbotsVsKlantenservice />} />
        <Route path="/fr/blog/roi-chatbots-ia" element={<ROIAIChatbots />} />
        <Route path="/fr/blog/automatiser-chatbots-ia" element={<AIChatbotsAutomatiseren />} />
        <Route path="/fr/blog/avenir-ia-ecommerce-2026" element={<ToekomstAI2026 />} />
        <Route path="/fr/blog/chatbots-vs-chat-en-direct" element={<ChatbotsVsLiveChat />} />
        <Route path="/fr/blog/personnalisation-ia-ecommerce" element={<PersonalisatieAI />} />
        <Route path="/fr/blog/tendances-commerce-conversationnel" element={<ConversationalCommerce />} />
        <Route path="/fr/blog/chatbots-booster-ventes" element={<ChatbotsBoostenVerkoop />} />
        <Route path="/fr/blog/reduire-abandon-panier-chatbot" element={<CartAbandonmentReduceren />} />
        <Route path="/fr/industries/mode-design" element={<FashionDesign />} />
        <Route path="/fr/industries/beaute-cosmetique" element={<BeautyCosmetica />} />
        <Route path="/fr/industries/electronique" element={<Electronics />} />
        <Route path="/fr/industries/meubles-interieur" element={<MeubelsInterieur />} />
        <Route path="/fr/industries/vetements-sport-fitness" element={<SportkledingFitness />} />
        <Route path="/fr/industries/jardin-exterieur" element={<TuinBuitenleven />} />
        <Route path="/fr/secteurs/sante-pharmacies" element={<GezondheidApotheken />} />
        <Route path="/fr/secteurs/bebe-enfant" element={<BabyKind />} />
        <Route path="/fr/secteurs/animaux" element={<Huisdieren />} />
        <Route path="/fr/secteurs/alimentation-boissons" element={<VoedingDranken />} />
        <Route path="/fr/secteurs/bricolage-materiaux-construction" element={<DIYBouwmaterialen />} />
        <Route path="/fr/secteurs/auto-velo" element={<AutoFietsen />} />
        <Route path="/fr/secteurs/bijoux-luxe" element={<SieradenLuxe />} />
        <Route path="/fr/secteurs/cadeaux-personnalises" element={<CadeauGepersonaliseerd />} />
        <Route path="/fr/secteurs/livres-education" element={<BoekenEducatie />} />
        <Route path="/fr/secteurs/gaming-divertissement" element={<GamingEntertainment />} />
        <Route path="/fr/secteurs/b2b-grossiste" element={<B2BGroothandel />} />
        <Route path="/fr/secteurs/produits-durables" element={<DuurzameProducten />} />
        <Route path="/fr/secteurs/dispositifs-medicaux" element={<MedischeHulpmiddelen />} />
        <Route path="/fr/secteurs/erotisme" element={<Erotiek />} />
        <Route path="/fr/secteurs/loisirs-creatifs" element={<HobbyCreatief />} />
        <Route path="/fr/secteurs/eclairage" element={<Verlichting />} />
        <Route path="/fr/legal" element={<Legal />} />
        <Route path="/fr/prosportlights" element={<ProSportLights />} />
        <Route path="/fr/lensonline" element={<LensOnline />} />
        <Route path="/fr/lotana" element={<Lotana />} />
        <Route path="/fr/colpaert-online" element={<ColpaertOnline />} />
        <Route path="/fr/verhuur-meerschaert" element={<VerhuurMeerschaert />} />
        <Route path="/fr/absolute-teamsport" element={<AbsoluteTeamsport />} />
        <Route path="/fr/het-cosmeticahuis" element={<HetCosmeticahuis />} />
        {/* English Routes */}
        <Route path="/en" element={<Index />} />
        <Route path="/en/features" element={<Features />} />
        <Route path="/en/demo" element={<Demo />} />
        <Route path="/en/faq" element={<FAQ />} />
        <Route path="/en/roi" element={<ROI />} />
        <Route path="/en/changelog" element={<Changelog />} />
        <Route path="/en/blog" element={<Blog />} />
        <Route path="/en/about" element={<About />} />
        <Route path="/en/career" element={<Career />} />
        <Route path="/en/login" element={<Login />} />
        <Route path="/en/ecom-agents" element={<EcomAgents />} />
        <Route path="/en/ecom-readiness" element={<EcomReadiness />} />
        <Route path="/en/partners" element={<Partners />} />
        <Route path="/en/how-we-work" element={<HowWeWork />} />
        <Route path="/en/consultancy" element={<Consultancy />} />
        <Route path="/en/integrations" element={<Integraties />} />
        <Route path="/en/contact" element={<Contact />} />
        <Route path="/en/blog/increase-conversion" element={<ConversieVerhogen />} />
        <Route path="/en/blog/future-ai-2025" element={<ToekomstAI2025 />} />
        <Route path="/en/blog/case-study-fashionhub" element={<CaseStudyFashionHub />} />
        <Route path="/en/blog/personalization-conversions" element={<PersonalisatieConversies />} />
        <Route path="/en/blog/chatbot-mistakes" element={<FoutenChatbots />} />
        <Route path="/en/blog/shopify-integration" element={<ShopifyIntegratie />} />
        <Route path="/en/blog/amazon-rufus" element={<AmazonRufus />} />
        <Route path="/en/blog/implement-ai-chatbots" element={<AIChatbotsImplementeren />} />
        <Route path="/en/blog/ai-chatbots-vs-customer-service" element={<AIChatbotsVsKlantenservice />} />
        <Route path="/en/blog/roi-ai-chatbots" element={<ROIAIChatbots />} />
        <Route path="/en/blog/automate-ai-chatbots" element={<AIChatbotsAutomatiseren />} />
        <Route path="/en/blog/future-ai-ecommerce-2026" element={<ToekomstAI2026 />} />
        <Route path="/en/blog/chatbots-vs-live-chat" element={<ChatbotsVsLiveChat />} />
        <Route path="/en/blog/ai-personalization-ecommerce" element={<PersonalisatieAI />} />
        <Route path="/en/blog/conversational-commerce-trends" element={<ConversationalCommerce />} />
        <Route path="/en/blog/chatbots-boost-sales" element={<ChatbotsBoostenVerkoop />} />
        <Route path="/en/blog/reduce-cart-abandonment-chatbot" element={<CartAbandonmentReduceren />} />
        <Route path="/en/industries/fashion-design" element={<FashionDesign />} />
        <Route path="/en/industries/beauty-cosmetics" element={<BeautyCosmetica />} />
        <Route path="/en/industries/electronics" element={<Electronics />} />
        <Route path="/en/industries/furniture-interior" element={<MeubelsInterieur />} />
        <Route path="/en/industries/sportswear-fitness" element={<SportkledingFitness />} />
        <Route path="/en/industries/garden-outdoor" element={<TuinBuitenleven />} />
        <Route path="/en/industries/health-pharmacies" element={<GezondheidApotheken />} />
        <Route path="/en/industries/baby-kids" element={<BabyKind />} />
        <Route path="/en/industries/pets" element={<Huisdieren />} />
        <Route path="/en/industries/food-beverages" element={<VoedingDranken />} />
        <Route path="/en/industries/diy-building-materials" element={<DIYBouwmaterialen />} />
        <Route path="/en/industries/automotive-bikes" element={<AutoFietsen />} />
        <Route path="/en/industries/jewelry-luxury" element={<SieradenLuxe />} />
        <Route path="/en/industries/gifts-personalized" element={<CadeauGepersonaliseerd />} />
        <Route path="/en/industries/books-education" element={<BoekenEducatie />} />
        <Route path="/en/industries/gaming-entertainment" element={<GamingEntertainment />} />
        <Route path="/en/industries/b2b-wholesale" element={<B2BGroothandel />} />
        <Route path="/en/industries/sustainable-products" element={<DuurzameProducten />} />
        <Route path="/en/industries/medical-devices" element={<MedischeHulpmiddelen />} />
        <Route path="/en/industries/adult-wellness" element={<Erotiek />} />
        <Route path="/en/industries/hobby-creative" element={<HobbyCreatief />} />
        <Route path="/en/industries/lighting" element={<Verlichting />} />
        <Route path="/en/legal" element={<Legal />} />
        <Route path="/en/prosportlights" element={<ProSportLights />} />
        <Route path="/en/lensonline" element={<LensOnline />} />
        <Route path="/en/lotana" element={<Lotana />} />
        <Route path="/en/colpaert-online" element={<ColpaertOnline />} />
        <Route path="/en/verhuur-meerschaert" element={<VerhuurMeerschaert />} />
        <Route path="/en/absolute-teamsport" element={<AbsoluteTeamsport />} />
        <Route path="/en/het-cosmeticahuis" element={<HetCosmeticahuis />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
        </Routes>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
