import { ArrowRight, MessageCircle, Search } from "lucide-react";
import type { Metadata } from "next";
import { ProductCard } from "@/components/products";
import { Badge, Breadcrumb, Button, Input, Ornament, Section, SectionHeading, Select, Textarea } from "@/components/ui";
import { productOrderMessage, whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Design System",
  robots: { index: false, follow: false },
};

const colors = [
  { name: "rouge", hex: "#712027", cls: "bg-rouge", note: "Primary. Buttons, headings, accents", light: false },
  { name: "peach", hex: "#FFE9D1", cls: "bg-peach", note: "Orange clair. Warm surfaces", light: true },
  { name: "rose", hex: "#FABDD6", cls: "bg-rose", note: "Rose clair. Soft accent, badges", light: true },
  { name: "white", hex: "#FFFFFF", cls: "bg-white", note: "Page background", light: true },
  { name: "rouge-deep", hex: "#531419", cls: "bg-rouge-deep", note: "Derived. Hover and pressed", light: false },
  { name: "ink", hex: "#34171B", cls: "bg-ink", note: "Derived. Body text", light: false },
];

const scale = [
  { cls: "text-display", name: "display", spec: "40 – 64px" },
  { cls: "text-h1", name: "h1", spec: "32 – 44px" },
  { cls: "text-h2", name: "h2", spec: "26 – 34px" },
  { cls: "text-h3", name: "h3", spec: "24px" },
  { cls: "text-h4", name: "h4", spec: "20px" },
];

const radii = [
  { cls: "rounded-sm", name: "sm", use: "Small chips, focus areas" },
  { cls: "rounded-md", name: "md", use: "Inputs, selects" },
  { cls: "rounded-lg", name: "lg", use: "Cards, image frames" },
  { cls: "rounded-full", name: "full", use: "Buttons, badges" },
];

const orderLink = (name: string, code: string) =>
  whatsappLink(productOrderMessage({ nameAr: name, code }, `https://example.com/product/${code}`));

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-6">
      <h3 lang="en" dir="ltr" className="text-h3 text-start">{title}</h3>
      {children}
    </div>
  );
}

