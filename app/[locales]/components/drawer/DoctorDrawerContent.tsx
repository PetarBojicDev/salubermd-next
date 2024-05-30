import React from "react";
import DrawerItem from "./DrawerItem";

export default function DoctorDrawerContent() {

  return (
    <div className="inline-grid transition-all duration-5 md:w-80 w-60">
      <DrawerItem type="home"/>
      <DrawerItem type="agenda"/>
      <DrawerItem  type="logout"/>
    </div>
  );
}
