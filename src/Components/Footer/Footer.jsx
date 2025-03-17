import React from "react";
import "./Footer.css";
import { Instagram, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section company-info">
          <h3>UnionCabins</h3>
          <p>Experience nature's luxury in our handcrafted cabins.</p>
          <p className="gst-info">GST: 27JXYPS4531N1Z6</p>
        </div>

        <div className="footer-section contact-info">
          <h3>Contact Us</h3>
          <p>Pimpari goan, besides sai baba waight brigh,</p>
          <p>Dahisar mori , Maharashtra 400612</p>
          <p>+91 8652005010 | +91 9322211419</p>
        </div>

        <div className="footer-section social-links">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" className="social-link">
              <Instagram size={24} />
            </a>
            <a href="#" className="social-link">
              <Twitter size={24} />
            </a>
            <a href="#" className="social-link">
              <Facebook size={24} />
            </a>
          </div>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>&copy; 2025 UnionCabins. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;