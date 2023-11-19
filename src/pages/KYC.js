import React from "react";
// import Sidebar from "../component/Sidebar-jami";
// import Navbarall from "../component/Navbar-all";
import Heroimagebanner from "../component/Heroimagebanner";
import CenterContainerKYC from "../component/CenterContainerKYC";
// import Rightsmallbanner from "../component/Rightsmallbanner";
// import Rightlongbanner from "../component/Rightlongbanner";
import Footer from "../component/Footerall";
import "./KYC.css";

function Kyc() {
  return (
    <div className="kyccontainer">
      <Heroimagebanner />
      <CenterContainerKYC />
      <Footer />
    </div>
  );
}

export default Kyc;
