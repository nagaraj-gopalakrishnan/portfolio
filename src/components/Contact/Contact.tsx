import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, FileDown } from "lucide-react";


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
      value: "Burjuman, Dubai, UAE",
      link: "#",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/universe-nagaraj",
      link: "https://linkedin.com/in/universe-nagaraj",
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
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Have a project in mind or want to discuss opportunities? Feel free to reach out. I'm
            always open to discussing new projects, creative ideas, or opportunities to be part of
            your vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I'm currently based in Dubai, UAE with an Employment Visa. Open to full-time
              opportunities, freelance projects, and collaborations. Let's build something amazing
              together!
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    target={info.link.startsWith("http") ? "_blank" : undefined}
                    rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg border border-secondary hover:border-primary transition-all group"
                  >
                    <div className="w-12 h-12 flex items-center justify-center bg-gray-700 rounded-lg transition-all group-hover:bg-primary/20">
                      <Icon className="text-primary group-hover:text-primary transition-colors" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{info.title}</h4>
                      <p className="text-gray-400 text-sm">{info.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-8 bg-gray-800 p-6 rounded-lg border border-secondary"
            >
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                Available for Work
              </h4>
              <p className="text-gray-400 text-sm">
                Open to full-time opportunities and freelance projects. Specializing in Full Stack
                Development, AI Integration, and Enterprise Solutions.
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Resume Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-gray-800 p-8 rounded-lg border border-secondary flex flex-col items-center justify-center"
          >
            <h3 className="text-2xl font-bold mb-6">My Resume</h3>

            {/* Resume Preview */}
            <div className="w-full h-[600px] bg-gray-900 border border-gray-700 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
              <iframe
                src="/resume.pdf"
                className="w-full h-full"
                title="Nagaraj Resume"
              />
            </div>

            {/* Download Button */}
            <a
              href="/resume.pdf"
              download="Nagaraj_Resume.pdf"
              className="mt-6 inline-flex items-center gap-2 bg-primary text-background font-semibold px-6 py-3 rounded-lg hover:bg-yellow-400 transition-colors"
            >
              <FileDown size={20} />
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
