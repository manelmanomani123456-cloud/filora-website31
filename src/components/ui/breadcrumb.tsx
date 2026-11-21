import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export type BreadcrumbItem = {
  label: string;
  /** Omit on the current page (the last item). */
  href?: string;
};

/**
 * Accessible breadcrumb trail with BreadcrumbList structured data.
 * The home link is added automatically. The last item is the current page.
 */
export function Breadcrumb({
  items,
  withHome = true,
  className,
}: {
  items: BreadcrumbItem[];
  withHome?: boolean;
  className?: string;
}) {
  const all = withHome ? [{ label: "الرئيسية", href: "/" }, ...items] : items;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: new URL(item.href, siteConfig.url).toString() } : {}),
    })),
  };

  return (
    <>
      <nav aria-label="مسار التنقل" className={className}>
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-small text-ink/70">
          {all.map((item, i) => {
            const last = i === all.length - 1;
            return (
              <li key={`${item.label}-${i}`} className="flex min-w-0 items-center gap-2">
                {last || !item.href ? (
                  <span
                    aria-current={last ? "page" : undefined}
                    className={cn("truncate font-bold text-rouge", last && "max-w-[55vw] sm:max-w-none")}
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href} className="underline-offset-4 transition-colors hover:text-rouge hover:underline">
                    {item.label}
                  </Link>
                )}
                {!last && <ChevronRight size={14} aria-hidden="true" className="shrink-0 text-rouge/50 rtl:rotate-180" />}
              </li>
            );
          })}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
