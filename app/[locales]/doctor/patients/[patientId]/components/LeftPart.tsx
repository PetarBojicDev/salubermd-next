"use client";
import React from "react";
import OfflineAvatar from "../../../../../../public/images/offline.png";
import Image from "next/image";
import { useTranslations } from "next-intl";

const LeftPart: React.FC = () => {

  const translate = useTranslations();

  return (
    <div className="md:w-72 md:h-20 h-16 w-36 content-center inline-flex items-center bg-light-black">
      <div className="avatar ml-12 md:inline-flex hidden">
        <div className="w-12 h-12 rounded-full"> 
          <Image
            src={OfflineAvatar}
            alt="Login logo"
            priority
          />
        </div>
      </div>
      <div className="inline-grid ml-6">
        <span className="text-gray font-medium md:text-sm text-xs">{"Male"} | {"Age 54"}</span>
        <span className="text-white font-semibold md:text-xl text-sm">Andrea Webber</span>
      </div>
    </div>
  );
}

export default LeftPart;
