import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  Warehouse,
  Users,
  TrendingUp,
  Package,
  Globe,
} from "lucide-react";

// ✅ Import all images properly so Vite handles them correctly
import ecommercePlatform from "../../assets/projects/ecommerce-platform.png";
import wms from "../../assets/projects/wms.png";
import hrms from "../../assets/projects/hrms.png";
import projectManagement from "../../assets/projects/project-management.png";
import logistics from "../../assets/projects/logistics.png";
import inventory from "../../assets/projects/inventory.png";
import corporate from "../../assets/projects/corporate.png";
import solar from "../../assets/projects/solar.png";

const Projects: React.FC = () => {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platforms",
      category: "Web Application",
      description:
        "Designed web architecture for multiple e-commerce platforms with AI-powered recommendations, increasing conversion by 32%.",
      tech: [
        "Django",
        "Laravel",
        "React.js",
        "Next.js",
        "MySQL",
        "WordPress",
        "Shopify",
        "AI",
      ],
      icon: <ShoppingCart className="text-primary" size={24} />,
      achievements: [
        "32% increase in conversion rate",
        "55% page load improvement",
        "70% organic ranking improvement",
      ],
      image: ecommercePlatform,
    },
    {
      id: 2,
      title: "Warehouse Management System",
      category: "Enterprise",
      description:
        "Comprehensive WMS with SAP EWM integration for enterprise warehouse operations managing 10,000+ SKUs.",
      tech: ["React.js", "Node.js", "MS SQL Server", "PHP", "SAP EWM", "Hardware Integration"],
      icon: <Warehouse className="text-primary" size={24} />,
      achievements: [
        "60% reduction in processing time",
        "99.7% picking accuracy",
        "10,000+ SKUs managed",
      ],
      image: wms,
    },
    {
      id: 3,
      title: "HRMS with ChatGPT AI",
      category: "AI Integration",
      description:
        "Human Resource Management System with ChatGPT AI integration, reducing hiring time by 45%.",
      tech: ["PHP", "Python", "ChatGPT AI", "MS SQL Server"],
      icon: <Users className="text-primary" size={24} />,
      achievements: [
        "45% reduction in hiring time",
        "Automated payroll processing",
        "Biometric integration",
      ],
      image: hrms,
    },
    {
      id: 4,
      title: "Project Management Software",
      category: "Web Application",
      description:
        "Built project management platform for 50+ team members with Kanban boards, Gantt charts, and time tracking.",
      tech: ["Laravel", "MySQL", "REST API"],
      icon: <TrendingUp className="text-primary" size={24} />,
      achievements: [
        "50+ team members supported",
        "Multiple integrations",
        "Real-time collaboration",
      ],
      image: projectManagement,
    },
    {
      id: 5,
      title: "Logistics Application",
      category: "Web Application",
      description:
        "Real-time vehicle tracking and route optimization system using Google Maps API with TypeScript.",
      tech: ["React.js", "TypeScript", "Node.js", "MySQL", "Google Maps API"],
      icon: <Package className="text-primary" size={24} />,
      achievements: [
        "Real-time tracking",
        "40% reduction in runtime errors",
        "Route optimization",
      ],
      image: logistics,
    },
    {
      id: 6,
      title: "Inventory Management System",
      category: "Web Application",
      description:
        "Cloud-based inventory system with automated reorder notifications and purchase order management.",
      tech: ["React.js", "Node.js", "MongoDB"],
      icon: <Package className="text-primary" size={24} />,
      achievements: [
        "Automated reorder notifications",
        "Multi-platform integration",
        "Mobile-responsive",
      ],
      image: inventory,
    },
    {
      id: 7,
      title: "Corporate Websites",
      category: "Web Design",
      description:
        "Designed 10+ corporate websites with modern web design using WordPress and Laravel.",
      tech: ["WordPress", "Laravel", "React.js", "Next.js", "PHP", "SEO"],
      icon: <Globe className="text-primary" size={24} />,
      achievements: [
        "10+ corporate websites",
        "60% SEO improvement",
        "Custom themes & plugins",
      ],
      image: corporate,
    },
    {
      id: 8,
      title: "Solar Energy Management",
      category: "Enterprise",
      description:
        "Enterprise web applications for solar energy management with real-time monitoring dashboards.",
      tech: ["React.js", "Next.js", "Django", "Laravel", "AWS/GCP"],
      icon: <TrendingUp className="text-primary" size={24} />,
      achievements: [
        "Real-time monitoring",
        "Energy analytics",
        "Cloud infrastructure",
      ],
      image: solar,
    },
  ];

  const categories = ["All", "Web Application", "Enterprise", "AI Integration", "Web Design"];
  const filteredProjects = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="min-h-screen px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A showcase of enterprise applications and solutions I've built across various industries
            including E-Commerce, HRMS, WMS, Solar Energy, and Logistics.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === category
                  ? "bg-primary text-background"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="bg-gray-800 rounded-lg border border-secondary hover:border-primary transition-all overflow-hidden group hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48 bg-gray-900 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain object-center transition-all duration-500 p-4"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs text-gray-300">{project.category}</span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  {project.icon}
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-400 text-sm mb-3 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                <div className="mb-3">
                  <ul className="space-y-1">
                    {project.achievements.slice(0, 2).map((achievement, i) => (
                      <li key={i} className="text-xs text-gray-400 flex items-start gap-1">
                        <span className="text-primary mt-0.5">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-gray-700/50 px-2 py-1 rounded text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="text-xs bg-gray-700/50 px-2 py-1 rounded text-gray-300">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
