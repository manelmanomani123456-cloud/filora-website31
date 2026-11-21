# FILORA

Digital catalog for FILORA, an Algerian brand of henna art and temporary tattoo stickers.
Arabic first (RTL). There is no cart or online payment: every order goes through WhatsApp.

## Public Pages

- `/` — Homepage: Hero, brand introduction, featured products, full catalog with search/filter/sort, Instagram gallery, contact section, footer.
- `/about` — About Us: brand story, mission, vision, design philosophy, Algerian & Amazigh heritage, WhatsApp CTA.

Product details open in a modal on the homepage (no `/product/[slug]` route).

## Stack

- Next.js (App Router) and TypeScript
- Tailwind CSS v4 (design tokens in `src/styles/tokens.css`)
- Lucide React icons
- Supabase for data, auth and storage (optional — site works without it using mock data)
- Fonts: Madani Arabic, 29LT Bukra Semi Wide, La Luxes Serif

## Setup

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev                  # http://localhost:3000
```

## Fonts

Add `.woff2` files to `public/fonts/brand/`:
- `madani-arabic-regular.woff2`, `madani-arabic-bold.woff2`
- `29lt-bukra-semi-wide-regular.woff2`, `-medium.woff2`, `-bold.woff2`
- `la-luxes-serif-regular.woff2`

Until then, fallback fonts are used.
