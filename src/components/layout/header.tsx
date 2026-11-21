import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mainNav } from "@/config/navigation";
import { generalWhatsappLink } from "@/lib/whatsapp";
import { Container } from "./container";
import { Logo } from "./logo";
import { DesktopNav, MobileNav } from "./nav";

/** Sticky site header: logo, navigation (inline on large screens, hamburger below), WhatsApp call to action. */
export function Header() {
  return (
    <header className="sticky top-0 z-40">
      <div className="relative border-b border-rouge/10 bg-white">
        <Container className="flex h-16 items-center gap-4 lg:h-[4.5rem] lg:gap-12">
          <Logo />
          <DesktopNav items={mainNav} className="hidden lg:block" />
          <div className="ms-auto flex items-center gap-1 sm:gap-2">
            <Button
              href={generalWhatsappLink()}
              size="sm"
              className="lg:h-11 lg:px-6 lg:text-body"
              iconStart={<MessageCircle size={18} aria-hidden="true" />}
            >
              <span className="lg:hidden">واتساب</span>
              <span className="hidden lg:inline">اطلبي عبر واتساب</span>
            </Button>
            <MobileNav items={mainNav} />
          </div>
        </Container>
      </div>
    </header>
  );
}
