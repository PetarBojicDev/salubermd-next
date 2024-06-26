"use client";
import { useTranslations } from "next-intl";
import React from "react";

interface PrincipleProps {
  element: string;
  principleIndex: number;
}

export default function PrincipleDetail({element, principleIndex} : PrincipleProps) {

  const translate = useTranslations();

  return (
    <div className="w-full inline-flex mb-5">
      <div className="w-14 h-14 bg-blue rounded-full mr-5 content-center text-center">
        <label className="text-2xl  font-bold text-white">{principleIndex + 1}</label>
      </div>
      <div className="w-11/12 content-center">
        <label className="text-base">{translate(element)}</label>
      </div>
    </div>
  );
}
