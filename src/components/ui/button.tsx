import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

const variants = {
  primary: "bg-rouge text-white hover:bg-rouge-deep border border-rouge hover:border-rouge-deep",
  secondary: "bg-transparent text-rouge border border-rouge hover:bg-peach",
  soft: "bg-rose text-rouge border border-rose hover:bg-rose/70",
  ghost: "bg-transparent text-rouge border border-transparent hover:bg-peach",
  /** For rouge backgrounds */
  inverse: "bg-white text-rouge border border-white hover:bg-peach hover:border-peach",
  /** Quiet action on rouge backgrounds */
  "ghost-inverse": "bg-transparent text-white border border-transparent hover:bg-white/10",
} as const;

const sizes = {
  sm: "h-9 px-4 text-small",
  md: "h-11 px-6 text-body",
  lg: "h-14 px-9 text-body-lg",
} as const;

export const buttonClasses = (variant: keyof typeof variants = "primary", size: keyof typeof sizes = "md") =>
  cn(
    "inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-heading font-bold whitespace-nowrap",
    "transition-colors duration-200 select-none",
    "aria-disabled:pointer-events-none aria-disabled:opacity-50 disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
  );

type Common = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  /** Icon placed at the start of the label (right side in RTL). */
  iconStart?: ReactNode;
  /** Icon placed at the end of the label (left side in RTL). Directional icons should use `rtl:rotate-180`. */
  iconEnd?: ReactNode;
};

type AsButton = Common & Omit<ComponentProps<"button">, keyof Common> & { href?: undefined };
type AsLink = Common & Omit<ComponentProps<"a">, keyof Common | "href"> & { href: string };

/** Renders a <button>, a Next <Link> for internal paths, or a plain <a> (new tab) for external URLs. */
export function Button(props: AsButton | AsLink) {
  const { variant = "primary", size = "md", iconStart, iconEnd, className, children, ...rest } = props;
  const classes = cn(buttonClasses(variant, size), className);
  const content = (
    <>
      {iconStart}
      {children}
      {iconEnd}
    </>
  );

  if (props.href !== undefined) {
    const { href, ...anchor } = rest as Omit<AsLink, keyof Common | "className" | "children">;
    if (/^(https?:|mailto:|tel:)/.test(href)) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...anchor}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...anchor}>
        {content}
      </Link>
    );
  }

  const { type = "button", ...button } = rest as Omit<AsButton, keyof Common | "className" | "children">;
  return (
    <button type={type} className={classes} {...button}>
      {content}
    </button>
  );
}
