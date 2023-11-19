import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import SignInPopup from "./signin";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./register";
import logo from "../images/5_1.png";

function CollapsibleExample() {
  const [showSignInPopup, setShowSignInPopup] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleSignInClick = () => {
    setShowSignInPopup(true);
    setShowRegister(false);
  };

  const handleRegisterClick = () => {
    setShowRegister(true);
    setShowSignInPopup(false);
  };

  const handleClosePopup = () => {
    setShowSignInPopup(false);
    setShowRegister(false);
  };

  return (
    <div className="navbar-container">
      <div className="brand-container">
        <img alt="" src={logo} width="60" height="50" className="logo" />
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
      <div className="auth-links-container">
        <a href="#signin" className="nav-link" onClick={handleSignInClick}>
          Sign In
        </a>
        <a href="#register" className="nav-link" onClick={handleRegisterClick}>
          Register
        </a>
      </div>
      {showSignInPopup && <SignInPopup onClose={handleClosePopup} />}
      {showRegister && <Register onClose={handleClosePopup} />}
    </div>
  );
}

export default CollapsibleExample;
