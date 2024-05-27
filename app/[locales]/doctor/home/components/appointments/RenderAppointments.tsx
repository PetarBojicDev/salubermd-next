import React from "react";
import HomepageCard from "../../../../components/HomepageCard";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import ThreeLabels from "../../../../components/ThreeLabels";
import { calculateAge, formatTimestampToDate, formatTimestampToHoursAndMinutes } from "@/public/constants/utils";
import { useTranslations } from "next-intl";
import styles from "../../home.module.css";

const RenderAppointments: React.FC = () => {

	const appointments = useSelector((state: RootState) => state.visits.appointments);
  const translate = useTranslations();

    const renderNoAppointments = () => {
        return (
            <div className="w-3/4">
                <HomepageCard customStyle="mr-5 h-full bg-white">
                <ThreeLabels 
                    customStyle="p-5"
                    firstLineText={translate("no_recent_visits")}
                    secondLineText={translate("no_recent_visits_desc")}
                    thirdLineText={""}
                    firstLineStyle="text-lg font-bold"
                    secondLineStyle="text-sm"
                    thirdLineStyle={""}
                />
                </HomepageCard>
            </div>
        )
    }

		const renderLastData = (data: Object) => {
			let temp = JSON.parse(data?.user?.lastData);
			console.log(temp);
		}

    const renderAppointments = () => {
        return (
            <>
                {appointments?.slice(0, 4).map((appointment, index) => (
                    appointment && (
                        <div key={index} className="w-full h-1/4 mb-2 mr-5">
                            <HomepageCard customStyle="w-full h-full bg-white hover:bg-gray-hover inline-flex">
															<div className={`h-full ${styles.width25}`}>
															<ThreeLabels 
																customStyle={"p-5"} 
																firstLineText={formatTimestampToDate(appointment?.startsAt)} 
																secondLineText={`${formatTimestampToHoursAndMinutes(appointment?.startsAt)} - ${formatTimestampToHoursAndMinutes(appointment?.endsAt)}`} 
																thirdLineText=""
																firstLineStyle={"text-xs text-gray"} 
																secondLineStyle={"text-lg font-bold"} 
																thirdLineStyle=""/>
															</div>
															<div className={`h-full ${styles.width5} pt-2 pb-2`}>
																<div className="divider divider-horizontal h-full"></div>
															</div>
															<div className={`h-full ${styles.width70}`}>
																<div className="h-7 inline-flex justify-between w-full">
																	<ThreeLabels 
																		customStyle={"p-5"} 
																		firstLineText={calculateAge(appointment?.user?.birthdate) + " " + translate("years_old")} 
																		secondLineText={appointment?.user?.nome + " " + appointment?.user?.cognome} 
																		thirdLineText=""
																		firstLineStyle={"text-xs text-gray"} 
																		secondLineStyle={"text-lg font-bold"} 
																		thirdLineStyle=""/>
																		{renderLastData(appointment)}
																</div>
															</div>
                            </HomepageCard>
                        </div>
                    )
                ))}
            </>
        );
    };

    return (
        <div className="w-full h-5/6 pr-5">
            {appointments?.length == 0 ? renderNoAppointments() : renderAppointments()}
        </div>
    );
}

export default RenderAppointments;
