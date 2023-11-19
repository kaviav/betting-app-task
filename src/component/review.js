import React from "react";
import "./review.css";
import Swipercard from "./cardsmarquee";

function Review() {
  return (
    <>
      <h3 id="reviewtitle">REVIEW</h3>
      <div className="container-fluid">
        <Swipercard />
      </div>
    </>
  );
}

export default Review;
