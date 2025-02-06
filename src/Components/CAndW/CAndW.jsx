import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import whatsappIcon from '../../assets/whatsapp.png';
import './CAndW.css';

const CAndW = () => {
  const phoneNumber = '+918652005010';
  const whatsappMessage = 'Hello! I am interested in your products.';
  const email = 'info@unioncabins.com';

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsapp = () => {
    window.location.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  };

  const handleMessage = () => {
    window.location.href = `sms:${phoneNumber}?body=${encodeURIComponent(whatsappMessage)}`;
  };

  return (
    <div className="floating-buttons">
      <button 
        className="floating-button message-button"
        onClick={handleMessage}
        aria-label="Message Us"
      >
        <MessageSquare size={24} />
      </button>
      <button 
        className="floating-button call-button"
        onClick={handleCall}
        aria-label="Call Us"
      >
        <Phone size={24} />
      </button>
      <button 
        className="floating-button whatsapp-button"
        onClick={handleWhatsapp}
        aria-label="WhatsApp Us"
      >
        <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-icon" />
      </button>
    </div>
  );
};

export default CAndW;