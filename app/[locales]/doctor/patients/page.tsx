"use client";
import React, { useContext, useEffect, useState } from 'react';
import FilterPatients from './components/FilterPatients';
import { consultationCategories } from '@/public/constants/consultation-categories';
import SortPatients from './components/SortPatients';
import { fetchPatients } from './apiCalls';
import { MainContext } from '../../components/ContextProvider';
import PatientLine from './components/PatientLine';
import { getCookie, setCookie } from '../../../../public/constants/utils';

interface ConsultationProps {
  title?: string;
  index?: number;
}

export default function Patients() {

  const { token, server } = useContext(MainContext);
  const [filter, setFilter] = useState("");
  const [value, setValue] = useState<ConsultationProps>(consultationCategories[0]);
  const [sortValue, setSortValue] = useState(true);
  const [patientsNumber, setPatientsNumber] = useState(0);
  const [patients, setPatients] = useState([]);
  const [pageCounter, setPageCounter] = useState(0);
  const [userToken, setUserToken] = useState(token != "" ? token : getCookie('token'));

  const getPatients = async () => {

    const response = await fetchPatients(server, userToken || "", pageCounter, value.index || -1, filter, sortValue);
    setPatientsNumber(response.patientNumber);
    setPatients(response.visits);
    setPageCounter(prev => prev++);
  }

  useEffect(() => {
    setCookie('token', userToken, 7);
    getPatients();
  },[]);

  return (
    <div className="mx-auto p-5">
      <FilterPatients filter={filter} setFilter={setFilter} value={value} setValue={setValue}/>
      <SortPatients sortValue={sortValue} setSortValue={setSortValue} patientsNumber={patientsNumber}/>
      <div className="overflow-y-scroll md:max-h-96 max-h-80 mt-5">
      {patients.map((element: Object, index: number) => {
        return (
          <PatientLine key={index} element={element}/>
        );
      })}
      </div>
    </div>
  );
}