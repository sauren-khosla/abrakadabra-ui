"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { BellIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface BadgeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  badgeContent?: React.ReactNode
  badgeColor?: string
  variant?: "default" | "secondary" | "outline" | "destructive" | "link"
}

export function BadgeButton({
  badgeContent,
  badgeColor = "bg-red-500",
  className,
  children,
  ...props
}: BadgeButtonProps) {
  return (
    <div className={cn("relative inline-block", className)}>
      <Button {...props}>{children}</Button>
      {badgeContent !== undefined && badgeContent !== null && badgeContent !== 0 && (
        <span
          className={cn(
            "absolute top-0 right-0 flex items-center justify-center h-4 w-4 rounded-full text-xs font-bold",
            badgeColor,
            "transform translate-x-1/2 -translate-y-1/2 text-white"
          )}
          aria-label="Badge"
        >
          {badgeContent}
        </span>
      )}
    </div>
  )
}

export default function BadgeButtonDemo() {
  const [notifications, setNotifications] = useState(5)

  const handleClick = () => {
    alert("Notifications button clicked!")
    setNotifications(0)
    // Bring back the notifications for the purpose of the demo
    setTimeout(() => {
      setNotifications(5)
    }, 3000);
  }

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      <BadgeButton
        onClick={handleClick}
        badgeContent={notifications}
        badgeColor="bg-red-600"
        variant="secondary"
      >
        <BellIcon className="h-5 w-5" />
      </BadgeButton>

      <BadgeButton
        onClick={() => alert("Messages clicked!")}
        badgeContent={<span>!</span>}
        badgeColor="bg-yellow-500"
        variant="default"
      >
        Messages
      </BadgeButton>

      <BadgeButton
        onClick={() => alert("Updates clicked!")}
        badgeContent={<div></div>}
        badgeColor="bg-green-500"
        variant="outline"
      >
        Updates
      </BadgeButton>
    </div>
  )
}