"use client";
import React, { useContext } from "react";
import DrawerAccount from "./DrawerAccount";
import DoctorDrawerContent from "./DoctorDrawerContent";
import { MainContext } from "../ContextProvider";

export default function Drawer() {

  const { openedDrawer } = useContext(MainContext);

  return (
    <div className={`absolute bg-sidebar-blue z-10 transition-all ${openedDrawer ? "left-0" : "left-[-20rem]"} duration-500 w-80 h-full`}>
      <DrawerAccount/>
      <DoctorDrawerContent/>
    </div>
  );
}
