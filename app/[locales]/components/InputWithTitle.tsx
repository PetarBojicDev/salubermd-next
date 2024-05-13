import React, { ChangeEvent } from "react";
import styles from "../page.module.css";

interface InputWithTitleProps {
  title: string;
  value: string;
  setValue: (value: string) => void;
  type: string;
  info: string;
  validated: boolean;
  inputStyle: string;
  titleStyle: string;
}

const InputWithTitle: React.FC<InputWithTitleProps> = ({ title, value, setValue, type, info, validated, inputStyle, titleStyle }) => {

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className={inputStyle}>
      {title && <span className={titleStyle}>{title}</span>}
      <input className={`h-10 border-solid rounded-xl border-2 focus:outline-none pl-2 ${!validated ? "border-invalid" : "border-gray-light"}`} type={type} value={value} onChange={handleChange} />
      {info && <a href={""} className="text-right text-blue text-sm font-bold hover:underline">{info}</a>}
    </div>
  );
}

export default InputWithTitle;