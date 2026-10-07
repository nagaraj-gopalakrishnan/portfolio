import type { Metadata } from "next";
import { pageMetadata } from "../site";
import Skills from "../../components/Skills";

export const metadata: Metadata = pageMetadata(
  "/skills/",
  "Skills",
  "Skills of Nagaraj Gopalakrishnan: React, Next.js, Flutter, React Native, Node.js, Laravel, Django, AWS, Google Cloud, Docker and AI integration.",
);

export default function SkillsPage() {
  return <Skills />;
}
