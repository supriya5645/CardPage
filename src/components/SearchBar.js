import React from 'react';
import "./Searchbar.css"

const SearchBar = ({ searchTerm, onSearchChange }) => {
  const handleSearchChange = (e) => {
    onSearchChange(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by card name"
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
