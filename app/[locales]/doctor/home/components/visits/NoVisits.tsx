"use client";
import { useTranslations } from "next-intl";

export default async function NoVisits() {

	const translate = useTranslations();

	const showTips = () => {
		console.log("showed tips");
	}

  return (
		<div className={`inline-grid w-full rounded-lg shadow-md bg-white mr-5 p-5 md:mb-0 mb-5`}>
			<label className="md:text-base text-sm">{translate("no_visits_1")}</label>
			<div className="inline">
				<label className="md:text-base text-sm">{translate("no_visits_2") + " "}</label>
				<label onClick={() => showTips()} className="md:text-base text-sm text-blue hover:underline underline-offset-1">{translate("no_visits_3") + " "}</label>
				<label className="md:text-base text-sm">{translate("no_visits_3")}</label>
			</div>
		</div>
  );
}
