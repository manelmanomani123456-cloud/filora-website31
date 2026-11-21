"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { navigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-40 bg-filora-white/95 backdrop-blur border-b border-filora-border">
      <div className="container px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo />

          <div className="hidden md:flex items-center gap-8">
            <nav>
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-small font-body transition-colors",
                    isActive(item.href)
                      ? "text-filora-rouge font-medium"
                      : "text-filora-text-muted hover:text-filora-rouge"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-filora-rouge text-white rounded-full text-small font-medium hover:bg-filora-rouge/90 transition-colors"
            >
              <Phone className="w-4 h-4" />
              واتساب
            </a>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="فتح القائمة"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 border-t border-filora-border pt-4 space-y-4">
            <nav className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-body font-body transition-colors hover:bg-filora-orange/50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="px-4 pt-2">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 text-body font-body bg-filora-rouge text-white rounded-md text-center hover:bg-filora-rouge/90 transition-colors"
              >
                تواصل عبر واتساب
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
