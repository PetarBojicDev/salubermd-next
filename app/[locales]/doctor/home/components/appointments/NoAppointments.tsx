"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import calendarImage from "../../../../../../public/images/calendar.png"

export default function NoAppointments() {

	const translate = useTranslations();

	const navigateToAppointments = () => {
		console.log("doctor/appointments");
	}

  return (
		<div className="w-full md:h-72 rounded-lg shadow-md bg-white mr-5 p-5 flex flex-col justify-center items-center mb-5">
			<Image
        src={calendarImage}
        alt="Calendar Logo"
        className="w-auto h-14 block"
        priority
      />
			<div className="block">
				<label className="md:text-base text-sm">{translate("no_appointments_1") + " "}</label>
				<label onClick={() => navigateToAppointments()} className="md:text-base text-sm md:inline-block block text-center text-blue hover:underline underline-offset-1">
					{translate("no_visits_3") + " "}
				</label>
			</div>
			<label className="md:text-base text-sm">{translate("no_appointments_2")}</label>
		</div>
  );
}
