import type { Metadata } from "next";
import { pageMetadata } from "../site";
import Contact from "../../components/Contact";

export const metadata: Metadata = pageMetadata(
  "/contact/",
  "Contact",
  "Contact Nagaraj Gopalakrishnan, Full Stack & Mobile App Developer in Dubai, UAE. Open to full-time roles and freelance projects. Download the resume.",
);

export default function ContactPage() {
  return <Contact />;
}
