import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faTwitter } from "@fortawesome/free-brands-svg-icons";

const WhatsAppButton1 = ({ phoneNumber }) => {
  const handleWhatsAppClick = () => {
    // Construct the WhatsApp URL with the provided phone number
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="row">
      <div className="col-md-1">
        <FontAwesomeIcon
          icon={faWhatsapp}
          size="lg"
          onClick={handleWhatsAppClick}
          style={{ color: "black" }}
        />
      </div>
      <div className="col-lg ">WhatsApp</div>
      <div className="col-md-1">
        <FontAwesomeIcon
          icon={faTwitter}
          size="lg"
          style={{ color: "black", marginLeft: "-10px" }}
        />
      </div>
      <div className="col-lg ">Twitter</div>
    </div>
  );
};

export default WhatsAppButton1;
