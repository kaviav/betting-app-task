import React from "react";
import { Link } from "react-router-dom"; // Import the Link component

import "./lastlink.css";

function Lastlink() {
  return (
    <div className="lastlinks">
      <nav>
        <ul>
          <li className="about-list">
            <Link to="/About">About Us</Link>
          </li>
          <li>
            <Link to="/Kyc">KYC Policy</Link>
          </li>
          <li>
            <Link to="/Termsandconditions">Terms & Conditions</Link>
          </li>
          <li>
            <Link to="/ResponsibleGambling">Responsible Gambling</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Lastlink;
