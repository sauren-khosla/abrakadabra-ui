import { CircleHelpIcon } from "./circle-help";
import { EarIcon } from "./ear";
import { IconCard } from "@/components/reusable/icon-card";

export function AccessibilityIcons() {
  return (
    <div className="grid grid-cols-5 gap-4 items-center justify-items-center px-4 py-2 mt-4">
      <IconCard icon={<CircleHelpIcon />} iconName="Circle Help" />
      <IconCard
        icon={<EarIcon />}
        icons={[
          <EarIcon key="ear-icon" />,
          <CircleHelpIcon key="circle-help-icon" />,
        ]}
        iconName="Ear"
      />
    </div>
  );
}
