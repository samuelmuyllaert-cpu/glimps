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
  '/3dprintingwinkel'
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
