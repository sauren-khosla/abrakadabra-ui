"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const BookmarkCheckIcon = () => {
  const iconControls = useAnimation();
  const checkControls = useAnimation();

  useEffect(() => {
    checkControls.set({ opacity: 1 });
  });

  const animateMovement = async () => {
    await Promise.all([
      iconControls.start({
        y: -5,
        transition: { duration: 0.5, ease: "easeIn" },
      }),
      checkControls.set({
        opacity: 0,
      }),
    ]);
    await iconControls.start({
      y: 5,
      transition: { duration: 0.2, ease: "easeIn" },
    });
    await Promise.all([
      iconControls.start({
        y: 0,
        transition: { duration: 0.2, ease: "easeInOut" },
      }),
      checkControls.set({
        opacity: 1,
      }),
    ]);
  };

  const resetMovement = async () => {
    await iconControls.stop();
    await Promise.all([
      iconControls.set({
        x: 0,
        y: 0,
      }),
      checkControls.set({
        opacity: 1,
      }),
    ]);
  };

  return (
    <div
      className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
      onMouseEnter={animateMovement}
      onMouseLeave={resetMovement}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-bookmark-check"
        animate={iconControls}
      >
        <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z" />
        <motion.path d="m9 10 2 2 4-4" animate={checkControls} />
      </motion.svg>
    </div>
  );
};

export { BookmarkCheckIcon };
