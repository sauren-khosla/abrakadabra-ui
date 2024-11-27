"use client";

import React from "react";
import { motion, useAnimation } from "framer-motion";

const AtSignIcon = () => {
  const circleControls = useAnimation();
  const atControls = useAnimation();

  const animateMovement = async () => {
    await Promise.all([
      circleControls.set({
        opacity: 0,
        pathLength: 0,
      }),
      atControls.set({
        opacity: 0,
        pathLength: 0,
      }),
    ]);
    await atControls.start({
      pathLength: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    });
    await circleControls.start({
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    });
  };

  const resetMovement = async () => {
    await Promise.all([atControls.stop(), circleControls.stop()]);
    await Promise.all([
      circleControls.set({
        opacity: 1,
        pathLength: 1,
      }),
      atControls.set({
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
        className="lucide lucide-at-sign"
      >
        <motion.circle cx="12" cy="12" r="4" animate={atControls} />
        <motion.path
          d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"
          animate={circleControls}
        />
      </svg>
    </div>
  );
};

export { AtSignIcon };
