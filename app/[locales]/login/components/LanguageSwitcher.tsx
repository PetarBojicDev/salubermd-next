"use client";
import { usePathname } from "next/navigation";
import * as LanguageHelper from "../../../../public/constants/languages";
import { useTranslations } from "next-intl";
import Image from "next/image";

const LanguageSwitcher = () => {

  const translate = useTranslations();
  const fullPath = usePathname();
  const languageValue = fullPath.split("/")[1];
  const lanuage = LanguageHelper.array.find((x => x.language == languageValue));

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn m-1 bg-white">
        <span>{lanuage?.label}</span>
        <Image
          src={lanuage?.icon} 
          alt={"Country image"}
          height={30}
          width={30}/>
      </div>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 w-52 rounded-lg">
      {LanguageHelper.array.map((lan) => {
        
        const isCurrentLanguage = lan.language === languageValue;

        return (
          <li key={lan.language}><a className={isCurrentLanguage ? "font-extrabold" : ""} href={`/${lan.language}/login`}>{translate(lan.label)} - {lan.label}</a></li>
        )
      })}
      </ul>
    </div>
  );
};

export default LanguageSwitcher;