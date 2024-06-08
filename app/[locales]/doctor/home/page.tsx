"server-only";
import React, { Suspense } from "react";
import Visits from "./components/visits/Visits";
import styles from "./home.module.css";
import TemplateVisits from "./components/visits/TemplateVisits";
import Appointments from "./components/appointments/Appointments";
import TemplateAppointments from "./components/appointments/TemplateAppointments";

export default function Home() {

  return (
    <div className="mx-auto w-full h-full bg-background inline-flex p-5">
      <div className={`h-full block ${styles.width67}`}>
        <Suspense fallback={<TemplateVisits/>}>
          <Visits/>
        </Suspense>
        <div className={`w-full ${styles.height5}`}></div>
        <Suspense fallback={<TemplateAppointments/>}>
          <Appointments/>
        </Suspense>
      </div>
      <div className={`h-full ${styles.width2}`}></div>
    </div>
  );
}
