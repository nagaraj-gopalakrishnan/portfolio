import type { Metadata } from "next";

export const SITE_URL = "https://nagaraj-gopalakrishnan.netlify.app";
export const SITE_NAME = "Nagaraj Gopalakrishnan";

export const ROUTES = ["/", "/about/", "/skills/", "/projects/", "/contact/"] as const;

// Next.js replaces (rather than merges) openGraph/twitter objects from the
// layout, so every page builds the full set from these shared defaults.
export const OG_DEFAULTS = {
  type: "website",
  locale: "en_US",
  siteName: SITE_NAME,
  images: ["/preview.jpg"],
} satisfies Metadata["openGraph"];

export function pageMetadata(path: string, title: string, description: string): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { ...OG_DEFAULTS, url: path, title: fullTitle, description },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: ["/preview.jpg"] },
  };
}
