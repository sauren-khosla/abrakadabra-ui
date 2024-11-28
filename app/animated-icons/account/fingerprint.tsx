"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const FingerprintIcon = () => {
  const iconControls = useAnimation();

  useEffect(() => {
    iconControls.set({
      pathLength: 1,
    });
  });

  const animateMovement = async () => {
    await iconControls.set({
      pathLength: 0,
      opacity: 0,
    });
    await iconControls.start({
      pathLength: 1,
      opacity: 1,
      transition: {
        opacity: { duration: 0.5 },
        pathLength: {
          duration: 1.5,
        },
      },
    });
  };

  const resetMovement = async () => {
    await iconControls.stop();
    await iconControls.set({
      pathLength: 1,
    });
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
        className="lucide lucide-fingerprint"
      >
        <motion.path
          d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"
          animate={iconControls}
        />
        <motion.path
          d="M14 13.12c0 2.38 0 6.38-1 8.88"
          animate={iconControls}
        />
        <motion.path
          d="M17.29 21.02c.12-.6.43-2.3.5-3.02"
          animate={iconControls}
        />
        <motion.path d="M2 12a10 10 0 0 1 18-6" animate={iconControls} />
        <motion.path d="M2 16h.01" animate={iconControls} />
        <motion.path d="M21.8 16c.2-2 .131-5.354 0-6" animate={iconControls} />
        <motion.path
          d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"
          animate={iconControls}
        />
        <motion.path d="M8.65 22c.21-.66.45-1.32.57-2" animate={iconControls} />
        <motion.path d="M9 6.8a6 6 0 0 1 9 5.2v2" animate={iconControls} />
        <motion.path
          d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"
          initial={{ opacity: 0.2 }}
        />
        <motion.path
          d="M14 13.12c0 2.38 0 6.38-1 8.88"
          initial={{ opacity: 0.2 }}
        />
        <motion.path
          d="M17.29 21.02c.12-.6.43-2.3.5-3.02"
          initial={{ opacity: 0.2 }}
        />
        <motion.path d="M2 12a10 10 0 0 1 18-6" initial={{ opacity: 0.2 }} />
        <motion.path d="M2 16h.01" initial={{ opacity: 0.2 }} />
        <motion.path
          d="M21.8 16c.2-2 .131-5.354 0-6"
          initial={{ opacity: 0.2 }}
        />
        <motion.path
          d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"
          initial={{ opacity: 0.2 }}
        />
        <motion.path
          d="M8.65 22c.21-.66.45-1.32.57-2"
          initial={{ opacity: 0.2 }}
        />
        <motion.path d="M9 6.8a6 6 0 0 1 9 5.2v2" initial={{ opacity: 0.2 }} />
      </svg>
    </div>
  );
};

export { FingerprintIcon };
