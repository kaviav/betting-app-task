import React, { useState } from "react";
import "./signin.css";
import Register from "./register";
import fiveImage from "../images/5.png";
import Icons from "./icons";
import logo from "../images/5_1.png";
import subpayment from "../images/subpayment.png";

const SignInPopup = ({ onClose }) => {
  const [showRegister, setShowRegister] = useState(false);
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const toggleRegister = () => {
    setShowRegister(!showRegister);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const validatePassword = (password) => {
    // Use a regular expression to validate the password
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(password)) {
      setErrorMessage(
        "Password must contain at least 6 characters, including at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character."
      );
    } else {
      setErrorMessage("");
    }
  };

  return (
    <div className="signInPopup">
      <div className="signInContainer">
        <button className="closeButton" onClick={onClose}>
          <span>&times;</span> {/* This creates the cross mark */}
        </button>
        <div className="container">
          <div className="row">
            <center>
              <img alt="logo" src={logo} id="logo" />
            </center>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img src={fiveImage} alt="Left pic" id="imgcard" />
              <h4 id="withdraw">
                <b>
                  100% <span>FAST</span> Withdrawal
                </b>
              </h4>
              <img
                src={subpayment}
                alt="Left pic"
                style={{ width: "100%", marginLeft: "5%" }}
              />
            </div>
            <div className="col-md-6">
              {showRegister ? (
                <Register onClose={onClose} />
              ) : (
                <form id="rs-form">
                  <label id="rs-label">
                    <input
                      type="text"
                      name="username"
                      placeholder="Enter your Name"
                      className="responsive-input"
                    />
                  </label>
                  <label id="rs-label">
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter your Password"
                      value={password}
                      onChange={handlePasswordChange}
                      className="responsive-input"
                    />
                  </label>
                  <div className="error-message">{errorMessage}</div>
                  <label id="rs-label">
                    <input
                      type="checkbox"
                      name="keepLoggedIn"
                      id="rs-checkbox"
                    />
                    Keep me signed in
                  </label>
                  <button
                    type="submit"
                    className=" responsive-input" // Add this class
                    disabled={!!errorMessage} // Disable the button if there's an error message
                    id="rs-button"
                  >
                    Sign In
                  </button>
                  <p className="para1">
                    Don't have an account?{" "}
                    <a href="/register" id="register" onClick={toggleRegister}>
                      Register
                    </a>
                  </p>
                  <div className="row justify-content-center">
                    <Icons phoneNumber="9940941959" />
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPopup;
