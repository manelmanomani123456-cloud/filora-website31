# FILORA

Digital catalog for FILORA, an Algerian brand of henna art and temporary tattoo stickers.
Arabic first (RTL). There is no cart or online payment: every order goes through WhatsApp.

## Stack

- Next.js (App Router) and TypeScript
- Tailwind CSS v4 (design tokens in `src/styles/tokens.css`)
- Lucide React icons and Framer Motion
- Supabase (`@supabase/supabase-js`, `@supabase/ssr`) for data, auth and storage
- Fonts: Madani Arabic (Arabic headings), 29LT Bukra Semi Wide (Arabic body), La Luxes Serif (English headings). See Fonts below.

## Requirements

Node.js 20.9 or newer and npm.

## Setup

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev                  # http://localhost:3000
```

The site starts without Supabase credentials. They are only required once data access is added.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build (includes the TypeScript check) |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |
| `npx tsc --noEmit` | TypeScript check only |

## Structure

```
src/
  app/          Routes, root layout, global styles
  components/   layout, ui, home, catalog, products, admin
  config/       site.ts (name, tagline, WhatsApp number, links)
  hooks/        Custom React hooks
  lib/          utils, whatsapp helpers, supabase/ (browser and server clients)
  styles/       fonts.css, tokens.css
  types/        Domain types (Category, Product)
public/         images, icons, fonts
```

## Notes

- Brand colors are Tailwind utilities: `rouge` (#712027), `peach` (#ffe9d1), `rose` (#fabdd6), `white`, plus derived `rouge-deep` and `ink`. Tokens live in `src/styles/tokens.css`.
- Type scale utilities: `text-display`, `text-h1`..`text-h4`, `text-body-lg`, `text-body`, `text-small`, `text-caption`. Font utilities: `font-heading`, `font-body`, `font-display`.
- Reusable components are in `src/components/ui` (Button, Input, Textarea, Select, Badge, SectionHeading, Container, Section, Motif, Ornament) and `src/components/products` (ProductCard).
- Layout components are in `src/components/layout`: Header (sticky, desktop nav, mobile menu with animation), Footer, WhatsAppFloat, Logo, Container, PageContainer, Section. The root layout wires them with a skip link and `<main id="main-content">`.
- Navigation links are defined once in `src/config/navigation.ts`. The WhatsApp number comes from `NEXT_PUBLIC_WHATSAPP_NUMBER` (see `src/config/site.ts`). Footer social icons appear only when `NEXT_PUBLIC_INSTAGRAM_URL` / `NEXT_PUBLIC_FACEBOOK_URL` are set.
- `Breadcrumb` (in `ui`) adds BreadcrumbList structured data. Pass the trail without the home link.
- Pages for `/catalog`, `/about`, `/contact` do not exist yet, so those nav links return 404 until their phases.
- Preview the system at `/design-system` (noindex, internal).
- Use logical utilities (`ms-*`, `pe-*`, `text-start`) instead of left/right so the layout stays correct in RTL.
- This Next.js version enables Cache Components. Read the guides in `node_modules/next/dist/docs/` before adding data fetching.
- Never commit `.env.local`. `SUPABASE_SERVICE_ROLE_KEY` must stay server-side.

## Fonts

The three brand fonts are licensed and not bundled. Add the `.woff2` files to `public/fonts/brand/` with these names:

| Font | Files |
| --- | --- |
| Madani Arabic | `madani-arabic-regular.woff2`, `madani-arabic-bold.woff2` |
| 29LT Bukra Semi Wide | `29lt-bukra-semi-wide-regular.woff2`, `-medium.woff2`, `-bold.woff2` |
| La Luxes Serif | `la-luxes-serif-regular.woff2` |

Until then the site falls back to self-hosted Cairo, Tajawal and Playfair Display (the browser logs 404s for the missing brand files, which is expected). Check that your licenses allow web embedding.
