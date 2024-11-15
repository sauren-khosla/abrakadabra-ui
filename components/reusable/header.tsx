import Image from "next/image";
import shadcn from "@/public/shadcn.jpeg";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export function Header({
  title,
  shadcnLink,
  shadComponentName,
}: {
  title: string;
  shadcnLink?: string;
  shadComponentName?: string;
}) {
  return (
    <div className="flex flex-col gap-y-1 mt-4 ml-6">
      <h1 className="text-3xl text-slate-800 font-bold">{title}</h1>
      {shadcnLink && shadComponentName && (
        <div className="flex items-center">
          <a
            className="flex"
            href={shadcnLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Badge className="bg-slate-800">
              <Image
                src={shadcn}
                alt="Shadcn Logo"
                width={16}
                height={16}
                className="rounded-sm object-contain"
              />
              <span className="ml-2 font-normal">{shadComponentName}</span>
              <ExternalLink size={12} className="ml-1.5" />
            </Badge>
          </a>
        </div>
      )}
    </div>
  );
}
