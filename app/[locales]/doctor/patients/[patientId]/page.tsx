"use client";
import React, { useState, useEffect, useContext } from "react";
import Selection from "../../../components/Selection";
import { patientDetailsOptions, getCookie } from "@/public/constants/utils";
import PatientHeader from "./components/PatientHeader";
import MedicalRecords from "./components/MedicalRecords";
import { apiGetPatientInfo, apiGetPatientHealthData } from './apiCalls';
import { MainContext } from "@/app/[locales]/components/ContextProvider";

const Patient = ({ params }: { params: { patientId: string } }) => {

  const { token, server } = useContext(MainContext);
  const [selected, setSelected] = useState(patientDetailsOptions[0]);
  const [userToken, setUserToken] = useState(token != "" ? token : getCookie('token'));
  const { patientId }: { patientId: string } = params;
  const [user, setUser] = useState({});
  const [healthData, setHealthData] = useState({});

  useEffect(() => {
    getPatientInfo();
    getPatientHealthData();
  },[]);

  const getPatientInfo = async () => {
    const response = await apiGetPatientInfo(server, userToken || "", patientId);
    setUser(response.user);
  }

  const getPatientHealthData = async () => {
    const response = await apiGetPatientHealthData(server, userToken || "", patientId);
    console.log(response);
    setHealthData(response);
  }

  const renderSelected = () => {
    switch(selected) {
      case "medical_records":
        return <MedicalRecords userInfo={user} healthData={healthData}/>
      default:
        return <></>
    }
  }

  return (
    <div className="mx-auto w-full bg-background">
      <PatientHeader data={user}/>
        <div className="p-6">
          <Selection selected={selected} setSelected={setSelected} options={patientDetailsOptions}/>
          <div className="w-full md:inline-flex block">
            {renderSelected()}
          </div>
        </div>
    </div>
  );
}

export default Patient;