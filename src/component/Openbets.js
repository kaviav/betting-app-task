import React, { useState } from "react";
import "./Openbets.css";

const Dropdown = ({ name }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="dropdown-container-openbets">
      <div className="dropdown-heading-openbets">
        {name} {/* Heading inside the dropdown */}
      </div>
      <select
        className="dropdown-openbets"
        name={name}
        value={selectedOption}
        onChange={handleDropdownChange}
      >
        <option value="">Select</option>
        <option value="Option 1">Matched</option>
        <option value="Option 2">Unmatched</option>
        {/* Add more options as needed */}
      </select>
    </div>
  );
};

const Openbets = () => {
  return (
    <div
      className="container"
      id="OpenBets-container"
      style={{ padding: "2pc" }}
    >
      <h3 className="openbets">Open Bets</h3>

      <div className="button-rows-open">
        <Dropdown name="Sports" />
        <Dropdown name="Tournaments" />
        <Dropdown name="Matches" />
        <Dropdown name="Markets" />
      </div>
      {/* Second row with 3 dropdowns */}
      <div className="button-rows-open">
        <Dropdown name="From Date" />
        <Dropdown name="To date" />
        <Dropdown name="Bets Type" />
      </div>
      <div className="search-container mb-2" id="bets-search">
        <input type="text" placeholder="Search" className="search-input" />
      </div>
      <div className="button-row mb-2" id="bets-buttons">
        <button className="page-button">
          Date <i className="fas fa-sort-up"></i>
          <i className="fas fa-sort-down" style={{ marginLeft: "-12px" }}></i>
        </button>
        <button className="page-button">
          Transaction ID <i className="fas fa-sort-up"></i>
          <i className="fas fa-sort-down" style={{ marginLeft: "-12px" }}></i>
        </button>
        <button className="page-button">
          Status <i className="fas fa-sort-up"></i>
          <i className="fas fa-sort-down" style={{ marginLeft: "-12px" }}></i>
        </button>
        <button className="page-button">
          Deposit/Withdraw <i className="fas fa-sort-up"></i>
          <i className="fas fa-sort-down" style={{ marginLeft: "-12px" }}></i>
        </button>
        <button className="page-button">
          Amount <i className="fas fa-sort-up"></i>
          <i className="fas fa-sort-down" style={{ marginLeft: "-12px" }}></i>
        </button>
        <button className="page-button">
          Remark <i className="fas fa-sort-up"></i>
          <i className="fas fa-sort-down" style={{ marginLeft: "-12px" }}></i>
        </button>
      </div>
      <div className="horizontal-line"></div>
      <div className="no-data">No data available in the table</div>
      <div className="horizontal-line"></div>
      <div className="pagination">
        <div className="entries-info">0 to 0 of 0 entries</div>
        <div className="page-navigation">
          <button className="prev-button">Previous</button>
          <button className="next-button">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Openbets;
