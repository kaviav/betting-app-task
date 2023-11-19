import React, { useState } from "react";
import "./Sidebar-jami.css";
import allsports from "../images/allsports.png";
import Cricket from "../images/cricket.svg";
import Tennis from "../images/tennis.svg";
import Soccer from "../images/soccer1.svg";
import Star from "../images/star.svg";
import Australian from "../images/australian.svg";
import esports from "../images/esports.png";
import IceHockey from "../images/icehockey.svg";
import Boxing from "../images/boxing.png";
import Motorsport from "../images/motorsport.svg";
import Politics from "../images/politics.png";
import Hockey from "../images/hockey.svg";
import Mixed from "../images/mixed.svg";
import Add from "../images/add.svg";
import Kabbadi from "../images/kabbadi.png";

const SideNavbar = () => {
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const handleMenuClick = (index) => {
    if (openSubMenu === index) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(index);
    }
  };
  const handleSpaceClick = (event) => {
    // Prevent the default behavior of the click event
    event.preventDefault();
    // Toggle the "SPACE" submenu when clicked
    handleMenuClick(4);
  };
  const handleCricketClick = (event) => {
    // Prevent the default behavior of the click event
    event.preventDefault();
    // Toggle the "SPACE" submenu when clicked
    handleMenuClick(1);
  };

  return (
    <nav className="side-navbar">
      <ul className="menu">
        <li onClick={() => handleMenuClick(0)}>
          <div className="row">
            <div className="col-sm-3">
              <img alt="" src={allsports} width="22.19px" height="22.19px" />
            </div>
            <div className="col-sm-4">AllSports</div>
          </div>
        </li>
        <li onClick={handleCricketClick}>
          <div className="row">
            <div className="col-sm-3">
              <img alt="" src={Cricket} width="22.19px" height="22.19px" />
            </div>
            <div className="col-sm-4">Cricket</div>
            <div className="col-sm-4">
              <img alt="" src={Add} width="22.19px" height="22.19px" />
            </div>
          </div>

          {openSubMenu === 1 && (
            <ul className="submenu">
              <li>The Hundred Women</li>
              <li>The Hundred</li>
              <li>Metro Bank One day Cup</li>
              <li>ECS Germany</li>
              <li>US Master T10</li>
              <li>East Africa T20</li>
            </ul>
          )}
        </li>
        <li onClick={() => handleMenuClick(2)}>
          <div className="row">
            <div className="col-sm-3">
              <img alt="" src={Tennis} width="22.19px" height="22.19px" />
            </div>
            <div className="col-sm-4">Tennis</div>
            <div className="col-sm-4">
              <img alt="" src={Add} width="22.19px" height="22.19px" />
            </div>
          </div>
          {openSubMenu === 2 && (
            <ul className="submenu">
              <li>WTA Cleveland 2023</li>
              <li>Zhuhai Challenger 2023 </li>
              <li>WTA Cleveland 2023</li>
              <li>Zhuhai Challenger 2023</li>
              <li>Zhuhai Challenger 2023</li>
              <li>Augsberg Challenger 2023</li>{" "}
            </ul>
          )}
        </li>
        <li onClick={() => handleMenuClick(3)}>
          <div className="row">
            <div className="col-sm-3">
              <img alt="" src={Soccer} width="22.19px" height="22.19px" />
            </div>
            <div className="col-sm-4">Soccer</div>
            <div className="col-sm-4">
              <img alt="" src={Add} width="22.19px" height="22.19px" />
            </div>
          </div>
          {openSubMenu === 3 && (
            <ul className="submenu">
              <li>AFC Champions League Qualifiers</li>
              <li>English U21 Pro Development League </li>
              <li>English U21 Pro Development League</li>
              <li>English U21 Pro Development League</li>
              <li>English U21 Pro Development League</li>
              <li>Malayasian Supe League</li>{" "}
            </ul>
          )}
        </li>
        <li onClick={handleSpaceClick}>
          <div className="row">
            <div className="col-sm-3">
              <img alt="" src={Star} width="22.19px" height="22.19px" />
            </div>
            <div className="col-sm-4">SPACE</div>
            <div className="col-sm-4">
              <img alt="" src={Add} width="22.19px" height="22.19px" />
            </div>
          </div>
          {openSubMenu === 4 && (
            <ul className="submenu">
              <li>Indian Space Research Organization (ISRO)</li>{" "}
            </ul>
          )}
        </li>
        <li onClick={() => handleMenuClick(5)}>
          <div className="row">
            <div className="col-sm-3">
              <img alt="" src={Australian} width="22.19px" height="22.19px" />
            </div>
            <div className="col-sm-4">Australian</div>
            <div className="col-sm-4">
              <img
                alt=""
                src={Add}
                width="22.19px"
                height="22.19px"
                style={{ marginLeft: "30px" }}
              />
            </div>
          </div>
          {openSubMenu === 5 && (
            <ul className="submenu">
              <li>AFL</li>
            </ul>
          )}
        </li>

        <li>
          <img alt="" src={esports} width="12%" height="12%" />
          <span className="menu-item-text"></span>
          Esports
        </li>
        <li>
          <img alt="" src={IceHockey} width="12%" height="12%" />
          <span className="menu-item-text"></span>
          Ice Hockey
        </li>
        <li>
          <img alt="" src={Boxing} width="12%" height="12%" />
          <span className="menu-item-text"></span>
          Boxing
        </li>
        <li>
          <img alt="" src={Mixed} width="12%" height="12%" />
          <span className="menu-item-text"></span>
          Mixed Martial Arts
        </li>
        <li>
          <img alt="" src={Motorsport} width="12%" height="12%" />
          <span className="menu-item-text"></span>
          Motor Sports
        </li>
        <li>
          <img alt="" src={Politics} width="12%" height="12%" />
          <span className="menu-item-text"></span>
          Politics
        </li>
        <li>
          <img alt="" src={Soccer} width="12%" height="12%" />
          <span className="menu-item-text"></span>
          Handball
        </li>
        <li>
          <img alt="" src={Australian} width="12%" height="12%" />
          <span className="menu-item-text"></span>
          Rugby Union
        </li>
        <li>
          <img alt="" src={Hockey} width="12%" height="12%" />
          <span className="menu-item-text"></span>
          Hockey
        </li>
        <li>
          <img alt="" src={Kabbadi} width="12%" height="12%" />
          <span className="menu-item-text"></span>
          Kabaddi
        </li>
      </ul>
    </nav>
  );
};

export default SideNavbar;
