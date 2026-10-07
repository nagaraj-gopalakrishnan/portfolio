import type { Metadata, Viewport } from "next";
import Header from "../components/Header";
import { OG_DEFAULTS, SITE_NAME, SITE_URL } from "./site";
import "./globals.css";

const description =
  "Full Stack & Mobile App Developer in Dubai building Flutter & React Native apps plus fintech, SaaS and enterprise web platforms with React, Next.js and Laravel.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Full Stack & Mobile App Developer`,
    template: `%s | ${SITE_NAME}`,
  },
  description,
  keywords: [
    "Nagaraj Gopalakrishnan",
    "Full Stack Developer Dubai",
    "Mobile App Developer",
    "Flutter Developer",
    "React Native Developer",
    "Android Developer",
    "iOS Developer",
    "React Developer",
    "Next.js",
    "Node.js",
    "Laravel Developer",
    "Fintech",
    "SaaS",
    "Software Engineer UAE",
  ],
  authors: [{ name: SITE_NAME }],
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
  openGraph: {
    ...OG_DEFAULTS,
    url: "/",
    title: `${SITE_NAME} | Full Stack & Mobile App Developer`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Full Stack & Mobile App Developer`,
    description,
    images: ["/preview.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#181A20",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-white min-h-screen">
        <Header />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
