import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8');
const { render } = await import('./dist/server/entry-server.js');

const routesToPrerender = [
  '/',
  '/features',
  '/demo',
  '/faq',
  '/roi',
  '/changelog',
  '/blog',
  '/about',
  '/career',
  '/login',
  '/ecom-agents',
  '/ecom-readiness',
  '/partners',
  '/how-we-work',
  '/consultancy',
  '/integraties',
  '/contact',
  '/blog/conversie-verhogen',
  '/blog/toekomst-ai-2025',
  '/blog/case-study-fashionhub',
  '/blog/personalisatie-conversies',
  '/blog/fouten-chatbots',
  '/blog/shopify-integratie',
  '/blog/amazon-rufus',
  '/blog/ai-chatbots-implementeren',
  '/blog/ai-chatbots-vs-klantenservice',
  '/blog/roi-ai-chatbots',
  '/blog/ai-chatbots-automatiseren',
  '/blog/toekomst-ai-ecommerce-2026',
  '/blog/chatbots-vs-live-chat',
  '/blog/personalisatie-ai-ecommerce',
  '/blog/conversational-commerce-trends',
  '/blog/chatbots-boosten-verkoop',
  '/blog/cart-abandonment-reduceren-chatbot',
  '/industries/fashion-design',
  '/industries/beauty-cosmetica',
  '/industries/electronics',
  '/industries/meubels-interieur',
  '/industries/sportkleding-fitness',
  '/industries/tuin-buitenleven',
  '/legal',
  '/prosportlights',
  '/lensonline',
  '/lotana',
  '/colpaert-online',
  '/chatbot-agency-vlaanderen-ecommerce',
  '/ai-agency-belgie-chatbots',
  '/ai-chatbot-bureau-belgie-ecommerce',
  '/chatbot-bouw-bedrijf-vlaanderen-ecommerce',
  '/fr',
  '/fr/fonctionnalites',
  '/fr/demo',
  '/fr/faq',
  '/fr/roi',
  '/fr/changelog',
  '/fr/blog',
  '/fr/a-propos',
  '/fr/carrieres',
  '/fr/connexion',
  '/fr/agents-ecom',
  '/fr/pret-ecom',
  '/fr/partenaires',
  '/fr/comment-nous-travaillons',
  '/fr/consultance',
  '/fr/integrations',
  '/fr/contact',
  '/fr/blog/augmenter-conversion',
  '/fr/blog/avenir-ia-2025',
  '/fr/blog/etude-cas-fashionhub',
  '/fr/blog/personnalisation-conversions',
  '/fr/blog/erreurs-chatbots',
  '/fr/blog/integration-shopify',
  '/fr/blog/amazon-rufus',
  '/fr/blog/implementer-chatbots-ia',
  '/fr/blog/chatbots-ia-vs-service-client',
  '/fr/blog/roi-chatbots-ia',
  '/fr/blog/automatiser-chatbots-ia',
  '/fr/blog/avenir-ia-ecommerce-2026',
  '/fr/blog/chatbots-vs-chat-en-direct',
  '/fr/blog/personnalisation-ia-ecommerce',
  '/fr/blog/tendances-commerce-conversationnel',
  '/fr/blog/chatbots-booster-ventes',
  '/fr/blog/reduire-abandon-panier-chatbot',
  '/fr/industries/mode-design',
  '/fr/industries/beaute-cosmetique',
  '/fr/industries/electronique',
  '/fr/industries/meubles-interieur',
  '/fr/industries/vetements-sport-fitness',
  '/fr/industries/jardin-exterieur',
  '/fr/legal',
  '/fr/prosportlights',
  '/fr/lensonline',
  '/fr/lotana',
  '/fr/colpaert-online',
  '/en',
  '/en/features',
  '/en/demo',
  '/en/faq',
  '/en/roi',
  '/en/changelog',
  '/en/blog',
  '/en/about',
  '/en/career',
  '/en/login',
  '/en/ecom-agents',
  '/en/ecom-readiness',
  '/en/partners',
  '/en/how-we-work',
  '/en/consultancy',
  '/en/integrations',
  '/en/contact',
  '/en/blog/increase-conversion',
  '/en/blog/future-ai-2025',
  '/en/blog/case-study-fashionhub',
  '/en/blog/personalization-conversions',
  '/en/blog/chatbot-mistakes',
  '/en/blog/shopify-integration',
  '/en/blog/amazon-rufus',
  '/en/blog/implement-ai-chatbots',
  '/en/blog/ai-chatbots-vs-customer-service',
  '/en/blog/roi-ai-chatbots',
  '/en/blog/automate-ai-chatbots',
  '/en/blog/future-ai-ecommerce-2026',
  '/en/blog/chatbots-vs-live-chat',
  '/en/blog/ai-personalization-ecommerce',
  '/en/blog/conversational-commerce-trends',
  '/en/blog/chatbots-boost-sales',
  '/en/blog/reduce-cart-abandonment-chatbot',
  '/en/industries/fashion-design',
  '/en/industries/beauty-cosmetics',
  '/en/industries/electronics',
  '/en/industries/furniture-interior',
  '/en/industries/sportswear-fitness',
  '/en/industries/garden-outdoor',
  '/en/legal',
  '/en/prosportlights',
  '/en/lensonline',
  '/en/lotana',
  '/en/colpaert-online',
  '/integrations/shopify',
  '/fr/integrations/shopify',
  '/en/integrations/shopify',
  '/integrations/woocommerce',
  '/fr/integrations/woocommerce',
  '/en/integrations/woocommerce',
  '/integrations/shopware',
  '/fr/integrations/shopware',
  '/en/integrations/shopware',
  '/integrations/magento',
  '/fr/integrations/magento',
  '/en/integrations/magento',
  '/integrations/odoo',
  '/fr/integrations/odoo',
  '/en/integrations/odoo',
  '/integrations/lightspeed',
  '/fr/integrations/lightspeed',
  '/en/integrations/lightspeed',
  '/integrations/prestashop',
  '/fr/integrations/prestashop',
  '/en/integrations/prestashop',
  '/integrations/wix',
  '/fr/integrations/wix',
  '/en/integrations/wix',
  '/integrations/wordpress',
  '/fr/integrations/wordpress',
  '/en/integrations/wordpress'
];

(async () => {
  let successCount = 0;
  let errorCount = 0;

  for (const url of routesToPrerender) {
    try {
      const { html: appHtml, helmetContext } = render(url);

      const { helmet } = helmetContext;

      let html = template
        .replace('<!--app-html-->', appHtml)
        .replace('<head>', `<head>${helmet ? helmet.title.toString() + helmet.meta.toString() + helmet.link.toString() + helmet.script.toString() : ''}`);

      const filePath = url === '/'
        ? 'dist/index.html'
        : `dist${url}.html`;

      const dir = path.dirname(toAbsolute(filePath));

      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      fs.writeFileSync(toAbsolute(filePath), html);
      console.log('Pre-rendered:', url);
      successCount++;
    } catch (error) {
      console.error(`Error pre-rendering ${url}:`, error.message);
      errorCount++;
    }
  }

  console.log(`\nPrerender complete: ${successCount} success, ${errorCount} errors`);

  if (errorCount > 0) {
    process.exit(1);
  }
})();
