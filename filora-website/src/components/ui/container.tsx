"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  fullWidth?: boolean;
}

export function Container({ className, fullWidth = false, children, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "w-full mx-auto",
        fullWidth ? "max-w-full px-4" : "max-w-[var(--container-max)] px-6",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
