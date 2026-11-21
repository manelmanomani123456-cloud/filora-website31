import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const variants = {
  /** New arrival */
  new: "bg-rouge text-white",
  /** Featured design */
  featured: "bg-rose text-rouge",
  /** Quiet label, e.g. a category */
  neutral: "bg-peach text-rouge",
  outline: "border border-rouge/30 text-rouge bg-white",
  /** Product code such as FL-001: Latin, set in the display face */
  code: "border border-rouge/20 bg-white text-ink font-display tabular-nums",
} as const;

export function Badge({
  variant = "neutral",
  className,
  ...props
}: ComponentProps<"span"> & { variant?: keyof typeof variants }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-3 py-0.5 font-heading text-caption font-bold whitespace-nowrap",
        variants[variant],
        className,
      )}
      {...(variant === "code" ? { dir: "ltr" } : {})}
      {...props}
    />
  );
}
