"use client";
import React, { useContext, useEffect } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import * as languages from "../../public/constants/languages";
import { MainContext } from "./components/ContextProvider";
import { getMessaging, onMessage } from 'firebase/messaging';
import firebaseApp from '../../firebase';

export default function Splash() {

  const { language, setLanguage } = useContext(MainContext);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      const messaging = getMessaging(firebaseApp);
      const unsubscribe = onMessage(messaging, (payload) => {
        console.log('Foreground push notification received:', payload);
        // Handle the received push notification while the app is in the foreground
        // You can display a notification or update the UI based on the payload
      });
      return () => {
        unsubscribe(); // Unsubscribe from the onMessage event
      };
    }
  }, []);

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
