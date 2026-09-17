import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import {
  LineChart,
  Fingerprint,
  ClipboardCheck,
  FileSpreadsheet,
  Radar,
  LayoutGrid,
  CalendarDays,
  Receipt,
  Wallet,
  Store,
  ExternalLink,
  Lock,
  ShoppingCart,
  Warehouse,
  Users,
  TrendingUp,
  Package,
  Boxes,
  Globe,
  Sun,
} from "lucide-react";

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  tech: string[];
  icon: React.ReactNode;
  status: string;
  live: boolean;
  isPrivate?: boolean;
  link?: string;
  linkLabel?: string;
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const Projects: React.FC = () => {
  const [filter, setFilter] = useState("All");

  const projects: Project[] = [
    {
      id: 1,
      title: "Nalla Neram — Tamil Daily",
      category: "Mobile App",
      description:
        "A Tamil cultural companion app for daily Panchangam timings, Thirukkural, gold price calculator, land unit converter, and festival calendar — built for Tamil-speaking users in Tamil Nadu and globally.",
      tech: ["Flutter", "Dart", "AdMob", "Play Billing", "Android AAB"],
      icon: <CalendarDays className="text-primary" size={24} />,
      status: "Published on Google Play Store",
      live: true,
    },
    {
      id: 2,
      title: "SlipGen — Payslip Generator",
      category: "Mobile App",
      description:
        "A lightweight Android app for SME employers and freelancers to generate professional PDF payslips on the go, with a freemium one-time unlock model.",
      tech: ["Flutter", "Dart", "Laravel", "MySQL", "Firebase", "Play Billing"],
      icon: <Receipt className="text-primary" size={24} />,
      status: "Submitted · approval pending",
      live: false,
    },
    {
      id: 3,
      title: "Dhanio — Fintech Super App",
      category: "SaaS & Fintech",
      description:
        "A full-stack fintech super app offering digital wallets, fixed deposits, BBPS bill payments, scratch-card rewards, and a referral program — targeting Pan-India and NRI users.",
      tech: ["Laravel 11", "Next.js", "MySQL", "Redis", "Docker", "Cashfree"],
      icon: <Wallet className="text-primary" size={24} />,
      status: "Live · KYC activated",
      live: true,
      link: "https://dhanio.co.in",
      linkLabel: "dhanio.co.in",
    },
    {
      id: 4,
      title: "ShopBilling — SaaS Billing Platform",
      category: "SaaS & Fintech",
      description:
        "A multi-tenant SaaS billing and inventory management platform built for small retailers and kirana shops, with tiered subscription pricing.",
      tech: ["Laravel 12", "MySQL", "Razorpay", "Multi-tenancy", "Nginx"],
      icon: <Store className="text-primary" size={24} />,
      status: "Live in production",
      live: true,
      link: "https://shopbill.in",
      linkLabel: "shopbill.in",
    },
    {
      id: 5,
      title: "Campaign Analytics & Media Planning Platform",
      category: "AI Integration",
      description:
        "A media campaign analytics and planning platform for enterprise media teams to manage cross-platform ad campaigns, track KPIs, and generate AI-assisted commentary and optimization insights.",
      tech: ["Django", "Angular", "PostgreSQL", "BigQuery", "SendGrid", "Docker"],
      icon: <LineChart className="text-primary" size={24} />,
      status: "Live in production",
      live: true,
      isPrivate: true,
    },
    {
      id: 6,
      title: "Media Intelligence & Content Hub",
      category: "AI Integration",
      description:
        "A secure, enterprise-grade media monitoring and content management hub for a government tourism authority, with SSO, large-scale analytics pipelines, and automated data-quality reporting.",
      tech: ["Django", "Next.js", "PostgreSQL", "BigQuery", "Celery", "SAML SSO"],
      icon: <Radar className="text-primary" size={24} />,
      status: "Live in production",
      live: true,
      isPrivate: true,
    },
    {
      id: 7,
      title: "HR Attendance Sync Dashboard",
      category: "Enterprise Tool",
      description:
        "A Python sync-automation dashboard that bridges biometric attendance hardware with a cloud HR platform, with real-time sync status, error reporting, and a local web UI.",
      tech: ["Python", "Flask", "PostgreSQL", "SQLite", "OAuth2", "REST API"],
      icon: <Fingerprint className="text-primary" size={24} />,
      status: "Live in production",
      live: true,
      isPrivate: true,
    },
    {
      id: 8,
      title: "Agency Performance Evaluation Platform",
      category: "Enterprise Tool",
      description:
        "A web platform that manages structured mutual evaluation surveys between two parties, computes weighted scores, and auto-generates branded PowerPoint evaluation reports.",
      tech: ["Laravel", "PHP", "MySQL", "PhpPresentation", "Docker", "Nginx"],
      icon: <ClipboardCheck className="text-primary" size={24} />,
      status: "Live in production",
      live: true,
      isPrivate: true,
    },
    {
      id: 9,
      title: "Pitch Comparison & Master File Generator",
      category: "Enterprise Tool",
      description:
        "A pitch management tool that consolidates multi-party media proposals into a unified Excel comparison master file, streamlining the pitch evaluation process for media teams.",
      tech: ["Laravel", "PHP", "MySQL", "PhpSpreadsheet", "Nginx"],
      icon: <FileSpreadsheet className="text-primary" size={24} />,
      status: "Live in production",
      live: true,
      isPrivate: true,
    },
    {
      id: 10,
      title: "Unified Agency Workspace Platform",
      category: "Enterprise Tool",
      description:
        "A centralized internal workspace that consolidates cross-service tools, client dashboards, and social-data integrations behind single sign-on, with multi-tenant service management.",
      tech: ["Django", "Next.js", "PostgreSQL", "Docker", "PM2", "SAML SSO"],
      icon: <LayoutGrid className="text-primary" size={24} />,
      status: "Live in production",
      live: true,
      isPrivate: true,
    },
    {
      id: 11,
      title: "E-Commerce Platforms",
      category: "Web Application",
      description:
        "Web architecture and front-ends for multiple e-commerce platforms with AI-powered product recommendations and SEO-optimized storefronts.",
      tech: ["Django", "Laravel", "React.js", "Next.js", "MySQL", "Shopify"],
      icon: <ShoppingCart className="text-primary" size={24} />,
      status: "Delivered",
      live: true,
    },
    {
      id: 12,
      title: "Warehouse Management System",
      category: "Enterprise Tool",
      description:
        "A comprehensive WMS with SAP EWM integration and hardware connectivity for enterprise warehouse operations and high-volume SKU management.",
      tech: ["React.js", "Node.js", "MS SQL Server", "PHP", "SAP EWM"],
      icon: <Warehouse className="text-primary" size={24} />,
      status: "Delivered",
      live: true,
    },
    {
      id: 13,
      title: "HRMS with ChatGPT AI",
      category: "AI Integration",
      description:
        "A Human Resource Management System with ChatGPT AI integration, automated payroll processing, and biometric attendance integration.",
      tech: ["PHP", "Python", "ChatGPT AI", "MS SQL Server"],
      icon: <Users className="text-primary" size={24} />,
      status: "Delivered",
      live: true,
    },
    {
      id: 14,
      title: "Project Management Software",
      category: "Web Application",
      description:
        "A project management platform with Kanban boards, Gantt charts, time tracking, and real-time collaboration for distributed teams.",
      tech: ["Laravel", "MySQL", "REST API"],
      icon: <TrendingUp className="text-primary" size={24} />,
      status: "Delivered",
      live: true,
    },
    {
      id: 15,
      title: "Logistics Application",
      category: "Web Application",
      description:
        "A real-time vehicle tracking and route optimization system using mapping APIs, built with a type-safe TypeScript front-end.",
      tech: ["React.js", "TypeScript", "Node.js", "MySQL", "Google Maps API"],
      icon: <Package className="text-primary" size={24} />,
      status: "Delivered",
      live: true,
    },
    {
      id: 16,
      title: "Inventory Management System",
      category: "Web Application",
      description:
        "A cloud-based inventory system with automated reorder notifications, purchase-order management, and a mobile-responsive interface.",
      tech: ["React.js", "Node.js", "MongoDB"],
      icon: <Boxes className="text-primary" size={24} />,
      status: "Delivered",
      live: true,
    },
    {
      id: 17,
      title: "Corporate Websites",
      category: "Web Design",
      description:
        "A series of modern, SEO-optimized corporate websites with custom themes and plugins, built on WordPress and Laravel.",
      tech: ["WordPress", "Laravel", "React.js", "Next.js", "PHP", "SEO"],
      icon: <Globe className="text-primary" size={24} />,
      status: "Delivered",
      live: true,
    },
    {
      id: 18,
      title: "Solar Energy Management",
      category: "Enterprise Tool",
      description:
        "Enterprise web applications for solar energy management with real-time monitoring dashboards, energy analytics, and cloud infrastructure.",
      tech: ["React.js", "Next.js", "Django", "Laravel", "AWS/GCP"],
      icon: <Sun className="text-primary" size={24} />,
      status: "Delivered",
      live: true,
    },
  ];

  const categories = [
    "All",
    "Mobile App",
    "SaaS & Fintech",
    "Enterprise Tool",
    "AI Integration",
    "Web Application",
    "Web Design",
  ];
  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  // Mouse spotlight
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 50, damping: 20 });
  const sy = useSpring(my, { stiffness: 50, damping: 20 });
  const spotX = useTransform(sx, [0, 1], ["0%", "100%"]);
  const spotY = useTransform(sy, [0, 1], ["0%", "100%"]);
  const spotlight = useTransform(
    [spotX, spotY],
    ([x, y]) =>
      `radial-gradient(700px circle at ${x} ${y}, rgba(252,213,53,0.08), transparent 60%)`
  );
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen overflow-hidden px-6 py-24"
    >
      {/* ===== cinematic background ===== */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#23272F_0%,_#181A20_55%,_#0E0F13_100%)]" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-[32rem] w-[32rem] rounded-full bg-primary/15 blur-[130px]"
        animate={{ y: [0, 40, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-0 -left-32 h-[30rem] w-[30rem] rounded-full bg-sky-500/10 blur-[130px]"
        animate={{ y: [0, -40, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.15]
          bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]
          bg-[size:60px_60px]
          [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]"
      />
      <motion.div
        aria-hidden
        style={{ background: spotlight }}
        className="pointer-events-none absolute inset-0"
      />
      <div className="hero-grain pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="mb-12 text-center"
        >
          <motion.span
            variants={fadeUp}
            className="text-xs md:text-sm uppercase tracking-[0.5em] text-primary/80"
          >
            Selected Work
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-3 text-4xl md:text-6xl font-bold tracking-tight"
          >
            My{" "}
            <span className="bg-gradient-to-r from-primary via-yellow-200 to-primary bg-clip-text text-transparent animate-gradient">
              Projects
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-3xl text-lg text-gray-400"
          >
            A showcase of products I've shipped — published Flutter apps,
            full-stack fintech &amp; SaaS platforms, and enterprise tools
            spanning analytics, AI integration, and automation.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="mb-12 flex flex-wrap justify-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-md mx-auto w-fit max-w-full">
          {categories.map((category) => {
            const active = filter === category;
            return (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  active ? "text-background" : "text-white/70 hover:text-white"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="project-filter-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-primary shadow-[0_0_20px_-4px_rgba(252,213,53,0.8)]"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -8 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md transition-colors hover:border-primary/50 hover:shadow-[0_20px_60px_-20px_rgba(252,213,53,0.35)]"
              >
                {/* Icon-gradient hero */}
                <div className="relative flex h-44 items-center justify-center overflow-hidden">
                  <div className="relative flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_50%_30%,rgba(252,213,53,0.18),transparent_60%)]">
                    <div className="absolute inset-0 opacity-[0.2] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:28px_28px]" />
                    <motion.div
                      whileHover={{ scale: 1.08, rotate: 3 }}
                      transition={{ type: "spring", stiffness: 300, damping: 18 }}
                      className="grid h-20 w-20 place-items-center rounded-2xl border border-primary/30 bg-background/60 text-primary shadow-[0_0_40px_-8px_rgba(252,213,53,0.6)] backdrop-blur-sm"
                    >
                      {React.isValidElement<{ size?: number }>(project.icon)
                        ? React.cloneElement(project.icon, { size: 40 })
                        : project.icon}
                    </motion.div>
                  </div>
                  <div className="absolute right-3 top-3 rounded-full border border-white/10 bg-black/60 px-3 py-1 backdrop-blur-sm">
                    <span className="text-xs text-gray-200">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-3 flex items-center gap-2">
                    {project.icon}
                    <h3 className="text-base font-bold leading-tight transition-colors group-hover:text-primary">
                      {project.title}
                    </h3>
                  </div>

                  <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-gray-400">
                    {project.description}
                  </p>

                  <div className="mt-auto">
                    {/* Tech pills */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="rounded border border-white/10 bg-white/5 px-2 py-1 text-xs text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="rounded border border-white/10 bg-white/5 px-2 py-1 text-xs text-gray-300">
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Status + link / private badge */}
                    <div className="mt-4 flex items-center justify-between gap-2 border-t border-white/5 pt-3">
                      <span className="inline-flex items-center gap-1.5 text-xs text-gray-400">
                        <span
                          className={`h-2 w-2 rounded-full ${
                            project.live
                              ? "bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]"
                              : "bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]"
                          }`}
                        />
                        {project.status}
                      </span>

                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-primary transition-colors hover:text-yellow-300"
                        >
                          {project.linkLabel ?? "Visit"}
                          <ExternalLink size={13} />
                        </a>
                      ) : project.isPrivate ? (
                        <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-gray-400">
                          <Lock size={11} />
                          Private
                        </span>
                      ) : null}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
