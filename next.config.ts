import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build to plain static HTML in out/ so Netlify can serve every page directly
  output: "export",
  // Emit about/index.html etc. so every host resolves /about/ unambiguously
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
