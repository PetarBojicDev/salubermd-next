"use client";
import React from "react";
import LeftPart from "../components/LeftPart";
import RightPart from "../components/RightPart";
import StaticDropdown from "@/app/[locales]/components/StaticDropdown";

export default function PatientHeader() {

  return (
    <div className="md:h-20 h-16 w-full bg-light-black inline-flex items-center">
      <LeftPart/>
      <div className="lg:w-1/6 items-end ml-auto">
        <div className="flex pr-5">
          <div className="ml-auto">
            <RightPart/>
          </div>
        </div>
      </div>
      <StaticDropdown/>
    </div>
  );
}
