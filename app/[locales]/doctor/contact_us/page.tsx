"use client";
import React, { useState } from "react";
import Selection from "./components/Selection";

const Contact: React.FC = () => {

  const [aboutUs, setAboutUs] = useState(true);

  return (
    <div className="h-full w-full p-5">
      <Selection aboutUs={aboutUs} setAboutUs={setAboutUs}/>
    </div>
  );
}

export default Contact;