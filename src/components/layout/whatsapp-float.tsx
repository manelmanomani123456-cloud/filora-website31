import { MessageCircle } from "lucide-react";
import { generalWhatsappLink } from "@/lib/whatsapp";

/**
 * Fixed WhatsApp button. Round icon on phones, pill with label from `sm`.
 * It sits at the end edge (left in RTL), above the iOS home indicator. The number comes from siteConfig.
 */
export function WhatsAppFloat() {
  return (
    <a
      href={generalWhatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصلي معنا عبر واتساب (يفتح في نافذة جديدة)"
      className="fixed end-4 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-30 inline-flex size-14 items-center justify-center gap-2 rounded-full bg-rouge text-white ring-2 ring-white transition-colors hover:bg-rouge-deep sm:w-auto sm:px-6 print:hidden"
    >
      <MessageCircle size={24} aria-hidden="true" />
      <span className="hidden font-heading font-bold sm:inline">اطلبي عبر واتساب</span>
    </a>
  );
}
