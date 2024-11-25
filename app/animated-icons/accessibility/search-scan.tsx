"use client";

import React from "react";
import { motion, useAnimation } from "framer-motion";

const ScanSearchIcon = () => {
  const groupControls = useAnimation();

  const animateMovement = async () => {
    await groupControls.start({
      x: -2.5,
      y: -2.5,
      transition: { duration: 0.5, ease: "easeInOut" },
    });

    await groupControls.start({
      x: 2.5,
      y: -2.5,
      transition: { duration: 0.5, ease: "easeInOut" },
    });

    await groupControls.start({
      x: -2.5,
      y: 2.5,
      transition: { duration: 0.5, ease: "easeInOut" },
    });

    await groupControls.start({
      x: 2.5,
      y: 2.5,
      transition: { duration: 0.5, ease: "easeInOut" },
    });

    await groupControls.start({
      x: 0,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    });
  };

  const resetMovement = async () => {
    await groupControls.start({
      x: 0,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    });
  };

  return (
    <div
      className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
      onMouseEnter={animateMovement}
      onMouseLeave={resetMovement}
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
        className="lucide lucide-scan-search"
      >
        <path d="M3 7V5a2 2 0 0 1 2-2h2" />
        <path d="M17 3h2a2 2 0 0 1 2 2v2" />
        <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
        <path d="M7 21H5a2 2 0 0 1-2-2v-2" />

        <motion.g animate={groupControls} initial={{ x: 0, y: 0 }}>
          <motion.circle cx="12" cy="12" r="3" />

          <motion.path d="m16 16-1.9-1.9" />
        </motion.g>
      </motion.svg>
    </div>
  );
};

export { ScanSearchIcon };
