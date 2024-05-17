import { RootState } from "@/store/store";
import React from "react";
import { useSelector } from "react-redux";
import DrawerItem from "./DrawerItem";

export default function DoctorDrawerContent() {

  const drawerOpenedStatus = useSelector((state: RootState) => state.userInfo.drawerOpenedStatus);

  return (
    <div className={`inline-grid transition-all duration-300 ${drawerOpenedStatus ? "w-80" : "w-0"} h-20`}>
      <DrawerItem type={"home"}/>
      <DrawerItem type={"agenda"}/>
    </div>
  );
}
