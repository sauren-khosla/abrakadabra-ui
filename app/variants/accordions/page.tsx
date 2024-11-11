import Image from "next/image";
import shadcn from "@/public/shadcn.jpeg";
import FeaturesAccordion from "./features-accordion";
import ProcessAccordionDemo from "./process-accordion";
import FAQAccordionDemo from "./faq-accordion";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export function AccordionCard({
  children,
}: {
  children: React.ReactNode;
  label: string;
  componentName: string;
  shadComponentName?: string;
}) {
  return (
    <div
      className={
        "flex rounded-lg min-h-96 pb-20 pt-2 items-center flex-col relative border mb-8"
      }
    >
      {children}
    </div>
  );
}

export default function Accordions() {
  return (
    <>
      <div className="flex flex-col gap-y-1 mt-4 ml-6">
        <h1 className={"text-3xl text-slate-800 font-bold"}>{"Accordions"}</h1>
        <div className="flex items-center">
          <a
            className="flex"
            href="https://ui.shadcn.com/docs/components/accordion"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Badge className="bg-slate-800">
              <Image
                src={shadcn}
                alt={"Shadcn Logo"}
                width={16}
                height={16}
                className={"rounded-sm object-contain"}
              />
              <span className="ml-2 font-normal">{"<Accordion />"}</span>
              <ExternalLink size={12} className="ml-1.5" />
            </Badge>
          </a>
        </div>
      </div>
      <div className={"flex flex-col px-6 pt-4"}>
        <h2 className={"text-xl font-medium text-slate-700"}>
          {"FAQ Accordion"}
        </h2>
        <p className={"text-sm text-gray-500 mb-4 mt-2 w-1/2"}>
          {
            "A component that features accordions designed for frequently asked questions, with capabilities for searching and filtering by tags."
          }
        </p>
        <a
          className="flex mb-4"
          href="https://github.com/sauren-khosla/abrakadabra-ui/blob/main/app/variants/accordions/faq-accordion.tsx"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Badge className="w-fit flex items-center justify-center">
            Code
            <ExternalLink size={12} className="ml-1.5" />
          </Badge>
        </a>
        <AccordionCard
          label={"FAQ Accordion"}
          componentName={"<FAQAccordion />"}
          shadComponentName="<Accordion />"
        >
          <FAQAccordionDemo />
        </AccordionCard>
        <h2 className={"text-xl font-medium text-slate-700"}>
          {"Process Accordion"}
        </h2>
        <p className={"text-sm text-gray-500 mb-4 mt-2 w-1/2"}>
          {
            "A component that displays process steps with a progress bar and expandable descriptions."
          }
        </p>
        <a
          className="flex mb-4"
          href="https://github.com/sauren-khosla/abrakadabra-ui/blob/main/app/variants/accordions/process-accordion.tsx"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Badge className="w-fit flex items-center justify-center">
            Code
            <ExternalLink size={12} className="ml-1.5" />
          </Badge>
        </a>
        <AccordionCard
          label={"Process Accordion"}
          componentName={"<ProcessAccordion />"}
          shadComponentName="<Accordion />"
        >
          <ProcessAccordionDemo />
        </AccordionCard>
        <h2 className={"text-xl font-medium text-slate-700"}>
          {"Features Accordion"}
        </h2>
        <p className={"text-sm text-gray-500 mb-4 mt-2 w-1/2"}>
          {
            "A component that displays product features in an accordion format, allowing users to expand each feature to view its details."
          }
        </p>
        <a
          className="flex mb-4"
          href="https://github.com/sauren-khosla/abrakadabra-ui/blob/main/app/variants/accordions/features-accordion.tsx"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Badge className="w-fit flex items-center justify-center">
            Code
            <ExternalLink size={12} className="ml-1.5" />
          </Badge>
        </a>
        <AccordionCard
          label={"Features Accordion"}
          componentName={"<FeaturesAccordion />"}
          shadComponentName="<Accordion />"
        >
          <FeaturesAccordion />
        </AccordionCard>
      </div>
    </>
  );
}
