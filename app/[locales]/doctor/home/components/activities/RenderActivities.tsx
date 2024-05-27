import React from "react";
import HomepageCard from "../../../../components/HomepageCard";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import ThreeLabels from "../../../../components/ThreeLabels";
import { formatTimestampToDate, formatTimestampToHours } from "@/public/constants/utils";
import { useTranslations } from "next-intl";

const RenderActivities: React.FC = () => {

    const slots = useSelector((state: RootState) => state.visits.slots);
    const translate = useTranslations();

    const renderNoSlots = () => {
        return (
            <div className="w-full h-full">
                <HomepageCard customStyle="mr-5 h-full bg-white">
                <ThreeLabels 
                    customStyle="p-5"
                    firstLineText=""
                    secondLineText={translate("no_available_slots")}
                    thirdLineText={translate("add_first_availability")}
                    firstLineStyle=""
                    secondLineStyle="text-md"
                    thirdLineStyle="text-md text-blue font-bold hover:underline underline-offset-2"
                />
                </HomepageCard>
            </div>
        )
    }

    const renderSlots = (avAM, avPM, apAM, apPM) => {

        return (
					<HomepageCard customStyle="w-full mr-5 h-full bg-white inline-flex">
            <div className="w-1/2">
							<ThreeLabels 
								customStyle={"p-5"} 
								firstLineText={translate("today_am")} 
								secondLineText={avAM.length != 0 ? (avAM.length + " " + translate("slots")) : translate("no_slots")} 
								thirdLineText={apAM.length != 0 ? (apAM.length + " " + translate("appointments")) : translate("no_appointments")} 
								firstLineStyle={"text-xs text-gray"} 
								secondLineStyle={"text-lg font-bold text-online"} 
								thirdLineStyle={"text-md"}/>
						</div>
						<div className="w-1/2">
							<ThreeLabels 
								customStyle={"p-5"} 
								firstLineText={translate("today_am")} 
								secondLineText={avPM.length != 0 ? (avPM.length + " " + translate("slots")) : translate("no_slots")} 
								thirdLineText={apPM.length != 0 ? (apPM.length + " " + translate("appointments")) : translate("no_appointments")} 
								firstLineStyle={"text-xs text-gray"} 
								secondLineStyle={"text-lg font-bold text-online"} 
								thirdLineStyle={"text-md"}/>
						</div>
					</HomepageCard>
        );
    };

		const calculateSlots = () => {

			let today = formatTimestampToDate((new Date()).getTime());
			let listAvailabilityTodayAM = [];
			let listAvailabilityTodayPM = [];
			let listAppointmentTodayAM = [];
			let listAppointmentTodayPM = [];
			if ((slots || []).length > 0) {
				let listToday = slots?.filter((val) => formatTimestampToDate(val?.startsAt) === today);
				if ((listToday || []).length > 0) {
					//AM
					listAvailabilityTodayAM = listToday?.filter((val) => formatTimestampToHours(val?.startsAt) <= 12) || [];
					if ((listAvailabilityTodayAM || []).length > 0) {
						listAppointmentTodayAM = listAvailabilityTodayAM.filter((val) => val?.patientId !== 0)
					}
					//PM
					listAvailabilityTodayPM = listToday?.filter((val) => formatTimestampToHours(val?.startsAt) > 12) || [];
					if ((listAvailabilityTodayPM || []).length > 0) {
						listAppointmentTodayPM = listAvailabilityTodayPM.filter((val) => val?.patientId !== 0)
					}
				}
			}

			return (
				<>
				{(listAvailabilityTodayAM.length != 0 || listAvailabilityTodayPM.length != 0) ? 
				renderSlots(listAvailabilityTodayAM, listAvailabilityTodayPM, listAppointmentTodayAM, listAppointmentTodayPM) : 
				renderNoSlots()}
				</> 
			)
		}

    return (
        <div className="w-full h-5/6">
					{calculateSlots()}
        </div>
    );
}

export default RenderActivities;
