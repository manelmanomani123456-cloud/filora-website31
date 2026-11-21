"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { isActive, type NavItem } from "@/config/navigation";
import { cn } from "@/lib/utils";

/** Inline navigation for large screens. */
export function DesktopNav({ items, className }: { items: NavItem[]; className?: string }) {
  const pathname = usePathname();
  return (
    <nav aria-label="القائمة الرئيسية" className={className}>
      <ul className="flex items-center gap-8">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={isActive(pathname, item) ? "page" : undefined}
              className={cn(
                "relative py-2 font-heading font-bold text-ink transition-colors hover:text-rouge aria-[current=page]:text-rouge",
                "after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-center after:scale-x-0 after:bg-rouge",
                "after:transition-transform after:duration-300 hover:after:scale-x-100 aria-[current=page]:after:scale-x-100",
              )}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/**
 * Hamburger button and drop-down panel for screens below `lg`.
 * Must be rendered inside a `relative` header bar: the panel is anchored to its bottom edge.
 */
export function MobileNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  // The menu is "open for" a pathname, so navigating anywhere closes it without an effect.
  const [openFor, setOpenFor] = useState<string | null>(null);
  const open = openFor === pathname;
  const buttonRef = useRef<HTMLButtonElement>(null);
  const duration = reduce ? 0 : 0.28;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenFor(null);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => mq.matches && setOpenFor(null);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
        onClick={() => setOpenFor(open ? null : pathname)}
        className="grid size-11 place-items-center rounded-full text-rouge transition-colors hover:bg-peach lg:hidden"
      >
        {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="scrim"
              aria-hidden="true"
              onClick={() => setOpenFor(null)}
              className="absolute inset-x-0 top-full -z-10 h-dvh bg-ink/25 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration }}
            />
            <motion.div
              key="panel"
              id="mobile-nav"
              className="absolute inset-x-0 top-full overflow-hidden border-b border-rouge/10 bg-white lg:hidden"
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
            >
              <nav aria-label="القائمة الرئيسية" className="mx-auto max-w-page px-gutter pb-4 pt-2">
                <ul>
                  {items.map((item, i) => (
                    <motion.li
                      key={item.href}
                      className="border-b border-rouge/10 last:border-b-0"
                      initial={reduce ? false : { opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: reduce ? 0 : 0.06 + i * 0.04, duration: 0.25 }}
                    >
                      <Link
                        href={item.href}
                        aria-current={isActive(pathname, item) ? "page" : undefined}
                        className="flex min-h-14 items-center justify-between gap-4 font-heading text-h4 font-bold text-ink transition-colors hover:text-rouge aria-[current=page]:text-rouge"
                      >
                        {item.label}
                        <ChevronRight size={20} aria-hidden="true" className="text-rouge/50 rtl:rotate-180" />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
