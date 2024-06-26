"use client";
import Button from "@/app/[locales]/components/Button";
import { useTranslations } from "next-intl";
import React from "react";

interface SelectionProps {
  aboutUs: boolean;
  setAboutUs: React.Dispatch<React.SetStateAction<boolean>>;
}

const Selection: React.FC<SelectionProps> = ({ aboutUs, setAboutUs }: SelectionProps) => {

  const translate = useTranslations();

  const onPressButton = (value: boolean) => {
    setAboutUs(value);
  }

  return (
    <div className="inline-flex mb-8">
      <Button
        text={translate("about_us")}
        disabled={false}
        buttonStyle="w-4/5 mx-auto h-10 rounded-xl shadow-md mr-5"
        disabledButtonStyle=""
        enabledButtonStyle={aboutUs ? "bg-white text-blue" : "bg-gray-light text-gray"}
        loading={false}
        onPress={() => onPressButton(true)}
      />
      <Button
        text={translate("privacy")}
        disabled={false}
        buttonStyle="w-4/5 mx-auto h-10 rounded-xl shadow-md"
        disabledButtonStyle=""
        enabledButtonStyle={!aboutUs ? "bg-white text-blue" : "bg-gray-light text-gray"}
        loading={false}
        onPress={() => onPressButton(false)}
      />
    </div>
  );
}

export default Selection;