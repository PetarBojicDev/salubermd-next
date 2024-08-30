"use client";
import React, { useContext, useEffect } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import * as languages from "../../public/constants/languages";
import { MainContext } from "./components/ContextProvider";
import { getMessaging, onMessage } from 'firebase/messaging';
import firebaseApp from '../../firebase';
import { setCookie } from '../../public/constants/utils';

export default function Splash() {

  const { language, setLanguage, server } = useContext(MainContext);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      const messaging = getMessaging(firebaseApp);
      const unsubscribe = onMessage(messaging, (payload) => {
        console.log('Foreground push notification received:', payload);
      });
      return () => {
        unsubscribe();
      };
    }
  }, []);

  useEffect(() => {
    const browserLanguage: string = navigator.language.split("-")[0];
    const languageFound = languages.array.find((x) => x.value === browserLanguage)?.language;
    localStorage.setItem("server","https://devel.salubermd.com/backoffice/");

    if(localStorage.getItem("X-AUTH-TOKEN")) {
      setCookie('token', localStorage.getItem("X-AUTH-TOKEN"), 7);
      setCookie('server', server, 7);
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
