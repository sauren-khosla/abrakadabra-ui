import Image from "next/image";
import shadcn from "@/public/shadcn.jpeg";
import { PasswordStrengthInput } from "./password-strength-input";

export function InputsCard({
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
        "flex shadow-lg rounded-lg min-h-72 items-center justify-center pb-16 flex-col relative bg-gradient-to-t from-gray-100 to-white border px-6"
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

export function Inputs() {
  return (
    <>
      <div className={"font-medium mt-6 ml-6"}>{"Inputs"}</div>
      <div className={"grid grid-cols-3 gap-4 p-4"}>
        <InputsCard label={"Password Strength Input"} componentName={"<PasswordStrengthInput />"} shadComponentName="<Input />">
          <PasswordStrengthInput />
        </InputsCard>
      </div>
    </>
  )
}