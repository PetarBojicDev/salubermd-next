"use client";
import { useTranslations } from "next-intl";
import React, { useContext } from "react";
import { MdCalendarMonth, MdLogout, MdPhone } from "react-icons/md";
import { FaHome, FaUsers } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import { DrawerItemProp } from "@/public/constants/props";
import { MainContext } from "../ContextProvider";

const DrawerItem: React.FC<DrawerItemProp> = ({title, route}) => {

  const { language, setToken, setServer, setOpenedDrawer } = useContext(MainContext);

  const router = useRouter(); 
  const translate = useTranslations();
  const path = usePathname();
  const isActive = path.includes(route);

  const renderIcon = () => {
    switch(title){
      case "home":
        return <FaHome className="text-white" size={30}></FaHome>;
      case "agenda":
        return <MdCalendarMonth className="text-white" size={30}></MdCalendarMonth>;
      case "logout":
        return <MdLogout className="text-sidebar-divider" size={30}></MdLogout>;
      case "patients":
        return <FaUsers className="text-white" size={30}></FaUsers>;
      case "contact_us":
        return <MdPhone className="text-white" size={30}></MdPhone>;
      default:
        return <></>;
    }
  }

  const navigateToRoute = () => {
    if(title == "logout") {
      setToken("");
      setServer("http://192.168.0.107:8080");
      setOpenedDrawer(false);
      router.push(`/${language}/login`);
    }else{
      router.push(`/${language}/doctor/${title}`);
    }
  }

  return (
    <>
      <div className={`h-20 hover:bg-darker-blue items-center inline-flex ${isActive ? "bg-blue" : "bg-dark-blue"} w-full`} 
        style={{ transition: "opacity 0.1s ease-in-out"}} onClick={() => navigateToRoute()}>
        <div className="ml-10 inline-flex">
          {renderIcon()}
          <span className={`${title == "logout" ? "text-sidebar-divider" : "text-white" } font-semibold ml-5 text-xl`}>{translate(title)}</span>
        </div>
        
      </div>
    </>
  );
}

export default DrawerItem;
