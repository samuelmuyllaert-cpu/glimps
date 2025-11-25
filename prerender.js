import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

// Alle routes uit App.tsx - expliciet gedefinieerd voor betrouwbaarheid
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
  '/legal',
  // Blog routes
  '/blog/conversie-verhogen',
  '/blog/toekomst-ai-2025',
  '/blog/case-study-fashionhub',
  '/blog/personalisatie-conversies',
  '/blog/fouten-chatbots',
  '/blog/shopify-integratie',
  '/blog/amazon-rufus',
  // Industry routes
  '/industries/fashion-design',
  '/industries/beauty-cosmetica',
  '/industries/electronics',
  '/industries/meubels-interieur',
  '/industries/sportkleding-fitness',
  '/industries/tuin-buitenleven',
]

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')

;(async () => {
  const { render } = await import('./dist/server/entry-server.js')

  for (const routeUrl of routesToPrerender) {
    const appHtml = render(routeUrl)
    const html = template.replace(`<!--app-html-->`, appHtml)

    // Maak subdirectories aan voor nested routes
    const filePath = `dist${routeUrl === '/' ? '/index' : routeUrl}.html`
    const dir = path.dirname(toAbsolute(filePath))
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }

    fs.writeFileSync(toAbsolute(filePath), html)
    console.log('pre-rendered:', filePath)
  }
})()


