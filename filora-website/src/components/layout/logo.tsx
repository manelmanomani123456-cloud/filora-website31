"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2"
      aria-label="العودة إلى الصفحة الرئيسية"
    >
      <div className="w-8 h-8 rounded-md bg-filora-rouge flex items-center justify-center">
        <span className="text-white font-heading text-small">F</span>
      </div>
      <span className="font-heading text-rouge text-body-lg">{siteConfig.name}</span>
    </Link>
  );
}
