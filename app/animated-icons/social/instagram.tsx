"use client";

import { motion, useAnimation } from "framer-motion";
import React from "react";

const InstagramIcon = () => {
  const circleControls = useAnimation();
  const dotControls = useAnimation();

  const animateIcon = async () => {
    await circleControls.set({ x: 0 });
    await dotControls.set({ x: 0, opacity: 1, scale: 1 });

    await Promise.all([
      circleControls.start({
        x: [0, -0.25, -0.5, -0.75, -1, -1.25, -1.5, -1.75, -2],
        y: [0, 0.25, 0.5, 0.75, 1, 0.75, 0.5, 0.25, 0],
        transition: { duration: 0.35, ease: "easeInOut" },
      }),
      dotControls.start({
        x: -2,
        transition: { duration: 0.35, ease: "easeInOut" },
      }),
    ]);

    await dotControls.start({
      scale: 1.5,
      transition: { duration: 0.1, ease: "easeInOut" },
    });

    await dotControls.start({
      scale: 1,
      transition: { duration: 0.1, ease: "easeInOut" },
    });

    await Promise.all([
      circleControls.start({
        x: [-2, -1.75, -1.5, -1.25, -1, -0.75, -0.5, -0.25, 0],
        y: [0, 0.25, 0.5, 0.75, 1, 0.75, 0.5, 0.25, 0],
        transition: { duration: 0.35, ease: "easeInOut" },
      }),
      dotControls.start({
        x: 0,
        transition: { duration: 0.35, ease: "easeInOut" },
      }),
    ]);
  };

  const resetIcon = async () => {
    await circleControls.set({ pathLength: 1 });
    await dotControls.set({ opacity: 1 });
  };

  return (
    <div
      className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
      onMouseEnter={animateIcon}
      onMouseLeave={resetIcon}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="url(#instagramGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <defs>
          <radialGradient id="instagramGradient" r="150%" cx="30%" cy="107%">
            <stop stopColor="#ffe900" offset="0" />
            <stop stopColor="#fdf497" offset="0.05" />
            <stop stopColor="#fd5949" offset="0.45" />
            <stop stopColor="#d6249f" offset="0.6" />
            <stop stopColor="#285AEB" offset="0.9" />
          </radialGradient>
        </defs>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <motion.path
          d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
          initial={{ pathLength: 1 }}
          animate={circleControls}
        />
        <motion.line
          x1="17.5"
          x2="17.51"
          y1="6.5"
          y2="6.5"
          initial={{ opacity: 1 }}
          animate={dotControls}
          stroke="#aa20fa"
        />
      </svg>
    </div>
  );
};

export { InstagramIcon };
