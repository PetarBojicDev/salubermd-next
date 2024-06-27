"use client";
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function HeaderTitle({
  children
}: Readonly<{
  children: React.ReactNode
}>) {

  const translate = useTranslations();
  const pathname = usePathname();
  const splitted = pathname.split("/");
  const lastRoute = splitted[splitted.length - 1];

  const renderTitle = () => {
    return (
      <>
        <label className="text-2xl font-bold md:inline hidden ml-7">{translate(lastRoute)}</label>
      </>
    )
  }

  return (
    <>
      {lastRoute === "home" ? children : renderTitle()}
    </>
  );
}
