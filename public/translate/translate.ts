import { getTranslations } from "next-intl/server";

interface VisitsTranslateObject {
  labelVisits: string;
  labelSeeAll: string;
}

interface AppoitmentsLabels {
  labelAppointments: string;
  labelSeeAll: string;
}

interface ActivitiesLabels {
  labelActivities: string;
  labelSeeAll: string;
  labelSlots: string;
  labelNoSlots: string;
  labelAppointments: string;
  labelNoAppointments: string;
  todayAM: string;
  todayPM: string;
  labelNoAvSlots: string;
  labelNoAvApp: string;
}

interface NotificationsLabels {
  labelNotifications: string;
  labelSeeAll: string;
}

const useTranslate = async () => {

  const translate = await getTranslations();
  
  const visitsLabels: VisitsTranslateObject = {
    labelVisits: translate("recent_visits"),
    labelSeeAll: translate("see_all")
  };

  const appointmentsLabels: AppoitmentsLabels = {
    labelAppointments: translate("scheduled_appointments"),
    labelSeeAll: translate("see_all")
  }

  const activitiesLabels: ActivitiesLabels = {
    labelActivities: translate("today_activities"),
    labelSeeAll:translate("see_all"),
    labelSlots:translate("slots"), 
    labelNoSlots:translate("no_slots"),
    labelAppointments:translate("appointments"), 
    labelNoAppointments:translate("no_appointments"),
    todayAM:translate("today_am"), 
    todayPM:translate("today_pm"),
    labelNoAvSlots:translate("no_available_slots"), 
    labelNoAvApp:translate("no_available_appointments"),
  }

  const notificationsLabels: NotificationsLabels = {
    labelNotifications: translate("notifications"),
    labelSeeAll: translate("see_all")
  }
  return { visitsLabels, appointmentsLabels, activitiesLabels, notificationsLabels };
}

export default useTranslate;