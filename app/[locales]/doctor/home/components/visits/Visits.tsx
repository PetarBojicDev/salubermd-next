import React from "react";
import "server-only";
import { cookies } from 'next/headers';
import VisitDetail from "./VisitDetail";
import useTranslate from "@/public/translate/translate";
import NoVisits from "./NoVisits";
import NavigateLabel from "@/app/[locales]/components/NavigateLabel";

async function getRecentVisits(server: string, token: string) {
  const response = await fetch(`${server}/backoffice/getDoctorData/temp`, {
    method: 'GET',
    headers: {
      'X-AUTH-TOKEN': `${token}`
    }
  });
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();
  const recentVisits = data.visitsHistory;
  const slicedRecentVisits = recentVisits.slice(0, 4);

  //put this here just to see suspense
  const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
  await delay(3000);

  return [];
}

  export default async function Visits() {

    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    const server = cookieStore.get("server")?.value;
    const pastVisits = await getRecentVisits(server || "", token || "");
    const { visitsLabels } = await useTranslate();

    const renderVisits = (data: Object[]) => {
      return (
        <>
          {data.map((element: Object, index: number) => {
            return (
              <VisitDetail key={index} visit={element} visitIndex={index}/>
            );
          })}
        </>
      )
    }

    const renderNoVisits = () => {
      return (
        <NoVisits/>
      )
    }

    return (
      <div className="md:mb-5 mb-0">
        <div className="h-7 inline-flex justify-between w-full">
            <label className="font-bold text-md">{visitsLabels.labelVisits}</label>
            {pastVisits.length > 0 && 
            <NavigateLabel 
              style="font-bold text-md text-blue md:pr-5 pr-0 hover:underline underline-offset-2" 
              route="doctor/visits"
              text={visitsLabels.labelSeeAll}/>
            }
        </div>
        <div className={`w-full md:pr-5 pr-0`}>
          {pastVisits.length > 0 ? renderVisits(pastVisits) : renderNoVisits()}
        </div>
      </div>
    );
  }
