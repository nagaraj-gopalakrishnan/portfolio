import type { Metadata } from "next";
import { pageMetadata } from "../site";
import About from "../../components/About";

export const metadata: Metadata = pageMetadata(
  "/about/",
  "About",
  "About Nagaraj Gopalakrishnan — Full Stack & Mobile Developer based in Dubai, UAE, with 5+ years building enterprise web and cross-platform mobile apps. Education, certifications and experience.",
);

export default function AboutPage() {
  return <About />;
}
