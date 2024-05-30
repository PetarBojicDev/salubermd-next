import { useTranslations } from "next-intl";
import React from "react";
import "server-only";

export default function DrawerAccount() {

  const translate = useTranslations();

  return (
    <>
      <div className="md:h-32 h-24 items-center md:ml-10 ml-8 md:mt-10 mt-8 pt-20">
        <span className="md:text-md text-sm text-sidebar-divider font-semibold block md:h-7 h-5">{translate("welcome_back")}</span>
        <span className="md:text-2xl text-xl text-white font-semibold block md:h-10 h-8">Gianfranco G.</span>
        <span className="md:text-xl text-lg text-white font-semibold hover:underline underline-offset-2 h-7">{translate("your_profile")}</span>
      </div>
      <div className="pt-20">
        <div className="h-px bg-sidebar-divider"/>
      </div>
    </>
  );
}
