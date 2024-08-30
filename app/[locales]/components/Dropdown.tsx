"use client";
import { useTranslations } from "next-intl";
import React, {useState} from "react";
import { FaChevronDown } from "react-icons/fa";

interface DropdownElement {
  value?: Object;
  name?: string;
  text?: string;
  title?: string;
}

interface DropdownProps {
  listValues: Object[];
  selectedValue: DropdownElement;
  validated: boolean;
  setSelectedValue: React.Dispatch<React.SetStateAction<any>>;
  placeholder?: string;
  iconSize?: number;
  translateValues?: boolean;
}

const Dropdown = ({listValues, selectedValue, setSelectedValue, validated, placeholder, iconSize, translateValues = true}: DropdownProps) => {

  const translate = useTranslations();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSelection = (element: Object) => {
    setSelectedValue(element);
    setIsDropdownOpen(false);
  }

  return (
    <div className="dropdown dropdown-end w-full">
      <div tabIndex={0} role="button" className={`btn bg-white w-full inline-flex justify-between ${
            !validated ? "border-invalid focus:border-invalid" : "border-gray-light focus:border-gray-light"} border-2 hover:bg-transparent`}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <span className={`md:inline hidden ${!selectedValue ? "text-gray-400" : ""}`}>
          {selectedValue ? translateValues ? translate(selectedValue.name || selectedValue?.text || selectedValue?.title) : (selectedValue?.name || selectedValue?.text || selectedValue?.title) : placeholder}

        </span>
        <FaChevronDown size={iconSize || 16} />
      </div>
      {isDropdownOpen && (
        <ul tabIndex={1} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 w-full rounded-lg overflow-auto max-h-60 block">
          {listValues.map((element: DropdownElement, index: number) => {

            const isCurrentValue = element.value === selectedValue.value;
            
            return (
              <li className="w-full block">
                <label className={`${isCurrentValue ? "font-extrabold" : ""} w-fill block`} onClick={() => handleSelection(element)}>
                  {translateValues ? translate(element?.name || element?.text || element?.title) : (element?.name || element?.text || element?.title)}
                </label>
              </li>
            );
          })}
        </ul>)}
    </div>
  );
};

export default Dropdown;