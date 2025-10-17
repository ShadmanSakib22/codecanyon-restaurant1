"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

// Allowed directions for the animation
type Direction = "up" | "left" | "right";

interface MotionRevealProps {
  children: ReactNode;
  direction?: Direction;
}

/**
 * Animates a component to fade and slide in from a specified direction ('up', 'left', or 'right')
 * when it enters the viewport.
 */
const MotionReveal = ({ children, direction = "up" }: MotionRevealProps) => {
  const variants = {
    hidden: {
      opacity: 0,
      // X animation: -50 for 'left', 50 for 'right', 0 for 'up' or default
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
      // Y animation: 50 for 'up', 0 for 'left' or 'right'
      y: direction === "up" ? 50 : 0,
    },
    visible: {
      opacity: 1,
      x: 0, // Target end position for X
      y: 0, // Target end position for Y
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      // Triggers the animation when any part of the component is visible
      viewport={{ once: true, amount: "some" }}
      variants={variants}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2, // Small delay for staggering
      }}
      className="backdrop-blur-xs"
    >
      {children}
    </motion.div>
  );
};

export default MotionReveal;
