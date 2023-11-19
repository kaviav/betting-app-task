import React, { useState } from "react";
import bet from "../images/rightbanner.png";
import recent from "../images/rightbanner.png";
import promotion from "../images/rightbanner.png";
import "./Rightsmallbanner.css";

const ImageSwitcher = () => {
  // Initialize state to track the currently selected image
  const [selectedImage, setSelectedImage] = useState(bet);

  // Define an array of image URLs
  const images = [bet, recent, promotion];

  // Function to handle the click event and update the selected image
  const handleImageClick = (index) => {
    setSelectedImage(images[index]);
  };

  return (
    <div
      className="container"
      id="rightcomponenttop"

      // style={{ float: "right" }}
    >
      <div
        className="btn-group"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <span onClick={() => handleImageClick(0)} className="dummy-text">
          Betlist|
        </span>
        <span onClick={() => handleImageClick(1)} className="dummy-text">
          Recent Activity|
        </span>
        <span onClick={() => handleImageClick(2)} className="dummy-text">
          Promotion
        </span>
      </div>
      <div className="pic-container">
        <img src={selectedImage} alt="Selected" id="topimage" />
      </div>
    </div>
  );
};

export default ImageSwitcher;
