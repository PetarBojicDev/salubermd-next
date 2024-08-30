import "server-only";
import { calculateAge, formatTimestampToDate, formatTimestampToHoursAndMinutes } from "@/public/constants/utils";
import { useTranslations } from "next-intl";

interface UserProps {
	nome?: string;
	cognome?: string;
	birthdate?: string;
}
interface AppointmentProps {
	startsAt?: number;
	endsAt?: number;
	user?: UserProps;
}
interface AppointmentDetailProps {
	appointment: AppointmentProps;
	indexDetail: number;
}

export default function AppointmentDetail({
  appointment,
	indexDetail
}: AppointmentDetailProps) {

	const translate = useTranslations();

  return (
		<div className={`w-full mr-5 mb-5 ${(indexDetail == 2 || indexDetail == 3) && "md:block hidden"}`}>
			<div className="w-full">
				<div className="rounded-lg shadow-md w-full h-full bg-white hover:bg-gray-hover inline-flex">
					<div className="md:w-1/4 w-1/2">
						<div className="p-5 inline-grid">
							<label className="text-xs text-gray">{formatTimestampToDate(appointment?.startsAt)}</label>
							<label className="md:text-lg text-sm font-bold">{`${formatTimestampToHoursAndMinutes(appointment?.startsAt)} - ${formatTimestampToHoursAndMinutes(appointment?.endsAt)}`}</label>
							<label className="text-xs text-gray">{""}</label>
						</div>
					</div>
					<div className="h-full pt-2 pb-2">
						<div className="divider divider-horizontal h-full"></div>
					</div>
					<div className="h-full">
						<div className="h-7 inline-flex justify-between w-full">
							<div className="p-5 inline-grid">
								<label className="text-xs text-gray">{calculateAge(appointment?.user?.birthdate) + " " + translate("years_old")}</label>
								<label className="md:text-lg text-base font-bold">{appointment?.user?.nome + " " + appointment?.user?.cognome}</label>
								<label className="">{""}</label>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
  );
}
