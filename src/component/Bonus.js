import React from "react";
import "./Bonus.css";

function Bonus() {
  return (
    <div>
      <div className="Bonus " id="Bonus">
        <h3 className="b-head  d-flex"> Bonus List </h3>
        <div className="line mb-3">
          <div className="horizontal-line"></div>
          <div className="no-data">No Wager Bonus is Available this Time </div>
          <div className="horizontal-line"></div>
          <br />
        </div>
      </div>
    </div>
  );
}

export default Bonus;
