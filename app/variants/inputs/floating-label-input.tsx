"use client"

import React, { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface FloatingLabelInputProps extends React.ComponentProps<typeof Input> {
  label: string
}

export const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({
  label,
  className,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const [hasContent, setHasContent] = useState(false)

  const handleFocus = () => setIsFocused(true)
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false)
    setHasContent(!!e.target.value)
  }

  useEffect(() => {
    setHasContent(!!props.value)
  }, [props.value])

  return (
    <div className="relative w-full max-w-md">
      <Input
        {...props}
        className={cn(className, "peer")}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <label
        className={cn(
          "absolute left-3 top-2 transition-all duration-200 ease-in-out pointer-events-none",
          isFocused || hasContent
            ? "text-xs -translate-y-4 bg-background px-1 text-primary"
            : "text-sm text-muted-foreground"
        )}
      >
        {label}
      </label>
    </div>
  )
}

FloatingLabelInput.displayName = "FloatingLabelInput"

export default function FloatingLabelInputDemo() {
  return (
    <div className="flex justify-center items-center w-full">
      <FloatingLabelInput label="Username" placeholder=" " />
    </div>
  )
}