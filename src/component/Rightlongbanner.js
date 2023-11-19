import React from "react";
import "./Rightlongbanner.css";
import image1 from "../images/r-image1.webp";
import image2 from "../images/r-image2.webp";
import image3 from "../images/r-image3.webp";
import image4 from "../images/r-image4.webp";
import image5 from "../images/r-image5.webp";
import image6 from "../images/r-image6.webp";

function Rightlongbanner() {
  return (
    <div>
      <div className="rightlong-container">
        <div className="header-container">
          <div className="button-container">
            <button type="button" className="btn btn-light">
              Providers
            </button>
            <button type="button" className="btn btn-light">
              Live
            </button>
            <button type="button" className="btn btn-light">
              Virtual
            </button>
          </div>
        </div>
        <div className="card-container">
          {/* Your card components with images go here */}
          <div className="card">
            <img src={image1} alt="pic 1" />
          </div>
          <div className="card">
            <img src={image2} alt="pic 2" />
          </div>
          <div className="card">
            <img src={image3} alt="pic 3" />
          </div>
          <div className="card">
            <img src={image4} alt="pic 4" />
          </div>
          <div className="card">
            <img src={image5} alt="pic 5" />
          </div>
          <div className="card">
            <img src={image6} alt="pic 6" />
          </div>
          <div className="card">
            <img src={image6} alt="pic 6" />
          </div>
          <div className="card">
            <img src={image6} alt="pic 6" />
          </div>
          <div className="card">
            <img src={image6} alt="pic 6" />
          </div>
          <div className="card">
            <img src={image6} alt="pic 6" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rightlongbanner;
