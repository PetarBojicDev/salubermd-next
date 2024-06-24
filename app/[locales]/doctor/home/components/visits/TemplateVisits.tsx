import "server-only";
import styles from "../../home.module.css";
import useTranslate from "@/public/translate/translate";

export default async function TemplateVisits() {

    const { visitsLabels } = await useTranslate();

  return (
    <div className="mb-5 md:mr-5 mr-0">
        <div className="h-7">
            <label className="font-bold text-md text-gray">{visitsLabels.labelVisits}</label>
        </div>
        <div className="w-full">
            {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="md:w-1/4 w-1/2 inline-block">
                    <div className={`bg-gray-card rounded-lg shadow-md
                        ${index == 0 && "mr-2 md:mb-0 mb-5"} 
                        ${index == 1 && "md:mr-2 md:ml-2 ml-2 mr-0"} 
                        ${index == 2 && "md:mr-2 md:ml-2 mr-2 ml-0"} 
                        ${index == 3 && "ml-2"}`}>
                        <div className="pl-3 pt-3 pb-3 inline-grid w-full">
                            <div className={` bg-gray-card-text h-4 md:w-2/3 w-1/3 rounded-md mb-1 skeleton`}></div>
                            <div className={` bg-gray-card-text h-4 md:w-3/4 w-2/4 rounded-md mb-1 skeleton`}></div>
                            <div className={` bg-gray-card-text h-4 md:w-2/3 w-1/3 rounded-md skeleton`}></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}
