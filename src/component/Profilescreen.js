import React, { useState } from "react";
import "./Profilescreen.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faFileAlt,
  faMoneyBill,
  faHistory,
  faGift,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import "./Profilescreen.css";
import UserProfileComponent from "./Userprofilecomponent";
import Account from "./Account";
import Bonus from "./Bonus";
import Trans from "./Trans";
import Openbets from "./Openbets";
import Withdraw from "./Withdraw";

const Profilescreen = () => {
  const [activeButton, setActiveButton] = useState("user-profile");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  // Create a map of button names to their corresponding content components
  const buttonToComponentMap = {
    "user-profile": UserProfileComponent,
    Account: Account,
    WithDraw: Withdraw,
    Transaction: Trans,
    "bonus-list": Bonus,
    "open-bets": Openbets,
  };

  // Use the activeButton to get the corresponding content component
  const ActiveContentComponent = buttonToComponentMap[activeButton];

  return (
    <div className="container" id="userprofile">
      <br />
      <div className="row">
        <div className="col-md-2">
          <button
            className={`btn btn-outline ${
              activeButton === "user-profile" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("user-profile")}
          >
            <FontAwesomeIcon icon={faUser} style={{ color: "#A7110C" }} />{" "}
            <span className="button-text">User Profile</span>
          </button>
        </div>
        <div className="col-md-2">
          <button
            className={`btn btn-outline ${
              activeButton === "Account" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("Account")}
          >
            <FontAwesomeIcon icon={faFileAlt} style={{ color: "#A7110C" }} />{" "}
            <span className="button-text">Account</span>
          </button>
        </div>
        <div className="col-md-2">
          <button
            className={`btn btn-outline ${
              activeButton === "WithDraw" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("WithDraw")}
          >
            <FontAwesomeIcon icon={faMoneyBill} style={{ color: "#A7110C" }} />{" "}
            <span className="button-text">Withdraw</span>
          </button>
        </div>
        <div className="col-md-2">
          <button
            className={`btn btn-outline ${
              activeButton === "Transaction" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("Transaction")}
          >
            <FontAwesomeIcon icon={faHistory} style={{ color: "#A7110C" }} />{" "}
            <span className="button-text">Transaction</span>
          </button>
        </div>
        <div className="col-md-2">
          <button
            className={`btn btn-outline ${
              activeButton === "bonus-list" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("bonus-list")}
          >
            <FontAwesomeIcon icon={faGift} style={{ color: "#A7110C" }} />{" "}
            <span className="button-text">BonusList</span>
          </button>
        </div>
        <div className="col-md-2">
          <button
            className={`btn btn-outline ${
              activeButton === "open-bets" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("open-bets")}
          >
            <FontAwesomeIcon icon={faList} style={{ color: "#A7110C" }} />{" "}
            <span className="button-text">OpenBets</span>
          </button>
        </div>
        {/* Add similar buttons for other options */}
        {/* ... */}
      </div>
      <br />
      <div className="container">
        {/* Render the active content component */}
        {ActiveContentComponent ? (
          <ActiveContentComponent />
        ) : (
          <div>Select a button to view content</div>
        )}
      </div>
    </div>
  );
};

export default Profilescreen;
