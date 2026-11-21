import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFloat } from "@/components/layout/whatsapp-float";
import { CatalogWithFilters } from "@/components/home/catalog-with-filters";
import { FeaturedProducts } from "@/components/home/featured-products";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { type Product } from "@/types";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
  },
};

// Temporary mock data — replaced by Supabase data in production
const mockCategories = [
  { id: "1", name: "Henna Stickers", nameAr: "ملصقات الحناء" },
  { id: "2", name: "Temporary Tattoos", nameAr: "تاشوات مؤقتة" },
  { id: "3", name: "Bridal Collection", nameAr: "مجموعة العرائس" },
  { id: "4", name: "Amazigh Designs", nameAr: "تصاميم أمازيغية" },
];

const mockProducts: Product[] = [
  {
    id: "1",
    name: "Golden Henna Sticker",
    nameAr: "ملصق حناء ذهبي",
    code: "FLR-001",
    description: "إضافة أنيقة لأي مناسبة",
    descriptionAr: "إضافة أنيقة لأي مناسبة خاصة",
    category: "Henna Stickers",
    categoryAr: "ملصقات الحناء",
    price: 350,
    image: "/images/products/henna-golden.jpg",
    availability: "in_stock",
    featured: true,
    published: true,
  },
  {
    id: "2",
    name: "Amazigh Pattern Sticker",
    nameAr: "ملصق نمط أمازيغي",
    code: "FLR-002",
    description: "تصميم مستوحى من التراث الأمازيغي",
    descriptionAr: "تصميم مستوحى من التراث الأمازيغي الجزائري",
    category: "Amazigh Designs",
    categoryAr: "تصاميم أمازيغية",
    price: 450,
    image: "/images/products/amazigh-pattern.jpg",
    availability: "in_stock",
    featured: true,
    published: true,
  },
  {
    id: "3",
    name: "Bridal Henna Set",
    nameAr: "مجموعة حناء العروس",
    code: "FLR-003",
    description: "مجموعة كاملة لحفلات الزفاف",
    descriptionAr: "مجموعة كاملة لحفلات الزفاف والمناسبات",
    category: "Bridal Collection",
    categoryAr: "مجموعة العرائس",
    price: 800,
    image: "/images/products/bridal-set.jpg",
    availability: "in_stock",
    featured: true,
    published: true,
  },
  {
    id: "4",
    name: "Floral Temporary Tattoo",
    nameAr: "تاشو زهري مؤقت",
    code: "FLR-004",
    description: "تاشو زهور رقيق ومؤقت",
    descriptionAr: "تاشو زهور رقيق ومؤقت للاستخدام اليومي",
    category: "Temporary Tattoos",
    categoryAr: "تاشوات مؤقتة",
    price: 250,
    image: "/images/products/floral-tattoo.jpg",
    availability: "low_stock",
    published: true,
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <WhatsAppFloat />

      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none bg-filora-white">
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-filora-orange/40" />
          <Container fullWidth>
            <div className="relative z-10 text-center px-6 md:px-12 max-w-3xl mx-auto">
              <span className="inline-block py-1 px-4 rounded-full bg-filora-pink text-filora-rouge text-small font-body font-medium mb-6">
                مجموعة جديدة
              </span>
              <h1 className="font-heading text-rouge text-display md:text-[4rem] mb-6 leading-tight">
                فن الحناء meets التراث الجزائري
              </h1>
              <p className="text-body-lg text-filora-ink/90 mb-8 max-w-lg mx-auto">
                تاشوات وملصقات حناء فنية مؤقتة، مستوحاة من الجمال الجزائري والتراث الأمازيغي، تُصنع بعناية لتألقك في كل مناسبة.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" asChild href="#catalog">
                  استعرض المنتجات
                </Button>
                <Button variant="outline" size="lg" asChild href="#about">
                  عن فيلورا
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Short Brand Introduction */}
        <section id="brand-intro" className="py-20 bg-filora-white">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading align="start">عن فيلورا</SectionHeading>
                <p className="text-body text-filora-ink/90 mb-6 leading-relaxed">
                  فيلورا هي علامة جزائرية متخصصة في تاشوات وملصقات الحناء المؤقتة، تُصمم بعناية وإتقان لتضفي لمسة من الأناقة والتميز على إطلالتك.
                </p>
                <p className="text-body text-filora-ink/90 mb-8 leading-relaxed">
                  مستوحاة من التراث الجزائري الغني والزخارف الأمازيغية الأصيلة، نقدم لك منتجات تجمع بين الحداثة والأصالة، لتناسب كل المناسبات اليومية والخاصة.
                </p>
                <Button asChild href="#catalog">اكتشف التشكيلة</Button>
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden bg-filora-orange/30 border border-filora-border">
                <img
                  src="/images/brand/brand-photo.jpg"
                  alt="فيلورا - فن الحناء الجزائري"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </Container>
        </section>

        {/* Featured Products */}
        <FeaturedProducts products={mockProducts} />

        {/* Full Catalog with Search & Filters */}
        <section id="catalog" className="py-24 bg-filora-white">
          <CatalogWithFilters products={mockProducts} categories={mockCategories} />
        </section>

        {/* Instagram Gallery */}
        <section id="instagram" className="py-20 bg-filora-orange/30">
          <Container>
            <SectionHeading align="center" lang="en">
              Instagram Gallery
            </SectionHeading>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-filora-pink/40 rounded-md overflow-hidden"
                >
                  <img
                    src={`/images/instagram/instagram-${i}.jpg`}
                    alt={`معرض إنستغرام ${i}`}
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-filora-white">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <SectionHeading align="center">تواصل معنا</SectionHeading>
              <p className="text-body text-filora-text-muted mb-8">
                هل لديك استفسار أو طلب خاص؟ فريق فيلورا جاهز لمساعدتك.
              </p>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-full font-body font-medium text-body-lg hover:bg-[#1eb758] transition-colors focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.583 1.017c-.168 0-.33.008-.492.026-.49.054-.975.163-1.44.324-.556.193-1.073.432-1.556.747-.488.317-.936.692-1.314 1.13-.385.448-.702.949-.94 1.515-.227.544-.394 1.127-.466 1.742-.074.632-.081 1.268-.081 1.904s.007 1.273.081 1.905c.072.616.239 1.198.466 1.742.238.566.555 1.067.94 1.515.378.438.826.813 1.314 1.13.483.315 1 .554 1.556.747.465.161.95.27 1.44.324.162.018.324.026.492.026h.053c7.418 0 13.443-6.025 13.443-13.443s-6.024-13.443-13.443-13.443z" />
                </svg>
                تواصل عبر واتساب
              </a>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
