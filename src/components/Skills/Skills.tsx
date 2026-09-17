import React from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import {
  Code2,
  Layout,
  Database,
  Cloud,
  Shield,
  TrendingUp,
  Boxes,
  Server,
  Smartphone,
} from "lucide-react";

/* ---------- animation presets ---------- */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: <Code2 className="text-primary" size={26} />,
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Python", level: 88 },
        { name: "Dart", level: 88 },
        { name: "Kotlin", level: 80 },
        { name: "Swift", level: 78 },
        { name: "PHP", level: 85 },
        { name: "SQL", level: 85 },
      ],
    },
    {
      icon: <Smartphone className="text-primary" size={26} />,
      title: "Mobile App Development",
      skills: [
        { name: "Flutter", level: 90 },
        { name: "React Native", level: 90 },
        { name: "Android (Jetpack)", level: 85 },
        { name: "iOS (SwiftUI)", level: 80 },
        { name: "Firebase", level: 88 },
        { name: "Push Notifications", level: 85 },
      ],
    },
    {
      icon: <Layout className="text-primary" size={26} />,
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "HTML5 & CSS3", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "jQuery", level: 85 },
        { name: "Bootstrap", level: 88 },
      ],
    },
    {
      icon: <Server className="text-primary" size={26} />,
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Django", level: 85 },
        { name: "Laravel", level: 88 },
        { name: "Express.js", level: 90 },
        { name: "REST API", level: 92 },
        { name: "CodeIgniter", level: 80 },
      ],
    },
    {
      icon: <Database className="text-primary" size={26} />,
      title: "Databases",
      skills: [
        { name: "MySQL", level: 90 },
        { name: "MongoDB", level: 85 },
        { name: "MS SQL Server", level: 88 },
        { name: "SQLite", level: 80 },
        { name: "PostgreSQL", level: 75 },
      ],
    },
    {
      icon: <Cloud className="text-primary" size={26} />,
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: 85 },
        { name: "Google Cloud", level: 82 },
        { name: "Docker", level: 80 },
        { name: "CI/CD", level: 78 },
        { name: "Git", level: 92 },
        { name: "IIS Server", level: 85 },
      ],
    },
    {
      icon: <Boxes className="text-primary" size={26} />,
      title: "CMS & E-Commerce",
      skills: [
        { name: "WordPress", level: 90 },
        { name: "Shopify", level: 85 },
        { name: "Shopware", level: 80 },
        { name: "WooCommerce", level: 88 },
      ],
    },
    {
      icon: <TrendingUp className="text-primary" size={26} />,
      title: "AI & Digital Marketing",
      skills: [
        { name: "ChatGPT Integration", level: 88 },
        { name: "OpenAI API", level: 85 },
        { name: "SEO Optimization", level: 90 },
        { name: "Google Analytics", level: 85 },
        { name: "Google Search Console", level: 88 },
      ],
    },
    {
      icon: <Shield className="text-primary" size={26} />,
      title: "Security & Networking",
      skills: [
        { name: "CCNA", level: 85 },
        { name: "Cloudflare", level: 82 },
        { name: "SSL/TLS", level: 85 },
        { name: "Network Security", level: 80 },
      ],
    },
  ];

  const tools = [
    "VS Code",
    "Android Studio",
    "Xcode",
    "Flutter",
    "Firebase",
    "Git & GitHub",
    "Postman",
    "Figma",
    "Docker",
    "AWS Console",
    "Google Cloud Console",
    "Jira",
    "Slack",
    "Trello",
  ];

  // Mouse-driven spotlight
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
        className="pointer-events-none absolute -top-40 -left-20 h-[32rem] w-[32rem] rounded-full bg-primary/15 blur-[130px]"
        animate={{ y: [0, 40, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-0 -right-24 h-[30rem] w-[30rem] rounded-full bg-sky-500/10 blur-[130px]"
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

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="mb-16 text-center"
        >
          <motion.span
            variants={fadeUp}
            className="text-xs md:text-sm uppercase tracking-[0.5em] text-primary/80"
          >
            What I Work With
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-3 text-4xl md:text-6xl font-bold tracking-tight"
          >
            My{" "}
            <span className="bg-gradient-to-r from-primary via-yellow-200 to-primary bg-clip-text text-transparent animate-gradient">
              Skills
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-3xl text-lg text-gray-400"
          >
            A comprehensive overview of my technical expertise across web, mobile,
            cloud, and AI — spanning full-stack development and cross-platform
            Android &amp; iOS apps.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition-colors hover:border-primary/50"
            >
              <span className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(400px_circle_at_50%_0%,rgba(252,213,53,0.12),transparent_70%)]" />
              <div className="mb-5 flex items-center gap-3">
                <span className="inline-flex rounded-xl border border-white/10 bg-white/5 p-2.5">
                  {category.icon}
                </span>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-1 flex justify-between">
                      <span className="text-sm text-gray-300">{skill.name}</span>
                      <span className="text-sm font-semibold text-primary">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                        className="h-2 rounded-full bg-gradient-to-r from-yellow-300 to-primary shadow-[0_0_12px_-2px_rgba(252,213,53,0.8)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md"
        >
          <span className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-primary/10 blur-3xl" />
          <h3 className="mb-6 text-center text-2xl font-bold">
            Tools &amp; <span className="text-primary">Technologies</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool) => (
              <motion.span
                key={tool}
                whileHover={{ scale: 1.08, y: -2 }}
                className="cursor-default rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur-sm transition-colors hover:border-primary/60 hover:bg-primary hover:text-background"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="relative mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md"
        >
          <span className="pointer-events-none absolute -left-16 -bottom-16 h-52 w-52 rounded-full bg-sky-500/10 blur-3xl" />
          <h3 className="mb-6 text-center text-2xl font-bold">
            Soft <span className="text-primary">Skills</span>
          </h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              "Problem Solving",
              "Project Management",
              "Team Collaboration",
              "Attention to Detail",
              "Excellent Communication",
              "Time Management",
              "Organizational Skills",
              "Agile/Scrum",
            ].map((skill) => (
              <div key={skill} className="flex items-center gap-2 text-gray-300">
                <span className="text-primary">✓</span>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
