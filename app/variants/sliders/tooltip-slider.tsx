"use client"

import React, { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { cn } from "@/lib/utils"

type TooltipSliderProps = React.ComponentProps<typeof Slider> & {
  tooltipFormatter?: (value: number) => string
}

export const TooltipSlider: React.FC<TooltipSliderProps> = ({
  className,
  tooltipFormatter = (value) => value.toString(),
  value,
  onValueChange,
  ...props
}) => {
  const [currentValue, setCurrentValue] = useState<number>(value ? value[0] : 0)

  const handleChange = (val: number[]) => {
    setCurrentValue(val[0]);
    if (onValueChange) {
      onValueChange(val);
    }
  }

  return (
    <div className={cn("relative flex flex-col items-center", className)}>
      <Slider
        {...props}
        value={value}
        onValueChange={handleChange}
        className="relative flex w-full touch-none select-none items-center"
      >
      </Slider>
      <div className="flex justify-center w-full">
        <div className="relative mt-3">
          <span className="px-2 py-1 text-xs text-white bg-black rounded-md pointer-events-none">
            {tooltipFormatter(currentValue)}
          </span>
        </div>
      </div>
    </div>
  )
}

TooltipSlider.displayName = "TooltipSlider"

export default function TooltipSliderDemo() {
  const [value, setValue] = useState([50])

  return (
    <div className="flex flex-col items-center justify-center w-full space-y-6">
      <TooltipSlider
        value={value}
        onValueChange={setValue}
        max={100}
        step={1}
        className="w-3/4"
        tooltipFormatter={(val) => `${val}%`}
      />
    </div>
  )
}