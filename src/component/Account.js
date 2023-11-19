import React, { useState } from "react";
import "./Account.css";

const Account = () => {
  // State to keep track of the selected number of entries
  const [selectedEntries, setSelectedEntries] = useState(10);

  // Function to handle changes in the dropdown selection
  const handleDropdownChange = (e) => {
    setSelectedEntries(e.target.value);
  };

  return (
    <div className="container" id="Account-container">
      <h3 className="account">Account Statement</h3>
      <div className="row">
        <div className="entry-control" id="Show">
          <label htmlFor="entriesDropdown">Show </label>

          <span className="entries-label m-1">Entries</span>
          <select
            id="entriesDropdown"
            className="custom-dropdown"
            value={selectedEntries}
            onChange={handleDropdownChange}
          >
            {/* Add options for the dropdown here */}
          </select>
        </div>
        <div className="search-bar" id="search-bar">
          <input type="text" placeholder="Search" className="search-input" />
          {/* Add your search icon here */}
          <i className="fa fa-search search-icon" aria-hidden="true"></i>
        </div>
      </div>
      {/* Render the selected number of entries here */}
      <div className="button-row">
        {/* Six buttons */}
        <button className="page-button" id="page-button">
          Date <i className="fas fa-sort-up"></i>
          <i className="fas fa-sort-down" style={{ marginLeft: "-17px" }}></i>
        </button>
        <button className="page-button" id="page-button">
          Type <i className="fas fa-sort-up"></i>
          <i className="fas fa-sort-down" style={{ marginLeft: "-17px" }}></i>
        </button>
        <button className="page-button" id="page-button">
          Description <i className="fas fa-sort-up"></i>
          <i className="fas fa-sort-down" style={{ marginLeft: "-17px" }}></i>
        </button>
        <button className="page-button" id="page-button">
          Dr <i className="fas fa-sort-up"></i>
          <i className="fas fa-sort-down" style={{ marginLeft: "-17px" }}></i>
        </button>
        <button className="page-button" id="page-button">
          Cr <i className="fas fa-sort-up"></i>
          <i className="fas fa-sort-down" style={{ marginLeft: "-17px" }}></i>
        </button>
        <button className="page-button" id="page-button">
          Balance <i className="fas fa-sort-up"></i>
          <i className="fas fa-sort-down" style={{ marginLeft: "-17px" }}></i>
        </button>
      </div>
      <div className="horizontal-line"></div>
      <div className="no-data">No data available in the table</div>
      <div className="horizontal-line"></div>
      <div className="pagination">
        <div className="entries-info">0 to 0 of 0 entries</div>
        <div className="page-navigation mb-4">
          <button className="prev-button">Previous</button>
          <button className="next-button">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Account;
