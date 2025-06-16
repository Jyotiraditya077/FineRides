import React, { useContext } from 'react';
import './ExploreMenu.css';
import { StoreContext } from '../../Context/StoreContext';

const ExploreMenu = ({ category, setCategory }) => {
  const { menu_list } = useContext(StoreContext);

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our rides</h1>
      <p className='explore-menu-text'>
        Choose from a diverse range of vehicles. Whether it's a rugged SUV, a sleek Sedan, or a swift Bike, we've got something to match your ride preferences.
      </p>
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
