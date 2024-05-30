import React from "react";
import Image from "next/image";
import LoginLogo from "../../../../public/images/login-logo.png";
import LanguageSwitcher from "../LanguageSwitcher";
import DrawerOpener from "./DrawerOpener";
import OnlineStatusContainer from "./OnlineStatusContainer";
import "server-only";

export default function Header() {

  return (
    <div className="absolute md:h-20 h-16 w-full bg-white inline-flex items-center z-20">
      <DrawerOpener/>
      <Image
        src={LoginLogo}
        alt="Login logo"
        className="w-auto h-14 ml-5 md:inline hidden"
        priority
      />
      <div className="lg:w-1/6 items-end ml-auto">
        <div className="flex pr-5">
          <div className="ml-auto">
            <LanguageSwitcher/>
          </div>
        </div>
      </div>
      <OnlineStatusContainer/>
    </div>
  );
}
