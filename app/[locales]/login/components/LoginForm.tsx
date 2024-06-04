"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import LoginLogo from "../../../../public/images/login-logo.png";
import InputWithTitle from "../../components/InputWithTitle";
import Button from "../../components/Button";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { isNotBlank, setCookie } from "../../../../public/constants/utils";
import { useRouter } from "next/navigation";
import { apiAuthenticate, apiGetServerByUser, apiPreLogin } from "../apiCalls";
import { MainContext } from "../../components/ContextProvider";

export default function LoginForm() {

  const { language, server, setToken, setServer } = useContext(MainContext);
  const translate = useTranslations();
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const validateUsername = () => {
    return isNotBlank(username);
  }

  const validatePassword = () => {
    return isNotBlank(password);
  }

  const preLogin = async () => {

    let preloginPayload = {
      username: username,
      password: password
    }

    const response = await apiPreLogin(server, preloginPayload);
    if(response){
      if(response.esito === "3") {
        authenticate();
      }else{
        setErrorMessage(translate("bad_credentials_description"));
        setLoading(false);
      }
    }else{
      setErrorMessage(translate("bad_credentials_description"));
    }
  }

  const authenticate = async () => {

    let loginPayload = {
      username: username,
      password: password,
      'code': '000000'
    }

    setTimeout(async () => {
      const response = await apiAuthenticate(server, loginPayload);

      if(response.status != 200) {
        setErrorMessage(translate("bad_credentials_description"));
        setLoading(false);
      }else{
        const token = response.headers.get('x-auth-token');
        setToken(token || "");
        setCookie('token', token, 7);
        router.push(`/${language}/doctor/home`);
      } 
    },1000);
  }

  const onPressLogin = async () => {
    let checkPayload = {
      username: username,
      email: username
    }

    if(!loading) {
      setLoading(true);
      setErrorMessage("");
      const response = await apiGetServerByUser(checkPayload);
      console.log(response);
      if(Object.keys(response).length === 0) {
        setErrorMessage(translate("bad_credentials_description"));
        setLoading(false);
      }else{
        let endpoint = response.endpoint;
        setServer(endpoint);
        setCookie("server", endpoint);
        preLogin();
      }
    }
  };

  return (
    <div className="flex flex-col bg-white lg:w-1/3 w-2/3 mx-auto rounded-xl shadow-2xl mb-10">
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
          disabled={!validatePassword() || !validateUsername()}
          buttonStyle="w-4/5 mx-auto mt-7 h-10 rounded-xl hover:bg-dark-blue"
          disabledButtonStyle="bg-gray-light text-gray"
          enabledButtonStyle="bg-blue text-white"
          loading={loading}
          onPress={onPressLogin}
        />
        <div className="mt-2.5 mb-10 lg:text-base text-xs mx-auto">
          <span>{translate("dont_have_account")} </span>
          <Link className="text-blue hover:underline font-bold" href={`/${language}/signup`}>{translate("signup")}</Link>
        </div>
        {errorMessage != "" &&
          <div className="text-center w-4/5 mt-2.5 mb-10 lg:text-base text-xs mx-auto">
            <span className="text-red">{errorMessage}</span>
          </div>
        }
    </div>
  );
}
