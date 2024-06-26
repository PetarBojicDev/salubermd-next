"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import aboutImageOne from "../../../../../public/images/about_us/about_1.png";
import aboutImageTwo from "../../../../../public/images/about_us/about_2.png";
import { aboutPrinciples } from "@/public/constants/about-principles";
import PrincipleDetail from "./PrincipleDetail";

export default function AboutUs() {

  const translate = useTranslations();

  return (
    <div className="md:w-2/3 rounded-xl bg-white p-7 shadow-md">
      <label className="text-xl font-bold block mb-2">{translate("about_salubermd")}</label>
      <label className="text-base">{translate("about_salubermd_part1")}</label>
      <div className="w-full">
        <Image
          src={aboutImageOne}
          alt="About 1"
          className="w-auto h-1/2 m-auto mt-5 mb-5"
          priority
        />
      </div>
      <label className="text-xl font-bold block mb-2">{translate("founding_principles")}</label>
      <label className="text-base">{translate("about_salubermd_part2")}</label>
      <div className="w-full">
        <Image
          src={aboutImageTwo}
          alt="About 1"
          className="w-auto h-1/2 m-auto mt-5 mb-5"
          priority
        />
      </div>
      {aboutPrinciples.map((element: string, index: number) => {
            return (
              <PrincipleDetail key={index} element={element} principleIndex={index}/>
            );
          })}
    </div>
  );
}
