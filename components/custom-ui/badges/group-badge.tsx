"use client"

import React from "react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface BadgeGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  orientation?: "horizontal" | "vertical"
  gap?: "small" | "medium" | "large"
}

const gapClasses: Record<NonNullable<BadgeGroupProps["gap"]>, string> = {
  small: "gap-1",
  medium: "gap-2",
  large: "gap-4",
}

export function BadgeGroup({
  children,
  orientation = "horizontal",
  gap = "medium",
  className,
  ...props
}: BadgeGroupProps) {
  return (
    <div
      className={cn(
        "flex w-fit justify-center self-center",
        orientation === "horizontal" ? "flex-row" : "flex-col",
        gapClasses[gap],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default function BadgeGroupDemo() {
  return (
    <div className="flex w-full justify-evenly">
      <div className="flex-col flex">
        <h2 className="text-sm font-medium">Horizontal Badge Group</h2>
        <span className="mb-2 font-light text-xs text-center">Small Gap</span>
        <BadgeGroup orientation="horizontal" gap="small">
          <Badge variant="default">Tag 1</Badge>
          <Badge variant="secondary">Tag 2</Badge>
          <Badge variant="destructive">Tag 3</Badge>
        </BadgeGroup>
      </div>
      <div className="flex-col flex">
        <h2 className="text-sm font-medium">Vertical Badge Group</h2>
        <span className="mb-2 font-light text-xs text-center">Medium Gap</span>
        <BadgeGroup orientation="vertical" gap="medium">
          <Badge variant="default">Item A</Badge>
          <Badge variant="secondary">Item B</Badge>
          <Badge variant="destructive">Item C</Badge>
        </BadgeGroup>
      </div>
    </div>
  )
}