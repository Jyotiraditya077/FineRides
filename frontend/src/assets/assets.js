// Icons & General Assets
import add_icon_white from './add_icon_white.png';
import add_icon_green from './add_icon_green.png';
import remove_icon_red from './remove_icon_red.png';
import linkedin_icon from './linkedin_icon.png';
import facebook_icon from './facebook_icon.png';
import twitter_icon from './twitter_icon.png';
import cross_icon from './cross_icon.png';
import selector_icon from './selector_icon.png';
import rating_stars from './rating_stars.png';
import profile_icon from './profile_icon.png';
import bag_icon from './bag_icon.png';
import logout_icon from './logout_icon.png';
import parcel_icon from './parcel_icon.png';
import checked from './checked.png';
import un_checked from './un_checked.png';
import search_icon from './search_icon.png';
import logo from './logo.png';
import logo_2 from './logo-2.jpg';
import logo_3 from './logo-3.png';

// Menu Thumbnails
import bike_menu_3 from './bike_menu_3.png';
import suv_menu_1 from './suv_menu_1.png';
import sedan_menu_2 from './sedan_menu_2.png';

// Vehicle Images
import bike_1 from './bike_1.avif';
import bike_2 from './bike_2.avif';
import bike_3 from './bike_3.avif';
import bike_4 from './bike_4.avif';
import bike_5 from './bike_5.avif';
import bike_6 from './bike_6.avif';
import bike_7 from './bike_7.avif';
import bike_8 from './bike_8.avif';
import bike_9 from './bike_9.avif';
import bike_10 from './bike_10.avif';
import bike_11 from './bike_11.avif';
import bike_12 from './bike_12.avif';
import bike_13 from './bike_13.avif';
import bike_14 from './bike_14.avif';
import bike_15 from './bike_15.avif';
import bike_16 from './bike_16.avif';

import suv_car_1 from './suv_car_1.avif';
import suv_car_2 from './suv_car_2.avif';
import suv_car_3 from './suv_car_3.avif';
import suv_car_4 from './suv_car_4.avif';
import suv_car_5 from './suv_car_5.avif';
import suv_car_6 from './suv_car_6.webp';
import suv_car_7 from './suv_car_7.avif';
import suv_car_8 from './suv_car_8.avif';
import suv_car_9 from './suv_car_9.avif';
import suv_car_10 from './suv_car_10.avif';
import suv_car_11 from './suv_car_11.avif';

import sedan_car_12 from './sedan_car_12.avif';
import sedan_car_13 from './sedan_car_13.avif';
import sedan_car_14 from './sedan_car_14.webp';
import sedan_car_15 from './sedan_car_15.avif';
import sedan_car_16 from './sedan_car_16.avif';

export const assets = {
  logo,
  logo_2,
  logo_3,
  add_icon_white,
  add_icon_green,
  remove_icon_red,
  linkedin_icon,
  facebook_icon,
  twitter_icon,
  cross_icon,
  selector_icon,
  rating_stars,
  profile_icon,
  bag_icon,
  logout_icon,
  parcel_icon,
  checked,
  un_checked,
  search_icon,
};

// Category Menus
export const menu_list = [
  {
    menu_name: 'Bike',
    menu_image: bike_menu_3,
  },
  {
    menu_name: 'SUV',
    menu_image: suv_menu_1,
  },
  {
    menu_name: 'Sedan',
    menu_image: sedan_menu_2,
  },
];

