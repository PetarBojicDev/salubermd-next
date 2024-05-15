"use client";
import * as LanguageHelper from "../../../../public/constants/languages";
import { useTranslations } from "next-intl";
import Image from "next/image";
import unknownSource from "../../../../public/images/countries/download.png";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "@/store/states/language";
import { LanguageOption } from "../../../../public/constants/languages";
import { useRouter } from "next/navigation";
import { RootState } from "@/store/store";

const LanguageSwitcher = () => {

  const translate = useTranslations();
  const dispatch = useDispatch();
  const router = useRouter();
  const languageValue = useSelector((state: RootState) => state.language.value);
  const language = LanguageHelper.array.find((x => x.language == languageValue));

  const changeLanguage = (value: LanguageOption) => {
    dispatch(setLanguage(value.language || "en_US"));
    router.push(`/${value.language}/login`);
  } 

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn m-1 bg-white">
        <span>{language?.label}</span>
        <Image
          src={language?.icon || unknownSource} 
          alt={"Country image"}
          height={30}
          width={30}/>
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