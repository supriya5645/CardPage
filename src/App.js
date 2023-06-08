import React, { useState } from 'react';
import CardList from './components/CardList';
import Tab from './components/Tab';
import FilterDropdown from './components/FilterDropdown';
import SearchBar from './components/SearchBar';
import './App.css'
const App = () => {
  const [activeTab, setActiveTab] = useState('Your');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const handleSearchChange = (search) => {
    setSearchTerm(search);
  };

  return (
    <div className="app">
    <div className="your-IdContainer">
      <div className="your-id">My ID {123}</div>
      {/* Rest of your component content */}
    </div>
      <Tab activeTab={activeTab} onTabChange={handleTabChange} />
      <FilterDropdown selectedFilter={selectedFilter} onFilterChange={handleFilterChange} />
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <CardList tab={activeTab} filter={selectedFilter} search={searchTerm} />
    </div>
  );
};

export default App;
