import { Accordions } from "@/components/custom-ui/accordions/accordions";
import { Alerts } from "@/components/custom-ui/alerts/alerts";
import { Avatars } from "@/components/custom-ui/avatars/avatars";
import { Badges } from "@/components/custom-ui/badges/badges";
import { Buttons } from "@/components/custom-ui/buttons/buttons";
import { Commands } from "@/components/custom-ui/commands/commands";
import { Inputs } from "@/components/custom-ui/inputs/inputs";
import { MenuBars } from "@/components/custom-ui/menubars/menubars";
import { ProgressBars } from "@/components/custom-ui/progress-bars/progress-bars";
import { Sliders } from "@/components/custom-ui/sliders/sliders";

import React from "react";

export default async function CustomUI() {
  return (
    <>
      <Accordions />
      <Alerts />
      <Avatars />
      <Badges />
      <Buttons />
      <Commands />
      <Inputs />
      <MenuBars />
      <ProgressBars />
      <Sliders />
    </>
  );
}
