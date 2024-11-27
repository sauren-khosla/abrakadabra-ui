"use client";

import React from "react";
import { motion, useAnimation } from "framer-motion";
import { Zen_Tokyo_Zoo } from "next/font/google";

const ZoomInIcon = () => {
  const zoomInControls = useAnimation();

  const animateMovement = async () => {
    await zoomInControls.start({
      scale: 1.6,
      transition: { duration: 1, ease: "easeInOut" },
    });
  };

  const resetMovement = async () => {
    await zoomInControls.stop();
    await zoomInControls.set({
      scale: 1,
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
        className="lucide lucide-zoom-in"
        animate={zoomInControls}
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" x2="16.65" y1="21" y2="16.65" />
        <line x1="11" x2="11" y1="8" y2="14" />
        <line x1="8" x2="14" y1="11" y2="11" />
      </motion.svg>
    </div>
  );
};

export { ZoomInIcon };
