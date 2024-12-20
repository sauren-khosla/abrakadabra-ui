"use client";

import React from "react";
import { motion, useAnimation } from "framer-motion";

const CircleUserIcon = () => {
  const iconControls = useAnimation();

  const animateMovement = async () => {
    await iconControls.set({
      pathLength: 0,
      opacity: 0,
    });
    await iconControls.start({
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    });
  };

  const resetMovement = async () => {
    await iconControls.stop();
    await iconControls.set({
      pathLength: 1,
      opacity: 1,
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
        className="lucide lucide-circle-user"
      >
        <circle cx="12" cy="12" r="10" />
        <motion.circle cx="12" cy="10" r="3" animate={iconControls} />
        <motion.path
          d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"
          animate={iconControls}
        />
      </svg>
    </div>
  );
};

export { CircleUserIcon };
