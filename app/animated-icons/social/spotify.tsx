"use client";

import { motion, useAnimation } from "framer-motion";
import React from "react";

const SpotifyIcon = () => {
  const bottomArcControls = useAnimation();
  const middleArcControls = useAnimation();
  const topArcControls = useAnimation();
  const logoControls = useAnimation();

  const animateLogo = async () => {
    // Bottom arc animation
    await Promise.all([
      bottomArcControls.start({
        stroke: "#1ed760",
        transition: { duration: 0.2 },
      }),
    ]);
    await bottomArcControls.start({
      stroke: "#fff",
      transition: { duration: 0.15 },
    });

    // Top arc animation
    await Promise.all([
      topArcControls.start({
        stroke: "#1ed760",
        transition: { duration: 0.2 },
      }),
    ]);
    await topArcControls.start({
      stroke: "#fff",
      transition: { duration: 0.15 },
    });

    // Middle arc animation
    await Promise.all([
      middleArcControls.start({
        stroke: "#1ed760",
        transition: { duration: 0.2 },
      }),
    ]);
    await middleArcControls.start({
      stroke: "#fff",
      transition: { duration: 0.15 },
    });

    // Top arc animation again
    await Promise.all([
      topArcControls.start({
        stroke: "#1ed760",
        transition: { duration: 0.2 },
      }),
    ]);
    await topArcControls.start({
      stroke: "#fff",
      transition: { duration: 0.15 },
    });

    // Bottom arc animation again
    await Promise.all([
      bottomArcControls.start({
        stroke: "#1ed760",
        transition: { duration: 0.2 },
      }),
    ]);
    await bottomArcControls.start({
      stroke: "#fff",
      transition: { duration: 0.15 },
    });

    // Additional middle arc animation
    await Promise.all([
      middleArcControls.start({
        stroke: "#1ed760",
        transition: { duration: 0.2 },
      }),
    ]);
    await middleArcControls.start({
      stroke: "#fff",
      transition: { duration: 0.15 },
    });

    // Additional top arc animation
    await Promise.all([
      topArcControls.start({
        stroke: "#1ed760",
        transition: { duration: 0.2 },
      }),
    ]);
    await topArcControls.start({
      stroke: "#fff",
      transition: { duration: 0.15 },
    });

    // Final pulsate with additional scale animation
    await logoControls.start({
      scale: [1, 1.1, 1],
      transition: { duration: 0.7 },
    });
  };

  const resetLogo = () => {
    // Reset arcs to white and scale to 1
    bottomArcControls.start({ stroke: "#fff" });
    middleArcControls.start({ stroke: "#fff" });
    topArcControls.start({ stroke: "#fff" });
    logoControls.start({ scale: 1 });
  };

  return (
    <div
      className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
      onMouseEnter={animateLogo}
      onMouseLeave={resetLogo}
    >
      <motion.svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        animate={logoControls}
      >
        {/* Circle background */}
        <circle cx="16" cy="16" r="16" fill="#1ed760" />
        {/* Top arc */}
        <motion.path
          id="top-arc"
          d="M6.5 11.5c6-2 13-2 19.5 2.5"
          fill="none"
          stroke="#fff"
          strokeWidth="2.5"
          strokeLinecap="round"
          animate={topArcControls}
        />
        {/* Middle arc */}
        <motion.path
          id="middle-arc"
          d="M7.5 17c4-2 12-1.25 16 2"
          fill="none"
          stroke="#fff"
          strokeWidth="2.5"
          strokeLinecap="round"
          animate={middleArcControls}
        />
        {/* Bottom arc */}
        <motion.path
          id="bottom-arc"
          d="M9 22c3.5-1.5 8.5-1 12 1.5"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          animate={bottomArcControls}
        />
      </motion.svg>
    </div>
  );
};

export { SpotifyIcon };
