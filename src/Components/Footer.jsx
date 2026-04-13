import React from "react";
import "../CSS/Footer.css";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <div className="footer-logo">
            <div className="footer-icon">S</div>
            SocialSeed
          </div>
          <p className="footer-desc">
            Connect, Share, Grow — your professional network for career advancement and meaningful connections.
          </p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Product</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/network">Network</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/help">Help Center</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p><FaEnvelope className="icon" /> contact@socialseed.com</p>
          <p><FaPhone className="icon" /> +1 (555) 123-4567</p>
        </div>
      </div>

      <hr className="footer-line" />
      <p className="footer-copy">© 2026 SocialSeed. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
