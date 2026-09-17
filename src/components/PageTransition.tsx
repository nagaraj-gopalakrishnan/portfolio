import React from "react";
import { motion } from "framer-motion";

interface PageTransitionProps {
  children: React.ReactNode;
}

/**
 * Cinematic cross-dissolve:
 * the outgoing page fades + blurs while gently zooming forward,
 * the incoming page fades + un-blurs in from slightly behind.
 */
const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const variants = {
    initial: { opacity: 0, scale: 0.98, filter: "blur(8px)" },
    animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
    exit: { opacity: 0, scale: 1.04, filter: "blur(8px)" },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{ transformOrigin: "center" }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
