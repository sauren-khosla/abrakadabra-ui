"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const SunShortenIcon = () => {
  const sunRays = [
    { id: 1, d: "M12 4V2" },
    { id: 2, d: "m17.66 6.34 1.41-1.41" },
    { id: 3, d: "M20 12h2" },
    { id: 4, d: "m17.66 17.66 1.41 1.41" },
    { id: 5, d: "M12 20v2" },
    { id: 6, d: "m6.34 17.66-1.41 1.41" },
    { id: 7, d: "M4 12h-2" },
    { id: 8, d: "m6.34 6.34-1.41-1.41" },
  ];

  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0,
      },
    },
  };

  const rayVariants = {
    initial: {
      pathLength: 1,
      scale: 1,
    },
    animate: {
      pathLength: [1, 0, 1],
      scale: [1, 1, 1.4, 1],
      transition: {
        pathLength: { duration: 0.6, times: [0, 0.5, 1] },
        scale: { duration: 1.0, delay: 0.3, times: [0, 0.5, 1] },
      },
    },
  };

  return (
    <div
      className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-sun"
        variants={containerVariants}
        initial="initial"
        animate={isHovered ? "animate" : "initial"}
      >
        <circle cx="12" cy="12" r="4" fill="none" />

        {sunRays.map((ray) => (
          <motion.path
            key={ray.id}
            d={ray.d}
            stroke="black"
            variants={rayVariants}
          />
        ))}
      </motion.svg>
    </div>
  );
};

export { SunShortenIcon };
