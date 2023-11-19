import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPhone,
  faEnvelope,
  faLock,
  faChartSimple,
} from "@fortawesome/free-solid-svg-icons";
import "./Userprofilecomponent.css";
const UserProfileComponent = () => {
  return (
    <div className="container" style={{ padding: "2pc" }}>
      <header className="text-center">
        <h3 id="title">User Profile</h3>
      </header>
      <div className="row">
        <div className="col-md-3" id="userdetails">
          <div className="text-center" style={{ margin: "2pc" }}>
            <FontAwesomeIcon
              icon={faUser}
              style={{ color: "#A7110C" }}
              size="2x"
            />
            <br />
            <p id="username">Name</p>
          </div>
          <div style={{ margin: "2pc" }}>
            <FontAwesomeIcon icon={faPhone} size="xl" />
            <br />
            <br />
            <FontAwesomeIcon icon={faEnvelope} size="xl" />
            <br />
            <br />
            <FontAwesomeIcon icon={faLock} size="xl" />
          </div>
        </div>
        <div className="col-md-8" id="usercount">
          <div className="row">
            <h2 id="uservalues">
              Statistics <FontAwesomeIcon icon={faChartSimple} size="xl" />
            </h2>
          </div>
          <div className="row">
            <div className="col-md-4 text-center" id="countings">
              <p id="todayprofit">Today Profit</p>
              <br />
              <h5 id="tdyprofitvalue">0</h5>
            </div>
            <div className="col-md-4 text-center" id="countings">
              <p id="todayprofitsports">Today Profit in Sports</p>
              <br />
              <h5 id="tdyprofitvaluesports">0</h5>
            </div>
            <div className="col-md-4 text-center" id="countings">
              <p id="todayprofitcasino">Today Profit in Casino</p>
              <br />
              <h5 id="tdyprofitvaluecasino">0</h5>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-md-3" id="bonus">
          <p id="bonussub">Bonus Subscribtion</p>
          <br />
          <h5 id="bonusvalue">Bonus subscription not available.</h5>
        </div>
        <div className="col-md-8 text-center" id="deposit">
          <p id="todaydeposit">Today Total Deposit</p>
          <br />
          <h5 id="tdydepositvalue">0</h5>
        </div>
      </div>
    </div>
  );
};

export default UserProfileComponent;
