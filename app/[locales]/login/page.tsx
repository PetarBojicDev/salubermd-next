import React from "react";
import styles from "./page.module.css";
import LoginSignupForm from "./components/LoginForm";
import LanguageSwitcher from "./components/LanguageSwitcher";

export default function Login() {

  return (
    <div className={styles.backgroundImage}>
        <LoginSignupForm/>
        <div className="absolute top-10 right-10">
          <LanguageSwitcher/>
        </div>
    </div>
  );
}
