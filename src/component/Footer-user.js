import React from "react";
import logo from "../images/5_1.png";
import payment from "../images/payment.png";
import "./Footer-user.css";
import WhatsAppButton1 from "./Subfooter2";

function Footer() {
  return (
    <div className="footer" id="footer-user">
      <div className="header-section">
        <div className="logo-name-container">
          <img
            id="fr-logo"
            alt=""
            src={logo}
            width="100"
            height="100"
            className="d-inline-block align-top"
          />
          <h5 className="logo-text">BETZHUB</h5>
        </div>
        <div className="header-text">
          <h4>100% safe & Instant payments</h4>
        </div>
        <div className="header-text">
          <h4>Accepted Modes of Payments</h4>
        </div>
      </div>
      <br />
      <div className="content-payment-contact">
        <div className="content-section">
          <div className="about-text">
            Betzhub.co is Asia’s one of the biggest gaming platforms with over
            350 games and sports available.
            <br />
            <br />
            Popular sports such as Cricket, Tennis, Football, Basketball,
            Volleyball and many more including Indian card games like Teen Patti
            and Andar Bahar are also available from various worldwide gaming
            providers.
            <br />
            <br />
            With unlimited markets and odds, betzhub.co gives players the best
            gaming experience in the market.
            <br />
            <br />
            <WhatsAppButton1 phoneNumber="1234567890"> </WhatsAppButton1>
            <br />
            <div className="copyright-text">&copy; Copyright 2023 Betzhub</div>
          </div>
        </div>
        <div className="payment-section">
          <div className="payment-text">
            You can make payments and receive earnings instantly via your UPI ID
            - so you can be sure that your money is safe and secure. All UPI
            platforms are accepted.
          </div>
        </div>

        <div className="contact-section">
          <img
            alt=""
            src={payment}
            width="110%"
            height="20%"
            className="d-inline-block align-top payment-image"
          />
          <br />
          <br />
          <div className="contact-info">
            <p>Contact Us</p>
            <p>WhatsApp: 919940941959</p>
            <p>Calling: 919940941959</p>
          </div>
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default Footer;
