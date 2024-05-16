"use client";
import { RootState } from "@/store/store";
import React from "react";
import { useSelector } from "react-redux";
import DrawerAccount from "./DrawerAccount";

export default function Drawer() {

  const drawerOpenedStatus = useSelector((state: RootState) => state.userInfo.drawerOpenedStatus);

  return (
    <div className={`absolute bg-sidebar-blue h-screen z-10 transition-all duration-300 ${drawerOpenedStatus ? "w-80" : "w-0"}`}>
      <div className="h-20 bg-white"></div>
      <DrawerAccount/>
    </div>
  );
}
