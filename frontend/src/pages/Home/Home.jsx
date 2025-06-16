import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'; // Now used for vehicle type filter
import VehicleDisplay from '../../components/VehicleDisplay/VehicleDisplay'; // Changed from FoodDisplay
import AppDownload from '../../components/AppDownload/AppDownload';

const Home = () => {
  const [category, setCategory] = useState('All'); // e.g., "All", "Cars", "Bikes", etc.

  return (
    <>
      <Header />
      <ExploreMenu setCategory={setCategory} category={category} />
      <VehicleDisplay category={category} />
      <AppDownload />
    </>
  );
};

export default Home;
