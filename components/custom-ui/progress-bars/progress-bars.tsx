import Image from "next/image";
import shadcn from "@/public/shadcn.jpeg";
import { BatteryProgress } from "./battery-progress";
import { ProgressCircleWithIcon } from "./circle-icon-progress";
import { CircularProgress } from "./circular-progress";
import { FloatingLabelProgress } from "./floating-label-progress";
import { SegmentedProgress } from "./segmented-progress";

export function ProgressCard({
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
        "flex shadow-lg rounded-lg h-48 justify-center items-center flex-col relative bg-gradient-to-t from-gray-100 to-white pb-6 border"
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

export default async function ProgressBars() {
  return (
      <>
        <div className={"font-medium mt-6 ml-6"}>{"Progress Indicators"}</div>
        <div className={"grid grid-cols-3 gap-4 p-4"}>
          <ProgressCard
            label={"Battery Progress"}
            componentName={"<BatteryProgress />"}
            shadComponentName={"<Progress />"}
          >
            <BatteryProgress value={50} />
          </ProgressCard>
          <ProgressCard label={"Circle with Icon"} componentName={"<ProgressCircleWithImage />"}>
            <ProgressCircleWithIcon value={50} imageSrc={"/shadcn.jpeg"} />
          </ProgressCard>
          <ProgressCard label={"Circular"} componentName={"<CircularProgress />"}>
            <CircularProgress value={50} />
          </ProgressCard>
          <ProgressCard
            label={"Floating Label"}
            componentName={"<FloatingLabelProgress />"}
            shadComponentName={"<Progress />"}
          >
            <FloatingLabelProgress value={50} />
          </ProgressCard>
          <ProgressCard label={"Segmented"} componentName={"<SegmentedProgress />"}>
            <SegmentedProgress segments={5} completed={3} />
          </ProgressCard>
        </div>
      </>
  );
};