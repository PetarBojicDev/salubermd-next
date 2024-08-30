"use client";
import React from "react";
import OfflineAvatar from "../../../../../../public/images/offline.png";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { calculateAge } from "../../../../../../public/constants/utils";

interface LeftPartProps {
  name?: string;
  surname?: string;
  gender?: number;
  dob?: string;
}

const LeftPart: React.FC<LeftPartProps> = ({name, surname, gender, dob}) => {

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
        <span className="text-gray font-medium md:text-sm text-xs">{gender == 1 ? translate("male") : translate("female")} | {translate("age")} {calculateAge(dob)}</span>
        <span className="text-white font-semibold md:text-xl text-sm">{name} {surname}</span>
      </div>
    </div>
  );
}

export default LeftPart;
