"use client";

import { motion, useAnimation } from "framer-motion";
import React from "react";

const XIcon = () => {
  const controls = useAnimation();

  const animatePath = async () => {
    await controls.set({ pathLength: 0 });
    await controls.start({
      pathLength: 1,
      transition: { duration: 1.5, ease: "easeInOut" },
    });
  };

  const resetPath = async () => {
    await controls.stop();
    await controls.set({ pathLength: 1 });
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
        viewBox="0 0 512 462.799"
        width="28"
        height="28"
      >
        <motion.path
          fill="none"
          stroke="black"
          strokeWidth="30"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"
          initial={{ pathLength: 1 }}
          animate={controls}
        />
      </svg>
    </div>
  );
};

export { XIcon };
