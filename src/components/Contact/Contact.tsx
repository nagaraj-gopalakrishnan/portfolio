import React from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, FileDown } from "lucide-react";

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
  show: { transition: { staggerChildren: 0.1 } },
};

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "universe.nagaraj@gmail.com",
      link: "mailto:universe.nagaraj@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+971-55-1246-787",
      link: "tel:+971551246787",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Dubai, UAE",
      link: "#",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/nagaraj-gopalakrishnan",
      link: "https://www.linkedin.com/in/nagaraj-gopalakrishnan/",
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

      <div className="relative z-10 mx-auto w-full max-w-6xl">
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
            Let's Connect
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-3 text-4xl md:text-6xl font-bold tracking-tight"
          >
            Get In{" "}
            <span className="bg-gradient-to-r from-primary via-yellow-200 to-primary bg-clip-text text-transparent animate-gradient">
              Touch
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-3xl text-lg text-gray-400"
          >
            Have a project in mind or want to discuss opportunities? I'm always
            open to new projects, creative ideas, or being part of your vision.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left: Contact Information */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.h3 variants={fadeUp} className="mb-3 text-2xl font-bold">
              Contact Information
            </motion.h3>
            <motion.p
              variants={fadeUp}
              className="mb-8 leading-relaxed text-gray-400"
            >
              Currently based in Dubai, UAE with an Employment Visa. Open to
              full-time opportunities, freelance projects, and collaborations.
              Let's build something amazing together!
            </motion.p>

            <div className="space-y-4">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    target={info.link.startsWith("http") ? "_blank" : undefined}
                    rel={
                      info.link.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    variants={fadeUp}
                    whileHover={{ x: 6 }}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-md transition-colors hover:border-primary/50"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all group-hover:bg-primary/15 group-hover:shadow-[0_0_20px_-6px_rgba(252,213,53,0.8)]">
                      <Icon className="text-primary" size={22} />
                    </div>
                    <div>
                      <h4 className="mb-0.5 font-semibold">{info.title}</h4>
                      <p className="text-sm text-gray-400">{info.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Availability */}
            <motion.div
              variants={fadeUp}
              className="relative mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md"
            >
              <span className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-green-500/10 blur-3xl" />
              <h4 className="mb-3 flex items-center gap-2 font-bold">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
                </span>
                Available for Work
              </h4>
              <p className="text-sm text-gray-400">
                Open to full-time and freelance projects. Specializing in Full
                Stack &amp; Mobile Development, AI Integration, and Enterprise
                Solutions.
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Resume Preview */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md"
          >
            <span className="pointer-events-none absolute -left-16 -bottom-16 h-52 w-52 rounded-full bg-primary/10 blur-3xl" />
            <h3 className="mb-6 text-2xl font-bold">My Resume</h3>

            <div className="h-[600px] w-full overflow-hidden rounded-xl border border-white/10 bg-gray-900 shadow-2xl shadow-black/40">
              <iframe
                src="/resume.pdf"
                className="h-full w-full"
                title="Nagaraj Resume"
              />
            </div>

            <a
              href="/resume.pdf"
              download="Nagaraj_Resume.pdf"
              className="group relative mt-6 inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-7 py-3 font-semibold text-background shadow-[0_0_30px_-8px_rgba(252,213,53,0.7)] transition hover:shadow-[0_0_40px_-6px_rgba(252,213,53,0.9)]"
            >
              <FileDown size={20} className="relative z-10" />
              <span className="relative z-10">Download Resume</span>
              <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-500 group-hover:translate-x-full" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
