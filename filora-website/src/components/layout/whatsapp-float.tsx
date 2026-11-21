"use client";

import { siteConfig } from "@/config/site";
import { WhatsApp } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${siteConfig.whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#1eb758] transition-colors focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
      aria-label="تواصل معنا عبر واتساب"
    >
      <WhatsApp className="w-7 h-7" />
    </a>
  );
}
