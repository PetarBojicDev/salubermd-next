"use client";
import { useTranslations } from "next-intl";
import { patientActionCategories } from "../../../public/constants/utils";

const StaticDropdown = () => {

  const translate = useTranslations();

  return (
    <div className="dropdown dropdown-end pr-6">
      <div tabIndex={0} role="button" className="btn m-1 bg-white">
        <span className="md:inline hidden">{translate("actions")}</span>
      </div>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 w-52 rounded-lg">
      {patientActionCategories.map((action) => {
        return (
          <li key={action.value}>
            <button onClick={() => console.log(action)}>{translate(action.name)}</button>
          </li>
        )
      })}
      </ul>
    </div>
  );
};

export default StaticDropdown;