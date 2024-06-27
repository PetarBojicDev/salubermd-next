import "server-only";
import useTranslate from "@/public/translate/translate";

export default async function TemplateActivities() {

  const { activitiesLabels } = await useTranslate();

  return (
    <div className="mb-5">
        <div className="h-7 inline-flex justify-between w-full">
            <label className="font-bold text-md text-gray">{activitiesLabels.labelActivities}</label>
        </div>
        <div className="w-full md:h-32">
          <div className="h-full bg-gray-card rounded-lg shadow-md w-full inline-flex">
            {Array.from({ length: 2 }).map((_, index) => (
              <div key={index} className="w-1/2">
                <div className="pl-3 pt-3 pb-3 inline-grid w-full">
                  <div className={`text-xs bg-gray-card-text h-4 md:w-2/3 w-1/3 rounded-xl mb-1 skeleton`}></div>
                  <div className={`text-xs bg-gray-card-text h-4 md:w-4/5 w-3/5 rounded-xl mb-1 skeleton`}></div>
                  <div className={`text-xs bg-gray-card-text h-4 md:w-2/3 w-1/3 rounded-xl skeleton`}></div>
                </div>
              </div>    
            ))}
          </div>
        </div>
    </div>
  );
}
