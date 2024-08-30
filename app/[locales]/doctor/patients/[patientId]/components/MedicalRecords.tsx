"use client";
import React from "react";
import PersonalInformation from "./PersonalInformation";
import HealthInformation from "./HealthInformation";

interface HealthData {
  diseases?: Object[];
  allergies?: Object[];
  medications?: Object[];
  hospitalizations?: Object[];
}

interface PatientProps {
  userInfo: Object;
  healthData: HealthData;
}

export default function MedicalRecords({healthData, userInfo}: PatientProps) {

  return (
    <div className="w-full">
      <PersonalInformation userInfo={userInfo}/>
      <HealthInformation title={"diseases"} data={healthData.diseases || []}/>
      <HealthInformation title={"allergies"} data={healthData.allergies || []}/>
      <HealthInformation title={"medications"} data={healthData.medications || []}/>
      <HealthInformation title={"hospitalizations"} data={healthData.hospitalizations || []}/>
    </div>
  );
}
