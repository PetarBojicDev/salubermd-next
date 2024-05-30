"use client";
import React, { useContext } from "react";
import { MainContext } from "../ContextProvider";

export default function Drawer({ children }: { children: React.ReactNode }) {

  const { openedDrawer } = useContext(MainContext);

  return (
    <div className={`absolute bg-sidebar-blue z-10 transition-all ${openedDrawer ? "left-0" : "left-[-20rem]"} duration-500 w-80 h-full`}>
      {children}
    </div>
  );
}
