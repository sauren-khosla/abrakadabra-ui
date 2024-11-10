"use client"

import * as React from "react"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import { Minus, Plus } from "lucide-react";

export type BatteryProgressProps = React.ComponentPropsWithoutRef<typeof Progress>;

const BatteryProgress = React.forwardRef<
  React.ElementRef<typeof Progress>,
  BatteryProgressProps
>(({ className, value, ...props }, ref) => {
  return (
    <div className={cn("flex items-center", className)}>
      <div className="relative w-16 sm:w-24 md:w-32 h-8 border-2 border-gray-500 rounded-sm overflow-hidden">
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

export default function BatteryProgressDemo() {
  const [value, setValue] = React.useState(50)

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      <BatteryProgress value={value} />
      <div className="flex items-center space-x-4">
        <button
          className="btn btn-secondary"
          onClick={() => setValue((prev) => Math.max(prev - 10, 0))}
        >
          <Minus size={12}/>
        </button>
        <button
          className="btn btn-primary"
          onClick={() => setValue((prev) => Math.min(prev + 10, 100))}
        >
          <Plus size={12}/>
        </button>
      </div>
    </div>
  )
}