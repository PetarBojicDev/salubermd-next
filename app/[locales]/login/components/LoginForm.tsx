"use client";
import React, { useState } from "react";
import Image from "next/image";
import LoginLogo from "../../../../public/images/login-logo.png";
import InputWithTitle from "../../components/InputWithTitle";
import Button from "../../components/Button";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { isNotBlank } from "../../../../public/constants/utils";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";

export default function LoginForm() {

  const language = useSelector((state: RootState) => state.language.value);
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

  const preLogin = async (endpoint: string) => {

    let preloginPayload = {
      username: username,
      password: password
    }

    const responsePrelogin = await fetch(`${endpoint}/backoffice/preLogin`, {
      method: 'POST',
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/json',
        'access-control-request-headers': 'X-AUTH-TOKEN',
        'X-Requested-With': 'com.salubermd.mobile'
      },
      body: JSON.stringify(preloginPayload),
    });

    const dataPrelogin = await responsePrelogin.json();
    if(dataPrelogin.esito === "3") {
      authenticate(endpoint);
    }else{
      setErrorMessage(translate("bad_credentials_description"));
      setLoading(false);
    }
  }

  const authenticate = async (endpoint: string) => {

    let loginPayload = {
      username: username,
      password: password,
      'code': '000000'
    }

    const responseLogin = await fetch(`${endpoint}/backoffice/auth`, {
      method: 'POST',
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/json',
        'access-control-request-headers': 'X-AUTH-TOKEN'
      },
      body: JSON.stringify(loginPayload),
    });

    if(responseLogin.status != 200) {
      setErrorMessage(translate("bad_credentials_description"));
      setLoading(false);
    }else{
      const token = responseLogin.headers.get('x-auth-token');
      localStorage.setItem("X-AUTH-TOKEN",token || "");
      localStorage.setItem("server", endpoint);
      router.push(`/${language}/doctor`);
    }    
    const dataLogin = await responseLogin.json();
  }

  const onPressLogin = async () => {
    let server = localStorage.getItem("server");
    if(!loading) {
      setLoading(true);
      setErrorMessage("");
      const responseGetServer = await fetch(`${server}shared/getServerByUser`, {
        method: 'POST',
        headers: {
          accept: 'application/json, text/plain, */*',
          'content-type': 'application/json;charset=UTF-8',
          'x-requested-with': 'com.salubermd.mobile'
        },
        body: JSON.stringify({ 
          username: username,
          email: username 
        }),
      });
      
      const dataGetServerByUser = await responseGetServer.json();
      if(Object.keys(dataGetServerByUser).length === 0) {
        setErrorMessage(translate("bad_credentials_description"));
        setLoading(false);
      }else{
        let endpoint = dataGetServerByUser.endpoint;
        preLogin(endpoint);
      }
    }
  };

  return (
    <div className="flex flex-col bg-white lg:w-1/3 w-2/3 mx-auto rounded-xl shadow-2xl">
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
