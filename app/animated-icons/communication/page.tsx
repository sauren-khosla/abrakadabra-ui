import { Header } from "@/components/reusable/header";
import { LinkedInIcon } from "./linkedin";
import { IconCard } from "@/components/reusable/icon-card"; // Import the IconCard component

export default function SocialIcons() {
  return (
    <div className="flex min-h-screen">
      <div className="w-full">
        <Header title="Social Icons" />
        <div className="grid grid-cols-5 gap-4 items-center justify-items-center px-8 py-2 mt-4">
          <IconCard icon={<LinkedInIcon />} iconName="linkedin" />
        </div>
      </div>
    </div>
  );
}
