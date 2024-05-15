"use client";
import React, { useState } from "react";
import Image from "next/image";
import LoginLogo from "../../../../public/images/login-logo.png";
import InputWithTitle from "../../components/InputWithTitle";
import Button from "../../components/Button";
import { useTranslations } from "next-intl";
import Link from "next/link";
import isNotBlank from "../../../../public/constants/utils";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function LoginForm() {

  const language = useSelector((state: RootState) => state.language.value);
  const translate = useTranslations();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const validateUsername = () => {
    return isNotBlank(username);
  }

  const validatePassword = () => {
    return isNotBlank(password);
  }

  return (
    <div className="flex flex-col bg-white lg:w-1/3 w-2/3 mx-auto rounded-xl">
        <Image
          src={LoginLogo}
          alt="Login logo"
          className="lg:w-2/5 w-3/5 mx-auto pt-5"
          priority
        />
        <span className="font-bold lg:text-2xl text-base mx-auto mt-3">{translate("saluber_welcome")}</span>
        <InputWithTitle 
          titleLeft={translate("username")}
          iconRight="" 
          value={username} 
          setValue={setUsername}
          type={"text"}
          validated={validateUsername()}    
          inputStyle="form-control w-4/5 mx-auto"
          titleStyle="text-left text-sm font-bold" 
        />
        <InputWithTitle 
          titleLeft={translate("password")}
          iconRight="" 
          value={password} 
          setValue={setPassword}
          type={"password"}
          bottomTextLeft={translate("forgot_password")}
          validated={validatePassword()}
          inputStyle="form-control w-4/5 mx-auto"
          titleStyle="text-left text-sm font-bold"             
          bTxtLeftStyle="text-right text-blue text-sm font-bold hover:underline"
        />
        <Button
          text={translate("login")}
          disabled={validatePassword() && validateUsername()}
          buttonStyle="w-4/5 mx-auto mt-7 h-10 rounded-xl"
        />
        <div className="mt-2.5 mb-20 lg:text-base text-xs mx-auto">
          <span>{translate("dont_have_account")} </span>
          <Link className="text-blue hover:underline font-bold" href={`/${language}/signup`}>{translate("signup")}</Link>
        </div>
    </div>
  );
}
