"use client";
import React from "react";
import { FaChevronDown } from "react-icons/fa";

export default function Hospitalizations() {

  return (
    <div className="w-full p-6 bg-white h-20 rounded-xl inline-flex mb-6">
      <span className="font-bold text-lg">Hospitalizations</span>
      <div className="lg:w-1/6 items-end ml-auto flex self-center justify-end">
        <div className="w-10">
          <FaChevronDown size={16}/>
        </div>
      </div>
    </div>
  );
}
