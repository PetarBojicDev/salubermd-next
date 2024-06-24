"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import calendarImage from "../../../../../../public/images/calendar.png"

export default function NoAppointments() {

	const translate = useTranslations();

	const showTips = () => {
		console.log("showed tips");
	}

  return (
		<div className="w-full h-2/3 rounded-lg shadow-md bg-white mr-5 p-5 flex flex-col justify-center items-center">
			<Image
        src={calendarImage}
        alt="Calendar Logo"
        className="w-auto h-14 block"
        priority
      />
			<div className="block">
				<label className="text-md">{translate("no_appointments_1") + " "}</label>
				<label onClick={() => showTips()} className="text-md text-blue hover:underline underline-offset-1">{translate("no_visits_3") + " "}</label>
			</div>
			<label className="text-md">{translate("no_appointments_2")}</label>
		</div>
  );
}
