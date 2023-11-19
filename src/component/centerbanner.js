import React, { useState } from "react";
import "./centerbanner.css";
import sixthimage from "../images/6.png";
import sixpointone from "../images/6.1.png";

function Centerbanner() {
  const [showSports, setShowSports] = useState(false);
  const [showGambling, setShowGambling] = useState(true);

  const handleSportsClick = () => {
    setShowSports(true);
    setShowGambling(false);
  };

  const handleGamblingClick = () => {
    setShowSports(false);
    setShowGambling(true);
  };

  return (
    <div className="container" id="cbcontainer">
      <div className="row">
        <div
          className={`col-md-6 ${showGambling ? "" : "d-none"}`}
          id="gambling"
        >
          <h3 id="h31">PLAY BIG </h3>
          <h3 id="h3-bw">BIG WINNER! </h3>
          <br />
          <div id="buttonbox">
            <button
              type="button"
              className="btn btn-danger"
              id="cb-button"
              onClick={handleSportsClick}
            >
              Sports
            </button>
            <button
              type="button"
              className="btn btn-danger"
              id="cb-button"
              onClick={handleGamblingClick}
            >
              Casino
            </button>
          </div>
        </div>
        <div
          className={`col-md-6 d-flex justify-content-center align-items-center ${
            showGambling ? "" : "d-none"
          }`}
        >
          <img src={sixthimage} alt="pic Description" className="img-flid" />
        </div>
        <div className={`col-md-6 ${showSports ? "" : "d-none"}`} id="sports">
          <h3 id="h32">100% BONUS</h3>
          <h3 id="h3-bw">BIG WINNER! </h3>
          <br />
          <div id="buttonbox">
            <button
              type="button"
              className="btn btn-danger"
              id="cb-button"
              onClick={handleSportsClick}
            >
              Sports
            </button>
            <button
              type="button"
              className="btn btn-danger"
              id="cb-button"
              onClick={handleGamblingClick}
            >
              Casino
            </button>
          </div>
        </div>
        <div
          className={`col-md-6 d-flex justify-content-center align-items-center ${
            showSports ? "" : "d-none"
          }`}
        >
          <img src={sixpointone} alt="pic Description" className="img-flid" />
        </div>
      </div>
    </div>
  );
}

export default Centerbanner;
