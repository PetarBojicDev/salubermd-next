"use client";
import React from "react";
import styles from "./page.module.css";
import SignupForm from "./components/SignupForm";

export default function Login() {

  return (
    <div className={styles.backgroundImage}>
        <SignupForm/>
    </div>
  );
}
