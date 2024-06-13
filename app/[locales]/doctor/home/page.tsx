"server-only";
import React, { Suspense } from "react";
import Visits from "./components/visits/Visits";
import styles from "./home.module.css";
import TemplateVisits from "./components/visits/TemplateVisits";
import Appointments from "./components/appointments/Appointments";
import TemplateAppointments from "./components/appointments/TemplateAppointments";
import { useTranslations } from "next-intl";
import TemplateActivities from "./components/activities/TemplateActivities";
import Activities from "./components/activities/Activities";

export default function Home() {

  const translate = useTranslations();

  return (
    <div className="mx-auto w-full h-full bg-background inline-flex p-5">
      <div className={`h-full block ${styles.width67}`}>
        <Suspense fallback={<TemplateVisits labelVisits={translate("recent_visits")}/>}>
          <Visits labelVisits={translate("recent_visits")} labelSeeAll={translate("see_all")}/>
        </Suspense>
        <div className={`w-full ${styles.height5}`}></div>
        <Suspense fallback={<TemplateAppointments labelAppointments={translate("scheduled_appointments")}/>}>
          <Appointments labelAppointments={translate("scheduled_appointments")} labelSeeAll={translate("see_all")}/>
        </Suspense>
      </div>
      <div className={`h-full ${styles.width1}`}></div>
      <div className={`h-full block ${styles.width32}`}>
        <Suspense fallback={<TemplateActivities labelActivities={translate("today_activities")}/>}>
          <Activities labelActivities={translate("today_activities")} labelSeeAll={translate("see_all")}
            labelSlots={translate("slots")} labelNoSlots={translate("no_slots")}
            labelAppointments={translate("appointments")} labelNoAppointments={translate("no_appointments")}
            todayAM={translate("today_am")} todayPM={translate("today_pm")}
            labelNoAvSlots={translate("no_available_slots")} labelNoAvApp={translate("no_available_appointments")}/>
        </Suspense>
        <div className={`w-full ${styles.height5}`}></div>
        <Suspense fallback={<TemplateAppointments labelAppointments={translate("scheduled_appointments")}/>}>
          <Appointments labelAppointments={translate("scheduled_appointments")} labelSeeAll={translate("see_all")}/>
        </Suspense>
      </div>
    </div>
  );
}