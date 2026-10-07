import type { Metadata } from "next";
import { pageMetadata } from "../site";
import About from "../../components/About";

export const metadata: Metadata = pageMetadata(
  "/about/",
  "About",
  "Nagaraj Gopalakrishnan, Full Stack & Mobile Developer in Dubai with 5+ years building enterprise web and cross-platform mobile apps. Education & certifications.",
);

export default function AboutPage() {
  return <About />;
}
