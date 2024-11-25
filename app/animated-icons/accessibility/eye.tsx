"use client";

import React from "react";
import { motion, useAnimation } from "framer-motion";

const EyeIcon = () => {
  const eyeControls = useAnimation();

  const animateEye = async () => {
    await eyeControls.start({
      x: -3,
      transition: { duration: 0.6, ease: "easeInOut" },
    });
    await eyeControls.start({
      x: 3,
      transition: { duration: 1, ease: "easeInOut" },
    });
    await eyeControls.start({
      x: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    });
  };

  return (
    <motion.div
      className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
      onMouseEnter={animateEye}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-eye"
      >
        <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
        <motion.circle
          cx="12"
          cy="12"
          r="3"
          animate={eyeControls}
          initial={{ x: 0 }}
        />
      </motion.svg>
    </motion.div>
  );
};

export { EyeIcon };
