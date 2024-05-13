"use client";
import React, { useState } from "react";
import styles from "../page.module.css";
import buttonStyles from "../../page.module.css";
import Image from "next/image";
import LoginLogo from "../../../../public/images/login-logo.png";
import InputWithTitle from "../../../[locales]/components/InputWithTitle";
import Button from "../../../[locales]/components/Button";
import { useTranslations } from "next-intl";
import Link from "next/link";
import isNotBlank from "../../../../public/constants/utils";

export default function LoginSignupForm() {

  const translate = useTranslations();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const validateUsername = () => {
    return isNotBlank(username);
  }

  const validatePassword = () => {
    return isNotBlank(password);
  }

  return (
    <div className={styles.formContainer}>
        <Image
            src={LoginLogo}
            alt="Login logo"
            height={50}
            className={styles.loginLogo}
            priority
        />
        <h3 className={styles.title}>{translate("saluber_welcome")}</h3>
        <InputWithTitle 
          title={translate("username")} 
          value={username} 
          setValue={setUsername}
          type={"text"}
          info={""}
          validated={validateUsername()}        
        />
        <InputWithTitle 
          title={translate("password")} 
          value={password} 
          setValue={setPassword}
          type={"password"}
          info={translate("forgot_password")}
          validated={validatePassword()}        
        />
        <Button
          text={translate("login")}
          disabled={false}
          addedStyle={buttonStyles.loginButton}
        />
        <div className={styles.bottomStyle}>
          <span>{translate("dont_have_account")} </span>
          <Link className={styles.linkStyle} href={"/en_US/signup"}>{translate("signup")}</Link>
        </div>
    </div>
  );
}
