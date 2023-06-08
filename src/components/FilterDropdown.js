import React from 'react';
import "./filterDropdown.css"
const FilterDropdown = ({ selectedFilter, onFilterChange }) => {
  const filters = ['All', 'Burner', 'Subscription'];

  return (
    <div className="filter-dropdown">
      <select value={selectedFilter} onChange={(e) => onFilterChange(e.target.value)}>
        {filters.map((filter) => (
          <option key={filter} value={filter}>
            {filter}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterDropdown;
