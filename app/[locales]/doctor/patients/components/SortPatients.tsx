"use client";
import React from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useTranslations } from 'use-intl';

interface SortProps {
  sortValue: boolean;
  setSortValue: React.Dispatch<React.SetStateAction<boolean>>;
  patientsNumber: number;
}

export default function SortPatients({sortValue, setSortValue, patientsNumber}: SortProps) {

  const translate = useTranslations();

  return (
    <div className="w-full inline-flex justify-between mt-7">
      <label className="font-semibold md:text-base text-sm">{patientsNumber + " " + translate("active_patients")}</label>
      <div className="inline-flex justify-start text-center content-center" onClick={() => setSortValue(prev => !prev)}>
        <label className="font-semibold md:text-base text-sm text-blue">{sortValue ? translate("ascending") : translate("descending")}</label>
        {sortValue && <FaChevronDown color="#3777EE" className="ml-3 self-center"/>}
        {!sortValue && <FaChevronUp color="#3777EE" className="ml-3 self-center"/>}
      </div>
    </div>
  )
  
}