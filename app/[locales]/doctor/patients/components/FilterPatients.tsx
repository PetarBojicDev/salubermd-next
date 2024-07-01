"use client";
import Dropdown from '@/app/[locales]/components/Dropdown';
import SearchInput from '@/app/[locales]/components/SearchInput';
import React, { useState } from 'react';
import { consultationCategories } from '@/public/constants/consultation-categories';

interface FilterProps {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  value: Object;
  setValue: React.Dispatch<React.SetStateAction<Object>>;
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