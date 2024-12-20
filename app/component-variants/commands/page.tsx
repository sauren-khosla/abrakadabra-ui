import { Header } from "@/components/reusable/header";
import { ComponentCard } from "@/components/reusable/component-card";
import { RightSidebar } from "@/components/reusable/right-sidebar";
import { Title } from "@/components/reusable/title";
import RecentsCommandDemo from "./recents-command";
import CategoriesCommandDemo from "./categories-command";

export default function Commands() {
  const quickLinks = [
    { href: "#recents-command", label: "Recents Command" },
    { href: "#categories-command", label: "Categories Command" },
  ];

  return (
    <div className="flex min-h-screen">
      <div className="w-2/3">
        <Header
          title="Commands"
          shadcnLink="https://ui.shadcn.com/docs/components/command"
          shadComponentName="<Command />"
        />

        <div className="flex flex-col px-6 pt-4">
          <Title
            title="Recents Command"
            id="recents-command"
            description="A command component that displays recently used commands for quick access."
            codeLink="https://github.com/sauren-khosla/alakazam-ui/blob/main/app/component-variants/commands/recents-command.tsx"
          />
          <ComponentCard>
            <RecentsCommandDemo />
          </ComponentCard>

          <Title
            title="Categories Command"
            id="categories-command"
            description="A command component organized into categories, allowing users to navigate and select commands efficiently."
            codeLink="https://github.com/sauren-khosla/alakazam-ui/blob/main/app/component-variants/commands/categories-command.tsx"
          />
          <ComponentCard>
            <CategoriesCommandDemo />
          </ComponentCard>
        </div>
      </div>

      <RightSidebar links={quickLinks} />
    </div>
  );
}
