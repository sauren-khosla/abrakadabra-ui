"use client";

import { motion, useAnimation, Variants } from "framer-motion";
import React from "react";

const circleVariants: Variants = {
  normal: {
    y: 0,
  },
  animate: {
    y: [0, -5, 1, 0],
    transition: {
      duration: 0.8,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};

const LinkedInIcon = () => {
  const controls = useAnimation();

  return (
    <div
      className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 -5 24 29"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <motion.circle
          cx="4"
          cy="4"
          r="2"
          variants={circleVariants}
          initial="normal"
          animate={controls}
        />
      </svg>
    </div>
  );
};

export { LinkedInIcon };
