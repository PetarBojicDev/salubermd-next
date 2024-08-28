"use client";
import React from "react";
import PersonalInformation from "./PersonalInformation";
import Diseases from "./Diseases";
import Allergies from "./Allergies";
import Medications from "./Medications";
import Hospitalizations from "./Hospitalizations";

export default function MedicalRecords() {

  return (
    <div className="w-full">
      <PersonalInformation/>
      <Diseases/>
      <Allergies/>
      <Medications/>
      <Hospitalizations/>
    </div>
  );
}
