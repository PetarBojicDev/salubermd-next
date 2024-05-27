"use client";
import React, { useEffect } from "react";
import Visits from "./components/visits/Visits";
import Activities from "./components/activities/Activities";
import Appointments from "./components/appointments/Appointments";
import Notifications from "./components/Notifications";
import { fetchDoctorAppointmentData, fetchDoctorHomepageData, fetchDoctorSlotsData } from "./apiCalls";
import { useDispatch } from "react-redux";
import { setAppointments, setPastVisits, setSlots } from "@/store/states/visits";
import styles from "./home.module.css";
import { setDoctorOnlineStatus } from "@/store/states/userInfo";

export default function Home() {

  const dispatch = useDispatch();

  useEffect(() => {
    getDoctorVisitsData();
    getDoctorSlotsData();
    getDoctorAppointmentData();
  },[]);

  const getDoctorSlotsData = async () => {
    const response = await fetchDoctorSlotsData();
    Promise.all([
      dispatch(setSlots(response.slot))
    ])
  }

  const getDoctorVisitsData = async () => {
    const response = await fetchDoctorHomepageData();
    Promise.all([
      dispatch(setPastVisits(response.visitsHistory)),
      dispatch(setDoctorOnlineStatus(response.isonline))
    ])
  }

  const getDoctorAppointmentData = async () => {
    const response = await fetchDoctorAppointmentData();
    dispatch(setAppointments(response.slot));
  }

  return (
    <div className="mx-auto w-full h-full bg-background inline-flex p-5">
      <div className={`h-full block ${styles.width67}`}>
        <Visits/>
        <div className={`w-full ${styles.height5}`}></div>
        <Appointments/>
      </div>
      <div className={`h-full ${styles.width2}`}></div>
      <div className="h-full inline-block" style={{width: "30%"}}>
        <Activities/>
        <div className={`w-full ${styles.height5}`}></div>
        <Notifications/>
      </div>
      
    </div>
  );
}
