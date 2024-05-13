import React, { ChangeEvent } from "react";

interface ButtonProps {
  text: string;
  addedStyle: string;
  disabled: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, addedStyle, disabled }) => {

  const handlePress = () => {
    console.log("asdasdasd");
  }

  return (
    <button className={addedStyle} type="button" onClick={handlePress}>{text}</button>
  );
}

export default Button;