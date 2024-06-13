import React from "react";
import "server-only";
import { cookies } from 'next/headers';
import styles from '../../home.module.css';
import { formatTimestampToDate, formatTimestampToHours } from "@/public/constants/utils";

interface LabelProps {
  labelActivities: string;
  labelSeeAll: string;
  labelSlots: string;
  labelNoSlots: string;
  labelAppointments: string;
  labelNoAppointments: string;
  todayAM: string;
  todayPM: string;
  labelNoAvSlots: string;
  labelNoAvApp: string;
}

async function getTodayActivities(server: string, token: string) {
  const response = await fetch(`${server}/backoffice/appointment?action=search`, {
    method: 'GET',
    headers: {
      'X-AUTH-TOKEN': `${token}`
    }
  });
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();
  const slots = data.slot;

  //put this here just to see suspense
  const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
  await delay(3000);

  return slots;
}

  export default async function Activities({labelActivities, labelSeeAll, labelSlots, labelNoSlots,
    labelAppointments, labelNoAppointments, todayAM, todayPM, labelNoAvSlots, labelNoAvApp } : LabelProps) {

    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    const server = cookieStore.get("server")?.value;
    const slots = await getTodayActivities(server, token);

    const renderNoSlots = () => {
      return (
        <div className="w-full h-full">
          <div className="mr-5 h-full bg-white rounded-lg shadow-md">
            <div className="p-5 inline-grid">
              <label className="text-md">{labelNoAvSlots}</label>
              <label className="text-md text-blue font-bold hover:underline underline-offset-2">{labelNoAvApp}</label>
            </div>
          </div>
        </div>
      )
    }

    const renderSlots = (avAM, avPM, apAM, apPM) => {

      return (
        <div className={`${styles.height25}`}>
          <div className="h-1/6 inline-flex justify-between w-full">
              <label className="font-bold text-md">{labelActivities}</label>
              {slots.length > 0 && 
            <label className="font-bold text-md text-blue mr-5 hover:underline underline-offset-2">{labelSeeAll}</label>}
          </div>
          <div className="w-full h-5/6">
            <div className="h-full bg-white rounded-lg shadow-md w-full inline-flex">
              <div className="w-1/2">
                <div className="pl-3 pt-8 inline-grid w-full">
                  <label className="text-xs text-gray">{todayAM}</label>
					        <label className="text-lg font-bold text-online">{avAM.length != 0 ? (avAM.length + " " + labelSlots) : labelNoSlots}</label>
					        <label className="text-md">{apAM.length != 0 ? (apAM.length + " " + labelAppointments) : labelNoAppointments} </label>
                </div>
              </div>
              <div className="w-1/2">
              <div className="pl-3 pt-8 inline-grid w-full">
                  <label className="text-xs text-gray">{todayPM}</label>
					        <label className="text-lg font-bold text-online">{avPM.length != 0 ? (avPM.length + " " + labelSlots) : labelNoSlots}</label>
					        <label className="text-md">{apPM.length != 0 ? (apPM.length + " " + labelAppointments) : labelNoAppointments} </label>
                </div>
						  </div>
            </div>
          </div>
        </div>
      );
  };

    const calculateSlots = (data: Object[]) => {

			let today = formatTimestampToDate((new Date()).getTime());
			let listAvailabilityTodayAM = [];
			let listAvailabilityTodayPM = [];
			let listAppointmentTodayAM = [];
			let listAppointmentTodayPM = [];
			if ((data || []).length > 0) {
				let listToday = data?.filter((val) => formatTimestampToDate(val?.startsAt) === today);
				if ((listToday || []).length > 0) {
					//AM
					listAvailabilityTodayAM = listToday?.filter((val) => formatTimestampToHours(val?.startsAt) <= 12) || [];
					if ((listAvailabilityTodayAM || []).length > 0) {
						listAppointmentTodayAM = listAvailabilityTodayAM.filter((val) => val?.patientId !== 0)
					}
					//PM
					listAvailabilityTodayPM = listToday?.filter((val) => formatTimestampToHours(val?.startsAt) > 12) || [];
					if ((listAvailabilityTodayPM || []).length > 0) {
						listAppointmentTodayPM = listAvailabilityTodayPM.filter((val) => val?.patientId !== 0)
					}
				}
			}

			return (
				<>
				{(listAvailabilityTodayAM.length != 0 || listAvailabilityTodayPM.length != 0) ? 
				renderSlots(listAvailabilityTodayAM, listAvailabilityTodayPM, listAppointmentTodayAM, listAppointmentTodayPM) : 
				renderNoSlots()}
				</> 
			)
		}

    return (
      <>
        {calculateSlots(slots)}
      </>
    );
  }
