"use client";
import { useTranslations } from "next-intl";
import TipsModal from "../TipsModal";

export default function NoVisits() {

	const translate = useTranslations();

	const showTips = () => {
		const modalHolder = document.getElementById('my_modal_3');
    if(modalHolder){
        modalHolder.showModal();
    }
	}

  return (
		<div className="w-full rounded-lg shadow-md bg-white mr-5 p-5 md:mb-0 mb-5 md:h-32">
			<div className="md:w-2/3">
				<label className="md:text-base text-sm">{translate("no_visits_1")}</label>
				<div className="inline">
					<label className="md:text-base text-sm">{translate("no_visits_2") + " "}</label>
					<label onClick={() => showTips()} className="md:text-base text-sm text-blue hover:underline underline-offset-1">{translate("no_visits_3") + " "}</label>
					<label className="md:text-base text-sm">{translate("no_visits_4")}</label>
				</div>
			</div>
			<TipsModal/>
		</div>
  );
}
