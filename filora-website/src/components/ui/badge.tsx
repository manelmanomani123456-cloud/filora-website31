"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "pink";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "bg-filora-rouge text-white",
    secondary: "bg-filora-orange text-filora-rouge border border-filora-rouge/20",
    pink: "bg-filora-pink text-filora-rouge",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full px-2.5 py-0.5 text-caption font-body font-medium whitespace-nowrap",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
