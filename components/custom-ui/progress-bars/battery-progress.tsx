"use client"

import * as React from "react"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

export interface BatteryProgressProps
  extends React.ComponentPropsWithoutRef<typeof Progress> { }

const BatteryProgress = React.forwardRef<
  React.ElementRef<typeof Progress>,
  BatteryProgressProps
>(({ className, value, ...props }, ref) => {
  return (
    <div className={cn("flex items-center", className)}>
      <div className="relative w-32 h-8 border-2 border-gray-500 rounded-sm overflow-hidden">
        <Progress
          ref={ref}
          value={value}
          className="absolute inset-0 h-full bg-transparent rounded-none"
          {...props}
        />
        <div className="absolute top-1/2 right-[-6px] transform -translate-y-1/2 w-2 h-4 bg-gray-500 rounded-sm" />
      </div>
      <span className="ml-2 text-sm font-medium">{`${Math.round(
        value || 0
      )}%`}</span>
    </div>
  )
})

BatteryProgress.displayName = "BatteryProgress"

export { BatteryProgress }