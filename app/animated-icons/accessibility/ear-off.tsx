"use client";

import React from "react";
import { motion, useAnimation } from "framer-motion";

const EarOffIcon = () => {
  const lineControls = useAnimation();

  const animateIcon = async () => {
    await lineControls.set({
      opacity: 1,
    });
    await lineControls.start({
      pathLength: 1,
      transition: { duration: 1.5, ease: "easeInOut" },
    });
  };

  const resetAnimation = () => {
    lineControls.set({
      pathLength: 0,
      opacity: 0,
    });
  };

  return (
    <motion.div
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
        className="lucide lucide-ear-off"
      >
        <path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0" />
        <path d="M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4" />
        <motion.line
          x1="2"
          y1="2"
          x2="22"
          y2="22"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={lineControls}
        />
      </motion.svg>
    </motion.div>
  );
};

export { EarOffIcon };
