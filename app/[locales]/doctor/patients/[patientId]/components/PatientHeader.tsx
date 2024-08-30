"use client";
import React from "react";
import LeftPart from "../components/LeftPart";
import RightPart from "../components/RightPart";
import StaticDropdown from "@/app/[locales]/components/StaticDropdown";

interface HeadeData {
  nome?: string;
  cognome?: string;
  birthdate?: string;
  gender?: number;
}
interface PatientProps {
  data: HeadeData;
}

export default function PatientHeader({data}: PatientProps) {

  return (
    <div className="md:h-20 h-16 w-full bg-light-black inline-flex items-center">
      <LeftPart dob={data.birthdate} gender={data.gender} name={data.nome} surname={data.cognome}/>
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
