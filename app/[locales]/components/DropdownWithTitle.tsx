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
  setSelectedValue: React.Dispatch<React.SetStateAction<any>>;
  placeholder?: string;
  iconSize?: number;
  translateValues?: boolean;
}

const DropdownWithTitle: React.FC<DropdownWithTitleProps> = ({ title, titleStyle, inputStyle, listValues, selectedValue, 
  setSelectedValue, validated, placeholder, iconSize, translateValues }) => {
  
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
        translateValues={translateValues}
      />
    </label>
  );
}

export default DropdownWithTitle;
