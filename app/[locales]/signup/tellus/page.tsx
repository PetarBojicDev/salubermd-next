"use client";
import { isNotBlank } from "@/public/constants/utils";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import LoginLogo from "../../../../public/images/login-logo.png";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import InputWithTitle from "../../components/InputWithTitle";
import Button from "../../components/Button";
import Image from "next/image";
import { RootState } from "@/store/store";
import { callAPILsLanguage } from "../apiCalls";
import DropDownList from "../../components/DropDownList";
import SignaturePad from "../../components/SignaturePad";

const Page = () => {
  const translate = useTranslations();
  const language = useSelector((state: RootState) => state.language.value);
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [languages, setLanguages] = useState([]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [officeAddress, setOfficeAddress] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [medicalSchool, setMedicalSchool] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [lengthInPractise, setLengthInPractise] = useState("");
  const [slotDuration, setSlotDuration] = useState("");
  const [feePerVisit, setFeePerVisit] = useState("");
  const [currency, setCurrency] = useState("");
  const [signature, setSignature] = useState("");
  const [submitDisabled, setSubmitDisabled] = useState(true);

  useEffect(() => {
    setSubmitDisabled(disableSubmitBtt());
  }, [
    firstName,
    lastName,
    birthday,
    gender,
    officeAddress,
    country,
    city,
    phoneNumber,
    specialty,
    slotDuration,
    feePerVisit,
    currency,
  ]);

  const disableSubmitBtt = () => {
    return (
      !isNotBlank(firstName) ||
      !isNotBlank(lastName) ||
      !isNotBlank(birthday) ||
      !isNotBlank(gender) ||
      !isNotBlank(officeAddress) ||
      !isNotBlank(country) ||
      !isNotBlank(city) ||
      !isNotBlank(phoneNumber) ||
      !isNotBlank(specialty) ||
      !isNotBlank(slotDuration) ||
      !isNotBlank(feePerVisit) ||
      !isNotBlank(currency)
    );
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
          {translate("profile_info")}
        </span>
        <div className="flex space-x-4">
          <InputWithTitle
            titleLeft={`${translate("first_name")}*`}
            iconRight=""
            value={firstName}
            setValue={setFirstName}
            type={"text"}
            validated={isNotBlank(firstName)}
            inputStyle="form-control w-1/2"
            titleStyle="text-left text-sm font-bold"
          />
          <InputWithTitle
            titleLeft={`${translate("last_name")}*`}
            iconRight=""
            value={lastName}
            setValue={setLastName}
            type={"text"}
            validated={isNotBlank(lastName)}
            inputStyle="form-control w-1/2"
            titleStyle="text-left text-sm font-bold"
          />
        </div>
        <div className="flex space-x-4">
          <InputWithTitle
            titleLeft={`${translate("birthday")}*`}
            iconRight=""
            value={birthday}
            setValue={setBirthday}
            type={"text"}
            validated={isNotBlank(birthday)}
            inputStyle="form-control w-1/2"
            titleStyle="text-left text-sm font-bold"
          />
          <InputWithTitle
            titleLeft={`${translate("gender")}*`}
            iconRight=""
            value={gender}
            setValue={setGender}
            type={"text"}
            validated={isNotBlank(gender)}
            inputStyle="form-control w-1/2"
            titleStyle="text-left text-sm font-bold"
          />
        </div>
        <InputWithTitle
          titleLeft={`${translate("office_address")}*`}
          iconRight=""
          value={officeAddress}
          setValue={setOfficeAddress}
          type={"text"}
          validated={isNotBlank(officeAddress)}
          inputStyle="form-control w-full"
          titleStyle="text-left text-sm font-bold"
        />
        <div className="flex space-x-4">
          <InputWithTitle
            titleLeft={`${translate("country")}*`}
            iconRight=""
            value={country}
            setValue={setCountry}
            type={"text"}
            validated={isNotBlank(country)}
            inputStyle="form-control w-1/2"
            titleStyle="text-left text-sm font-bold"
          />
          <InputWithTitle
            titleLeft={`${translate("city")}*`}
            iconRight=""
            value={city}
            setValue={setCity}
            type={"text"}
            validated={isNotBlank(city)}
            inputStyle="form-control w-1/2"
            titleStyle="text-left text-sm font-bold"
          />
        </div>
        <InputWithTitle
          titleLeft={`${translate("phone_number")}*`}
          iconRight=""
          value={phoneNumber}
          setValue={setPhoneNumber}
          type={"text"}
          validated={isNotBlank(phoneNumber)}
          inputStyle="form-control w-full"
          titleStyle="text-left text-sm font-bold"
          bTxtLeftStyle="text-right text-blue text-sm font-bold hover:underline"
        />
        <InputWithTitle
          titleLeft={`${translate("specialty")}*`}
          iconRight=""
          value={specialty}
          setValue={setSpecialty}
          type={"text"}
          validated={isNotBlank(specialty)}
          inputStyle="form-control w-full"
          titleStyle="text-left text-sm font-bold"
          bTxtLeftStyle="text-right text-blue text-sm font-bold hover:underline"
        />
        <InputWithTitle
          titleLeft={`${translate("medical_school")}`}
          iconRight=""
          value={medicalSchool}
          setValue={setMedicalSchool}
          type={"text"}
          validated={isNotBlank(medicalSchool)}
          inputStyle="form-control w-full"
          titleStyle="text-left text-sm font-bold"
          bTxtLeftStyle="text-right text-blue text-sm font-bold hover:underline"
        />
        <div className="flex space-x-4">
          <InputWithTitle
            titleLeft={`${translate("license_number")}`}
            iconRight=""
            value={licenseNumber}
            setValue={setLicenseNumber}
            type={"text"}
            validated={isNotBlank(licenseNumber)}
            inputStyle="form-control w-1/2"
            titleStyle="text-left text-sm font-bold"
          />
          <InputWithTitle
            titleLeft={`${translate("length_in_practise")}*`}
            iconRight=""
            value={lengthInPractise}
            setValue={setLengthInPractise}
            type={"text"}
            validated={isNotBlank(lengthInPractise)}
            inputStyle="form-control w-1/2"
            titleStyle="text-left text-sm font-bold"
          />
        </div>
        <InputWithTitle
          titleLeft={`${translate("slot_duration")}*`}
          iconRight=""
          value={slotDuration}
          setValue={setSlotDuration}
          type={"text"}
          validated={isNotBlank(slotDuration)}
          inputStyle="form-control w-full"
          titleStyle="text-left text-sm font-bold"
        />
        <div className="flex space-x-4">
          <InputWithTitle
            titleLeft={`${translate("fee_per_visit")}*`}
            iconRight=""
            value={feePerVisit}
            setValue={setFeePerVisit}
            type={"text"}
            validated={isNotBlank(feePerVisit)}
            inputStyle="form-control w-1/2"
            titleStyle="text-left text-sm font-bold"
          />
          <InputWithTitle
            titleLeft={`${translate("currency")}*`}
            iconRight=""
            value={currency}
            setValue={setCurrency}
            type={"text"}
            validated={isNotBlank(currency)}
            inputStyle="form-control w-1/2"
            titleStyle="text-left text-sm font-bold"
          />
        </div>
        <SignaturePad
          title={`${translate("your_signature")}`}
          btnLeftTxt={translate("clear")}
          btnRightTxt={translate("save")}
          setSignature={setSignature}
          validated={true}
        />
        {/* <DropDownList
          list={languages}
          titleLeft={`${translate("language")}*`}
          iconRight=""
          value={chosenLan}
          setValue={setChosenLan}
          type={"text"}
          validated={validateLanguage()}
          inputStyle="form-control w-full"
          titleStyle="text-left text-sm font-bold"
          placeholderTxt={translate("select")}
        /> */}
        <Button
          text={translate("back")}
          disabled={false}
          buttonStyle="w-1/5 mr-3 h-10 rounded-xl bg-gray-300 text-gray-700 border-2 border-gray-200 mb-2"
          disabledButtonStyle="bg-white text-gray-500"
          enabledButtonStyle="bg-white text-gray-700"
          loading={loading1}
          onPress={() => {
            setLoading1(true);
            router.push(`/${language}/signup/credentials`);
          }}
        />
        <Button
          text={translate("submit")}
          disabled={submitDisabled}
          buttonStyle="w-1/5 mt-7 rounded-xl hover:bg-dark-blue"
          disabledButtonStyle="bg-gray-light text-gray"
          enabledButtonStyle="bg-blue text-white"
          loading={loading}
          onPress={() => {
            setLoading(true);
            router.push(`/${language}/login`);
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
