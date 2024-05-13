"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Select from "react-select";

const LanguageSwitcher = () => {
  const [selectedOption, setSelectedOption] = useState({
    value: "en_US",
    label: "English",
  });
    
  const router = useRouter();
  const languageOptions = [
    { value: "en_US", label: "English" },
    { value: "it_IT", label: "Italian" }
  ];

  const handleChange = (selectedOption: any) => {
    setSelectedOption(selectedOption);
    router.push(`/${selectedOption.value}`);
  };

  return (
    <Select
      className="bg-gray-900 border-none"
      options={languageOptions}
      value={selectedOption}
      onChange={handleChange}
      isSearchable={false}
    />
  );
};

export default LanguageSwitcher;