import { CircleHelpIcon } from "./circle-help";
import { EarIcon } from "./ear";
import { IconCard } from "@/components/reusable/icon-card";
import { EarOffIcon } from "./ear-off";
import { EyeIcon } from "./eye";
import { EyeOffIcon } from "./eye-off";
import { InfoIcon } from "./info";
import { MoonIcon } from "./moon";
import { ScanEyeIcon } from "./eye-scan";

export function AccessibilityIcons() {
  return (
    <div className="grid grid-cols-5 gap-4 items-center justify-items-center px-4 py-2 mt-4">
      <IconCard icon={<CircleHelpIcon />} iconName="Circle Help" />
      <IconCard
        icon={<EarIcon />}
        icons={[<EarIcon key="ear-icon" />, <EarOffIcon key="ear-off-icon" />]}
        iconName="Ear"
      />
      <IconCard
        icon={<EyeIcon />}
        icons={[<EyeIcon key="eye-icon" />, <EyeOffIcon key="eye-off-icon" />]}
        iconName="Eye"
      />
      <IconCard icon={<InfoIcon />} iconName="Info" />
      <IconCard icon={<MoonIcon />} iconName="Moon" />
      <IconCard icon={<ScanEyeIcon />} iconName="Eye Scan" />
    </div>
  );
}
