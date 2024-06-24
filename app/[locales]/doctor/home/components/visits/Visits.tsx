import React from "react";
import "server-only";
import { cookies } from 'next/headers';
import VisitDetail from "./VisitDetail";
import styles from '../../home.module.css';
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

  return slicedRecentVisits;
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
              <VisitDetail key={index} visit={element}/>
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
      <div  className={`${styles.height25}`}>
        <div className="h-1/6 inline-flex justify-between w-full">
            <label className="font-bold text-md">{visitsLabels.labelVisits}</label>
            {pastVisits.length > 0 && 
            <NavigateLabel 
              style="font-bold text-md text-blue mr-5 hover:underline underline-offset-2" 
              route="doctor/visits"
              text={visitsLabels.labelSeeAll}/>
            }
        </div>
        <div className={`inline-flex w-full h-5/6`}>
          {pastVisits.length > 0 ? renderVisits(pastVisits) : renderNoVisits()}
        </div>
      </div>
    );
  }
