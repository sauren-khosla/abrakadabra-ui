"use client";

import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

export default function BreadcrumbClient() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);
  const directoryDisplay = pathSegments[0]?.replace(/-/g, " ") || "Home";
  const pageDisplay = pathSegments[1]?.replace(/-/g, " ") || "";

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem className="hidden md:block">
          <BreadcrumbPage className="text-gray-500">
            {directoryDisplay}
          </BreadcrumbPage>
        </BreadcrumbItem>
        {pageDisplay && <BreadcrumbSeparator className="hidden md:block" />}
        <BreadcrumbItem>
          <BreadcrumbPage>{pageDisplay}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
