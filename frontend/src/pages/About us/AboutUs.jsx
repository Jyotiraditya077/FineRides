import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us-container">
        <h1>About Finerides</h1>
        <p>
          Welcome to <b>Finerides</b>, your go-to platform for seamless and reliable car and bike rentals. 
          Whether you're planning a weekend getaway, a business trip, or simply need a ride for the day, we offer a wide range of vehicles 
          to meet your needs at affordable prices.
        </p>

        <h2>Why Choose Us?</h2>
        <ul>
          <li>🚗 <b>Wide Selection</b> – Choose from a variety of bikes and cars to suit every journey and style.</li>
          <li>🛡️ <b>Well-Maintained Vehicles</b> – All our vehicles are regularly serviced and safety-checked for a smooth ride.</li>
          <li>⚡ <b>Easy Booking</b> – Simple, fast, and user-friendly platform for quick reservations.</li>
          <li>📍 <b>Anywhere Access</b> – Available across multiple cities with flexible pickup and drop locations.</li>
        </ul>

        <h2>Our Commitment</h2>
        <p>
          At <b>Finerides</b>, we are committed to providing a convenient, safe, and enjoyable rental experience. 
          Whether you need a bike to zip through traffic or a car for your next road trip, we've got you covered. 
          With transparent pricing, reliable service, and customer-first support, your journey starts with confidence.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
