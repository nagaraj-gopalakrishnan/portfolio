import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full bg-background/70 border-b border-secondary text-white z-50 shadow-sm backdrop-blur-lg"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <Link to="/" onClick={() => setIsOpen(false)}>
            <motion.h1
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold tracking-wide cursor-pointer transition-transform select-none"
            >
              <span className="text-primary">N</span>agaraj
            </motion.h1>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-8">
              {menuItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    to={item.path}
                    className={`relative font-medium transition-colors duration-300 
                      ${item.name === activeItem ? "text-primary" : "text-white hover:text-primary"}
                      after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-[2px]
                      after:w-0 after:bg-primary after:transition-all after:duration-300 
                      after:origin-center after:-translate-x-1/2 
                      ${item.name === activeItem ? "after:w-full" : "hover:after:w-full"}`}
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

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

      {/* Overlay Menu for Mobile - Moved outside header */}
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
            {/* Close button inside overlay */}
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