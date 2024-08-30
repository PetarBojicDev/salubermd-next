"use client";
import Dropdown from '@/app/[locales]/components/Dropdown';
import SearchInput from '@/app/[locales]/components/SearchInput';
import React from 'react';
import { consultationCategories } from '@/public/constants/consultation-categories';

interface ConsultationProps {
  title?: string;
  index?: number;
}
interface FilterProps {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  value: ConsultationProps;
  setValue: React.Dispatch<React.SetStateAction<ConsultationProps>>;
}

export default function FilterPatients({filter, setFilter, value, setValue}: FilterProps) {

  return (
    <div className="w-full inline-flex justify-between">
      <SearchInput
        value={filter}
        setValue={setFilter}
      />
      <div className="md:w-1/6 w-1/2 md:inline block">
        <Dropdown
          listValues={consultationCategories}
          selectedValue={value}
          validated={true}
          setSelectedValue={setValue}
          placeholder={"Search"}
          iconSize={10}
        />
      </div>
    </div>
  )
  
}