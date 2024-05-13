"use client";
import React from "react";
import styles from "./page.module.css";
import LoginSignupForm from "./components/LoginSignupForm";

export default function Login() {

  return (
    <div className={styles.backgroundImage}>
        <LoginSignupForm/>
    </div>
  );
}
