"use client";

import React from "react";
import clsx from "clsx";
import { Copy, Download, Github } from "lucide-react";
import { Separator } from "../ui/separator";

interface IconCardProps {
  icon: React.ReactNode;
  iconName: string;
  className?: string;
}

export function IconCard({ icon, iconName, className = "" }: IconCardProps) {
  const baseClassName =
    "flex rounded-md items-center justify-between flex-row relative border px-4 border border-slate-300 border-opacity-50 w-44 h-36";
  const combinedClassName = clsx(baseClassName, className);

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
      <div className="flex flex-col items-center justify-center mr-3 space-y-2">
        <div className="">{icon}</div>
        <div className="text-xs text-slate-800">{iconName}</div>
      </div>
    </div>
  );
}
