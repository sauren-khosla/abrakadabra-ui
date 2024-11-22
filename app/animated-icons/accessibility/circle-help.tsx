"use client";

import { motion, useAnimation } from "framer-motion";
import React from "react";

const CircleHelpIcon = () => {
  const questionMarkControls = useAnimation();
  const dotControls = useAnimation();

  const animateIcon = async () => {
    await Promise.all([
      questionMarkControls.set({
        pathLength: 0,
        opacity: 0,
      }),

      dotControls.set({
        opacity: 0,
        scale: 0,
      }),
    ]);

    await questionMarkControls.start({
      pathLength: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    });

    await dotControls.start({
      opacity: 1,
      scale: 1.5,
      transition: { duration: 0.5, ease: "easeInOut" },
    });

    await dotControls.start({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    });
  };

  const resetAnimation = async () => {
    await questionMarkControls.start({
      pathLength: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    });

    await dotControls.start({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
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
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-circle-help"
      >
        <circle cx="12" cy="12" r="10" />
        <motion.path
          d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
          animate={questionMarkControls}
          initial={{ pathLength: 1, opacity: 1 }}
        />
        <motion.path
          d="M12 17h.01"
          animate={dotControls}
          initial={{ opacity: 1, scale: 1 }}
        />
      </motion.svg>
    </div>
  );
};

export { CircleHelpIcon };
