"use client"

import React, { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { XIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface BadgeWithCloseProps extends React.HTMLAttributes<HTMLDivElement> {
  onClose: () => void
  children: React.ReactNode
  variant?: "default" | "secondary" | "destructive" | "outline"
}

export function BadgeWithClose({
  onClose,
  children,
  variant = "default",
  className,
  ...props
}: BadgeWithCloseProps) {
  const iconColor = variant === "default" || variant === "destructive" ? "text-white" : "text-gray-600";

  return (
    <Badge
      variant={variant}
      className={cn("flex items-center gap-1", className)}
      {...props}
    >
      {children}
      <button
        onClick={onClose}
        className="flex items-center justify-center rounded-full hover:bg-gray-200 focus:outline-none"
        aria-label="Remove badge"
      >
        <XIcon className={`h-3 w-3 ${iconColor}`} />
      </button>
    </Badge>
  )
}

export default function BadgeWithCloseDemo() {
  const [filters, setFilters] = useState(["React", "JavaScript", "CSS"])
  // Bring back the filter for the purpose of the demo
  // Here's how it'd look if you did not want to bring back the filter:
  {/*
  const removeFilter = (filterToRemove: string) => {
    setFilters((currentFilters) => {
      return currentFilters.filter((filter) => filter !== filterToRemove);
    });
  }
  */}
  const removeFilter = (filterToRemove: string) => {
    setFilters((currentFilters) => {
      const updatedFilters = currentFilters.filter((filter) => filter !== filterToRemove);
      setTimeout(() => {
        setFilters((prevFilters) => {
          if (!prevFilters.includes(filterToRemove)) {
            return [...prevFilters, filterToRemove];
          }
          return prevFilters;
        });
      }, 3000);
      return updatedFilters;
    });
  }

  return (
    <div className="flex flex-wrap gap-2 p-4">
      {filters.map((filter, index) => (
        <BadgeWithClose
          key={`${filter}-${index}`}
          variant="secondary"
          onClose={() => removeFilter(filter)}
        >
          {filter}
        </BadgeWithClose>
      ))}
      {filters.length === 0 && <span className="text-gray-500">No active filters.</span>}
    </div>
  )
}