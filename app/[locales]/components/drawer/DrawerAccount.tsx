import { RootState } from "@/store/store";
import React from "react";
import { useSelector } from "react-redux";

export default function DrawerAccount() {

  const drawerOpenedStatus = useSelector((state: RootState) => state.userInfo.drawerOpenedStatus);

  return (
    <>
      <div className={`h-32 items-center ml-10 mt-10 ${drawerOpenedStatus ? "opacity-100" : "opacity-0"}`} style={{ transition: "opacity 0.3s ease-in-out" }}>
        <span className="text-md text-sidebar-divider font-semibold block h-7">Welcome Back</span>
        <span className="text-2xl text-white font-semibold block h-10">Gianfranco G.</span>
        <span className="text-xl text-white font-semibold hover:underline underline-offset-2 h-7">Your profile</span>
      </div>
      <div className="h-px bg-sidebar-divider"/>
    </>
  );
}
