"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h2" | "h3" | "h4";
  align?: "start" | "center";
  lang?: "ar" | "en";
}

export function SectionHeading({
  as: Component = "h2",
  className,
  align = "start",
  lang = "ar",
  children,
  ...props
}: SectionHeadingProps) {
  return (
    <Component
      lang={lang}
      className={cn(
        "font-heading text-rouge mb-8",
        align === "center" ? "text-center" : "text-start",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
