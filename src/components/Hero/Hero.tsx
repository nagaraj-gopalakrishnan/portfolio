import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import { ReactTyped } from "react-typed";
import { Laptop, Shield, Network, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

import nagarajImage from "../../assets/Nagaraj.jpg";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18, delayChildren: 0.2 },
  },
};

const reveal: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(12px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
  },
};

const icons = [Laptop, Shield, Network, BarChart3];

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Mouse-driven parallax + spotlight
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });

  // Content tilts/shifts slightly opposite the cursor
  const contentX = useTransform(sx, [0, 1], [18, -18]);
  const contentY = useTransform(sy, [0, 1], [12, -12]);

  // Spotlight position in %
  const spotX = useTransform(sx, [0, 1], ["0%", "100%"]);
  const spotY = useTransform(sy, [0, 1], ["0%", "100%"]);
  const spotlight = useTransform(
    [spotX, spotY],
    ([x, y]) =>
      `radial-gradient(600px circle at ${x} ${y}, rgba(252,213,53,0.10), transparent 65%)`
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 overflow-hidden"
    >
      {/* ===== Cinematic background layers ===== */}
      {/* Base radial wash */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#23272F_0%,_#181A20_55%,_#0E0F13_100%)]" />

      {/* Floating ambient glow orbs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-32 h-[34rem] w-[34rem] rounded-full bg-primary/20 blur-[120px]"
        animate={{ x: [0, 40, 0], y: [0, 30, 0], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-24 h-[30rem] w-[30rem] rounded-full bg-sky-500/15 blur-[130px]"
        animate={{ x: [0, -40, 0], y: [0, -30, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Faint grid, masked to fade toward edges */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.18]
          bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]
          bg-[size:60px_60px]
          [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_72%)]"
      />

      {/* Cursor spotlight */}
      <motion.div
        aria-hidden
        style={{ background: spotlight }}
        className="pointer-events-none absolute inset-0"
      />

      {/* Film grain */}
      <div className="hero-grain pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay" />

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.7)_100%)]" />

      {/* ===== Foreground content ===== */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ x: contentX, y: contentY }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* Profile Image with glow ring */}
        <motion.div variants={reveal} className="relative">
          <motion.span
            aria-hidden
            className="absolute inset-0 -z-10 rounded-full bg-primary/40 blur-2xl"
            animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.85, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-primary/80 shadow-[0_0_60px_-12px_rgba(252,213,53,0.6)] overflow-hidden bg-gray-800">
            <img
              src={nagarajImage}
              alt="Nagaraj G"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Eyebrow */}
        <motion.span
          variants={reveal}
          className="mt-7 text-xs md:text-sm uppercase tracking-[0.5em] text-primary/80"
        >
          Portfolio
        </motion.span>

        {/* Name */}
        <motion.h1
          variants={reveal}
          className="text-4xl md:text-6xl font-bold mt-3 tracking-tight"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-primary via-yellow-200 to-primary bg-clip-text text-transparent animate-gradient">
            Nagaraj
          </span>
        </motion.h1>

        {/* Typing Effect for Roles */}
        <motion.h2
          variants={reveal}
          className="text-xl md:text-3xl font-medium text-white/90 mt-4 h-10"
        >
          I'm a{" "}
          <span className="text-primary">
            <ReactTyped
              strings={[
                "Full Stack Developer",
                "Cybersecurity Enthusiast",
                "Networking Engineer",
                "Digital Marketing Strategist",
              ]}
              typeSpeed={80}
              backSpeed={40}
              loop
            />
          </span>
        </motion.h2>

        {/* Professional Icons */}
        <motion.div
          variants={reveal}
          className="flex gap-6 justify-center mt-6 text-primary"
        >
          {icons.map((Icon, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.25, y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm"
            >
              <Icon size={26} />
            </motion.div>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          variants={reveal}
          className="text-gray-400 mt-7 max-w-2xl text-base md:text-lg leading-relaxed"
        >
          Passionate about building modern, user-focused web applications,
          exploring the world of ethical hacking and cybersecurity, and bridging
          technology, strategy, and creativity to deliver impactful digital
          solutions.
        </motion.p>

        {/* Buttons */}
        <motion.div variants={reveal} className="flex gap-4 mt-9">
          <Link
            to="/projects"
            className="group relative overflow-hidden bg-primary text-background font-semibold px-7 py-3 rounded-full shadow-[0_0_30px_-8px_rgba(252,213,53,0.7)] transition hover:shadow-[0_0_40px_-6px_rgba(252,213,53,0.9)]"
          >
            <span className="relative z-10">View My Work</span>
            <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-500 group-hover:translate-x-full" />
          </Link>
          <Link
            to="/contact"
            className="border border-primary/70 text-primary px-7 py-3 rounded-full backdrop-blur-sm transition hover:bg-primary hover:text-background"
          >
            Contact Me
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
