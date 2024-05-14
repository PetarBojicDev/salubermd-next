import React, { ChangeEvent, ReactNode } from "react";

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

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <label className={inputStyle}>
      <div className="label">
        {titleLeft && <span className={`label-text font-bold ${titleStyle}`}>{titleLeft}</span>}
        {iconRight && <span className="label-text-alt cursor-pointer">{iconRight}</span>}
      </div>
      <input placeholder={placeholderTxt || "Type here..."} 
        className={`input border-2 ${!validated ? "input-error" : "input-bordered"} w-full ${
        !validated ? "border-invalid focus:border-invalid" : "border-gray-light focus:border-gray-light"}`}
        type={type} value={value} onChange={handleChange} disabled={inputDisabled}/>
      <div className="label">
        <span onClick={(event) => event?.preventDefault()} className={`label-text-alt ${bTxtRightStyle}`}>{bottomTextRight}</span>
        <span onClick={(event) => event?.preventDefault()} className={`label-text-alt ${bTxtLeftStyle}`}>{bottomTextLeft}</span>
      </div>
    </label>
  );
}

export default InputWithTitle;