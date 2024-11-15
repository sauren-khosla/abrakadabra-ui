"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { SettingsIcon, LogOutIcon, UserIcon, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface AvatarDropdownProps {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: "small" | "medium" | "large";
}

const sizeClasses: Record<NonNullable<AvatarDropdownProps["size"]>, string> = {
  small: "h-8 w-8",
  medium: "h-10 w-10",
  large: "h-14 w-14",
};

export function AvatarDropdown({
  src,
  alt,
  fallback,
  size = "medium",
}: AvatarDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          className={cn("inline-block", sizeClasses[size], "cursor-pointer")}
        >
          <Avatar>
            {src ? (
              <AvatarImage src={src} alt={alt} />
            ) : (
              <AvatarFallback>{fallback || "?"}</AvatarFallback>
            )}
          </Avatar>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" sideOffset={5}>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild className="cursor-pointer">
          <div className="flex items-center w-full">
            <UserIcon className="mr-2 h-4 w-4" />
            Profile
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="cursor-pointer">
          <div className="flex items-center w-full">
            <SettingsIcon className="mr-2 h-4 w-4" />
            Settings
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="cursor-pointer">
          <div className="flex items-center w-full">
            <HelpCircle className="mr-2 h-4 w-4" />
            Help
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild className="flex items-center cursor-pointer">
          <div className="flex items-center w-full">
            <LogOutIcon className="mr-2 h-4 w-4" />
            Logout
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default function AvatarDropdownDemo() {
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <AvatarDropdown
        src="https://github.com/shadcn.png"
        alt="@shadcn"
        size="medium"
      />
    </div>
  );
}
