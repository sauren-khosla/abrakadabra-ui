"use client";

import React from "react";
import { motion, useAnimation } from "framer-motion";

const BadgeCheckIcon = () => {
  const circleControls = useAnimation();
  const checkControls = useAnimation();

  const animateMovement = async () => {
    await Promise.all([
      circleControls.set({
        opacity: 0,
      }),
      checkControls.set({
        pathLength: 0,
      }),
    ]);
    await checkControls.start({
      pathLength: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    });
    await circleControls.start({
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    });
  };

  const resetMovement = async () => {
    await Promise.all([checkControls.stop(), circleControls.stop()]);
    await Promise.all([
      circleControls.set({
        opacity: 1,
      }),
      checkControls.set({
        opacity: 1,
        pathLength: 1,
      }),
    ]);
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
        className="lucide lucide-badge-check"
      >
        <motion.path
          d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
          animate={circleControls}
        />
        <motion.path d="m9 12 2 2 4-4" animate={checkControls} />
      </svg>
    </div>
  );
};

export { BadgeCheckIcon };
