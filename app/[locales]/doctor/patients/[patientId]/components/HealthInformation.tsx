"use client";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { formatTimestampToDate } from "@/public/constants/utils";

interface Element {
  disease?: string;
  allergy?: string;
  medicineName?: string;
  hospitalizationName?: string;
  surgeryCategoryName?: string;
  since?: number;
  hospDate?: number;
}

interface DiseasesProps {
  title: string;
  data: Element[];
}

export default function HealthInformation({title, data} : DiseasesProps) {

  const translate = useTranslations();
  const [opened, setOpened] = useState(false);

  const toggleOpened = () => {
    if(data.length > 0) {
      setOpened(prev => !prev);
    }
  }

  const getDataName = (element: Element) => {
    switch(title) {
      case "diseases": 
        return element?.disease;
      case "allergies":
        return element?.allergy;
      case "medications":
        return element?.medicineName;
      case "hospitalizations": 
        return element?.hospitalizationName || element?.surgeryCategoryName;
    }
  }

  return (
    <div className={`w-full p-6 bg-white rounded-xl inline-block mb-6 transition-all duration-500 ease-in-out ${opened ? (data.length > 3 ? "h-72" : "h-56") : "h-20"}`}>
      <div className="w-full inline-flex">
        <span className="font-bold text-lg">{`${translate(title)} (${data?.length || 0})`}</span>
        <div className="lg:w-1/6 items-end ml-auto flex justify-end self-start pt-2">
          <div className="w-10">
            {opened ? <FaChevronUp size={16} onClick={toggleOpened}/> : <FaChevronDown size={16} onClick={toggleOpened}/>}
          </div>
        </div>
      </div>
      {opened && 
        <div className="w-full h-52 inline-grid grid-cols-3 gap-4 pt-6"> 
          {data.map((element: Element, index: number) => {
            return (
              <div className="w-full h-20 border-b-2 border-gray-light">
                <span className="block mb-2 text-sm">{`${translate("from")} ${formatTimestampToDate(element?.since || element?.hospDate)}`}</span>
                <span className="mt-3 text-lg">{getDataName(element)}</span>
            </div>
            );
          })}
        </div>
      }
    </div>
  );
}
