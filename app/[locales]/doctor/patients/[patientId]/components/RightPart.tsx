"use client";
import React from "react";
import { useTranslations } from "next-intl";

const RightPart: React.FC = () => {

  const translate = useTranslations();

  return (
    <div className="md:w-72 md:h-20 h-16 w-36 content-center inline-flex items-center bg-light-black">
      <div className="avatar ml-12 md:inline-flex hidden">
      </div>
      <div className="inline-grid ml-6">
        <span className="text-gray font-medium md:text-sm text-xs">{translate("last_visit")}</span>
        <span className="text-gray font-semibold md:text-xl text-sm">22 Jun 2024</span>
      </div>
    </div>
  );
}

export default RightPart;
