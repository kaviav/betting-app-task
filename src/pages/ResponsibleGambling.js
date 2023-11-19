import React from "react";
// import Sidebar from "../component/Sidebar-jami";
// import Navbarall from "../component/Navbar-all";
import Heroimagebanner from "../component/Heroimagebanner";

import CenterContentRes from "../component/CenterContentRes";
// import Rightsmallbanner from "../component/Rightsmallbanner";
// import Rightlongbanner from "../component/Rightlongbanner";
import Footer from "../component/Footerall";

import "./ResponsibleGambling.css";

function Responsiblegambling() {
  return (
    <div className="rescontainer">
      <Heroimagebanner />
      <CenterContentRes />
      <Footer />
    </div>
  );
}

export default Responsiblegambling;
