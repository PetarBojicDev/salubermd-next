"use client";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { formatStringToDate } from "@/public/constants/utils";

interface UserInfo {
  nome?: string;
  cognome?: string;
  gender?: number;
  birthdate?: string;
  placeOfBirth?: string;
  cf?: string;
}
interface PatientProps {
  userInfo: UserInfo;
}

export default function PersonalInformation({userInfo}: PatientProps) {

  const translate = useTranslations();
  const [opened, setOpened] = useState(false);

  const toggleOpened = () => {
    setOpened(prev => !prev);
  }

  return (
    <div className={`w-full p-6 bg-white rounded-xl inline-block mb-6 transition-all duration-500 ease-in-out ${opened ? "h-72" : "h-20"}`}>
      <div className="w-full inline-flex">
        <span className="font-bold text-lg">{translate("personal_information")}</span>
        <div className="lg:w-1/6 items-end ml-auto flex justify-end self-start pt-2">
          <div className="w-10">
            {opened ? <FaChevronUp size={16} onClick={toggleOpened}/> : <FaChevronDown size={16} onClick={toggleOpened}/>}
          </div>
        </div>
      </div>
      {opened && 
        <div className="w-full h-52 inline-grid grid-cols-3 gap-4 pt-6">
          <div className="w-full h-20 border-b-2 border-gray-light">
            <span className="block mb-2 text-sm">{translate("first_name")}</span>
            <span className="mt-3 text-lg">{userInfo.nome}</span>
          </div>
          <div className="w-full h-20 border-b-2 border-gray-light">
            <span className="block mb-2 text-sm">{translate("last_name")}</span>
            <span className="mt-3 text-lg">{userInfo.cognome}</span>
          </div>
          <div className="w-full h-20 border-b-2 border-gray-light">
            <span className="block mb-2 text-sm">{translate("gender")}</span>
            <span className="mt-3 text-lg">{userInfo.gender == 1 ? translate("male") : translate("female")}</span>
          </div>
          <div className="w-full h-20 border-b-2 border-gray-light">
            <span className="block mb-2 text-sm">{translate("birthday")}</span>
            <span className="mt-3 text-lg">{formatStringToDate(userInfo.birthdate)}</span>
          </div>
          <div className="w-full h-20 border-b-2 border-gray-light">
            <span className="block mb-2 text-sm">{translate("place_of_birth")}</span>
            <span className="mt-3 text-lg">{userInfo.placeOfBirth}</span>
          </div>
          <div className="w-full h-20 border-b-2 border-gray-light">
            <span className="block mb-2 text-sm">{translate("fiscal_code")}</span>
            <span className="mt-3 text-lg">{userInfo.cf}</span>
          </div>
        </div>
      }
    </div>
  );
}
