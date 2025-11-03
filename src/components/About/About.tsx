import React from "react";
import { motion } from "framer-motion";
import { Code2, Briefcase, Award, MapPin, Mail, Linkedin, Globe } from "lucide-react";

const About: React.FC = () => {
  const stats = [
    { label: "Years Experience", value: "4+" },
    { label: "Projects Completed", value: "30+" },
    { label: "Technologies", value: "25+" },
    { label: "Happy Clients", value: "50+" },
  ];

  const highlights = [
    {
      icon: <Code2 className="text-primary" size={32} />,
      title: "Full Stack Development",
      description:
        "Expert in building enterprise web applications with React.js, Next.js, Django, Laravel, and Node.js. Specialized in scalable architecture and modern web design.",
    },
    {
      icon: <Briefcase className="text-primary" size={32} />,
      title: "Enterprise Solutions",
      description:
        "4+ years building E-Commerce, HRMS, WMS, Solar Energy Management, and Logistics applications. SAP EWM integration specialist.",
    },
    {
      icon: <Award className="text-primary" size={32} />,
      title: "AI & Cloud Expertise",
      description:
        "ChatGPT & OpenAI integration expert. Proficient in AWS, Google Cloud, Docker, and CI/CD. CCNA certified with strong cybersecurity foundation.",
    },
  ];

  return (
    <section className="min-h-screen px-6 py-20 flex items-center justify-center">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Full Stack Developer with 4+ years of experience building enterprise web applications.
            Currently based in Dubai, UAE, specializing in AI integration, cloud infrastructure, and
            modern web technologies.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              className="bg-gray-800 p-6 rounded-lg border border-secondary text-center hover:border-primary transition-colors"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</h3>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
              className="bg-gray-800 p-6 rounded-lg border border-secondary hover:border-primary transition-colors"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Professional Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-gray-800 p-8 rounded-lg border border-secondary"
        >
          <h3 className="text-2xl font-bold mb-4">Professional Summary</h3>
          <p className="text-gray-400 leading-relaxed mb-6">
            Full Stack Developer with expertise in web architecture design, front-end web development,
            and web design. Proficient in JavaScript, TypeScript, Python, PHP, and modern frameworks
            like React.js, Next.js, Django, and Laravel. Specialized in AI integration (ChatGPT,
            Gemini), SAP EWM, cloud infrastructure (AWS, GCP), and digital marketing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 text-gray-300">
              <MapPin className="text-primary" size={20} />
              <span>Burjuman, Dubai, UAE</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Mail className="text-primary" size={20} />
              <a
                href="mailto:universe.nagaraj@gmail.com"
                className="hover:text-primary transition-colors"
              >
                universe.nagaraj@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Linkedin className="text-primary" size={20} />
              <a
                href="https://linkedin.com/in/universe-nagaraj"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                linkedin.com/in/universe-nagaraj
              </a>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Globe className="text-primary" size={20} />
              <span>Employment Visa - Dubai</span>
            </div>
          </div>
        </motion.div>

        {/* Education & Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6"
        >
          {/* Education */}
          <div className="bg-gray-800 p-6 rounded-lg border border-secondary">
            <h3 className="text-xl font-bold mb-4 text-primary">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Master of Computer Application (MCA)</h4>
                <p className="text-gray-400 text-sm">Anna University, India</p>
                <p className="text-gray-500 text-sm">2021 - 2023</p>
              </div>
              <div>
                <h4 className="font-semibold">Bachelor of Science in Computer Technology</h4>
                <p className="text-gray-400 text-sm">Bharathiar University, India</p>
                <p className="text-gray-500 text-sm">2018 - 2021</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-gray-800 p-6 rounded-lg border border-secondary">
            <h3 className="text-xl font-bold mb-4 text-primary">Certifications</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">▸</span>
                <div>
                  <p className="font-semibold">CCNA - Cisco Certified Network Associate</p>
                  <p className="text-gray-400 text-sm">Networking & Security</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">▸</span>
                <div>
                  <p className="font-semibold">Google Digital Marketing</p>
                  <p className="text-gray-400 text-sm">SEO, SEM, Analytics</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">▸</span>
                <div>
                  <p className="font-semibold">MERN Stack Development - GUVI</p>
                  <p className="text-gray-400 text-sm">MongoDB, Express.js, React.js, Node.js</p>
                </div>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;