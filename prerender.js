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
  '/industries/fashion-design',
  '/industries/beauty-cosmetica',
  '/industries/electronics',
  '/industries/meubels-interieur',
  '/industries/sportkleding-fitness',
  '/industries/tuin-buitenleven',
  '/legal'
];

(async () => {
  for (const url of routesToPrerender) {
    try {
      const { html: appHtml, helmetContext } = render(url);

      const { helmet } = helmetContext;

      let html = template
        .replace('<!--app-html-->', appHtml)
        .replace('<head>', `<head>${helmet ? helmet.title.toString() + helmet.meta.toString() + helmet.link.toString() : ''}`);

      const filePath = url === '/'
        ? 'dist/index.html'
        : `dist${url}.html`;

      const dir = path.dirname(toAbsolute(filePath));

      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      fs.writeFileSync(toAbsolute(filePath), html);
      console.log('Pre-rendered:', url);
    } catch (error) {
      console.error(`Error pre-rendering ${url}:`, error);
    }
  }
})();
