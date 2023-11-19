import React from "react";
import img from "../images/rightbanner.png";
import imageSrc from '../images/rectangle-121@2x.png';
import './RightBanner.css';

function RightBanner(){
    return(
        <div className="Rightsmall-banner">
            <div className="buttons d-flex">
                <h3>Betlist</h3>
                <h3>Recent Activity</h3>
                <h3>Promotions</h3>
            </div>
            <div className="image-banner">
                <img src={img} alt="Right Banner" width="500" />
            </div>
        </div>
    )
}

export default RightBanner;
