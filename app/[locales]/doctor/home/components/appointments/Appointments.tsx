import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useTranslations } from "next-intl";
import styles from '../../home.module.css';
import TemplateAppointments from "./TemplateAppointments";
import RenderAppointments from "./RenderAppointments";

const Appointments: React.FC = () => {

  const appointments = useSelector((state: RootState) => state.visits.appointments);
  const translate = useTranslations();

  return (
    <div className={`w-full ${styles.height70}`}>
      <div className="block h-full">
        <div className="h-7 inline-flex justify-between w-full">
          <label className={`font-bold text-md ${appointments == null && "text-gray"}`}>{translate("scheduled_appointments")}</label>
          {(appointments != null && appointments.length > 0) && 
          <label className="font-bold text-md text-blue mr-5 hover:underline underline-offset-2">{translate("see_all")}</label>}
        </div>
        {appointments != null ? 
        <RenderAppointments/> :
        <TemplateAppointments/>
        } 
      </div>
      
    </div>
  );
}

export default Appointments;

