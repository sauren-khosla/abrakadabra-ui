"use client";

import React, { useEffect, useState } from "react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { cn } from "@/lib/utils";

interface TimedAlertProps {
  title: string;
  description: string;
  duration?: number; // in milliseconds
  variant?: "default" | "destructive";
  dismissible?: boolean;
  repeatDelay?: number; // strictly for demo purposes
}

export function TimedAlert({
  title,
  description,
  duration = 5000,
  variant = "default",
  repeatDelay = 3000,
}: TimedAlertProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [remainingTime, setRemainingTime] = useState(duration / 1000);

  useEffect(() => {
    if (isVisible) {
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, duration);

      const interval = setInterval(() => {
        setRemainingTime((prev) => prev - 1);
      }, 1000);

      return () => {
        clearTimeout(hideTimer);
        clearInterval(interval);
      };
    } else {
      // For the demo: timer to make the alert reappear after the specified delay
      const showTimer = setTimeout(() => {
        setIsVisible(true);
        setRemainingTime(duration / 1000);
      }, repeatDelay);

      // Clean up timer when the effect cleans up
      return () => clearTimeout(showTimer);
    }
  }, [isVisible, duration, repeatDelay]);

  if (!isVisible) return null;

  return (
    <Alert variant={variant} className={cn("flex items-start relative")}>
      <div className="flex-1">
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription className="flex justify-between w-full">
          <span>{description}</span>
          <span className="self-end">{remainingTime}s</span>
        </AlertDescription>
      </div>
    </Alert>
  );
}

export default function TimedAlertDemo() {
  return (
    <div className="w-full max-w-md mx-auto p-4 space-y-4">
      <TimedAlert
        title="Success!"
        description="Your profile has been updated."
        variant="default"
        duration={3000}
        repeatDelay={5000} // Specify delay before reappearing for demo purposes
      />
      <TimedAlert
        title="Warning!"
        description="Your subscription is about to expire."
        variant="default"
        duration={7000}
        repeatDelay={1000}
      />
      <TimedAlert
        title="Error!"
        description="Failed to save changes."
        variant="destructive"
        duration={5000}
        repeatDelay={3000}
      />
    </div>
  );
}
