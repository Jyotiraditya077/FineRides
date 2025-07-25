import React, { useContext, useState, useEffect } from 'react';
import './VehicleDisplay.css';
import VehicleItem from '../VehicleItem/VehicleItem';
import SkeletonVehicleItem from '../VehicleItem/SkeletonVehicleItem';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';

const VehicleDisplay = ({ category }) => {
  const { vehicle_list, rentalMode, rentalHours } = useContext(StoreContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className='vehicle-display' id='vehicle-display'>
        <h2>Top vehicles near you</h2>
        <div className="vehicle-display-list">
          {[...Array(8)].map((_, index) => (
            <SkeletonVehicleItem key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (!vehicle_list || vehicle_list.length === 0) {
    return (
      <div className='vehicle-display' id='vehicle-display'>
        <h2>Top vehicles near you</h2>
        <div className="vehicle-display-list">
          {[...Array(8)].map((_, index) => (
            <SkeletonVehicleItem key={index} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className='vehicle-display' id='vehicle-display'>
      <h2>Top vehicles near you</h2>

      {rentalMode === 'hourly' && (
        <>
          <div className="vehicle-display-info">
            <p>
              <img src={assets.remove_icon_red} alt="Remove hour" />
              <span>Reduce rental duration (in hours)</span>
            </p>
            <p>
              <img src={assets.add_icon_green} alt="Add hour" />
              <span>Increase rental duration (in hours)</span>
            </p>
          </div>
        </>
      )}

          <div className="vehicle-display-notice">
            ⚠️ Delivery will be made to your provided address within 45 minutes to 1 hour.
            We strive for timely delivery, but exact timing is not guaranteed. Please plan your rental accordingly.
          </div>

      <div className='vehicle-display-list'>
        {vehicle_list.map((item) => {
          if (!item || !item._id || !item.image) return null;

          const matchesCategory = category === 'All' || category === item.category;
          if (!matchesCategory) return null;

          return (
            <VehicleItem
              key={item._id}
              image={item.image}
              name={item.name}
              desc={item.description}
              price={item.hourlyRate}
              id={item._id}
              rentalMode={rentalMode}
              rentalHours={rentalHours}
            />
          );
        })}
      </div>

      <br />
      <br />
      <hr />
    </div>
  );
};

export default VehicleDisplay;
