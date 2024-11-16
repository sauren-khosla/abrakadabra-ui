import { Header } from "@/components/reusable/header";
import { Card } from "@/components/reusable/card";
import { RightSidebar } from "@/components/reusable/right-sidebar";
import { Title } from "@/components/reusable/title";
import DismissibleAlertDemo from "./dismissible-alert";
import TimedAlertDemo from "./timed-alert";

export default function Alerts() {
  const quickLinks = [
    { href: "#dismissible-alert", label: "Dismissible Alert" },
    { href: "#timed-alert", label: "Timed Alert" },
  ];

  return (
    <div className="flex min-h-screen">
      <div className="w-2/3">
        <Header
          title="Alerts"
          shadcnLink="https://ui.shadcn.com/docs/components/alert"
          shadComponentName="<Alert />"
        />

        <div className="flex flex-col px-6 pt-4">
          <Title
            title="Dismissible Alert"
            id="dismissible-alert"
            description="An alert component that can be dismissed by the user."
            codeLink="https://github.com/sauren-khosla/abrakadabra-ui/blob/main/app/component-variants/alerts/dismissible-alert.tsx"
          />
          <Card>
            <DismissibleAlertDemo />
          </Card>

          <Title
            title="Timed Alert"
            id="timed-alert"
            description="An alert component that disappears after a set amount of time."
            codeLink="https://github.com/sauren-khosla/abrakadabra-ui/blob/main/app/component-variants/alerts/timed-alert.tsx"
          />
          <Card>
            <TimedAlertDemo />
          </Card>
        </div>
      </div>

      <RightSidebar links={quickLinks} />
    </div>
  );
}
