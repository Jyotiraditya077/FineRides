import React, { useEffect, useState } from 'react';
import './List.css';
import { url, currency } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const List = () => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/vehicle/list`);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error("Error fetching vehicles");
      }
    } catch (err) {
      toast.error("Server error while fetching list");
      console.error("Fetch list error:", err);
    }
  };

  const removeVehicle = async (vehicleId) => {
    try {
      const response = await axios.post(`${url}/api/vehicle/remove/${vehicleId}`);
      if (response.data.success) {
        toast.success(response.data.message);
        fetchList(); // Refresh after deletion
      } else {
        toast.error("Error removing vehicle");
      }
    } catch (err) {
      toast.error("Server error while removing vehicle");
      console.error("Remove vehicle error:", err);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className='list add flex-col'>
      <p>All Vehicles List</p>
      <div className='list-table'>
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price/hr</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => (
          <div key={index} className='list-table-format'>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>{currency}{item.hourlyRate}</p>
            <p className='cursor' onClick={() => removeVehicle(item._id)}>x</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
