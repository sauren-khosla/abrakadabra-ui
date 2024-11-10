import Image from "next/image";
import shadcn from "@/public/shadcn.jpeg";
import FAQAccordionDemo from "./faq-accordion";
import ProcessAccordionDemo from "./process-accordion";
import FeaturesAccordion from "./features-accordion";

export function AccordionCard({
  children,
  label,
  componentName,
  shadComponentName,
}: {
  children: React.ReactNode;
  label: string;
  componentName: string;
  shadComponentName?: string;
}) {
  return (
    <div
      className={
        "flex shadow-lg rounded-lg min-h-96 pb-20 pt-2 items-center flex-col relative bg-gradient-to-t from-gray-100 to-white border px-6"
      }
    >
      {children}
      <div className={"absolute bottom-4 left-4 flex flex-col gap-y-1"}>
        <span className={"font-light text-sm"}>{label}</span>
        <span className={"font-extralight text-xs text-gray-500"}>{componentName}</span>
      </div>
      {shadComponentName ? (
        <div
          className={
            "absolute bottom-4 right-4 bg-gray-50 flex justify-center items-center gap-x-2 text-xs rounded px-2 py-1 shadow-md"
          }
        >
          <Image src={shadcn} alt={"Shadcn Logo"} width={16} height={16} className={"rounded-sm"} />
          <span>{shadComponentName}</span>
        </div>
      ) : null}
    </div>
  );
}

export function Accordions() {
  return (
    <>
        <div className={"font-medium mt-6 ml-6"}>{"Accordions"}</div>
        <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4"}>
          <AccordionCard label={"FAQ Accordion"} componentName={"<FAQAccordion />"} shadComponentName="<Accordion />">
            <FAQAccordionDemo />
          </AccordionCard>
          <AccordionCard label={"Process Accordion"} componentName={"<ProcessAccordion />"} shadComponentName="<Accordion />">
            <ProcessAccordionDemo />
          </AccordionCard>
          <AccordionCard label={"Features Accordion"} componentName={"<FeaturesAccordion />"} shadComponentName="<Accordion />">
            <FeaturesAccordion />
          </AccordionCard>
        </div>
      </>
  )
}
