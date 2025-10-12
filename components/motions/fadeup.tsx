"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface FadeUpProps {
  children: ReactNode;
}

const FadeUp = ({ children }: FadeUpProps) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2,
      }}
      className="backdrop-blur-xs"
    >
      {children}
    </motion.div>
  );
};

export default FadeUp;
