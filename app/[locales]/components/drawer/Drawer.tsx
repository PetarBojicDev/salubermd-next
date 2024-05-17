"use client";
import { RootState } from "@/store/store";
import React from "react";
import { useSelector } from "react-redux";
import DrawerAccount from "./DrawerAccount";
import DoctorDrawerContent from "./DoctorDrawerContent";

export default function Drawer() {

  const drawerOpenedStatus = useSelector((state: RootState) => state.userInfo.drawerOpenedStatus);

  return (
    <div className={`absolute bg-sidebar-blue z-10 transition-all duration-100 ${drawerOpenedStatus ? "md:w-80 w-60" : "w-0"} h-full`}>
      <DrawerAccount/>
      <DoctorDrawerContent/>
    </div>
  );
}
