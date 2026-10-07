import PageTransition from "../components/PageTransition";

// A template re-mounts on every navigation, so each page plays its entry transition
export default function Template({ children }: { children: React.ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}
