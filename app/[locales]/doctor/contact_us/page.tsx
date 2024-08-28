"use client";
import React, { useState } from "react";
import Selection from "../../components/Selection";
import AboutUs from "./components/AboutUs";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Ticket from "./components/Ticket";
import { contactUsOptions } from "@/public/constants/utils";

const Contact: React.FC = () => {

  const [selected, setSelected] = useState(contactUsOptions[0]);

  const renderSelected = () => {
    switch(selected) {
      case "about_us":
        return <AboutUs/>
      case "privacy":
        return <PrivacyPolicy/>
    }
  }

  return (
    <div className="mx-auto w-full bg-background p-5">
      <Selection selected={selected} setSelected={setSelected} options={contactUsOptions}/>
      <div className="w-full md:inline-flex block">
        {renderSelected()}
        <Ticket/>
      </div>
    </div>
  );
}

export default Contact;