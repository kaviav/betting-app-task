import React from "react";
// import Navbarall from "../component/Navbar-all";
// import Sidebar from "../component/Sidebar-jami";
import Heroimagebanner from "../component/Heroimagebanner";
// import Rightsmallbanner from "../component/Rightsmallbanner";
// import Rightlongbanner from "../component/Rightlongbanner";
import Test from "../component/Test";
import Footerall from "../component/Footerall";
import "./Sports.css";

function Sports() {
  return (
    <div className="sportscontainer">
      <Heroimagebanner />
      <Test />
      <Footerall />
    </div>
  );
}

export default Sports;
