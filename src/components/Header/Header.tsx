import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

const Header: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const getActiveItem = () => {
    const currentPath = location.pathname;
    const activeMenuItem = menuItems.find((item) => item.path === currentPath);
    return activeMenuItem ? activeMenuItem.name : "Home";
  };

  const activeItem = getActiveItem();

  // Shrink / intensify header on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
          ${scrolled ? "bg-background/80 py-3 shadow-lg shadow-black/30" : "bg-background/40 py-4"}
          backdrop-blur-xl`}
      >
        {/* glowing gradient hairline at the bottom */}
        <span className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
          {/* Logo / monogram */}
          <Link to="/" onClick={() => setIsOpen(false)}>
            <motion.div
              whileHover={{ scale: 1.04 }}
              className="flex items-center gap-3 cursor-pointer select-none"
            >
              <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-primary font-bold text-background shadow-[0_0_25px_-6px_rgba(252,213,53,0.9)]">
                N
                <span className="absolute inset-0 -z-10 rounded-xl bg-primary/50 blur-md" />
              </span>
              <span className="text-xl font-bold tracking-wide">
                <span className="text-primary">N</span>agaraj
              </span>
            </motion.div>
          </Link>

          {/* Desktop Menu — glassy pill */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-md">
              {menuItems.map((item) => {
                const active = item.name === activeItem;
                return (
                  <li key={item.name} className="relative">
                    <Link
                      to={item.path}
                      className={`relative block rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300
                        ${active ? "text-background" : "text-white/70 hover:text-white"}`}
                    >
                      {active && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 -z-10 rounded-full bg-primary shadow-[0_0_20px_-4px_rgba(252,213,53,0.8)]"
                          transition={{ type: "spring", stiffness: 400, damping: 32 }}
                        />
                      )}
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right CTA (desktop) */}
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-primary/60 px-5 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-background"
          >
            Let's talk
            <ArrowUpRight size={16} />
          </Link>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-primary transition z-[60]"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.header>

      {/* Overlay Menu for Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-background/98 backdrop-blur-xl flex flex-col items-center justify-center z-[55] md:hidden"
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-white hover:text-primary transition z-[60]"
              aria-label="Close navigation menu"
            >
              <X size={32} />
            </button>

            <motion.nav
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.1, delayChildren: 0.1 },
                },
              }}
              className="flex flex-col items-center justify-center"
            >
              <motion.ul className="space-y-6 text-center">
                {menuItems.map((item) => (
                  <motion.li
                    key={item.name}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-4xl font-bold transition-colors duration-300 block py-2
                        ${item.name === activeItem ? "text-primary" : "text-white hover:text-primary"}`}
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
