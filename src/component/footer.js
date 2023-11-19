import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import WhatsAppButton from "./subfooter";
import logo from "../images/5_1.png";
import payment from "../images/payment.png";
import capture from "../images/capture.png";
import "./footer.css"; // Import your existing CSS file if needed
import Lastlink from "./lastlink";

function Footer() {
  return (
    <Container id="footer-main-container">
      <div className="footer-row">
        <div md={4}>
          <img
            id="capture"
            alt=""
            src={capture}
            className="img-fluid3" // Use Bootstrap class to make the image responsive
          />
        </div>
        <div md={6} className="desc">
          Visit www.betzhub.comfor tools and resources to help you stay
          <br /> in control of the way you play
        </div>
        <div md={2} className="text-center">
          <button
            className="btn btn-danger px-2 py-2"
            id="more-btn"
            style={{ marginTop: 15 }}
          >
            Learn More
          </button>
        </div>
      </div>
      <br />

      <Row className="footer-row " style={{ maxWidth: "100%" }}>
        <Col md={4}>
          betzhub.com is Asia’s one of the biggest gaming platforms with over
          350 games and sports available.
          <br />
          <br />
          Popular sports such as Cricket, Tennis, Football, Basketball,
          Volleyball, and many more, including Indian card games like Teen Patti
          and Andar Bahar, are also available from various worldwide gaming
          providers.
          <br />
          <br />
          With unlimited markets and odds, betzhub.co gives players the best
          gaming experience in the market.
          <br />
          <br />
          <WhatsAppButton phoneNumber="9940941959"> </WhatsAppButton>
          <br />
          &copy; Copyright 2010 - 2023 Betzhub
        </Col>
        <Col md={4}>
          <div className="footer-row">
            <div md={6} style={{ maxWidth: "100%" }}>
              <img id="payment" alt="" src={logo} />
            </div>
          </div>
          <br />
          100% safe & Instant payments <br />
          You can make payments and receive earnings instantly via your UPI ID -
          so you can be sure that your money is safe and secure. All UPI
          platforms are accepted.
        </Col>

        <Col md={4}>
          <div className="head-text">
            <h5> Accepted Modes of Payments </h5>
            <img alt="" src={payment} className="img-fluid" id="g-pay" />
          </div>

          <div className="text-center">
            <p>Contact Us</p>
            <p>WhatsApp: 919940941959</p>
            <p>Calling: 919940941959</p>
          </div>
          <br />
          <div className="lastline">
            <Lastlink />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
