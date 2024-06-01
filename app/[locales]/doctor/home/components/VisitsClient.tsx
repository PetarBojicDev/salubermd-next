"use client";
import React from "react";

export default function VisitsClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
			{children}
    </>
  );
}
