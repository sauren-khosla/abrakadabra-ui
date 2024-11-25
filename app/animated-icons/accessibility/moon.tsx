"use client";

import React from "react";
import { motion, useAnimation } from "framer-motion";

const MoonIcon = () => {
  const sparkleControls = useAnimation();

  const sparkles = [
    { id: 1, x: -1, y: -11, delay: 0 },
    { id: 2, x: 4, y: -16, delay: 0.2 },
    { id: 3, x: 8, y: -10, delay: 0.4 },
  ];

  const animateSparkles = async () => {
    await sparkleControls.start((sparkle) => ({
      x: sparkle.x,
      y: sparkle.y,
      opacity: 1,
      scale: 0.5,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: sparkle.delay,
      },
    }));

    sparkleControls.start((sparkle) => ({
      opacity: [1, 0.5, 1],
      scale: [0.5, 0.6, 0.5],
      transition: {
        duration: 1,
        ease: "easeInOut",
        repeat: 2,
        repeatType: "loop",
        delay: sparkle.delay,
      },
    }));
  };

  const resetSparkles = async () => {
    await sparkleControls.start((sparkle) => ({
      x: 0,
      y: 0,
      opacity: 0,
      scale: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn",
        delay: sparkle.delay,
      },
    }));
  };

  return (
    <div
      className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
      onMouseEnter={animateSparkles}
      onMouseLeave={resetSparkles}
    >
      {/* Moon SVG */}
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
        className="lucide lucide-moon"
      >
        <motion.path
          d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
          transition={{ duration: 0.5 }}
        />
      </motion.svg>

      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          custom={sparkle}
          initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
          animate={sparkleControls}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-sparkle"
          >
            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export { MoonIcon };
