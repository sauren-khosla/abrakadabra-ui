import { Header } from "@/components/reusable/header";
// import { IconCard } from "@/components/reusable/icon-card";
// import { Title } from "@/components/reusable/title";

export default function SocialIcons() {
  return (
    <div className="flex min-h-screen">
      <div className="w-2/3">
        <Header
          title="Accordions"
          shadcnLink="https://ui.shadcn.com/docs/components/accordion"
          shadComponentName="<Accordion />"
        />
        <div className="flex flex-col px-6 pt-4"></div>
      </div>
    </div>
  );
}
