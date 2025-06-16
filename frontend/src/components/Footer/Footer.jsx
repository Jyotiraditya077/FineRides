import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
        <img
          src={assets.logo_3}
          alt="Finerides Logo"
          style={{ width: '120px', height: 'auto' }} // adjust width as needed
        />

          <p>
            Finerides brings you the freedom to explore. Rent your dream ride —
            whether it's a sleek car for a weekend getaway or a reliable bike
            for the daily hustle. Simple, secure, and just a click away.
          </p>
          <div className="footer-social-icons">
            <a href="https://www.instagram.com/justtt.rixhi_/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} color="#fff" />
            </a>
            <a href="https://github.com/Jyotiraditya077" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} color="#fff" />
            </a>
            <a href="https://www.linkedin.com/in/jyotiraditya--swain/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} color="#fff" />
            </a>
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About us</a></li>
            <li><a href="/myrentals">My Bookings</a></li>
            <li><a href="/privacy-policy">Privacy policy</a></li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>CONTACT</h2>
          <ul>
            <li>+91 93371 50262</li>
            <li>support@finerides.com</li>
          </ul>
        </div>
      </div>

      <hr />

      <p className="footer-copyright">
        Built with ❤️ by <a href="https://jyotiradityaportfolio.netlify.app/" target="_blank" className="glow">this guy</a>.
      </p>
      <p className="footer-copyright">
        © 2025 Finerides — All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
