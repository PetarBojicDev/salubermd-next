import "server-only";
import { calculateAge, formatTimestampToDate, formatTimestampToHoursAndMinutes } from "@/public/constants/utils";
import { useTranslations } from "next-intl";
import styles from "../../home.module.css";

export default function AppointmentDetail({
  appointment,
}: {
  appointment: Object;
}) {

	const translate = useTranslations();

  return (
		<div className="w-full h-1/4 mr-5">
			<div className={`${styles.height90} w-full`}>
				<div className="rounded-lg shadow-md w-full h-full bg-white hover:bg-gray-hover inline-flex">
					<div className={`h-full ${styles.width25}`}>
						<div className="p-5 inline-grid">
							<label className="text-xs text-gray">{formatTimestampToDate(appointment?.startsAt)}</label>
							<label className="text-lg font-bold">{`${formatTimestampToHoursAndMinutes(appointment?.startsAt)} - ${formatTimestampToHoursAndMinutes(appointment?.endsAt)}`}</label>
							<label className="text-xs text-gray">{""}</label>
						</div>
					</div>
					<div className={`h-full ${styles.width5} pt-2 pb-2`}>
						<div className="divider divider-horizontal h-full"></div>
					</div>
					<div className={`h-full ${styles.width70}`}>
						<div className="h-7 inline-flex justify-between w-full">
							<div className="p-5 inline-grid">
								<label className="text-xs text-gray">{calculateAge(appointment?.user?.birthdate) + " " + translate("years_old")}</label>
								<label className="text-lg font-bold">{appointment?.user?.nome + " " + appointment?.user?.cognome}</label>
								<label className="">{""}</label>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={`${styles.height10} w-full`}/>
		</div>
  );
}
