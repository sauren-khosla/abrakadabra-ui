"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDownIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface SplitButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primaryAction: () => void
  secondaryActions: Array<{ label: string; onClick: () => void }>
  primaryLabel: string
  size?: "default" | "sm" | "lg"
  variant?: "default" | "secondary" | "outline" | "destructive" | "link"
}

export function SplitButton({
  primaryAction,
  secondaryActions,
  primaryLabel,
  size = "default",
  variant,
  className,
  ...props
}: SplitButtonProps) {
  return (
    <div className={cn("flex", className)}>
      <Button
        onClick={primaryAction}
        size={size}
        variant={variant}
        className="rounded-r-none"
        {...props}
      >
        {primaryLabel}
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="rounded-l-none w-1 px-3">
            <ChevronDownIcon className="h-2 w-2" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {secondaryActions.map((action, index) => (
            <DropdownMenuItem key={index} onSelect={action.onClick}>
              {action.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default function SplitButtonDemo() {
  const handlePrimary = () => {
    alert("Primary action executed!")
  }

  const handleSecondary1 = () => {
    alert("Secondary action 1 executed!")
  }

  const handleSecondary2 = () => {
    alert("Secondary action 2 executed!")
  }

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      <SplitButton
        primaryAction={handlePrimary}
        primaryLabel="Save"
        secondaryActions={[
          { label: "Save & Publish", onClick: handleSecondary1 },
          { label: "Save as Draft", onClick: handleSecondary2 },
        ]}
      />
      <SplitButton
        primaryAction={handlePrimary}
        primaryLabel="Delete"
        secondaryActions={[
          { label: "Delete Permanently", onClick: handleSecondary1 },
          { label: "Archive", onClick: handleSecondary2 },
        ]}
        variant="destructive"
      />
    </div>
  )
}
