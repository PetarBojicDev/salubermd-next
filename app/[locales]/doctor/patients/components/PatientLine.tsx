"use client";
import React from 'react';
import { calculateAge, formatTimestampToDate } from '../../../../../public/constants/utils';
import { useTranslations } from "next-intl";

interface PatientProps {
  element: Object;
}

export default function PatientLine({element}: PatientProps) {

  const translate = useTranslations();
  console.log(element);

  return (
    <div className="w-full bg-white shadow-md inline-flex rounded-xl p-5 mb-4">
      <div className="md:w-1/3 w-1/2 border-r-2 border-gray-200">
        <label className="block text-xs text-gray mb-2">{calculateAge(element?.birthdate)} {translate("years_old")}</label>
        <label className="font-semibold md:text-base text-sm">{element?.name} {element?.surname}</label>
      </div>
      <div className="md:w-2/3 w-1/2 inline-flex justify-between pl-5">
        <div className="md:w-1/2 w-full inline-flex justify-start">
          <div>
            <label className="block text-xs text-gray mb-2">{translate("last_visit")}</label>
            <label className="font-semibold md:text-base text-sm">{element?.lastVisit ? formatTimestampToDate(element?.lastVisit) : translate("no_visits_yet")}</label>
          </div>
          <div className="pl-7">
            <label className="block text-xs text-gray mb-2">{translate("last_measurement")}</label>
            <label className="font-semibold md:text-base text-sm">{translate("not_implemented_yet")}</label>
          </div>
        </div>
      </div>
    </div>
  );

}