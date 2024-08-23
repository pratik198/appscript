import React, { useState } from "react";

const LeftSide = () => {
  const filters = [
    { name: "Customizable", isCheckbox: true },
    { name: "Ideal For", options: ["Men", "Women", "Kid"] },
    { name: "Occasion", options: ["Men", "Women", "Kid"] },
    { name: "Work", options: ["Men", "Women", "Kid"] },
    { name: "Fabric", options: ["Men", "Women", "Kid"] },
    { name: "Segment", options: ["Men", "Women", "Kid"] },
    { name: "Suitable For", options: ["Men", "Women", "Kid"] },
    { name: "Raw Materials", options: ["Men", "Women", "Kid"] },
    { name: "Pattern", options: ["Men", "Women", "Kid"] },
  ];

  return (
    <div style={styles.sidebar}>
      {filters.map((filter, index) => (
        <FilterSection key={index} filter={filter} />
      ))}
    </div>
  );
};

const FilterSection = ({ filter }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(
    filter.options ? new Array(filter.options.length).fill(false) : []
  );

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleUnselectAll = () => {
    setSelectedOptions(new Array(filter.options.length).fill(false));
  };

  const handleOptionChange = (index) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[index] = !newSelectedOptions[index];
    setSelectedOptions(newSelectedOptions);
  };

  return (
    <div style={styles.filterSection}>
      <div style={styles.filterHeader} onClick={filter.options && toggleOpen}>
        {filter.isCheckbox ? (
          <label style={styles.filterName}>
            <input type="checkbox" style={styles.checkbox} />
            {filter.name}
          </label>
        ) : (
          <>
            <span style={styles.filterName}>{filter.name}</span>
            {filter.options && (
              <span style={styles.arrow}>{isOpen ? "▲" : "▼"}</span>
            )}
          </>
        )}
      </div>
      {isOpen && filter.options && (
        <div style={styles.filterOptions}>
          <label style={styles.unselectAll} onClick={handleUnselectAll}>
            Unselect All
          </label>
          {filter.options.map((option, index) => (
            <label key={index} style={styles.filterOption}>
              <input
                type="checkbox"
                checked={selectedOptions[index]}
                onChange={() => handleOptionChange(index)}
                style={styles.checkbox}
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  sidebar: {
    position: "relative",
    width: "280px",
    padding: "20px",
    boxSizing: "border-box",
    fontFamily: "'Simplon Norm', Arial, sans-serif",
    fontSize: "14px",
    color: "#333",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    overflowY: "auto",

    gap: "24px",
    paddingLeft: "17px",
  },
  filterSection: {
    marginBottom: "24px",
    paddingLeft: "16px",
  },
  filterHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    paddingBottom: "5px",
    borderBottom: "1px solid #ccc",
  },
  filterName: {
    display: "flex",
    alignItems: "center",
    marginBottom: "5px",
  },
  arrow: {
    fontSize: "12px",
  },

  filterOptions: {
    marginTop: "10px",
    marginLeft: "5px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },

  unselectAll: {
    display: "block",
    marginBottom: "10px",
    color: "black",
    cursor: "pointer",
    fontWeight: "500",
  },
  filterOption: {
    display: "block",
    marginBottom: "5px",
  },
  checkbox: {
    marginRight: "10px",
  },
};

export default LeftSide;
