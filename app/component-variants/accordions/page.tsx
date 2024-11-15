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
        "flex rounded-lg min-h-80 py-6 items-center flex-col relative border mb-8 px-12"
      }
    >
      {children}
    </div>
  );
}

export default function Accordions() {
  return (
    <div className="flex min-h-screen">
      <div className="w-2/3">
        <div className="flex flex-col gap-y-1 mt-4 ml-6">
          <h1 className={"text-3xl text-slate-800 font-bold"}>
            {"Accordions"}
          </h1>
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
          <h2
            className={"text-xl font-medium text-slate-700 scroll-mt-4"}
            id="faq-accordion"
          >
            {"FAQ Accordion"}
          </h2>
          <p className={"text-sm text-gray-500 mb-4 mt-2 w-2/3"}>
            {
              "A component that features accordions designed for frequently asked questions, with capabilities for searching and filtering by tags."
            }
          </p>
          <a
            className="flex mb-4"
            href="https://github.com/sauren-khosla/abrakadabra-ui/blob/main/app/component-variants/accordions/faq-accordion.tsx"
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
          <h2
            className={"text-xl font-medium text-slate-700 scroll-mt-4"}
            id="process-accordion"
          >
            {"Process Accordion"}
          </h2>
          <p className={"text-sm text-gray-500 mb-4 mt-2 w-2/3"}>
            {
              "A component that displays process steps with a progress bar and expandable descriptions."
            }
          </p>
          <a
            className="flex mb-4"
            href="https://github.com/sauren-khosla/abrakadabra-ui/blob/main/app/component-variants/accordions/process-accordion.tsx"
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
          <h2
            className={"text-xl font-medium text-slate-700 scroll-mt-4"}
            id="features-accordion"
          >
            {"Features Accordion"}
          </h2>
          <p className={"text-sm text-gray-500 mb-4 mt-2 w-2/3"}>
            {
              "A component that displays product features in an accordion format, allowing users to expand each feature to view its details."
            }
          </p>
          <a
            className="flex mb-4"
            href="https://github.com/sauren-khosla/abrakadabra-ui/blob/main/app/component-variants/accordions/features-accordion.tsx"
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
      </div>
      <div className="w-1/3 h-screen p-4 px-6 border-l sticky top-0 self-start">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          {"Quick Links"}
        </h2>
        <ul className="space-y-3 text-sm">
          <li>
            <a
              href="#faq-accordion"
              className="text-gray-500 hover:text-gray-800"
            >
              {"FAQ Accordion"}
            </a>
          </li>
          <li>
            <a
              href="#process-accordion"
              className="text-gray-500 hover:text-gray-800"
            >
              {"Process Accordion"}
            </a>
          </li>
          <li>
            <a
              href="#features-accordion"
              className="text-gray-500 hover:text-gray-800"
            >
              {"Features Accordion"}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