// Vehicle Listings
export const vehicle_list = [
  // Bikes
  { _id: 'b1', name: 'Honda SP 125', image: bike_1, price: 60,
    description: "The Honda SP125 is the company’s sportiest 125cc commuter bike.", category: 'Bike' },
  { _id: 'b2', name: 'Honda Shine', image: bike_2, price: 60,
    description: "The highest-selling bike in the 125cc segment in India is the Honda Shine 125.", category: 'Bike' },
  { _id: 'b3', name: 'Honda Hornet 2.0', image: bike_3, price: 60,
    description: "The Honda Hornet is a sub-200cc offered by the Japanese two-wheeler manufacturer.", category: 'Bike' },
  { _id: 'b4', name: 'Honda Unicorn', image: bike_4, price: 60,
    description: "The Honda Unicorn is a premium commuter known for its smooth engine, fuel efficiency.", category: 'Bike' },
  { _id: 'b5', name: 'Honda SP160', image: bike_5,  price: 60,
    description: "The Honda SP160 is a sporty commuter bike which comes with a distinct styling.", category: 'Bike' },
  { _id: 'b6', name: 'RE Classic 350', image: bike_6, price: 160,
    description: "The Royal Enfield Classic 350 is the best-selling Royal Enfield bike in India.", category: 'Bike' },
  { _id: 'b7', name: 'RE Hunter 350', image: bike_7, price: 160,
    description: "The Royal Enfield Hunter 350 is the smallest and lightest bike the company makes.", category: 'Bike' },
  { _id: 'b8', name: 'RE GT 650', image: bike_8, price: 200,
    description: "The Royal Enfield Continental GT is a retro cafe-racer.", category: 'Bike' },
  { _id: 'b9', name: 'RE Meteor 350', image: bike_9, price: 200,
    description: "The Royal Enfield Meteor 350 is a  350cc cruiser.", category: 'Bike' },
  { _id: 'b10', name: 'KTM 200 Duke', image: bike_10, price: 200,
    description: "The Duke 200 is one of the first offerings from the Austrian manufacturer in India.", category: 'Bike' },
  { _id: 'b11', name: 'KTM 250 Duke', image: bike_11, price: 200,
    description: "The KTM 250 Duke is the performance-oriented naked street bike in the Duke series.", category: 'Bike' },
  { _id: 'b12', name: 'KTM RC 390', image: bike_12, price: 200,
    description: "The KTM RC 390 is a sport bike with an aggressive riding posture", category: 'Bike' },
  { _id: 'b13', name: 'MT 15 V2', image: bike_13, price: 80,
    description: "The Yamaha MT-15 is the naked version of the company’s baby sportsbike", category: 'Bike' },
  { _id: 'b14', name: 'R15 V4', image: bike_14, price: 100,
    description: "The Yamaha R15 V4 is one of the best 150cc sport bikes in India.", category: 'Bike' },
  { _id: 'b15', name: 'Aerox 155', image: bike_15, price: 100,
    description: "The Yamaha Aerox 155 is a sporty maxi-style scooter. ", category: 'Bike' },
  { _id: 'b16', name: 'Activa 6G', image: bike_16, price: 100,
    description: "The Honda Activa 110 is the best selling scooter in India. ", category: 'Bike' },

  // SUVs
  { _id: 's1', name: 'Toyota Fortuner', image: suv_car_1, price: 900,
    description: "The Toyota Fortuner is one of the most beloved SUVs in India, known for its reliability.", category: 'SUV' },
  { _id: 's2', name: 'Land Cruiser 300', image: suv_car_2, price: 1000,
    description: "The Toyota Land Cruiser 300 is one of the premium SUVs in India.", category: 'SUV' },
  { _id: 's3', name: 'Toyota Hyryder', image: suv_car_3, price: 500,
    description: "The Toyota Hyryder is a compact SUV that is offered with mild hybrid, strong hybrid.", category: 'SUV' },
  { _id: 's4', name: 'Fortuner Legender', image: suv_car_4, price: 900,
    description: "The Toyota Fortuner Legender is a full-size, SUV that offers impressive performance.", category: 'SUV' },
  { _id: 's5', name: 'Toyota Taisor', image: suv_car_5, price: 400,
    description: "The Toyota Taisor, a compact SUV based on the Maruti Suzuki Fronx.", category: 'SUV' },
  { _id: 's6', name: 'Tata Curvv', image: suv_car_6, price: 600,
    description: "The Tata Curvv 2025 is an SUV-coupe that is based on the Tata Nexon", category: 'SUV' },
  { _id: 's7', name: 'Tata Harrier', image: suv_car_7, price: 600,
    description: "The Tata Harrier 2025 is the carmaker’s midsize SUV that has a striking design.", category: 'SUV' },
  { _id: 's8', name: 'Kia Seltos', image: suv_car_8, price: 700,
    description: "The Kia Seltos is known for its design and an upmarket cabin that is feature loaded. ", category: 'SUV' },
  { _id: 's9', name: 'Kia Sonet', image: suv_car_9, price: 600,
    description: "The Kia Sonet is a stylish, feature-loaded sub-4metre SUV.", category: 'SUV' },
  { _id: 's10', name: 'Mahindra XUV700', image: suv_car_10, price: 700,
    description: "The XUV700 is a flagship SUV in lineup that offers commanding road presence.", category: 'SUV' },
  { _id: 's11', name: 'Mahindra Thar', image: suv_car_11, price: 700,
    description: " The Mahindra Thar is a cool lifestyle off-road SUV.", category: 'SUV' },

  // Sedans
  { _id: 'sd1', name: 'Maruti Dzire', image: sedan_car_12, price: 400,
    description: " Maruti Suzuki’s most popular sedan is now in an all-new generation. ", category: 'Sedan' },
  { _id: 'sd2', name: 'Maruti Ciaz', image: sedan_car_13, price: 400,
    description: "The Maruti Ciaz is a compact sedan that is known for its affordability and comfort.", category: 'Sedan' },
  { _id: 'sd3', name: 'BMW M5', image: sedan_car_14, price: 1000,
    description: "BMW M5 is a comportable high-performance luxury sedan.", category: 'Sedan' },
  { _id: 'sd4', name: 'Volvo S90', image: sedan_car_15, price: 900,
    description: "Volvo S90 is a luxury sedan that is known for its comfort and safety features.", category: 'Sedan' },
  { _id: 'sd5', name: 'Skoda Slavia', image: sedan_car_16, price: 600,
    description: "The Skoda Slavia is compact sedan with sleek, modern looks and high safety rating.", category: 'Sedan' },
];
