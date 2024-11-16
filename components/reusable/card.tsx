import clsx from "clsx";

export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const baseClassName =
    "flex rounded-lg py-6 items-center flex-col relative border mb-8 px-12";
  const combinedClassName = clsx(baseClassName, className);

  return <div className={combinedClassName}>{children}</div>;
}
