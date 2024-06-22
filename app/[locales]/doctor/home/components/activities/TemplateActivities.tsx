import "server-only";
import styles from "../../home.module.css";
import useTranslate from "@/public/translate/translate";

export default async function TemplateActivities() {

  const { activitiesLabels } = await useTranslate();

  return (
    <div className={`${styles.height25}`}>
        <div className="h-1/6 inline-flex justify-between w-full">
            <label className="font-bold text-md text-gray">{activitiesLabels.labelActivities}</label>
        </div>
        <div className="w-full h-5/6">
          <div className="h-full bg-gray-card rounded-lg shadow-md w-full inline-flex">
            {Array.from({ length: 2 }).map((_, index) => (
              <div className="w-1/2">
                <div className="pl-3 pt-8 inline-grid w-full">
                  <div className={`text-xs bg-gray-card-text h-4 ${styles.width67} rounded-md mb-1 skeleton`}></div>
                  <div className={`text-xs bg-gray-card-text h-4 ${styles.width80} rounded-md mb-1 skeleton`}></div>
                  <div className={`text-xs bg-gray-card-text h-4 ${styles.width67} rounded-md skeleton`}></div>
                </div>
              </div>    
            ))}
          </div>
        </div>
    </div>
  );
}
