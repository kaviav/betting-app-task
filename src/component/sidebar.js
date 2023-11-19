import React from "react";
import "./sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
// import { faCircleCheck, faShare ,faFilePen, faWallet, faTrophy} from '@fortawesome/free-solid-svg-icons'
import allsports from "../images/allsports.png";
import Cricket from "../images/cricket.svg";
import Tennis from "../images/tennis.svg";
import Soccer from "../images/soccer1.svg";
// import Star from '../images/star.svg'
import Australian from "../images/australian.svg";
import esports from "../images/esports.png";
import IceHockey from "../images/icehockey.svg";
import Boxing from "../images/boxing.png";
import Motorsport from "../images/motorsport.svg";
import Politics from "../images/politics.png";
// import Hockey from '../images/hockey.svg'
import Mixed from "../images/mixed.svg";
import Add from "../images/add.svg";
import Kabbadi from "../images/kabbadi.png";

function Sidebar() {
  return (
    <header>
      <nav
        id="sidebarMenu"
        class="collapse d-lg-block sidebar collapse bg-white"
      >
        <div className="position-sticky">
          <div className="list-group list-group-flush mx-3 mt-4">
            <a
              href="#"
              className="list-group-item list-group-item-action py-2 ripple"
              aria-current="true"
            >
              <div className="row">
                <div className="col-md-4">
                  <img alt="" src={allsports} />
                </div>
                <div className="col-md-4">
                  <span>All Sports</span>
                </div>
                <div className="col-md-4">
                  <img alt="" src={Add} />
                </div>
              </div>
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action py-2 ripple active"
            >
              <div className="row">
                <div className="col-md-4">
                  <img alt="" src={Cricket} />
                </div>
                <div className="col-md-4">
                  <span>Cricket</span>
                </div>
                <div className="col-md-4">
                  <img alt="" src={Add} />
                </div>
              </div>
            </a>

            <a
              href="#"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <div className="row">
                <div className="col-md-4">
                  <img alt="" src={Tennis} />
                </div>
                <div className="col-md-4">
                  <span>Tennis</span>
                </div>
                <div className="col-md-4">
                  <img alt="" src={Add} />
                </div>
              </div>
            </a>

            <a
              href="#"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <div className="row">
                <div className="col-md-4">
                  <img alt="" src={Soccer} />
                </div>
                <div className="col-md-4">
                  <span>Soccer</span>
                </div>
                <div className="col-md-4">
                  <img alt="" src={Add} />
                </div>
              </div>
            </a>

            <a
              href="#"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <div className="row">
                <div className="col-md-4">
                  <img alt="" src={Australian} />
                </div>
                <div className="col-md-4">
                  <span>Australian Rules</span>
                </div>
                <div className="col-md-4">
                  <img alt="" src={Add} />
                </div>
              </div>
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <div className="row">
                <div className="col-md-4">
                  <img alt="" src={esports} width="90%" height="90%" />
                </div>
                <div className="col-md-4">
                  <span>Esports</span>
                </div>
              </div>
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <div className="row">
                <div className="col-md-4">
                  <img alt="" src={IceHockey} width="80%" height="80%" />
                </div>
                <div className="col-md-4">
                  <span>IceHockey</span>
                </div>
              </div>
            </a>

            <a
              href="#"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <div className="row">
                <div className="col-md-4">
                  <img alt="" src={Boxing} width="90%" height="90%" />
                </div>
                <div className="col-md-4">
                  <span>Boxing</span>
                </div>
              </div>
            </a>

            <a
              href="#"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <div className="row">
                <div className="col-md-4">
                  <img alt="" src={Mixed} width="70%" height="70%" />
                </div>
                <div className="col-md-4">
                  <span>Mixed Martial Arts</span>
                </div>
              </div>
            </a>

            <a
              href="#"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <div className="row">
                <div className="col-md-4">
                  <img alt="" src={Motorsport} width="70%" height="70%" />
                </div>
                <div className="col-md-4">
                  <span>Motorsport</span>
                </div>
              </div>
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <div className="row">
                <div className="col-md-4">
                  <img alt="" src={Politics} width="80%" height="80%" />
                </div>
                <div className="col-md-4">
                  <span>Politics</span>
                </div>
              </div>
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <div className="row">
                <div className="col-md-4">
                  <img alt="" src={Soccer} width="80%" height="80%" />
                </div>
                <div className="col-md-4">
                  <span>Handball</span>
                </div>
              </div>
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <div className="row">
                <div className="col-md-4">
                  <img alt="" src={Australian} width="80%" height="80%" />
                </div>
                <div className="col-md-4">
                  <span>Rugby Union</span>
                </div>
              </div>
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <div className="row">
                <div className="col-md-4">
                  <img alt="" src={Kabbadi} width="80%" height="80%" />
                </div>
                <div className="col-md-4">
                  <span>Kabbadi</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Sidebar;
