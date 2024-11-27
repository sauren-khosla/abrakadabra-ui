"use client";

import React from "react";
import { motion, useAnimation } from "framer-motion";

const BellDotIcon = () => {
  const circleControls = useAnimation();

  const animateMovement = async () => {
    for (let i = 0; i < 3; i++) {
      await circleControls.start({
        scale: 1.6,
        opacity: 0,
        transition: { duration: 1, ease: "easeInOut" },
      });
      await circleControls.set({
        scale: 1,
        opacity: 1,
      });
    }
  };

  const resetMovement = async () => {
    await circleControls.stop();
    await circleControls.set({
      opacity: 1,
      scale: 1,
    });
  };

  return (
    <div
      className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
      onMouseEnter={animateMovement}
      onMouseLeave={resetMovement}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-bell-dot"
      >
        <path d="M19.4 14.9C20.2 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 .7 0 1.3.1 1.9.3" />
        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
        <circle cx="18" cy="8" r="3" />
        <motion.circle cx="18" cy="8" r="3" animate={circleControls} />
      </svg>
    </div>
  );
};

export { BellDotIcon };
