import { Header } from "@/components/reusable/header";
import { Title } from "@/components/reusable/title";
import { Card } from "@/components/reusable/card";
import { RightSidebar } from "@/components/reusable/right-sidebar";
import IconBadgeDemo from "./icon-badge";
import GroupBadgeDemo from "./group-badge";
import CloseBadgeDemo from "./close-badge";

export default function Badges() {
  const quickLinks = [
    { href: "#icon-badge", label: "Icon Badge" },
    { href: "#group-badge", label: "Group Badge" },
    { href: "#close-badge", label: "Close Badge" },
  ];

  return (
    <div className="flex min-h-screen">
      <div className="w-2/3">
        <Header
          title="Badges"
          shadcnLink="https://ui.shadcn.com/docs/components/badge"
          shadComponentName="<Badge />"
        />

        <div className="flex flex-col px-6 pt-4">
          <Title
            title="Icon Badge"
            id="icon-badge"
            description="A badge component that includes an icon alongside text."
            codeLink="https://github.com/sauren-khosla/abrakadabra-ui/blob/main/app/component-variants/badges/icon-badge.tsx"
          />
          <Card className="min-h-24">
            <IconBadgeDemo />
          </Card>

          <Title
            title="Group Badge"
            id="group-badge"
            description="A badge component that displays a group of badges together."
            codeLink="https://github.com/sauren-khosla/abrakadabra-ui/blob/main/app/component-variants/badges/group-badge.tsx"
          />
          <Card className="min-h-28">
            <GroupBadgeDemo />
          </Card>

          <Title
            title="Close Badge"
            id="close-badge"
            description="A badge component with a close or remove icon."
            codeLink="https://github.com/sauren-khosla/abrakadabra-ui/blob/main/app/component-variants/badges/close-badge.tsx"
          />
          <Card className="min-h-24">
            <CloseBadgeDemo />
          </Card>
        </div>
      </div>

      <RightSidebar links={quickLinks} />
    </div>
  );
}
