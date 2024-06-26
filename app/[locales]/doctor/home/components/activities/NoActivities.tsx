"use client";
import { useTranslations } from "next-intl";

export default function NoActivities() {

	const translate = useTranslations();

	const navigateToAgenda = () => {
		console.log("navigating to agenda");
	}

  return (
		<div className="w-full md:h-32 rounded-lg shadow-md bg-white mr-5 p-5">
			<label className="md:text-base text-sm block text-center">{translate("no_available_slots")}</label>
			<label onClick={() => navigateToAgenda()} className="md:text-base text-sm block text-center text-blue hover:underline underline-offset-1">{translate("add_first_availability")}</label>
		</div>
  );
}
