import React, { useState } from 'react';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import LoginPopup from './components/LoginPopup/LoginPopup';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import MyOrders from './pages/MyOrders/MyOrders'; // you may rename to MyBookings if desired
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify/Verify';
import AboutUs from './pages/About us/AboutUs';
import Privacy from './pages/Privacy/Privacy';
import ContactUs from './pages/Contact us/ContactUs';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <ToastContainer />
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} /> {/* Vehicle cart */}
          <Route path='/rent' element={<PlaceOrder />} /> {/* Booking page */}
          <Route path='/myrentals' element={<MyOrders />} /> {/* My vehicle bookings */}
          <Route path='/verify' element={<Verify />} /> {/* Payment verification */}
          <Route path='/about' element={<AboutUs />} />
          <Route path='/privacy-policy' element={<Privacy />} />
          <Route path='/contact' element={<ContactUs />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
