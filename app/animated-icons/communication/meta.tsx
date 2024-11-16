"use client";

import { motion, useAnimation } from "framer-motion";
import React from "react";

const MetaIcon = () => {
  const controls = useAnimation();

  const animatePath = async () => {
    await controls.set({ pathLength: 0, fillOpacity: 0 });
    await controls.start({
      pathLength: 1,
      transition: { duration: 1.5, ease: "easeInOut" },
    });

    await controls.start({
      fillOpacity: 1,
      transition: { duration: 0.5 },
    });
  };

  const resetPath = async () => {
    await controls.stop();
    await controls.set({ pathLength: 1, fillOpacity: 1 });
  };

  return (
    <div
      className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
      onMouseEnter={animatePath}
      onMouseLeave={resetPath}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        imageRendering="optimizeQuality"
        fillRule="evenodd"
        clipRule="evenodd"
        viewBox="-8 -8 528 356.238"
        width="26"
        height="26"
      >
        <motion.path
          fill="#0081FB"
          stroke="#0081FB"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M367.457 0c-41.982 0-74.801 31.62-104.509 71.788C222.124 19.807 187.982 0 147.124 0 63.824 0 0 108.407 0 223.149c0 71.802 34.737 117.089 92.92 117.089 41.877 0 71.995-19.743 125.536-113.334 0 0 22.319-39.414 37.673-66.564a1722.74 1722.74 0 0117 28.081l25.107 42.237c48.909 81.843 76.159 109.58 125.536 109.58 56.683 0 88.228-45.906 88.228-119.2C512 100.898 446.737 0 367.457 0zM177.628 201.562c-43.41 68.047-58.427 83.3-82.596 83.3-24.872 0-39.655-21.837-39.655-60.774 0-83.3 41.532-168.477 91.043-168.477 26.811 0 49.216 15.484 83.536 64.616-32.588 49.985-52.328 81.335-52.328 81.335zm163.834-8.567l-30.019-50.065c-8.124-13.212-15.931-25.374-23.422-36.484 27.056-41.759 49.374-62.567 75.917-62.567 55.141 0 99.255 81.188 99.255 180.913 0 38.013-12.45 60.07-38.248 60.07-24.725 0-36.536-16.33-83.483-91.867z"
          initial={{ pathLength: 0, fillOpacity: 0 }}
          animate={controls}
        />
      </svg>
    </div>
  );
};

export { MetaIcon };
