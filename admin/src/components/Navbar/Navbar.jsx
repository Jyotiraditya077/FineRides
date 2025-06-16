import React from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
  return (
    <div className="admin-navbar">
      <img className="admin-logo" src={assets.logo} alt="FineRides Logo" />
      <img className="admin-profile" src={assets.profile_image} alt="Admin Profile" />
    </div>
  );
};

export default Navbar;
