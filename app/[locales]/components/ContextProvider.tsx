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
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
  chosenLan: string;
  setChosenLan: Dispatch<SetStateAction<string>>;
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
  server: "http://192.168.0.107:8080",
  setServer: () => {},
  password: "",
  setPassword: () => {},
  email: "",
  setEmail: () => {},
  username: "",
  setUsername: () => {},
  chosenLan: "",
  setChosenLan: () => {}
});

export default function ContextProvider({ children }: { children: ReactNode }) {
  const [openedDrawer, setOpenedDrawer] = useState<boolean>(false);
  const [doctorOnline, setDoctorOnline] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>("en_US");
  const [token, setToken] = useState<string>("");
  const [server, setServer] = useState<string>("http://192.168.0.107:8080");

  // signUp
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [chosenLan, setChosenLan] = useState<string>("");

  return (
    <MainContext.Provider value={{ openedDrawer, setOpenedDrawer, 
    doctorOnline, setDoctorOnline, 
    language, setLanguage,
    token, setToken,
    server, setServer,
    password, setPassword,
    email, setEmail,
    username, setUsername,
    chosenLan, setChosenLan }}>
      {children}
    </MainContext.Provider>
  );
}

export const useMainContext = () => {
  return useContext(MainContext);
};