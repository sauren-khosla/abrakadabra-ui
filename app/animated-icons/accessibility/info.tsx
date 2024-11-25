"use client";

import { motion, useAnimation } from "framer-motion";
import React from "react";

const InfoIcon = () => {
  const circleControls = useAnimation();
  const dotControls = useAnimation();

  const animateIcon = async () => {
    await Promise.all([
      circleControls.set({
        pathLength: 0,
        opacity: 0,
      }),
      dotControls.set({
        opacity: 0,
        scale: 0,
      }),
    ]);

    await dotControls.set({
      opacity: 0,
    });

    await circleControls.start({
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    });

    await dotControls.start({
      opacity: 1,
      scale: [0, 1.6, 1],
      transition: { duration: 0.6, ease: "easeInOut" },
    });
  };

  const resetAnimation = async () => {
    // Reset the circle and dot to their original state
    await Promise.all([
      circleControls.start({
        pathLength: 1,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeInOut" },
      }),
      dotControls.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: "easeInOut" },
      }),
    ]);
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
        className="lucide lucide-info"
      >
        {/* Animated Circle */}
        <motion.circle
          cx="12"
          cy="12"
          r="10"
          animate={circleControls}
          initial={{ pathLength: 1, opacity: 1 }}
        />

        {/* Static Vertical Line */}
        <motion.path
          d="M12 16v-4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Animated Top Dot */}
        <motion.path
          d="M12 8h.01"
          animate={dotControls}
          initial={{ opacity: 1, scale: 1 }}
          style={{ transformOrigin: "12px 8px" }}
        />
      </motion.svg>
    </div>
  );
};

export { InfoIcon };
