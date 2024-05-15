import React, { ChangeEvent } from "react";

interface ButtonProps {
  text: string;
  buttonStyle: string;
  enabledButtonStyle: string;
  disabledButtonStyle: string;
  disabled: boolean;
  loading: boolean;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, buttonStyle, enabledButtonStyle, disabledButtonStyle, disabled, loading, onPress }: ButtonProps) => {

  return (
    <button className={`btn ${buttonStyle} ${!disabled ? disabledButtonStyle : enabledButtonStyle}`} type="button" onClick={onPress}>
      {loading ? <span className="loading loading-spinner loading-md"></span> : text}
    </button>
  );
}

export default Button;