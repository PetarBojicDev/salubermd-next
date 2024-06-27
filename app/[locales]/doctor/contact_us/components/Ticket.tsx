"use client";
import Button from "@/app/[locales]/components/Button";
import InputWithTitle from "@/app/[locales]/components/InputWithTitle";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { ticketCategories } from "@/public/constants/ticket-category";
import DropdownWithTitle from "@/app/[locales]/components/DropdownWithTitle";

export default function Ticket() {

  const [subject, setSubject] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categoryValue, setCategoryValue] = useState(ticketCategories[0]);

  const translate = useTranslations();

  const sendTicket = () => {
    console.log("ticket send");
  }

  return (
    <div className="md:w-1/3 h-fit rounded-xl bg-white shadow-md md:ml-5 md:mt-0 mt-5">
      <div className="h-14 bg-black rounded-t-xl content-center">
        <label className="ml-5 text-lg text-white">{translate("submit_ticket")}</label>
      </div>
      <div className="p-4">
        <label className="text-sm">{translate("ticket_desc")}</label>
        <InputWithTitle 
          titleLeft={translate("subject")}
          iconRight="" 
          value={subject} 
          setValue={setSubject}
          type={"text"}
          validated={true}    
          inputStyle="form-control w-full mx-auto mt-5"
          titleStyle="text-left text-sm font-bold" 
        />
        <InputWithTitle 
          titleLeft={translate("title")}
          iconRight="" 
          value={title} 
          setValue={setTitle}
          type={"text"}
          validated={true}    
          inputStyle="form-control w-full mx-auto"
          titleStyle="text-left text-sm font-bold" 
        />
        <DropdownWithTitle
          title={translate("category")}
          titleStyle="text-left text-sm font-bold"
          inputStyle="form-control w-full mx-auto mb-3"
          listValues={ticketCategories}
          selectedValue={categoryValue}
          setSelectedValue={setCategoryValue}
        />
        <InputWithTitle 
          titleLeft={translate("description")}
          iconRight="" 
          value={description} 
          setValue={setDescription}
          type={"text"}
          validated={true}    
          inputStyle="form-control w-full mx-auto"
          titleStyle="text-left text-sm font-bold" 
        />
        <Button
          text={translate("submit")}
          disabled={true}
          buttonStyle="w-full mx-auto h-10 rounded-xl mt-5"
          disabledButtonStyle="bg-gray-light text-gray"
          enabledButtonStyle="bg-white text-blue"
          loading={false}
          onPress={() => sendTicket()}
        />
      </div>
    </div>
  );
}
