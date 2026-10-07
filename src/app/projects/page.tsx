import type { Metadata } from "next";
import { pageMetadata } from "../site";
import Projects from "../../components/Projects";

export const metadata: Metadata = pageMetadata(
  "/projects/",
  "Projects",
  "Projects by Nagaraj Gopalakrishnan: published Flutter apps, fintech & SaaS platforms, and enterprise tools for analytics, AI integration and automation.",
);

export default function ProjectsPage() {
  return <Projects />;
}
