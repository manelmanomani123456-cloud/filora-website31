"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

export function Select({ className, children, ...props }: SelectProps) {
  return (
    <select
      className={cn(
        "flex h-10 w-full items-center justify-between rounded-md border border-filora-border bg-transparent px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-filora-rouge disabled:cursor-not-allowed disabled:opacity-50 appearance-none",
        className
      )}
      {...props}
    >
      {children}
    </select>
  );
}

export function Option(props: React.OptionHTMLAttributes<HTMLOptionElement>) {
  return <option {...props} />;
}
