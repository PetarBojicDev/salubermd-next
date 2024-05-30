import React from "react";
import "server-only";
import Header from "../components/header/Header";
import Drawer from "../components/drawer/Drawer";
import ContextProvider from "../components/ContextProvider";

export default async function DoctorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
      <Header/>
      <Drawer/>
      <div className="md:pt-20 pt-16 bg-background absolute z-5 w-full h-full">
        {children}
      </div>
    </>
  );
}
