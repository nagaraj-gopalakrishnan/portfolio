"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";

interface PageTransitionProps {
  children: React.ReactNode;
}

// The first page a visitor lands on renders fully visible (fast first paint
// and LCP); only later client-side navigations play the transition.
let hasNavigated = false;

/**
 * Light fade-up when moving between pages.
 */
const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const animateIn = hasNavigated;

  useEffect(() => {
    hasNavigated = true;
  }, []);

  return (
    <motion.div
      initial={animateIn ? { opacity: 0, y: 12 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
