import React, { useContext, useState } from 'react';
import './ExploreMenu.css';
import { StoreContext } from '../../Context/StoreContext';

const ExploreMenu = ({ category, setCategory }) => {
  const { menu_list, rentalMode, setRentalMode, pickupDate, setPickupDate, dropDate, setDropDate } = useContext(StoreContext);

  // Helper for today and tomorrow in yyyy-MM-dd
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 24*60*60*1000).toISOString().split('T')[0];

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our rides</h1>
      <p className='explore-menu-text'>
        Choose from a diverse range of vehicles. Whether it's a rugged SUV, a sleek Sedan, or a swift Bike, we've got something to match your ride preferences.
        <br />
        you can choose to rent the vehicle for a specific number of hours or for a specific date and time.
      </p>
      {/* Toggle for Hourly/Datewise */}
      <div className="rental-toggle-row">
        <button
          className={`rental-toggle-btn${rentalMode === 'hourly' ? ' active' : ''}`}
          onClick={() => setRentalMode('hourly')}
        >
          Hourly
        </button>
        <button
          className={`rental-toggle-btn${rentalMode === 'datewise' ? ' active' : ''}`}
          onClick={() => setRentalMode('datewise')}
        >
          Date wise
        </button>
      </div>
      {/* Date pickers for datewise mode */}
      {rentalMode === 'datewise' && (
        <div className="datewise-inputs">
          <label>
            Pickup Date & Time:
            <input
              type="datetime-local"
              min={today + 'T00:00'}
              value={pickupDate}
              onChange={e => setPickupDate(e.target.value)}
            />
          </label>
          <label>
            Drop Date & Time:
            <input
              type="datetime-local"
              min={pickupDate || today + 'T00:00'}
              value={dropDate}
              onChange={e => setDropDate(e.target.value)}
              disabled={!pickupDate}
            />
          </label>
        </div>
      )}
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div
            key={index}
            onClick={() => setCategory(prev => prev === item.menu_name ? 'All' : item.menu_name)}
            className={`explore-menu-list-item ${category === item.menu_name ? 'active' : ''}`}
          >
            <img
              src={item.menu_image}
              alt={item.menu_name}
            />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
