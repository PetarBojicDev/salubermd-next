import React from "react";
import "server-only";
import { cookies } from 'next/headers';
import styles from '../../home.module.css';
import { formatTimestampToDate, formatTimestampToHours } from "@/public/constants/utils";
import useTranslate from "@/public/translate/translate";
import NoActivities from "./NoActivities";
import NavigateLabel from "@/app/[locales]/components/NavigateLabel";

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

  export default async function Activities() {

    const { activitiesLabels } = await useTranslate();
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    const server = cookieStore.get("server")?.value;
    const slots = await getTodayActivities(server || "", token || "");

    const renderNoSlots = () => {
      return (
        <NoActivities/>
      )
    }

    const renderSlots = (avAM: Object[], avPM: Object[], apAM: Object[], apPM: Object[]) => {

      return (
        <div className="h-full bg-white rounded-lg shadow-md w-full inline-flex">
          <div className="w-1/2">
            <div className="pl-3 pt-8 inline-grid w-full">
              <label className="text-xs text-gray">{activitiesLabels.todayAM}</label>
              <label className="text-lg font-bold text-online">
                {avAM.length != 0 ? 
                  (avAM.length + " " + activitiesLabels.labelSlots) : 
                  activitiesLabels.labelNoSlots}
              </label>
              <label className="text-md">
                {apAM.length != 0 ? 
                  (apAM.length + " " + activitiesLabels.labelAppointments) : 
                  activitiesLabels.labelNoAppointments} 
              </label>
            </div>
          </div>
          <div className="w-1/2">
            <div className="pl-3 pt-8 inline-grid w-full">
              <label className="text-xs text-gray">{activitiesLabels.todayPM}</label>
              <label className="text-lg font-bold text-online">
                {avPM.length != 0 ? 
                  (avPM.length + " " + activitiesLabels.labelSlots) : 
                  activitiesLabels.labelNoSlots}
              </label>
              <label className="text-md">{apPM.length != 0 ? 
                (apPM.length + " " + activitiesLabels.labelAppointments) : 
                activitiesLabels.labelNoAppointments}
              </label>
            </div>
          </div>
        </div>
      );
  };

    const calculateSlots = (data: Object[]) => {

			let today = formatTimestampToDate((new Date()).getTime());
			let listAvailabilityTodayAM:Object[] = [];
			let listAvailabilityTodayPM:Object[] = [];
			let listAppointmentTodayAM:Object[] = [];
			let listAppointmentTodayPM:Object[] = [];
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
        <div className={`${styles.height25}`}>
          <div className="h-1/6 inline-flex justify-between w-full">
              <label className="font-bold text-md">{activitiesLabels.labelActivities}</label>
              {slots.length > 0 && 
              <NavigateLabel 
                style="font-bold text-md text-blue hover:underline underline-offset-2" 
                route="doctor/agenda"
                text={activitiesLabels.labelSeeAll}/>
            }
          </div>
          <div className="w-full h-5/6">
            {(listAvailabilityTodayAM.length != 0 || listAvailabilityTodayPM.length != 0) ? 
              renderSlots(listAvailabilityTodayAM, listAvailabilityTodayPM, listAppointmentTodayAM, listAppointmentTodayPM) : 
              renderNoSlots()}
          </div>
        </div>
			)
		}

    return (
      <>
        {calculateSlots(slots)}
      </>
    );
  }
