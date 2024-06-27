'use client';
import React, { ChangeEvent, ReactNode, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Dropdown from "./Dropdown";

interface DropdownWithTitleProps {
  title: string;
  titleStyle: string;
  inputStyle: string;
  listValues: Object[];
  selectedValue: Object;
  setSelectedValue: React.Dispatch<React.SetStateAction<Object>>;
}

const DropdownWithTitle: React.FC<DropdownWithTitleProps> = ({ title, titleStyle, inputStyle, listValues, selectedValue, setSelectedValue}) => {
  
  return (
    <label className={inputStyle}>
      <div className="label">
        {title && <span className={`label-text font-bold ${titleStyle}`}>{title}</span>}
      </div>
      <Dropdown
        listValues={listValues}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
      />
    </label>
  );
}

export default DropdownWithTitle;
