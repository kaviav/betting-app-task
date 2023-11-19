// AboutUs.js
import React from "react";
// import Sidebar from "../component/Sidebar-jami";
// import Navbarall from "../component/Navbar-all";
import Heroimagebanner from "../component/Heroimagebanner";
import CenterContainer from "../component/CenterContainer";
// import Rightsmallbanner from "../component/Rightsmallbanner";
// import Rightlongbanner from "../component/Rightlongbanner";
import Footer from "../component/Footerall";
import "./About.css";

function AboutUs() {
  return (
    <div className="aboutcontainer">
      <Heroimagebanner />
      <CenterContainer />
      <Footer />
    </div>
  );
}

export default AboutUs;
