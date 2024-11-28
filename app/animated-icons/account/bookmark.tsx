"use client";

import React from "react";
import { motion, useAnimation } from "framer-motion";

const BookmarkIcon = () => {
  const iconControls = useAnimation();

  const animateMovement = async () => {
    await iconControls.start({
      y: -5,
      transition: { duration: 0.5, ease: "easeIn" },
    });
    await iconControls.start({
      y: 5,
      transition: { duration: 0.2, ease: "easeIn" },
    });
    await iconControls.start({
      y: 0,
      transition: { duration: 0.2, ease: "easeInOut" },
    });
  };

  const resetMovement = async () => {
    await iconControls.stop();
    await iconControls.set({
      x: 0,
      y: 0,
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
        className="lucide lucide-bookmark"
        animate={iconControls}
      >
        <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
      </motion.svg>
    </div>
  );
};

export { BookmarkIcon };
