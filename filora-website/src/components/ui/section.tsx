"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  fullWidth?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
  background?: "white" | "orange" | "pink";
}

export function Section({
  className,
  fullWidth = false,
  padding = "lg",
  background = "white",
  children,
  ...props
}: SectionProps) {
  const paddingClasses = {
    none: "py-0",
    sm: "py-12",
    md: "py-20",
    lg: "py-24",
  };

  const backgroundClasses = {
    white: "bg-filora-white",
    orange: "bg-filora-orange",
    pink: "bg-filora-pink",
  };

  return (
    <section
      className={cn(
        paddingClasses[padding],
        backgroundClasses[background],
        className
      )}
      {...props}
    >
      <Container fullWidth={fullWidth}>{children}</Container>
    </section>
  );
}
