"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        "flex w-full min-h-[80px] rounded-md border border-filora-border bg-transparent px-3 py-2 text-sm placeholder:text-filora-text-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-filora-rouge focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}
