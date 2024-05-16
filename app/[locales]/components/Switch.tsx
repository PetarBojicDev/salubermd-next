"use client";
import { setDoctorOnlineStatus } from "@/store/states/userInfo";
import { RootState } from "@/store/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Switch: React.FC<{ type: string }> = ({ type }) => {

  const onlineStatus = useSelector((state: RootState) => state.userInfo.onlineStatus);
  const dispatch = useDispatch();

  const toggleOnline = () => {
    if(type == "onlineStatus") {
      let temp = onlineStatus;
      dispatch(setDoctorOnlineStatus(!temp));
    }
  }

  return (
    <div>
      <input type="checkbox" 
        className={`toggle toggle-md mr-3 text-white checked:text-white border-none ${onlineStatus ? "[--tglbg:#9ae6b4]" : "[--tglbg:#dddee1]"}`} 
        checked={onlineStatus} onChange={() => {toggleOnline()}}/>
    </div>
  );
}

export default Switch;
