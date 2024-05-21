'use client';
import React, { ChangeEvent, ReactNode, useState, useEffect, useRef } from "react";
import { FiChevronDown } from "react-icons/fi";

interface DropDownListProps {
  titleLeft: string;
  iconRight: ReactNode;
  value: string;
  setValue: (value: string) => void;
  type: string;
  validated: boolean;
  inputStyle: string;
  titleStyle: string;
  placeholderTxt?: string;
  inputDisabled?: boolean;
  list?: object[];
}

const DropDownList: React.FC<DropDownListProps> = ({
  titleLeft,
  iconRight,
  value,
  setValue,
  type,
  validated,
  inputStyle,
  titleStyle,
  placeholderTxt,
  inputDisabled = false,
  list = [],
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleLanguageSelect = (lang: string) => {
    setValue(lang);
    setShowDropdown(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", handleClickOutside);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <label className={inputStyle}>
      <div className="label">
        {titleLeft && (
          <span className={`label-text font-bold ${titleStyle}`}>{titleLeft}</span>
        )}
        {iconRight && (
          <span className="label-text-alt cursor-pointer">{iconRight}</span>
        )}
      </div>
      <div className="relative">
        <input
          placeholder={placeholderTxt || "Type here..."}
          className={`input border-2 ${
            !validated ? "input-error" : "input-bordered"
          } w-full ${
            !validated
              ? "border-invalid focus:border-invalid"
              : "border-gray-light focus:border-gray-light"
          } focus:outline-none`}
          type={type === "password" ? (showPassword ? "text" : "password") : type}
          value={value}
          onChange={handleChange}
          onBlur={() => setShowPassword(false)}
          disabled={inputDisabled}
          onClick={toggleDropdown} // Toggle dropdown on input click
        />
      {showDropdown && (
        <ul
          ref={dropdownRef}
          className="dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 absolute mt-2"
          style={{ maxHeight: "30vh", overflowY: "auto" }}
        >
          {list.map((lang, index) => (
            <li key={index}>
              <a onClick={() => handleLanguageSelect(lang.name)}>{lang.name}</a>
            </li>
          ))}
        </ul>
      )}
        <button
          type="button"
          className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
          onClick={togglePasswordVisibility}
        >
          <FiChevronDown className="h-5 w-5 text-gray-400" />
        </button>
      </div>
    </label>
  );
};

export default DropDownList;
