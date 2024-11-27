"use client";

import React from "react";
import { motion, useAnimation } from "framer-motion";

const BellIcon = () => {
  const bodyControls = useAnimation();
  const ringerControls = useAnimation();

  const animateMovement = async () => {
    await Promise.all([
      bodyControls.start({
        rotate: 30,
        transition: { duration: 0.5, ease: "easeInOut" },
      }),
      ringerControls.start({
        x: -8,
        y: -4,
        rotate: 30,
        transition: { duration: 0.5, ease: "easeInOut" },
      }),
    ]);
    await Promise.all([
      bodyControls.start({
        rotate: -30,
        transition: { duration: 0.5, ease: "easeInOut" },
      }),
      ringerControls.start({
        x: [-8, -6, -4, -2, 0, 2, 4, 6, 8],
        y: [-4, -3, -2, -1, 0, -1, -2, -3, -4],
        rotate: [30, 22.5, 15, 7.5, 0, -7.5, -15, -22.5, -30],
        transition: {
          duration: 0.5,
          times: [
            0.0625, 0.0625, 0.0625, 0.0625, 0.0625, 0.0625, 0.0625, 0.0625,
          ],
        },
      }),
    ]);
    await Promise.all([
      bodyControls.start({
        rotate: 0,
        transition: { duration: 0.5, ease: "easeInOut" },
      }),
      ringerControls.start({
        x: [8, 6, 4, 2, 0],
        y: [-4, -3, -2, -1, 0],
        rotate: [-30, -22.5, -15, -7.5, 0],
        transition: {
          duration: 0.5,
          times: [0.125, 0.125, 0.125, 0.125],
        },
      }),
    ]);
  };

  const resetMovement = async () => {
    await Promise.all([bodyControls.stop(), ringerControls.stop()]);
    await Promise.all([
      bodyControls.set({
        rotate: 0,
      }),
      ringerControls.set({
        x: 0,
        y: 0,
        rotate: 0,
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
        className="lucide lucide-bell"
      >
        <motion.path
          d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"
          animate={bodyControls}
        />
        <motion.path
          d="M10.3 21a1.94 1.94 0 0 0 3.4 0"
          animate={ringerControls}
        />
      </svg>
    </div>
  );
};

export { BellIcon };
