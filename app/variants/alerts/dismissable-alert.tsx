"use client"

import React, { useState } from "react"
import { RocketIcon, X } from "lucide-react"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { LinkBreak2Icon } from "@radix-ui/react-icons"

interface DismissibleAlertProps {
  title: string
  description: string
  variant?: "default" | "destructive"
}

export function DismissibleAlert({
  title,
  description,
  variant = "default",
}: DismissibleAlertProps) {
  // Visibility logic is strictly for the purposes of the demo
  const [isVisible, setIsVisible] = useState(true)

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(() => setIsVisible(true), 3000)
  }

  if (!isVisible) return null

  return (
    <Alert
      variant={variant}
    >
      {variant === "default" && <RocketIcon className="h-4 w-4" />}
      {variant === "destructive" && <LinkBreak2Icon className="h-4 w-4" />}
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
      <button
        onClick={handleClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
        aria-label="Close alert"
      >
        <X className="h-4 w-4" />
      </button>
    </Alert>
  )
}

export default function DismissibleAlertDemo() {
  return (
    <div className="w-full max-w-md mx-auto p-4 flex gap-y-4 flex-col">
      <DismissibleAlert
        title="Success!"
        description="Your changes have been saved successfully."
        variant="default"
      />
      <DismissibleAlert
        title="Error!"
        description="There was a problem processing your request."
        variant="destructive"
      />
    </div>
  )
}