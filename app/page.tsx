import Accordions from "@/app/variants/accordions/page";
import Alerts from "@/app/variants/alerts/page";
import Avatars from "@/app/variants/avatars/page";
import Badges from "@/app/variants/badges/page";
import Buttons from "@/app/variants/buttons/page";
import Commands from "@/app/variants/commands/page";
import Inputs from "@/app/variants/inputs/page";
import MenuBars from "@/app/variants/menubars/page";
import ProgressBars from "@/app/variants/progress-bars/page";
import Sliders from "@/app/variants/sliders/page";

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
