import React, { useState } from "react";

import SearchIcon from "@material-ui/icons/Search";

import "./index.css";

const SearchBar = () => {
  const [value, setValue] = useState("");

  const handleInput = (event, text) => {
    console.log(text);
    setValue(event.target.value);
  };
  return (
    <div className="search__container">
      <div className="search__inputContainer">
        <SearchIcon className="search__icon" />
        <input
          type="text"
          className="search__input"
          onChange={handleInput}
          value={value}
          placeholder="Buscar..."
        />
      </div>
    </div>
  );
};

export default SearchBar;
