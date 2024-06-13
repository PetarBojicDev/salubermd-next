import React from "react";
import "server-only";
import { cookies } from 'next/headers';
import VisitDetail from "./VisitDetail";
import styles from '../../home.module.css';

interface LabelProps {
  labelVisits: string;
  labelSeeAll: string;
}

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

  export default async function Visits({labelVisits, labelSeeAll} : LabelProps) {

    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    const server = cookieStore.get("server")?.value;
    const pastVisits = await getRecentVisits(server, token);

    return (
      <div  className={`${styles.height25}`}>
        <div className="h-1/6 inline-flex justify-between w-full">
            <label className="font-bold text-md">{labelVisits}</label>
            {pastVisits.length > 0 && 
            <label className="font-bold text-md text-blue mr-5 hover:underline underline-offset-2">{labelSeeAll}</label>}
        </div>
        <div className={`inline-flex w-full h-5/6`}>
          {
            pastVisits.map((element, index) => {
              return (
                <VisitDetail key={index} visit={element}/>
              );
            })
          }
        </div>
      </div>
    );
  }
