import { cn } from "@/lib/utils";

/**
 * Amazigh-inspired line motif (nested diamonds and a zigzag border), drawn in currentColor.
 * Used as an image placeholder and brand ornament. `seed` varies the pattern.
 */
export function Motif({ seed = 1, className }: { seed?: number; className?: string }) {
  const rings = 3 + (seed % 3);
  const teeth = 8 + (seed % 4);
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("size-full", className)}
    >
      {Array.from({ length: rings }, (_, i) => {
        const k = 18 + i * 17;
        return <path key={i} d={`M100 ${100 - k}L${100 + k} 100L100 ${100 + k}L${100 - k} 100Z`} />;
      })}
      <circle cx="100" cy="100" r="4" fill="currentColor" />
      <path d={`M16 176${`l${168 / teeth / 2} -9 l${168 / teeth / 2} 9`.repeat(teeth)}`} />
      <path d={`M16 24${`l${168 / teeth / 2} 9 l${168 / teeth / 2} -9`.repeat(teeth)}`} />
    </svg>
  );
}

/** Thin divider with a centered diamond. */
export function Ornament({ className }: { className?: string }) {
  return (
    <div role="presentation" className={cn("flex items-center gap-3 text-rouge", className)}>
      <span className="h-px w-12 bg-rouge/30" />
      <svg viewBox="0 0 12 12" className="size-2.5" aria-hidden="true">
        <path d="M6 0L12 6L6 12L0 6Z" fill="currentColor" />
      </svg>
      <span className="h-px w-12 bg-rouge/30" />
    </div>
  );
}
