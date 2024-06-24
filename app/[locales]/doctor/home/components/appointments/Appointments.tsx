import React from "react";
import "server-only";
import { cookies } from 'next/headers';
import styles from '../../home.module.css';
import AppointmentDetail from "./AppointmentDetail";
import useTranslate from "@/public/translate/translate";
import NoAppointments from "./NoAppointments";
import NavigateLabel from "@/app/[locales]/components/NavigateLabel";

async function getAppointments(server: string, token: string) {
  let offSet = new Date().getTimezoneOffset();
  const response = await fetch(`${server}/backoffice/getDoctorAppointment/${offSet}`, {
    method: 'GET',
    headers: {
      'X-AUTH-TOKEN': `${token}`
    }
  });
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();

  //put this here just to see suspense
  const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
  await delay(3000);

  return data.slot;
}

  export default async function Appointments() {

    const { appointmentsLabels } = await useTranslate();
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    const server = cookieStore.get("server")?.value;
    const appointments = await getAppointments(server || "", token || "");

    const renderAppointments = (data: Object[]) => {
      return (
        <>
          {data.map((element: Object, index: number) => {
            return (
              <AppointmentDetail key={index} appointment={element}/>
            );
          })}
        </>
      )
    }

    const renderNoAppointments = () => {
      return (
        <NoAppointments/>
      )
    }

    return (
      <div className={`block w-full pr-5 ${styles.height70}`}>
        <div className={`${styles.height5} inline-flex justify-between w-full`}>
					<label className="font-bold text-md">{appointmentsLabels.labelAppointments}</label>
          {appointments.length > 0 && 
            <NavigateLabel 
              style="font-bold text-md text-blue mr-5 hover:underline underline-offset-2" 
              route="doctor/appointments"
              text={appointmentsLabels.labelSeeAll}/>
          }
			  </div>
        <div className={`${styles.height95}`}>
          {appointments.length > 0 ? renderAppointments(appointments) : renderNoAppointments()}
        </div>
    </div>
    );
  }


