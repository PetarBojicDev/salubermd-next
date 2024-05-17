import { RootState } from "@/store/store";
import { useTranslations } from "next-intl";
import React from "react";
import { useSelector } from "react-redux";
import { MdCalendarMonth } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";

const DrawerItem: React.FC<{ type: string }> = ({ type }) => {

  const router = useRouter(); 
  const translate = useTranslations();
  const path = usePathname();
  const isActive = path.includes(type);
  const drawerOpenedStatus = useSelector((state: RootState) => state.userInfo.drawerOpenedStatus);
  const language = useSelector((state: RootState) => state.language.value);

  const renderIcon = () => {
    switch(type){
      case "home":
        return <FaHome className="text-white" size={30}></FaHome>;
      case "agenda":
        return <MdCalendarMonth className="text-white" size={30}></MdCalendarMonth>;
      default:
        return <></>;
    }
  }

  const navigateToRoot = () => {
    router.push(`/${language}/doctor/${type}`);
  }

  return (
    <>
      <div className={`h-20 hover:bg-darker-blue items-center inline-flex ${drawerOpenedStatus ? "opacity-100" : "opacity-0"} ${isActive ? "bg-blue" : "bg-dark-blue"}`} 
        style={{ transition: "opacity 0.1s ease-in-out"}} onClick={() => navigateToRoot()}>
        <div className="ml-10 inline-flex">
          {renderIcon()}
          <span className=" text-white font-semibold ml-5 text-xl">{translate(type)}</span>
        </div>
        
      </div>
    </>
  );
}

export default DrawerItem;
