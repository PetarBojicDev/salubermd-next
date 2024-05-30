import React from "react";
import "server-only";
import Header from "../components/header/Header";
import Drawer from "../components/drawer/Drawer";
import DrawerAccount from "../components/drawer/DrawerAccount";
import DoctorDrawerContent from "../components/drawer/DoctorDrawerContent";

export default async function DoctorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
      <Header/>
      <Drawer>
        <DrawerAccount/>
        <DoctorDrawerContent/>
      </Drawer>
      <div className="md:pt-20 pt-16 bg-background absolute z-5 w-full h-full">
        {children}
      </div>
    </>
  );
}
