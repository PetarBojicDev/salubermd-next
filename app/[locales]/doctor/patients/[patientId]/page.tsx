"use client";
import React, { useState } from "react";
import Selection from "../../../components/Selection";
import { patientDetailsOptions } from "@/public/constants/utils";
import PatientHeader from "./components/PatientHeader";
import MedicalRecords from "./components/MedicalRecords";

const Contact: React.FC = () => {

  const [selected, setSelected] = useState(patientDetailsOptions[0]);

  const renderSelected = () => {
    switch(selected) {
      case "medical_records":
        return <MedicalRecords/>
      default:
        return <></>
    }
  }

  return (
    <div className="mx-auto w-full bg-background">
      <PatientHeader/>
        <div className="p-6">
          <Selection selected={selected} setSelected={setSelected} options={patientDetailsOptions}/>
          <div className="w-full md:inline-flex block">
            {renderSelected()}
          </div>
        </div>
    </div>
  );
}

export default Contact;