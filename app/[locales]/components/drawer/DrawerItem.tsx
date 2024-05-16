"use client";
import { RootState } from "@/store/store";
import { useTranslations } from "next-intl";
import React from "react";
import { useSelector } from "react-redux";

const DrawerItem: React.FC<{ type: string }> = ({ type }) => {

  const translate = useTranslations();

  const drawerOpenedStatus = useSelector((state: RootState) => state.userInfo.drawerOpenedStatus);

  return (
    <>
      <div className={`h-18 hover:bg-darker-blue items-center ml-10 inline-flex mt-5 ${drawerOpenedStatus ? "opacity-100" : "opacity-0"}`} style={{ transition: "opacity 0.3s ease-in-out" }}>
        <span className="text-sm text-sidebar-divider font-semibold">{translate(type)}</span>
      </div>
    </>
  );
}

export default DrawerItem;
