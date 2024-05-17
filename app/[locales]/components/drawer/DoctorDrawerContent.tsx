import { RootState } from "@/store/store";
import React from "react";
import { useSelector } from "react-redux";
import DrawerItem from "./DrawerItem";

export default function DoctorDrawerContent() {

  const drawerOpenedStatus = useSelector((state: RootState) => state.userInfo.drawerOpenedStatus);

  return (
    <div className={`inline-grid transition-all duration-100 ${drawerOpenedStatus ? "md:w-80 w-60" : "w-0"} flex flex-col justify-between`}>
        <div>
          <DrawerItem type="home"/>
          <DrawerItem type="agenda"/>
        </div>
        <DrawerItem  type="logout"/>
        
    </div>
  );
}
