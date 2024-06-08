import React from "react";
import "server-only";
import { cookies } from 'next/headers';
import styles from '../../home.module.css';
import AppointmentDetail from "./AppointmentDetail";
import { useTranslations } from "next-intl";

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
  console.log(data);

  //put this here just to see suspense
  const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
  await delay(500000);

  return data.slot;
}

  export default async function Appointments() {

    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    const server = cookieStore.get("server")?.value;
    const appointments = await getAppointments(server, token);

    return (
      <div className={`w-full ${styles.height70}`}>
      <div className="block h-full">
        <div className="h-7 inline-flex justify-between w-full">
          <label className={`font-bold text-md ${appointments == null && "text-gray"}`}>Sheduled appointments</label>
          {(appointments != null && appointments.length > 0) && 
          <label className="font-bold text-md text-blue mr-5 hover:underline underline-offset-2">See all</label>}
        </div>
        {
          appointments.map((element, index) => {
            return (
              <AppointmentDetail appointment={element}/>
            );
          })
        }
      </div>
    </div>
    );
  }


