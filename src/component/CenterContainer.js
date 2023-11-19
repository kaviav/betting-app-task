import React from "react";
import "./CenterContainer.css";

function CenterContainer() {
  return (
    <div>
      <div className="Main-container">
        <div className="heading">
          <h1> ABOUT US </h1>
          <div className="main-text-container d-flex text-center">
            <p>
              {" "}
              Betzhub is a sports betting exchange community, driven by cutting
              edge technology and a focus on offering value back to our
              customers. We actively encourage our thinking to be focused on
              innovation so we can constantly improve and enhance our product.
              Our goal is to provide a best-in-class platform so our users can
              have the ultimate online gaming experience. We want to grow our
              community by focusing on our liquidity, one market and sport at a
              time. To do this, we ensure we have critical mass along with the
              best price and liquidity offering in the industry, before we add
              any further markets. We are resolutely committed to low margin,
              high volume betting and we aim to continue to disrupt the market
              with a focus on quality liquidity for the customer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CenterContainer;
