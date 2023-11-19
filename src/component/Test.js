import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Test.css";
import inplayImage from "../images/inplay.svg";
import cricketImage from "../images/cricket.svg";
import tennisImage from "../images/tennis.svg";
import soccerImage from "../images/soccer.svg";
import starImage from "../images/star.svg";
import australianSportsImage from "../images/australiansports.svg";
import esportsImage from "../images/esports.png";

const Sportstest = () => {
  const imageSize = {
    width: "25px",
    height: "25px",
  };

  const buttonsData = [
    { name: "Inplay", imageSrc: inplayImage, notification: 2 },
    { name: "Cricket", imageSrc: cricketImage, notification: 5 },
    { name: "Tennis", imageSrc: tennisImage, notification: 1 },
    { name: "Soccer", imageSrc: soccerImage, notification: 3 },
    { name: "SPACE", imageSrc: starImage, notification: 9 },
    {
      name: "Australian Rules",
      imageSrc: australianSportsImage,
      notification: 77,
    },
    { name: "Esports", imageSrc: esportsImage, notification: 97 },
  ];

  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (index) => {
    setSelectedButton(index);
  };

  const renderContent = () => {
    if (selectedButton !== null) {
      // Define different content for each button here
      const content = [
        // Content for 'Inplay' button
        <div key="inplay-content" className="inplay-container"></div>,

        // Content for 'Cricket' button
        <div key="cricket-content" id="content" className="container">
          <div className="row" id="rowsss">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-4">
                  <div class="box linear"></div>
                </div>
                <div className="col-md-7">
                  <h3 id="name">
                    {" "}
                    Ipswich Town U21 <span id="vs">vs</span>
                    <br />
                    Birmingham U21
                  </h3>
                  <h3 id="subname">English U21 Pro Development League</h3>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-3">
                  <button
                    type="button"
                    class="btn btn-dark position-relative"
                    style={{ marginTop: "4pc" }}
                  >
                    M{" "}
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
                      4
                    </span>
                  </button>
                </div>
                <div className="col-md-3">
                  <div className="row" id="blog">
                    <div className="col-md-6" id="blue">
                      5.6
                    </div>
                    <div className="col-md-6" id="pink">
                      5.6
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="row" id="blog">
                    <div className="col-md-6" id="blue">
                      5.6
                    </div>
                    <div className="col-md-6" id="pink">
                      5.6
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="row" id="blog">
                    <div className="col-md-6" id="blue">
                      5.6
                    </div>
                    <div className="col-md-6" id="pink">
                      5.6
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>,

        // Content for 'Tennis' button
        <div key="tennis-content" id="content" className="container">
          <div className="row" id="rowsss">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-4">
                  <div class="box linear"></div>
                </div>
                <div className="col-md-7">
                  <h3 id="name">
                    {" "}
                    Ipswich Town U21 <span id="vs">vs</span>
                    <br />
                    Birmingham U21
                  </h3>
                  <h3 id="subname">English U21 Pro Development League</h3>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-3">
                  <button
                    type="button"
                    class="btn btn-dark position-relative"
                    style={{ marginTop: "4pc" }}
                  >
                    M{" "}
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
                      4
                    </span>
                  </button>
                </div>
                <div className="col-md-3">
                  <div className="row" id="blog">
                    <div className="col-md-6" id="blue">
                      5.6
                    </div>
                    <div className="col-md-6" id="pink">
                      5.6
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="row" id="blog">
                    <div className="col-md-6" id="blue">
                      5.6
                    </div>
                    <div className="col-md-6" id="pink">
                      5.6
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="row" id="blog">
                    <div className="col-md-6" id="blue">
                      5.6
                    </div>
                    <div className="col-md-6" id="pink">
                      5.6
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>,

        // Content for 'Soccer' button
        <div key="soccer-content" id="content" className="container">
          <div className="row" id="rowsss">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-4">
                  <div class="box linear"></div>
                </div>
                <div className="col-md-7">
                  <h3 id="name">
                    {" "}
                    Ipswich Town U21 <span id="vs">vs</span>
                    <br />
                    Birmingham U21
                  </h3>
                  <h3 id="subname">English U21 Pro Development League</h3>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-3">
                  <button
                    type="button"
                    class="btn btn-dark position-relative"
                    style={{ marginTop: "4pc" }}
                  >
                    M{" "}
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
                      4
                    </span>
                  </button>
                </div>
                <div className="col-md-3">
                  <div className="row" id="blog">
                    <div className="col-md-6" id="blue">
                      5.6
                    </div>
                    <div className="col-md-6" id="pink">
                      5.6
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="row" id="blog">
                    <div className="col-md-6" id="blue">
                      5.6
                    </div>
                    <div className="col-md-6" id="pink">
                      5.6
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="row" id="blog">
                    <div className="col-md-6" id="blue">
                      5.6
                    </div>
                    <div className="col-md-6" id="pink">
                      5.6
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>,

        // Content for 'SPACE' button
        <div key="space-content" id="content" className="container">
          <div className="row" id="rowsss">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-4">
                  <div class="box linear"></div>
                </div>
                <div className="col-md-7">
                  <h3 id="name">
                    {" "}
                    Ipswich Town U21 <span id="vs">vs</span>
                    <br />
                    Birmingham U21
                  </h3>
                  <h3 id="subname">English U21 Pro Development League</h3>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-3">
                  <button
                    type="button"
                    class="btn btn-dark position-relative"
                    style={{ marginTop: "4pc" }}
                  >
                    M{" "}
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
                      4
                    </span>
                  </button>
                </div>
                <div className="col-md-3">
                  <div className="row" id="blog">
                    <div className="col-md-6" id="blue">
                      5.6
                    </div>
                    <div className="col-md-6" id="pink">
                      5.6
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="row" id="blog">
                    <div className="col-md-6" id="blue">
                      5.6
                    </div>
                    <div className="col-md-6" id="pink">
                      5.6
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="row" id="blog">
                    <div className="col-md-6" id="blue">
                      5.6
                    </div>
                    <div className="col-md-6" id="pink">
                      5.6
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>,

        // Content for 'Australian Rules' button
        <div key="australianrules-content" id="content" className="container">
          <div className="row" id="rowsss">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-4">
                  <div class="box linear"></div>
                </div>
                <div className="col-md-7">
                  <h3 id="name">
                    {" "}
                    Ipswich Town U21 <span id="vs">vs</span>
                    <br />
                    Birmingham U21
                  </h3>
                  <h3 id="subname">English U21 Pro Development League</h3>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-3">
                  <button
                    type="button"
                    class="btn btn-dark position-relative"
                    style={{ marginTop: "4pc" }}
                  >
                    M{" "}
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
                      4
                    </span>
                  </button>
                </div>
                <div className="col-md-3">
                  <div className="row" id="blog">
                    <div className="col-md-6" id="blue">
                      5.6
                    </div>
                    <div className="col-md-6" id="pink">
                      5.6
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="row" id="blog">
                    <div className="col-md-6" id="blue">
                      5.6
                    </div>
                    <div className="col-md-6" id="pink">
                      5.6
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="row" id="blog">
                    <div className="col-md-6" id="blue">
                      5.6
                    </div>
                    <div className="col-md-6" id="pink">
                      5.6
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>,

        // Content for 'Esports' button
        <div key="esports-content" id="content" className="container">
          <div className="row" id="rowsss">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-4">
                  <div class="box linear"></div>
                </div>
                <div className="col-md-7">
                  <h3 id="name">
                    {" "}
                    Ipswich Town U21 <span id="vs">vs</span>
                    <br />
                    Birmingham U21
                  </h3>
                  <h3 id="subname">English U21 Pro Development League</h3>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-3">
                  <button
                    type="button"
                    class="btn btn-dark position-relative"
                    style={{ marginTop: "4pc" }}
                  >
                    M{" "}
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
                      4
                    </span>
                  </button>
                </div>
                <div className="col-md-3">
                  <div className="row" id="blog">
                    <div className="col-md-6" id="blue">
                      5.6
                    </div>
                    <div className="col-md-6" id="pink">
                      5.6
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="row" id="blog">
                    <div className="col-md-6" id="blue">
                      5.6
                    </div>
                    <div className="col-md-6" id="pink">
                      5.6
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="row" id="blog">
                    <div className="col-md-6" id="blue">
                      5.6
                    </div>
                    <div className="col-md-6" id="pink">
                      5.6
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>,
      ];

      // Return content for all buttons when 'Inplay' button is selected
      if (selectedButton === 0) {
        return content;
      }

      // Return content for the selected button only
      return content[selectedButton];
    }
  };

  useEffect(() => {
    // Set the "Inplay" button as initially selected when the component loads
    handleButtonClick(0);
  }, []);

  return (
    <div className="spocontainer" id="Sports-center-container">
      <div className="row">
        <div className="col-md-12">
          <div className="button-row">
            {buttonsData.map((button, index) => (
              <div key={index} id="button-container">
                <button
                  className={`button position-relative ${
                    selectedButton === index ? "active" : ""
                  }`}
                  onClick={() => handleButtonClick(index)}
                >
                  <img
                    src={button.imageSrc}
                    alt={button.name}
                    style={imageSize}
                  />
                  <br />
                  {button.name}
                  {button.notification > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                      {button.notification}
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
                        {button.notification}
                      </span>
                    </span>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="content-container">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default Sportstest;
