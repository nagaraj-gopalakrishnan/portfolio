import type { Metadata } from "next";
import Hero from "../components/Hero";
import nagarajImage from "../assets/Nagaraj.jpg";
import { SITE_NAME, SITE_URL } from "./site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

// schema.org data so search engines can show a richer result for the name
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      image: `${SITE_URL}${nagarajImage.src}`,
      jobTitle: "Full Stack & Mobile App Developer",
      email: "mailto:universe.nagaraj@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressCountry: "AE",
      },
      sameAs: ["https://www.linkedin.com/in/nagaraj-gopalakrishnan/"],
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "Anna University" },
        { "@type": "CollegeOrUniversity", name: "Bharathiar University" },
      ],
      knowsAbout: [
        "React",
        "Next.js",
        "Flutter",
        "React Native",
        "Node.js",
        "Laravel",
        "Mobile App Development",
        "AI Integration",
        "AWS",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      publisher: { "@id": `${SITE_URL}/#person` },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />
    </>
  );
}
