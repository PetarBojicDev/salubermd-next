"use client";
import { setDrawerOpenedStatus } from "@/store/states/userInfo";
import { RootState } from "@/store/store";
import React from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const DrawerOpener: React.FC = () => {

  const drawerOpenedStatus = useSelector((state: RootState) => state.userInfo.drawerOpenedStatus);
  const dispatch = useDispatch();

  const toggleDrawer = () => {
    let temp = drawerOpenedStatus;
    dispatch(setDrawerOpenedStatus(!temp));
  }

  return (
    <div className="md:w-20 md:h-20 h-16 w-16 bg-blue content-center hover:bg-dark-blue drawer-button" onClick={() => {toggleDrawer()}}>
      {drawerOpenedStatus ? 
        <MdClose className="mx-auto text-white align-middle" size={32}/> :
        <MdMenu className="mx-auto text-white align-middle" size={32}/>
        
      }
    </div>
  );
}

export default DrawerOpener;
