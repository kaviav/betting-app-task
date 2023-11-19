import React from "react";
import CollapsibleExample from "../component/Navbar";
import Centerbanner from "../component/centerbanner";
import Buttonrow from "../component/buttonrow";
import Twocards from "../component/twocards";
import Lastbanner from "../component/lastbanner";
import Review from "../component/review";
import Footer from "../component/footer";
// import "./Mainscreen.css";

function MainScreen() {
  return (
    <div className="mainscreen">
      <CollapsibleExample />
      <br />
      <Centerbanner />
      <br />
      <Buttonrow />
      <br />
      <Twocards />
      <br />
      <Lastbanner />
      <br />
      <Review />
      <br />
      <Footer />
    </div>
  );
}

export default MainScreen;
