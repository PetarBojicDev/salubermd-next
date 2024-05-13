"use client";
import React, { useEffect } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import * as languages from "../../public/constants/languages";

export default function Splash() {

  const router = useRouter();
  const browserLangage = navigator.language.split("-")[0];
  const language = languages.array.find(x => x.value == browserLangage)?.language;

  useEffect(() => {
    if(localStorage.getItem("token")) {
      //fetching data and proceeding to homepage
    }else{
      setTimeout(() => {
        router.push(`/${language}/login`);
      }, 2500);
    }
  },[]);

  return (
    <div className={styles.backgroundImage}/>
  );
}
