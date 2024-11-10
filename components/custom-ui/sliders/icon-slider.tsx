"use client"

import React, { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { cn } from "@/lib/utils"
import { Sun, Moon } from "lucide-react"

type IconSliderProps = React.ComponentProps<typeof Slider> & {
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export const IconSlider: React.FC<IconSliderProps> = ({
  leftIcon,
  rightIcon,
  className,
  ...props
}) => {
  return (
    <div className={cn("flex items-center space-x-2 w-full", className)}>
      {leftIcon && <div className="flex">{leftIcon}</div>}
      <Slider {...props} className="w-full" />
      {rightIcon && <div className="flex">{rightIcon}</div>}
    </div>
  )
}

IconSlider.displayName = "IconSlider"

export default function IconSliderDemo() {
  const [value, setValue] = useState([50])

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <IconSlider
        value={value}
        onValueChange={setValue}
        max={100}
        step={1}
        leftIcon={<Sun className="h-6 w-6 text-yellow-500" />}
        rightIcon={<Moon className="h-6 w-6 text-gray-700" />}
      />
    </div>
  )
}