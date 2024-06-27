'use client';
import React from "react";
import Dropdown from "./Dropdown";

interface DropdownWithTitleProps {
  title: string;
  titleStyle: string;
  inputStyle: string;
  listValues: Object[];
  validated: boolean;
  selectedValue: Object;
  setSelectedValue: React.Dispatch<React.SetStateAction<Object>>;
  placeholder?: string;
  iconSize?: number;
}

const DropdownWithTitle: React.FC<DropdownWithTitleProps> = ({ title, titleStyle, inputStyle, listValues, selectedValue, 
  setSelectedValue, validated, placeholder, iconSize }) => {
  
  return (
    <label className={inputStyle}>
      <div className="label">
        {title && <span className={`label-text font-bold ${titleStyle}`}>{title}</span>}
      </div>
      <Dropdown
        listValues={listValues}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
        validated={validated}
        placeholder={placeholder}
        iconSize={iconSize}
      />
    </label>
  );
}

export default DropdownWithTitle;
