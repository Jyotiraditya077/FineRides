import React from 'react';
import './VehicleItem.css';

const SkeletonVehicleItem = () => {
  return (
    <div className='vehicle-item skeleton'>
      <div className='vehicle-item-img-container'>
        <div className='skeleton-image'></div>
        <div className='skeleton-add-button'></div>
      </div>
      <div className='vehicle-item-info'>
        <div className='vehicle-item-name-rating'>
          <div className='skeleton-text skeleton-title'></div>
          <div className='skeleton-text skeleton-rating'></div>
        </div>
        <div className='skeleton-text skeleton-desc'></div>
        <div className='skeleton-text skeleton-price'></div>
      </div>
    </div>
  );
};

export default SkeletonVehicleItem;
