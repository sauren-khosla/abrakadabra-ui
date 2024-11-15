"use client"

import React from "react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { CheckCircleIcon, AlertTriangleIcon, InfoIcon } from "lucide-react"

interface IconBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode
  children: React.ReactNode
  variant?: "default" | "secondary" | "destructive" | "outline"
}

export function IconBadge({
  icon,
  children,
  variant = "default",
  className,
  ...props
}: IconBadgeProps) {
  return (
    <Badge variant={variant} className={cn("flex items-center gap-1.5", className)} {...props}>
      {icon}
      {children}
    </Badge>
  )
}

export default function IconBadgeDemo() {
  return (
    <div className="flex flex-col items-start space-y-2 p-4">
      <IconBadge icon={<CheckCircleIcon className="h-3 w-3 text-green-500" />}>
        Success
      </IconBadge>
      <IconBadge icon={<AlertTriangleIcon className="h-3 w-3 text-yellow-400" />} variant="destructive">
        Warning
      </IconBadge>
      <IconBadge icon={<InfoIcon className="h-3 w-3 text-blue-500" />} variant="secondary">
        Information
      </IconBadge>
    </div>
  )
}
