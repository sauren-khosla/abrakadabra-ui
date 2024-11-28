import { Header } from "@/components/reusable/header";
import { ComponentCard } from "@/components/reusable/component-card";
import { RightSidebar } from "@/components/reusable/right-sidebar";
import { Title } from "@/components/reusable/title";
import MultiLevelMenubarDemo from "./multi-level-menubar";

export default function MenuBars() {
  const quickLinks = [
    { href: "#multi-level-menubar", label: "Multi-Level Menubar" },
  ];

  return (
    <div className="flex min-h-screen">
      <div className="w-2/3">
        <Header
          title="Menu Bars"
          shadcnLink="https://ui.shadcn.com/docs/components/menubar"
          shadComponentName="<Menubar />"
        />

        <div className="flex flex-col px-6 pt-4">
          <Title
            title="Multi-Level Menubar"
            id="multi-level-menubar"
            description="A menubar component that supports multiple levels of navigation, allowing for complex menu structures."
            codeLink="https://github.com/sauren-khosla/alakazam-ui/blob/main/app/component-variants/menu-bars/multi-level-menubar.tsx"
          />
          <ComponentCard>
            <MultiLevelMenubarDemo />
          </ComponentCard>
        </div>
      </div>

      <RightSidebar links={quickLinks} />
    </div>
  );
}
