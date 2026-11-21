import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Ornament } from "./motif";

/** Editorial section title: Arabic heading, optional English line, optional ornament and trailing action. */
export function SectionHeading({
  title,
  description,
  englishTitle,
  align = "start",
  as: Tag = "h2",
  ornament = false,
  action,
  className,
}: {
  title: string;
  description?: string;
  /** Optional English counterpart set in the serif display face. */
  englishTitle?: string;
  align?: "start" | "center";
  as?: "h1" | "h2" | "h3";
  ornament?: boolean;
  action?: ReactNode;
  className?: string;
}) {
  const centered = align === "center";
  return (
    <header
      className={cn(
        "flex gap-x-8 gap-y-4",
        centered ? "flex-col items-center text-center" : "flex-wrap items-end justify-between",
        className,
      )}
    >
      <div className={cn("flex max-w-prose flex-col gap-3", centered && "items-center")}>
        <Tag className={Tag === "h1" ? "text-h1" : Tag === "h2" ? "text-h2" : "text-h3"}>{title}</Tag>
        {englishTitle && (
          <p lang="en" dir="ltr" className="font-display text-h4 opacity-70">
            {englishTitle}
          </p>
        )}
        {ornament && <Ornament />}
        {description && <p className="text-body-lg opacity-80">{description}</p>}
      </div>
      {action}
    </header>
  );
}
