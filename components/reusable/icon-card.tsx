"use client";

import React, { useState } from "react";
import clsx from "clsx";
import { Copy, Download, Github } from "lucide-react";
import { Separator } from "../ui/separator";

interface IconCardProps {
  icon: React.ReactNode;
  iconName: string;
  className?: string;
  icons?: React.ReactNode[];
}

export function IconCard({
  icon,
  iconName,
  className = "",
  icons,
}: IconCardProps) {
  const baseClassName =
    "flex rounded-md items-center justify-between flex-row relative border px-4 border border-slate-300 border-opacity-50 w-44 h-36";
  const combinedClassName = clsx(baseClassName, className);

  // If icons prop is provided, use it; else use [icon]
  const iconsToDisplay = icons && icons.length > 0 ? icons : [icon];

  // State to keep track of current icon index
  const [currentIconIndex, setCurrentIconIndex] = useState(0);

  const handleCopyCode = () => {
    // Logic to copy the code
    console.log(`Copying code for ${iconName}`);
  };

  const handleDownloadCode = () => {
    // Logic to download the code
    console.log(`Downloading code for ${iconName}`);
  };

  const handleViewOnGitHub = () => {
    const url = `https://github.com/sauren-khosla/abrakadabra-ui/blob/main/app/animated-icons/social/${iconName}.tsx`;
    window.open(url, "_blank");
  };

  return (
    <div className={combinedClassName}>
      <div className="flex flex-col items-center justify-center space-y-2">
        <button
          className="p-2 hover:bg-gray-100 rounded-md"
          onClick={handleCopyCode}
        >
          <Copy className="hover:bg-gray-100 rounded-md" size={16} />
        </button>
        <button
          className="p-2 hover:bg-gray-100 rounded-md"
          onClick={handleDownloadCode}
        >
          <Download className="hover:bg-gray-100 rounded-md" size={16} />
        </button>
        <button
          className="p-2 hover:bg-gray-100 rounded-md"
          onClick={handleViewOnGitHub}
        >
          <Github className="hover:bg-gray-100 rounded-md" size={16} />
        </button>
      </div>
      <Separator orientation="vertical" className="h-16" />
      <div className="flex flex-col items-center justify-center mr-2 space-y-2">
        {/* Icon Container */}
        <div className="relative w-full h-12 flex items-center justify-center">
          {iconsToDisplay.map((iconElement, index) => (
            <div
              key={index}
              className="absolute inset-0 flex items-center justify-center"
              style={{
                opacity: index === currentIconIndex ? 1 : 0,
                pointerEvents: index === currentIconIndex ? "auto" : "none",
                transition: "opacity 0.3s",
              }}
            >
              {iconElement}
            </div>
          ))}
        </div>
        <div className="text-xs text-slate-800 w-16 self-center items-center text-center flex justify-center">
          {iconName}
        </div>
        {/* Dots */}
        {iconsToDisplay.length > 1 && (
          <div className="absolute bottom-2 space-x-1">
            {iconsToDisplay.map((_, index) => (
              <button
                key={index}
                className={`w-1.5 h-1.5 rounded-full ${
                  index === currentIconIndex ? "bg-black" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIconIndex(index)}
              ></button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
