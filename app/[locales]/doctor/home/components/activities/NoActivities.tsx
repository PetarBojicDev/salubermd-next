"use client";
import { useTranslations } from "next-intl";

export default async function NoActivities() {

	const translate = useTranslations();

	const navigateToAgenda = () => {
		console.log("navigating to agenda");
	}

  return (
		<div className="w-full h-full rounded-lg shadow-md bg-white mr-5 p-5">
			<label className="text-md block">{translate("no_available_slots")}</label>
			<label onClick={() => navigateToAgenda()} className="text-md text-blue hover:underline underline-offset-1">{translate("add_first_availability")}</label>
		</div>
  );
}
