import Image from "next/image";
import shadcn from "@/public/shadcn.jpeg";
import StatusAvatarDemo from "./status-avatar";
import GroupAvatarDemo from "./group-avatar";
import DropdownAvatarDemo from "./dropdown-avatar";

export function AvatarCard({
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
        "flex shadow-lg rounded-lg min-h-44 items-center justify-center pt-2 pb-12 flex-col relative bg-gradient-to-t from-gray-100 to-white border px-6"
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

export function Avatars() {
  return (
    <>
      <div className={"font-medium mt-6 ml-6"}>{"Avatars"}</div>
      <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4"}>
        <AvatarCard label={"Status Avatar"} componentName={"<StatusAvatar />"} shadComponentName="<Avatar />">
          <StatusAvatarDemo />
        </AvatarCard>
        <AvatarCard label={"Group Avatar"} componentName={"<GroupAvatar />"} shadComponentName="<Avatar />">
          <GroupAvatarDemo />
        </AvatarCard>
        <AvatarCard label={"Dropdown Avatar"} componentName={"<DropdownAvatar />"} shadComponentName="<Avatar />">
          <DropdownAvatarDemo />
        </AvatarCard>
      </div>
    </>
  )
}