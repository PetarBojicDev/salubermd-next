"server-only";
import React, { Suspense } from "react";
import Visits from "./components/visits/Visits";
import styles from "./home.module.css";
import TemplateVisits from "./components/visits/TemplateVisits";
import TemplateAppointments from "./components/appointments/TemplateAppointments";
import Appointments from "./components/appointments/Appointments";
import TemplateActivities from "./components/activities/TemplateActivities";
import Activities from "./components/activities/Activities";
import TemplateNotifications from "./components/notifications/TemplateNotifications";
import Notifications from "./components/notifications/Notifications";

const Home = async () => {

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
      <div className={`h-full ${styles.width1}`}></div>
      <div className={`h-full block ${styles.width32}`}>
        <Suspense fallback={<TemplateActivities/>}>
          <Activities/>
        </Suspense> 
        <div className={`w-full ${styles.height5}`}></div>
        <Suspense fallback={<TemplateNotifications/>}>
          <Notifications/>
        </Suspense>
      </div>
    </div>
  );
}

export default Home;