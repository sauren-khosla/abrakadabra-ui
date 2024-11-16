import { Header } from "@/components/reusable/header";
import { ComponentCard } from "@/components/reusable/component-card";
import { RightSidebar } from "@/components/reusable/right-sidebar";
import { Title } from "@/components/reusable/title";
import SplitButtonDemo from "./split-button";
import BadgeButtonDemo from "./badge-button";

export default function Buttons() {
  const quickLinks = [
    { href: "#split-button", label: "Split Button" },
    { href: "#badge-button", label: "Badge Button" },
  ];

  return (
    <div className="flex min-h-screen">
      <div className="w-2/3">
        <Header
          title="Buttons"
          shadcnLink="https://ui.shadcn.com/docs/components/button"
          shadComponentName="<Button />"
        />

        <div className="flex flex-col px-6 pt-4">
          <Title
            title="Split Button"
            id="split-button"
            description="A button component that combines a primary action with a dropdown for additional actions."
            codeLink="https://github.com/sauren-khosla/abrakadabra-ui/blob/main/app/component-variants/buttons/split-button.tsx"
          />
          <ComponentCard>
            <SplitButtonDemo />
          </ComponentCard>

          <Title
            title="Badge Button"
            id="badge-button"
            description="A button component that includes a badge to display notifications or counts."
            codeLink="https://github.com/sauren-khosla/abrakadabra-ui/blob/main/app/component-variants/buttons/badge-button.tsx"
          />
          <ComponentCard>
            <BadgeButtonDemo />
          </ComponentCard>
        </div>
      </div>

      <RightSidebar links={quickLinks} />
    </div>
  );
}
