"use client";
import { createContext, useState, ReactNode, Dispatch, SetStateAction, useContext } from "react";

interface MainContextProps {
  openedDrawer: boolean;
  setOpenedDrawer: Dispatch<SetStateAction<boolean>>;
  doctorOnline: boolean;
  setDoctorOnline: Dispatch<SetStateAction<boolean>>;
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>;
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
  server: string;
  setServer: Dispatch<SetStateAction<string>>;
}

export const MainContext = createContext<MainContextProps>({
  openedDrawer: false,
  setOpenedDrawer: () => {},
  doctorOnline: false,
  setDoctorOnline: () => {},
  language: "en_US",
  setLanguage: () => {},
  token: "",
  setToken: () => {},
  server: "https://wseu.salubermd.com",
  setServer: () => {},

});

export default function ContextProvider({ children }: { children: ReactNode }) {
  const [openedDrawer, setOpenedDrawer] = useState<boolean>(false);
  const [doctorOnline, setDoctorOnline] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>("en_US");
  const [token, setToken] = useState<string>("");
  const [server, setServer] = useState<string>("https://wseu.salubermd.com");

  return (
    <MainContext.Provider value={{ openedDrawer, setOpenedDrawer, 
    doctorOnline, setDoctorOnline, 
    language, setLanguage,
    token, setToken,
    server, setServer }}>
      {children}
    </MainContext.Provider>
  );
}

export const useMainContext = () => {
  return useContext(MainContext);
};