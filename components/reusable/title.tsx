import { Badge } from "@/components/ui/badge";
import { ExternalLink, Info } from "lucide-react";

export function Title({
  title,
  id,
  description,
  codeLink,
  notShadcn,
}: {
  title: string;
  id: string;
  description: string;
  codeLink?: string;
  notShadcn?: boolean;
}) {
  return (
    <div className="">
      <h2 className="text-xl font-medium text-slate-700 scroll-mt-4" id={id}>
        {title}
      </h2>
      <p className="text-sm text-gray-500 mt-2 w-2/3">{description}</p>
      {notShadcn && (
        <div className="flex items-center text-xs text-red-500 mt-1.5 w-2/3">
          <Info size={12} className="mr-1" />
          <span>Does not use shadcn</span>
        </div>
      )}
      {codeLink && (
        <a
          className="flex my-4 w-fit"
          href={codeLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Badge className="w-fit flex items-center justify-center">
            Code
            <ExternalLink size={12} className="ml-1.5" />
          </Badge>
        </a>
      )}
    </div>
  );
}
