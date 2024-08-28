"use client";
import Button from "@/app/[locales]/components/Button";
import { useTranslations } from "next-intl";
import React from "react";

interface SelectionProps {
  selected: String;
  setSelected: React.Dispatch<React.SetStateAction<String>>;
  options: String[];
}

const Selection: React.FC<SelectionProps> = ({ selected, setSelected, options }: SelectionProps) => {

  const translate = useTranslations();

  const onPressButton = (value: String) => {
    setSelected(value);
  }

  return (
    <div className="inline-flex mb-8">
      {options.map((element: String, index: number) => {
        return (
          <Button
            text={translate(element)}
            disabled={false}
            buttonStyle={`w-1/${options.length} mx-auto h-10 rounded-xl shadow-md mr-5`}
            disabledButtonStyle=""
            enabledButtonStyle={selected === element ? "bg-white text-blue" : "bg-gray-light text-gray"}
            loading={false}
            onPress={() => onPressButton(element)}
          />
        );
      })}
    </div>
  );
}

export default Selection;