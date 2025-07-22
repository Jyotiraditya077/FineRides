import React, { useContext, useState } from 'react';
import './VehicleItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';

const VehicleItem = ({ image, name, price, desc, id, rentalMode = 'hourly', rentalHours = 1 }) => {
  const [itemCount, setItemCount] = useState(0);
  const { cartItems, addToCart, removeFromCart, currency } = useContext(StoreContext);

  // 🛑 Safe fallback if data is missing
  if (!id || !image) {
    return null;
  }

  // Helper: is in cart
  const inCart = !!cartItems?.[id];

  return (
    <div className='vehicle-item'>
      <div className='vehicle-item-img-container'>
        <img className='vehicle-item-image' src={image} alt={name || 'Vehicle'} />
        {/* Hourly mode: show - 1 +, Datewise: show only remove icon if in cart */}
        {rentalMode === 'hourly' ? (
          !inCart ? (
            <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="Add" />
          ) : (
            <div className="vehicle-item-counter">
              <img src={assets.remove_icon_red} onClick={() => removeFromCart(id)} alt="Remove" />
              <p>{cartItems[id]}</p>
              <img src={assets.add_icon_green} onClick={() => addToCart(id)} alt="Add More" />
            </div>
          )
        ) : (
          // Datewise mode
          !inCart ? (
            <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="Add" />
          ) : (
            <img
              className='add'
              src={assets.remove_icon_red}
              onClick={() => removeFromCart(id)}
              alt="Remove from cart"
              title="Remove from cart"
            />
          )
        )}
      </div>
      <div className="vehicle-item-info">
        <div className="vehicle-item-name-rating">
          <p>{name || 'Unnamed Vehicle'}</p> <img src={assets.rating_stars} alt="Rating" />
        </div>
        <p className="vehicle-item-desc">{desc || 'No description available'}</p>
        <p className="vehicle-item-price">{currency || '₹'}{price || 'N/A'}/hr</p>
        {/* Show rental duration if datewise */}
        {rentalMode === 'datewise' && inCart && (
          <p className="vehicle-item-datewise-info">
            <span>For {rentalHours} hour{rentalHours > 1 ? 's' : ''} (datewise)</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default VehicleItem;
