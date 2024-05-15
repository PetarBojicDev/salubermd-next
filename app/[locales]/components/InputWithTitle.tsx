'use client';
import React, { ChangeEvent, ReactNode, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface InputWithTitleProps {
  titleLeft: string;
  iconRight: ReactNode;
  value: string;
  setValue: (value: string) => void;
  type: string;
  validated: boolean;
  inputStyle: string;
  titleStyle: string;
  bottomTextRight?: string;
  bottomTextLeft?: string;
  placeholderTxt?: string;
  bTxtRightStyle?: string;
  bTxtLeftStyle?: string;
  inputDisabled?: boolean;
}

const InputWithTitle: React.FC<InputWithTitleProps> = ({ titleLeft, iconRight, bottomTextRight = "", bottomTextLeft = "", value, setValue, 
  type, validated, inputStyle, titleStyle, placeholderTxt, bTxtRightStyle, bTxtLeftStyle, inputDisabled = false }) => {
  
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <label className={inputStyle}>
      <div className="label">
        {titleLeft && <span className={`label-text font-bold ${titleStyle}`}>{titleLeft}</span>}
        {iconRight && <span className="label-text-alt cursor-pointer">{iconRight}</span>}
      </div>
      <div className="relative">
        <input placeholder={placeholderTxt || "Type here..."} 
          className={`input border-2 ${!validated ? "input-error" : "input-bordered"} w-full ${
          !validated ? "border-invalid focus:border-invalid" : "border-gray-light focus:border-gray-light"} focus:outline-none`}
          type={type === 'password' ? (showPassword ? "text" : "password") : type} value={value} 
          onChange={handleChange} onBlur={() => setShowPassword(false)} disabled={inputDisabled} />
        {type === 'password' && 
        <button
          type="button"
          className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <FaEyeSlash className="h-5 w-5 text-gray-400" /> : <FaEye className="h-5 w-5 text-gray-400" />}
        </button>}
      </div>
      <div className="label">
        <span onClick={(event) => event?.preventDefault()} className={`label-text-alt ${bTxtRightStyle}`}>{bottomTextRight}</span>
        <span onClick={(event) => event?.preventDefault()} className={`label-text-alt ${bTxtLeftStyle}`}>{bottomTextLeft}</span>
      </div>
    </label>
  );
}

export default InputWithTitle;
