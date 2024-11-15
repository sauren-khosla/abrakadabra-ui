import { Header } from "@/components/reusable/header";
import { Card } from "@/components/reusable/card";
import { RightSidebar } from "@/components/reusable/right-sidebar";
import { Title } from "@/components/reusable/title";
import BatteryProgressDemo from "./battery-progress";
import ProgressCircleWithIconDemo from "./circle-icon-progress";
import CircularProgressDemo from "./circular-progress";
import FloatingLabelProgressDemo from "./floating-label-progress";
import SegmentedProgressDemo from "./segmented-progress";

export default function ProgressBars() {
  const quickLinks = [
    { href: "#battery-progress", label: "Battery Progress" },
    { href: "#circle-with-icon", label: "Circle with Icon" },
    { href: "#circular", label: "Circular" },
    { href: "#floating-label", label: "Floating Label" },
    { href: "#segmented", label: "Segmented" },
  ];

  return (
    <div className="flex min-h-screen">
      <div className="w-2/3">
        <Header
          title="Progress Indicators"
          shadcnLink="https://ui.shadcn.com/docs/components/progress"
          shadComponentName="<Progress />"
        />

        <div className="flex flex-col px-6 pt-4">
          <Title
            title="Battery Progress"
            id="battery-progress"
            description="A progress indicator that visually represents battery levels, mimicking a battery's charge state."
            codeLink="https://github.com/your-repo/progress-bars/battery-progress.tsx"
          />
          <Card className="min-h-32">
            <BatteryProgressDemo />
          </Card>

          <Title
            title="Circle with Icon"
            id="circle-with-icon"
            description="A circular progress indicator that integrates an icon at its center, enhancing visual feedback."
            codeLink="https://github.com/your-repo/progress-bars/circle-icon-progress.tsx"
            notShadcn={true}
          />
          <Card className="min-h-24">
            <ProgressCircleWithIconDemo />
          </Card>

          <Title
            title="Circular"
            id="circular"
            description="A standard circular progress indicator, ideal for representing ongoing processes."
            codeLink="https://github.com/your-repo/progress-bars/circular-progress.tsx"
            notShadcn={true}
          />
          <Card className="min-h-24">
            <CircularProgressDemo />
          </Card>

          <Title
            title="Floating Label"
            id="floating-label"
            description="A progress indicator with a floating label that displays dynamic progress values."
            codeLink="https://github.com/your-repo/progress-bars/floating-label-progress.tsx"
          />
          <Card className="min-h-20">
            <FloatingLabelProgressDemo />
          </Card>

          <Title
            title="Segmented"
            id="segmented"
            description="A segmented progress indicator that breaks down progress into distinct, labeled segments."
            codeLink="https://github.com/your-repo/progress-bars/segmented-progress.tsx"
            notShadcn={true}
          />
          <Card className="min-h-16">
            <SegmentedProgressDemo />
          </Card>
        </div>
      </div>

      <RightSidebar links={quickLinks} />
    </div>
  );
}
