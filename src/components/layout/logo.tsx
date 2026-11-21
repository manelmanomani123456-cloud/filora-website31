import Link from "next/link";
import { cn } from "@/lib/utils";

/** FILORA wordmark. Latin, set in the display serif with open tracking. */
export function Logo({ tone = "rouge", className }: { tone?: "rouge" | "white"; className?: string }) {
  return (
    <Link
      href="/"
      aria-label="فيلورا، الصفحة الرئيسية"
      className={cn("inline-flex items-center rounded-sm", tone === "rouge" ? "text-rouge" : "text-white", className)}
    >
      <span lang="en" dir="ltr" className="font-display text-[1.65rem] leading-none tracking-[0.22em]">
        FILORA
      </span>
    </Link>
  );
}
