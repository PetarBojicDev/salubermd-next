import React from "react";
import { useSelector } from "react-redux";
import TemplateVisits from "./TemplateVisits";
import RenderVisits from "./RenderVisits";
import { RootState } from "@/store/store";
import styles from '../../home.module.css';
import { useTranslations } from "next-intl";

const Visits: React.FC = () => {

  const pastVisits = useSelector((state: RootState) => state.visits.pastVisits);
  const translate = useTranslations();

  return (
    <div className={`w-full ${styles.height25}`}>
      <div className="block h-full">
        <div className="h-7 inline-flex justify-between w-full">
            <label className={`font-bold text-md ${pastVisits == null && "text-gray"}`}>{translate("recent_visits")}</label>
            {(pastVisits != null && pastVisits.length > 0) && 
            <label className="font-bold text-md text-blue mr-5 hover:underline underline-offset-2">{translate("see_all")}</label>}
        </div>
        {pastVisits != null ? 
        <RenderVisits/> :
        <TemplateVisits/>
        } 
      </div>
      
    </div>
  );
}

export default Visits;
