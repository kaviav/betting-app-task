import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar-all.css";
import logoImage from "../images/5_1.png";
import { BiMoney } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { BiWalletAlt } from "react-icons/bi";
import { BiSolidUser } from "react-icons/bi";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="navbarall-container">
      <div className="brand-container">
        <Link to="/">
          <img alt="" src={logoImage} width="60" height="50" className="logo" />
        </Link>
        <span className="brand">BETZHUB</span>
      </div>
      <div className="nav-links-container">
        <a href="/Sports" className="nav-link">
          Sports
        </a>
        <a href="/Casino" className="nav-link">
          Casino
        </a>
        <a href="/Inplay" className="nav-link">
          Inplay
        </a>
      </div>

      <div className="navbar-nav" id="icon-container">
        <button className="icon-button">
          <BiWalletAlt size={30} />
        </button>
        <button className="icon-button">
          <BiMoney size={30} />
        </button>
        <button className="icon-button">
          <IoSettingsOutline size={30} />
        </button>
        <div className="avatar-container">
          <BiSolidUser
            className="avatar-icon"
            size={30}
            onClick={toggleDropdown}
          />
          <div
            className={`account-dropdown ${dropdownVisible ? "show" : ""}`}
            id="dropdown-menu"
          >
            <Link to="/Userprofile" className="dropdown-link">
              User Profile
            </Link>
            <Link to="/Account" className="dropdown-link">
              Account
            </Link>
            <Link to="/Withdraw" className="dropdown-link">
              Withdraw
            </Link>
            <Link to="/Transaction" className="dropdown-link">
              Transaction
            </Link>
            <Link to="/Open-bets" className="dropdown-link">
              Open Bets
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
