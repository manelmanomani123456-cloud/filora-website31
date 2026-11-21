"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className, type, ...props }: InputProps) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-filora-border bg-transparent px-3 py-2 text-sm placeholder:text-filora-text-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-filora-rouge focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}
