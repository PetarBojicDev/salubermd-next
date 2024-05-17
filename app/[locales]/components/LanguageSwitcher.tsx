"use client";
import * as LanguageHelper from "../../../public/constants/languages";
import { useTranslations } from "next-intl";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "@/store/states/language";
import { LanguageOption } from "../../../public/constants/languages";
import { usePathname, useRouter } from "next/navigation";
import { RootState } from "@/store/store";
import { getRoute } from "../../../public/constants/utils";

const LanguageSwitcher = () => {

  const translate = useTranslations();
  const dispatch = useDispatch();
  const router = useRouter();
  const languageValue = useSelector((state: RootState) => state.language.value);
  const language = LanguageHelper.array.find((x => x.language == languageValue));
  const path = usePathname();

  const changeLanguage = (value: LanguageOption) => {
    dispatch(setLanguage(value.language || "en_US"));
    router.push(getRoute(path, value.language));
  }

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn m-1 bg-white">
        <span className="md:inline hidden">{language?.label}</span>
        <img src={`/images/countries/${language?.icon}`} height={30} width={30} alt="/images/countries/download.png"/>
      </div>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 w-52 rounded-lg">
      {LanguageHelper.array.map((lan) => {
        
        const isCurrentLanguage = lan.language === languageValue;

        return (
          <li key={lan.language}>
            <button className={isCurrentLanguage ? "font-extrabold" : ""} onClick={() => changeLanguage(lan)}>{translate(lan.label)} - {lan.label}</button>
          </li>
        )
      })}
      </ul>
    </div>
  );
};

export default LanguageSwitcher;