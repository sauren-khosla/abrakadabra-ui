import { Header } from "@/components/reusable/header";
import { Title } from "@/components/reusable/title";
import { ComponentCard } from "@/components/reusable/component-card";
import { RightSidebar } from "@/components/reusable/right-sidebar";
import StatusAvatarDemo from "./status-avatar";
import GroupAvatarDemo from "./group-avatar";
import DropdownAvatarDemo from "./dropdown-avatar";

export default function Avatars() {
  const quickLinks = [
    { href: "#status-avatar", label: "Status Avatar" },
    { href: "#dropdown-avatar", label: "Dropdown Avatar" },
    { href: "#group-avatar", label: "Group Avatar" },
  ];

  return (
    <div className="flex min-h-screen">
      <div className="w-2/3">
        <Header
          title="Avatars"
          shadcnLink="https://ui.shadcn.com/docs/components/avatar"
          shadComponentName="<Avatar />"
        />

        <div className="flex flex-col px-6 pt-4">
          <Title
            title="Status Avatar"
            id="status-avatar"
            description="An avatar component that displays a user's profile picture with an online/offline status indicator."
            codeLink="https://github.com/sauren-khosla/alakazam-ui/blob/main/app/component-variants/avatars/status-avatar.tsx"
          />
          <ComponentCard>
            <StatusAvatarDemo />
          </ComponentCard>

          <Title
            title="Dropdown Avatar"
            id="dropdown-avatar"
            description="An avatar component with a dropdown menu for user settings or profile actions."
            codeLink="https://github.com/sauren-khosla/alakazam-ui/blob/main/app/component-variants/avatars/dropdown-avatar.tsx"
          />
          <ComponentCard className="">
            <DropdownAvatarDemo />
          </ComponentCard>

          <Title
            title="Group Avatar"
            id="group-avatar"
            description="An avatar component that displays a group of users in a stacked or clustered format."
            codeLink="https://github.com/sauren-khosla/alakazam-ui/blob/main/app/component-variants/avatars/group-avatar.tsx"
          />
          <ComponentCard>
            <GroupAvatarDemo />
          </ComponentCard>
        </div>
      </div>

      <RightSidebar links={quickLinks} />
    </div>
  );
}
