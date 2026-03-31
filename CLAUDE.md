# CLAUDE.md - AI Assistant Guidelines for Glimps

## Project Overview

**Glimps** is a Belgian AI chatbot SaaS platform for e-commerce, built with React, TypeScript, and Vite. The website showcases AI-powered chatbot solutions that help online stores increase conversions through intelligent product recommendations and 24/7 customer service automation.

**Live Site:** https://www.glimps.be
**Target Market:** Belgian e-commerce businesses (Dutch-language primary)
**Platform:** Managed via [Lovable](https://lovable.dev/projects/80b5d198-dcc4-431a-b537-193da9680aab)

---

## Quick Reference

### Essential Commands

```bash
npm run dev          # Start dev server (port 8080)
npm run build        # Full production build (client + SSR + prerender)
npm run lint         # Run ESLint
npm run preview      # Preview production build
```

### Path Alias

All imports use `@/` as alias for `./src/`:
```typescript
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import SEO from "@/components/SEO";
```

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | React 18.3 + TypeScript |
| Build Tool | Vite 5.4 with SWC |
| Styling | Tailwind CSS 3.4 + CSS Variables |
| UI Components | shadcn/ui + Radix UI primitives |
| Routing | React Router DOM 6 |
| Forms | React Hook Form + Zod validation |
| State | TanStack Query (React Query) |
| SEO | react-helmet-async + SSR/SSG |
| Serverless | Supabase Edge Functions (Deno) |

---

## Project Structure

```
glimps/
├── src/
│   ├── components/           # Reusable components
│   │   ├── ui/              # shadcn/ui components (45+)
│   │   ├── Navigation.tsx   # Main site navigation
│   │   ├── Footer.tsx       # Site footer
│   │   ├── SEO.tsx          # Meta tags & Open Graph
│   │   └── StructuredData.tsx # JSON-LD schemas
│   ├── pages/               # Route components
│   │   ├── Index.tsx        # Homepage
│   │   ├── blog/            # Blog articles (17+)
│   │   └── industries/      # Industry-specific pages (6)
│   ├── hooks/               # Custom React hooks
│   │   ├── use-toast.ts     # Toast notifications
│   │   └── use-mobile.tsx   # Responsive breakpoint hook
│   ├── lib/
│   │   └── utils.ts         # cn() utility for Tailwind
│   ├── assets/              # Images and media
│   ├── App.tsx              # Route definitions
│   ├── main.tsx             # Client entry point
│   ├── entry-server.tsx     # SSR entry point
│   └── index.css            # Global styles & CSS variables
├── supabase/
│   └── functions/           # Deno serverless functions
├── public/
│   ├── .htaccess            # Apache configuration
│   └── sitemap.xml          # SEO sitemap
├── prerender.js             # Static HTML generation script
├── vite.config.ts           # Build configuration
├── tailwind.config.ts       # Design system tokens
└── components.json          # shadcn/ui configuration
```

---

## Key Files

| File | Purpose |
|------|---------|
| `src/App.tsx` | All route definitions - add new routes here |
| `src/components/SEO.tsx` | Page meta tags - use on every page |
| `prerender.js` | Routes for static generation - sync with App.tsx |
| `src/index.css` | CSS variables for theming (colors, radius) |
| `tailwind.config.ts` | Tailwind customizations |

---

## Code Conventions

### Component Structure

```typescript
// PascalCase for components
const MyComponent = () => {
  const [state, setState] = useState<Type>(...);

  return (
    <>
      <SEO title="..." description="..." path="/route" />
      <Navigation />
      {/* Page content */}
      <Footer />
    </>
  );
};

export default MyComponent;
```

### File Naming

- **Components:** PascalCase (`Navigation.tsx`, `Features.tsx`)
- **Hooks:** kebab-case with `use-` prefix (`use-mobile.tsx`)
- **Utilities:** kebab-case (`utils.ts`)
- **Directories:** kebab-case (`components/ui/`)

### Styling Pattern

Use the `cn()` utility for conditional Tailwind classes:
```typescript
import { cn } from "@/lib/utils";

<div className={cn(
  "base-classes",
  condition && "conditional-classes",
  className
)} />
```

### Form Validation

Use Zod with React Hook Form:
```typescript
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email("Invalid email"),
  name: z.string().min(1, "Required"),
});

const form = useForm({
  resolver: zodResolver(schema),
});
```

---

## Adding New Pages

### 1. Create the Page Component

```typescript
// src/pages/NewPage.tsx
import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const NewPage = () => {
  return (
    <>
      <SEO
        title="Page Title | Glimps"
        description="Page description for SEO"
        path="/new-page"
      />
      <Navigation />
      <main className="min-h-screen">
        {/* Content */}
      </main>
      <Footer />
    </>
  );
};

export default NewPage;
```

### 2. Add Route in App.tsx

```typescript
import NewPage from "./pages/NewPage";

// In Routes:
<Route path="/new-page" element={<NewPage />} />
```

### 3. Add to Prerender (if static)

In `prerender.js`, add to `routesToPrerender`:
```javascript
'/new-page',
```

---

## SEO Requirements

Every page MUST include:

1. **SEO Component** with title, description, and path
2. **StructuredData** for JSON-LD (where applicable)
3. **Proper heading hierarchy** (single h1, semantic h2/h3)
4. **Alt text** on all images

```typescript
<SEO
  title="Page Title | Glimps"
  description="160 chars max description"
  path="/page-path"
  type="website"  // or "article" for blog
  keywords="ai, chatbot, ecommerce"
/>
```

---

## Build Process

The build runs in sequence:
1. `vite build` - Client bundle to `/dist`
2. `vite build --ssr` - Server bundle to `/dist/server`
3. `node prerender.js` - Generate 50+ static HTML files

**Pre-rendering generates HTML for all routes in `prerender.js`**, enabling fast initial loads and better SEO.

---

## Design System

### Colors (CSS Variables)

Defined in `src/index.css` using HSL:
```css
--primary: 262 83% 58%;      /* Purple brand color */
--secondary: 210 40% 96%;
--background: 0 0% 100%;
--foreground: 222 47% 11%;
```

### Breakpoints

- Mobile: `< 768px` (use `useIsMobile()` hook)
- Tablet: `md:` (768px+)
- Desktop: `lg:` (1024px+)
- Wide: `xl:` (1280px+)

### Container

Max-width 1400px, centered with 2rem padding:
```typescript
<div className="container mx-auto px-4">
```

---

## Serverless Functions

Located in `supabase/functions/`. Deploy via Supabase CLI.

### Environment Variables (Production)
- `RESEND_API_KEY` - Email service
- Make.com webhook URLs for automation

---

## Testing

No formal testing framework is configured. Validation relies on:
- TypeScript type checking
- ESLint static analysis
- Zod runtime validation for forms
- Manual QA

---

## Common Patterns

### Toast Notifications

```typescript
import { useToast } from "@/hooks/use-toast";

const { toast } = useToast();
toast({ title: "Success", description: "Action completed" });
```

### Responsive Hook

```typescript
import { useIsMobile } from "@/hooks/use-mobile";

const isMobile = useIsMobile(); // true if < 768px
```

### UI Components

Use shadcn/ui components from `@/components/ui/`:
```typescript
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
```

---

## Important Notes for AI Assistants

1. **Lovable Integration:** This project syncs with Lovable. Changes push automatically.

2. **TypeScript Config:** Uses relaxed settings (`strict: false`, `noImplicitAny: false`). Follow existing patterns.

3. **No Tests:** Don't add test files unless explicitly requested.

4. **Dutch Content:** Primary language is Dutch (nl-BE). Maintain consistency.

5. **SEO Critical:** Always include SEO component. Update `prerender.js` for new routes.

6. **shadcn/ui:** Add new components via `npx shadcn@latest add [component]`.

7. **Path Alias:** Always use `@/` imports, never relative paths like `../../`.

8. **Apache Hosting:** Production uses `.htaccess` for routing. Don't modify without understanding implications.

9. **Image Assets:** Place in `src/assets/`. Use meaningful names and always provide alt text.

10. **Avoid Over-Engineering:** Keep solutions simple. Don't add abstractions for single-use code.

---

## Route Reference

### Main Pages
- `/` - Homepage
- `/features` - Product features
- `/demo` - Demo request form
- `/faq` - Frequently asked questions
- `/roi` - ROI calculator
- `/about` - About us
- `/contact` - Contact form
- `/integraties` - Platform integrations

### Blog (`/blog/...`)
17+ articles on AI chatbots, e-commerce, case studies

### Industries (`/industries/...`)
- `/industries/fashion-design`
- `/industries/beauty-cosmetica`
- `/industries/electronics`
- `/industries/meubels-interieur`
- `/industries/sportkleding-fitness`
- `/industries/tuin-buitenleven`

### Other
- `/legal` - Legal/privacy
- `/career` - Job openings
- `/partners` - Partner program
