import { IconCard } from "@/components/reusable/icon-card";
import { AtSignIcon } from "./at-sign";
import { BadgeCheckIcon } from "./badge-check";
import { BellIcon } from "./bell";
import { BellDotIcon } from "./bell-dot";
import { BookmarkIcon } from "./bookmark";
import { BookmarkCheckIcon } from "./bookmark-check";
import { CircleUserIcon } from "./circle-user";
import { CogIcon } from "./cog";

export function AccountIcons() {
  return (
    <div className="grid grid-cols-5 gap-4 items-center justify-items-center px-4 py-2 mt-4">
      <IconCard icon={<AtSignIcon />} iconName="At Sign" />
      <IconCard icon={<BadgeCheckIcon />} iconName="Badge Check" />
      <IconCard icon={<BellIcon />} iconName="Bell" />
      <IconCard icon={<BellDotIcon />} iconName="Bell Dot" />
      <IconCard icon={<BookmarkIcon />} iconName="Bookmark" />
      <IconCard icon={<BookmarkCheckIcon />} iconName="Bookmark Check" />
      <IconCard icon={<CircleUserIcon />} iconName="Circle User" />
      <IconCard icon={<CogIcon />} iconName="Cog" />
    </div>
  );
}
