import { formatTImestampToTime, formatTimestampToDateWithTime } from "@/public/constants/utils";
import { useTranslations } from "next-intl";

export default function VisitDetail({
  visit,
}: {
  visit: Object;
}) {

	const translate = useTranslations();
	const patientLabel = visit.patientName + " " + visit.patientSurname.trim().charAt(0) + ".";

  return (
		<div className="w-1/4">
			<div className="mr-5 h-full bg-white rounded-lg shadow-md">
				<div className="pl-3 pt-8 inline-grid w-full">
					<label className="text-xs text-gray">{formatTimestampToDateWithTime(visit?.date) + " " + formatTImestampToTime(visit?.date)}</label>
					<label className="text-lg font-bold">{patientLabel}</label>
					<label className={`text-base ${visit.summarySaved ? "text-blue" : "text-red"}`}>{visit.summarySaved ? translate("completed") : translate("draft")}</label>
				</div>
			</div>
		</div>
  );
}
