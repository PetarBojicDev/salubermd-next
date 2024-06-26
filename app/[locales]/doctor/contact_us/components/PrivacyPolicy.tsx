"use client";
import { useTranslations } from "next-intl";
import React from "react";

export default function PrivacyPolicy() {

  const translate = useTranslations();

  return (
    <div className="md:w-2/3 rounded-xl bg-white p-7 shadow-md">
      <label className="text-xl font-bold block mb-7">{translate("privacy_policy")}</label>
      <label className="text-base font-bold block mb-7">{translate("privacy_policy_part1")}</label>
      <label className="text-base block">{translate("privacy_policy_part2")}</label>
      <label className="text-base block mb-7">{translate("privacy_policy_part3")}</label>
      <label className="text-base font-bold block mb-7">{translate("privacy_policy_part4")}</label>
      <label className="text-base block mb-7">{translate("privacy_policy_part5")}</label>
      <label className="text-base font-bold block mb-7">{translate("privacy_policy_part6")}</label>
      <label className="text-base block">{translate("privacy_policy_part7")}</label>
      <label className="text-base block mb-7">{translate("privacy_policy_part8")}</label>
    </div>
  );
}
