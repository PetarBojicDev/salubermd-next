import "server-only";
import styles from "../../home.module.css";
import { VisitsTranslateObject } from "@/public/translate/translate";

interface VisitsLabels {
    visitsLabels: VisitsTranslateObject;
  }

export default async function TemplateVisits(visitsLabels : VisitsLabels) {

  const labels = visitsLabels.visitsLabels;

  return (
    <div className={`${styles.height25}`}>
        <div className="h-1/6 inline-flex justify-between w-full">
            <label className="font-bold text-md text-gray">{labels.labelVisits}</label>
        </div>
        <div className={`inline-flex w-full h-5/6`}>
            <div className="w-1/4">
                <div className="mr-5 h-full bg-gray-card rounded-lg shadow-md">
                <div className="pl-3 pt-8 inline-grid w-full">
                    <div className={`text-xs bg-gray-card-text h-4 ${styles.width67} rounded-md mb-1 skeleton`}></div>
                    <div className={`text-xs bg-gray-card-text h-4 ${styles.width80} rounded-md mb-1 skeleton`}></div>
                    <div className={`text-xs bg-gray-card-text h-4 ${styles.width67} rounded-md skeleton`}></div>
                </div>
                </div>
            </div>
            <div className="w-1/4">
                <div className="mr-5 h-full bg-gray-card rounded-lg shadow-md">
                <div className="pl-3 pt-8 inline-grid w-full">
                    <div className={`text-xs bg-gray-card-text h-4 ${styles.width67} rounded-md mb-1 skeleton`}></div>
                    <div className={`text-xs bg-gray-card-text h-4 ${styles.width80} rounded-md mb-1 skeleton`}></div>
                    <div className={`text-xs bg-gray-card-text h-4 ${styles.width67} rounded-md skeleton`}></div>
                </div>
                </div>
            </div>
            <div className="w-1/4">
                <div className="mr-5 h-full bg-gray-card rounded-lg shadow-md">
                <div className="pl-3 pt-8 inline-grid w-full">
                    <div className={`text-xs bg-gray-card-text h-4 ${styles.width67} rounded-md mb-1 skeleton`}></div>
                    <div className={`text-xs bg-gray-card-text h-4 ${styles.width80} rounded-md mb-1 skeleton`}></div>
                    <div className={`text-xs bg-gray-card-text h-4 ${styles.width67} rounded-md skeleton`}></div>
                </div>
                </div>
            </div>
            <div className="w-1/4">
                <div className="mr-5 h-full bg-gray-card rounded-lg shadow-md">
                <div className="pl-3 pt-8 inline-grid w-full">
                    <div className={`text-xs bg-gray-card-text h-4 ${styles.width67} rounded-md mb-1 skeleton`}></div>
                    <div className={`text-xs bg-gray-card-text h-4 ${styles.width80} rounded-md mb-1 skeleton`}></div>
                    <div className={`text-xs bg-gray-card-text h-4 ${styles.width67} rounded-md skeleton`}></div>
                </div>
                </div>
            </div>
        </div>
    </div>
  );
}
