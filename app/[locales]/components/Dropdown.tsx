"use client";
import { useTranslations } from "next-intl";
import React from "react";
import { FaChevronDown } from "react-icons/fa";

interface DropdownProps {
  listValues: Object[];
  selectedValue: Object;
  setSelectedValue: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dropdown = ({listValues, selectedValue, setSelectedValue}: DropdownProps) => {

  const translate = useTranslations();

  return (
    <div className="dropdown dropdown-end w-full">
      <div tabIndex={0} role="button" className="btn bg-white w-full inline-flex justify-between border-gray-light border-2">
        <span className="md:inline hidden">{translate(selectedValue.name)}</span>
        <FaChevronDown
          size={16}
        />
      </div>
      <ul tabIndex={1} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 w-full rounded-lg overflow-auto max-h-60 block">
        {listValues.map((element: Object, index: number) => {

          const isCurrentValue = element.value === selectedValue.value;
          
          return (
            <li className="w-full block" key={element.value}>
              <label className={`${isCurrentValue ? "font-extrabold" : ""} w-fill block`} onClick={() => setSelectedValue(element)}>{translate(element.name)}</label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;