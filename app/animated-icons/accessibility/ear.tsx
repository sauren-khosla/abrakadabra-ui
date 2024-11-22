"use client";

import React from "react";
import { motion, useAnimation } from "framer-motion";

const EarIcon = () => {
  const earControls = useAnimation();
  const arc1Controls = useAnimation();
  const arc2Controls = useAnimation();
  const arc3Controls = useAnimation();

  const animateIcon = async () => {
    await earControls.start({
      scale: 1,
      x: -6,
      transition: { duration: 0.5, ease: "easeInOut" },
    });

    for (let i = 0; i < 2; i++) {
      await Promise.all([
        arc1Controls
          .start({
            opacity: 1,
            transition: { duration: 0.5, ease: "easeInOut" },
          })
          .then(() =>
            arc1Controls.start({
              opacity: 0,
              transition: { duration: 0.3, ease: "easeInOut" },
            })
          ),

        arc2Controls
          .start({
            opacity: 1,
            transition: { duration: 0.35, ease: "easeInOut" },
          })
          .then(() =>
            arc2Controls.start({
              opacity: 0,
              transition: { duration: 0.3, ease: "easeInOut" },
            })
          ),

        arc3Controls
          .start({
            opacity: 1,
            transition: { duration: 0.2, ease: "easeInOut" },
          })
          .then(() =>
            arc3Controls.start({
              opacity: 0,
              transition: { duration: 0.3, ease: "easeInOut" },
            })
          ),
      ]);
    }
    resetAnimation();
  };

  const resetAnimation = () => {
    earControls.start({
      scale: 1.4,
      x: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    });
  };

  return (
    <motion.div
      className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
      onMouseEnter={animateIcon}
      onMouseLeave={resetAnimation}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="-5 0 34 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-ear"
        animate={earControls}
        initial={{ scale: 1.4, x: 0 }}
      >
        <path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0" />
        <path d="M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4" />
        <motion.path
          d="M23 15.5a7.5 7.5 0 0 1 0 -7"
          strokeWidth={1}
          initial={{ pathLength: 1, opacity: 0 }}
          animate={arc1Controls}
        />
        <motion.path
          d="M26 16a7 7 0 0 1 0 -8"
          strokeWidth={1}
          initial={{ pathLength: 1, opacity: 0 }}
          animate={arc2Controls}
        />
        <motion.path
          d="M29 16.5a6.5 6.5 0 0 1 0 -9"
          strokeWidth={1}
          initial={{ pathLength: 1, opacity: 0 }}
          animate={arc3Controls}
        />
      </motion.svg>
    </motion.div>
  );
};

export { EarIcon };
