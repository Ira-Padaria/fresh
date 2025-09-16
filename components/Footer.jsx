import React from "react";
import "../styles/footer.css";
import logo from "../assets/Logo.png";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo-section">
        <img src={logo} alt="Logo" className="footer-logo" />
        <h2 className="footer-title">DAIRY FRESH</h2>
      </div>

      <div className="footer-info">
        <div className="footer-info-block">
          <h4>Contact</h4>
          <p>+91 98259 42494</p>
        </div>

        <div className="footer-info-block">
          <h4>Working Hours</h4>
          <p>MONDAY - SUNDAY</p>
          <p>10:00am – 12:00am</p>
        </div>

        <div className="footer-info-block">
          <h4>Address</h4>
          <p>Ground Floor, Pujan Plaza, Yogi Chowk Road, Near Vanmali, BRTS Rd </p>
          <p>Varchha, Surat, Gujarat 395010</p>
        </div>
      </div>

      <div className="footer-social">
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaFacebookF /></a>
      </div>
    </footer>
  );
};

export default Footer;
