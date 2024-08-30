import { formatTImestampToTime, formatTimestampToDateWithTime } from "@/public/constants/utils";
import { useTranslations } from "next-intl";

interface VisitProps {
	patientName?: string;
	patientSurname?: string;
	summarySaved?: boolean;
	date?: number;
}
interface VisitDetailProps {
	visit: VisitProps;
	visitIndex: number;
}

export default function VisitDetail({
  visit,
	visitIndex
}: VisitDetailProps) {

	const translate = useTranslations();
	const patientLabel = visit.patientName + " " + visit.patientSurname?.trim().charAt(0) + ".";

  return (
		<div className="md:w-1/4 w-1/2 md:h-32 inline-block md:pb-0 pb-5">
			<div className={`h-full bg-white rounded-lg shadow-md hover:bg-gray-light
				${visitIndex == 0 && "mr-2"} 
				${visitIndex == 1 && "md:mr-2 md:ml-2 ml-2 mr-0"} 
				${visitIndex == 2 && "md:mr-2 md:ml-2 mr-2 ml-0"} 
				${visitIndex == 3 && "ml-2"}`}>
				<div className="pl-3 pt-3 pb-3 inline-grid w-full">
					<label className="text-xs text-gray">{formatTimestampToDateWithTime(visit?.date) + " " + formatTImestampToTime(visit?.date)}</label>
					<label className="md:text-lg text-base font-bold">{patientLabel}</label>
					<label className={`text-sm ${visit.summarySaved ? "text-blue" : "text-red"}`}>{visit.summarySaved ? translate("completed") : translate("draft")}</label>
				</div>
			</div>
		</div>
  );
}
