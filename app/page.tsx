import { Accordions } from "@/components/custom-ui/accordions/accordions";
import { Alerts } from "@/components/custom-ui/alerts/alerts";
import { Avatars } from "@/components/custom-ui/avatars/avatars";
import ProgressBars from "@/components/custom-ui/progress-bars/progress-bars";

import React from "react";

export default async function CustomUI() {
  return (
    <>
      <Accordions />
      <Alerts />
      <Avatars />
      <ProgressBars />
    </>
  );
}
