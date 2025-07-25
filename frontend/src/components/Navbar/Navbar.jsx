import React, { useContext, useState, useEffect } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate('/');
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHomeClick = () => {
    navigate('/');
    setMenu("home");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleVehiclesClick = () => {
    if (location.pathname === '/about' || location.pathname === '/contact') {
      navigate('/', { hash: '#explore-menu' });
    }
    setMenu("vehicles");
  };

  const handleContactClick = () => {
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenu("contact");
  };

  useEffect(() => {
    if (location.pathname === '/about' || location.pathname === '/contact') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  useEffect(() => {
    if (location.hash === '#explore-menu') {
      setMenu("vehicles");
    }
  }, [location.hash]);

  return (
    <div className='navbar'>
      <Link to='/' onClick={handleLogoClick}>
      <img
  className="logo"
  src={assets.logo_3}
  alt="Finerides Logo"
  style={{ height: '50px', width: 'auto' }}
/>

      </Link>

      <ul className="navbar-menu">
        <li>
          <Link to="/" onClick={handleHomeClick} className={menu === "home" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <a
            href={location.pathname === '/about' || location.pathname === '/contact' ? '/' : '/#explore-menu'}
            onClick={handleVehiclesClick}
            className={menu === "vehicles" ? "active" : ""}
          >
            Vehicles
          </a>
        </li>
        <li>
          <Link to="/about" onClick={() => setMenu("about")} className={menu === "about" ? "active" : ""}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={handleContactClick} className={menu === "contact" ? "active" : ""}>
            Contact
          </Link>
        </li>
      </ul>

      <div className="navbar-right">
        <Link to="/cart" className="navbar-search-icon">
          <img
            src="https://www.reshot.com/preview-assets/icons/5F34YHZQKX/cart-5F34YHZQKX.svg"
            alt="Cart"
            style={{ width: '30px', height: '30px' }}
          />
          <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
        </Link>

        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        ) : (
          <div className="navbar-profile">
            <img
              src="https://www.reshot.com/preview-assets/icons/68ZR2F7VPJ/user-profile-68ZR2F7VPJ.svg"
              alt="Profile"
              style={{ width: '30px', height: '30px' }}
              onClick={() => setShowDropdown(!showDropdown)}
            />
            <ul className={`navbar-profile-dropdown ${showDropdown ? 'show' : ''}`}>
              <li onClick={() => navigate('/myrentals')}>
                <img src={assets.bag_icon} alt="Orders" />
                <p>My Rentals</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="Logout" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
