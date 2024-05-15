"use client";
import React, { useState } from "react";
import Image from "next/image";
import LoginLogo from "../../../../public/images/login-logo.png";
import InputWithTitle from "../../../[locales]/components/InputWithTitle";
import Button from "../../../[locales]/components/Button";
import { useTranslations } from "next-intl";
import Link from "next/link";
import isNotBlank from "../../../../public/constants/utils";
import { FaRegQuestionCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Modal from "../../components/Modal";

export default function SignupForm() {

  const translate = useTranslations();
  const language = useSelector((state: RootState) => state.language.value);

  const [email, setEmail] = useState("");
  const [regCode, setRegCode] = useState("");

  const validateEmail = () => {
    return isNotBlank(email);
  }

  const validateRegCode = () => {
    return isNotBlank(regCode);
  }
  const handleIconClick = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const modalHolder = document.getElementById('my_modal_2');
    if(modalHolder){
        modalHolder.showModal();
    }
  }

  return (
    <div className="flex flex-col bg-white lg:w-1/3 w-2/3 mx-auto rounded-xl">
        <Image
          src={LoginLogo}
          alt="Login logo"
          className="lg:w-2/5 w-3/5 mx-auto pt-5"
          priority
        />
        <span className="font-bold lg:text-2xl text-base mx-auto mt-3">{translate("get_started")}</span>
        <InputWithTitle 
          titleLeft={translate("email")} 
          iconRight=""
          value={email} 
          setValue={setEmail}
          type={"email"}
          validated={validateEmail()}    
          inputStyle="form-control w-4/5 mx-auto"
          titleStyle="text-left text-sm font-bold"
        />
        <InputWithTitle 
          titleLeft={translate("registration_code")} 
          iconRight={ <Link href="?modal=true"><FaRegQuestionCircle size={16} onClick={handleIconClick}/></Link>}
          value={regCode} 
          setValue={setRegCode}
          type={"text"}
          validated={validateRegCode()}
          inputStyle="form-control w-4/5 mx-auto"
          titleStyle="text-left text-sm font-bold"  
        />
        <Button
          text={translate("next")}
          disabled={validateEmail() && validateRegCode()}
          buttonStyle="w-4/5 mx-auto mt-7 h-10 rounded-xl"
        />
        <div className="mt-2.5 mb-20 lg:text-base text-xs mx-auto">
          <span>{translate("already_have_account")}</span>
          <Link className="text-blue hover:underline font-bold" href={`/${language}/login`}> {translate("login")}</Link>
        </div>
        <Modal title={translate("info")} text={translate("find_reg_code")} buttonText={translate("ok")} showButton={true} />
    </div>
  );
}
