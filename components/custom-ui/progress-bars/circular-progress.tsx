"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface CircularProgressProps
  extends React.SVGAttributes<SVGSVGElement> {
  value: number;
  size?: number;
  strokeWidth?: number;
  max?: number;
}

const CircularProgress = React.forwardRef<SVGSVGElement, CircularProgressProps>(
  (
    { className, value, size = 100, strokeWidth = 8, max = 100, ...props },
    ref
  ) => {
    const percentage = (value / max) * 100;
    const center = size / 2;
    const radius = center - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;
    const dashOffset = circumference - (percentage / 100) * circumference;

    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        className={cn("inline-block", className)}
        {...props}
      >
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
        <text
          x="50%"
          y="50%"
          dy="0.3em"
          textAnchor="middle"
          className="text-sm"
          fill="currentColor"
        >
          {`${Math.round(percentage)}%`}
        </text>
      </svg>
    );
  }
);

CircularProgress.displayName = "CircularProgress";

export default function CircularProgressDemo() {
  return <CircularProgress value={50} />
}
