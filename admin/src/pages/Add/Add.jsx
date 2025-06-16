import React, { useState } from 'react';
import './Add.css';
import { assets, url } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: '',
    description: '',
    hourlyRate: '', // ✅ Changed from price
    category: 'Bike',
  });

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (!image) {
      toast.error('Image not selected');
      return;
    }

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('hourlyRate', Number(data.hourlyRate)); // ✅ Correct field name
    formData.append('category', data.category);
    formData.append('image', image);

    try {
      const response = await axios.post(`${url}/api/vehicle/add`, formData);
      if (response.data.success) {
        toast.success(response.data.message);
        setData({
          name: '',
          description: '',
          hourlyRate: '',
          category: data.category,
        });
        setImage(false);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong. Try again.");
      console.error(error);
    }
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className='add-img-upload flex-col'>
          <p>Upload image</p>
          <input
            onChange={(e) => {
              setImage(e.target.files[0]);
              e.target.value = '';
            }}
            type='file'
            accept='image/*'
            id='image'
            hidden
          />
          <label htmlFor='image'>
            <img
              src={!image ? assets.upload_area : URL.createObjectURL(image)}
              alt=''
            />
          </label>
        </div>

        <div className='add-product-name flex-col'>
          <p>Vehicle Name</p>
          <input
            name='name'
            onChange={onChangeHandler}
            value={data.name}
            type='text'
            placeholder='Type here'
            required
          />
        </div>

        <div className='add-product-description flex-col'>
          <p>Vehicle Description</p>
          <textarea
            name='description'
            onChange={onChangeHandler}
            value={data.description}
            rows={6}
            placeholder='Write content here'
            required
          />
        </div>

        <div className='add-category-price'>
          <div className='add-category flex-col'>
            <p>Vehicle Category</p>
            <select name='category' onChange={onChangeHandler} value={data.category}>
              <option value='Bike'>Bike</option>
              <option value='SUV'>SUV</option>
              <option value='Sedan'>Sedan</option>
            </select>
          </div>

          <div className='add-price flex-col'>
            <p>Price Per Hour</p>
            <input
              type='number'
              name='hourlyRate' // ✅ Correct field name
              onChange={onChangeHandler}
              value={data.hourlyRate}
              placeholder='500'
              required
            />
          </div>
        </div>

        <button type='submit' className='add-btn'>
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
