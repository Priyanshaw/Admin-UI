import React from "react";
import "./SearchBar.css";

export default function SearchBar({ searchText, handleInputSearch }) {
  return (
    <div>
      <input
        className="searchbar-input"
        type="text"
        placeholder="Search By name, email or role"
        value={searchText}
        onChange={handleInputSearch}
      />
    </div>
  );
}
