import type { Metadata } from "next";
import Hero from "../components/Hero";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return <Hero />;
}
