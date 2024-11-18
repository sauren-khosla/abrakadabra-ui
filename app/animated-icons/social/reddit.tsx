"use client";

import { motion, useAnimation } from "framer-motion";
import React from "react";

const RedditIcon = () => {
  const controls = useAnimation();
  const eyeControls = useAnimation();

  const animateIcon = async () => {
    // Lean left
    await controls.start({
      rotate: -15,
      transition: { duration: 0.2, ease: "easeInOut" },
    });

    // Lean right
    await controls.start({
      rotate: 15,
      transition: { duration: 0.4, ease: "easeInOut" },
    });

    // Return to center
    await controls.start({
      rotate: 0,
      transition: { duration: 0.2, ease: "easeInOut" },
    });

    // Blink
    await eyeControls.start({
      scaleY: 0,
      transition: { duration: 0.1, ease: "easeInOut" },
    });

    // Open eyes
    await eyeControls.start({
      scaleY: 1,
      transition: { duration: 0.1, ease: "easeInOut" },
    });
  };

  const resetIcon = async () => {
    await controls.stop();
    await controls.set({ rotate: 0 });
    await eyeControls.set({ scaleY: 1 });
  };

  return (
    <div
      className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
      onMouseEnter={animateIcon}
      onMouseLeave={resetIcon}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        width="32"
        height="32"
        animate={controls}
      >
        {/* Background Circle */}
        <path
          fill="#ff4500"
          d="M128,0C57.31,0,0,57.31,0,128c0,35.35,14.33,67.35,37.49,90.51L13.11,242.89c-4.84,4.84-1.41,13.11,5.43,13.11h109.46c70.69,0,128-57.31,128-128C256,57.31,198.69,0,128,0Z"
        />
        {/* Reddit Alien (excluding eyes) */}
        <motion.g style={{ transformOrigin: "128px 128px" }} animate={controls}>
          <path
            fill="#FFFFFF"
            d="M154.04,60.36c2.22,9.41,10.67,16.42,20.76,16.42c11.78,0,21.33-9.55,21.33-21.33s-9.55-21.33-21.33-21.33c-10.3,0-18.89,7.3-20.89,17.01c-17.25,1.85-30.72,16.48-30.72,34.21c0,0.04,0,0.07,0,0.11c-18.76,0.79-35.89,6.13-49.49,14.56c-5.05-3.91-11.39-6.24-18.27-6.24c-16.51,0-29.89,13.38-29.89,29.89c0,11.98,7.04,22.3,17.21,27.07c0.99,34.7,38.8,62.61,85.31,62.61s84.37-27.94,85.31-62.67c10.09-4.8,17.07-15.09,17.07-27c0-16.51-13.38-29.89-29.89-29.89c-6.85,0-13.16,2.31-18.2,6.19c-13.72-8.49-31.04-13.83-49.99-14.54c0-0.03,0-0.05,0-0.08c0-12.7,9.44-23.24,21.68-24.97Z"
          />
        </motion.g>
        {/* Eyes */}
        <motion.g
          animate={eyeControls}
          initial={{ scaleY: 1 }}
          style={{ transformOrigin: "center" }}
        >
          {/* Left Eye */}
          <circle cx="96.5" cy="137" r="14" fill="#ff4500" />
          {/* Right Eye */}
          <circle cx="159.5" cy="137" r="14" fill="#ff4500" />
        </motion.g>
        {/* Smile */}
        <path
          d="M96.5,175c10,10,53,10,63,0"
          fill="none"
          stroke="#ff4500"
          strokeWidth="10"
          strokeLinecap="round"
        />
      </motion.svg>
    </div>
  );
};

export { RedditIcon };
