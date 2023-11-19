import React, { useState } from "react";
import "./Trans.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Page4 = () => {
  // State to keep track of the selected number of entries
  const [selectedEntries, setSelectedEntries] = useState(10);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // Function to handle changes in the dropdown selection
  const handleDropdownChange = (e) => {
    setSelectedEntries(e.target.value);
  };

  return (
    <div className="container" id="Trans">
      <h3 className="transaction">Transaction History</h3>
      <div className="date-picker">
        <label htmlFor="startDate">From Date:</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          id="startDate"
          className="date-input"
          dateFormat="yyyy-MM-dd"
        />
        <label htmlFor="endDate">To Date:</label>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          id="endDate"
          className="date-input"
          dateFormat="yyyy-MM-dd"
        />
        <div className="search-bar1">
          <input type="text" placeholder="Search" className="search-input1" />
          {/* Add your search icon here */}
        </div>
      </div>

      <div className="row" id="entry-control-trans">
        <div className="entry-control ml-3 px-3">
          <label htmlFor="entriesDropdown">Show </label>
          <span className="entries-label">Entries</span>
          <select
            id="entriesDropdown"
            className="custom-dropdown"
            value={selectedEntries}
            onChange={handleDropdownChange}
          >
            {/* Options for the dropdown */}
          </select>
        </div>
      </div>
      <div className="file-download">
        <a href="/path/to/csv-file.csv" download className="download-button">
          {" "}
          CSV
        </a>
        <a href="/path/to/excel-file.xlsx" download className="download-button">
          {" "}
          Excel
        </a>
        <a href="/path/to/pdf-file.pdf" download className="download-button">
          {" "}
          PDF
        </a>
      </div>
      {/* Add your search icon here */}
      {/* Add download links for CSV, Excel, and PDF as buttons */}

      <div className="button-row">
        {/* Six buttons */}
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
        <div className="page-navigation mb-4">
          <button className="prev-button">Previous</button>
          <button className="next-button">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Page4;
