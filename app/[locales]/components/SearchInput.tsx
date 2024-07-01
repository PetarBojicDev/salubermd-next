'use client';
import React, { ChangeEvent } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

interface SearchInputProps {
  value: string;
  setValue: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ value, setValue }) => {

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
      <div className="inline-flex justify-start items-center bg-white p-3 rounded-lg border-2 border-gray-light md:w-1/6 w-1/2">
        <FaMagnifyingGlass className="mr-2"/>
        <input placeholder={"Search"}
          className="md:text-base text-sm focus:outline-none w-5/6"
          type="text" 
          value={value} 
          onChange={handleChange}/>
      </div>
  );
}

export default SearchInput;
