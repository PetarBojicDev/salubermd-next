import React from "react";
import HomepageCard from "../../../../components/HomepageCard";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import ThreeLabels from "../../../../components/ThreeLabels";
import { formatTimestampToDate } from "@/public/constants/utils";
import { useTranslations } from "next-intl";

const RenderVisits: React.FC = () => {

    const pastVisits = useSelector((state: RootState) => state.visits.pastVisits);
    const translate = useTranslations();

    const renderNoVisits = () => {
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

    const renderVisits = () => {
        return (
            <>
                {pastVisits?.slice(0, 4).map((visit, index) => (
                    visit && (
                        <div key={index} className="w-1/4">
                            <HomepageCard customStyle="mr-5 h-full bg-white hover:bg-gray-hover">
                                <ThreeLabels 
                                    customStyle="pl-3 pt-5"
                                    firstLineText={formatTimestampToDate(visit.date)}
                                    secondLineText={visit.patient}
                                    thirdLineText={visit.summarySaved ? translate("completed") : translate("draft")}
                                    firstLineStyle="text-xs text-gray"
                                    secondLineStyle="text-lg font-bold"
                                    thirdLineStyle={`text-md ${visit.summarySaved ? "text-blue" : "text-red"}`}
                                />
                            </HomepageCard>
                        </div>
                    )
                ))}
            </>
        );
    };

    return (
        <div className="inline-flex w-full h-5/6">
            {pastVisits?.length == 0 ? renderNoVisits() : renderVisits()}
        </div>
    );
}

export default RenderVisits;
