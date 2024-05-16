import { RootState } from "@/store/store";
import React from "react";
import { useSelector } from "react-redux";

export default function DrawerAccount() {

  const drawerOpenedStatus = useSelector((state: RootState) => state.userInfo.drawerOpenedStatus);

  return (
    <>
      <div className={`h-32 items-center ml-10 inline-grid mt-5 ${drawerOpenedStatus ? "opacity-100" : "opacity-0"}`} style={{ transition: "opacity 0.3s ease-in-out" }}>
        <span className="text-sm text-sidebar-divider font-semibold">Welcome Back</span>
        <span className="text-xl text-white font-semibold">Gianfranco G.</span>
        <span className="text-lg text-white font-semibold hover:underline underline-offset-2">Your profile</span>
      </div>
      <div className="h-px bg-sidebar-divider"/>
    </>
  );
}
