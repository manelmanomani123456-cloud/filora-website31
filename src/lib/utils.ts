/** Joins class names, skipping falsy values. */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

/** Formats a DZD price in Arabic. Returns null when no price is set. */
export function formatPrice(value: number | null | undefined): string | null {
  if (value == null) return null;
  return `${new Intl.NumberFormat("ar-DZ").format(value)} د.ج`;
}
