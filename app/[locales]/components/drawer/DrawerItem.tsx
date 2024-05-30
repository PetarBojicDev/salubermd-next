"use client";
import { RootState } from "@/store/store";
import { useTranslations } from "next-intl";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdCalendarMonth, MdLogout } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import { clearState } from "@/store/states/clear";
import { DrawerItemProp } from "@/public/constants/props";

const DrawerItem: React.FC<DrawerItemProp> = ({title, route}) => {

  const dispatch = useDispatch();
  const router = useRouter(); 
  const translate = useTranslations();
  const path = usePathname();
  const isActive = path.includes(route);
  const language = useSelector((state: RootState) => state.language.value);

  const renderIcon = () => {
    switch(title){
      case "home":
        return <FaHome className="text-white" size={30}></FaHome>;
      case "agenda":
        return <MdCalendarMonth className="text-white" size={30}></MdCalendarMonth>;
      case "logout":
        return <MdLogout className="text-sidebar-divider" size={30}></MdLogout>;
      default:
        return <></>;
    }
  }

  const navigateToRoute = () => {
    if(title == "logout") {
      localStorage.removeItem("X-AUTH-TOKEN");
      localStorage.setItem("server","https://wseu.salubermd.com");
      dispatch(clearState());
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
