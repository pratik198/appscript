import React, { useState, useEffect } from "react";
import "./FilterBar.css";

function FilterBar({ toggleFilterVisibility }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("RECOMMENDED");
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const [itemsCount, setItemsCount] = useState(0);

  useEffect(() => {
    const storedCount = localStorage.getItem("productCount");
    setItemsCount(storedCount ? parseInt(storedCount, 10) : 0);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
    toggleFilterVisibility(!isFilterVisible);
  };

  return (
    <div className="filter-bar">
      <div className="inner_filter_bar">
        <div className="items-countt">
          <p style={{ fontSize: "12px", marginLeft: "15px" }}>
            {itemsCount} ITEMS
          </p>
        </div>
        <div className="show-filter" onClick={toggleFilter}>
          <span>{isFilterVisible ? "<<" : ">>"}</span>
          <p>{isFilterVisible ? "HIDE FILTER" : "SHOW FILTER"}</p>
        </div>
      </div>
      <div className="dropdown">
        <div className="dropdown-header" onClick={toggleDropdown}>
          {selectedOption}
          <span className="arrow-down">▼</span>
        </div>
        <ul className={`dropdown-list ${isDropdownOpen ? "open" : ""}`}>
          <li onClick={() => handleOptionClick("RECOMMENDED")}>RECOMMENDED</li>
          <li onClick={() => handleOptionClick("NEWEST FIRST")}>
            NEWEST FIRST
          </li>
          <li onClick={() => handleOptionClick("POPULAR")}>POPULAR</li>
          <li onClick={() => handleOptionClick("PRICE : HIGH TO LOW")}>
            PRICE : HIGH TO LOW
          </li>
          <li onClick={() => handleOptionClick("PRICE : LOW TO HIGH")}>
            PRICE : LOW TO HIGH
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FilterBar;
