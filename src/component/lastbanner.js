import React from "react";
import "./lastbanner.css";
import MarqueeComponent from "./marquee";
import image from "../images/15.png";

function Lastbanner() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img
            src={image}
            alt="pic Description"
            className="img-fleid"
            id="img-fleid"
          />
        </div>

        <div className="col-md-6">
          <div className="row">
            <h3 id="h33">Play Anytime, Anywhere !</h3>
            <br />
            {/* Flex container for names and prices */}
            <div className="names mt-4" id="names">
              <div className="flex-container">
                <div className="name-price">
                  <p> Kabin</p>
                  <span> ₹58,875</span>
                </div>
                <div className="name-price">
                  <p> Gowri</p>
                  <span> ₹88,254</span>
                </div>
                <div className="name-price">
                  <p> Aakash</p>
                  <span> ₹50,054</span>
                </div>
                <div className="name-price">
                  <p> Giri</p>
                  <span> ₹1,20,475</span>
                </div>
                <div className="name-price">
                  <p> Dinesh</p>
                  <span> ₹25,197</span>
                </div>
                <div className="name-price">
                  <p> Sheba</p>
                  <span> ₹64,705</span>
                </div>
                <div className="name-price">
                  <p> Hari</p>
                  <span> ₹70,500</span>
                </div>
              </div>
            </div>
            {/* End of flex container */}
            <br />
            <MarqueeComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lastbanner;
