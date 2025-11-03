import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Layout,
  Database,
  Cloud,
  Shield,
  TrendingUp,
  Boxes,
  Server,
} from "lucide-react";

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: <Code2 className="text-primary" size={32} />,
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Python", level: 88 },
        { name: "PHP", level: 85 },
        { name: "C#", level: 75 },
        { name: "SQL", level: 85 },
      ],
    },
    {
      icon: <Layout className="text-primary" size={32} />,
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
      icon: <Server className="text-primary" size={32} />,
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
      icon: <Database className="text-primary" size={32} />,
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
      icon: <Cloud className="text-primary" size={32} />,
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
      icon: <Boxes className="text-primary" size={32} />,
      title: "CMS & E-Commerce",
      skills: [
        { name: "WordPress", level: 90 },
        { name: "Shopify", level: 85 },
        { name: "Shopware", level: 80 },
        { name: "WooCommerce", level: 88 },
      ],
    },
    {
      icon: <TrendingUp className="text-primary" size={32} />,
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
      icon: <Shield className="text-primary" size={32} />,
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

  return (
    <section className="min-h-screen px-6 py-20 flex items-center justify-center">
      <div className="max-w-7xl w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency across various
            technologies and tools.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="bg-gray-800 p-6 rounded-lg border border-secondary hover:border-primary transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300 text-sm">{skill.name}</span>
                      <span className="text-primary text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ delay: 0.2 + index * 0.05, duration: 1, ease: "easeOut" }}
                        className="bg-primary h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-gray-800 p-8 rounded-lg border border-secondary"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            Tools & <span className="text-primary">Technologies</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.05, duration: 0.3 }}
                className="bg-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-primary hover:text-background transition-colors cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-6 bg-gray-800 p-8 rounded-lg border border-secondary"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            Soft <span className="text-primary">Skills</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Problem Solving",
              "Project Management",
              "Team Collaboration",
              "Attention to Detail",
              "Excellent Communication",
              "Time Management",
              "Organizational Skills",
              "Agile/Scrum",
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + index * 0.05, duration: 0.4 }}
                className="flex items-center gap-2 text-gray-300"
              >
                <span className="text-primary">✓</span>
                <span>{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;