import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../Context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const {
    cartItems,
    vehicle_list,
    removeFromCart,
    getTotalCartAmount,
    url,
    currency,
    deliveryCharge,
    rentalMode,
    rentalHours
  } = useContext(StoreContext);

  const navigate = useNavigate();

  // Build items with rentalDuration for checkout
  const checkoutItems = vehicle_list
    .filter((item) => cartItems[item._id] > 0)
    .map((item) => ({
      id: item._id,
      name: item.name,
      rentalDuration: cartItems[item._id]
    }));

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Vehicle</p>
          <p>Name</p>
          <p>Price/hr</p>
          <p>Hours</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {vehicle_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            // Determine hours and total based on mode
            const hours = rentalMode === 'datewise' ? rentalHours : cartItems[item._id];
            const total = (item.price || item.hourlyRate) * hours;
            return (
              <div key={index}>
                <div className="cart-items-title cart-items-item">
                  <img src={url + "/images/" + item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>{currency}{item.price}</p>
                  <div>{hours}{rentalMode === 'datewise' && <span style={{fontSize:'12px',color:'#3b82f6'}}> (datewise)</span>}</div>
                  <p>{currency}{total}</p>
                  <p className='cart-items-remove-icon' onClick={() => removeFromCart(item._id)}>x</p>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{currency}{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Service Fee</p>
              <p>{currency}{getTotalCartAmount() === 0 ? 0 : deliveryCharge}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{currency}{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + deliveryCharge}</b>
            </div>
          </div>
          <button onClick={() => navigate('/rent', { state: { checkoutItems } })}>
            PROCEED TO CHECKOUT
          </button>
        </div>

        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, enter it here:</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='Promo code' />
              <button>Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
