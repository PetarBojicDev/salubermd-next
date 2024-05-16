import React from "react";
import Header from "../components/header/Header";
import Drawer from "../components/drawer/Drawer";

export default async function DoctorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
      <Header/>
      <Drawer/>
      {children}
    </>
  );
}
