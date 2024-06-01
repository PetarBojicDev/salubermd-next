"use client";
import React, { useContext, useEffect } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import * as languages from "../../public/constants/languages";
import { MainContext } from "./components/ContextProvider";

export default function Splash() {

  const { language, setLanguage } = useContext(MainContext);
  const router = useRouter();

  useEffect(() => {
    const browserLanguage: string = navigator.language.split("-")[0];
    const languageFound = languages.array.find((x) => x.value === browserLanguage)?.language;
    localStorage.setItem("server","https://wseu.salubermd.com/backoffice/");

    if(localStorage.getItem("X-AUTH-TOKEN")) {
      router.push(`/${language}/doctor/home`);
    }else{
      setLanguage(languageFound || "en_US");
      setTimeout(() => {
        router.push(`/${languageFound}/login`);
      }, 2500);
    }
  },[]);

  return (
    <div className={styles.backgroundImage}/>
  );
}
