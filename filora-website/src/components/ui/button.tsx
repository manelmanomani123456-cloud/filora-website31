"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ComponentPropsWithoutRef<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  asChild?: boolean;
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  isLoading = false,
  disabled,
  asChild = false,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? React.Fragment : "button";

  const variants = {
    primary: "bg-filora-rouge text-white hover:bg-filora-rouge/90 transition-colors",
    secondary:
      "bg-filora-orange text-filora-rouge hover:bg-filora-orange/90 transition-colors border border-filora-rouge/20",
    outline:
      "border border-filora-rouge text-filora-rouge hover:bg-filora-rouge hover:text-white transition-colors",
    ghost:
      "text-filora-text-muted hover:text-filora-rouge hover:bg-filora-pink/30 transition-colors",
  };

  const sizes = {
    sm: "px-4 py-2 text-small",
    md: "px-6 py-3 text-body",
    lg: "px-8 py-4 text-body-lg",
  };

  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md font-body font-medium transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none",
        variants[variant],
        sizes[size],
        className
      )}
      disabled={disabled || isLoading}
      {...(asChild ? {} : props)}
    >
      {isLoading && (
        <svg
          className="animate-spin h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {children}
    </Comp>
  );
}
