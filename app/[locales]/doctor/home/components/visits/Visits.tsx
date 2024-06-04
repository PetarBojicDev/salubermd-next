  import React, { Suspense } from "react";
  import "server-only";
  import { cookies } from 'next/headers';
import TemplateVisits from "./TemplateVisits";
import VisitDetail from "./VisitDetail";

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

  // Move the delay to be executed after data processing
  const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
  await delay(3000);

  return slicedRecentVisits;
}

  export default async function Visits() {

    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    const server = cookieStore.get("server")?.value;
    const pastVisits = await getRecentVisits(server, token);

    return (
      <div>
        <div className="inline-flex w-full h-5/6">
        {
          pastVisits.map((element, index) => {
            console.log(element);
            return (
              <VisitDetail key={index} visit={element}/>
            );
          })
        }
        </div>
      </div>
    );
  }
