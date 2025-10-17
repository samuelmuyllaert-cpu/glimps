import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')

// Resolve SSR bundle (.js or .mjs) robustly
const serverJs = toAbsolute('dist/server/entry-server.js')
const serverMjs = toAbsolute('dist/server/entry-server.mjs')
const serverEntryPath = fs.existsSync(serverJs)
  ? './dist/server/entry-server.js'
  : (fs.existsSync(serverMjs) ? './dist/server/entry-server.mjs' : null)

if (!serverEntryPath) {
  console.error('[prerender] SSR bundle not found. Did you run "npm run build:server"?')
  process.exit(1)
}

const { render } = await import(serverEntryPath)

const routesToPrerender = fs
  .readdirSync(toAbsolute('src/pages'))
  .filter((file) => /\.tsx$/.test(file))
  .map((file) => {
    const name = file.replace(/\.tsx$/, '').toLowerCase()
    return name === 'index' ? '/' : `/${name}`
  })

;(async () => {
  for (const url of routesToPrerender) {
    const appHtml = render(url)
    const html = template.replace('<!--app-html-->', appHtml)

    const filePath = `dist${url === '/' ? '/index' : url}.html`
    fs.writeFileSync(toAbsolute(filePath), html)
    console.log('pre-rendered:', filePath)
  }
})()
