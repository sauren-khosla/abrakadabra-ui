import { SocialIcons } from "./social/icons";
import { AccessibilityIcons } from "./accessibility/icons";

export default function IconCategories() {
  return (
    <div className="flex min-h-screen">
      <div className="w-full">
        <div className="px-4 py-2 mt-4 space-y-8">
          <div>
            <div className="text-2xl font-bold px-4">Social</div>
            <SocialIcons />
          </div>
          <div>
            <div className="text-2xl font-bold px-4">Accessibility</div>
            <AccessibilityIcons />
          </div>
        </div>
      </div>
    </div>
  );
}
