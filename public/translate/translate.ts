import { getTranslations } from "next-intl/server";

export interface VisitsTranslateObject {
  labelVisits: string;
  labelSeeAll: string;
}

const useTranslate = async () => {

  const translate = await getTranslations();
  
  const visitsLabels: VisitsTranslateObject = {
    labelVisits: translate("recent_visits"),
    labelSeeAll: translate("see_all")
  };
  return { visitsLabels };
}

export default useTranslate;