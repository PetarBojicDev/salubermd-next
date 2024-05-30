"use client";
import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

interface MainContextProps {
  openedDrawer: boolean;
  setOpenedDrawer: Dispatch<SetStateAction<boolean>>;
  doctorOnline: boolean;
  setDoctorOnline: Dispatch<SetStateAction<boolean>>;
}

export const MainContext = createContext<MainContextProps>({
  openedDrawer: false,
  setOpenedDrawer: () => {},
  doctorOnline: false,
  setDoctorOnline: () => {},
});

export default function ContextProvider({ children }: { children: ReactNode }) {
  const [openedDrawer, setOpenedDrawer] = useState<boolean>(false);
  const [doctorOnline, setDoctorOnline] = useState<boolean>(false);

  return (
    <MainContext.Provider value={{ openedDrawer, setOpenedDrawer, doctorOnline, setDoctorOnline }}>
      {children}
    </MainContext.Provider>
  );
}