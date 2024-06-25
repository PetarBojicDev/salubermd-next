import React from "react";
import "server-only";
import { cookies } from 'next/headers';
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
  const appointments = data.slot;
  const slicedAppointments = appointments.slice(0, 4);

  //put this here just to see suspense
  const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
  await delay(3000);

  return slicedAppointments;
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
              <AppointmentDetail key={index} appointment={element} indexDetail={index}/>
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
      <div className="block w-full md:pr-5 pr-0">
        <div className="h-7 inline-flex justify-between w-full">
					<label className="font-bold text-md">{appointmentsLabels.labelAppointments}</label>
          {appointments.length > 0 && 
            <NavigateLabel 
              style="font-bold text-md text-blue hover:underline underline-offset-2" 
              route="doctor/appointments"
              text={appointmentsLabels.labelSeeAll}/>
          }
			  </div>
        <div>
          {appointments.length > 0 ? renderAppointments(appointments) : renderNoAppointments()}
        </div>
    </div>
    );
  }


