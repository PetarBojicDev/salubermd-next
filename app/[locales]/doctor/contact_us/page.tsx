"use client";
import React, { useState } from "react";
import Selection from "./components/Selection";
import AboutUs from "./components/AboutUs";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Ticket from "./components/Ticket";

const Contact: React.FC = () => {

  const [aboutUs, setAboutUs] = useState(true);

  return (
    <div className="mx-auto w-full bg-background p-5">
      <Selection aboutUs={aboutUs} setAboutUs={setAboutUs}/>
      <div className="w-full md:inline-flex block">
        {aboutUs ? <AboutUs/> : <PrivacyPolicy/>}
        <Ticket/>
      </div>
    </div>
  );
}

export default Contact;