import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
  type Variants,
} from "framer-motion";
import {
  Code2,
  Briefcase,
  Award,
  Smartphone,
  MapPin,
  Mail,
  Linkedin,
  Globe,
  GraduationCap,
  BadgeCheck,
} from "lucide-react";

/* ---------- shared animation presets ---------- */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

/* ---------- animated count-up for stats ---------- */
const CountUp: React.FC<{ value: string }> = ({ value }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState("0");

  const target = parseInt(value, 10) || 0;
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v).toString()),
    });
    return () => controls.stop();
  }, [inView, target]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
};

/* ---------- reusable glass card ---------- */
const Card: React.FC<React.PropsWithChildren<{ className?: string }>> = ({
  children,
  className = "",
}) => (
  <motion.div
    variants={fadeUp}
    whileHover={{ y: -6 }}
    transition={{ type: "spring", stiffness: 300, damping: 24 }}
    className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md
      transition-colors hover:border-primary/50 ${className}`}
  >
    {/* hover glow */}
    <span className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(400px_circle_at_var(--x,50%)_0%,rgba(252,213,53,0.12),transparent_70%)]" />
    {children}
  </motion.div>
);

const About: React.FC = () => {
  const stats = [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Completed", value: "45+" },
    { label: "Technologies", value: "35+" },
    { label: "Happy Clients", value: "100+" },
  ];

  const highlights = [
    {
      icon: <Code2 className="text-primary" size={28} />,
      title: "Full Stack Development",
      description:
        "Expert in building enterprise web applications with React.js, Next.js, Django, Laravel, and Node.js. Specialized in scalable architecture and modern web design.",
    },
    {
      icon: <Briefcase className="text-primary" size={28} />,
      title: "Enterprise Solutions",
      description:
        "5+ years building E-Commerce, HRMS, WMS, Solar Energy Management, and Logistics applications. SAP EWM integration specialist.",
    },
    {
      icon: <Smartphone className="text-primary" size={28} />,
      title: "Mobile App Development",
      description:
        "Cross-platform Android & iOS apps built with Flutter and React Native. From pixel-perfect UI to native integrations, push notifications, and App Store / Play Store deployment.",
    },
    {
      icon: <Award className="text-primary" size={28} />,
      title: "AI & Cloud Expertise",
      description:
        "ChatGPT & OpenAI integration expert. Proficient in AWS, Google Cloud, Docker, and CI/CD. CCNA certified with strong cybersecurity foundation.",
    },
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
      {/* cursor spotlight */}
      <motion.div
        aria-hidden
        style={{ background: spotlight }}
        className="pointer-events-none absolute inset-0"
      />
      {/* film grain */}
      <div className="hero-grain pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="mb-20 text-center"
        >
          <motion.span
            variants={fadeUp}
            className="text-xs md:text-sm uppercase tracking-[0.5em] text-primary/80"
          >
            Web &amp; Mobile Developer
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-3 text-4xl md:text-6xl font-bold tracking-tight"
          >
            About{" "}
            <span className="bg-gradient-to-r from-primary via-yellow-200 to-primary bg-clip-text text-transparent animate-gradient">
              Me
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-3xl text-lg text-gray-400"
          >
            Full Stack & Mobile Developer with 5+ years of experience building
            enterprise web and cross-platform mobile applications. Currently
            based in Dubai, UAE, specializing in Flutter & React Native app
            development, AI integration, cloud infrastructure, and modern web
            technologies.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-20 grid grid-cols-2 gap-5 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur-md transition-colors hover:border-primary/50"
            >
              <h3 className="mb-2 text-4xl font-bold text-primary md:text-5xl">
                <CountUp value={stat.value} />
              </h3>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlights */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {highlights.map((item) => (
            <Card key={item.title}>
              <div className="mb-5 inline-flex rounded-xl border border-white/10 bg-white/5 p-3">
                {item.icon}
              </div>
              <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
              <p className="leading-relaxed text-gray-400">{item.description}</p>
            </Card>
          ))}
        </motion.div>

        {/* Professional Summary */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md"
        >
          <span className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
          <h3 className="mb-4 text-2xl font-bold">Professional Summary</h3>
          <p className="mb-6 leading-relaxed text-gray-400">
            Full Stack & Mobile Developer with expertise in web architecture
            design, front-end web development, and cross-platform mobile app
            development. Proficient in JavaScript, TypeScript, Python, PHP, Dart,
            Kotlin, and Swift, with modern frameworks like React.js, Next.js,
            Django, Laravel, Flutter, and React Native. Specialized in native &
            cross-platform Android & iOS app development (Jetpack, SwiftUI,
            Firebase), AI integration (ChatGPT, Gemini), SAP EWM, cloud
            infrastructure (AWS, GCP), and digital marketing.
          </p>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {[
              { icon: <MapPin size={20} />, node: "Dubai, UAE" },
              {
                icon: <Mail size={20} />,
                node: (
                  <a
                    href="mailto:universe.nagaraj@gmail.com"
                    className="transition-colors hover:text-primary"
                  >
                    universe.nagaraj@gmail.com
                  </a>
                ),
              },
              {
                icon: <Linkedin size={20} />,
                node: (
                  <a
                    href="https://www.linkedin.com/in/nagaraj-gopalakrishnan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-primary"
                  >
                    linkedin.com/in/nagaraj-gopalakrishnan
                  </a>
                ),
              },
              { icon: <Globe size={20} />, node: "Employment Visa - Dubai" },
            ].map((row, i) => (
              <div key={i} className="flex items-center gap-3 text-gray-300">
                <span className="text-primary">{row.icon}</span>
                <span>{row.node}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education & Certifications */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {/* Education */}
          <Card>
            <div className="mb-4 flex items-center gap-2 text-primary">
              <GraduationCap size={22} />
              <h3 className="text-xl font-bold">Education</h3>
            </div>
            <div className="space-y-5">
              <div className="border-l-2 border-primary/40 pl-4">
                <h4 className="font-semibold">
                  Master of Computer Application (MCA)
                </h4>
                <p className="text-sm text-gray-400">Anna University, India</p>
                <p className="text-sm text-gray-500">2021 - 2023</p>
              </div>
              <div className="border-l-2 border-primary/40 pl-4">
                <h4 className="font-semibold">
                  Bachelor of Science in Computer Technology
                </h4>
                <p className="text-sm text-gray-400">
                  Bharathiar University, India
                </p>
                <p className="text-sm text-gray-500">2018 - 2021</p>
              </div>
            </div>
          </Card>

          {/* Certifications */}
          <Card>
            <div className="mb-4 flex items-center gap-2 text-primary">
              <BadgeCheck size={22} />
              <h3 className="text-xl font-bold">Certifications</h3>
            </div>
            <ul className="space-y-4">
              {[
                {
                  title: "CCNA - Cisco Certified Network Associate",
                  sub: "Networking & Security",
                },
                {
                  title: "Google Digital Marketing",
                  sub: "SEO, SEM, Analytics",
                },
                {
                  title: "MERN Stack Development - GUVI",
                  sub: "MongoDB, Express.js, React.js, Node.js",
                },
              ].map((c) => (
                <li key={c.title} className="flex items-start gap-3">
                  <span className="mt-1 text-primary">▸</span>
                  <div>
                    <p className="font-semibold">{c.title}</p>
                    <p className="text-sm text-gray-400">{c.sub}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
