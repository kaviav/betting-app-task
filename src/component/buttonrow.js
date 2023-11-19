import React from "react";
import "./buttonrow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faShare,
  faFilePen,
  faWallet,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

function Buttonrow() {
  return (
    <div className="row" id="buttonrow">
      <div className="col-md-2">
        <button type="button" className="btn btn-danger" id="buttonrowbtn">
          <FontAwesomeIcon icon={faFilePen} size="lg" />
          1. Register
        </button>
      </div>
      <div className="col-md-1 mx-2" style={{ paddingLeft: "3%" }}>
        <FontAwesomeIcon
          icon={faShare}
          className="fa-3x"
          style={{ color: "#ffffff" }}
        />
      </div>
      <div className="col-md-2">
        <button type="button" className="btn btn-danger" id="buttonrowbtn">
          <FontAwesomeIcon
            icon={faCircleCheck}
            size="lg"
            style={{ color: "#ffffff", padding: "2px" }}
          />
          2. Verify
        </button>
      </div>
      <div className="col-md-1 mx-2" style={{ paddingLeft: "3%" }}>
        <FontAwesomeIcon
          icon={faShare}
          className="fa-3x"
          style={{ color: "#ffffff" }}
        />
      </div>
      <div className="col-md-2">
        <button type="button" className="btn btn-danger" id="buttonrowbtn">
          <FontAwesomeIcon
            icon={faWallet}
            size="lg"
            style={{ color: "#ffffff", padding: "2px" }}
          />
          3. Deposit
        </button>
      </div>
      <div className="col-md-1 mx-2" style={{ paddingLeft: "3%" }}>
        <FontAwesomeIcon
          icon={faShare}
          className="fa-3x"
          style={{ color: "#ffffff" }}
        />
      </div>
      <div className="col-md-2">
        <button type="button" className="btn btn-danger" id="buttonrowbtn">
          <FontAwesomeIcon
            icon={faTrophy}
            size="lg"
            style={{ color: "#ffffff", padding: "2px" }}
          />
          4. Win
        </button>
      </div>
    </div>
  );
}

export default Buttonrow;
