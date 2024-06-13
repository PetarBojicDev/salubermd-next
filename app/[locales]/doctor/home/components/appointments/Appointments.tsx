import React from "react";
import "server-only";
import { cookies } from 'next/headers';
import styles from '../../home.module.css';
import AppointmentDetail from "./AppointmentDetail";

interface LabelProps {
  labelAppointments: string;
  labelSeeAll: string;
}

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

  export default async function Appointments({labelAppointments, labelSeeAll}: LabelProps) {

    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    const server = cookieStore.get("server")?.value;
    const appointments = await getAppointments(server, token);

    return (
      <div className={`block w-full pr-5 ${styles.height70}`}>
        <div className={`${styles.height5} inline-flex justify-between w-full`}>
					<label className="font-bold text-md">{labelAppointments}</label>
          {appointments.length > 0 && 
          <label className="font-bold text-md text-blue hover:underline underline-offset-2">{labelSeeAll}</label>}
			  </div>
        <div className={`${styles.height95}`}>
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


