import "server-only";
import styles from "../../home.module.css";

export default async function TemplateVisits() {

  return (
    <div className={`inline-flex w-full ${styles.height25}`}>
        <div className="w-1/4">
            <div className="mr-5 h-full bg-gray-card rounded-lg shadow-md">
            <div className="pl-3 pt-10 inline-grid w-full">
                <div className={`text-xs bg-gray-card-text h-4 ${styles.width67} rounded-md mb-1 skeleton`}></div>
                <div className={`text-xs bg-gray-card-text h-4 ${styles.width80} rounded-md mb-1 skeleton`}></div>
                <div className={`text-xs bg-gray-card-text h-4 ${styles.width67} rounded-md skeleton`}></div>
            </div>
            </div>
        </div>
        <div className="w-1/4">
            <div className="mr-5 h-full bg-gray-card rounded-lg shadow-md">
            <div className="pl-3 pt-10 inline-grid w-full">
                <div className={`text-xs bg-gray-card-text h-4 ${styles.width67} rounded-md mb-1 skeleton`}></div>
                <div className={`text-xs bg-gray-card-text h-4 ${styles.width80} rounded-md mb-1 skeleton`}></div>
                <div className={`text-xs bg-gray-card-text h-4 ${styles.width67} rounded-md skeleton`}></div>
            </div>
            </div>
        </div>
        <div className="w-1/4">
            <div className="mr-5 h-full bg-gray-card rounded-lg shadow-md">
            <div className="pl-3 pt-10 inline-grid w-full">
                <div className={`text-xs bg-gray-card-text h-4 ${styles.width67} rounded-md mb-1 skeleton`}></div>
                <div className={`text-xs bg-gray-card-text h-4 ${styles.width80} rounded-md mb-1 skeleton`}></div>
                <div className={`text-xs bg-gray-card-text h-4 ${styles.width67} rounded-md skeleton`}></div>
            </div>
            </div>
        </div>
        <div className="w-1/4">
            <div className="mr-5 h-full bg-gray-card rounded-lg shadow-md">
            <div className="pl-3 pt-10 inline-grid w-full">
                <div className={`text-xs bg-gray-card-text h-4 ${styles.width67} rounded-md mb-1 skeleton`}></div>
                <div className={`text-xs bg-gray-card-text h-4 ${styles.width80} rounded-md mb-1 skeleton`}></div>
                <div className={`text-xs bg-gray-card-text h-4 ${styles.width67} rounded-md skeleton`}></div>
            </div>
            </div>
        </div>
    </div>
  );
}
