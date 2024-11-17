"use client";

import { motion, useAnimation } from "framer-motion";
import React from "react";

const YouTubeIcon = () => {
  const svgControls = useAnimation();
  const playButtonControls = useAnimation();

  const animateIcon = async () => {
    // Tilt up
    await svgControls.start({
      rotate: -15,
      transition: { duration: 0.2, ease: "easeInOut" },
    });

    // Slide out play button slowly
    await playButtonControls.start({
      x: 300,
      transition: { duration: 0.3, ease: "easeOut" },
    });

    // Repeat the slide out and slide in motion quickly 3 times
    for (let i = 0; i < 3; i++) {
      // Reset to left side quickly
      await playButtonControls.start({
        x: -300,
        transition: { duration: 0.01, ease: "easeOut" },
      });

      // Slide in play button quickly
      await playButtonControls.start({
        x: 0,
        transition: { duration: 0.3, ease: "easeOut" },
      });

      // Slide out play button quickly
      if (i < 2) {
        await playButtonControls.start({
          x: 300,
          transition: { duration: 0.3, ease: "easeOut" },
        });
      } else {
        // On the last iteration, slowly return to center
        await playButtonControls.start({
          x: 0,
          transition: { duration: 0.3, ease: "easeOut" },
        });
      }
    }

    // Tilt back down
    await svgControls.start({
      rotate: 0,
      transition: { duration: 0.2, ease: "easeInOut" },
    });
  };

  const resetAnimation = async () => {
    await Promise.all([
      svgControls.set({ rotate: 0 }),
      playButtonControls.set({ x: 0, opacity: 1 }),
    ]);
  };

  return (
    <div
      className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
      onMouseEnter={animateIcon}
      onMouseLeave={resetAnimation}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 461.001 461.001"
        width="40"
        height="40"
        animate={svgControls}
      >
        {/* Background */}
        <motion.path
          fill="#F61C0D"
          d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728
            c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137
            C461.001,110.259,418.135,67.393,365.257,67.393z"
        />
        {/* Play Button */}
        <motion.path
          fill="#FFFFFF"
          d="M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607
            c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"
          initial={{ x: 0, opacity: 1 }}
          animate={playButtonControls}
        />
      </motion.svg>
    </div>
  );
};

export { YouTubeIcon };
