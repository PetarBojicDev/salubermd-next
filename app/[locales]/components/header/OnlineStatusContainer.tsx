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
    <div className={`lg:w-1/4 lg:h-20 content-center transition-colors duration-700 ease-in-out inline-flex items-center ${onlineStatus ? "bg-online" : "bg-offline"}`}>
      <div className="avatar ml-4">
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
      <div className="inline-grid ml-3">
        <span className="text-white font-semibold text-xl">Gianfranco</span>
        <span className="text-white font-medium text-sm">{onlineStatus ? translate("online") : translate("offline")}</span>
      </div>
      <div className="ml-auto">
        <Switch
          type={"onlineStatus"}
        />
      </div>
    </div>
  );
}

export default OnlineStatusContainer;
