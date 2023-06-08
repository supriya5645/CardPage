import React from 'react';
import "./Tab.css"
const Tab = ({ activeTab, onTabChange }) => {
  const tabs = ['Your', 'All', 'Blocked'];

  return (
    <div className="tab">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={activeTab === tab ? 'active' : ''}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tab;
