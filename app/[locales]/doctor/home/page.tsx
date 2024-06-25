"server-only";
import React, { Suspense } from "react";
import Visits from "./components/visits/Visits";
import TemplateVisits from "./components/visits/TemplateVisits";
import TemplateAppointments from "./components/appointments/TemplateAppointments";
import Appointments from "./components/appointments/Appointments";
import TemplateActivities from "./components/activities/TemplateActivities";
import Activities from "./components/activities/Activities";
import TemplateNotifications from "./components/notifications/TemplateNotifications";
import Notifications from "./components/notifications/Notifications";

const Home = async () => {

  return (
    <div className="mx-auto w-full bg-background p-5">
      <div className="inline-block md:w-3/4 w-full align-top">
        <Suspense fallback={<TemplateVisits/>}>
          <Visits/>
        </Suspense>
        <Suspense fallback={<TemplateAppointments/>}>
          <Appointments/>
        </Suspense>
      </div>
      <div className="inline-block md:w-1/4 w-full align-top">
        <Suspense fallback={<TemplateActivities/>}>
          <Activities/>
        </Suspense>
        <Suspense fallback={<TemplateNotifications/>}>
          <Notifications/>
        </Suspense>
      </div>
    </div>
  );
}

export default Home;