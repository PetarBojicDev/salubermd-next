import React from "react";
import styles from "./page.module.css";
import LoginForm from "./components/LoginForm";
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function Login() {

  return (
    <div className={styles.backgroundImage}>
        <LoginForm/>
        <div className="absolute lg:top-10 lg:right-10 top-1 right-1">
          <LanguageSwitcher/>
        </div>
    </div>
  );
}