export default function DesignSystemPage() {
  return (
    <div>
      <Section tone="peach" className="py-16">
        <SectionHeading
          as="h1"
          title="نظام تصميم فيلورا"
          englishTitle="FILORA Design System"
          description="الألوان والخطوط والمكوّنات المشتركة. صفحة داخلية للمعاينة فقط."
          ornament
        />
      </Section>

      <Section>
        <div className="flex flex-col gap-20">
          <Block title="Colors">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {colors.map((c) => (
                <div key={c.name} className="flex flex-col gap-2">
                  <div className={`${c.cls} h-24 rounded-lg border border-rouge/15`} />
                  <p className="font-heading font-bold text-rouge">
                    <bdi>{c.name}</bdi> <bdi className="font-body font-normal text-ink/70">{c.hex}</bdi>
                  </p>
                  <p lang="en" dir="ltr" className="text-small text-ink/70">{c.note}</p>
                </div>
              ))}
            </div>
            <p lang="en" dir="ltr" className="text-small text-ink/70">
              Contrast: rouge on white and on peach both pass WCAG AAA for body text; white on rouge too. Rose is used as a
              background with rouge text, never for text on white.
            </p>
          </Block>

          <Block title="Typography">
            <div className="flex flex-col gap-5">
              {scale.map((s) => (
                <div key={s.name} className="flex flex-wrap items-baseline justify-between gap-x-6 border-b border-rouge/10 pb-4">
                  <p className={`${s.cls} font-heading font-bold text-rouge`}>جمالكِ يبدأ من التفاصيل</p>
                  <p dir="ltr" className="text-small text-ink/60">{s.name} · {s.spec}</p>
                </div>
              ))}
              <p lang="en" dir="ltr" className="font-display text-display text-rouge">Fine details, drawn by hand</p>
              <p className="max-w-prose text-body-lg">
                في فيلورا، نؤمن أن الجمال يكمن في التفاصيل الصغيرة. نقدم لكم تشكيلة من رشمات الحناء التي تجمع بين روح التراث
                الجزائري وسحر التصاميم العصرية.
              </p>
              <p className="max-w-prose text-body">
                رشمة بتفاصيل دقيقة، تلتصق بسهولة وتدوم من 3 إلى 7 أيام. الرمز <bdi>FL-001</bdi> والسعر 900 د.ج.
              </p>
              <p className="text-small text-ink/70">نص صغير للملاحظات والتفاصيل الثانوية.</p>
            </div>
          </Block>

          <Block title="Spacing and radius">
            <div className="grid gap-4 sm:grid-cols-4">
              {radii.map((r) => (
                <div key={r.name} className="flex flex-col gap-2">
                  <div className={`${r.cls} h-20 border border-rouge bg-rose/40`} />
                  <p dir="ltr" className="font-bold text-rouge">rounded-{r.name}</p>
                  <p lang="en" dir="ltr" className="text-small text-ink/70">{r.use}</p>
                </div>
              ))}
            </div>
            <p lang="en" dir="ltr" className="text-small text-ink/70">
              Spacing follows Tailwind&rsquo;s 4px grid. Layout rhythm tokens: <code dir="ltr">py-section</code> (56 – 104px),{" "}
              <code dir="ltr">px-gutter</code> (20 – 32px), <code dir="ltr">max-w-page</code> (1184px). No shadows: depth
              comes from color and thin borders.
            </p>
          </Block>

          <Block title="Buttons">
            <div className="flex flex-col gap-6">
              {(["primary", "secondary", "soft", "ghost"] as const).map((v) => (
                <div key={v} className="flex flex-wrap items-center gap-3">
                  <span dir="ltr" className="w-24 text-small text-ink/60">{v}</span>
                  <Button variant={v} size="sm">زر صغير</Button>
                  <Button variant={v}>اكتشفي الرشمات</Button>
                  <Button variant={v} size="lg" iconEnd={<ArrowRight size={18} aria-hidden="true" className="rtl:rotate-180" />}>
                    تصفحي جديدنا
                  </Button>
                  <Button variant={v} disabled>معطّل</Button>
                </div>
              ))}
              <div className="flex flex-wrap items-center gap-3">
                <span dir="ltr" className="w-24 text-small text-ink/60">whatsapp</span>
                <Button href={orderLink("رشمة تجريبية", "FL-000")} iconStart={<MessageCircle size={18} aria-hidden="true" />}>
                  اطلبي هذه الرشمة عبر واتساب
                </Button>
              </div>
            </div>
          </Block>

          <Block title="Inputs">
            <div className="grid gap-6 md:grid-cols-2">
              <Input label="البحث" placeholder="ابحثي بالاسم أو برقم الرشمة" iconStart={<Search size={18} aria-hidden="true" />} />
              <Select label="التصنيف" defaultValue="">
                <option value="" disabled>اختاري التصنيف</option>
                <option>رشمات أمازيغية</option>
                <option>رشمات العرائس</option>
              </Select>
              <Input label="رمز الرشمة" hint="مثال: FL-001" defaultValue="FL-001" dir="ltr" className="text-start" />
              <Input label="السعر بالدينار" error="أدخلي سعرًا صحيحًا" defaultValue="abc" aria-invalid />
              <Input label="حقل معطّل" disabled defaultValue="غير متاح" />
              <Textarea label="الوصف" placeholder="اكتبي وصف الرشمة" />
            </div>
          </Block>

          <Block title="Badges">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="new">جديد</Badge>
              <Badge variant="featured">مميزة</Badge>
              <Badge variant="neutral">رشمات أمازيغية</Badge>
              <Badge variant="outline">قيد المراجعة</Badge>
              <Badge variant="code">FL-001</Badge>
            </div>
          </Block>

          <Block title="Breadcrumb">
            <div className="flex flex-col gap-4">
              <Breadcrumb items={[{ label: "الكتالوغ" }]} />
              <Breadcrumb items={[{ label: "الكتالوغ", href: "/catalog" }, { label: "رشمات العرائس", href: "/category/bridal" }, { label: "عروس الجزائر بتفاصيل ذهبية وأنيقة" }]} />
            </div>
          </Block>

          <Block title="Section headings">
            <div className="flex flex-col gap-12">
              <SectionHeading title="وصل حديثًا" description="أحدث الرشمات المضافة إلى الكتالوغ." action={<Button variant="secondary" size="sm">عرض الكل</Button>} />
              <SectionHeading align="center" title="فيلورا... فنّ التفاصيل" englishTitle="The art of detail" ornament />
              <Ornament />
            </div>
          </Block>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col gap-10">
          <SectionHeading title="بطاقات المنتجات" description="بطاقة بدون صورة تعرض الزخرفة الأمازيغية بدل الصورة." />
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4">
            <ProductCard name="رشمة الأمازيغ الكلاسيكية" code="FL-001" categoryName="رشمات أمازيغية" price={900} isNew featured seed={1} href="#" orderHref={orderLink("رشمة الأمازيغ الكلاسيكية", "FL-001")} />
            <ProductCard name="وردة التراث" code="FL-002" categoryName="رشمات تقليدية" price={800} isNew seed={2} href="#" orderHref={orderLink("وردة التراث", "FL-002")} />
            <ProductCard name="عروس الجزائر" code="FL-004" categoryName="رشمات العرائس" featured seed={3} href="#" orderHref={orderLink("عروس الجزائر", "FL-004")} />
            <ProductCard name="أنامل الورد" code="FL-006" categoryName="رشمات الأصابع" price={500} seed={4} href="#" orderHref={orderLink("أنامل الورد", "FL-006")} />
          </div>
        </div>
      </Section>

      <Section tone="rouge">
        <SectionHeading align="center" title="قسم بخلفية روج" description="العناوين تتحول إلى الأبيض تلقائيًا على الخلفية الداكنة." />
        <div className="mt-8 flex justify-center gap-3">
          <Button variant="inverse">اكتشفي الرشمات</Button>
          <Button variant="ghost-inverse">من نحن</Button>
        </div>
      </Section>
    </div>
  );
}
