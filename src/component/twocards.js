import React from "react";
import "./twocards.css";
import sports from "../images/12.png";
import casino from "../images/13.png";

function Twocards() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <img
              src={sports}
              className="card-img-top"
              alt="pic"
              id="card-img"
            />

            <div className="card-body">
              <h5 className="card-title">Sports</h5>
              <p className="card-text">
                Our team continues to work hard to make something special for
                all sports. we are very confident that we can exceed our
                players' expectations for a perfect gaming experience which
                encompasses a product with a wide variety of markets for punters
                to choose from.
              </p>
              <p className="card-text">
                We offering many different types of sports to bet on. Some of
                the most popular ones are definitely cricket, football, tennis,
                basketball, horse racing, and many more.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card" style={{ padding: "2pc" }}>
            <img
              src={casino}
              className="card-img-top"
              alt="pic"
              id="card-img"
            />

            <div className="card-body">
              <h5 className="card-title">Casino</h5>
              <p className="card-text">
                We’ve all grown to love the typical brick and mortar casino but
                there’s just something about online casino that triumphs over
                the rest. At 3rdEmpire, we believe that playing casino online
                should be an experience of its own. With thousands of titles
                available at the click of a button, it’s become possible to play
                casino online from the comfort of your home.
              </p>
              <p className="card-text">
                All the while, sit back and immerse yourself in a world of
                mythical creatures and vigorous jokers
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Twocards;
