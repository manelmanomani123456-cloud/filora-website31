import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function Container({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("mx-auto w-full max-w-page px-gutter", className)} {...props} />;
}

const tones = {
  white: "bg-white text-ink",
  peach: "bg-peach text-ink",
  rouge: "bg-rouge text-white [&_h1]:text-white [&_h2]:text-white [&_h3]:text-white",
} as const;

/** Full-width band with consistent vertical rhythm. */
export function Section({
  tone = "white",
  className,
  children,
  ...props
}: ComponentProps<"section"> & { tone?: keyof typeof tones }) {
  return (
    <section className={cn("py-section", tones[tone], className)} {...props}>
      <Container>{children}</Container>
    </section>
  );
}

/** Wrapper for inner pages that are not made of full-width bands (legal text, forms, product detail). */
export function PageContainer({ className, ...props }: ComponentProps<"div">) {
  return <Container className={cn("py-10 sm:py-14", className)} {...props} />;
}
