"use client";
import React, { useContext } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { MainContext } from "../ContextProvider";

const DrawerOpener: React.FC = () => {

  const { openedDrawer, setOpenedDrawer } = useContext(MainContext);

  const toggleDrawer = () => {
    let temp = openedDrawer;
    setOpenedDrawer(!temp);
  }

  return (
    <div className="md:w-20 md:h-20 h-16 w-16 bg-blue content-center hover:bg-dark-blue drawer-button" onClick={() => {toggleDrawer()}}>
      {openedDrawer ? 
        <MdClose className="mx-auto text-white align-middle" size={32}/> :
        <MdMenu className="mx-auto text-white align-middle" size={32}/>
        
      }
    </div>
  );
}

export default DrawerOpener;
