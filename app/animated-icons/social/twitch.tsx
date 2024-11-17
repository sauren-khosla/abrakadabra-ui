"use client";

import { motion, useAnimation } from "framer-motion";
import React from "react";

const TwitchIcon = () => {
  const leftLineControls = useAnimation();
  const rightLineControls = useAnimation();
  const twitchPurple = "#6441a5";

  const animateLines = async () => {
    // Move lines to the left
    await Promise.all([
      leftLineControls.start({
        x: -3,
        transition: { duration: 0.25, ease: "easeInOut" },
      }),
      rightLineControls.start({
        x: -3,
        transition: { duration: 0.25, ease: "easeInOut" },
      }),
    ]);

    // Shorten lines (scaleY to 0.5)
    await Promise.all([
      leftLineControls.start({
        scaleY: 0.5,
        y: 1.5,
        transition: { duration: 0.2, ease: "easeInOut" },
      }),
      rightLineControls.start({
        scaleY: 0.5,
        y: 1.5,
        transition: { duration: 0.2, ease: "easeInOut" },
      }),
    ]);

    // Re-expand to full length (scaleY to 1)
    await Promise.all([
      leftLineControls.start({
        scaleY: 1,
        y: 0,
        transition: { duration: 0.2, ease: "easeInOut" },
      }),
      rightLineControls.start({
        scaleY: 1,
        y: 0,
        transition: { duration: 0.2, ease: "easeInOut" },
      }),
    ]);

    // Move lines back to the right
    await Promise.all([
      leftLineControls.start({
        x: 0,
        transition: { duration: 0.25, ease: "easeInOut" },
      }),
      rightLineControls.start({
        x: 0,
        transition: { duration: 0.25, ease: "easeInOut" },
      }),
    ]);
  };

  const resetLines = async () => {
    await Promise.all([
      leftLineControls.set({ x: 0, scaleY: 1 }),
      rightLineControls.set({ x: 0, scaleY: 1 }),
    ]);
  };

  return (
    <div
      className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
      onMouseEnter={animateLines}
      onMouseLeave={resetLines}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke={twitchPurple}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Outer shape of the Twitch logo */}
        <path d="M21 2H3v16h5v4l4-4h5l4-4V2z" />
        {/* Left line */}
        <motion.line
          x1="11"
          y1="7"
          x2="11"
          y2="11"
          initial={{ x: 0, scaleY: 1 }}
          animate={leftLineControls}
          stroke={twitchPurple}
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Right line */}
        <motion.line
          x1="16"
          y1="7"
          x2="16"
          y2="11"
          initial={{ x: 0, scaleY: 1 }}
          animate={rightLineControls}
          stroke={twitchPurple}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export { TwitchIcon };
