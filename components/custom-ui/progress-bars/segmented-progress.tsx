"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface SegmentedProgressProps
  extends React.HTMLAttributes<HTMLDivElement> {
  segments: number;
  completed: number;
}

const SegmentedProgress = React.forwardRef<
  HTMLDivElement,
  SegmentedProgressProps
>(({ className, segments, completed, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("flex w-64 sm:w-64 md:w-56", className)} {...props}>
      {Array.from({ length: segments }, (_, index) => (
        <div
          key={index}
          className={cn(
            "flex-1 h-3 mx-0.5 rounded-full",
            index < completed ? "bg-black" : "bg-gray-200"
          )}
        />
      ))}
    </div>
  );
});

SegmentedProgress.displayName = "SegmentedProgress";

export default function SegmentedProgressDemo() {
  return <SegmentedProgress segments={5} completed={3} />
}

