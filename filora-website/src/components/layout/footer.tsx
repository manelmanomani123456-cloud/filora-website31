"use client";

import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";
import { navigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="bg-filora-white border-t border-filora-border">
      <div className="container px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center text-center md:text-start gap-4">
            <Logo />
            <p className="text-small text-filora-text-muted max-w-xs">
              فن الحناء والتاشوات المؤقتة مستوحى من التراث الجزائري والأمازيغي.
            </p>
          </div>

          <nav className="flex gap-6 text-small font-body">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-filora-text-muted hover:text-filora-rouge transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {siteConfig.instagramUrl && (
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-filora-text-muted hover:text-filora-rouge transition-colors"
                aria-label="إنستغرام"
              >
                <Instagram className="w-5 h-5" />
              </a>
            )}
            {siteConfig.facebookUrl && (
              <a
                href={siteConfig.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-filora-text-muted hover:text-filora-rouge transition-colors"
                aria-label="فيسبوك"
              >
                <Facebook className="w-5 h-5" />
              </a>
            )}
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-filora-text-muted hover:text-filora-rouge transition-colors"
              aria-label="واتساب"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.583 1.017c-.168 0-.33.008-.492.026-.49.054-.975.163-1.44.324-.556.193-1.073.432-1.556.747-.488.317-.936.692-1.314 1.13-.385.448-.702.949-.94 1.515-.227.544-.394 1.127-.466 1.742-.074.632-.081 1.268-.081 1.904s.007 1.273.081 1.905c.072.616.239 1.198.466 1.742.238.566.555 1.067.94 1.515.378.438.826.813 1.314 1.13.483.315 1 .554 1.556.747.465.161.95.27 1.44.324.162.018.324.026.492.026h.053c7.418 0 13.443-6.025 13.443-13.443s-6.024-13.443-13.443-13.443z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-filora-border text-center">
          <p className="text-caption text-filora-text-muted">
            © {new Date().getFullYear()} FILORA. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
