import React, { ChangeEvent } from "react";

interface ButtonProps {
  text: string;
  buttonStyle: string;
  disabled: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, buttonStyle, disabled }) => {

  const handlePress = () => {
    console.log("asdasdasd");
  }

  return (
    <button className={`${buttonStyle} ${!disabled ? "bg-gray-light text-gray" : "bg-blue text-white"} btn`} type="button" onClick={handlePress}>{text}</button>
  );
}

export default Button;