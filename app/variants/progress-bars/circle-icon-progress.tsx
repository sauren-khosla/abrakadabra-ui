"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export interface ProgressCircleWithIconProps
  extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  imageSrc: string;
  size?: number;
  strokeWidth?: number;
  max?: number;
}

const ProgressCircleWithIcon = React.forwardRef<
  HTMLDivElement,
  ProgressCircleWithIconProps
>(
  (
    {
      className,
      value,
      imageSrc,
      size = 75,
      strokeWidth = 8,
      max = 100,
      ...props
    },
    ref
  ) => {
    const percentage = (value / max) * 100;
    const center = size / 2;
    const radius = center - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;
    const dashOffset = circumference - (percentage / 100) * circumference;

    return (
      <div
        ref={ref}
        className={cn("relative inline-block", className)}
        style={{ width: size, height: size }}
        {...props}
      >
        <svg width={size} height={size}>
          <circle
            stroke="currentColor"
            fill="transparent"
            strokeWidth={strokeWidth}
            cx={center}
            cy={center}
            r={radius}
            className="text-gray-200"
          />
          <circle
            stroke="currentColor"
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            strokeLinecap="round"
            cx={center}
            cy={center}
            r={radius}
            className="text-black"
            transform={`rotate(-90 ${center} ${center})`}
          />
        </svg>
        <Image
          src={imageSrc}
          width={100}
          height={100}
          alt="Progress"
          className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full object-cover"
        />
      </div>
    );
  }
);

ProgressCircleWithIcon.displayName = "ProgressCircleWithImage";

export default function ProgressCircleWithIconDemo() {
  return (
    <ProgressCircleWithIcon value={50} imageSrc={"/shadcn.jpeg"} />
  );
}
