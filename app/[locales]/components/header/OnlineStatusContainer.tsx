"use client";
import { RootState } from "@/store/store";
import React from "react";
import { useSelector } from "react-redux";
import OnlineAvatar from "../../../../public/images/online.png";
import OfflineAvatar from "../../../../public/images/offline.png";
import Image from "next/image";
import Switch from "../Switch";
import { useTranslations } from "next-intl";


const OnlineStatusContainer: React.FC = () => {

  const onlineStatus = useSelector((state: RootState) => state.userInfo.onlineStatus);
  const translate = useTranslations();

  return (
    <div className={`md:w-72 md:h-20 h-16 w-36 content-center transition-colors duration-700 ease-in-out inline-flex items-center ${onlineStatus ? "bg-online" : "bg-offline"}`}>
      <div className="avatar ml-4 md:inline-flex hidden">
        <div className="w-12 h-12 rounded-full">
          {onlineStatus ? 
            <Image
              src={OnlineAvatar}
              alt="Login logo"
              priority
            /> : 
            <Image
              src={OfflineAvatar}
              alt="Login logo"
              priority
            />
          }
        </div>
      </div>
      <div className="inline-grid md:ml-3 ml-1">
        <span className="text-white font-semibold md:text-xl text-sm">Gianfranco</span>
        <span className="text-white font-medium md:text-sm text-xs">{onlineStatus ? translate("online") : translate("offline")}</span>
      </div>
      <div className="md:ml-auto ml-2">
        <Switch
          type={"onlineStatus"}
        />
      </div>
    </div>
  );
}

export default OnlineStatusContainer;
