"use client";
import { isNotBlank } from "@/public/constants/utils";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import LoginLogo from "../../../../public/images/login-logo.png";
import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import InputWithTitle from "../../components/InputWithTitle";
import Button from "../../components/Button";
import Image from "next/image";
import { RootState } from "@/store/store";
import { callAPILsLanguage } from "../apiCalls";
import DropdownWithTitle from "../../components/DropdownWithTitle";
import { MainContext } from "../../components/ContextProvider";

const Page = () => {
  const translate = useTranslations();
  const language = useSelector((state: RootState) => state.language.value);
  const { password, setPassword, email, setEmail, username, setUsername, chosenLan, setChosenLan } = useContext(MainContext);
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [languages, setLanguages] = useState([]);

  const fetchLanguages = async () => {
    const res = await callAPILsLanguage();
    if (res) {
      setLanguages(res?.lingue);
    } else {
      setErrorMessage(translate("server_error"));
    }
  };

  useEffect(() => {
    fetchLanguages();
  }, []);

  const validateEmail = () => {
    return isNotBlank(email);
  };

  const validateUsername = () => {
    return isNotBlank(username);
  };

  const validatePassword = () => {
    return isNotBlank(password);
  };

  const validateLanguage = () => {
    return isNotBlank(chosenLan?.name);
  };

  return (
    <div className="bg-white flex items-center justify-center">
      <div className="bg-white w-2/5 p-8">
        <Image
          src={LoginLogo}
          alt="Login logo"
          className="w-2/5 mr-auto pt-5"
          priority
        />
        <span className="font-bold text-xl block my-3">
          {translate("enter_credentials")}
        </span>
        <InputWithTitle
          titleLeft={`${translate("username")}*`}
          iconRight=""
          value={username}
          setValue={setUsername}
          type={"text"}
          validated={validateUsername()}
          inputStyle="form-control w-full"
          titleStyle="text-left text-sm font-bold"
        />
        <InputWithTitle
          titleLeft={`${translate("email")}*`}
          iconRight=""
          value={email}
          setValue={setEmail}
          type={"email"}
          validated={validateEmail()}
          inputStyle="form-control w-full"
          titleStyle="text-left text-sm font-bold"
        />
        <InputWithTitle
          titleLeft={`${translate("password")}*`}
          iconRight=""
          value={password}
          setValue={setPassword}
          type={"password"}
          validated={validatePassword()}
          inputStyle="form-control w-full"
          titleStyle="text-left text-sm font-bold"
          bTxtLeftStyle="text-right text-blue text-sm font-bold hover:underline"
        />
        <DropdownWithTitle
          title={`${translate("language")}*`}
          titleStyle="text-left text-sm font-bold"
          inputStyle="form-control w-full mx-auto mb-3"
          listValues={languages}
          selectedValue={chosenLan}
          setSelectedValue={setChosenLan}
          validated={validateLanguage()}
          placeholder={translate("select")}
        />
        <Button
          text={translate("next")}
          disabled={
            !validateEmail() ||
            !validateUsername() ||
            !validatePassword() ||
            !validateLanguage()
          }
          buttonStyle="w-1/4 mt-7 rounded-xl hover:bg-dark-blue"
          disabledButtonStyle="bg-gray-light text-gray"
          enabledButtonStyle="bg-blue text-white"
          loading={loading}
          onPress={() => {
            setLoading(true);
            router.push(`/${language}/signup/tellus`);
          }}
        />
        {errorMessage && (
          <div className="text-center mt-2.5 mb-10 text-base text-red">
            {errorMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
