"use client";
import { COUNTRIES, genderOptions, isNotBlank } from "@/public/constants/utils";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import LoginLogo from "../../../../public/images/login-logo.png";
import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import InputWithTitle from "../../components/InputWithTitle";
import Button from "../../components/Button";
import Image from "next/image";
import { RootState } from "@/store/store";
import SignaturePad from "../../components/SignaturePad";
import DropdownWithTitle from "../../components/DropdownWithTitle";
import { apiPostAddUser, getSpecialtyByInitiativeId } from "../apiCalls";
import { MainContext } from "../../components/ContextProvider";

const Page = () => {
  const translate = useTranslations();
  const language = useSelector((state: RootState) => state.language.value);
  const singUpInfo = useSelector((state: RootState) => state.signUp.data.config);
  const { password, email, username, chosenLan } = useContext(MainContext);
  const [durationList, setDurationList] = useState([]);
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [officeAddress, setOfficeAddress] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [specialtyList, setSpecialtyList] = useState([]);
  const [medicalSchool, setMedicalSchool] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [lengthInPractise, setLengthInPractise] = useState("");
  const [slotDuration, setSlotDuration] = useState("");
  const [feePerVisit, setFeePerVisit] = useState("");
  const [currency, setCurrency] = useState("");
  const [signature, setSignature] = useState("");
  const [submitDisabled, setSubmitDisabled] = useState(true);

  useEffect(() => {
    callGetSpecialtyByInitiativeId();
  }, [])

  const callGetSpecialtyByInitiativeId = async () => {
    const specialtiesResp = await getSpecialtyByInitiativeId(language, singUpInfo?.initiativeId);
    if(specialtiesResp) {
      if(specialtiesResp?.esito === '0'){
        const array = specialtiesResp?.specialty.map(s => {
          return {...s, value: s?.id};
        });
        setSpecialtyList(array);
      }else{
        setErrorMessage(specialtiesResp?.motivo);
      }
    }else{
      setErrorMessage(translate("server_error"));
    }
  }

  useEffect(() => {
    if((singUpInfo?.slots || []).length > 0) {
      let slotsTmp = [];
      singUpInfo?.slots.map(s => {
        slotsTmp.push({... s, name: `${s?.value} ${translate('minuts')}`});
      })
      setDurationList(slotsTmp);
    }
  }, [singUpInfo?.slots])

  const disableSubmitBtt = () => {
    return (
      !isNotBlank(firstName) ||
      !isNotBlank(lastName) ||
      !isNotBlank(birthday) ||
      !isNotBlank(gender?.name) ||
      !isNotBlank(officeAddress) ||
      !isNotBlank(country?.text) ||
      !isNotBlank(city) ||
      !isNotBlank(phoneNumber) ||
      !isNotBlank(specialty?.name) ||
      !isNotBlank(slotDuration?.name) ||
      !isNotBlank(feePerVisit) ||
      !isNotBlank(currency?.name)
    );
  };

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

  const _onPressAddUserDoctor = async () => {
    const payload = {
      role: 4,
      email: email,
      username: username,
      birthdate: "",
      locale: chosenLan?.value,
      country: "",
      password: "",
      code: "",
      fee: "",
      currency: "",
      timeslot: "",
      privacyAgreed: '[{"value":1,"values":[{"text":"Accept","value":1,"key":1,"group":1,"$$hashKey":"object:6484"}],"label":"Accept","mandatory":1,"$$hashKey":"object:6482","answer":"1"}]',
      signaturealt: "",
      signature: "",
      password1: "",
      nome: "",
      cognome: "",
      dob: "",
      gender: "",
      address: "",
      city: "",
      mobile: "",
      specializations: [""],
      school: "",
      lengthPractise: "",
      version: '11',
      provider: -7,
      licenseNumber: "",
      otpCode: "",
      deviceUUID: "",
      codice_fiscale: ""
  }

    const addUserResp = await apiPostAddUser(payload);
  }

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
            placeholderTxt="DD/MM/YYYY"
          />
          <DropdownWithTitle
            title={`${translate("gender")}*`}
            titleStyle="text-left text-sm font-bold"
            inputStyle="form-control w-1/2 mb-2"
            listValues={genderOptions(translate)}
            selectedValue={gender}
            setSelectedValue={setGender}
            validated={isNotBlank(gender?.name)}
            placeholder={translate("select")}
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
          <DropdownWithTitle
            title={`${translate("country")}*`}
            titleStyle="text-left text-sm font-bold"
            inputStyle="form-control w-1/2"
            listValues={COUNTRIES}
            selectedValue={country}
            setSelectedValue={setCountry}
            validated={isNotBlank(country?.text)}
            placeholder={translate("select")}
            translateValues={false}
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
        <DropdownWithTitle
          title={`${translate("specialty")}*`}
          titleStyle="text-left text-sm font-bold"
          inputStyle="form-control w-full mb-2"
          listValues={specialtyList}
          selectedValue={specialty}
          setSelectedValue={setSpecialty}
          validated={isNotBlank(specialty?.name)}
          placeholder={translate("select")}
          translateValues={false}
        />
        <InputWithTitle
          titleLeft={`${translate("medical_school")}`}
          iconRight=""
          value={medicalSchool}
          setValue={setMedicalSchool}
          type={"text"}
          validated={true}
          inputStyle="form-control w-full m"
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
            validated={true}
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
        <DropdownWithTitle
          title={`${translate("slot_duration")}*`}
          titleStyle="text-left text-sm font-bold"
          inputStyle="form-control w-full mb-2"
          listValues={durationList}
          selectedValue={slotDuration}
          setSelectedValue={setSlotDuration}
          validated={isNotBlank(slotDuration?.name)}
          placeholder={translate("select")}
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
          <DropdownWithTitle
            title={`${translate("currency")}*`}
            titleStyle="text-left text-sm font-bold"
            inputStyle="form-control w-1/2 mb-2"
            listValues={singUpInfo?.currencies || []}
            selectedValue={currency}
            setSelectedValue={setCurrency}
            validated={isNotBlank(currency?.name)}
            placeholder={translate("select")}
          />
        </div>
        <SignaturePad
          title={`${translate("your_signature")}`}
          btnLeftTxt={translate("clear")}
          btnRightTxt={translate("save")}
          setSignature={setSignature}
          validated={true}
        />
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
            _onPressAddUserDoctor();
            // router.push(`/${language}/login`);
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
