import React from "react";
import DrawerItem from "./DrawerItem";
import { DrawerItemProp } from "@/public/constants/props";
import { drawerItems } from "@/public/constants/drawer-content";
import "server-only";

export default function DoctorDrawerContent() {

  return (
    <div className="inline-grid transition-all duration-500 md:w-80 w-60">
      {drawerItems.map((item: DrawerItemProp) => {
        return (
          <DrawerItem title={item.title} route={item.route}/>
        );
      })}
    </div>
  );
}
