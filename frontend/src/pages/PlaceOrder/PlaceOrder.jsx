import React, { useContext, useEffect, useState } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../Context/StoreContext';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const PlaceOrder = () => {
  const [payment, setPayment] = useState("cod");
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  });

  const {
    getTotalCartAmount,
    token,
    vehicle_list,
    cartItems,
    url,
    setCartItems,
    currency,
    deliveryCharge
  } = useContext(StoreContext);

  const navigate = useNavigate();

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const placeOrder = async (e) => {
    e.preventDefault();
    let orderItems = [];

    vehicle_list.forEach((vehicle) => {
      if (cartItems[vehicle._id] > 0) {
        const itemInfo = {
          vehicleId: vehicle._id,
          name: vehicle.name,
          hourlyRate: vehicle.hourlyRate,
          durationHours: cartItems[vehicle._id] // Still storing this for record keeping
        };
        orderItems.push(itemInfo);
      }
    });

    const totalAmount = getTotalCartAmount() + deliveryCharge;

    const orderData = {
      address: data,
      items: orderItems,
      amount: totalAmount, // ✅ Pass exact total to backend
    };

    try {
      if (payment === "stripe") {
        const response = await axios.post(url + "/api/order/place", orderData, {
          headers: { token }
        });

        if (response.data.success) {
          window.location.replace(response.data.session_url);
        } else {
          toast.error("Payment failed. Please try again.");
        }
      } else {
        const response = await axios.post(url + "/api/order/placecod", orderData, {
          headers: { token }
        });

        if (response.data.success) {
          navigate("/myrentals");
          toast.success(response.data.message);
          setCartItems({});
        } else {
          toast.error("Booking failed. Please try again.");
        }
      }
    } catch (err) {
      toast.error("Something went wrong while placing the booking.");
      console.error(err);
    }
  };

  useEffect(() => {
    if (!token) {
      toast.error("Sign in first to place a booking");
      navigate('/cart');
    } else if (getTotalCartAmount() === 0) {
      navigate('/cart');
    }
  }, [token]);

  return (
    <form onSubmit={placeOrder} className='place-order'>
      <div className="place-order-left">
        <p className='title'>Renter's Information</p>
        <div className="multi-field">
          <input type="text" name='firstName' onChange={onChangeHandler} value={data.firstName} placeholder='First name' required />
          <input type="text" name='lastName' onChange={onChangeHandler} value={data.lastName} placeholder='Last name' required />
        </div>
        <input type="email" name='email' onChange={onChangeHandler} value={data.email} placeholder='Email address' required />
        <input type="text" name='street' onChange={onChangeHandler} value={data.street} placeholder='Street' required />
        <div className="multi-field">
          <input type="text" name='city' onChange={onChangeHandler} value={data.city} placeholder='City' required />
          <input type="text" name='state' onChange={onChangeHandler} value={data.state} placeholder='State' required />
        </div>
        <div className="multi-field">
          <input type="text" name='zipcode' onChange={onChangeHandler} value={data.zipcode} placeholder='Zip code' required />
          <input type="text" name='country' onChange={onChangeHandler} value={data.country} placeholder='Country' required />
        </div>
        <input type="text" name='phone' onChange={onChangeHandler} value={data.phone} placeholder='Phone number' required />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Booking Summary</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p><p>{currency}{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Service Fee</p><p>{currency}{getTotalCartAmount() === 0 ? 0 : deliveryCharge}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b><b>{currency}{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + deliveryCharge}</b>
            </div>
          </div>
        </div>

        <div className="payment">
          <h2>Payment Method</h2>
          <div onClick={() => setPayment("cod")} className="payment-option">
            <img src={payment === "cod" ? assets.checked : assets.un_checked} alt="COD option" />
            <p>Cash on Delivery</p>
          </div>
          <div onClick={() => setPayment("stripe")} className="payment-option">
            <img src={payment === "stripe" ? assets.checked : assets.un_checked} alt="Stripe option" />
            <p>Stripe (Credit / Debit)</p>
          </div>
        </div>

        <button className='place-order-submit' type='submit'>
          {payment === "cod" ? "Book Now" : "Proceed to Payment"}
        </button>
      </div>
    </form>
  );
};

export default PlaceOrder;
