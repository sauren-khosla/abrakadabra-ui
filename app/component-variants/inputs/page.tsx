import { Header } from "@/components/reusable/header";
import { ComponentCard } from "@/components/reusable/component-card";
import { RightSidebar } from "@/components/reusable/right-sidebar";
import { Title } from "@/components/reusable/title";
import PasswordStrengthInputDemo from "./password-strength-input";
import ValidatedInputDemo from "./validated-input";
import FloatingLabelInputDemo from "./floating-label-input";
import ValidatedInputAltDemo from "./validated-input-alt";

export default function Inputs() {
  const quickLinks = [
    { href: "#password-strength-input", label: "Password Strength Input" },
    { href: "#validated-input", label: "Validated Input" },
    { href: "#validated-input-alt", label: "Validated Input Alt" },
    { href: "#floating-label-input", label: "Floating Label Input" },
  ];

  return (
    <div className="flex min-h-screen">
      <div className="w-2/3">
        <Header
          title="Inputs"
          shadcnLink="https://ui.shadcn.com/docs/components/input"
          shadComponentName="<Input />"
        />

        <div className="flex flex-col px-6 pt-4">
          <Title
            title="Password Strength Input"
            id="password-strength-input"
            description="An input component that provides real-time feedback on password strength."
            codeLink="https://github.com/sauren-khosla/alakazam-ui/blob/main/app/component-variants/inputs/password-strength-input.tsx"
          />
          <ComponentCard>
            <PasswordStrengthInputDemo />
          </ComponentCard>

          <Title
            title="Validated Input"
            id="validated-input"
            description="An input component that includes validation logic to ensure correct data entry."
            codeLink="https://github.com/sauren-khosla/alakazam-ui/blob/main/app/component-variants/inputs/validated-input.tsx"
          />
          <ComponentCard>
            <ValidatedInputDemo />
          </ComponentCard>

          <Title
            title="Validated Input Alt"
            id="validated-input-alt"
            description="An alternative validated input component with enhanced validation features."
            codeLink="https://github.com/sauren-khosla/alakazam-ui/blob/main/app/component-variants/inputs/validated-input-alt.tsx"
          />
          <ComponentCard>
            <ValidatedInputAltDemo />
          </ComponentCard>

          <Title
            title="Floating Label Input"
            id="floating-label-input"
            description="An input component with a floating label that animates upon focus or input."
            codeLink="https://github.com/sauren-khosla/alakazam-ui/blob/main/app/component-variants/inputs/floating-label-input.tsx"
          />
          <ComponentCard>
            <FloatingLabelInputDemo />
          </ComponentCard>
        </div>
      </div>

      <RightSidebar links={quickLinks} />
    </div>
  );
}
