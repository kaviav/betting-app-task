import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faTwitter } from "@fortawesome/free-brands-svg-icons";

const WhatsAppButton = ({ phoneNumber }) => {
  const handleWhatsAppClick = () => {
    // Construct the WhatsApp URL with the provided phone number
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="row">
      <div className="col-md-1" id="so-icon">
        <FontAwesomeIcon
          icon={faWhatsapp}
          size="2xl"
          onClick={handleWhatsAppClick}
          style={{ color: "white" }}
        />
      </div>
      <div className="col-lg m-2">WhatsApp</div>
      <div className="col-md-1 " id="so-icon">
        <FontAwesomeIcon
          icon={faTwitter}
          size="2xl"
          style={{ color: "white", marginLeft: "-2px" }}
        />
      </div>
      <div className="col-lg m-2">Twitter</div>
    </div>
  );
};

export default WhatsAppButton;
