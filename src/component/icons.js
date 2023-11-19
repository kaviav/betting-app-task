import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp ,faTwitter} from '@fortawesome/free-brands-svg-icons'


const Icons = ({ phoneNumber }) => {
  const handleWhatsAppClick = () => {
    // Construct the WhatsApp URL with the provided phone number
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    
     <div className='row'>
    
     <div className='col-md-2 '>
     <FontAwesomeIcon icon={faWhatsapp} size="2xl" onClick={handleWhatsAppClick} style={{color: "#B83734",}} /></div>
     
     <div className='col-md-2'>
     <FontAwesomeIcon icon={faTwitter} size="2xl" style={{color: "#B83734",}} />
     </div>
        </div>
  );
};

export default Icons;