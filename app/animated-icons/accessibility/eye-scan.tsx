"use client";

import React from "react";
import { motion, useAnimation } from "framer-motion";

const ScanEyeIcon = () => {
  const lineControls = useAnimation();

  const animateIcon = async () => {
    await lineControls.set({
      opacity: 0,
      y1: 0,
      y2: 0,
    });

    await lineControls.start({
      pathLength: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    });

    await lineControls.start({
      y1: 24,
      y2: 24,
      transition: { duration: 2, ease: "easeInOut" },
    });

    await lineControls.start({
      opacity: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    });
  };

  const resetAnimation = async () => {
    await lineControls.stop();
    await lineControls.set({
      pathLength: 0,
      opacity: 0,
      y1: 0,
      y2: 0,
    });
  };

  return (
    <div
      className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
      onMouseEnter={animateIcon}
      onMouseLeave={resetAnimation}
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
        className="lucide lucide-scan-eye"
      >
        <path d="M3 7V5a2 2 0 0 1 2-2h2" />
        <path d="M17 3h2a2 2 0 0 1 2 2v2" />
        <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
        <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
        <circle cx="12" cy="12" r="1" />
        <path d="M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0" />

        <motion.line
          x1="0"
          y1="0"
          x2="24"
          y2="0"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={lineControls}
          initial={{ pathLength: 0, opacity: 0, y1: 0, y2: 0 }}
        />
      </motion.svg>
    </div>
  );
};

export { ScanEyeIcon };
