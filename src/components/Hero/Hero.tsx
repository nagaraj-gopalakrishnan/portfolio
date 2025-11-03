import React from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { Laptop, Shield, Network, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

import nagarajImage from '../../assets/Nagaraj.jpg';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center text-center min-h-screen px-6"
    >
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-primary shadow-lg overflow-hidden flex items-center justify-center bg-gray-800"
      >
        <img
          src={nagarajImage}
          alt="Nagaraj G"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mt-6"
      >
        Hi, I'm <span className="text-primary">Nagaraj</span>
      </motion.h1>

      {/* Typing Effect for Roles */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-xl md:text-2xl font-medium text-white mt-3 h-10"
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
        className="flex gap-6 justify-center mt-5 text-primary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <motion.div whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 300 }}>
          <Laptop size={28} />
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 300 }}>
          <Shield size={28} />
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 300 }}>
          <Network size={28} />
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 300 }}>
          <BarChart3 size={28} />
        </motion.div>
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="text-gray-400 mt-5 max-w-2xl text-base md:text-lg leading-relaxed"
      >
        Passionate about building modern, user-focused web applications,
        exploring the world of ethical hacking and cybersecurity, and bridging
        technology, strategy, and creativity to deliver impactful digital
        solutions.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="flex gap-4 mt-8"
      >
        <Link
          to="/projects"
          className="bg-primary text-background font-semibold px-6 py-3 rounded-full shadow-md hover:bg-yellow-400 transition"
        >
          View My Work
        </Link>
        <Link
          to="/contact"
          className="border border-primary text-primary px-6 py-3 rounded-full hover:bg-primary hover:text-background transition"
        >
          Contact Me
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;