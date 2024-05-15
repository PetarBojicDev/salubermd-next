"use client";
import React, { useEffect } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import * as languages from "../../public/constants/languages";
import { useDispatch } from "react-redux";
import { setLanguage } from "../../store/states/language"; 

export default function Splash() {

  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const browserLanguage: string = navigator.language.split("-")[0];
    const language = languages.array.find((x) => x.value === browserLanguage)?.language;

    if(localStorage.getItem("token")) {
      //fetching data and proceeding to homepage
    }else{
      dispatch(setLanguage(language || "en_US"));
      setTimeout(() => {
        router.push(`/${language}/login`);
      }, 2500);
    }
  },[]);

  return (
    <div className={styles.backgroundImage}/>
  );
}
