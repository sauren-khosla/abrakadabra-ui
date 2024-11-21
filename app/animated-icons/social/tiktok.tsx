"use client";

import { motion, useAnimation } from "framer-motion";
import React from "react";

const TikTokIcon = () => {
  const blueControls = useAnimation();
  const redControls = useAnimation();

  const animatePaths = async () => {
    let duration = 0.8;
    const reductionFactor = 0.8;
    const repetitions = 6;

    for (let i = 0; i < repetitions; i++) {
      const bluePosition = i % 2 === 0 ? { x: 2, y: 2 } : { x: 0, y: 0 };
      const redPosition = i % 2 === 0 ? { x: 0, y: 0 } : { x: 2, y: 2 };

      await Promise.all([
        blueControls.start({
          ...bluePosition,
          transition: { duration },
        }),
        redControls.start({
          ...redPosition,
          transition: { duration },
        }),
      ]);

      duration *= reductionFactor;
    }
  };

  const resetPaths = () => {
    blueControls.start({
      x: 0,
      y: 0,
      transition: { duration: 0.5 },
    });
    redControls.start({
      x: 2,
      y: 2,
      transition: { duration: 0.5 },
    });
  };

  return (
    <div
      className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
      onMouseEnter={animatePaths}
      onMouseLeave={resetPaths}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          fill="#00f2ea"
          animate={blueControls}
          initial={{ x: 0, y: 0 }}
          d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"
        />
        <motion.path
          fill="#ff0050"
          animate={redControls}
          initial={{ x: 2, y: 2 }}
          d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"
        />
        <motion.path
          fill="#000000"
          initial={{ x: 1, y: 1 }}
          d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"
        />
      </svg>
    </div>
  );
};

export { TikTokIcon };
