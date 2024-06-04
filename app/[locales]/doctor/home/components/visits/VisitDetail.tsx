import { formatTimestampToDate } from "@/public/constants/utils";
import { useTranslations } from "next-intl";

export default function VisitDetail({
  visit,
}: {
  visit: Object;
}) {

	const translate = useTranslations();

  return (
    <div className="w-1/4 h-full">
			<div className="mr-5 h-full bg-white hover:bg-gray-hover rounded-lg shadow-md">
				<div className="pl-3 pt-5 inline-grid">
					<label className="text-xs text-gray">{formatTimestampToDate(visit.date)}</label>
					<label className="text-lg font-bold">{visit.patient}</label>
					<label className={`text-md ${visit.summarySaved ? "text-blue" : "text-red"}`}>{visit.summarySaved ? translate("completed") : translate("draft")}</label>
				</div>
			</div>
		</div>
  );
}
