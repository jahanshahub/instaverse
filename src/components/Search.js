import React from "react";
import TextInput from "./base/TextInput";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <TextInput
      placeholder="Search..."
      icon={<AiOutlineSearch size="24" color="rgba(255, 255, 255, 0.7)" />}
    />
  );
};

export default Search;
