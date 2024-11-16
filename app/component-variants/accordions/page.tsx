import { Header } from "@/components/reusable/header";
import { ComponentCard } from "@/components/reusable/component-card";
import { RightSidebar } from "@/components/reusable/right-sidebar";
import FAQAccordionDemo from "./faq-accordion";
import ProcessAccordionDemo from "./process-accordion";
import FeaturesAccordion from "./features-accordion";
import { Title } from "@/components/reusable/title";

export default function Accordions() {
  const quickLinks = [
    { href: "#faq-accordion", label: "FAQ Accordion" },
    { href: "#process-accordion", label: "Process Accordion" },
    { href: "#features-accordion", label: "Features Accordion" },
  ];

  return (
    <div className="flex min-h-screen">
      <div className="w-2/3">
        <Header
          title="Accordions"
          shadcnLink="https://ui.shadcn.com/docs/components/accordion"
          shadComponentName="<Accordion />"
        />
        <div className="flex flex-col px-6 pt-4">
          <Title
            title="FAQ Accordion"
            id="faq-accordion"
            description="A component that features accordions designed for frequently asked questions, with capabilities for searching and filtering by tags."
            codeLink="https://github.com/sauren-khosla/abrakadabra-ui/blob/main/app/component-variants/accordions/faq-accordion.tsx"
          />
          <ComponentCard>
            <FAQAccordionDemo />
          </ComponentCard>
          <Title
            title="Process Accordion"
            id="process-accordion"
            description="A component that displays process steps with a progress bar and expandable descriptions."
            codeLink="https://github.com/sauren-khosla/abrakadabra-ui/blob/main/app/component-variants/accordions/process-accordion.tsx"
          />
          <ComponentCard>
            <ProcessAccordionDemo />
          </ComponentCard>
          <Title
            title="Features Accordion"
            id="features-accordion"
            description="A component that displays product features in an accordion format, allowing users to expand each feature to view its details."
            codeLink="https://github.com/sauren-khosla/abrakadabra-ui/blob/main/app/component-variants/accordions/features-accordion.tsx"
          />
          <ComponentCard>
            <FeaturesAccordion />
          </ComponentCard>
        </div>
      </div>
      <RightSidebar links={quickLinks} />
    </div>
  );
}
