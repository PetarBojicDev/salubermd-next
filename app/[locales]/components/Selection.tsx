"use client";
import Button from "@/app/[locales]/components/Button";
import { useTranslations } from "next-intl";
import React from "react";

interface SelectionProps {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  options: string[];
}

const Selection: React.FC<SelectionProps> = ({ selected, setSelected, options }: SelectionProps) => {

  const translate = useTranslations();

  const onPressButton = (value: string) => {
    setSelected(value);
  }

  return (
    <div className="inline-flex mb-8">
      {options.map((element: string, index: number) => {
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