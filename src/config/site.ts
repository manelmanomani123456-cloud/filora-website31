/** Central site configuration. Values that the admin will manage later live in the database. */
export const siteConfig = {
  name: "FILORA",
  tagline: "فيلورا... فنّ التفاصيل",
  description:
    "اكتشفي عالم فيلورا من ستيكرز رشمات الحنة، تصاميم تجمع بين أصالة التراث وسحر اللمسة العصرية. الطلب عبر واتساب.",
  locale: "ar_DZ",
  lang: "ar",
  dir: "rtl",
  currency: "DZD",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  /** Placeholder; the real number will be editable from the admin dashboard. */
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "213XXXXXXXXX",
  instagramUrl: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",
  facebookUrl: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "",
} as const;
