"use client";

import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ValidatedInputAltProps extends React.ComponentProps<typeof Input> {
  className?: string;
}

const takenUsernames = ["john", "jane", "admin", "user123"];

export const ValidatedInputAlt: React.FC<ValidatedInputAltProps> = ({
  className,
  ...props
}) => {
  const [username, setUsername] = useState("");
  const [status, setStatus] = useState<
    "checking" | "available" | "unavailable" | null
  >(null);

  useEffect(() => {
    if (!username) {
      setStatus(null);
      return;
    }

    setStatus("checking");

    const handler = setTimeout(() => {
      if (takenUsernames.includes(username.toLowerCase())) {
        setStatus("unavailable");
      } else {
        setStatus("available");
      }
    }, 1000); // Simulate API delay

    return () => {
      clearTimeout(handler);
    };
  }, [username]);

  return (
    <div className="w-full max-w-md">
      <Input
        {...props}
        className={cn(className)}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Choose a username"
      />
      {status && (
        <div className="mt-2 flex items-center space-x-1 text-xs">
          {status === "checking" && (
            <Loader2 className="h-3 w-3 animate-spin text-yellow-500" />
          )}
          {status === "available" && (
            <CheckCircle className="h-3 w-3 text-green-500" />
          )}
          {status === "unavailable" && (
            <XCircle className="h-3 w-3 text-red-500" />
          )}
          {status === "checking" && (
            <span className="text-yellow-500">Checking availability...</span>
          )}
          {status === "available" && (
            <span className="text-green-500">Username is available!</span>
          )}
          {status === "unavailable" && (
            <span className="text-red-500">Username is unavailable.</span>
          )}
        </div>
      )}
    </div>
  );
};

ValidatedInputAlt.displayName = "ValidatedInputAlt";

export default function ValidatedInputAltDemo() {
  return (
    <div className="flex flex-col justify-between items-center w-full h-full">
      <div className="flex justify-center items-center w-full flex-grow">
        <ValidatedInputAlt type="text" />
      </div>
      <div className="text-xs text-gray-500 mt-2">
        The unavailable usernames are <code>john</code>, <code>jane</code>,{" "}
        <code>admin</code>, and <code>user123</code>.
      </div>
    </div>
  );
}
