"use client";
import React from 'react';

interface PatientProps {
  element: Object;
}

export default function PatientLine({element}: PatientProps) {

  return (
    <div className="w-full bg-white shadow-md inline-flex rounded-xl p-5 mb-4">
      <div className="md:w-1/3 w-1/2 border-r-2 border-gray-200">
        <label className="block text-xs text-gray mb-2">56 years old</label>
        <label className="font-semibold md:text-base text-sm">Mario Borelli</label>
      </div>
      <div className="md:w-2/3 w-1/2 inline-flex justify-between pl-5">
        <div className="md:w-1/2 w-full inline-flex justify-start">
          <div>
            <label className="block text-xs text-gray mb-2">Last visit</label>
            <label className="font-semibold md:text-base text-sm">22 Oct 2021</label>
          </div>
          <div className="pl-7">
            <label className="block text-xs text-gray mb-2">Last measurement</label>
            <label className="font-semibold md:text-base text-sm">2 weeks ago</label>
          </div>
        </div>
      </div>
    </div>
  );

}