import React from "react";
import HomepageCard from "../../../../components/HomepageCard";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useTranslations } from "next-intl";
import styles from '../../home.module.css';
import TemplateActivities from "./TemplateActivities";
import RenderActivities from "./RenderActivities";

const Activities: React.FC = () => {

  const slots = useSelector((state: RootState) => state.visits.slots);
  const translate = useTranslations();

  return (
    <div className={`w-full ${styles.height25}`}>
      <div className="block h-full">
        <div className="h-7 inline-flex justify-between w-full">
            <label className={`font-bold text-md ${slots == null && "text-gray"}`}>{translate("today_activities")}</label>
            {(slots != null && slots.length > 0) && 
            <label className="font-bold text-md text-blue mr-5 hover:underline underline-offset-2">{translate("see_all")}</label>}
        </div>
        {slots != null ? 
        <RenderActivities/> :
        <TemplateActivities/>
        } 
      </div>
      
    </div>
  );
}

export default Activities;
