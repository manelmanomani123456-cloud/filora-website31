import { ArrowRight, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge, Button, Motif } from "@/components/ui";
import { cn, formatPrice } from "@/lib/utils";

export type ProductCardProps = {
  name: string;
  /** Product code, e.g. FL-001 */
  code: string;
  /** Product detail page */
  href: string;
  /** wa.me link for this product (see lib/whatsapp.ts) */
  orderHref: string;
  categoryName?: string;
  /** Price in DZD. Omitted when null. */
  price?: number | null;
  image?: string | null;
  isNew?: boolean;
  featured?: boolean;
  /** Varies the placeholder motif when there is no image */
  seed?: number;
  className?: string;
};

/**
 * Editorial product card: a tall image frame on a warm surface, quiet typography, no shadows.
 * Information stays minimal: name, code, price, two actions.
 */
export function ProductCard({
  name,
  code,
  href,
  orderHref,
  categoryName,
  price,
  image,
  isNew,
  featured,
  seed = 1,
  className,
}: ProductCardProps) {
  const priceText = formatPrice(price);
  return (
    <article className={cn("group flex flex-col", className)}>
      <Link
        href={href}
        aria-label={name}
        className="relative block aspect-4/5 overflow-hidden rounded-lg bg-peach"
      >
        {image ? (
          <Image
            src={image}
            alt=""
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center p-[18%] text-rouge/35 transition-colors duration-500 group-hover:text-rouge/55">
            <Motif seed={seed} />
          </div>
        )}
        {(isNew || featured) && (
          <div className="absolute start-3 top-3 flex flex-col items-start gap-1.5">
            {isNew && <Badge variant="new">جديد</Badge>}
            {featured && <Badge variant="featured">مميزة</Badge>}
          </div>
        )}
      </Link>

      <div className="flex flex-1 flex-col gap-1 pt-4">
        {categoryName && <p className="text-small text-ink/65">{categoryName}</p>}
        <h3 className="text-h4">
          <Link href={href} className="hover:underline underline-offset-4">
            {name}
          </Link>
        </h3>
        <div className="mt-auto flex items-center justify-between gap-3 pt-2">
          <Badge variant="code">{code}</Badge>
          {priceText && <span className="font-heading text-body font-bold text-rouge">{priceText}</span>}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <Button
          href={href}
          variant="secondary"
          size="sm"
          iconEnd={<ArrowRight size={16} aria-hidden="true" className="rtl:rotate-180" />}
        >
          التفاصيل
        </Button>
        <Button href={orderHref} size="sm" iconStart={<MessageCircle size={16} aria-hidden="true" />}>
          اطلبي
        </Button>
      </div>
    </article>
  );
}
