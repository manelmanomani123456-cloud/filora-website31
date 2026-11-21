import { cacheLife } from "next/cache";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FacebookIcon, InstagramIcon } from "@/components/ui/social-icons";
import { mainNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { generalWhatsappLink } from "@/lib/whatsapp";
import { Container } from "./container";
import { Logo } from "./logo";

/** The current year needs the clock, which Cache Components only allows inside a cached scope. */
async function CopyrightYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}

const headingClass = "font-heading text-h4 font-bold text-white";
const linkClass = "text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline";

export function Footer() {
  const socials = [
    { label: "إنستغرام", href: siteConfig.instagramUrl, icon: <InstagramIcon /> },
    { label: "فيسبوك", href: siteConfig.facebookUrl, icon: <FacebookIcon /> },
  ].filter((s) => s.href);

  return (
    <footer className="bg-rouge text-white">
      <Container className="grid gap-10 pb-10 pt-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-16">
        <section aria-labelledby="footer-brand" className="flex flex-col items-start gap-4 sm:col-span-2 lg:col-span-1">
          <h2 id="footer-brand" className="sr-only">عن فيلورا</h2>
          <Logo tone="white" />
          <p className="max-w-sm text-white/80">{siteConfig.tagline}. ستيكرز رشمات الحنة بروح التراث الجزائري ولمسة عصرية.</p>
          {socials.length > 0 && (
            <ul className="flex items-center gap-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${s.label} (يفتح في نافذة جديدة)`}
                    className="grid size-11 place-items-center rounded-full border border-white/30 transition-colors hover:bg-white hover:text-rouge"
                  >
                    {s.icon}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </section>

        <nav aria-labelledby="footer-links" className="flex flex-col gap-4">
          <h2 id="footer-links" className={headingClass}>روابط سريعة</h2>
          <ul className="flex flex-col gap-2">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <section aria-labelledby="footer-contact" className="flex flex-col items-start gap-4">
          <h2 id="footer-contact" className={headingClass}>تواصلي معنا</h2>
          <p className="text-white/80">الطلب يتم عبر واتساب فقط. راسلينا للاستفسار أو لطلب رشمتكِ.</p>
          <Button href={generalWhatsappLink()} variant="inverse" iconStart={<MessageCircle size={18} aria-hidden="true" />}>
            راسلينا على واتساب
          </Button>
        </section>
      </Container>

      <div className="border-t border-white/15">
        <Container className="flex flex-wrap items-center justify-between gap-2 pb-24 pt-5 text-small text-white/70 sm:pb-5">
          <p>
            © <CopyrightYear /> <span lang="en">FILORA</span>. جميع الحقوق محفوظة.
          </p>
        </Container>
      </div>
    </footer>
  );
}
