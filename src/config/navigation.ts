export type NavItem = {
  label: string;
  href: string;
  /** Path prefixes that mark this item as the current section. */
  match: string[];
  /** Match the pathname exactly (used for the home page). */
  exact?: boolean;
};

/** Main navigation, shared by the header and footer. */
export const mainNav: NavItem[] = [
  { label: "الرئيسية", href: "/", match: ["/"], exact: true },
  { label: "الكتالوغ", href: "/catalog", match: ["/catalog", "/product"] },
  { label: "التصنيفات", href: "/#categories", match: ["/category"] },
  { label: "من نحن", href: "/about", match: ["/about"] },
  { label: "اتصلي بنا", href: "/contact", match: ["/contact"] },
];

export function isActive(pathname: string, item: NavItem): boolean {
  if (item.exact) return item.match.includes(pathname);
  return item.match.some((p) => pathname === p || pathname.startsWith(`${p}/`));
}
