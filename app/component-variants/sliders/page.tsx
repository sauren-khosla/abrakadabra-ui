import { Header } from "@/components/reusable/header";
import { Card } from "@/components/reusable/card";
import { RightSidebar } from "@/components/reusable/right-sidebar";
import { Title } from "@/components/reusable/title";
import IconSliderDemo from "./icon-slider";
import TooltipSliderDemo from "./tooltip-slider";

export default function Sliders() {
  const quickLinks = [
    { href: "#icon-slider", label: "Icon Slider" },
    { href: "#tooltip-slider", label: "Tooltip Slider" },
  ];

  return (
    <div className="flex min-h-screen">
      <div className="w-2/3">
        <Header
          title="Sliders"
          shadcnLink="https://ui.shadcn.com/docs/components/slider"
          shadComponentName="<Slider />"
        />

        <div className="flex flex-col px-6 pt-4">
          <Title
            title="Icon Slider"
            id="icon-slider"
            description="A slider component that integrates icons to enhance visual feedback and user interaction."
            codeLink="https://github.com/your-repo/sliders/icon-slider.tsx"
          />
          <Card className="min-h-16">
            <IconSliderDemo />
          </Card>

          <Title
            title="Tooltip Slider"
            id="tooltip-slider"
            description="A slider component that displays tooltips to provide additional information about the current value."
            codeLink="https://github.com/your-repo/sliders/tooltip-slider.tsx"
          />
          <Card className="min-h-16">
            <TooltipSliderDemo />
          </Card>
        </div>
      </div>

      <RightSidebar links={quickLinks} />
    </div>
  );
}
