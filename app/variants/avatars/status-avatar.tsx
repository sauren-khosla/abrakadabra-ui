"use client"

import React from "react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

export type Status = "online" | "offline" | "busy" | "away"

interface StatusAvatarProps {
  src?: string
  alt?: string
  fallback?: string
  status?: Status
  size?: "small" | "medium" | "large"
}

const statusColors: Record<Status, string> = {
  online: "bg-green-500",
  offline: "bg-gray-400",
  busy: "bg-red-500",
  away: "bg-yellow-500",
}

const sizeClasses: Record<NonNullable<StatusAvatarProps["size"]>, string> = {
  small: "h-8 w-8",
  medium: "h-10 w-10",
  large: "h-14 w-14",
}

export function StatusAvatar({
  src,
  alt,
  fallback,
  status = "offline",
  size = "medium"
}: StatusAvatarProps) {
  return (
    <div className={cn("relative inline-block", sizeClasses[size])}>
      <Avatar className="h-full w-full">
        {src ? (
          <AvatarImage src={src} alt={alt} />
        ) : (
          <AvatarFallback>{fallback || "?"}</AvatarFallback>
        )}
      </Avatar>
      <span
        className={cn(
          "absolute bottom-0 right-0 block h-3 w-3 rounded-full ring-2 ring-white",
          statusColors[status]
        )}
        aria-label={`User is ${status}`}
      ></span>
    </div>
  )
}

export default function StatusAvatarDemo() {
  return (
    <div className="flex items-center space-x-6 p-4">
      <StatusAvatar
        src="https://avatars.githubusercontent.com/u/52003826?s=400&u=02f4a51d837e8425327f9c37ac69b16409c3d89d&v=4"
        alt="@shadcn"
        status="online"
        size="large"
      />
      <StatusAvatar
        fallback="JD"
        status="busy"
        size="medium"
      />
      <StatusAvatar
        src="https://github.com/shadcn.png"
        alt="@janedoe"
        status="away"
        size="small"
      />
      <StatusAvatar
        fallback="MK"
        status="offline"
        size="medium"
      />
    </div>
  )
}
