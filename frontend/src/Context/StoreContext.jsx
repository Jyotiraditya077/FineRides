import { createContext, useEffect, useState } from "react";
import { vehicle_list as dummyVehicles, menu_list } from "../assets/assets";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const url = "https://finerides-backend-1uiz.onrender.com";

  const [vehicleList, setVehicleList] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState("");

  const currency = "₹";
  const deliveryCharge = 0;

  // Save cart to localStorage
  const saveCartLocally = (cartData) => {
    try {
      localStorage.setItem("guestCart", JSON.stringify(cartData));
    } catch (err) {
      console.error("Error saving cart to localStorage", err);
    }
  };

  const loadLocalCart = () => {
    try {
      const localCart = localStorage.getItem("guestCart");
      return localCart ? JSON.parse(localCart) : {};
    } catch (err) {
      console.error("Error loading local cart", err);
      return {};
    }
  };

  const addToCart = async (vehicleId) => {
    setCartItems((prev = {}) => {
      const updated = { ...prev, [vehicleId]: (prev?.[vehicleId] || 0) + 1 };

      if (token) {
        axios.post(`${url}/api/cart/add`, { vehicleId }, { headers: { token } }).catch(console.error);
      } else {
        saveCartLocally(updated);
      }

      return updated;
    });
  };

  const removeFromCart = async (vehicleId) => {
    setCartItems((prev = {}) => {
      const updated = {
        ...prev,
        [vehicleId]: prev[vehicleId] > 1 ? prev[vehicleId] - 1 : 0,
      };
      if (updated[vehicleId] === 0) delete updated[vehicleId];

      if (token) {
        axios.post(`${url}/api/cart/remove`, { vehicleId }, { headers: { token } }).catch(console.error);
      } else {
        saveCartLocally(updated);
      }

      return updated;
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const id in cartItems) {
      try {
        const vehicle = vehicleList.find(
          (v) => v._id === id || v.id?.toString() === id
        );
        if (vehicle && cartItems[id] > 0) {
          const price = vehicle.hourlyRate || vehicle.price || 0;
          totalAmount += price * cartItems[id];
        }
      } catch (error) {
        console.error("Error calculating total:", error);
      }
    }
    return totalAmount;
  };

  const fetchVehicleList = async () => {
    try {
      const response = await axios.get(`${url}/api/vehicle/list`);
      const dbVehicles = response.data.data.map((v) => ({
        ...v,
        price: v.hourlyRate,
      }));
      const dummyMapped = dummyVehicles.map((v) => ({
        ...v,
        hourlyRate: v.price,
      }));
      setVehicleList([...dummyMapped, ...dbVehicles]);
    } catch (err) {
      console.error("Failed to fetch vehicles", err);
      const fallback = dummyVehicles.map((v) => ({
        ...v,
        hourlyRate: v.price,
      }));
      setVehicleList(fallback);
    }
  };

  const loadCartData = async (authToken) => {
    try {
      const response = await axios.post(
        `${url}/api/cart/get`,
        {},
        { headers: { token: authToken } }
      );
      const data = response?.data?.cartData || {};
      setCartItems(data);
    } catch (err) {
      console.error("Failed to load cart data", err);
      setCartItems({});
    }
  };

  useEffect(() => {
    const initialize = async () => {
      await fetchVehicleList();

      const savedToken = localStorage.getItem("token");
      if (savedToken) {
        setToken(savedToken);
        await loadCartData(savedToken);
      } else {
        const localCart = loadLocalCart();
        setCartItems(localCart || {});
      }
    };

    initialize();
  }, []);

  const contextValue = {
    url,
    vehicle_list: vehicleList,
    menu_list,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    token,
    setToken,
    loadCartData,
    setCartItems,
    currency,
    deliveryCharge,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
