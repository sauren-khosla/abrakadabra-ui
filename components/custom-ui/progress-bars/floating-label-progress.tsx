"use client"

import * as React from "react"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

export interface FloatingLabelProgressProps
  extends React.ComponentPropsWithoutRef<typeof Progress> { }

const FloatingLabelProgress = React.forwardRef<
  React.ElementRef<typeof Progress>,
  FloatingLabelProgressProps
>(({ className, value, ...props }, ref) => {
  const percentage = value || 0

  return (
    <div className={cn("relative w-3/4", className)}>
      <Progress ref={ref} value={percentage} {...props} />
      <div
        className="absolute top-4 flex items-center justify-center"
        style={{ left: `${percentage}%`, transform: "translateX(-50%)" }}
      >
        <span className="text-xs px-1 py-0.5 rounded shadow-md border-[0.1px]">
          {`${Math.round(percentage)}%`}
        </span>
      </div>
    </div>
  )
})

FloatingLabelProgress.displayName = "FloatingLabelProgress"

export { FloatingLabelProgress }