import { siteConfig } from "@/config/site";

/** Temporary entry point. Replaced by the real home page in a later phase. */
export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 px-6 py-section text-center">
      <h1 lang="en" className="text-display">{siteConfig.name}</h1>
      <p className="text-body-lg text-ink/80">{siteConfig.tagline}</p>
    </div>
  );
}
