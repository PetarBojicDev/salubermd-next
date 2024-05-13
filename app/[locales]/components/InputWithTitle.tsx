import React, { ChangeEvent } from "react";
import styles from "../page.module.css";

interface InputWithTitleProps {
  title: string;
  value: string;
  setValue: (value: string) => void;
  type: string;
  info: string;
  validated: boolean;
}

const InputWithTitle: React.FC<InputWithTitleProps> = ({ title, value, setValue, type, info, validated }) => {

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className={styles.inputWidth}>
      {title && <span className={styles.inputTitle}>{title}</span>}
      <input className={styles.inputField} type={type} value={value} onChange={handleChange} />
      {info && <a href={""} className={styles.inputInfo}>{info}</a>}
    </div>
  );
}

export default InputWithTitle;